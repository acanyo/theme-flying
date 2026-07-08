export const contentPreflight = {
  getCSS: () => String.raw`
.page-header h1,
.post-heading {
  margin: 0;
  color: var(--text);
  font-size: 76px;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 0.98;
  overflow-wrap: anywhere;
}

.page-header p:not(.eyebrow),
.post-lede {
  max-width: 620px;
  margin: 16px 0 0;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.55;
}

.post-hero .post-chip {
  margin-bottom: 18px;
}

.post-heading {
  font-size: 84px;
}

.post-meta--hero {
  margin-top: 22px;
  color: var(--muted);
}

.post-tags--hero {
  margin-top: 18px;
}

.post-hero-image img {
  width: 100%;
  aspect-ratio: 1.55;
  object-fit: cover;
}

.prose {
  font-size: 18px;
  line-height: 1.78;
}

.prose > *:first-child {
  margin-top: 0;
}

.prose h2,
.prose h3,
.prose h4 {
  color: var(--text);
  line-height: 1.2;
}

.prose h2 {
  margin: 48px 0 16px;
  font-size: 34px;
}

.prose h3 {
  margin: 36px 0 12px;
  font-size: 25px;
}

.prose p,
.prose ul,
.prose ol,
.prose blockquote,
.prose pre {
  margin: 0 0 24px;
}

.prose a {
  color: var(--accent);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.prose img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-card);
}

.prose blockquote {
  border-left: 3px solid var(--accent);
  color: var(--muted);
  padding-left: 20px;
}

.prose code {
  border-radius: 6px;
  background: var(--page-alt);
  color: var(--text);
  padding: 2px 6px;
  font-size: 0.88em;
}

.prose pre {
  overflow-x: auto;
  border-radius: var(--radius-card);
  background: var(--page-alt);
  padding: 18px;
}

.prose pre code {
  background: transparent;
  padding: 0;
}

.post-author-card img {
  width: 58px;
  height: 58px;
  flex: 0 0 auto;
  border-radius: 50%;
  object-fit: cover;
}

.post-author-card p,
.post-author-card h2 {
  margin: 0;
}

.post-author-card p {
  color: var(--faint);
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
}

.post-author-card h2 {
  color: var(--text);
  font-size: 20px;
}

.taxonomy-card,
.tag-pill {
  border: 1px solid var(--line);
  background: var(--page);
  color: var(--text);
  transition: border-color 160ms ease, transform 160ms ease;
}

.taxonomy-card {
  display: grid;
  min-height: 112px;
  align-content: space-between;
  border-radius: var(--radius-card);
  padding: 18px;
}

.taxonomy-card:hover,
.tag-pill:hover {
  border-color: color-mix(in srgb, var(--accent) 44%, var(--line));
  transform: translateY(-2px);
}

.taxonomy-card span {
  overflow-wrap: anywhere;
  font-size: 20px;
  font-weight: 800;
}

.taxonomy-card small,
.tag-pill small {
  color: var(--muted);
  font-size: 12px;
  font-weight: 700;
}

.tag-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border-radius: 999px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 800;
}

.archive-group {
  border-bottom: 1px solid var(--line);
  padding-bottom: 30px;
}

.archive-group__year {
  margin: 0 0 18px;
  color: var(--text);
  font-size: 20px;
}

.archive-group__items {
  display: grid;
  gap: 18px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.archive-entry__date {
  color: var(--faint);
  font-size: 13px;
  font-weight: 700;
}

.archive-entry__title {
  margin: 0;
  color: var(--text);
  font-size: 19px;
  line-height: 1.35;
}

.archive-entry__summary {
  display: -webkit-box;
  margin: 6px 0 0;
  overflow: hidden;
  color: var(--muted);
  font-size: 14px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.pagination a,
.pagination span {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  border-radius: 999px;
  padding: 0 16px;
  font-size: 13px;
  font-weight: 800;
}

.pagination a {
  background: var(--text);
  color: var(--page);
}

.pagination span {
  color: var(--muted);
}

@media (max-width: 1179px) {
  .content-shell--narrow {
    max-width: none;
  }

  .page-header,
  .post-hero {
    padding-top: 16px;
  }
}

@media (max-width: 640px) {
  .page-header h1,
  .post-heading {
    font-size: 40px;
    line-height: 1.05;
  }

  .page-header p:not(.eyebrow),
  .post-lede,
  .prose {
    font-size: 16px;
  }

  .post-hero-image img {
    aspect-ratio: 1.25;
  }

  .archive-entry {
    grid-template-columns: 1fr;
    gap: 6px;
  }
}
`,
};
