import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import mingcute from "../node_modules/@iconify-json/mingcute/icons.json" with { type: "json" };
import phosphor from "../node_modules/@iconify-json/ph/icons.json" with { type: "json" };

const outputDir = join(process.cwd(), "public", "assets", "icons", "iconify");

const iconSets = {
  mingcute,
  phosphor,
};

const icons = {
  "arrow-down": ["mingcute", "down-line"],
  "arrow-right": ["mingcute", "arrow-right-line"],
  close: ["mingcute", "close-line"],
  "enter-door": ["phosphor", "sign-in"],
  globe: ["mingcute", "globe-line"],
  loader: ["mingcute", "loading-3-line"],
  mail: ["mingcute", "mail-line"],
  menu: ["mingcute", "menu-line"],
  mode: ["phosphor", "circle-half-fill"],
  moon: ["phosphor", "moon"],
  qq: ["mingcute", "qq-line"],
  search: ["mingcute", "search-line"],
  sun: ["phosphor", "sun"],
  user: ["phosphor", "user"],
  wechat: ["mingcute", "wechat-line"],
};

function svgFor(setName, iconName) {
  const iconSet = iconSets[setName];
  const icon = iconSet?.icons[iconName];

  if (!icon) {
    throw new Error(`Missing Iconify icon: ${setName}:${iconName}`);
  }

  const width = icon.width || iconSet.width || 24;
  const height = icon.height || iconSet.height || 24;
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
  Object.entries(icons).map(([fileName, [setName, iconName]]) =>
    writeIfChanged(
      join(outputDir, `${fileName}.svg`),
      svgFor(setName, iconName),
    ),
  ),
);
