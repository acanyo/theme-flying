import { setupMenu } from "./modules/menu.js";
import { setupTheme } from "./modules/theme.js";
import { setupSearchFilter } from "./modules/search-filter.js";
import { setupNewsletter } from "./modules/newsletter.js";
import { setupKeyboardShortcuts } from "./modules/keyboard.js";
import { setupTransitions } from "./modules/transitions.js";

function boot() {
  const menu = setupMenu(document);
  setupTheme(document);
  const searchFilter = setupSearchFilter(document);

  setupNewsletter(document);
  setupKeyboardShortcuts(document, {
    closeMenu: menu.close,
    focusSearch: searchFilter.focusSearch,
  });
  setupTransitions(document, {
    refresh: () => {
      setupSearchFilter(document);
      setupNewsletter(document);
    },
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}
