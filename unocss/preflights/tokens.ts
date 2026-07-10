export const tokenPreflight = {
  getCSS: () => String.raw`
:root {
  --sidebar-width: 259px;
  --sidebar-collapsed-width: 82px;
  --content-width: none;
  --content-padding-x: clamp(16px, 2.1vw, 30px);
  --content-padding-mobile: 1rem;
  --post-card-image-aspect-ratio: 16 / 9;
  --radius-control: 8px;
  --radius-card: 14px;
  --radius-section: clamp(16px, 2vw, 30px);
  --section-gap: clamp(60px, 5.6vw, 80px);
  --page: #ffffff;
  --page-alt: #f3f3f3;
  --text: #000000;
  --muted: #4d4d4d;
  --faint: #757575;
  --mute: #b2b2b2;
  --line: hsla(0, 0%, 50%, 0.2);
  --hover-bg-color: #ededed;
  --accent: #000000;
  --accent-strong: #000000;
  --shadow-soft: 0 18px 38px -16px rgba(0, 0, 0, 0.35);
  --navbar-height: 58px;
  color-scheme: light;
}

[data-theme="dark"] {
  --page: #111317;
  --page-alt: #1b1f25;
  --text: #ffffff;
  --muted: #d0d0d0;
  --faint: #a2a2a2;
  --mute: #747474;
  --line: #2a3038;
  --hover-bg-color: #252a31;
  --accent: #ffffff;
  --accent-strong: #ffffff;
  --shadow-soft: 0 18px 48px rgba(0, 0, 0, 0.34);
  color-scheme: dark;
}
`,
};
