import { all } from "../utils/dom.js?fly=1.0.33";

const CAROUSEL_SELECTOR = "[data-fly-taxonomy-carousel]";
const SCROLL_EDGE_EPSILON = 2;

function itemLeft(rail, item) {
  return (
    item.getBoundingClientRect().left -
    rail.getBoundingClientRect().left +
    rail.scrollLeft
  );
}

function nearestItemIndex(rail, items) {
  return items.reduce(
    (nearest, item, index) => {
      const distance = Math.abs(itemLeft(rail, item) - rail.scrollLeft);
      return distance < nearest.distance ? { index, distance } : nearest;
    },
    { index: 0, distance: Number.POSITIVE_INFINITY },
  ).index;
}

function setupCarousel(carousel, signal) {
  const rail = carousel.querySelector("[data-fly-taxonomy-carousel-rail]");
  const previousButton = carousel.querySelector(
    "[data-fly-carousel-prev], [data-fly-taxonomy-carousel-prev]",
  );
  const nextButton = carousel.querySelector(
    "[data-fly-carousel-next], [data-fly-taxonomy-carousel-next]",
  );
  const items = rail ? all("[data-fly-taxonomy-carousel-item]", rail) : [];

  if (!rail || !previousButton || !nextButton || items.length === 0) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const currentItem = rail.querySelector('[aria-current="page"]');
  const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
  const initialItemIndex =
    currentItemIndex > 0 ? currentItemIndex - 1 : Math.max(0, currentItemIndex);
  let activeIndex =
    currentItemIndex >= 0 ? initialItemIndex : nearestItemIndex(rail, items);
  let syncFrame = 0;

  function syncControlPosition() {
    const media = items[0].querySelector(
      ".fly-taxonomy-post-media, .fly-post-image-frame",
    );
    const controlContainer = carousel.querySelector(".fly-taxonomy-carousel");
    if (
      !media ||
      !controlContainer ||
      carousel.classList.contains("fly-taxonomy-nav")
    )
      return;

    const controlContainerRect = controlContainer.getBoundingClientRect();
    const mediaRect = media.getBoundingClientRect();
    const centerY =
      mediaRect.top - controlContainerRect.top + mediaRect.height / 2;
    controlContainer.style.setProperty(
      "--fly-taxonomy-control-center-y",
      `${centerY}px`,
    );
  }

  function sync() {
    activeIndex = nearestItemIndex(rail, items);
    const maximumScrollLeft = Math.max(0, rail.scrollWidth - rail.clientWidth);

    previousButton.disabled = rail.scrollLeft <= SCROLL_EDGE_EPSILON;
    nextButton.disabled =
      rail.scrollLeft >= maximumScrollLeft - SCROLL_EDGE_EPSILON;
    syncControlPosition();
  }

  function scheduleSync() {
    window.cancelAnimationFrame(syncFrame);
    syncFrame = window.requestAnimationFrame(sync);
  }

  function scrollToIndex(index) {
    activeIndex = Math.min(items.length - 1, Math.max(0, index));
    rail.scrollTo({
      left: itemLeft(rail, items[activeIndex]),
      behavior: reducedMotion.matches ? "auto" : "smooth",
    });
    scheduleSync();
  }

  function alignActiveItem() {
    scrollToIndex(activeIndex);
  }

  function alignCurrentItem() {
    window.cancelAnimationFrame(syncFrame);
    syncFrame = window.requestAnimationFrame(() => {
      activeIndex = initialItemIndex;
      rail.scrollLeft = itemLeft(rail, items[initialItemIndex]);
      sync();
    });
  }

  function alignResponsiveItem() {
    if (currentItemIndex >= 0) {
      alignCurrentItem();
      return;
    }

    alignActiveItem();
  }

  previousButton.addEventListener(
    "click",
    () => scrollToIndex(activeIndex - 1),
    { signal },
  );
  nextButton.addEventListener("click", () => scrollToIndex(activeIndex + 1), {
    signal,
  });
  rail.addEventListener("scroll", scheduleSync, { passive: true, signal });

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(alignResponsiveItem);
    resizeObserver.observe(rail);
    resizeObserver.observe(items[0]);
    signal.addEventListener("abort", () => resizeObserver.disconnect(), {
      once: true,
    });
  } else {
    window.addEventListener("resize", alignResponsiveItem, { signal });
  }

  signal.addEventListener(
    "abort",
    () => window.cancelAnimationFrame(syncFrame),
    { once: true },
  );
  if (currentItemIndex >= 0) {
    alignCurrentItem();
    if (document.readyState !== "complete") {
      window.addEventListener("load", alignCurrentItem, {
        once: true,
        signal,
      });
    } else {
      syncFrame = window.requestAnimationFrame(() => {
        alignCurrentItem();
      });
    }
  } else {
    scheduleSync();
  }
}

export function setupTaxonomyCarousels(root) {
  if (window.flyTaxonomyCarouselController) {
    window.flyTaxonomyCarouselController.abort();
  }

  const controller = new AbortController();
  window.flyTaxonomyCarouselController = controller;

  all(CAROUSEL_SELECTOR, root).forEach((carousel) =>
    setupCarousel(carousel, controller.signal),
  );
}
