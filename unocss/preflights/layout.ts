export const layoutPreflight = {
  getCSS: () => String.raw`
.mobile-header {
  position: sticky;
  top: 0;
  z-index: 30;
  height: 76px;
  padding: 0 var(--content-padding-mobile);
  background: color-mix(in srgb, var(--page) 88%, transparent);
  backdrop-filter: blur(14px);
}

.brand--mobile {
  font-size: 34px;
}

.menu-button {
  display: grid;
  place-items: center;
}

.menu-button span {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 99px;
  background: currentColor;
  transition: transform 180ms ease;
}

.menu-button span + span {
  margin-top: -14px;
  transform: translateX(6px) rotate(90deg);
}

body[data-menu-open="true"] .menu-button span:first-child {
  transform: rotate(45deg);
}

body[data-menu-open="true"] .menu-button span + span {
  margin-top: -2px;
  transform: rotate(-45deg);
}

.page-overlay {
  background: rgba(12, 18, 28, 0.24);
  backdrop-filter: blur(2px);
  transition: opacity 240ms ease;
}

body[data-menu-open="true"] .page-overlay {
  pointer-events: auto;
  opacity: 1;
}

.signin-link {
  color: var(--text);
  font-size: 14px;
  font-weight: 500;
}

.search-box input {
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

.search-box input:focus {
  border-color: color-mix(in srgb, var(--accent) 42%, var(--line));
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 12%, transparent);
}

.search-icon {
  position: absolute;
  left: 15px;
  width: 13px;
  height: 13px;
  border: 1.8px solid var(--muted);
  border-radius: 50%;
}

.search-icon::after {
  content: "";
  position: absolute;
  right: -4px;
  bottom: -4px;
  width: 6px;
  height: 1.8px;
  border-radius: 99px;
  background: var(--muted);
  transform: rotate(45deg);
}

kbd {
  position: absolute;
  right: 16px;
  color: var(--faint);
  font-size: 12px;
  font-weight: 500;
}

.load-more-wrap {
  margin: 42px 0 78px;
}

@media (min-width: 1180px) {
  .mobile-header {
    display: none;
  }

  .site-main {
    margin-left: var(--sidebar-width);
  }

  .sidebar-search {
    display: none;
  }
}

@media (max-width: 1179px) {
  .desktop-topbar {
    display: none;
  }

  .content-shell,
  .footer-shell {
    max-width: none;
    padding-right: var(--content-padding-mobile);
    padding-left: var(--content-padding-mobile);
  }

  .content-shell {
    padding-top: 12px;
  }
}

@media (max-width: 480px) {
  .load-more-wrap {
    margin-bottom: 58px;
  }
}
`,
};
