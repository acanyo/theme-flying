import { all } from "../utils/dom.js?fly=1.0.33";

function copyWithTextarea(value) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const execCommand = Reflect.get(document, "execCommand");
  const didCopy =
    typeof execCommand === "function" && execCommand.call(document, "copy");
  textarea.remove();

  if (!didCopy) {
    throw new Error("无法复制联系信息");
  }
}

async function copyText(value) {
  if (window.isSecureContext && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return;
    } catch {
      // Clipboard permissions can be denied; use the selection fallback below.
    }
  }

  copyWithTextarea(value);
}

export function setupContactCopy(root) {
  if (window.flyContactCopyController) {
    window.flyContactCopyController.abort();
  }

  const controller = new AbortController();
  window.flyContactCopyController = controller;

  all("[data-fly-contact-copy]", root).forEach((button) => {
    const originalLabel = button.getAttribute("aria-label") || "复制联系信息";
    let resetTimer = 0;

    button.addEventListener(
      "click",
      async () => {
        const value = button.dataset.flyContactValue?.trim();
        if (!value) return;

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
          button.setAttribute("aria-label", originalLabel);
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
