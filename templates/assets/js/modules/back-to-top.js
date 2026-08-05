const BACK_TO_TOP_SELECTOR = "[data-fly-back-to-top]";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function visibilityThreshold() {
  return Math.max(480, Math.round(window.innerHeight * 0.75));
}

function setVisible(button, visible) {
  const nextValue = String(visible);
  if (button.dataset.flyVisible === nextValue) return;

  button.dataset.flyVisible = nextValue;
  button.setAttribute("aria-hidden", String(!visible));
  button.tabIndex = visible ? 0 : -1;
}

function focusMainContent() {
  const mainContent = document.querySelector("#main-content");
  if (!(mainContent instanceof HTMLElement)) return;

  try {
    mainContent.focus({ preventScroll: true });
  } catch {
    mainContent.focus();
  }
}

export function setupBackToTop(root = document) {
  if (window.flyBackToTopController) {
    window.flyBackToTopController.abort();
  }

  const button = root.querySelector(BACK_TO_TOP_SELECTOR);
  if (!button) return;

  const controller = new AbortController();
  const { signal } = controller;
  window.flyBackToTopController = controller;
  let frameId = 0;

  const updateVisibility = () => {
    frameId = 0;
    setVisible(button, window.scrollY >= visibilityThreshold());
  };

  const requestVisibilityUpdate = () => {
    if (frameId) return;
    frameId = window.requestAnimationFrame(updateVisibility);
  };

  window.addEventListener("scroll", requestVisibilityUpdate, {
    passive: true,
    signal,
  });
  window.addEventListener("resize", requestVisibilityUpdate, {
    passive: true,
    signal,
  });
  button.addEventListener(
    "click",
    () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
      focusMainContent();
    },
    { signal },
  );
  signal.addEventListener(
    "abort",
    () => {
      if (frameId) window.cancelAnimationFrame(frameId);
    },
    { once: true },
  );

  updateVisibility();
}
