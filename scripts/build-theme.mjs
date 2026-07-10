import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { rm, rename } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const unoCli = join(root, "node_modules", "@unocss", "cli", "bin", "unocss.mjs");
const unoCss = "templates/assets/css/uno.css";
const unoCssTemp = `templates/assets/css/uno.${process.pid}.tmp.css`;

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: root,
      stdio: "inherit",
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${command} exited with code ${code}`));
    });
  });
}

if (!existsSync(unoCli)) {
  console.error("UnoCSS CLI is not installed. Run pnpm install first.");
  process.exit(1);
}

await import("./generate-iconify-icons.mjs");

await run(process.execPath, [
  unoCli,
  "templates/**/*.html",
  "templates/assets/js/**/*.js",
  "--config",
  "uno.config.ts",
  "--out-file",
  unoCssTemp,
  "--minify",
]);

await rename(join(root, unoCssTemp), join(root, unoCss));
await rm(join(root, unoCssTemp), { force: true });

await import("./validate-theme.mjs");
