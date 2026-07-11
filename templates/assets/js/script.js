import { setupMenu } from "./modules/menu.js?fly=1.0.41";
import { setupTheme } from "./modules/theme.js?fly=1.0.41";
import { setupHomeLayout } from "./modules/home-layout.js?fly=1.0.41";
import { setupSearchFilter } from "./modules/search-filter.js?fly=1.0.41";
import { setupLoadMore } from "./modules/load-more.js?fly=1.0.41";
import { setupMotion } from "./modules/motion.js?fly=1.0.41";
import { setupNewsletter } from "./modules/newsletter.js?fly=1.0.41";
import { setupKeyboardShortcuts } from "./modules/keyboard.js?fly=1.0.41";
import { setupTransitions } from "./modules/transitions.js?fly=1.0.41";
import { setupSidebarTip } from "./modules/sidebar-tip.js?fly=1.0.41";

function boot() {
  const menu = setupMenu(document);
  setupTheme(document);
  setupHomeLayout(document);
  const searchFilter = setupSearchFilter(document);
  setupLoadMore(document);
  setupMotion(document);

  setupSidebarTip(document);
  setupNewsletter(document);
  setupKeyboardShortcuts(document, {
    closeMenu: menu.close,
    focusSearch: searchFilter.focusSearch,
  });
  setupTransitions(document, {
    refresh: () => {
      menu.refresh();
      setupHomeLayout(document);
      setupSearchFilter(document);
      setupLoadMore(document);
      setupMotion(document);
      setupNewsletter(document);
    },
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}
