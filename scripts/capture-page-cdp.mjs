import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";

const DEFAULT_CHROME =
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

function readArguments(argv) {
  const options = {
    chrome: process.env.CHROME_PATH || DEFAULT_CHROME,
    fullPage: false,
    height: 844,
    width: 390,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--full-page") {
      options.fullPage = true;
      continue;
    }

    if (!argument.startsWith("--")) continue;
    const name = argument.slice(2);
    options[name] = argv[index + 1];
    index += 1;
  }

  options.width = Number(options.width);
  options.height = Number(options.height);
  if (!options.url || !options.output) {
    throw new Error(
      "Usage: --url <url> --output <png> [--width 390 --height 844]",
    );
  }

  return options;
}

function withTimeout(promise, duration, label) {
  let timeoutId;
  const timeout = new Promise((_, rejectTimeout) => {
    timeoutId = setTimeout(
      () => rejectTimeout(new Error(`${label} timed out after ${duration}ms`)),
      duration,
    );
  });

  return Promise.race([promise, timeout]).finally(() =>
    clearTimeout(timeoutId),
  );
}

async function waitForDevToolsPort(profileDirectory) {
  const portFile = join(profileDirectory, "DevToolsActivePort");
  for (let attempt = 0; attempt < 150; attempt += 1) {
    try {
      const [port, browserPath] = (await readFile(portFile, "utf8")).split(
        /\r?\n/,
      );
      if (port && browserPath) return { port, browserPath };
    } catch {
      // Chrome creates the port file asynchronously.
    }
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 100));
  }

  throw new Error("Chrome did not expose a DevTools port in time");
}

function createCdpClient(webSocketUrl) {
  const socket = new WebSocket(webSocketUrl);
  const pending = new Map();
  const eventWaiters = new Map();
  let commandId = 0;

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(String(event.data));
    if (message.id) {
      const request = pending.get(message.id);
      if (!request) return;
      pending.delete(message.id);
      if (message.error) request.reject(new Error(message.error.message));
      else request.resolve(message.result);
      return;
    }

    const waiters = eventWaiters.get(message.method);
    if (!waiters?.length) return;
    eventWaiters.delete(message.method);
    for (const resolveEvent of waiters) resolveEvent(message.params);
  });

  const ready = new Promise((resolveReady, rejectReady) => {
    socket.addEventListener("open", resolveReady, { once: true });
    socket.addEventListener(
      "error",
      () => rejectReady(new Error("Could not connect to Chrome DevTools")),
      { once: true },
    );
  });

  return {
    close: () => socket.close(),
    async send(method, params = {}) {
      await ready;
      commandId += 1;
      const id = commandId;
      const response = new Promise((resolveResponse, rejectResponse) => {
        pending.set(id, { reject: rejectResponse, resolve: resolveResponse });
      });
      socket.send(JSON.stringify({ id, method, params }));
      return response;
    },
    waitFor(method) {
      return new Promise((resolveEvent) => {
        const waiters = eventWaiters.get(method) || [];
        waiters.push(resolveEvent);
        eventWaiters.set(method, waiters);
      });
    },
  };
}

const options = readArguments(process.argv.slice(2));
const profileDirectory = join(tmpdir(), `theme-flying-cdp-${randomUUID()}`);
const outputPath = resolve(options.output);
await mkdir(profileDirectory, { recursive: true });
await mkdir(dirname(outputPath), { recursive: true });

const chrome = spawn(
  options.chrome,
  [
    "--headless=new",
    "--disable-background-networking",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-default-browser-check",
    "--no-first-run",
    "--remote-debugging-port=0",
    `--user-data-dir=${profileDirectory}`,
    "about:blank",
  ],
  { stdio: "ignore", windowsHide: true },
);

let client;
try {
  const { port } = await waitForDevToolsPort(profileDirectory);
  const targets = await fetch(`http://127.0.0.1:${port}/json/list`).then(
    (response) => response.json(),
  );
  const pageTarget = targets.find((target) => target.type === "page");
  if (!pageTarget?.webSocketDebuggerUrl) {
    throw new Error("Chrome did not create a page target");
  }

  client = createCdpClient(pageTarget.webSocketDebuggerUrl);
  await Promise.all([
    client.send("Page.enable"),
    client.send("Runtime.enable"),
  ]);
  await client.send("Emulation.setDeviceMetricsOverride", {
    deviceScaleFactor: 1,
    height: options.height,
    mobile: false,
    screenHeight: options.height,
    screenWidth: options.width,
    width: options.width,
  });

  const loaded = client.waitFor("Page.loadEventFired");
  await client.send("Page.navigate", { url: options.url });
  await withTimeout(loaded, 15_000, "Page load").catch(() => {});
  await client.send("Runtime.evaluate", {
    awaitPromise: true,
    expression: `Promise.race([
      Promise.all([
        document.fonts?.ready,
        ...Array.from(document.images, (image) => image.complete ? null : image.decode().catch(() => null))
      ]),
      new Promise((resolve) => setTimeout(resolve, 2000))
    ]).then(() => new Promise((resolve) => setTimeout(resolve, 300)))`,
  });

  if (options["hover-selector"]) {
    const hovered = await client.send("Runtime.evaluate", {
      expression: `(() => {
        const element = document.querySelector(${JSON.stringify(options["hover-selector"])});
        if (!element) return null;
        element.scrollIntoView({ block: 'center', inline: 'center' });
        const rect = element.getBoundingClientRect();
        return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
      })()`,
      returnByValue: true,
    });
    if (!hovered.result.value) {
      throw new Error(`Hover selector not found: ${options["hover-selector"]}`);
    }
    await client.send("Input.dispatchMouseEvent", {
      type: "mouseMoved",
      x: hovered.result.value.x,
      y: hovered.result.value.y,
    });
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 350));
  }

  const metricsResult = await client.send("Runtime.evaluate", {
    expression: `JSON.stringify((() => {
      const rect = (selector) => {
        const element = document.querySelector(selector);
        if (!element) return null;
        const value = element.getBoundingClientRect();
        return { x: value.x, y: value.y, width: value.width, height: value.height };
      };
      return {
        bodyScrollWidth: document.body.scrollWidth,
        devicePixelRatio,
        documentScrollWidth: document.documentElement.scrollWidth,
        innerWidth,
        page: rect('.fly-post-page'),
        header: rect('.fly-post-page-header'),
        meta: rect('.fly-post-page-meta'),
        actions: rect('.fly-post-page-actions'),
        media: rect('.fly-post-page-media'),
        grid: rect('.fly-post-page-grid')
      };
    })())`,
    returnByValue: true,
  });
  const metrics = JSON.parse(metricsResult.result.value);
  let probe = null;
  if (options["probe-file"]) {
    const expression = await readFile(resolve(options["probe-file"]), "utf8");
    const probeResult = await client.send("Runtime.evaluate", {
      awaitPromise: true,
      expression,
      returnByValue: true,
    });
    if (probeResult.exceptionDetails) {
      throw new Error(probeResult.exceptionDetails.text || "Page probe failed");
    }
    probe = probeResult.result.value;
  }
  let probeOutputPath = null;
  if (options["probe-output"] && probe != null) {
    probeOutputPath = resolve(options["probe-output"]);
    await mkdir(dirname(probeOutputPath), { recursive: true });
    await writeFile(
      probeOutputPath,
      `${JSON.stringify(probe, null, 2)}\n`,
      "utf8",
    );
  }

  let clip;
  if (options.fullPage) {
    const layout = await client.send("Page.getLayoutMetrics");
    clip = {
      height: Math.ceil(layout.cssContentSize.height),
      scale: 1,
      width: options.width,
      x: 0,
      y: 0,
    };
  }
  const screenshot = await client.send("Page.captureScreenshot", {
    captureBeyondViewport: options.fullPage,
    clip,
    format: "png",
    fromSurface: true,
  });
  await writeFile(outputPath, Buffer.from(screenshot.data, "base64"));
  process.stdout.write(
    `${JSON.stringify({ metrics, probe: probeOutputPath ? probeOutputPath : probe }, null, options["probe-file"] ? 2 : 0)}\n${outputPath}\n`,
  );
} finally {
  try {
    await client?.send("Browser.close");
  } catch {
    chrome.kill();
  }
  client?.close();
  chrome.kill();
  const resolvedProfile = resolve(profileDirectory);
  const resolvedTemp = resolve(tmpdir());
  if (resolvedProfile.startsWith(`${resolvedTemp}\\theme-flying-cdp-`)) {
    await rm(resolvedProfile, { force: true, recursive: true }).catch(() => {});
  }
}
