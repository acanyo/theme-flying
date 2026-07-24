import { all } from "../utils/dom.js?fly=1.0.33";
import { copyText } from "../utils/clipboard.js?fly=1.0.1";

export function setupContactCopy(root) {
  if (window.flyContactCopyController) {
    window.flyContactCopyController.abort();
  }

  const controller = new AbortController();
  window.flyContactCopyController = controller;

  all("[data-fly-contact-copy]", root).forEach((button) => {
    let resetTimer = 0;

    button.addEventListener(
      "click",
      async () => {
        const value = button.dataset.flyContactValue?.trim();
        if (!value) return;
        const originalLabel =
          button.getAttribute("aria-label") || "复制联系信息";

        try {
          await copyText(value);
        } catch {
          return;
        }

        window.clearTimeout(resetTimer);
        button.dataset.flyContactCopied = "true";
        button.setAttribute(
          "aria-label",
          `${button.dataset.flyContactLabel || "联系信息"}已复制`,
        );

        resetTimer = window.setTimeout(() => {
          delete button.dataset.flyContactCopied;
          button.setAttribute(
            "aria-label",
            button.dataset.flyContactOriginalLabel || originalLabel,
          );
        }, 1600);
      },
      { signal: controller.signal },
    );

    controller.signal.addEventListener(
      "abort",
      () => window.clearTimeout(resetTimer),
      { once: true },
    );
  });
}
