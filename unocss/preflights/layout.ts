export const layoutPreflight = {
  getCSS: () => String.raw`
.fly-mobile-header {
  position: sticky;
  top: 0;
  z-index: 30;
  display: flex;
  height: var(--navbar-height);
  align-items: center;
  gap: 16px;
  padding: 8px var(--content-padding-x) 8px 16px;
  background: color-mix(in srgb, var(--page) 92%, transparent);
  backdrop-filter: blur(16px);
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
  width: calc(var(--sidebar-width) + 200px);
  min-width: 0;
  align-items: center;
  gap: 8px;
}

.fly-menu-button {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  flex: 0 0 36px;
  border-radius: 999px;
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
  width: min(424px, 34vw);
  height: 40px;
  align-items: center;
  margin-inline: auto;
}

.fly-navbar-search input {
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 10px;
  outline: 0;
  background: var(--page-alt);
  color: var(--text);
  padding: 4px 42px 4px 42px;
  font-size: 14px;
  font-weight: 500;
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
  background: var(--page-alt);
  color: var(--text);
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

.fly-signin-link {
  color: var(--text);
  font-size: 14px;
  font-weight: 500;
}

.fly-search-box input {
  width: 100%;
  height: 100%;
  border: 1px solid var(--line);
  border-radius: 999px;
  outline: 0;
  background: var(--page);
  color: var(--text);
  padding: 0 58px 0 38px;
  font-size: 14px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
}

.fly-search-box input:focus {
  border-color: color-mix(in srgb, var(--accent) 42%, var(--line));
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 12%, transparent);
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

@media (min-width: 1180px) {
  body .fly-site-main {
    margin-left: var(--sidebar-width);
    transition: margin-left 220ms ease;
  }

  body[data-fly-sidebar-collapsed="true"] .fly-site-main {
    margin-left: var(--sidebar-collapsed-width);
  }

  body .fly-desktop-topbar,
  body .fly-sidebar-search {
    display: none;
  }
}

@media (max-width: 1179px) {
  body .fly-desktop-topbar {
    display: none;
  }

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
    flex: 0 0 36px;
    margin-left: auto;
  }

  .fly-navbar-search input {
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
