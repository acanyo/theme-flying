const SINGLE_PAGE_CONTENT_SELECTOR = ".fly-single-page-content";
const INLINE_HORIZONTAL_MARGIN_PROPERTIES = [
  "margin-left",
  "margin-right",
  "margin-inline",
  "margin-inline-start",
  "margin-inline-end",
];

export function normalizeSinglePageContent(root) {
  if (!document.body.classList.contains("fly-page")) return;

  const content = root.querySelector(SINGLE_PAGE_CONTENT_SELECTOR);
  if (!content) return;

  Array.from(content.children).forEach((element) => {
    if (element.matches("style, script")) return;

    INLINE_HORIZONTAL_MARGIN_PROPERTIES.forEach((property) => {
      element.style.removeProperty(property);
    });
  });
}
