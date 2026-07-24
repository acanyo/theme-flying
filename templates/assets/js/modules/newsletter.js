import { all } from "../utils/dom.js?fly=1.0.30";
import {
  NEWSLETTER_ENDPOINT,
  NewsletterRequestError,
  submitNewsletterRequest,
} from "./newsletter/request.js?fly=1.0.1";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getEndpoint(form) {
  return form.getAttribute("action")?.trim() || NEWSLETTER_ENDPOINT;
}

function setStatus(status, state, message) {
  status.textContent = message;

  if (state) {
    status.dataset.flyState = state;
  } else {
    delete status.dataset.flyState;
  }
}

function setBusy(form, button, busy, idleLabel) {
  form.setAttribute("aria-busy", String(busy));
  button.disabled = busy;
  button.textContent = busy ? "提交中..." : idleLabel;
}

export function setupNewsletter(root) {
  if (window.flyNewsletterController) {
    window.flyNewsletterController.abort();
  }

  const controller = new AbortController();
  window.flyNewsletterController = controller;

  all("[data-fly-newsletter]", root).forEach((form) => {
    const input = form.querySelector("input[type='email']");
    const status = form.querySelector(".fly-newsletter-status");
    const button = form.querySelector("button[type='submit']");

    if (!input || !status || !button) {
      return;
    }

    const idleLabel = button.textContent.trim() || "订阅";

    input.addEventListener(
      "input",
      () => {
        input.removeAttribute("aria-invalid");
        setStatus(status, "", "");
      },
      { signal: controller.signal },
    );

    form.addEventListener(
      "submit",
      async (event) => {
        event.preventDefault();

        const email = input.value ? input.value.trim() : "";
        if (!email) {
          input.setAttribute("aria-invalid", "true");
          setStatus(status, "error", "请输入邮箱地址。");
          input.focus();
          return;
        }

        if (!isValidEmail(email)) {
          input.setAttribute("aria-invalid", "true");
          setStatus(status, "error", "请输入有效的邮箱地址。");
          input.focus();
          return;
        }

        input.removeAttribute("aria-invalid");
        const endpoint = getEndpoint(form);

        setBusy(form, button, true, idleLabel);
        setStatus(status, "pending", "正在提交订阅请求...");

        try {
          const result = await submitNewsletterRequest(
            endpoint,
            email,
            controller.signal,
          );
          form.reset();
          setStatus(
            status,
            "success",
            result.message || "订阅成功，请检查邮箱。",
          );
        } catch (error) {
          if (error?.name !== "AbortError") {
            setStatus(
              status,
              "error",
              error instanceof NewsletterRequestError
                ? error.message
                : "无法连接订阅服务，请稍后重试。",
            );
          }
        } finally {
          if (!controller.signal.aborted) {
            setBusy(form, button, false, idleLabel);
          }
        }
      },
      { signal: controller.signal },
    );
  });
}
