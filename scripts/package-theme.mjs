import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { readdir, rename, rm } from "node:fs/promises";
import { join, resolve, sep } from "node:path";

const root = resolve(process.cwd());
const distDirectory = resolve(root, "dist");
const packageCli = join(
  root,
  "node_modules",
  "@halo-dev",
  "theme-package-cli",
  "index.js",
);
const previewFileNames = [
  "screenshot.png",
  "screenshot.jpeg",
  "screenshot.jpg",
  "screenshot.webp",
];

function assertWorkspacePath(path) {
  if (!path.startsWith(`${root}${sep}`)) {
    throw new Error(
      `Refusing to modify a path outside the theme workspace: ${path}`,
    );
  }
}

function run(command, args) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, {
      cwd: root,
      stdio: "inherit",
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolvePromise();
        return;
      }

      reject(new Error(`${command} exited with code ${code}`));
    });
  });
}

async function excludePreviewFiles() {
  const movedFiles = [];

  for (const fileName of previewFileNames) {
    const sourcePath = join(root, fileName);
    if (!existsSync(sourcePath)) {
      continue;
    }

    const backupPath = join(root, `.theme-package-preview-${fileName}`);
    if (existsSync(backupPath)) {
      throw new Error(`Temporary preview backup already exists: ${backupPath}`);
    }

    await rename(sourcePath, backupPath);
    movedFiles.push({ sourcePath, backupPath });
  }

  return movedFiles;
}

async function restorePreviewFiles(movedFiles) {
  for (const { sourcePath, backupPath } of movedFiles) {
    if (existsSync(backupPath)) {
      await rename(backupPath, sourcePath);
    }
  }
}

if (!existsSync(packageCli)) {
  console.error(
    "Halo theme package CLI is not installed. Run pnpm install first.",
  );
  process.exit(1);
}

assertWorkspacePath(distDirectory);
await rm(distDirectory, { recursive: true, force: true });

const movedPreviewFiles = await excludePreviewFiles();

try {
  await run(process.execPath, [packageCli]);
} finally {
  await restorePreviewFiles(movedPreviewFiles);
}

const releaseFiles = (await readdir(distDirectory)).filter((fileName) =>
  fileName.endsWith(".zip"),
);

if (releaseFiles.length !== 1) {
  throw new Error(
    `Expected exactly one theme package in dist, found ${releaseFiles.length}.`,
  );
}

console.log(`Release package ready: dist/${releaseFiles[0]}`);
