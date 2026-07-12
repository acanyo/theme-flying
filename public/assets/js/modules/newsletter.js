import { all } from "../utils/dom.js?fly=1.0.30";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getEndpoint(form) {
  const endpoint =
    form.dataset.flyNewsletterEndpoint || form.getAttribute("action");
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
  button.textContent = busy ? "Sending..." : idleLabel;
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
          setStatus(status, "error", "Please enter your email address.");
          input.focus();
          return;
        }

        if (!isValidEmail(email)) {
          input.setAttribute("aria-invalid", "true");
          setStatus(status, "error", "Please enter a valid email address.");
          input.focus();
          return;
        }

        input.removeAttribute("aria-invalid");
        const endpoint = getEndpoint(form);
        if (!endpoint) {
          setStatus(
            status,
            "notice",
            "Thanks! This local demo does not send subscription requests.",
          );
          return;
        }

        setBusy(form, button, true, idleLabel);
        setStatus(status, "pending", "Sending your subscription request...");

        try {
          await submitNewsletter(form, endpoint, controller.signal);
          form.reset();
          setStatus(status, "success", "Subscribed. Please check your inbox.");
        } catch (error) {
          if (error.name !== "AbortError") {
            setStatus(
              status,
              "error",
              "Subscription failed. Please try again.",
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
