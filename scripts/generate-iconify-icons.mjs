import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import mingcute from "../node_modules/@iconify-json/mingcute/icons.json" with { type: "json" };

const outputDir = join(process.cwd(), "public", "assets", "icons", "iconify");

const icons = {
  "arrow-down": "down-line",
  close: "close-line",
  globe: "globe-line",
  loader: "loading-3-line",
  mail: "mail-line",
  menu: "menu-line",
  moon: "moon-line",
  qq: "qq-line",
  search: "search-line",
  sun: "sun-line",
  wechat: "wechat-line",
};

function svgFor(iconName) {
  const icon = mingcute.icons[iconName];

  if (!icon) {
    throw new Error(`Missing @iconify-json/mingcute icon: ${iconName}`);
  }

  const width = icon.width || mingcute.width || 24;
  const height = icon.height || mingcute.height || 24;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">${icon.body}</svg>\n`;
}

async function writeIfChanged(filePath, content) {
  try {
    if ((await readFile(filePath, "utf8")) === content) {
      return;
    }
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }

  await writeFile(filePath, content, "utf8");
}

await mkdir(outputDir, { recursive: true });

await Promise.all(
  Object.entries(icons).map(([fileName, iconName]) =>
    writeIfChanged(join(outputDir, `${fileName}.svg`), svgFor(iconName)),
  ),
);
