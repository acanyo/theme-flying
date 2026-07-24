import { all } from "../utils/dom.js?fly=1.0.33";
import { copyText } from "../utils/clipboard.js?fly=1.0.1";

export function setupLinkApplication(root) {
  if (window.flyLinkApplicationController) {
    window.flyLinkApplicationController.abort();
  }

  const controller = new AbortController();
  window.flyLinkApplicationController = controller;

  all("[data-fly-link-application-copy]", root).forEach((button) => {
    const section = button.closest("[data-fly-link-application]");
    const template = section?.querySelector(
      "[data-fly-link-application-template]",
    );
    const label = button.querySelector("[data-fly-link-application-label]");
    const status = section?.querySelector("[data-fly-link-application-status]");
    const originalLabel = label?.textContent?.trim() || "复制申请模板";
    let resetTimer = 0;

    button.addEventListener(
      "click",
      async () => {
        const value = template?.textContent?.trim();
        if (!value) return;

        window.clearTimeout(resetTimer);

        try {
          await copyText(value);
          button.dataset.flyCopied = "true";
          if (label) label.textContent = "已复制";
          if (status)
            status.textContent = "申请模板已复制，请填写后在右侧提交。";
        } catch {
          button.dataset.flyCopied = "false";
          if (status) status.textContent = "复制失败，请手动选择模板内容。";
        }

        resetTimer = window.setTimeout(() => {
          delete button.dataset.flyCopied;
          if (label) label.textContent = originalLabel;
          if (status) status.textContent = "";
        }, 2400);
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
