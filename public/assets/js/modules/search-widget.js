import { all } from "../utils/dom.js?fly=1.0.33";

export function openSearchWidget() {
  if (typeof window.SearchWidget?.open === "function") {
    window.SearchWidget.open();
    return true;
  }

  const searchModal = document.querySelector("search-modal");
  if (searchModal && "open" in searchModal) {
    searchModal.open = true;
    return true;
  }

  return false;
}

export function setupSearchWidget(root) {
  if (window.flySearchWidgetController) {
    window.flySearchWidgetController.abort();
  }

  const controller = new AbortController();
  window.flySearchWidgetController = controller;

  all("[data-fly-search-trigger]", root).forEach((trigger) => {
    trigger.addEventListener("click", openSearchWidget, {
      signal: controller.signal,
    });
  });
}
