export const contentPreflight = {
  getCSS: () => String.raw`
.fly-page-header h1,
.fly-post-heading {
  margin: 0;
  color: var(--text);
  font-size: 76px;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 0.98;
  overflow-wrap: anywhere;
}

.fly-page-header p:not(.fly-eyebrow),
.fly-post-lede {
  max-width: 620px;
  margin: 16px 0 0;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.55;
}

.fly-author-header h1 {
  font-size: 64px;
}

.fly-author-header p:not(.fly-eyebrow) {
  margin-top: 8px;
}

.fly-post-hero .fly-post-chip {
  margin-bottom: 18px;
}

.fly-post-heading {
  font-size: 84px;
}

.fly-post-meta--hero {
  margin-top: 22px;
  color: var(--muted);
}

.fly-post-tags--hero {
  margin-top: 18px;
}

.fly-post-hero-image img {
  width: 100%;
  aspect-ratio: 1.55;
  object-fit: cover;
}

.fly-prose {
  font-size: 18px;
  line-height: 1.78;
}

.fly-prose > *:first-child {
  margin-top: 0;
}

.fly-prose h2,
.fly-prose h3,
.fly-prose h4 {
  color: var(--text);
  line-height: 1.2;
}

.fly-prose h2 {
  margin: 48px 0 16px;
  font-size: 34px;
}

.fly-prose h3 {
  margin: 36px 0 12px;
  font-size: 25px;
}

.fly-prose p,
.fly-prose ul,
.fly-prose ol,
.fly-prose blockquote,
.fly-prose pre {
  margin: 0 0 24px;
}

.fly-prose a {
  color: var(--accent);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.fly-prose img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-card);
}

.fly-prose blockquote {
  border-left: 3px solid var(--accent);
  color: var(--muted);
  padding-left: 20px;
}

.fly-prose code {
  border-radius: 6px;
  background: var(--page-alt);
  color: var(--text);
  padding: 2px 6px;
  font-size: 0.88em;
}

.fly-prose pre {
  overflow-x: auto;
  border-radius: var(--radius-card);
  background: var(--page-alt);
  padding: 18px;
}

.fly-prose pre code {
  background: transparent;
  padding: 0;
}

.fly-post-author-card img {
  width: 58px;
  height: 58px;
  flex: 0 0 auto;
  border-radius: 50%;
  object-fit: cover;
}

.fly-post-author-card p,
.fly-post-author-card h2 {
  margin: 0;
}

.fly-post-author-card p {
  color: var(--faint);
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
}

.fly-post-author-card h2 {
  color: var(--text);
  font-size: 20px;
}

.fly-taxonomy-card,
.fly-tag-pill {
  border: 1px solid var(--line);
  background: var(--page);
  color: var(--text);
  transition: border-color 160ms ease, transform 160ms ease;
}

.fly-taxonomy-card {
  display: grid;
  min-height: 112px;
  align-content: space-between;
  border-radius: var(--radius-card);
  padding: 18px;
}

.fly-taxonomy-card:hover,
.fly-tag-pill:hover {
  border-color: color-mix(in srgb, var(--accent) 44%, var(--line));
  transform: translateY(-2px);
}

.fly-taxonomy-card span {
  overflow-wrap: anywhere;
  font-size: 20px;
  font-weight: 800;
}

.fly-taxonomy-card small,
.fly-tag-pill small {
  color: var(--muted);
  font-size: 12px;
  font-weight: 700;
}

.fly-tag-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border-radius: 999px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 800;
}

.fly-archive-group {
  border-bottom: 1px solid var(--line);
  padding-bottom: 30px;
}

.fly-archive-group__year {
  margin: 0 0 18px;
  color: var(--text);
  font-size: 20px;
}

.fly-archive-group__items {
  display: grid;
  gap: 18px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.fly-archive-entry__date {
  color: var(--faint);
  font-size: 13px;
  font-weight: 700;
}

.fly-archive-entry__title {
  margin: 0;
  color: var(--text);
  font-size: 19px;
  line-height: 1.35;
}

.fly-archive-entry__summary {
  display: -webkit-box;
  margin: 6px 0 0;
  overflow: hidden;
  color: var(--muted);
  font-size: 14px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.fly-pagination a,
.fly-pagination span {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  border-radius: 999px;
  padding: 0 16px;
  font-size: 13px;
  font-weight: 800;
}

.fly-pagination a {
  background: var(--accent);
  color: var(--accent-contrast);
}

.fly-pagination span {
  color: var(--muted);
}

@media (max-width: 1179px) {
  .fly-content-shell--narrow {
    max-width: none;
  }

  .fly-page-header,
  .fly-post-hero {
    padding-top: 16px;
  }
}

@media (max-width: 640px) {
  .fly-page-header h1,
  .fly-post-heading {
    font-size: 40px;
    line-height: 1.05;
  }

  .fly-author-hero {
    align-items: flex-start;
  }

  .fly-author-hero-avatar {
    width: 58px;
    height: 58px;
  }

  .fly-page-header p:not(.fly-eyebrow),
  .fly-post-lede,
  .fly-prose {
    font-size: 16px;
  }

  .fly-post-hero-image img {
    aspect-ratio: 1.25;
  }

  .fly-archive-entry {
    grid-template-columns: 1fr;
    gap: 6px;
  }
}
`,
};
