export const iconPreflight = {
  getCSS: () => String.raw`
.fly-iconify {
  display: inline-block;
  width: 18px;
  height: 18px;
  flex: 0 0 18px;
  background: currentColor;
  -webkit-mask-image: var(--fly-icon-url);
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-image: var(--fly-icon-url);
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
}

.fly-iconify--chevron {
  --fly-icon-url: url("../icons/iconify/arrow-down.svg");
  width: 16px;
  height: 16px;
  flex-basis: 16px;
  margin-left: auto;
  opacity: 0.62;
  transition: transform 160ms ease, opacity 160ms ease;
}

.fly-iconify--arrow-right {
  --fly-icon-url: url("../icons/iconify/arrow-right.svg");
}

.fly-iconify--close {
  --fly-icon-url: url("../icons/iconify/close.svg");
}

.fly-iconify--enter-door {
  --fly-icon-url: url("../icons/iconify/enter-door.svg");
}

.fly-iconify--globe {
  --fly-icon-url: url("../icons/iconify/globe.svg");
}

.fly-iconify--menu {
  --fly-icon-url: url("../icons/iconify/menu.svg");
}

.fly-iconify--mode {
  --fly-icon-url: url("../icons/iconify/mode.svg");
}

.fly-iconify--loader {
  --fly-icon-url: url("../icons/iconify/loader.svg");
}

.fly-iconify--mail {
  --fly-icon-url: url("../icons/iconify/mail.svg");
}

.fly-iconify--moon {
  --fly-icon-url: url("../icons/iconify/moon.svg");
}

.fly-iconify--qq {
  --fly-icon-url: url("../icons/iconify/qq.svg");
}

.fly-iconify--search {
  --fly-icon-url: url("../icons/iconify/search.svg");
}

.fly-iconify--sun {
  --fly-icon-url: url("../icons/iconify/sun.svg");
}

.fly-iconify--user {
  --fly-icon-url: url("../icons/iconify/user.svg");
}

.fly-iconify--wechat {
  --fly-icon-url: url("../icons/iconify/wechat.svg");
}

body[data-fly-menu-open="true"] .fly-menu-icon-open,
body:not([data-fly-menu-open="true"]) .fly-menu-icon-close {
  display: none;
}

.fly-mobile-header > astro-island {
  display: contents;
}
`,
};
