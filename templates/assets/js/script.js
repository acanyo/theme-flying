import { setupMenu } from "./modules/menu.js?fly=1.0.39";
import { setupTheme } from "./modules/theme.js?fly=1.0.39";
import { setupHomeLayout } from "./modules/home-layout.js?fly=1.0.39";
import { setupSearchFilter } from "./modules/search-filter.js?fly=1.0.39";
import { setupLoadMore } from "./modules/load-more.js?fly=1.0.39";
import { setupMotion } from "./modules/motion.js?fly=1.0.39";
import { setupNewsletter } from "./modules/newsletter.js?fly=1.0.39";
import { setupKeyboardShortcuts } from "./modules/keyboard.js?fly=1.0.39";
import { setupTransitions } from "./modules/transitions.js?fly=1.0.39";
import { setupSidebarTip } from "./modules/sidebar-tip.js?fly=1.0.39";

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
