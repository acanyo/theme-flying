import { access, readFile } from "node:fs/promises";
import { join } from "node:path";

const requiredFiles = [
  "annotation-setting.yaml",
  "theme.yaml",
  "settings.yaml",
  "uno.config.ts",
  "astro.config.mjs",
  "src/components/theme/ThemeSwitcher.vue",
  "src/components/theme/theme-preference.ts",
  "src/pages/archives.astro",
  "src/pages/author.astro",
  "src/pages/categories.astro",
  "src/pages/category.astro",
  "src/pages/index.astro",
  "src/pages/page.astro",
  "src/pages/post.astro",
  "src/pages/tag.astro",
  "src/pages/tags.astro",
  "src/pages/fragments/layout.astro",
  "src/pages/fragments/author-popover.astro",
  "src/pages/fragments/mobile-header.astro",
  "src/pages/fragments/post-card.astro",
  "src/pages/fragments/post-list.astro",
  "src/pages/fragments/pagination.astro",
  "src/pages/fragments/sidebar.astro",
  "src/pages/fragments/footer.astro",
  "src/pages/fragments/home-layouts.astro",
  "src/pages/fragments/home/featured.astro",
  "src/pages/fragments/home/category-filter.astro",
  "src/pages/fragments/home/feed.astro",
  "src/pages/fragments/home/topics.astro",
  "src/pages/fragments/home/authors.astro",
  "src/pages/fragments/home/newsletter.astro",
  "src/pages/fragments/home/friends.astro",
  "src/pages/fragments/home/post-card-overlay.astro",
  "templates/archives.html",
  "templates/author.html",
  "templates/categories.html",
  "templates/category.html",
  "templates/index.html",
  "templates/page.html",
  "templates/post.html",
  "templates/tag.html",
  "templates/tags.html",
  "templates/fragments/layout.html",
  "templates/fragments/author-popover.html",
  "templates/fragments/mobile-header.html",
  "templates/fragments/post-card.html",
  "templates/fragments/post-list.html",
  "templates/fragments/pagination.html",
  "templates/fragments/sidebar.html",
  "templates/fragments/footer.html",
  "templates/fragments/home-layouts.html",
  "templates/fragments/home/featured.html",
  "templates/fragments/home/category-filter.html",
  "templates/fragments/home/feed.html",
  "templates/fragments/home/topics.html",
  "templates/fragments/home/authors.html",
  "templates/fragments/home/newsletter.html",
  "templates/fragments/home/friends.html",
  "templates/fragments/home/post-card-overlay.html",
  "templates/assets/css/style.css",
  "templates/assets/css/uno.css",
  "unocss/theme.ts",
  "unocss/shortcuts/index.ts",
  "unocss/shortcuts/layout.ts",
  "unocss/shortcuts/sidebar.ts",
  "unocss/shortcuts/components.ts",
  "unocss/shortcuts/content.ts",
  "unocss/shortcuts/footer.ts",
  "unocss/preflights/index.ts",
  "unocss/preflights/tokens.ts",
  "unocss/preflights/theme-switcher.ts",
  "unocss/preflights/author-popover.ts",
  "unocss/preflights/base.ts",
  "unocss/preflights/layout.ts",
  "unocss/preflights/search-widget.ts",
  "unocss/preflights/scroll-reveal.ts",
  "unocss/preflights/sidebar.ts",
  "unocss/preflights/cards.ts",
  "unocss/preflights/content.ts",
  "unocss/preflights/footer.ts",
  "unocss/preflights/home-featured.ts",
  "unocss/preflights/home-layouts.ts",
  "unocss/preflights/home-feed.ts",
  "unocss/preflights/home-authors.ts",
  "unocss/preflights/home-newsletter.ts",
  "unocss/preflights/home-friends.ts",
  "unocss/preflights/transitions.ts",
  "templates/assets/js/script.js",
  "templates/assets/js/utils/dom.js",
  "templates/assets/js/modules/menu.js",
  "templates/assets/js/modules/home-layout.js",
  "templates/assets/js/modules/category-filter.js",
  "templates/assets/js/modules/contact-copy.js",
  "templates/assets/js/modules/author-popover.js",
  "templates/assets/js/modules/search-widget.js",
  "templates/assets/js/modules/newsletter.js",
  "templates/assets/js/modules/scroll-reveal.js",
  "templates/assets/js/modules/keyboard.js",
  "templates/assets/js/modules/transitions.js",
  "templates/assets/vendor/swup.umd.js",
  "templates/assets/fonts/Geist-Variable.woff2",
  "templates/assets/icons/iconify/globe.svg",
  "templates/assets/icons/iconify/enter-door.svg",
  "templates/assets/icons/iconify/mail.svg",
  "templates/assets/icons/iconify/mode.svg",
  "templates/assets/icons/iconify/qq.svg",
  "templates/assets/icons/iconify/user.svg",
  "templates/assets/icons/iconify/wechat.svg",
  "templates/assets/images/avatar.svg",
  "templates/assets/images/fallback-cover.svg",
  "templates/assets/images/layout-grid.svg",
  "templates/assets/images/layout-slider.svg",
  "templates/assets/images/layout-carousel.svg",
];

const missing = [];
const invalid = [];

for (const file of requiredFiles) {
  try {
    await access(join(process.cwd(), file));
  } catch {
    missing.push(file);
  }
}

if (missing.length > 0) {
  console.error("Missing required theme files:");
  for (const file of missing) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

const templateFiles = requiredFiles.filter(
  (file) => file.startsWith("templates/") && file.endsWith(".html"),
);
const forbiddenPatterns = [
  { label: "malformed dynamic Thymeleaf URL", pattern: /@\{\$\{[^}]+\}"/ },
];

for (const file of templateFiles) {
  const source = await readFile(join(process.cwd(), file), "utf8");
  for (const check of forbiddenPatterns) {
    if (check.pattern.test(source)) {
      invalid.push(`${file}: ${check.label}`);
    }
  }
}

const astroSourceFiles = requiredFiles.filter(
  (file) => file.startsWith("src/pages/") && file.endsWith(".astro"),
);

for (const file of astroSourceFiles) {
  const source = await readFile(join(process.cwd(), file), "utf8");
  if (/\/themes\/theme-flying\/assets\//.test(source)) {
    invalid.push(`${file}: hard-coded theme asset path`);
  }
}

const styleSource = await readFile(
  join(process.cwd(), "templates/assets/css/style.css"),
  "utf8",
);
const staleCssImports = [
  "uno.css",
  "tokens.css",
  "base.css",
  "sidebar.css",
  "layout.css",
  "cards.css",
  "content.css",
  "footer.css",
  "responsive.css",
  "transitions.css",
];

for (const file of staleCssImports) {
  if (styleSource.includes(file)) {
    invalid.push(`templates/assets/css/style.css: stale CSS import ${file}`);
  }
}

if (invalid.length > 0) {
  console.error("Invalid theme template content:");
  for (const item of invalid) {
    console.error(`- ${item}`);
  }
  process.exit(1);
}

console.log("Theme structure OK.");
