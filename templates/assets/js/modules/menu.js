import { all } from "../utils/dom.js?fly=1.0.41";
import { syncCurrentMenu } from "./menu-current.js?fly=1.0.41";

const desktopQuery = window.matchMedia("(min-width: 1180px)");
const COLLAPSED_STORAGE_KEY = "flying-sidebar-collapsed";

function readStoredCollapsed() {
  try {
    return localStorage.getItem(COLLAPSED_STORAGE_KEY) === "true";
  } catch (_error) {
    return false;
  }
}

function storeCollapsed(collapsed) {
  try {
    localStorage.setItem(COLLAPSED_STORAGE_KEY, collapsed ? "true" : "false");
  } catch (_error) {
    // Ignore storage failures; the visible state is still applied to the page.
  }
}

function setupSidebarGroups(root, isDesktop, isCollapsed) {
  const parents = all(".fly-sidebar-parent", root);

  parents.forEach((button) => {
    const sync = () => {
      const expanded = button.getAttribute("aria-expanded") !== "false";
      button.classList.toggle("fly-is-open", expanded);
    };

    sync();
    button.addEventListener("click", () => {
      if (isDesktop() && isCollapsed()) {
        return;
      }

      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", expanded ? "false" : "true");
      sync();
    });
  });
}

export function setupMenu(root) {
  window.flyMenuReady = true;

  const body = document.body;
  const toggles = all("[data-fly-menu-toggle]", root);
  const closers = all("[data-fly-menu-close]", root);
  const sidebarLinks = all(".fly-site-sidebar a", root);

  function isDesktop() {
    return desktopQuery.matches;
  }

  function syncToggles() {
    const menuOpen = body.dataset.flyMenuOpen === "true";
    const sidebarCollapsed = body.dataset.flySidebarCollapsed === "true";

    toggles.forEach((button) => {
      if (isDesktop()) {
        button.setAttribute(
          "aria-expanded",
          sidebarCollapsed ? "false" : "true",
        );
        button.setAttribute(
          "aria-label",
          sidebarCollapsed ? "展开侧栏" : "收缩侧栏",
        );
        return;
      }

      button.setAttribute("aria-expanded", menuOpen ? "true" : "false");
      button.setAttribute("aria-label", menuOpen ? "关闭菜单" : "打开菜单");
    });
  }

  function setMenuOpen(open) {
    body.dataset.flyMenuOpen = open ? "true" : "false";
    syncToggles();
  }

  function setSidebarCollapsed(collapsed, persist = true) {
    body.dataset.flySidebarCollapsed = collapsed ? "true" : "false";
    if (persist) {
      storeCollapsed(collapsed);
    }
    syncToggles();
    window.dispatchEvent(
      new CustomEvent("fly:sidebar-collapse-change", { detail: { collapsed } }),
    );
  }

  toggles.forEach((button) => {
    button.addEventListener("click", () => {
      if (isDesktop()) {
        setSidebarCollapsed(body.dataset.flySidebarCollapsed !== "true");
        setMenuOpen(false);
        return;
      }

      setMenuOpen(body.dataset.flyMenuOpen !== "true");
    });
  });

  closers.forEach((element) => {
    element.addEventListener("click", () => setMenuOpen(false));
  });

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!isDesktop()) {
        setMenuOpen(false);
      }
    });
  });

  desktopQuery.addEventListener("change", () => {
    if (isDesktop()) {
      setMenuOpen(false);
    }
    syncToggles();
  });

  setupSidebarGroups(
    root,
    isDesktop,
    () => body.dataset.flySidebarCollapsed === "true",
  );
  syncCurrentMenu(root);
  setSidebarCollapsed(readStoredCollapsed(), false);
  setMenuOpen(false);

  return {
    close: () => setMenuOpen(false),
    open: () => setMenuOpen(true),
    refresh: () => syncCurrentMenu(root),
    toggle: () => {
      if (isDesktop()) {
        setSidebarCollapsed(body.dataset.flySidebarCollapsed !== "true");
        return;
      }
      setMenuOpen(body.dataset.flyMenuOpen !== "true");
    },
  };
}
