(() => {
  const selectors = [
    "html",
    "body",
    "main",
    ".content",
    ".layout-split-image",
    ".layout-split-image img",
    ".layout-split-content",
    ".layout-split-button",
    ".layout-split-content h1",
    ".layout-split-content > p",
    ".layout-split-content form",
    ".layout-split-content input",
    ".layout-split-content form button",
    ".layout-split-content form > p",
    ".layout-split-footer",
    ".footer-copyright",
  ];
  const properties = [
    "display",
    "position",
    "width",
    "height",
    "maxWidth",
    "minHeight",
    "padding",
    "margin",
    "gap",
    "flexDirection",
    "alignItems",
    "justifyContent",
    "backgroundColor",
    "border",
    "borderRadius",
    "boxShadow",
    "color",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "lineHeight",
    "transition",
    "transform",
    "opacity",
    "objectFit",
    "aspectRatio",
  ];
  const output = {
    viewport: [window.innerWidth, window.innerHeight],
    scroll: [
      document.documentElement.scrollWidth,
      document.documentElement.scrollHeight,
    ],
    selectors: {},
  };

  for (const selector of selectors) {
    const element = document.querySelector(selector);
    if (!element) {
      output.selectors[selector] = null;
      continue;
    }

    const computed = getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    const values = {
      rect: {
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
      },
    };
    for (const property of properties) values[property] = computed[property];
    output.selectors[selector] = values;
  }

  return output;
})()
