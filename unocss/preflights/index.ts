import { basePreflight } from "./base";
import { cardPreflight } from "./cards";
import { contentPreflight } from "./content";
import { footerPreflight } from "./footer";
import { layoutPreflight } from "./layout";
import { sidebarPreflight } from "./sidebar";
import { tokenPreflight } from "./tokens";
import { transitionPreflight } from "./transitions";

export const preflights = [
  tokenPreflight,
  basePreflight,
  layoutPreflight,
  sidebarPreflight,
  cardPreflight,
  contentPreflight,
  footerPreflight,
  transitionPreflight,
];
