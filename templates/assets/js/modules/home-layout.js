import { all } from "../utils/dom.js?fly=1.0.30";

const VALID_LAYOUTS = new Set(["grid", "slider", "carousel"]);

function readConfiguredLayout() {
  const layout = document.documentElement.dataset.flyHomeLayout || "grid";
  return VALID_LAYOUTS.has(layout) ? layout : "grid";
}

function applyLayout(layout) {
  document.documentElement.dataset.flyHomeLayout = layout;
  if (document.body) document.body.dataset.flyHomeLayout = layout;
}

function itemLeft(rail, item) {
  return Math.max(0, item.offsetLeft - rail.offsetLeft);
}

function nearestItemIndex(rail, items) {
  return items.reduce((nearest, item, index) => {
    const distance = Math.abs(itemLeft(rail, item) - rail.scrollLeft);
    return distance < nearest.distance ? { index, distance } : nearest;
  }, { index: 0, distance: Number.POSITIVE_INFINITY }).index;
}

function createDots(container, items, onSelect, signal) {
  if (!container) return [];
  container.replaceChildren();

  return items.map((item, index) => {
    const dot = document.createElement("button");
    dot.className = "fly-carousel-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `查看第 ${index + 1} 篇文章`);
    dot.addEventListener("click", () => onSelect(index), { signal });
    container.appendChild(dot);
    return dot;
  });
}

function setupPointerDrag(rail, signal) {
  let pointerId = null;
  let startX = 0;
  let startScrollLeft = 0;
  let didDrag = false;

  function finishDrag(event) {
    if (pointerId === null || event.pointerId !== pointerId) return;
    if (rail.hasPointerCapture(pointerId)) rail.releasePointerCapture(pointerId);
    pointerId = null;
    rail.classList.remove("fly-is-dragging");
  }

  rail.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch" || event.button !== 0) return;
    pointerId = event.pointerId;
    startX = event.clientX;
    startScrollLeft = rail.scrollLeft;
    didDrag = false;
    rail.setPointerCapture(pointerId);
    rail.classList.add("fly-is-dragging");
  }, { signal });

  rail.addEventListener("pointermove", (event) => {
    if (event.pointerId !== pointerId) return;
    const distance = event.clientX - startX;
    didDrag = didDrag || Math.abs(distance) > 5;
    rail.scrollLeft = startScrollLeft - distance;
  }, { signal });

  rail.addEventListener("pointerup", finishDrag, { signal });
  rail.addEventListener("pointercancel", finishDrag, { signal });
  rail.addEventListener("click", (event) => {
    if (!didDrag) return;
    event.preventDefault();
    event.stopPropagation();
    didDrag = false;
  }, { capture: true, signal });
  signal.addEventListener("abort", () => rail.classList.remove("fly-is-dragging"), { once: true });
}

function setupCarousel(carousel, signal) {
  const rail = carousel.querySelector("[data-fly-carousel-rail]");
  const prev = carousel.querySelector("[data-fly-carousel-prev]");
  const next = carousel.querySelector("[data-fly-carousel-next]");
  const items = all("[data-fly-carousel-item]", rail || carousel);
  if (!rail || !prev || !next || items.length === 0) return;

  let activeIndex = 0;
  let frame = 0;

  function scrollToIndex(index, behavior = "smooth") {
    activeIndex = Math.min(items.length - 1, Math.max(0, index));
    rail.scrollTo({ left: itemLeft(rail, items[activeIndex]), behavior });
  }

  const dots = createDots(carousel.querySelector("[data-fly-carousel-dots]"), items, scrollToIndex, signal);
  carousel.dataset.flyCarouselSingle = String(items.length === 1);

  function sync() {
    activeIndex = nearestItemIndex(rail, items);
    const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth - 1);
    prev.disabled = rail.scrollLeft <= 1;
    next.disabled = rail.scrollLeft >= maxScroll;
    items.forEach((item, index) => item.setAttribute("aria-current", String(index === activeIndex)));
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

  prev.addEventListener("click", () => scrollToIndex(activeIndex - 1), { signal });
  next.addEventListener("click", () => scrollToIndex(activeIndex + 1), { signal });
  carousel.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    scrollToIndex(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
  }, { signal });
  rail.addEventListener("scroll", scheduleSync, { passive: true, signal });
  setupPointerDrag(rail, signal);

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(() => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        scrollToIndex(activeIndex, "auto");
        sync();
      });
    });
    observer.observe(rail);
    signal.addEventListener("abort", () => observer.disconnect(), { once: true });
  } else {
    window.addEventListener("resize", scheduleSync, { signal });
  }

  signal.addEventListener("abort", () => window.cancelAnimationFrame(frame), { once: true });
  rail.scrollLeft = 0;
  sync();
}

export function setupHomeLayout(root) {
  if (window.flyHomeLayoutController) window.flyHomeLayoutController.abort();

  const controller = new AbortController();
  window.flyHomeLayoutController = controller;
  applyLayout(readConfiguredLayout());
  all("[data-fly-carousel]", root).forEach((carousel) => setupCarousel(carousel, controller.signal));

  return { refresh: () => applyLayout(readConfiguredLayout()) };
}
