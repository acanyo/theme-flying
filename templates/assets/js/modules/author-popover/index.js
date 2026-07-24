import { readAuthorData, renderAuthorPopover } from "./data.js?fly=1.0.1";
import { placeAuthorPopover } from "./positioning.js?fly=1.0.1";

const TRIGGER_SELECTOR = ".fly-author-popover-trigger";
const CLOSE_DELAY = 100;

function closestTrigger(target, root) {
  if (!(target instanceof Element)) return null;
  const trigger = target.closest(TRIGGER_SELECTOR);
  return trigger && root.contains(trigger) ? trigger : null;
}

function movedWithin(element, relatedTarget) {
  return relatedTarget instanceof Node && element.contains(relatedTarget);
}

export function setupAuthorPopover(root) {
  window.flyAuthorPopoverController?.abort();

  const controller = new AbortController();
  window.flyAuthorPopoverController = controller;

  if (!("showPopover" in HTMLElement.prototype)) return;

  const popover = document.querySelector("[data-fly-author-popover]");
  if (!popover) return;

  let active = null;
  let closeTimer = 0;
  let positionFrame = 0;

  function cancelClose() {
    window.clearTimeout(closeTimer);
  }

  function closeActive() {
    cancelClose();
    if (!active) return;

    active.trigger.removeAttribute("data-fly-author-popover-open");
    active.anchor.setAttribute("aria-expanded", "false");
    if (popover.matches(":popover-open")) popover.hidePopover();
    active = null;
  }

  function open(trigger) {
    cancelClose();
    const anchor = trigger.querySelector("[data-fly-author-popover-anchor]");
    if (!anchor) return;

    if (active?.trigger === trigger) {
      placeAuthorPopover(anchor, popover);
      return;
    }

    closeActive();
    renderAuthorPopover(popover, readAuthorData(trigger));
    trigger.dataset.flyAuthorPopoverOpen = "true";
    anchor.setAttribute("aria-expanded", "true");
    popover.showPopover();
    active = { anchor, trigger };
    placeAuthorPopover(anchor, popover);
  }

  function scheduleClose() {
    cancelClose();
    closeTimer = window.setTimeout(closeActive, CLOSE_DELAY);
  }

  function schedulePosition() {
    window.cancelAnimationFrame(positionFrame);
    positionFrame = window.requestAnimationFrame(() => {
      if (active) placeAuthorPopover(active.anchor, popover);
    });
  }

  root.addEventListener(
    "pointerover",
    (event) => {
      const trigger = closestTrigger(event.target, root);
      if (
        !trigger ||
        movedWithin(trigger, event.relatedTarget) ||
        event.pointerType === "touch"
      ) {
        return;
      }
      open(trigger);
    },
    { signal: controller.signal },
  );
  root.addEventListener(
    "pointerout",
    (event) => {
      const trigger = closestTrigger(event.target, root);
      if (!trigger || movedWithin(trigger, event.relatedTarget)) return;
      scheduleClose();
    },
    { signal: controller.signal },
  );
  root.addEventListener(
    "focusin",
    (event) => {
      const trigger = closestTrigger(event.target, root);
      if (trigger) open(trigger);
    },
    { signal: controller.signal },
  );
  root.addEventListener(
    "focusout",
    () => {
      window.queueMicrotask(() => {
        if (
          active &&
          !active.trigger.contains(document.activeElement) &&
          !popover.contains(document.activeElement)
        ) {
          scheduleClose();
        }
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
  popover.addEventListener(
    "focusout",
    () => {
      window.queueMicrotask(() => {
        if (
          active &&
          !active.trigger.contains(document.activeElement) &&
          !popover.contains(document.activeElement)
        ) {
          scheduleClose();
        }
      });
    },
    { signal: controller.signal },
  );

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
