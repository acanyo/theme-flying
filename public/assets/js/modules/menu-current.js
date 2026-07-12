import { all } from "../utils/dom.js?fly=1.0.42";

function normalizeLocalPath(href) {
  try {
    const url = new URL(href, window.location.origin);

    if (url.origin !== window.location.origin) {
      return null;
    }

    const pathname = decodeURIComponent(url.pathname).replace(/\/+$/, "");
    return pathname || "/";
  } catch (_error) {
    return null;
  }
}

function syncParentSection(section) {
  const parent = section.querySelector(".fly-sidebar-parent");
  const hasCurrentChild = Boolean(
    section.querySelector('a[aria-current="page"]'),
  );

  if (!parent) return;

  parent.classList.toggle("fly-is-active", hasCurrentChild);

  if (hasCurrentChild) {
    parent.setAttribute("aria-expanded", "true");
    parent.classList.add("fly-is-open");
  }
}

export function syncCurrentMenu(root) {
  const currentPath = normalizeLocalPath(window.location.href);

  all(".fly-site-sidebar a[href]", root).forEach((link) => {
    const isCurrent =
      currentPath !== null && normalizeLocalPath(link.href) === currentPath;

    link.classList.toggle("fly-is-active", isCurrent);

    if (isCurrent) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  all(".fly-sidebar-section", root).forEach(syncParentSection);
}
