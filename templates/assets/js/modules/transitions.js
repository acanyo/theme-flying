const SWUP_URL = new URL("../../vendor/swup.umd.js", import.meta.url).href;

function isEnabled() {
  const config = window.themeConfig && window.themeConfig.custom;
  return !config || config.enable_swup !== false;
}

function timeout() {
  const config = window.themeConfig && window.themeConfig.custom;
  const value = config && Number(config.swup_timeout);
  return Number.isFinite(value) && value > 0 ? value : 5000;
}

function shouldIgnoreLink(url, anchor) {
  if (!anchor) {
    return false;
  }

  if (anchor.closest("[data-no-swup]")) {
    return true;
  }

  const href = anchor.getAttribute("href") || "";
  return (
    anchor.target === "_blank" ||
    anchor.hasAttribute("download") ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("javascript:") ||
    url.startsWith("/login") ||
    url.startsWith("/uc") ||
    url.startsWith("/console") ||
    url.startsWith("/apis")
  );
}

function loadSwup() {
  if (window.Swup) {
    return Promise.resolve(window.Swup);
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SWUP_URL;
    script.async = true;
    script.onload = () => resolve(window.Swup);
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export function setupTransitions(root, callbacks) {
  if (!isEnabled() || !root.querySelector("#swup")) {
    return;
  }

  loadSwup()
    .then((Swup) => {
      if (!Swup || window.flyingSwup) {
        return;
      }

      window.flyingSwup = new Swup({
        cache: true,
        containers: ["#swup"],
        linkSelector: "a[href]",
        timeout: timeout(),
        ignoreVisit: shouldIgnoreLink,
      });

      window.flyingSwup.hooks.on("visit:start", () => {
        document.body.dataset.menuOpen = "false";
        document.body.classList.add("swup-loading");
      });

      window.flyingSwup.hooks.on("page:view", () => {
        callbacks.refresh();
        document.body.classList.remove("swup-loading");
      });

      window.flyingSwup.hooks.on("visit:end", () => {
        document.body.classList.remove("swup-loading");
      });
    })
    .catch(() => {
      document.documentElement.classList.add("swup-unavailable");
    });
}
