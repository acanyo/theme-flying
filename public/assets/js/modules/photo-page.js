import { setupPostLightbox } from "./post/lightbox.js?fly=1.0.5";

export function setupPhotoPage(root) {
  window.flyPhotoPageController?.abort();

  const page = root.querySelector("[data-fly-photo-detail]");
  if (!page) {
    delete window.flyPhotoPageController;
    return;
  }

  const controller = new AbortController();
  window.flyPhotoPageController = controller;
  setupPostLightbox(page, controller.signal);
}
