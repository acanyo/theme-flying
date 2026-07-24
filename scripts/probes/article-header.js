(() => {
  const select = (...selectors) =>
    selectors.map((selector) => document.querySelector(selector)).find(Boolean);
  const describe = (...selectors) => {
    const element = select(...selectors);
    if (!element) return null;
    const rect = element.getBoundingClientRect();
    const computed = getComputedStyle(element);

    return {
      className: String(element.className || ""),
      rect: {
        height: rect.height,
        width: rect.width,
        x: rect.x,
        y: rect.y,
      },
      styles: {
        backgroundColor: computed.backgroundColor,
        display: computed.display,
        fontSize: computed.fontSize,
        fontWeight: computed.fontWeight,
        lineHeight: computed.lineHeight,
        marginTop: computed.marginTop,
        overflow: computed.overflow,
        transition: computed.transition,
        webkitLineClamp: computed.webkitLineClamp,
      },
      text: element.textContent.replace(/\s+/g, " ").trim().slice(0, 400),
    };
  };

  return {
    actions: describe(".post-header-buttons", ".fly-post-page-actions"),
    commentButton: describe(
      ".post-comments-button",
      "[data-fly-comments-open]",
    ),
    excerpt: describe(".post-excerpt", ".fly-post-page-excerpt"),
    header: describe(".post-header", ".fly-post-page-header"),
    info: describe(".post-header-info", ".fly-post-page-header-info"),
    meta: describe(".post-meta", ".fly-post-page-meta"),
    tags: describe(".post-tags", ".fly-post-page-tags"),
    title: describe(".post-title", ".fly-post-page-title"),
    viewport: { height: innerHeight, width: innerWidth },
  };
})();
