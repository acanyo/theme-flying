import { setupPostLightbox } from "./post/lightbox.js?fly=1.0.5";

export function setupMomentPage(root) {
  window.flyMomentPageController?.abort();

  const page = root.querySelector("[data-fly-moment-detail]");
  if (!page) {
    delete window.flyMomentPageController;
    return;
  }

  const controller = new AbortController();
  window.flyMomentPageController = controller;
  setupPostLightbox(page, controller.signal);
}
