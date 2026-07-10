import { all } from "../utils/dom.js?fly=1.0.30";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getEndpoint(form) {
  const endpoint = form.dataset.flyNewsletterEndpoint || form.getAttribute("action");
  return endpoint && endpoint !== "#" ? endpoint.trim() : "";
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
  button.textContent = busy ? "正在订阅..." : idleLabel;
}

async function submitNewsletter(form, endpoint, signal) {
  const method = (form.getAttribute("method") || "POST").toUpperCase();
  const formData = new FormData(form);
  const options = {
    method,
    headers: { Accept: "application/json" },
    signal,
  };

  let requestUrl = endpoint;
  if (method === "GET") {
    const url = new URL(endpoint, window.location.href);
    formData.forEach((value, key) => url.searchParams.set(key, String(value)));
    requestUrl = url.toString();
  } else {
    options.body = formData;
  }

  const response = await fetch(requestUrl, options);
  if (!response.ok) {
    throw new Error(`Newsletter request failed with status ${response.status}`);
  }
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
          setStatus(status, "error", "邮箱格式不正确，请检查后重试。");
          input.focus();
          return;
        }

        input.removeAttribute("aria-invalid");
        const endpoint = getEndpoint(form);
        if (!endpoint) {
          setStatus(status, "notice", "邮箱格式正确，但本站暂未接入订阅服务，本次未发送请求。");
          return;
        }

        setBusy(form, button, true, idleLabel);
        setStatus(status, "pending", "正在提交订阅请求...");

        try {
          await submitNewsletter(form, endpoint, controller.signal);
          form.reset();
          setStatus(status, "success", "订阅成功，请留意邮箱中的确认信息。");
        } catch (error) {
          if (error.name !== "AbortError") {
            setStatus(status, "error", "订阅失败，请稍后重试。");
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
