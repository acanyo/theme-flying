import { setupMenu } from "./modules/menu.js?fly=1.0.79";
import { setupHomeLayout } from "./modules/home-layout.js?fly=1.0.126";
import { setupCategoryFilter } from "./modules/category-filter.js?fly=1.0.103";
import { setupContactCopy } from "./modules/contact-copy.js?fly=1.0.69";
import { setupBackToTop } from "./modules/back-to-top.js?fly=1.0.1";
import { setupLinkApplication } from "./modules/link-application.js?fly=1.0.5";
import { setupFriendFeed } from "./modules/friend-feed.js?fly=1.0.6";
import { setupMomentPage } from "./modules/moment-page.js?fly=1.0.1";
import { setupMomentTagFilter } from "./modules/moment-tag-filter.js?fly=1.0.1";
import { setupPhotoGroupFilter } from "./modules/photo-group-filter.js?fly=1.0.1";
import { setupPhotoPage } from "./modules/photo-page.js?fly=1.0.1";
import { setupAuthorPopover } from "./modules/author-popover/index.js?fly=1.0.1";
import { setupPostCoverVideo } from "./modules/post-cover-video.js?fly=1.0.106";
import { setupPostVideoTooltip } from "./modules/post-video-tooltip.js?fly=1.0.105";
import { setupPostPage } from "./modules/post-page.js?fly=1.0.132";
import { normalizeSinglePageContent } from "./modules/single-page-content.js?fly=1.0.1";
import { syncPageBodyClass } from "./modules/page-state.js?fly=1.0.2";
import { setupTaxonomyCarousels } from "./modules/taxonomy-carousel.js?fly=1.0.158";
import {
  openSearchWidget,
  setupSearchWidget,
} from "./modules/search-widget.js?fly=1.0.60";
import { setupLoadMore } from "./modules/load-more.js?fly=1.0.78";
import { setupMotion } from "./modules/motion.js?fly=1.0.60";
import { setupScrollReveal } from "./modules/scroll-reveal.js?fly=1.0.62";
import { setupNewsletter } from "./modules/newsletter.js?fly=1.0.118";
import { setupKeyboardShortcuts } from "./modules/keyboard.js?fly=1.0.60";
import { setupTransitions } from "./modules/transitions.js?fly=1.0.60";
import { setupSidebarTip } from "./modules/sidebar-tip.js?fly=1.0.116";

function boot() {
  syncPageBodyClass(document);
  normalizeSinglePageContent(document);
  const menu = setupMenu(document);
  setupHomeLayout(document);
  setupTaxonomyCarousels(document);
  setupCategoryFilter(document);
  setupContactCopy(document);
  setupBackToTop(document);
  setupLinkApplication(document);
  setupFriendFeed(document);
  setupMomentPage(document);
  setupMomentTagFilter(document);
  setupPhotoGroupFilter(document);
  setupPhotoPage(document);
  setupAuthorPopover(document);
  setupPostCoverVideo(document);
  setupPostVideoTooltip(document);
  setupPostPage(document);
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
      syncPageBodyClass(document);
      normalizeSinglePageContent(document);
      menu.refresh();
      setupHomeLayout(document);
      setupTaxonomyCarousels(document);
      setupCategoryFilter(document);
      setupContactCopy(document);
      setupLinkApplication(document);
      setupFriendFeed(document);
      setupMomentPage(document);
      setupMomentTagFilter(document);
      setupPhotoGroupFilter(document);
      setupPhotoPage(document);
      setupAuthorPopover(document);
      setupPostCoverVideo(document);
      setupPostVideoTooltip(document);
      setupPostPage(document);
      setupLoadMore(document);
      setupMotion(document);
      setupScrollReveal(document);
      setupNewsletter(document);
    },
  });

  document.addEventListener("fly:posts-appended", () => {
    setupContactCopy(document);
    setupAuthorPopover(document);
    setupPostCoverVideo(document);
    setupPostVideoTooltip(document);
  });

  document.addEventListener("fly:moments-appended", () => {
    setupMotion(document);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}
