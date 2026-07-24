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
  --fly-icon-url: url("../icons/iconify/arrow-down.svg?fly=1.0.116");
  width: 16px;
  height: 16px;
  flex-basis: 16px;
  margin-left: auto;
  opacity: 0.62;
  transition: transform 160ms ease, opacity 160ms ease;
}

.fly-iconify--arrow-right {
  --fly-icon-url: url("../icons/iconify/arrow-right.svg?fly=1.0.116");
}

.fly-iconify--arrow-forward {
  --fly-icon-url: url("../icons/iconify/arrow-forward.svg?fly=1.0.116");
}

.fly-iconify--close {
  --fly-icon-url: url("../icons/iconify/close.svg?fly=1.0.116");
}

.fly-iconify--comment {
  --fly-icon-url: url("../icons/iconify/comment.svg?fly=1.0.116");
}

.fly-iconify--copyright {
  --fly-icon-url: url("../icons/iconify/copyright.svg?fly=1.0.116");
}

.fly-iconify--facebook {
  --fly-icon-url: url("../icons/iconify/facebook.svg?fly=1.0.116");
}

.fly-iconify--enter-door {
  --fly-icon-url: url("../icons/iconify/enter-door.svg?fly=1.0.116");
}

.fly-iconify--globe {
  --fly-icon-url: url("../icons/iconify/globe.svg?fly=1.0.116");
}

.fly-iconify--link {
  --fly-icon-url: url("../icons/iconify/link.svg?fly=1.0.116");
}

.fly-iconify--list {
  --fly-icon-url: url("../icons/iconify/list.svg?fly=1.0.116");
}

.fly-iconify--menu {
  --fly-icon-url: url("../icons/iconify/menu.svg?fly=1.0.116");
}

.fly-iconify--mode {
  --fly-icon-url: url("../icons/iconify/mode.svg?fly=1.0.116");
}

.fly-iconify--loader {
  --fly-icon-url: url("../icons/iconify/loader.svg?fly=1.0.116");
}

.fly-iconify--mail {
  --fly-icon-url: url("../icons/iconify/mail.svg?fly=1.0.116");
}

.fly-iconify--moon {
  --fly-icon-url: url("../icons/iconify/moon.svg?fly=1.0.116");
}

.fly-iconify--qq {
  --fly-icon-url: url("../icons/iconify/qq.svg?fly=1.0.116");
}

.fly-iconify--search {
  --fly-icon-url: url("../icons/iconify/search.svg?fly=1.0.116");
}

.fly-iconify--share {
  --fly-icon-url: url("../icons/iconify/share.svg?fly=1.0.116");
}

.fly-iconify--sun {
  --fly-icon-url: url("../icons/iconify/sun.svg?fly=1.0.116");
}

.fly-iconify--tag {
  --fly-icon-url: url("../icons/iconify/tag.svg?fly=1.0.116");
}

.fly-iconify--user {
  --fly-icon-url: url("../icons/iconify/user.svg?fly=1.0.116");
}

.fly-iconify--video-camera {
  --fly-icon-url: url("../icons/iconify/video-camera.svg?fly=1.0.116");
}

.fly-iconify--wechat {
  --fly-icon-url: url("../icons/iconify/wechat.svg?fly=1.0.116");
}

.fly-iconify--zoom-in {
  --fly-icon-url: url("../icons/iconify/zoom-in.svg?fly=1.0.117");
}

.fly-iconify--zoom-out {
  --fly-icon-url: url("../icons/iconify/zoom-out.svg?fly=1.0.117");
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
