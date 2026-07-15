export const sidebarPreflight = {
  getCSS: () => String.raw`
.fly-site-sidebar {
  border-right: 0;
  background: var(--page);
  overflow: hidden;
  transition: width 220ms ease, transform 600ms cubic-bezier(0.2, 1, 0.2, 1), box-shadow 220ms ease;
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
.fly-sidebar-tags-trigger,
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

.fly-sidebar-parent:is(:hover, :focus-visible, .fly-is-open, .fly-is-active, [aria-current="page"]),
.fly-sidebar-link:is(:hover, :focus-visible, .fly-is-open, .fly-is-active, [aria-current="page"]),
.fly-sidebar-sub-link:is(:hover, :focus-visible, .fly-is-open, .fly-is-active, [aria-current="page"]),
.fly-sidebar-tag-link:is(:hover, :focus-visible) {
  background: var(--hover-bg-color);
  color: var(--text);
}

.fly-sidebar-tags-trigger:is(:hover, :focus-visible, .fly-is-active, [aria-current="page"]) {
  background: var(--hover-bg-color);
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
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  align-items: center;
  justify-content: center;
  color: var(--faint);
  transition: color 300ms ease;
}

:is(.fly-sidebar-parent, .fly-sidebar-link, .fly-sidebar-sub-link, .fly-sidebar-flyout-link):is(
    :hover,
    :focus-visible,
    .fly-is-open,
    .fly-is-active,
    [aria-current="page"]
  )
  > .fly-menu-icon {
  color: var(--text);
}

.fly-menu-icon svg {
  display: block;
  width: 100%;
  height: 100%;
}

.fly-menu-icon img {
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
  position: relative;
  margin-top: 16px;
  background: transparent;
}

.fly-sidebar-tags-trigger {
  display: flex;
  width: 100%;
  height: 36px;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
  background: transparent;
  overflow: hidden;
  padding: 8px 12px;
  color: var(--faint);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

.fly-sidebar-tags-arrow {
  width: 16px;
  height: 16px;
  flex-basis: 16px;
  margin-left: auto;
  overflow: hidden;
  clip-path: inset(0 100% 0 0);
  transform: translateX(-2px);
  transition: clip-path 300ms, transform 300ms;
}

.fly-sidebar-tags-trigger:hover .fly-sidebar-tags-arrow,
.fly-sidebar-tags-trigger:focus-visible .fly-sidebar-tags-arrow {
  clip-path: inset(0);
  transform: translateX(0);
}

.fly-sidebar-tags-trigger .fly-iconify--tag {
  display: none;
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
}

.fly-sidebar-tag-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.fly-sidebar-tag-link {
  display: flex;
  width: 100%;
  height: 38px;
  min-height: 38px;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
  background: transparent;
  overflow: hidden;
  padding: 8px 12px;
  color: var(--text);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

.fly-tag-dot {
  display: inline-flex;
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
}

.fly-tag-dot::before {
  content: "";
  width: 8px;
  height: 8px;
  flex: 0 0 8px;
  border-radius: 50%;
  background: var(--fly-tag-color, var(--line));
}

.fly-sidebar-socials {
  display: none;
  color: var(--muted);
}

.fly-social-icons {
  display: flex;
  min-height: 32px;
  align-items: center;
  gap: 2px;
  margin: 0 -8px;
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
  background: color-mix(in srgb, var(--hover-bg-color) 46%, transparent);
  color: color-mix(in srgb, var(--text) 84%, var(--page));
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
  border: 0;
  border-radius: 14px;
  background: var(--page);
  box-shadow: 0 20px 60px -10px rgba(177, 170, 170, 0.24), 0 4px 20px -8px rgba(0, 0, 0, 0.24);
  opacity: 0;
  overflow: visible;
  padding: 7px 4px;
  pointer-events: none;
  transform: translate(-4px, -4px);
  visibility: hidden;
  transition: transform 150ms ease, visibility 150ms ease, opacity 150ms ease;
}

.fly-sidebar-flyout::before {
  display: none;
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
  visibility: visible;
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

.fly-sidebar-flyout-link:is(:hover, :focus-visible, .fly-is-open, .fly-is-active, [aria-current="page"]) {
  background: var(--hover-bg-color);
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

.fly-sidebar-flyout-link .fly-tag-dot {
  width: 6px;
  height: 6px;
  flex: 0 0 6px;
  margin: 0 4px 0 0;
}

.fly-sidebar-flyout-link .fly-tag-dot::before {
  width: 6px;
  height: 6px;
  flex-basis: 6px;
  background: var(--fly-tag-color, currentColor);
}

.fly-navigation-popup {
  position: fixed;
  inset: 0;
  z-index: 10000;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: visibility 200ms ease, opacity 200ms ease;
}

.fly-navigation-backdrop {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  background: var(--navigation-overlay);
  opacity: 0.8;
}

.fly-navigation-panel.fly-site-sidebar {
  top: 0;
  bottom: 0;
  z-index: 1;
  width: min(var(--navigation-panel-width), 86vw);
  height: 100vh;
  background: var(--page);
  box-shadow: none;
  transform: translateX(-100%);
  transition: transform 600ms cubic-bezier(0.2, 1, 0.2, 1);
}

.fly-navigation-panel-header {
  display: flex;
  height: var(--navbar-height);
  flex: 0 0 var(--navbar-height);
  align-items: center;
  gap: 8px;
  padding: 0 18px;
}

.fly-icon-button.fly-navigation-close {
  display: grid;
  width: 32px;
  height: 32px;
  flex: 0 0 32px;
  place-items: center;
  border-radius: 999px;
  background: var(--page-alt);
  transition: background-color 150ms ease, color 150ms ease;
}

.fly-icon-button.fly-navigation-close:hover {
  background: var(--hover-bg-color);
}

.fly-navigation-close .fly-iconify {
  width: 18px;
  height: 18px;
  flex-basis: 18px;
}

.fly-navigation-brand {
  max-width: calc(100% - 44px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.fly-navigation-panel > .fly-sidebar-inner {
  padding: 0 12px 14px;
}

.fly-navigation-panel > .fly-sidebar-socials {
  display: none;
}

body[data-fly-menu-open="true"] .fly-navigation-popup {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

body[data-fly-menu-open="true"] .fly-navigation-panel {
  transform: translateX(0);
}

@media (min-width: 1200px) {
  .fly-navigation-popup {
    display: none;
  }

  .fly-site-sidebar--static .fly-sidebar-socials {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: auto var(--fly-responsive-gutter) 0 12px;
    padding: 16px 16px 0;
  }

  body[data-fly-sidebar-collapsed="true"] .fly-site-sidebar--static {
    width: var(--sidebar-collapsed-width);
  }

  body[data-fly-sidebar-collapsed="true"]
    .fly-site-sidebar--static
    .fly-sidebar-inner {
    padding: 14px calc(var(--fly-responsive-gutter) - 14px) 14px 15px;
  }

  body[data-fly-sidebar-collapsed="true"]
    .fly-site-sidebar--static
    .fly-sidebar-parent,
  body[data-fly-sidebar-collapsed="true"]
    .fly-site-sidebar--static
    .fly-sidebar-link {
    width: 38px;
    justify-content: center;
    gap: 0;
    border-radius: 8px;
    padding: 8px 10px;
  }

  body[data-fly-sidebar-collapsed="true"]
    .fly-site-sidebar--static
    .fly-menu-icon {
    width: 20px;
    height: 20px;
    flex-basis: 20px;
    margin: 0;
  }

  body[data-fly-sidebar-collapsed="true"]
    .fly-site-sidebar--static
    .fly-sidebar-menu-separator {
    display: flex;
    width: 100%;
    height: 21px;
    align-items: center;
    justify-content: center;
    margin: 4px 0;
  }

  body[data-fly-sidebar-collapsed="true"]
    .fly-site-sidebar--static
    .fly-sidebar-menu-separator::before {
    content: "";
    width: 36px;
    height: 1px;
    border-radius: 999px;
    background: var(--line);
  }

  body[data-fly-sidebar-collapsed="true"]
    .fly-site-sidebar--static
    .fly-nav-label,
  body[data-fly-sidebar-collapsed="true"]
    .fly-site-sidebar--static
    .fly-iconify--chevron,
  body[data-fly-sidebar-collapsed="true"]
    .fly-site-sidebar--static
    .fly-sidebar-section-title,
  body[data-fly-sidebar-collapsed="true"]
    .fly-site-sidebar--static
    .fly-sidebar-sub-list {
    display: none;
  }

  body[data-fly-sidebar-collapsed="true"]
    .fly-site-sidebar--static
    .fly-sidebar-tags {
    display: flex;
  }

  body[data-fly-sidebar-collapsed="true"]
    .fly-site-sidebar--static
    .fly-sidebar-tags-trigger {
    width: 38px;
    height: 38px;
    justify-content: center;
    gap: 0;
    border-radius: 8px;
    margin-left: 0;
    padding: 8px 10px;
  }

  body[data-fly-sidebar-collapsed="true"]
    .fly-site-sidebar--static
    .fly-sidebar-tags-trigger
    .fly-iconify--tag {
    display: inline-flex;
  }

  body[data-fly-sidebar-collapsed="true"]
    .fly-site-sidebar--static
    :is(.fly-sidebar-tags-trigger .fly-nav-label, .fly-sidebar-tags-arrow, .fly-sidebar-tag-list) {
    display: none;
  }

  body[data-fly-sidebar-collapsed="true"]
    .fly-site-sidebar--static
    .fly-sidebar-socials {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  body .fly-site-sidebar.fly-site-sidebar--static {
    width: var(--sidebar-collapsed-width);
  }

  .fly-site-sidebar--static .fly-sidebar-inner {
    padding: 14px calc(var(--fly-responsive-gutter) - 14px) 14px 15px;
  }

  .fly-site-sidebar--static .fly-sidebar-parent,
  .fly-site-sidebar--static .fly-sidebar-link {
    width: 38px;
    justify-content: center;
    gap: 0;
    border-radius: 8px;
    padding: 8px 10px;
  }

  .fly-site-sidebar--static .fly-menu-icon {
    width: 20px;
    height: 20px;
    flex-basis: 20px;
    margin: 0;
  }

  .fly-site-sidebar--static .fly-sidebar-menu-separator {
    display: flex;
    width: 100%;
    height: 21px;
    align-items: center;
    justify-content: center;
    margin: 4px 0;
  }

  .fly-site-sidebar--static .fly-sidebar-menu-separator::before {
    content: "";
    width: 36px;
    height: 1px;
    border-radius: 999px;
    background: var(--line);
  }

  .fly-site-sidebar--static .fly-nav-label,
  .fly-site-sidebar--static .fly-iconify--chevron,
  .fly-site-sidebar--static .fly-sidebar-section-title,
  .fly-site-sidebar--static .fly-sidebar-sub-list,
  .fly-site-sidebar--static .fly-sidebar-socials {
    display: none;
  }

  .fly-site-sidebar--static .fly-sidebar-tags {
    display: flex;
  }

  .fly-site-sidebar--static .fly-sidebar-tags-trigger {
    width: 38px;
    height: 38px;
    justify-content: center;
    gap: 0;
    border-radius: 8px;
    margin-left: 0;
    padding: 8px 10px;
  }

  .fly-site-sidebar--static
    .fly-sidebar-tags-trigger
    .fly-iconify--tag {
    display: inline-flex;
  }

  .fly-site-sidebar--static
    :is(.fly-sidebar-tags-trigger .fly-nav-label, .fly-sidebar-tags-arrow, .fly-sidebar-tag-list) {
    display: none;
  }
}

@media (max-width: 767px) {
  .fly-sidebar-tip,
  .fly-sidebar-flyout {
    display: none;
  }

  body .fly-site-sidebar.fly-site-sidebar--static {
    display: none;
  }
}
`,
};
