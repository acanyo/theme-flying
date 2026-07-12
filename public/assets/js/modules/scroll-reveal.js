const REVEAL_SELECTOR = "[data-fly-reveal], [data-fly-reveal-item]";
const REVEAL_GROUP_SELECTOR = "[data-fly-reveal-group]";
const READY_CLASS = "fly-scroll-reveal-ready";
const VISIBLE_CLASS = "fly-is-visible";
const MAX_STAGGER_INDEX = 7;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function reveal(element, observer) {
  element.classList.add(VISIBLE_CLASS);
  observer?.unobserve(element);
}

function prepareGroup(group) {
  return Array.from(group.children).map((item, index) => {
    item.setAttribute("data-fly-reveal-item", "");
    item.style.setProperty(
      "--fly-reveal-index",
      String(Math.min(index, MAX_STAGGER_INDEX)),
    );
    return item;
  });
}

function collectRevealElements(root) {
  if (!root || typeof root.querySelectorAll !== "function") {
    return [];
  }

  const elements = new Set();
  root.querySelectorAll(REVEAL_GROUP_SELECTOR).forEach((group) => {
    prepareGroup(group).forEach((item) => elements.add(item));
  });
  root
    .querySelectorAll(REVEAL_SELECTOR)
    .forEach((element) => elements.add(element));

  if (typeof root.matches === "function") {
    if (root.matches(REVEAL_GROUP_SELECTOR)) {
      prepareGroup(root).forEach((item) => elements.add(item));
    }
    if (root.matches(REVEAL_SELECTOR)) {
      elements.add(root);
    }
  }

  return Array.from(elements);
}

function observeAddedContent(root, observer, controller) {
  if (typeof MutationObserver !== "function") return;

  const mutationObserver = new MutationObserver((records) => {
    records.forEach((record) => {
      record.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) return;

        const group = node.parentElement?.closest(REVEAL_GROUP_SELECTOR);
        if (group) {
          prepareGroup(group).forEach((item) => {
            if (!item.classList.contains(VISIBLE_CLASS)) observer.observe(item);
          });
        }

        collectRevealElements(node).forEach((element) => {
          if (!element.classList.contains(VISIBLE_CLASS)) {
            observer.observe(element);
          }
        });
      });
    });
  });

  mutationObserver.observe(root, { childList: true, subtree: true });
  controller.signal.addEventListener(
    "abort",
    () => mutationObserver.disconnect(),
    { once: true },
  );
}

export function setupScrollReveal(root) {
  window.flyScrollRevealController?.abort();

  const controller = new AbortController();
  window.flyScrollRevealController = controller;

  const elements = collectRevealElements(root);
  if (elements.length === 0) {
    document.documentElement.classList.remove(READY_CLASS);
    return;
  }

  if (prefersReducedMotion() || typeof IntersectionObserver !== "function") {
    elements.forEach((element) => reveal(element));
    document.documentElement.classList.remove(READY_CLASS);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const hasPassedViewport = entry.boundingClientRect.bottom <= 0;
        if (entry.isIntersecting || hasPassedViewport) {
          reveal(entry.target, observer);
        }
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    },
  );

  controller.signal.addEventListener("abort", () => observer.disconnect(), {
    once: true,
  });
  elements.forEach((element) => observer.observe(element));
  observeAddedContent(root, observer, controller);
  document.documentElement.classList.add(READY_CLASS);
}
