import { all } from "../utils/dom.js?fly=1.0.33";

const VIEWPORT_PADDING = 16;
const ANCHOR_GAP = 10;
const CLOSE_DELAY = 100;

function placePopover(anchor, popover) {
  const anchorRect = anchor.getBoundingClientRect();
  const popoverWidth = popover.offsetWidth;
  const popoverHeight = popover.offsetHeight;
  const maxLeft = Math.max(
    VIEWPORT_PADDING,
    window.innerWidth - popoverWidth - VIEWPORT_PADDING,
  );
  const maxTop = Math.max(
    VIEWPORT_PADDING,
    window.innerHeight - popoverHeight - VIEWPORT_PADDING,
  );

  const left = Math.min(Math.max(anchorRect.left, VIEWPORT_PADDING), maxLeft);
  const belowTop = anchorRect.bottom + ANCHOR_GAP;
  const aboveTop = anchorRect.top - popoverHeight - ANCHOR_GAP;
  const preferredTop =
    belowTop + popoverHeight <= window.innerHeight - VIEWPORT_PADDING ||
    aboveTop < VIEWPORT_PADDING
      ? belowTop
      : aboveTop;
  const top = Math.min(Math.max(preferredTop, VIEWPORT_PADDING), maxTop);

  popover.style.setProperty(
    "--fly-author-popover-left",
    `${Math.round(left)}px`,
  );
  popover.style.setProperty("--fly-author-popover-top", `${Math.round(top)}px`);
}

export function setupAuthorPopover(root) {
  if (window.flyAuthorPopoverController) {
    window.flyAuthorPopoverController.abort();
  }

  const controller = new AbortController();
  window.flyAuthorPopoverController = controller;

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

    const { anchor, owner, popover } = active;
    delete owner.dataset.flyAuthorPopoverOpen;
    anchor.setAttribute("aria-expanded", "false");
    if (popover.matches(":popover-open")) popover.hidePopover();
    active = null;
  }

  function open(owner, anchor, popover) {
    cancelClose();
    if (active?.popover === popover) {
      placePopover(anchor, popover);
      return;
    }

    closeActive();
    owner.dataset.flyAuthorPopoverOpen = "true";
    anchor.setAttribute("aria-expanded", "true");
    popover.showPopover();
    active = { anchor, owner, popover };
    placePopover(anchor, popover);
  }

  function scheduleClose() {
    cancelClose();
    closeTimer = window.setTimeout(closeActive, CLOSE_DELAY);
  }

  function schedulePosition() {
    window.cancelAnimationFrame(positionFrame);
    positionFrame = window.requestAnimationFrame(() => {
      if (active) placePopover(active.anchor, active.popover);
    });
  }

  all(".fly-author-popover-trigger", root).forEach((owner) => {
    const anchor = owner.querySelector("[data-fly-author-popover-anchor]");
    const popover = owner.querySelector("[data-fly-author-popover]");
    if (!anchor || !popover) return;

    owner.addEventListener(
      "pointerenter",
      (event) => {
        if (event.pointerType !== "touch") open(owner, anchor, popover);
      },
      { signal: controller.signal },
    );
    owner.addEventListener("pointerleave", scheduleClose, {
      signal: controller.signal,
    });
    owner.addEventListener("focusin", () => open(owner, anchor, popover), {
      signal: controller.signal,
    });
    owner.addEventListener(
      "focusout",
      () => {
        window.queueMicrotask(() => {
          if (!owner.contains(document.activeElement)) scheduleClose();
        });
      },
      { signal: controller.signal },
    );
    popover.addEventListener("pointerenter", cancelClose, {
      signal: controller.signal,
    });
    popover.addEventListener("pointerleave", scheduleClose, {
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
