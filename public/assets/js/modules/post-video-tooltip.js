import { all } from "../utils/dom.js?fly=1.0.33";

const VIEWPORT_PADDING = 12;
const ANCHOR_GAP = 10;
const CLOSE_DELAY = 80;

function placeTooltip(badge, tooltip) {
  const badgeRect = badge.getBoundingClientRect();
  const width = tooltip.offsetWidth;
  const height = tooltip.offsetHeight;
  const minLeft = VIEWPORT_PADDING + width / 2;
  const maxLeft = Math.max(
    minLeft,
    window.innerWidth - VIEWPORT_PADDING - width / 2,
  );
  const preferredLeft = badgeRect.left + badgeRect.width / 2;
  const aboveTop = badgeRect.top - height - ANCHOR_GAP;
  const placeBelow = aboveTop < VIEWPORT_PADDING;
  const top = placeBelow
    ? badgeRect.bottom + ANCHOR_GAP
    : Math.max(VIEWPORT_PADDING, aboveTop);

  tooltip.dataset.flyPlacement = placeBelow ? "bottom" : "top";
  tooltip.style.setProperty(
    "--fly-post-video-tooltip-left",
    `${Math.round(Math.min(Math.max(preferredLeft, minLeft), maxLeft))}px`,
  );
  tooltip.style.setProperty(
    "--fly-post-video-tooltip-top",
    `${Math.round(top)}px`,
  );
}

export function setupPostVideoTooltip(root) {
  if (window.flyPostVideoTooltipController) {
    window.flyPostVideoTooltipController.abort();
  }

  const controller = new AbortController();
  window.flyPostVideoTooltipController = controller;

  if (!("showPopover" in HTMLElement.prototype)) return;

  let active = null;
  let closeTimer = 0;
  let positionFrame = 0;

  function cancelClose() {
    window.clearTimeout(closeTimer);
  }

  function closeActive() {
    cancelClose();
    if (!active) return;

    if (active.tooltip.matches(":popover-open")) {
      active.tooltip.hidePopover();
    }
    active = null;
  }

  function open(badge, tooltip) {
    cancelClose();
    if (active?.tooltip === tooltip) {
      placeTooltip(badge, tooltip);
      return;
    }

    closeActive();
    tooltip.showPopover();
    active = { badge, tooltip };
    placeTooltip(badge, tooltip);
  }

  function scheduleClose() {
    cancelClose();
    closeTimer = window.setTimeout(closeActive, CLOSE_DELAY);
  }

  function schedulePosition() {
    window.cancelAnimationFrame(positionFrame);
    positionFrame = window.requestAnimationFrame(() => {
      if (active) placeTooltip(active.badge, active.tooltip);
    });
  }

  all("[data-fly-post-video-badge]", root).forEach((badge) => {
    const tooltip = badge.querySelector("[data-fly-post-video-tooltip]");
    const focusOwner = badge.closest("a, button, [tabindex]") || badge;
    if (!tooltip) return;

    badge.addEventListener(
      "pointerenter",
      (event) => {
        if (event.pointerType !== "touch") open(badge, tooltip);
      },
      { signal: controller.signal },
    );
    badge.addEventListener("pointerleave", scheduleClose, {
      signal: controller.signal,
    });
    focusOwner.addEventListener("focusin", () => open(badge, tooltip), {
      signal: controller.signal,
    });
    focusOwner.addEventListener("focusout", scheduleClose, {
      signal: controller.signal,
    });
  });

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") closeActive();
    },
    { signal: controller.signal },
  );
  document.addEventListener("scroll", schedulePosition, {
    capture: true,
    passive: true,
    signal: controller.signal,
  });
  window.addEventListener("resize", schedulePosition, {
    passive: true,
    signal: controller.signal,
  });
  controller.signal.addEventListener(
    "abort",
    () => {
      window.cancelAnimationFrame(positionFrame);
      closeActive();
    },
    { once: true },
  );
}
