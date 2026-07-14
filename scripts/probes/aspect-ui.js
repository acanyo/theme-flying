(() => {
  const compactText = (element) =>
    element?.textContent?.replace(/\s+/g, " ").trim() || "";
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
      opacity: computed.opacity,
      padding: computed.padding,
      position: computed.position,
      transform: computed.transform,
      transition: computed.transition,
      visibility: computed.visibility,
      width: computed.width,
    };
  };
  const describe = (element) => {
    if (!element) return null;
    const rect = element.getBoundingClientRect();
    const svg = element.querySelector("svg");
    return {
      ariaLabel: element.getAttribute("aria-label"),
      className: String(element.className || ""),
      html: element.outerHTML.slice(0, 3000),
      rect: { height: rect.height, width: rect.width, x: rect.x, y: rect.y },
      styles: styles(element),
      svg: svg?.outerHTML || null,
      text: compactText(element).slice(0, 300),
    };
  };
  const headingByText = (text) =>
    [...document.querySelectorAll("h1,h2,h3,h4")].find(
      (element) => compactText(element) === text,
    );
  const readNextHeading = headingByText("Read Next");
  const readNextSection = readNextHeading?.closest("section") ||
    readNextHeading?.parentElement;
  const sidebar =
    document.querySelector("aside") || document.querySelector("nav");
  const tagLabel = [...document.querySelectorAll("a,button,span,div")].find(
    (element) => compactText(element) === "Tags",
  );
  const tagControl = tagLabel?.closest("a,button") || tagLabel?.parentElement;
  const box = (element) => {
    if (!element) return null;
    const rect = element.getBoundingClientRect();
    return {
      className: String(element.className || ""),
      height: rect.height,
      tag: element.tagName,
      width: rect.width,
      x: rect.x,
      y: rect.y,
    };
  };
  const lineage = (element, limit = 6) => {
    const elements = [];
    for (let current = element; current && elements.length < limit; current = current.parentElement) {
      elements.push(box(current));
    }
    return elements;
  };
  const articleTitle = document.querySelector("h1");
  const coverImage = [...document.querySelectorAll("img")].find(
    (image) => image.alt === compactText(articleTitle),
  );
  const tocButton = [...document.querySelectorAll("button")].find((button) =>
    /table of contents/i.test(button.getAttribute("aria-label") || ""),
  );
  const uniqueSvgMarkup = new Set();
  const svgCatalog = [...document.querySelectorAll("svg")]
    .filter((svg) => {
      const key = svg.innerHTML.replace(/\s+/g, " ").trim();
      if (uniqueSvgMarkup.has(key)) return false;
      uniqueSvgMarkup.add(key);
      return true;
    })
    .slice(0, 80)
    .map((svg) => {
      const owner = svg.closest("button,a,[role='button'],span,div");
      return {
        ariaLabel: owner?.getAttribute("aria-label") || null,
        html: svg.outerHTML,
        ownerClass: String(owner?.className || ""),
        ownerTag: owner?.tagName || null,
        ownerText: compactText(owner).slice(0, 100),
      };
    });

  return {
    bodyClass: document.body.className,
    buttons: [...document.querySelectorAll("button")]
      .map(describe)
      .filter(
        (button) =>
          /next|previous|share|comment|menu|sidebar|tag/i.test(
            `${button?.ariaLabel || ""} ${button?.text || ""}`,
          ),
      ),
    articleLayout: {
      cover: lineage(coverImage),
      title: lineage(articleTitle),
      toc: lineage(tocButton),
    },
    readNext: {
      heading: describe(readNextHeading),
      section: describe(readNextSection),
      buttons: readNextSection
        ? [...readNextSection.querySelectorAll("button")].map(describe)
        : [],
      controls: readNextSection
        ? [
            ...readNextSection.querySelectorAll(
              '[class*="swiper-button"],[class*="slider-button"],[class*="slider-nav"],[role="button"]',
            ),
          ].map(describe)
        : [],
      svgParents: readNextSection
        ? [...readNextSection.querySelectorAll("svg")]
            .map((svg) => svg.closest("button,a,[role='button'],div,span"))
            .filter((element, index, elements) =>
              element && elements.indexOf(element) === index,
            )
            .map(describe)
        : [],
    },
    sidebar: describe(sidebar),
    sidebarLinks: sidebar
      ? [...sidebar.querySelectorAll("a,button")].slice(0, 40).map(describe)
      : [],
    tagControl: describe(tagControl),
    tagDropdown: describe(
      document.querySelector(
        "#nav-dropdown-content-tags,[aria-labelledby='nav-dropdown-toggle-tags']",
      ),
    ),
    tooltips: [
      ...document.querySelectorAll(
        ".tippy-box,[role='tooltip'],[data-tippy-root]",
      ),
    ].map(describe),
    svgCatalog,
  };
})()
