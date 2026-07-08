import { componentShortcuts } from "./components";
import { contentShortcuts } from "./content";
import { footerShortcuts } from "./footer";
import { layoutShortcuts } from "./layout";
import { sidebarShortcuts } from "./sidebar";

export const shortcuts = {
  ...layoutShortcuts,
  ...sidebarShortcuts,
  ...componentShortcuts,
  ...contentShortcuts,
  ...footerShortcuts,
};
