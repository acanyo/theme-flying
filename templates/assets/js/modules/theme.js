import { all } from "../utils/dom.js?fly=1.0.30";

const STORAGE_KEY = "flying-theme";

export function setupTheme(root) {
  window.flyThemeReady = true;

  const documentElement = document.documentElement;
  const toggles = all("[data-fly-theme-toggle]", root);

  function current() {
    return documentElement.dataset.theme === "dark" ? "dark" : "light";
  }

  function apply(theme) {
    documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
    toggles.forEach((button) => {
      button.setAttribute("aria-label", theme === "dark" ? "切换到亮色模式" : "切换到暗色模式");
    });
  }

  toggles.forEach((button) => {
    button.addEventListener("click", () => apply(current() === "dark" ? "light" : "dark"));
  });

  apply(current());

  return { apply, current };
}
