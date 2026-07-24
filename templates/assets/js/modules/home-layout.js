import { all } from "../utils/dom.js?fly=1.0.30";

const VALID_LAYOUTS = new Set(["grid", "slider", "carousel"]);
const FEATURED_CAROUSEL_DURATION = 600;
const STANDARD_CAROUSEL_DURATION = 800;

function cubicBezier(x1, y1, x2, y2) {
  function sampleCurve(a1, a2, progress) {
    const inverse = 1 - progress;
    return (
      3 * inverse * inverse * progress * a1 +
      3 * inverse * progress * progress * a2 +
      progress * progress * progress
    );
  }

  function sampleCurveSlope(a1, a2, progress) {
    const inverse = 1 - progress;
    return (
      3 * inverse * inverse * a1 +
      6 * inverse * progress * (a2 - a1) +
      3 * progress * progress * (1 - a2)
    );
  }

  return (progress) => {
    if (progress <= 0 || progress >= 1) return progress;

    let curveProgress = progress;
    for (let iteration = 0; iteration < 8; iteration += 1) {
      const error = sampleCurve(x1, x2, curveProgress) - progress;
      const slope = sampleCurveSlope(x1, x2, curveProgress);
      if (Math.abs(error) < 0.000001 || Math.abs(slope) < 0.000001) break;
      curveProgress = Math.min(1, Math.max(0, curveProgress - error / slope));
    }

    let lower = 0;
    let upper = 1;
    for (let iteration = 0; iteration < 12; iteration += 1) {
      const sampled = sampleCurve(x1, x2, curveProgress);
      if (Math.abs(sampled - progress) < 0.000001) break;
      if (sampled < progress) lower = curveProgress;
      else upper = curveProgress;
      curveProgress = (lower + upper) / 2;
    }

    return sampleCurve(y1, y2, curveProgress);
  };
}

const FEATURED_CAROUSEL_EASING = cubicBezier(0.25, 0.1, 0.25, 1);
const STANDARD_CAROUSEL_EASING = cubicBezier(0.2, 1, 0.2, 1);

function readConfiguredLayout(root) {
  const home = root.querySelector(".fly-home-shell[data-fly-home-layout]");
  const layout =
    home?.dataset.flyHomeLayout ||
    document.documentElement.dataset.flyHomeLayout ||
    "grid";
  return VALID_LAYOUTS.has(layout) ? layout : "grid";
}

function applyLayout(layout) {
  document.documentElement.dataset.flyHomeLayout = layout;
  if (document.body) document.body.dataset.flyHomeLayout = layout;
}

function itemLeft(rail, item) {
  const paddingInlineStart =
    Number.parseFloat(window.getComputedStyle(rail).paddingLeft) || 0;
  return Math.max(0, item.offsetLeft - rail.offsetLeft - paddingInlineStart);
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

function createDots(container, items, onSelect, signal) {
  if (!container) return [];
  container.replaceChildren();

  return items.map((_, index) => {
    const dot = document.createElement("button");
    dot.className = "fly-carousel-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `查看第 ${index + 1} 篇文章`);
    dot.addEventListener("click", () => onSelect(index), { signal });
    container.appendChild(dot);
    return dot;
  });
}

function createScrollAnimator(rail, { duration, easing, signal }) {
  let animationFrame = 0;

  function stop(keepAnimationStyles = false) {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    if (!keepAnimationStyles) rail.classList.remove("fly-is-animating");
  }

  function scrollTo(target, immediate = false) {
    stop(!immediate);

    const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const exactTarget = Math.min(maxScroll, Math.max(0, target));
    const start = rail.scrollLeft;

    if (immediate || Math.abs(exactTarget - start) < 0.5) {
      rail.classList.remove("fly-is-animating");
      rail.scrollLeft = exactTarget;
      rail.scrollTop = 0;
      return;
    }

    const startedAt = performance.now();
    rail.classList.add("fly-is-animating");
    void rail.offsetWidth;

    function animate(now) {
      const progress = Math.min(1, (now - startedAt) / duration);
      rail.scrollLeft = start + (exactTarget - start) * easing(progress);
      if (rail.scrollTop !== 0) rail.scrollTop = 0;

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
        return;
      }

      rail.scrollLeft = exactTarget;
      rail.classList.remove("fly-is-animating");
      animationFrame = 0;
    }

    animationFrame = window.requestAnimationFrame(animate);
  }

  signal.addEventListener("abort", () => stop(), { once: true });

  return { cancel: stop, scrollTo };
}

function setupPointerDrag(rail, signal, onDragStart) {
  let pointerId = null;
  let startX = 0;
  let startScrollLeft = 0;
  let didDrag = false;

  function finishDrag(event) {
    if (pointerId === null || event.pointerId !== pointerId) return;
    if (rail.hasPointerCapture(pointerId))
      rail.releasePointerCapture(pointerId);
    pointerId = null;
    rail.classList.remove("fly-is-dragging");
  }

  rail.addEventListener(
    "pointerdown",
    (event) => {
      if (event.pointerType === "touch" || event.button !== 0) return;
      pointerId = event.pointerId;
      startX = event.clientX;
      startScrollLeft = rail.scrollLeft;
      didDrag = false;
    },
    { signal },
  );

  rail.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerId !== pointerId) return;
      const distance = event.clientX - startX;

      if (!didDrag) {
        if (Math.abs(distance) <= 5) return;
        didDrag = true;
        rail.setPointerCapture(pointerId);
        rail.classList.add("fly-is-dragging");
        onDragStart();
      }

      event.preventDefault();
      rail.scrollLeft = startScrollLeft - distance;
    },
    { signal },
  );

  rail.addEventListener("pointerup", finishDrag, { signal });
  rail.addEventListener(
    "pointercancel",
    (event) => {
      finishDrag(event);
      didDrag = false;
    },
    { signal },
  );
  rail.addEventListener(
    "click",
    (event) => {
      if (!didDrag) return;
      event.preventDefault();
      event.stopPropagation();
      didDrag = false;
    },
    { capture: true, signal },
  );
  signal.addEventListener(
    "abort",
    () => rail.classList.remove("fly-is-dragging"),
    { once: true },
  );
}

function findTopicCarouselMedia(carousel) {
  if (!carousel.classList.contains("fly-topic-block")) return null;
  return carousel.querySelector(
    ".fly-overlay-post-card, .fly-taxonomy-post-media, .fly-post-image-frame",
  );
}

function syncTopicCarouselControlPosition(carousel, rail, media) {
  if (!media) return;
  const centerY = rail.offsetTop + media.offsetTop + media.offsetHeight / 2;
  carousel.style.setProperty("--fly-topic-control-center-y", `${centerY}px`);
}

function findAuthorsCarouselLayout(carousel) {
  if (!carousel.classList.contains("fly-authors-directory-section")) {
    return null;
  }

  const container = carousel.querySelector(".fly-authors-post-carousel");
  const media = container?.querySelector(
    "[data-fly-carousel-item] .fly-taxonomy-post-media",
  );
  return container && media ? { container, media } : null;
}

function syncAuthorsCarouselControlPosition(layout) {
  if (!layout) return;
  const containerBounds = layout.container.getBoundingClientRect();
  const mediaBounds = layout.media.getBoundingClientRect();
  const centerY =
    mediaBounds.top - containerBounds.top + mediaBounds.height / 2;
  layout.container.style.setProperty(
    "--fly-authors-control-center-y",
    `${centerY}px`,
  );
}

function setupCarousel(carousel, signal) {
  const rail = carousel.querySelector("[data-fly-carousel-rail]");
  const prev = carousel.querySelector("[data-fly-carousel-prev]");
  const next = carousel.querySelector("[data-fly-carousel-next]");
  const items = all("[data-fly-carousel-item]", rail || carousel);
  if (!rail || !prev || !next || items.length === 0) return;

  const buttonsOnly = carousel.hasAttribute("data-fly-carousel-buttons-only");
  const topicMedia = findTopicCarouselMedia(carousel);
  const authorsLayout = findAuthorsCarouselLayout(carousel);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const isFeaturedCarousel = carousel.classList.contains("fly-home-carousel");
  const scrollAnimator = createScrollAnimator(rail, {
    duration: isFeaturedCarousel
      ? FEATURED_CAROUSEL_DURATION
      : STANDARD_CAROUSEL_DURATION,
    easing: isFeaturedCarousel
      ? FEATURED_CAROUSEL_EASING
      : STANDARD_CAROUSEL_EASING,
    signal,
  });

  let activeIndex = 0;
  let frame = 0;

  function scrollToIndex(index, { immediate = false } = {}) {
    activeIndex = Math.min(items.length - 1, Math.max(0, index));
    scrollAnimator.scrollTo(
      itemLeft(rail, items[activeIndex]),
      immediate || reducedMotion.matches,
    );
  }

  const dots = createDots(
    carousel.querySelector("[data-fly-carousel-dots]"),
    items,
    scrollToIndex,
    signal,
  );
  carousel.dataset.flyCarouselSingle = String(items.length === 1);

  function sync() {
    if (rail.scrollTop !== 0) rail.scrollTop = 0;
    if (!rail.classList.contains("fly-is-animating")) {
      activeIndex = nearestItemIndex(rail, items);
    }
    const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth - 1);
    prev.disabled = rail.scrollLeft <= 1;
    next.disabled = rail.scrollLeft >= maxScroll;
    items.forEach((item, index) =>
      item.setAttribute("aria-current", String(index === activeIndex)),
    );
    dots.forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle("fly-is-active", isActive);
      dot.setAttribute("aria-current", String(isActive));
    });
  }

  function scheduleSync() {
    window.cancelAnimationFrame(frame);
    frame = window.requestAnimationFrame(sync);
  }

  prev.addEventListener("click", () => scrollToIndex(activeIndex - 1), {
    signal,
  });
  next.addEventListener("click", () => scrollToIndex(activeIndex + 1), {
    signal,
  });
  carousel.addEventListener(
    "keydown",
    (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      scrollToIndex(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
    },
    { signal },
  );
  rail.addEventListener("scroll", scheduleSync, { passive: true, signal });
  rail.addEventListener(
    "pointerdown",
    (event) => {
      if (event.pointerType === "touch") scrollAnimator.cancel();
    },
    { passive: true, signal },
  );
  if (!buttonsOnly) setupPointerDrag(rail, signal, scrollAnimator.cancel);

  reducedMotion.addEventListener(
    "change",
    (event) => {
      if (event.matches) scrollToIndex(activeIndex, { immediate: true });
    },
    { signal },
  );

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(() => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        scrollToIndex(activeIndex, { immediate: true });
        syncTopicCarouselControlPosition(carousel, rail, topicMedia);
        syncAuthorsCarouselControlPosition(authorsLayout);
        sync();
      });
    });
    observer.observe(rail);
    if (topicMedia) {
      observer.observe(carousel);
      observer.observe(topicMedia);
    }
    if (authorsLayout) {
      observer.observe(authorsLayout.container);
      observer.observe(authorsLayout.media);
    }
    signal.addEventListener("abort", () => observer.disconnect(), {
      once: true,
    });
  }

  window.addEventListener(
    "resize",
    () => {
      scrollToIndex(activeIndex, { immediate: true });
      syncTopicCarouselControlPosition(carousel, rail, topicMedia);
      syncAuthorsCarouselControlPosition(authorsLayout);
      sync();
    },
    { signal },
  );

  signal.addEventListener("abort", () => window.cancelAnimationFrame(frame), {
    once: true,
  });
  rail.scrollLeft = 0;
  rail.scrollTop = 0;
  syncTopicCarouselControlPosition(carousel, rail, topicMedia);
  syncAuthorsCarouselControlPosition(authorsLayout);
  sync();
}

export function setupHomeLayout(root) {
  if (window.flyHomeLayoutController) {
    window.flyHomeLayoutController.abort();
    delete window.flyHomeLayoutController;
  }

  const home = root.querySelector(".fly-home-shell[data-fly-home-layout]");
  if (home) applyLayout(readConfiguredLayout(root));
  else if (document.body) delete document.body.dataset.flyHomeLayout;

  const controller = new AbortController();
  window.flyHomeLayoutController = controller;
  all("[data-fly-carousel]", root).forEach((carousel) =>
    setupCarousel(carousel, controller.signal),
  );
}
