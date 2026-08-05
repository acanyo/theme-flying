import { all } from "../../utils/dom.js?fly=1.0.33";
import { copyText } from "../../utils/clipboard.js?fly=1.0.1";

const RESET_DELAY = 1600;

function entryValue(entry) {
  return entry?.dataset.flyLinkCopyValue?.trim() || "";
}

function allEntriesText(card) {
  if (!card) return "";

  return all("[data-fly-link-copy-entry]", card)
    .map((entry) => ({
      label: entry.dataset.flyLinkCopyLabel?.trim(),
      value: entryValue(entry),
    }))
    .filter(({ label, value }) => label && value)
    .map(({ label, value }) => `${label}：${value}`)
    .join("\n");
}

function setupCopyButton(button, valueProvider, controller) {
  const label = button.querySelector("[data-fly-link-copy-button-label]");
  const idleLabel = label?.textContent.trim() || "复制";
  const idleAriaLabel = button.getAttribute("aria-label") || idleLabel;
  let resetTimer = 0;

  function showState(state, text, ariaLabel) {
    window.clearTimeout(resetTimer);
    button.dataset.flyLinkCopyState = state;
    if (label) label.textContent = text;
    button.setAttribute("aria-label", ariaLabel);

    resetTimer = window.setTimeout(() => {
      delete button.dataset.flyLinkCopyState;
      if (label) label.textContent = idleLabel;
      button.setAttribute("aria-label", idleAriaLabel);
    }, RESET_DELAY);
  }

  button.addEventListener(
    "click",
    async () => {
      const value = valueProvider().trim();
      if (!value) return;

      try {
        await copyText(value);
        showState("success", "已复制", "友链资料已复制");
      } catch {
        showState("error", "复制失败", "复制失败，请手动选择文字复制");
      }
    },
    { signal: controller.signal },
  );

  controller.signal.addEventListener(
    "abort",
    () => window.clearTimeout(resetTimer),
    { once: true },
  );
}

export function setupLinkApplicationCopy(root, controller) {
  all("[data-fly-link-copy]", root).forEach((button) => {
    setupCopyButton(
      button,
      () => entryValue(button.closest("[data-fly-link-copy-entry]")),
      controller,
    );
  });

  all("[data-fly-link-copy-all]", root).forEach((button) => {
    setupCopyButton(
      button,
      () => allEntriesText(button.closest("[data-fly-link-site-card]")),
      controller,
    );
  });
}
