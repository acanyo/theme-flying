export const layoutPreflight = {
  getCSS: () => String.raw`
.fly-mobile-header {
  position: sticky;
  top: 0;
  z-index: 9999;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 424px) minmax(0, 1fr);
  height: var(--navbar-height);
  align-items: center;
  gap: 16px;
  padding: 8px var(--content-padding-x) 8px 16px;
  background: transparent;
  backdrop-filter: blur(10px);
}

.fly-brand--mobile {
  max-width: 160px;
  overflow: hidden;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-overflow: ellipsis;
}

.fly-navbar-brand {
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  gap: 8px;
}

.fly-icon-button.fly-menu-button,
.fly-icon-button.fly-sidebar-collapse-button {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  flex: 0 0 36px;
  border-radius: 999px;
  transition: background-color 160ms ease, color 160ms ease;
}

.fly-menu-button .fly-iconify,
.fly-sidebar-collapse-button .fly-iconify {
  grid-area: 1 / 1;
  width: 20px;
  height: 20px;
  flex-basis: 20px;
}

.fly-navbar-search {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 424px;
  height: 40px;
  align-items: center;
  justify-self: center;
  border: 0;
  border-radius: 10px;
  outline: 0;
  background: var(--page-alt);
  gap: 10px;
  color: var(--faint);
  padding: 4px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 160ms ease;
}

.fly-navbar-search:hover {
  background: var(--hover-bg-color);
}

.fly-navbar-search:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.fly-search-placeholder {
  width: auto;
  flex: 1 1 auto;
  overflow: hidden;
  padding: 0;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fly-navbar-search .fly-search-icon {
  width: 16px;
  height: 16px;
  color: var(--faint);
}

.fly-navbar-search kbd {
  position: static;
  margin-left: auto;
}

.fly-icon-button.fly-menu-button:hover,
.fly-icon-button.fly-sidebar-collapse-button:hover {
  background: var(--page-alt);
}

.fly-icon-button.fly-menu-button:focus-visible,
.fly-icon-button.fly-sidebar-collapse-button:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.fly-sidebar-collapse-button {
  display: none !important;
}

kbd {
  position: absolute;
  right: 16px;
  color: var(--faint);
  font-size: 12px;
  font-weight: 500;
}

.fly-load-more-wrap {
  margin: 42px 0 78px;
}

@media (min-width: 768px) {
  .fly-mobile-header {
    isolation: isolate;
  }

  .fly-mobile-header::before {
    position: absolute;
    inset: 0;
    z-index: -1;
    background: var(--page);
    content: "";
    opacity: 0.9;
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  body .fly-site-main {
    margin-left: var(--sidebar-collapsed-width);
    transition: margin-left 220ms ease;
  }

  body .fly-content-shell,
  body .fly-footer-shell {
    padding-right: var(--content-padding-x);
    padding-left: var(--content-padding-x);
  }

  body .fly-content-shell {
    padding-top: 16px;
  }

}

@media (min-width: 1200px) {
  .fly-menu-button {
    display: none !important;
  }

  .fly-sidebar-collapse-button {
    display: grid !important;
  }

  body .fly-site-main {
    margin-left: var(--sidebar-width);
    transition: margin-left 220ms ease;
  }

  body[data-fly-sidebar-collapsed="true"] .fly-site-main {
    margin-left: var(--sidebar-collapsed-width);
  }

  body .fly-content-shell,
  body .fly-footer-shell {
    padding-right: var(--content-padding-x);
    padding-left: var(--content-padding-x);
  }

  body .fly-content-shell {
    padding-top: 16px;
  }
}

@media (max-width: 767px) {
  body .fly-content-shell,
  body .fly-footer-shell {
    max-width: none;
    padding-right: var(--content-padding-mobile);
    padding-left: var(--content-padding-mobile);
  }

  body .fly-content-shell {
    padding-top: 16px;
  }

  .fly-mobile-header {
    display: flex;
    gap: 8px;
    padding: 8px 16px;
  }

  .fly-navbar-brand {
    width: auto;
    flex: 1 1 auto;
  }

  .fly-navbar-search {
    display: grid;
    width: 36px;
    max-width: none;
    flex: 0 0 36px;
    margin-left: auto;
    padding: 0;
    place-items: center;
  }

  .fly-search-placeholder {
    display: none;
  }

  .fly-navbar-search kbd {
    display: none;
  }
}

@media (max-width: 480px) {
  .fly-load-more-wrap {
    margin-bottom: 58px;
  }
}
`,
};
