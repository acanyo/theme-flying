import { access, readFile } from "node:fs/promises";
import { join } from "node:path";

const requiredFiles = [
  "theme.yaml",
  "settings.yaml",
  "uno.config.ts",
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
  "unocss/preflights/base.ts",
  "unocss/preflights/layout.ts",
  "unocss/preflights/sidebar.ts",
  "unocss/preflights/cards.ts",
  "unocss/preflights/content.ts",
  "unocss/preflights/footer.ts",
  "unocss/preflights/home-featured.ts",
  "unocss/preflights/home-layouts.ts",
  "unocss/preflights/home-feed.ts",
  "unocss/preflights/home-authors.ts",
  "unocss/preflights/transitions.ts",
  "templates/assets/js/script.js",
  "templates/assets/js/utils/dom.js",
  "templates/assets/js/modules/menu.js",
  "templates/assets/js/modules/theme.js",
  "templates/assets/js/modules/home-layout.js",
  "templates/assets/js/modules/search-filter.js",
  "templates/assets/js/modules/newsletter.js",
  "templates/assets/js/modules/keyboard.js",
  "templates/assets/js/modules/transitions.js",
  "templates/assets/vendor/swup.umd.js",
  "templates/assets/images/avatar.svg",
  "templates/assets/images/fallback-cover.svg",
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

const templateFiles = requiredFiles.filter((file) => file.startsWith("templates/") && file.endsWith(".html"));
const forbiddenPatterns = [
  { label: "Astro island runtime", pattern: /astro-island/ },
  { label: "old Astro layout asset", pattern: /Layout\.[\w-]+\.css|Layout\.astro_/ },
  { label: "hard-coded theme asset path", pattern: /\/themes\/theme-flying\/assets\// },
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

const styleSource = await readFile(join(process.cwd(), "templates/assets/css/style.css"), "utf8");
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
