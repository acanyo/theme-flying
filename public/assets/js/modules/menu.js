import { all } from "../utils/dom.js?fly=1.0.42";
import { syncCurrentMenu } from "./menu-current.js?fly=1.0.42";
import { setupNavigationPopup } from "./navigation-popup.js?fly=1.0.79";

const wideDesktopQuery = window.matchMedia("(min-width: 1200px)");
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

function initialCollapsed() {
  const home = document.querySelector(".fly-home-shell[data-fly-home-layout]");
  if (!home) return readStoredCollapsed();
  return home.dataset.flyHomeLayout === "slider" || readStoredCollapsed();
}

function setupSidebarGroups(root, isWideDesktop, isCollapsed) {
  const parents = all(".fly-sidebar-parent", root);

  parents.forEach((button) => {
    const sync = () => {
      const expanded = button.getAttribute("aria-expanded") !== "false";
      button.classList.toggle("fly-is-open", expanded);
    };

    sync();
    button.addEventListener("click", () => {
      const isStaticSidebar = Boolean(
        button.closest(".fly-site-sidebar--static"),
      );
      if (isStaticSidebar && (!isWideDesktop() || isCollapsed())) {
        return;
      }

      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", expanded ? "false" : "true");
      sync();
    });
  });
}

export function setupMenu(root) {
  const body = document.body;
  const collapseToggles = all("[data-fly-sidebar-toggle]", root);
  const navigationPopup = setupNavigationPopup(root);

  function isWideDesktop() {
    return wideDesktopQuery.matches;
  }

  function syncCollapseToggles() {
    const sidebarCollapsed = body.dataset.flySidebarCollapsed === "true";

    collapseToggles.forEach((button) => {
      button.setAttribute("aria-expanded", sidebarCollapsed ? "false" : "true");
      button.setAttribute(
        "aria-label",
        sidebarCollapsed ? "展开侧栏" : "收缩侧栏",
      );
    });
  }

  function setSidebarCollapsed(collapsed, persist = true) {
    body.dataset.flySidebarCollapsed = collapsed ? "true" : "false";
    if (persist) {
      storeCollapsed(collapsed);
    }
    syncCollapseToggles();
    window.dispatchEvent(
      new CustomEvent("fly:sidebar-collapse-change", { detail: { collapsed } }),
    );
  }

  collapseToggles.forEach((button) => {
    button.addEventListener("click", () => {
      if (!isWideDesktop()) return;
      setSidebarCollapsed(body.dataset.flySidebarCollapsed !== "true");
    });
  });

  wideDesktopQuery.addEventListener("change", () => {
    navigationPopup.close();
    syncCollapseToggles();
  });

  setupSidebarGroups(
    root,
    isWideDesktop,
    () => body.dataset.flySidebarCollapsed === "true",
  );
  syncCurrentMenu(root);
  setSidebarCollapsed(initialCollapsed(), false);
  navigationPopup.sync();

  return {
    close: () => navigationPopup.close({ restoreFocus: true }),
    refresh: () => {
      syncCurrentMenu(root);
      navigationPopup.sync();
      syncCollapseToggles();
    },
  };
}
