(() => {
  const styles = (element) => {
    if (!element) return null;
    const computed = getComputedStyle(element);
    return {
      backgroundColor: computed.backgroundColor,
      border: computed.border,
      borderRadius: computed.borderRadius,
      boxShadow: computed.boxShadow,
      color: computed.color,
      display: computed.display,
      height: computed.height,
      maskImage: computed.maskImage,
      opacity: computed.opacity,
      padding: computed.padding,
      position: computed.position,
      transform: computed.transform,
      transition: computed.transition,
      visibility: computed.visibility,
      width: computed.width,
    };
  };
  const describe = (selector) => {
    const element = document.querySelector(selector);
    if (!element) return null;
    const rect = element.getBoundingClientRect();
    return {
      className: String(element.className || ""),
      rect: { height: rect.height, width: rect.width, x: rect.x, y: rect.y },
      styles: styles(element),
      text: element.textContent.replace(/\s+/g, " ").trim().slice(0, 300),
    };
  };

  return {
    arrowNext: describe(".fly-post-related-arrow--next"),
    arrowNextIcon: describe(".fly-post-related-arrow--next .fly-iconify"),
    icons: {
      comment: describe(".fly-post-page-action .fly-iconify--comment"),
      menu: describe(".fly-menu-button .fly-iconify--menu"),
      search: describe(".fly-navbar-search .fly-iconify--search"),
      share: describe(".fly-post-page-action .fly-iconify--share"),
      tag: describe(".fly-sidebar-tags-trigger .fly-iconify--tag"),
      toc: describe(".fly-post-toc .fly-iconify--list"),
      user: describe(".fly-mobile-header .fly-iconify--user"),
    },
    tagFlyout: describe(".fly-sidebar-flyout"),
    tagFlyoutLinks: [
      ...document.querySelectorAll(".fly-sidebar-flyout-link"),
    ].map((link) => ({
      href: link.getAttribute("href"),
      styles: styles(link),
      text: link.textContent.trim(),
    })),
    tagTrigger: describe(".fly-sidebar-tags-trigger"),
  };
})()
