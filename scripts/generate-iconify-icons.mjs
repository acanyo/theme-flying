import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import mingcute from "../node_modules/@iconify-json/mingcute/icons.json" with { type: "json" };
import phosphor from "../node_modules/@iconify-json/ph/icons.json" with { type: "json" };

const outputDir = join(process.cwd(), "public", "assets", "icons", "iconify");

const iconSets = {
  mingcute,
  phosphor,
};

const aspectIcons = {
  "arrow-forward": {
    body: '<path d="M13 6.16675L16.8333 10.0001L13 13.8334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.16669 10H16.8333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: "0 0 20 20",
  },
  "arrow-right": {
    body: '<path d="M4.16667 10.0001H15.8333M15.8333 10.0001L11 5.16675M15.8333 10.0001L11 14.8334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: "0 0 20 20",
  },
  close: {
    body: '<path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: "0 0 20 20",
  },
  comment: {
    body: '<path d="M17.4997 9.58333C17.4997 13.4953 14.3283 16.6667 10.4163 16.6667C9.519 16.6667 8.66067 16.4998 7.87065 16.1954C7.72621 16.1398 7.65398 16.112 7.59655 16.0988C7.54006 16.0858 7.49917 16.0803 7.44124 16.0781C7.38234 16.0758 7.31772 16.0825 7.18849 16.0958L2.92097 16.537C2.5141 16.579 2.31067 16.6001 2.19067 16.5268C2.08614 16.4631 2.01495 16.3566 1.996 16.2357C1.97424 16.0968 2.07146 15.9168 2.26588 15.557L3.62893 13.034C3.74118 12.8263 3.79731 12.7223 3.82273 12.6224C3.84783 12.5238 3.85391 12.4527 3.84587 12.3512C3.83774 12.2484 3.79266 12.1147 3.7025 11.8472C3.46289 11.1363 3.33302 10.375 3.33302 9.58333C3.33302 5.67132 6.50433 2.5 10.4163 2.5C14.3283 2.5 17.4997 5.67132 17.4997 9.58333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: "0 0 20 20",
  },
  "enter-door": {
    body: '<path d="M12.5 2.5H13.5C14.9002 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86503C17.5 4.3998 17.5 5.09988 17.5 6.5V13.5C17.5 14.9002 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9002 17.5 13.5 17.5H12.5M8.33333 5.83333L12.5 10M12.5 10L8.33333 14.1667M12.5 10H2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: "0 0 20 20",
  },
  facebook: {
    body: '<path d="M24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 17.625 3.87656 22.35 9.10312 23.6484V15.6656H6.62812V12H9.10312V10.4203C9.10312 6.3375 10.95 4.44375 14.9625 4.44375C15.7219 4.44375 17.0344 4.59375 17.5734 4.74375V8.0625C17.2922 8.03437 16.8 8.01562 16.1859 8.01562C14.2172 8.01562 13.4578 8.76094 13.4578 10.6969V12H17.3766L16.7016 15.6656H13.4531V23.9109C19.3969 23.1938 24 18.1359 24 12Z" fill="currentColor"/>',
    viewBox: "0 0 24 24",
  },
  globe: {
    body: '<path d="M1.66666 10.0001H18.3333M1.66666 10.0001C1.66666 14.6024 5.39762 18.3334 10 18.3334M1.66666 10.0001C1.66666 5.39771 5.39762 1.66675 10 1.66675M18.3333 10.0001C18.3333 14.6024 14.6023 18.3334 10 18.3334M18.3333 10.0001C18.3333 5.39771 14.6023 1.66675 10 1.66675M10 18.3334C12.0844 16.0514 13.269 13.0901 13.3333 10.0001C13.269 6.91011 12.0844 3.94871 10 1.66675M10 18.3334C7.9156 16.0514 6.73104 13.0901 6.66666 10.0001C6.73104 6.91011 7.9156 3.94871 10 1.66675" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: "0 0 20 20",
  },
  link: {
    body: '<path d="M8.33332 10.8332C8.69117 11.3117 9.14775 11.7075 9.67208 11.994C10.1964 12.2805 10.7762 12.4508 11.3722 12.4935C11.9682 12.5362 12.5663 12.4502 13.1261 12.2413C13.6859 12.0326 14.1942 11.7057 14.6167 11.2832L17.1167 8.78325C17.8757 7.99737 18.2956 6.94486 18.2862 5.85238C18.2767 4.7599 17.8384 3.71484 17.0659 2.94231C16.2933 2.16977 15.2483 1.73157 14.1558 1.72208C13.0633 1.71258 12.0108 2.13256 11.225 2.89156L9.79167 4.31656M11.6667 9.16658C11.3087 8.68808 10.8522 8.29223 10.3278 8.00577C9.8035 7.71931 9.22375 7.54896 8.62775 7.50627C8.03182 7.46359 7.43367 7.54958 6.87387 7.7584C6.31407 7.96722 5.80572 8.294 5.38332 8.71658L2.88332 11.2166C2.12433 12.0024 1.70435 13.0549 1.71385 14.1474C1.72334 15.2399 2.16154 16.2849 2.93407 17.0575C3.70661 17.83 4.75167 18.2682 5.84415 18.2777C6.93663 18.2872 7.98914 17.8672 8.775 17.1082L10.2 15.6832" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: "0 0 20 20",
  },
  list: {
    body: '<line x1="1.25" y1="4.25" x2="10.75" y2="4.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="3.25" y1="8.25" x2="12.75" y2="8.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="5.25" y1="12.25" x2="14.75" y2="12.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    viewBox: "0 0 16 16",
  },
  loader: {
    body: '<path opacity="0.1" d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="currentColor" stroke-width="1.5"/><path d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    viewBox: "0 0 20 20",
  },
  mail: {
    body: '<path d="M1.66667 5.83325L8.47075 10.5961C9.02175 10.9818 9.29725 11.1747 9.59692 11.2493C9.86158 11.3153 10.1384 11.3153 10.4031 11.2493C10.7028 11.1747 10.9783 10.9818 11.5293 10.5961L18.3333 5.83325M5.66667 16.6666H14.3333C15.7335 16.6666 16.4335 16.6666 16.9683 16.3941C17.4388 16.1544 17.8212 15.772 18.0608 15.3016C18.3333 14.7668 18.3333 14.0668 18.3333 12.6666V7.33325C18.3333 5.93312 18.3333 5.23305 18.0608 4.69828C17.8212 4.22787 17.4388 3.84542 16.9683 3.60574C16.4335 3.33325 15.7335 3.33325 14.3333 3.33325H5.66667C4.26653 3.33325 3.56647 3.33325 3.03169 3.60574C2.56128 3.84542 2.17883 4.22787 1.93915 4.69828C1.66667 5.23305 1.66667 5.93312 1.66667 7.33325V12.6666C1.66667 14.0668 1.66667 14.7668 1.93915 15.3016C2.17883 15.772 2.56128 16.1544 3.03169 16.3941C3.56647 16.6666 4.26653 16.6666 5.66667 16.6666Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: "0 0 20 20",
  },
  menu: {
    body: '<path d="M4.27271 10H15.7272M4.27271 4H15.7272M4.27271 16H15.7272" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: "0 0 20 20",
  },
  mode: {
    body: '<path d="M8 14.6666C11.6819 14.6666 14.6667 11.6819 14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8 1.33331C4.3181 1.33331 1.33333 4.31808 1.33333 7.99998C1.33333 11.6819 4.3181 14.6666 8 14.6666Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 14.6666C4.3181 14.6666 1.33333 11.6819 1.33333 7.99998C1.33333 4.31808 4.3181 1.33331 8 1.33331V14.6666Z" fill="currentColor"/>',
    viewBox: "0 0 16 16",
  },
  moon: {
    body: '<path d="M18.2957 10.797C17.1482 12.8098 14.9826 14.1668 12.5 14.1668C8.81808 14.1668 5.83333 11.182 5.83333 7.50007C5.83333 5.01727 7.19056 2.85146 9.20358 1.7041C4.97479 2.10506 1.66666 5.66613 1.66666 9.99983C1.66666 14.6023 5.39762 18.3332 10 18.3332C14.3335 18.3332 17.8944 15.0254 18.2957 10.797Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: "0 0 20 20",
  },
  search: {
    body: '<path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: "0 0 20 20",
  },
  share: {
    body: '<path d="M17.5 10V13.5C17.5 14.9002 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9002 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86503 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9002 2.5 13.5V10M13.3333 5.83333L10 2.5M10 2.5L6.66667 5.83333M10 2.5V12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: "0 0 20 20",
  },
  sun: {
    body: '<path d="M9.9999 13.3334C11.8409 13.3334 13.3333 11.841 13.3333 10C13.3333 8.15907 11.8409 6.66669 9.9999 6.66669C8.15895 6.66669 6.66656 8.15907 6.66656 10C6.66656 11.841 8.15895 13.3334 9.9999 13.3334Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.9999 1.66669V3.33336M9.9999 16.6666V18.3334M4.10824 4.10836L5.28324 5.28336M14.7166 14.7166L15.8916 15.8916M1.66656 10H3.33324M16.6666 10H18.3333M5.28324 14.7166L4.10824 15.8916M15.8916 4.10836L14.7166 5.28336" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: "0 0 20 20",
  },
  tag: {
    body: '<path d="M6.66667 6.66675H6.675M1.66667 4.33341V8.06217C1.66667 8.46983 1.66667 8.67366 1.71272 8.8655C1.75354 9.0355 1.82088 9.19808 1.91227 9.34725C2.01533 9.51541 2.15946 9.65958 2.44772 9.94783L8.83825 16.3383C9.82825 17.3283 10.3233 17.8234 10.8941 18.0088C11.3963 18.172 11.9371 18.172 12.4392 18.0088C13.01 17.8234 13.5051 17.3283 14.4951 16.3383L16.3383 14.4952C17.3283 13.5052 17.8233 13.0101 18.0088 12.4392C18.1719 11.9372 18.1719 11.3963 18.0088 10.8942C17.8233 10.3234 17.3283 9.82833 16.3383 8.83833L9.94775 2.4478C9.6595 2.15954 9.51533 2.01541 9.34717 1.91235C9.198 1.82096 9.03542 1.75362 8.86542 1.7128C8.67358 1.66675 8.46975 1.66675 8.0621 1.66675H4.33333C3.39992 1.66675 2.9332 1.66675 2.57668 1.84841C2.26308 2.00819 2.00811 2.26316 1.84833 2.57676C1.66667 2.93328 1.66667 3.39999 1.66667 4.33341ZM7.08333 6.66675C7.08333 6.89686 6.89678 7.08341 6.66667 7.08341C6.43655 7.08341 6.25 6.89686 6.25 6.66675C6.25 6.43663 6.43655 6.25008 6.66667 6.25008C6.89678 6.25008 7.08333 6.43663 7.08333 6.66675Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: "0 0 20 20",
  },
  user: {
    body: '<path d="M2.5 16.6667C4.44649 14.6022 7.08918 13.3333 10 13.3333C12.9108 13.3333 15.5535 14.6022 17.5 16.6667M13.75 6.25C13.75 8.32107 12.0711 10 10 10C7.92893 10 6.25 8.32107 6.25 6.25C6.25 4.17893 7.92893 2.5 10 2.5C12.0711 2.5 13.75 4.17893 13.75 6.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
    viewBox: "0 0 20 20",
  },
  "video-camera": {
    body: '<rect x="14.25" y="3.75" width="12.5" height="12.5" rx="2.25" transform="rotate(90 14.25 3.75)" stroke="currentColor" stroke-width="1.5"/><path d="M14.5 8L18.5 6.5V13.5L14.5 12" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
    viewBox: "0 0 20 20",
  },
};

const icons = {
  "arrow-down": ["mingcute", "down-line"],
  "arrow-forward": ["aspect", "arrow-forward"],
  "arrow-right": ["aspect", "arrow-right"],
  close: ["aspect", "close"],
  comment: ["aspect", "comment"],
  copyright: ["mingcute", "copyright-line"],
  "enter-door": ["aspect", "enter-door"],
  facebook: ["aspect", "facebook"],
  fingerprint: ["mingcute", "fingerprint-line"],
  globe: ["aspect", "globe"],
  link: ["aspect", "link"],
  list: ["aspect", "list"],
  loader: ["aspect", "loader"],
  mail: ["aspect", "mail"],
  menu: ["aspect", "menu"],
  mode: ["aspect", "mode"],
  moon: ["aspect", "moon"],
  qq: ["mingcute", "qq-line"],
  search: ["aspect", "search"],
  share: ["aspect", "share"],
  sun: ["aspect", "sun"],
  tag: ["aspect", "tag"],
  user: ["aspect", "user"],
  "video-camera": ["aspect", "video-camera"],
  wechat: ["mingcute", "wechat-line"],
  "zoom-in": ["phosphor", "magnifying-glass-plus"],
  "zoom-out": ["phosphor", "magnifying-glass-minus"],
};

function svgFor(setName, iconName) {
  if (setName === "aspect") {
    const icon = aspectIcons[iconName];
    if (!icon) {
      throw new Error(`Missing Aspect icon: ${iconName}`);
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${icon.viewBox}" fill="none">${icon.body}</svg>\n`;
  }

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
