import { all } from "../utils/dom.js";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function setupNewsletter(root) {
  if (window.flyingNewsletterController) {
    window.flyingNewsletterController.abort();
  }

  const controller = new AbortController();
  window.flyingNewsletterController = controller;

  all("[data-newsletter]", root).forEach((form) => {
    const input = form.querySelector("input[type='email']");
    const status = form.querySelector(".newsletter-status");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = input && input.value ? input.value.trim() : "";
      if (!isValidEmail(email)) {
        status.textContent = "Enter a valid email address.";
        status.dataset.state = "error";
        return;
      }

      status.textContent = "Thanks. You are on the list.";
      status.dataset.state = "success";
      form.reset();
    }, { signal: controller.signal });
  });
}
