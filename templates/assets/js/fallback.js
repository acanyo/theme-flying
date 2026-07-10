(function () {
  function all(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector));
  }

  function setupSidebarGroups() {
    all(".fly-sidebar-parent").forEach(function (button) {
      function sync() {
        var expanded = button.getAttribute("aria-expanded") !== "false";
        button.classList.toggle("fly-is-open", expanded);
      }

      sync();
      button.addEventListener("click", function () {
        var expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", expanded ? "false" : "true");
        sync();
      });
    });
  }

  function setupMenuFallback() {
    if (window.flyMenuReady) {
      return;
    }

    var desktopQuery = window.matchMedia("(min-width: 1180px)");
    var toggles = all("[data-fly-menu-toggle]");
    var closers = all("[data-fly-menu-close]");
    var sidebarLinks = all(".fly-site-sidebar a");

    function isDesktop() {
      return desktopQuery.matches;
    }

    function readStoredCollapsed() {
      try {
        return localStorage.getItem("flying-sidebar-collapsed") === "true";
      } catch (_error) {
        return false;
      }
    }

    function storeCollapsed(collapsed) {
      try {
        localStorage.setItem("flying-sidebar-collapsed", collapsed ? "true" : "false");
      } catch (_error) {
        // Ignore storage failures.
      }
    }

    function syncToggles() {
      var open = document.body.dataset.flyMenuOpen === "true";
      var collapsed = document.body.dataset.flySidebarCollapsed === "true";

      toggles.forEach(function (button) {
        if (isDesktop()) {
          button.setAttribute("aria-expanded", collapsed ? "false" : "true");
          button.setAttribute("aria-label", collapsed ? "展开侧栏" : "收缩侧栏");
          return;
        }

        button.setAttribute("aria-expanded", open ? "true" : "false");
        button.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
      });
    }

    function setMenuOpen(open) {
      document.body.dataset.flyMenuOpen = open ? "true" : "false";
      syncToggles();
    }

    function setSidebarCollapsed(collapsed, persist) {
      document.body.dataset.flySidebarCollapsed = collapsed ? "true" : "false";
      if (persist !== false) {
        storeCollapsed(collapsed);
      }
      syncToggles();
    }

    toggles.forEach(function (button) {
      button.addEventListener("click", function () {
        if (isDesktop()) {
          setSidebarCollapsed(document.body.dataset.flySidebarCollapsed !== "true");
          setMenuOpen(false);
          return;
        }

        setMenuOpen(document.body.dataset.flyMenuOpen !== "true");
      });
    });

    closers.forEach(function (element) {
      element.addEventListener("click", function () {
        setMenuOpen(false);
      });
    });

    sidebarLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (!isDesktop()) {
          setMenuOpen(false);
        }
      });
    });

    desktopQuery.addEventListener("change", function () {
      if (isDesktop()) {
        setMenuOpen(false);
      }
      syncToggles();
    });

    setupSidebarGroups();
    setSidebarCollapsed(readStoredCollapsed(), false);
    setMenuOpen(false);
  }

  function setupThemeFallback() {
    if (window.flyThemeReady) {
      return;
    }

    var toggles = all("[data-fly-theme-toggle]");

    function current() {
      return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    }

    function apply(theme) {
      document.documentElement.dataset.theme = theme;
      localStorage.setItem("flying-theme", theme);
      toggles.forEach(function (button) {
        button.setAttribute("aria-label", theme === "dark" ? "切换到亮色模式" : "切换到暗色模式");
      });
    }

    toggles.forEach(function (button) {
      button.addEventListener("click", function () {
        apply(current() === "dark" ? "light" : "dark");
      });
    });

    apply(current());
  }

  function boot() {
    window.setTimeout(function () {
      setupMenuFallback();
      setupThemeFallback();
    }, 250);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
