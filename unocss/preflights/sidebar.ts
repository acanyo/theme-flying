export const sidebarPreflight = {
  getCSS: () => String.raw`
.fly-site-sidebar {
  border-right: 0;
  background: var(--page);
  overflow: hidden;
  transition: width 220ms ease, transform 220ms ease, box-shadow 220ms ease;
}

.fly-sidebar-inner {
  scrollbar-width: none;
}

.fly-sidebar-inner::-webkit-scrollbar {
  display: none;
}

.fly-sidebar-nav,
.fly-sidebar-section,
.fly-sidebar-sub-list,
.fly-sidebar-tags {
  display: flex;
  flex-direction: column;
}

.fly-sidebar-nav {
  gap: 2px;
}

.fly-sidebar-section {
  gap: 2px;
}

.fly-sidebar-parent,
.fly-sidebar-link,
.fly-sidebar-section-link,
.fly-sidebar-tag-link,
.fly-sidebar-sub-link {
  position: relative;
  border: 0;
  color: var(--text);
  line-height: 1.25;
  transition: background-color 100ms ease, color 100ms ease;
}

.fly-sidebar-parent,
.fly-sidebar-link {
  display: flex;
  width: 100%;
  height: 38px;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
  background: transparent;
  padding: 8px 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
}

.fly-sidebar-parent:hover,
.fly-sidebar-parent.fly-is-open,
.fly-sidebar-parent.fly-is-active,
.fly-sidebar-link:hover,
.fly-sidebar-link.fly-is-active,
.fly-sidebar-link[aria-current="page"],
.fly-sidebar-sub-link:hover,
.fly-sidebar-sub-link.fly-is-active,
.fly-sidebar-section-link:hover,
.fly-sidebar-tag-link:hover {
  background: var(--page-alt);
  color: var(--text);
}

.fly-sidebar-parent[aria-expanded="false"] .fly-iconify--chevron {
  transform: rotate(-90deg);
}

.fly-sidebar-parent[aria-expanded="false"] + .fly-sidebar-sub-list {
  display: none;
}

.fly-nav-label {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fly-menu-icon {
  display: inline-flex;
  width: 18px;
  height: 18px;
  flex: 0 0 18px;
  align-items: center;
  justify-content: center;
  color: currentColor;
  transition: color 300ms ease;
}

.fly-menu-icon svg {
  display: block;
  width: 100%;
  height: 100%;
}

.fly-menu-icon--sub {
  width: 16px;
  height: 16px;
  flex-basis: 16px;
}

.fly-sidebar-sub-list {
  gap: 2px;
  padding: 0;
}

.fly-sidebar-sub-link {
  display: flex;
  width: calc(100% - 36px);
  height: 33px;
  align-items: center;
  margin-left: 36px;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
}

.fly-sidebar-section-title {
  display: flex;
  width: 100%;
  height: 38px;
  align-items: center;
  margin-top: 16px;
  border-radius: 10px;
  color: var(--faint);
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
}

.fly-sidebar-menu-separator {
  display: none;
}

.fly-sidebar-tags {
  margin-top: 14px;
  padding-top: 0;
}

.fly-sidebar-empty {
  width: 220px;
  border-radius: 10px;
  background: var(--page-alt);
  color: var(--faint);
  padding: 10px 12px;
  font-size: 13px;
  line-height: 1.45;
}

.fly-sidebar-section-link,
.fly-sidebar-tag-link {
  display: flex;
  width: 100%;
  align-items: center;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
}

.fly-sidebar-section-link {
  height: 34px;
  gap: 16px;
  padding: 8px 12px;
  color: var(--faint);
}

.fly-sidebar-tag-link {
  height: 38px;
  padding: 8px 12px;
  color: var(--text);
}

.fly-tag-dot {
  width: 10px;
  height: 10px;
  flex: 0 0 10px;
  margin-right: 24px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--text) 18%, var(--page));
  background: var(--fly-tag-color, var(--line));
}

.fly-sidebar-socials {
  color: var(--muted);
}

.fly-social-icons {
  display: flex;
  min-height: 32px;
  align-items: center;
  gap: 2px;
}

.fly-social-icon,
.fly-sidebar-foot-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: var(--muted);
  transition: background 160ms ease, color 160ms ease;
}

.fly-social-icon {
  width: 32px;
  height: 32px;
}

.fly-social-icon .fly-iconify,
.fly-social-icon .fly-social-custom-icon {
  width: 16px;
  height: 16px;
  flex-basis: 16px;
}

.fly-sidebar-foot-link {
  height: 28px;
  gap: 6px;
  padding: 4px 9px;
  font-size: 13px;
  font-weight: 500;
}

.fly-sidebar-foot-link .fly-iconify,
.fly-sidebar-foot-link .fly-social-custom-icon {
  width: 15px;
  height: 15px;
  flex-basis: 15px;
}

.fly-social-custom-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
}

.fly-social-custom-icon svg {
  display: block;
  width: 100%;
  height: 100%;
}

.fly-social-icon:hover,
.fly-sidebar-foot-link:hover {
  background: var(--page-alt);
  color: var(--text);
}

.fly-sidebar-copyright {
  margin: 26px 0 0;
  color: var(--faint);
  font-size: 12px;
  line-height: 1.45;
}

.fly-sidebar-tip {
  --fly-tip-bg: rgba(5, 5, 5, 0.7);
  --fly-tip-text: #ffffff;

  position: fixed;
  z-index: 95;
  max-width: min(320px, calc(100vw - 112px));
  border: 0;
  border-radius: 6px;
  background: var(--fly-tip-bg);
  color: var(--fly-tip-text);
  opacity: 0;
  overflow-wrap: anywhere;
  padding: 4px 10px;
  pointer-events: none;
  transform: translate(-4px, -50%);
  transition: opacity 120ms ease, transform 120ms ease;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}

.fly-sidebar-tip::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -4px;
  width: 0;
  height: 0;
  border: 0;
  border-style: solid;
  border-width: 4px 4px 4px 0;
  border-color: transparent var(--fly-tip-bg) transparent transparent;
  background: transparent;
  transform: translateY(-50%);
}

.fly-sidebar-tip[data-fly-visible="true"] {
  opacity: 1;
  transform: translate(0, -50%);
}

.fly-sidebar-flyout {
  position: fixed;
  z-index: 96;
  width: 180px;
  max-width: min(220px, calc(100vw - 112px));
  max-height: min(360px, calc(100vh - 24px));
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--page);
  box-shadow: var(--shadow-soft);
  opacity: 0;
  overflow: visible;
  padding: 4px;
  pointer-events: none;
  transform: translate(-4px, -4px);
  transition: opacity 120ms ease, transform 120ms ease;
}

.fly-sidebar-flyout::before {
  content: "";
  position: absolute;
  top: 18px;
  left: -5px;
  width: 8px;
  height: 8px;
  border-bottom: 1px solid var(--line);
  border-left: 1px solid var(--line);
  background: var(--page);
  transform: rotate(45deg);
}

.fly-sidebar-flyout[data-fly-visible="true"] {
  opacity: 1;
  pointer-events: auto;
  transform: translate(0, -4px);
}

.fly-sidebar-flyout-list {
  max-height: calc(min(360px, 100vh - 24px) - 8px);
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
}

.fly-sidebar-flyout-link {
  display: flex;
  min-height: 33px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  color: var(--text);
  padding: 6px 10px;
  transition: background 160ms ease, color 160ms ease;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.25;
}

.fly-sidebar-flyout-link:hover,
.fly-sidebar-flyout-link:focus-visible {
  background: var(--page-alt);
  color: var(--text);
}

.fly-sidebar-flyout-link span:last-child {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fly-sidebar-flyout-link .fly-menu-icon {
  width: 16px;
  height: 16px;
  flex-basis: 16px;
}

@media (min-width: 1180px) {
  body[data-fly-sidebar-collapsed="true"] .fly-site-sidebar {
    width: var(--sidebar-collapsed-width);
  }

  body[data-fly-sidebar-collapsed="true"] .fly-sidebar-inner {
    padding: 14px 16px 14px 15px;
  }

  body[data-fly-sidebar-collapsed="true"] .fly-sidebar-parent,
  body[data-fly-sidebar-collapsed="true"] .fly-sidebar-link {
    width: 38px;
    justify-content: center;
    gap: 0;
    border-radius: 8px;
    padding: 8px 10px;
  }

  body[data-fly-sidebar-collapsed="true"] .fly-menu-icon {
    width: 20px;
    height: 20px;
    flex-basis: 20px;
    margin: 0;
  }

  body[data-fly-sidebar-collapsed="true"] .fly-sidebar-menu-separator {
    display: flex;
    width: 100%;
    height: 21px;
    align-items: center;
    justify-content: center;
    margin: 4px 0;
  }

  body[data-fly-sidebar-collapsed="true"] .fly-sidebar-menu-separator::before {
    content: "";
    width: 36px;
    height: 1px;
    border-radius: 999px;
    background: var(--line);
  }

  body[data-fly-sidebar-collapsed="true"] .fly-nav-label,
  body[data-fly-sidebar-collapsed="true"] .fly-iconify--chevron,
  body[data-fly-sidebar-collapsed="true"] .fly-sidebar-section-title,
  body[data-fly-sidebar-collapsed="true"] .fly-sidebar-sub-list,
  body[data-fly-sidebar-collapsed="true"] .fly-sidebar-tags {
    display: none;
  }

  body[data-fly-sidebar-collapsed="true"] .fly-sidebar-socials {
    padding-right: 10px;
    padding-left: 10px;
  }

  body[data-fly-sidebar-collapsed="true"] .fly-social-icons {
    flex-direction: column;
  }

  body[data-fly-sidebar-collapsed="true"] .fly-sidebar-foot-link span:last-child,
  body[data-fly-sidebar-collapsed="true"] .fly-sidebar-copyright {
    display: none;
  }
}

@media (max-width: 1179px) {
  .fly-sidebar-tip,
  .fly-sidebar-flyout {
    display: none;
  }

  .fly-site-sidebar {
    top: 0;
    bottom: 0;
    z-index: 45;
    width: min(273px, 86vw);
    height: 100vh;
    transform: translateX(-100%);
    box-shadow: 22px 0 60px rgba(0, 0, 0, 0.12);
  }

  body[data-fly-menu-open="true"] .fly-site-sidebar {
    transform: translateX(0);
  }

  .fly-sidebar-inner {
    padding-top: 72px;
  }

  .fly-sidebar-socials {
    display: block;
  }
}
`,
};
