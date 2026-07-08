import { all } from "../utils/dom.js";

export function setupMenu(root) {
  const body = document.body;
  const toggles = all("[data-menu-toggle]", root);
  const closers = all("[data-menu-close]", root);

  function set(open) {
    body.dataset.menuOpen = open ? "true" : "false";
    toggles.forEach((button) => {
      button.setAttribute("aria-expanded", open ? "true" : "false");
      button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  toggles.forEach((button) => {
    button.addEventListener("click", () => set(body.dataset.menuOpen !== "true"));
  });

  closers.forEach((element) => {
    element.addEventListener("click", () => set(false));
  });

  set(body.dataset.menuOpen === "true");

  return {
    close: () => set(false),
    open: () => set(true),
    toggle: () => set(body.dataset.menuOpen !== "true"),
  };
}
