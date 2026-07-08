import Swup from "swup";

declare global {
  interface Window {
    __swup__?: Swup;
    themeConfig?: {
      custom?: {
        enable_swup?: boolean;
        swup_timeout?: number;
      };
    };
  }
}

let swupInstance: Swup | null = null;

const isSwupEnabled = () => {
  return window.themeConfig?.custom?.enable_swup === true;
};

const updatePageTitle = (html: string) => {
  const title = new DOMParser().parseFromString(html, "text/html").querySelector(
    "title",
  )?.textContent;

  if (title) {
    document.title = title;
  }
};

const updateActiveNavItem = () => {
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";

  document.querySelectorAll("header nav a[href]").forEach((link) => {
    const href = link.getAttribute("href") || "/";
    const url = new URL(href, window.location.origin);
    const linkPath = url.pathname.replace(/\/$/, "") || "/";
    const isActive =
      linkPath === "/"
        ? currentPath === "/"
        : currentPath === linkPath || currentPath.startsWith(`${linkPath}/`);

    link.classList.toggle("active", isActive);
  });
};

const shouldIgnoreVisit = (_url: URL, { el }: { el?: Element }) => {
  const link = el?.closest?.("a");
  const href = link?.getAttribute("href") || "";

  if (!link) return false;

  return Boolean(
    link.hasAttribute("data-no-swup") ||
      link.hasAttribute("download") ||
      link.getAttribute("target") === "_blank" ||
      href.startsWith("#") ||
      href.startsWith("javascript:") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("/login") ||
      href.startsWith("/uc") ||
      href.startsWith("/console") ||
      href.startsWith("/apis"),
  );
};

export const initSwup = () => {
  if (!isSwupEnabled() || swupInstance || !document.querySelector("#swup")) {
    updateActiveNavItem();
    return swupInstance;
  }

  swupInstance = new Swup({
    containers: ["#swup"],
    linkSelector: "a[href]",
    timeout: window.themeConfig?.custom?.swup_timeout || 5000,
    cache: true,
    ignoreVisit: shouldIgnoreVisit,
  });

  window.__swup__ = swupInstance;

  swupInstance.hooks.on("visit:start", (visit) => {
    document.body.classList.add("swup-loading");
    window.dispatchEvent(new CustomEvent("swup:start", { detail: { visit } }));
  });

  swupInstance.hooks.on("content:replace", (_visit, { page }) => {
    updatePageTitle(page.html);
    document.querySelector("#swup")?.classList.add("swup-content");
  });

  swupInstance.hooks.on("page:view", (visit, args) => {
    updateActiveNavItem();
    window.dispatchEvent(
      new CustomEvent("swup:success", { detail: { visit, ...args } }),
    );
  });

  swupInstance.hooks.on("visit:end", (visit) => {
    document.body.classList.remove("swup-loading");
    window.dispatchEvent(
      new CustomEvent("swup:complete", { detail: { visit } }),
    );
  });

  swupInstance.hooks.on("fetch:timeout", (_visit, args) => {
    console.error("Swup request timed out", args);
    document.body.classList.remove("swup-loading");
    window.location.reload();
  });

  swupInstance.hooks.on("fetch:error", (_visit, args) => {
    console.error("Swup request failed", args);
    document.body.classList.remove("swup-loading");
    window.location.reload();
  });

  updateActiveNavItem();

  return swupInstance;
};

document.addEventListener("DOMContentLoaded", () => {
  initSwup();
});
