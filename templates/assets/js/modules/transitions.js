const SWUP_URL = new URL("../../vendor/swup.umd.js", import.meta.url).href;
const REVEAL_DURATION = 650;

let revealTimer = 0;

function clearReveal() {
  window.clearTimeout(revealTimer);
  revealTimer = 0;
  document.body.classList.remove("fly-swup-revealing");
}

function playReveal() {
  const container = document.querySelector("#swup");
  if (!container) return;

  clearReveal();
  void container.offsetWidth;
  document.body.classList.add("fly-swup-revealing");

  const finish = (event) => {
    if (event && event.target !== container) return;
    container.removeEventListener("animationend", finish);
    clearReveal();
  };

  container.addEventListener("animationend", finish);
  revealTimer = window.setTimeout(finish, REVEAL_DURATION);
}

function clearVisitState() {
  document.body.classList.remove("fly-swup-loading");
}

function isEnabled() {
  const config = window.flyThemeConfig && window.flyThemeConfig.advanced;
  return !config || config.enable_swup !== false;
}

function timeout() {
  const config = window.flyThemeConfig && window.flyThemeConfig.advanced;
  const value = config && Number(config.swup_timeout);
  return Number.isFinite(value) && value > 0 ? value : 5000;
}

function shouldIgnoreLink(url, context) {
  const anchor = context && context.el ? context.el : context;

  if (!anchor || typeof anchor.closest !== "function") {
    return false;
  }

  if (anchor.closest("[data-fly-no-swup]")) {
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
      if (!Swup || window.flySwup) {
        return;
      }

      window.flySwup = new Swup({
        cache: true,
        containers: ["#swup"],
        linkSelector: "a[href]",
        timeout: timeout(),
        ignoreVisit: shouldIgnoreLink,
      });

      window.flySwup.hooks.on("visit:start", () => {
        document.body.dataset.flyMenuOpen = "false";
        clearReveal();
        document.body.classList.add("fly-swup-loading");
      });

      window.flySwup.hooks.on("page:view", () => {
        try {
          callbacks.refresh();
          playReveal();
        } finally {
          clearVisitState();
        }
      });

      window.flySwup.hooks.on("visit:end", () => {
        clearVisitState();
      });
    })
    .catch(() => {
      clearVisitState();
      document.documentElement.classList.add("fly-swup-unavailable");
    });
}
