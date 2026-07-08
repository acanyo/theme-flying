export const tokenPreflight = {
  getCSS: () => String.raw`
:root {
  --sidebar-width: 18rem;
  --content-width: 92rem;
  --content-padding-x: 3rem;
  --content-padding-mobile: 1rem;
  --post-card-image-aspect-ratio: 3 / 2;
  --radius-card: 12px;
  --page: #ffffff;
  --page-alt: #f7f7f8;
  --text: #111113;
  --muted: #696a72;
  --faint: #9698a1;
  --line: #ececf0;
  --hover-bg-color: #f4f5f6;
  --accent: #0095f6;
  --accent-strong: #0078d4;
  --shadow-soft: 0 18px 44px rgba(17, 17, 19, 0.08);
  color-scheme: light;
}

[data-theme="dark"] {
  --page: #0d1117;
  --page-alt: #171c23;
  --text: #f2f5f8;
  --muted: #a9b1be;
  --faint: #7f8897;
  --line: #27303d;
  --hover-bg-color: #171d25;
  --accent: #3aa7ff;
  --accent-strong: #66bdff;
  --shadow-soft: 0 18px 48px rgba(0, 0, 0, 0.34);
  color-scheme: dark;
}
`,
};
