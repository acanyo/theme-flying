import { setupMenu } from "./modules/menu.js?fly=1.0.79";
import { setupHomeLayout } from "./modules/home-layout.js?fly=1.0.92";
import { setupCategoryFilter } from "./modules/category-filter.js?fly=1.0.60";
import { setupContactCopy } from "./modules/contact-copy.js?fly=1.0.68";
import { setupAuthorPopover } from "./modules/author-popover.js?fly=1.0.74";
import {
  openSearchWidget,
  setupSearchWidget,
} from "./modules/search-widget.js?fly=1.0.60";
import { setupLoadMore } from "./modules/load-more.js?fly=1.0.75";
import { setupMotion } from "./modules/motion.js?fly=1.0.60";
import { setupScrollReveal } from "./modules/scroll-reveal.js?fly=1.0.62";
import { setupNewsletter } from "./modules/newsletter.js?fly=1.0.60";
import { setupKeyboardShortcuts } from "./modules/keyboard.js?fly=1.0.60";
import { setupTransitions } from "./modules/transitions.js?fly=1.0.60";
import { setupSidebarTip } from "./modules/sidebar-tip.js?fly=1.0.79";

function boot() {
  const menu = setupMenu(document);
  setupHomeLayout(document);
  setupCategoryFilter(document);
  setupContactCopy(document);
  setupAuthorPopover(document);
  setupSearchWidget(document);
  setupLoadMore(document);
  setupMotion(document);
  setupScrollReveal(document);

  setupSidebarTip(document);
  setupNewsletter(document);
  setupKeyboardShortcuts(document, {
    closeMenu: menu.close,
    openSearch: openSearchWidget,
  });
  setupTransitions(document, {
    refresh: () => {
      menu.refresh();
      setupHomeLayout(document);
      setupCategoryFilter(document);
      setupContactCopy(document);
      setupAuthorPopover(document);
      setupLoadMore(document);
      setupMotion(document);
      setupScrollReveal(document);
      setupNewsletter(document);
    },
  });

  document.addEventListener("fly:posts-appended", () => {
    setupContactCopy(document);
    setupAuthorPopover(document);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}
