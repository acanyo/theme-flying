import { all } from "../utils/dom.js?fly=1.0.42";

const popupQuery = window.matchMedia("(max-width: 1199px)");

export function setupNavigationPopup(root) {
  const body = document.body;
  const popup = root.querySelector("[data-fly-navigation-popup]");
  const toggles = all("[data-fly-menu-toggle]", root);
  const closers = all("[data-fly-menu-close]", root);
  const links = popup ? all("a", popup) : [];
  let activeToggle = null;

  function isOpen() {
    return (
      popupQuery.matches &&
      Boolean(popup) &&
      body.dataset.flyMenuOpen === "true"
    );
  }

  function sync() {
    const open = isOpen();

    if (popup) {
      popup.setAttribute("aria-hidden", open ? "false" : "true");
      popup.inert = !open;
    }

    toggles.forEach((button) => {
      button.setAttribute("aria-expanded", open ? "true" : "false");
      button.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
    });
  }

  function setOpen(open, options = {}) {
    const nextOpen = Boolean(open && popupQuery.matches && popup);
    body.dataset.flyMenuOpen = nextOpen ? "true" : "false";
    sync();

    if (nextOpen) {
      activeToggle = options.trigger || document.activeElement;
      popup.querySelector("[data-fly-menu-close]")?.focus();
      return;
    }

    if (options.restoreFocus && activeToggle instanceof HTMLElement) {
      activeToggle.focus();
    }
    activeToggle = null;
  }

  toggles.forEach((button) => {
    button.addEventListener("click", () => {
      setOpen(!isOpen(), { trigger: button, restoreFocus: true });
    });
  });

  closers.forEach((element) => {
    element.addEventListener("click", () => {
      setOpen(false, { restoreFocus: true });
    });
  });

  links.forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  popupQuery.addEventListener("change", () => {
    setOpen(false);
  });

  setOpen(false);

  return {
    close: (options = {}) => setOpen(false, options),
    sync,
  };
}
