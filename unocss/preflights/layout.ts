export const layoutPreflight = {
  getCSS: () => String.raw`
.fly-mobile-header {
  position: sticky;
  top: 0;
  z-index: 30;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 424px) minmax(0, 1fr);
  height: var(--navbar-height);
  align-items: center;
  gap: 16px;
  padding: 8px var(--content-padding-x) 8px 16px;
  background: color-mix(in srgb, var(--page) 82%, transparent);
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

.fly-icon-button.fly-menu-button {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  flex: 0 0 36px;
  border-radius: 999px;
  transition: background-color 160ms ease, color 160ms ease;
}

.fly-menu-button .fly-iconify {
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
  color: var(--text);
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 160ms ease;
}

.fly-navbar-search:hover {
  background: var(--border);
}

.fly-navbar-search:focus-visible {
  outline: 2px solid var(--text);
  outline-offset: 2px;
}

.fly-search-placeholder {
  width: 100%;
  overflow: hidden;
  padding: 4px 42px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fly-navbar-search .fly-search-icon {
  position: absolute;
  left: 16px;
  width: 16px;
  height: 16px;
  color: var(--muted);
}

.fly-navbar-search kbd {
  right: 16px;
}

.fly-navbar-user {
  position: relative;
  display: grid;
  width: 36px;
  height: 36px;
  flex: 0 0 36px;
  place-items: center;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--text);
  justify-self: end;
  transition: background-color 160ms ease, color 160ms ease;
}

.fly-icon-button.fly-menu-button:hover,
.fly-navbar-user:hover {
  background: var(--page-alt);
}

.fly-icon-button.fly-menu-button:focus-visible,
.fly-navbar-user:focus-visible {
  outline: 2px solid var(--text);
  outline-offset: 2px;
}

.fly-navbar-user .fly-iconify {
  grid-area: 1 / 1;
  width: 17px;
  height: 17px;
  flex-basis: 17px;
}

.fly-page-overlay {
  background: rgba(12, 18, 28, 0.24);
  backdrop-filter: blur(2px);
  transition: opacity 240ms ease;
}

body[data-fly-menu-open="true"] .fly-page-overlay {
  pointer-events: auto;
  opacity: 1;
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

  body[data-fly-menu-open="true"] .fly-mobile-header {
    z-index: 60;
  }

  .fly-navbar-brand {
    width: auto;
    flex: 1 1 auto;
  }

  .fly-navbar-search {
    width: 36px;
    max-width: none;
    flex: 0 0 36px;
    margin-left: auto;
  }

  .fly-search-placeholder {
    border-radius: 999px;
    padding: 0;
    font-size: 0;
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
