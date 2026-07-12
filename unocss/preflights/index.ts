import { basePreflight } from "./base";
import { authorPopoverPreflight } from "./author-popover";
import { cardPreflight } from "./cards";
import { contentPreflight } from "./content";
import { footerPreflight } from "./footer";
import { homeAuthorsPreflight } from "./home-authors";
import { homeFeaturedPreflight } from "./home-featured";
import { homeFeedPreflight } from "./home-feed";
import { homeFriendsPreflight } from "./home-friends";
import { homeLoadMorePreflight } from "./home-load-more";
import { homeLayoutsPreflight } from "./home-layouts";
import { homeMotionPreflight } from "./home-motion";
import { homeNewsletterPreflight } from "./home-newsletter";
import { iconPreflight } from "./icons";
import { layoutPreflight } from "./layout";
import { searchWidgetPreflight } from "./search-widget";
import { scrollRevealPreflight } from "./scroll-reveal";
import { sidebarPreflight } from "./sidebar";
import { tokenPreflight } from "./tokens";
import { transitionPreflight } from "./transitions";

export const preflights = [
  tokenPreflight,
  basePreflight,
  iconPreflight,
  layoutPreflight,
  searchWidgetPreflight,
  sidebarPreflight,
  cardPreflight,
  authorPopoverPreflight,
  homeFeaturedPreflight,
  homeLayoutsPreflight,
  homeFeedPreflight,
  homeLoadMorePreflight,
  homeAuthorsPreflight,
  homeNewsletterPreflight,
  homeFriendsPreflight,
  homeMotionPreflight,
  scrollRevealPreflight,
  contentPreflight,
  footerPreflight,
  transitionPreflight,
];
