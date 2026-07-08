import { all } from "../utils/dom.js";

const STORAGE_KEY = "flying-theme";

export function setupTheme(root) {
  const documentElement = document.documentElement;
  const toggles = all("[data-theme-toggle]", root);

  function current() {
    return documentElement.dataset.theme === "dark" ? "dark" : "light";
  }

  function apply(theme) {
    documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
    toggles.forEach((button) => {
      button.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    });
  }

  toggles.forEach((button) => {
    button.addEventListener("click", () => apply(current() === "dark" ? "light" : "dark"));
  });

  apply(current());

  return { apply, current };
}
