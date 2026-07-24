export const themeSwitcherPreflight = {
  getCSS: () => String.raw`
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root) {
  z-index: 1;
}

::view-transition-new(root) {
  z-index: 2;
}

.fly-navbar-user-nav {
  position: relative;
  display: flex;
  width: 100%;
  min-width: 0;
  height: 36px;
  align-items: center;
  justify-content: flex-end;
  justify-self: end;
}

[data-fly-account-authenticated="true"]
  ~ astro-island[ssr]
  .fly-navbar-user-nav {
  visibility: hidden;
}

.fly-navbar-user-trigger {
  display: grid;
  width: 36px;
  height: 36px;
  flex: 0 0 36px;
  place-items: center;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--text);
  transition: background-color 150ms ease, color 150ms ease;
}

.fly-navbar-user-trigger:hover,
.fly-navbar-user-trigger.is-open {
  background: var(--page-alt);
}

.fly-navbar-user-trigger:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.fly-navbar-user-trigger .fly-iconify {
  width: 20px;
  height: 20px;
  flex-basis: 20px;
}

.fly-navbar-user-menu {
  position: absolute;
  top: 56px;
  right: 0;
  z-index: 10000;
  display: flex;
  width: 290px;
  height: auto;
  min-height: 159px;
  padding: 6px;
  flex-direction: column;
  gap: 4px;
  border-radius: 14px;
  background: #ffffff;
  box-shadow:
    0 20px 60px -10px rgba(177, 170, 170, 0.24),
    0 4px 20px -8px rgba(0, 0, 0, 0.24);
  color: #4d4d4d;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(-6px);
  transform-origin: top right;
  transition:
    transform 150ms ease,
    visibility 150ms ease,
    opacity 150ms ease;
}

.fly-navbar-user-menu.is-open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(0);
}

.fly-navbar-user-head {
  display: flex;
  height: 36px;
  margin: 12px;
  align-items: center;
  gap: 10px;
  color: var(--text);
}

.fly-navbar-user-avatar {
  display: grid;
  width: 36px;
  height: 36px;
  flex: 0 0 36px;
  place-items: center;
  border-radius: 999px;
  background: var(--page-alt);
  overflow: hidden;
}

.fly-navbar-user-trigger-avatar,
.fly-navbar-user-avatar > img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
}

.fly-navbar-user-trigger-avatar {
  width: 28px;
  height: 28px;
}

.fly-navbar-user-avatar .fly-iconify {
  width: 20px;
  height: 20px;
  flex-basis: 20px;
}

.fly-navbar-user-name {
  overflow: hidden;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fly-navbar-user-menu hr {
  width: calc(100% + 12px);
  height: 1px;
  margin: 0 -6px;
  border: 0;
  border-top: 1px solid var(--line);
}

.fly-navbar-user-menu ul {
  position: relative;
  top: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.fly-navbar-user-menu li {
  min-width: 0;
}

.fly-navbar-user-menu-item {
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 38px;
  min-width: 0;
  align-items: center;
  gap: 16px;
  overflow: hidden;
  padding: 8px 12px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: var(--text);
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  transition: color 100ms ease, background-color 100ms ease;
}

.fly-navbar-user-menu-item:hover,
.fly-navbar-user-menu-item:focus-visible,
.fly-theme-preference-button:focus {
  background: #ededed;
}

.fly-navbar-user-menu-item > .fly-iconify {
  width: 20px;
  height: 20px;
  flex-basis: 20px;
}

.fly-navbar-user-menu-item--logout > .fly-iconify {
  transform: scaleX(-1);
}

.fly-theme-current-icons {
  position: relative;
  display: grid;
  width: 20px;
  height: 20px;
  margin-left: auto;
  flex: 0 0 20px;
  place-items: center;
  overflow: hidden;
}

.fly-theme-state-icon {
  grid-area: 1 / 1;
  width: 20px;
  height: 20px;
  flex-basis: 20px;
  opacity: 0;
  transform: translateX(12px);
  transition: opacity 150ms ease, transform 150ms ease;
}

.fly-theme-current-icons[data-theme-preference="light"]
  .fly-theme-state-icon--light,
.fly-theme-current-icons[data-theme-preference="system"]
  .fly-theme-state-icon--system,
.fly-theme-current-icons[data-theme-preference="dark"]
  .fly-theme-state-icon--dark {
  opacity: 1;
  transform: translateX(0);
}

[data-theme="dark"] .fly-navbar-user-menu {
  background: #1a1a1a;
  box-shadow:
    0 20px 60px -10px rgba(0, 0, 0, 0.7),
    0 4px 20px -8px rgba(0, 0, 0, 0.7);
  color: #aaaaaa;
}

[data-theme="dark"] .fly-navbar-user-menu-item:hover,
[data-theme="dark"] .fly-navbar-user-menu-item:focus-visible,
[data-theme="dark"] .fly-theme-preference-button:focus {
  background: #282828;
}

@media (max-width: 767px) {
  .fly-navbar-user-nav {
    width: 36px;
    flex: 0 0 36px;
  }

  .fly-navbar-user-menu {
    position: fixed;
    top: 64px;
    right: 16px;
    width: min(290px, calc(100vw - 32px));
  }
}

@media (prefers-reduced-motion: reduce) {
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation-duration: 0.01ms;
  }
}
`,
};
