import { all } from "../../utils/dom.js?fly=1.0.33";

function setPageLocked(locked) {
  if (locked) {
    document.body.dataset.flyLinkApplicationOpen = "true";
    return;
  }

  delete document.body.dataset.flyLinkApplicationOpen;
}

export function setupLinkApplicationDialog(
  dialog,
  root,
  controller,
  { onFormOpen } = {},
) {
  if (!dialog.id) return;

  const openButtons = all(
    `[data-fly-link-application-open][aria-controls="${dialog.id}"]`,
    root,
  );
  const closeButtons = all("[data-fly-link-application-close]", dialog);
  const nextButtons = all("[data-fly-link-application-next]", dialog);
  const backButtons = all("[data-fly-link-application-back]", dialog);
  const panels = all("[data-fly-link-application-panel]", dialog);
  const progressItems = all("[data-fly-link-application-progress]", dialog);
  let returnFocus = null;

  function focusStepHeading(step) {
    const panel = panels.find(
      (item) => item.dataset.flyLinkApplicationPanel === step,
    );
    const heading = panel?.querySelector("[tabindex='-1']");
    if (heading instanceof HTMLElement) heading.focus({ preventScroll: true });
  }

  function setStep(step, { focus = true, notify = true } = {}) {
    const nextStep = step === "form" ? "form" : "guide";
    dialog.dataset.flyStep = nextStep;

    panels.forEach((panel) => {
      panel.hidden = panel.dataset.flyLinkApplicationPanel !== nextStep;
    });

    progressItems.forEach((item) => {
      if (item.dataset.flyLinkApplicationProgress === nextStep) {
        item.setAttribute("aria-current", "step");
      } else {
        item.removeAttribute("aria-current");
      }
    });

    if (nextStep === "form" && notify) onFormOpen?.();
    if (focus) queueMicrotask(() => focusStepHeading(nextStep));
  }

  function restoreFocus() {
    if (!(returnFocus instanceof HTMLElement) || !returnFocus.isConnected) {
      returnFocus = null;
      return;
    }

    returnFocus.focus({ preventScroll: true });
    returnFocus = null;
  }

  function finishClose({ restore = true } = {}) {
    dialog.dataset.flyOpen = "false";
    setStep("guide", { focus: false, notify: false });
    setPageLocked(false);
    if (restore) queueMicrotask(restoreFocus);
  }

  function closeDialog() {
    if (dialog.open && typeof dialog.close === "function") {
      dialog.close();
      return;
    }

    dialog.removeAttribute("open");
    finishClose();
  }

  function openDialog(trigger) {
    if (dialog.open || controller.signal.aborted) return;

    returnFocus = trigger instanceof HTMLElement ? trigger : null;
    setStep("guide", { focus: false, notify: false });
    setPageLocked(true);
    dialog.dataset.flyOpen = "true";

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }

    requestAnimationFrame(() => focusStepHeading("guide"));
  }

  openButtons.forEach((button) => {
    button.addEventListener("click", () => openDialog(button), {
      signal: controller.signal,
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeDialog, {
      signal: controller.signal,
    });
  });

  nextButtons.forEach((button) => {
    button.addEventListener("click", () => setStep("form"), {
      signal: controller.signal,
    });
  });

  backButtons.forEach((button) => {
    button.addEventListener("click", () => setStep("guide"), {
      signal: controller.signal,
    });
  });

  dialog.addEventListener(
    "click",
    (event) => {
      if (event.target === dialog) closeDialog();
    },
    { signal: controller.signal },
  );

  dialog.addEventListener(
    "cancel",
    (event) => {
      event.preventDefault();
      closeDialog();
    },
    { signal: controller.signal },
  );

  dialog.addEventListener(
    "keydown",
    (event) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      closeDialog();
    },
    { signal: controller.signal },
  );

  dialog.addEventListener("close", finishClose, {
    signal: controller.signal,
  });

  controller.signal.addEventListener(
    "abort",
    () => {
      if (dialog.open && typeof dialog.close === "function") dialog.close();
      dialog.removeAttribute("open");
      finishClose({ restore: false });
    },
    { once: true },
  );
}
