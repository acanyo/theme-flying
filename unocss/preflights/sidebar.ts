export const sidebarPreflight = {
  getCSS: () => String.raw`
.site-sidebar {
  background: color-mix(in srgb, var(--page) 96%, transparent);
  backdrop-filter: blur(12px);
  transition: transform 240ms ease;
}

.sidebar-tagline {
  margin: 32px 0 30px;
  max-width: 210px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.45;
}

.theme-toggle {
  display: inline-flex;
  width: 48px;
  height: 30px;
  align-items: center;
  justify-content: space-around;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--page);
  color: var(--text);
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);
}

.sun,
.moon {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.sun {
  border: 2px solid currentColor;
  box-shadow: 0 0 0 4px color-mix(in srgb, currentColor 12%, transparent);
}

.moon {
  background: currentColor;
  box-shadow: inset 4px 0 0 var(--page);
}

.nav-link,
.sidebar-block a {
  transition: color 160ms ease;
}

.sidebar-block a {
  display: flex;
  min-height: 32px;
  align-items: center;
  gap: 12px;
  border-left: 1px solid var(--line);
  padding-left: 16px;
  color: var(--muted);
  font-size: 14px;
  font-weight: 500;
}

.nav-link:hover,
.sidebar-block a:hover,
.nav-link.is-active {
  color: var(--accent);
}

.nav-icon {
  position: relative;
  width: 16px;
  height: 16px;
  border: 1.6px solid currentColor;
  border-radius: 5px;
  opacity: 0.75;
}

.nav-icon--home::before {
  content: "";
  position: absolute;
  left: 2px;
  top: -5px;
  width: 8px;
  height: 8px;
  border-top: 1.6px solid currentColor;
  border-left: 1.6px solid currentColor;
  background: var(--page);
  transform: rotate(45deg);
}

.nav-icon--archive {
  border-radius: 50%;
}

.nav-icon--archive::before,
.nav-icon--category::before,
.nav-icon--tag::before {
  content: "";
  position: absolute;
  inset: 4px;
  border-radius: inherit;
  background: currentColor;
}

.nav-icon--tag {
  transform: rotate(-25deg);
}

.sidebar-block h2 {
  margin: 0 0 12px;
  color: var(--text);
  font-size: 14px;
  font-weight: 700;
}

.sidebar-socials {
  background: color-mix(in srgb, var(--page) 88%, transparent);
  backdrop-filter: blur(14px);
}

.sidebar-socials a {
  color: var(--muted);
  font-size: 13px;
  font-weight: 700;
}

@media (max-width: 1179px) {
  .site-sidebar {
    transform: translateX(-100%);
  }

  body[data-menu-open="true"] .site-sidebar {
    transform: translateX(0);
  }
}

@media (max-width: 480px) {
  .site-sidebar {
    width: min(var(--sidebar-width), 82vw);
  }

  .sidebar-inner {
    padding-right: 24px;
    padding-left: 24px;
  }
}
`,
};
