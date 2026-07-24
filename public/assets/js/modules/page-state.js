const PAGE_CLASS_MARKER_SELECTOR = "#swup [data-fly-route-body-class]";
const ROUTE_BODY_CLASS_NAMES = [
  "fly-home",
  "fly-post",
  "fly-page",
  "fly-archive",
  "fly-taxonomy",
  "fly-author",
  "fly-photos-page",
  "fly-photo-detail-page",
];

function parseClassNames(value) {
  return String(value || "")
    .split(/\s+/)
    .filter(Boolean);
}

export function syncPageBodyClass(root) {
  const marker = root.querySelector(PAGE_CLASS_MARKER_SELECTOR);
  const body = document.body;
  if (!marker || !body) return false;

  const previousClassNames = parseClassNames(body.dataset.flyCurrentPageClass);
  const nextClassNames = parseClassNames(marker.dataset.flyRouteBodyClass);

  new Set([...ROUTE_BODY_CLASS_NAMES, ...previousClassNames]).forEach(
    (className) => {
      body.classList.remove(className);
    },
  );
  nextClassNames.forEach((className) => {
    body.classList.add(className);
  });

  body.dataset.flyCurrentPageClass = nextClassNames.join(" ");
  return true;
}
