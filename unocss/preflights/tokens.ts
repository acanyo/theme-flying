export const tokenPreflight = {
  getCSS: () => String.raw`
:root {
  --fly-responsive-gutter: clamp(16px, calc(11.25px + 1.25vw), 30px);
  --sidebar-width: calc(232px + var(--fly-responsive-gutter));
  --sidebar-collapsed-width: calc(52px + var(--fly-responsive-gutter));
  --navigation-panel-width: calc(244px + var(--fly-responsive-gutter));
  --navigation-overlay: #e8e8e8;
  --content-width: none;
  --content-padding-x: clamp(16px, 2.1vw, 29.25px);
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
  --fly-primary-color: #000000;
  --fly-secondary-color: #000000;
  --fly-primary-color-dark: #ffffff;
  --fly-secondary-color-dark: #ffffff;
  --accent: var(--fly-primary-color);
  --accent-strong: var(--fly-primary-color);
  --accent-secondary: var(--fly-secondary-color);
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
  --navigation-overlay: #212121;
  --accent: var(--fly-primary-color-dark);
  --accent-strong: var(--fly-primary-color-dark);
  --accent-secondary: var(--fly-secondary-color-dark);
  --shadow-soft: 0 18px 48px rgba(0, 0, 0, 0.34);
  color-scheme: dark;
}

@media (min-width: 768px) and (max-width: 1199px) {
  :root {
    --content-padding-x: 20.85px;
  }
}
`,
};
