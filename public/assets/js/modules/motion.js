const MOTION_BUTTON_SELECTOR = "[data-fly-motion-button]";
const BUTTON_ANIMATION_CLASS = "fly-button-animation";
const BUTTON_ANIMATION_TIMEOUT = 700;

function findMotionButtons(root) {
  if (!root || typeof root.querySelectorAll !== "function") {
    return [];
  }

  const buttons = Array.from(root.querySelectorAll(MOTION_BUTTON_SELECTOR));

  if (
    typeof root.matches === "function" &&
    root.matches(MOTION_BUTTON_SELECTOR)
  ) {
    buttons.unshift(root);
  }

  return buttons;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isFocusVisible(element) {
  try {
    return element.matches(":focus-visible");
  } catch {
    return false;
  }
}

function bindButtonMotion(button, controller, canHover) {
  const { signal } = controller;
  let cleanupTimer;

  const clearAnimation = () => {
    window.clearTimeout(cleanupTimer);
    cleanupTimer = undefined;
    button.classList.remove(BUTTON_ANIMATION_CLASS);
  };

  const playAnimation = () => {
    if (
      signal.aborted ||
      prefersReducedMotion() ||
      button.classList.contains(BUTTON_ANIMATION_CLASS)
    ) {
      return;
    }

    button.classList.add(BUTTON_ANIMATION_CLASS);
    cleanupTimer = window.setTimeout(clearAnimation, BUTTON_ANIMATION_TIMEOUT);
  };

  const handleAnimationEnd = (event) => {
    const hasMotionIcon = Boolean(button.querySelector(".fly-motion-icon"));
    const isFinalAnimation = hasMotionIcon
      ? event.animationName === "fly-button-icon"
      : event.animationName === "fly-button-label-enter";

    if (isFinalAnimation) {
      clearAnimation();
    }
  };

  const handleFocusIn = () => {
    if (isFocusVisible(button)) {
      playAnimation();
    }
  };

  button.addEventListener("animationend", handleAnimationEnd, { signal });
  button.addEventListener("animationcancel", handleAnimationEnd, { signal });
  button.addEventListener("focusin", handleFocusIn, { signal });
  button.addEventListener("focusout", clearAnimation, { signal });

  if (canHover) {
    button.addEventListener("pointerenter", playAnimation, { signal });
  }

  signal.addEventListener("abort", clearAnimation, { once: true });
}

export function setupMotion(root) {
  if (window.flyMotionController) {
    window.flyMotionController.abort();
  }

  const controller = new AbortController();
  window.flyMotionController = controller;

  const buttons = findMotionButtons(root);
  if (buttons.length === 0) {
    return;
  }

  const canHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;
  buttons.forEach((button) => bindButtonMotion(button, controller, canHover));
}
