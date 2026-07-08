export const cardPreflight = {
  getCSS: () => String.raw`
.featured-card,
.post-image-link {
  aspect-ratio: var(--post-card-image-aspect-ratio);
}

.featured-card {
  min-height: 239px;
}

.featured-card--lead {
  min-height: 391px;
}

.image-shade {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.52));
}

.card-hit {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.featured-content a {
  pointer-events: auto;
}

.post-chip {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  border-radius: 999px;
  background: var(--page-alt);
  color: var(--text);
  padding: 7px 13px;
  font-size: 10px;
  font-weight: 800;
  line-height: 1;
}

.post-chip--glass {
  margin-bottom: 14px;
  background: rgba(0, 0, 0, 0.34);
  color: #fff;
  backdrop-filter: blur(8px);
}

.featured-title,
.post-title,
.section-heading h2,
.newsletter-panel h2 {
  margin: 0;
  color: var(--text);
  font-weight: 700;
  letter-spacing: 0;
}

.featured-title {
  display: -webkit-box;
  overflow: hidden;
  color: #fff;
  font-size: 24px;
  line-height: 1.18;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.featured-card--lead .featured-title {
  max-width: 620px;
  font-size: 48px;
  line-height: 1.1;
}

.featured-excerpt {
  display: -webkit-box;
  max-width: 560px;
  margin: 10px 0 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.94);
  font-size: 14px;
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.featured-card--side .featured-excerpt {
  -webkit-line-clamp: 2;
}

.post-meta {
  margin-top: 14px;
}

.post-meta--light {
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.22);
  color: rgba(255, 255, 255, 0.84);
}

.author-pill {
  font-weight: 500;
}

.author-pill img {
  width: 28px;
  height: 28px;
  flex: 0 0 auto;
  border-radius: 999px;
  object-fit: cover;
}

.author-pill span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dot {
  width: 3px;
  height: 3px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.7;
}

.category-filter {
  scrollbar-width: none;
}

.category-filter::-webkit-scrollbar {
  display: none;
}

.filter-chip {
  flex: 0 0 auto;
  min-width: 56px;
  border: 0;
  border-radius: 999px;
  background: var(--page-alt);
  color: var(--muted);
  cursor: pointer;
  padding: 10px 17px;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
}

.filter-chip.is-active {
  background: var(--text);
  color: var(--page);
}

.section-heading {
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
}

.section-heading h2 {
  font-size: 24px;
  line-height: 1.25;
}

.section-heading p {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 14px;
}

.post-card::before {
  content: "";
  position: absolute;
  inset: -12px;
  z-index: -1;
  border-radius: 18px;
  background: var(--hover-bg-color);
  opacity: 0;
  transition: opacity 180ms ease;
}

.post-card:hover::before {
  opacity: 1;
}

.post-card[hidden],
.post-card.is-hidden-by-load,
.post-card.is-filtered-out {
  display: none;
}

.post-cover {
  transition: transform 420ms ease;
}

.post-card:hover .post-cover,
.featured-card:hover .featured-image {
  transform: scale(1.035);
}

.featured-image {
  transition: transform 520ms ease;
}

.post-title {
  display: -webkit-box;
  margin-top: 10px;
  overflow: hidden;
  color: var(--text);
  font-size: 20px;
  line-height: 1.35;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.post-excerpt {
  display: -webkit-box;
  margin: 10px 0 0;
  overflow: hidden;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.post-tags {
  margin-top: 14px;
}

.post-tags a {
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  padding: 4px 9px;
  font-size: 11px;
}

.topic-block {
  border-top: 1px solid var(--line);
  padding-top: 30px;
}

.topic-header p {
  max-width: 560px;
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 14px;
}

.topic-view-link {
  flex: 0 0 auto;
  color: var(--accent);
  font-size: 13px;
  font-weight: 800;
}

.author-card {
  transition: border-color 160ms ease, transform 160ms ease, background 160ms ease;
}

.author-card:hover {
  border-color: color-mix(in srgb, var(--accent) 40%, var(--line));
  background: var(--hover-bg-color);
  transform: translateY(-2px);
}

.author-avatar {
  width: 52px;
  height: 52px;
  flex: 0 0 auto;
  overflow: hidden;
  border-radius: 999px;
  background: var(--page-alt);
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-name {
  display: block;
  overflow: hidden;
  color: var(--text);
  font-size: 15px;
  font-weight: 800;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.author-card p {
  display: -webkit-box;
  margin: 4px 0 0;
  overflow: hidden;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.45;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.empty-state {
  margin: 38px 0 0;
  border: 1px dashed var(--line);
  border-radius: var(--radius-card);
  color: var(--muted);
  padding: 22px;
  text-align: center;
}

.empty-state--visible {
  display: block;
}

@media (max-width: 1179px) {
  .featured-card--lead {
    grid-row: auto;
  }

  .featured-card--lead .featured-title,
  .featured-title {
    font-size: 24px;
    line-height: 1.2;
  }

  .post-chip--glass,
  .featured-card .post-meta {
    display: none;
  }
}

@media (max-width: 480px) {
  .section-heading {
    display: block;
  }

  .topic-header {
    display: block;
  }

  .topic-view-link {
    display: inline-flex;
    margin-top: 14px;
  }
}
`,
};
