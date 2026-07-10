import { basePreflight } from "./base";
import { cardPreflight } from "./cards";
import { contentPreflight } from "./content";
import { footerPreflight } from "./footer";
import { homeAuthorsPreflight } from "./home-authors";
import { homeFeaturedPreflight } from "./home-featured";
import { homeFeedPreflight } from "./home-feed";
import { homeLoadMorePreflight } from "./home-load-more";
import { homeLayoutsPreflight } from "./home-layouts";
import { homeMotionPreflight } from "./home-motion";
import { iconPreflight } from "./icons";
import { layoutPreflight } from "./layout";
import { sidebarPreflight } from "./sidebar";
import { tokenPreflight } from "./tokens";
import { transitionPreflight } from "./transitions";

export const preflights = [
  tokenPreflight,
  basePreflight,
  iconPreflight,
  layoutPreflight,
  sidebarPreflight,
  cardPreflight,
  homeFeaturedPreflight,
  homeLayoutsPreflight,
  homeFeedPreflight,
  homeLoadMorePreflight,
  homeAuthorsPreflight,
  homeMotionPreflight,
  contentPreflight,
  footerPreflight,
  transitionPreflight,
];
