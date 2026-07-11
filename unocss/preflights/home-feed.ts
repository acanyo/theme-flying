export const homeFeedPreflight = {
  getCSS: () => String.raw`
.fly-category-filter {
  display: flex;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  gap: 4px;
  margin: 0 0 clamp(20px, 2vw, 30px);
  padding: 0 0 6px;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-inline: contain;
  scroll-padding-inline: 0;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
  touch-action: pan-x;
  -webkit-overflow-scrolling: touch;
}

.fly-category-filter::-webkit-scrollbar {
  display: none;
}

.fly-filter-chip {
  min-width: max-content;
  min-height: 34px;
  flex: 0 0 auto;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--text);
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 22px;
  scroll-snap-align: start;
  white-space: nowrap;
  transition: background-color 180ms ease, transform 180ms ease;
}

.fly-filter-chip:hover,
.fly-filter-chip.fly-is-active,
.fly-filter-chip[aria-pressed="true"] {
  background: var(--hover-bg-color);
  color: var(--text);
}

.fly-filter-chip:hover {
  transform: translateY(-1px);
}

.fly-filter-chip:focus-visible {
  outline: 2px solid var(--text);
  outline-offset: 2px;
}

.fly-latest-section,
.fly-topic-section,
.fly-topic-block {
  min-width: 0;
}

.fly-latest-section {
  margin-bottom: clamp(60px, 5.6vw, 80px);
}

.fly-section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}

.fly-section-heading h2,
.fly-topic-header h2 {
  margin: 0;
  color: var(--text);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.2;
}

.fly-section-heading p {
  margin: 6px 0 0;
  color: var(--faint);
  font-size: 13px;
  line-height: 1.5;
}

.fly-article-grid.fly-latest-grid,
.fly-article-grid.fly-topic-grid {
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(16px, 2.1vw, 30px);
}

.fly-post-card {
  display: flex;
  height: 100%;
  min-width: 0;
  flex-direction: column;
  overflow: visible;
  border-radius: 0;
  background: var(--page);
  aspect-ratio: auto;
  isolation: isolate;
}

.fly-post-card::before,
.fly-post-card .fly-post-image-frame::after {
  content: none;
}

.fly-post-card .fly-post-image-frame {
  position: relative;
  inset: auto;
  overflow: hidden;
  border-radius: 14px;
  background: var(--page-alt);
  aspect-ratio: 16 / 9;
}

.fly-post-card .fly-post-image-link {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  aspect-ratio: auto;
}

.fly-post-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 800ms cubic-bezier(0.2, 1, 0.2, 1);
}

.fly-post-card:hover .fly-post-cover,
.fly-post-card:focus-within .fly-post-cover {
  transform: scale(1.025);
}

.fly-post-card .fly-post-chip--image {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 2;
  display: inline-flex;
  border-radius: 6px;
  background: color-mix(in srgb, var(--page) 90%, transparent);
  color: var(--text);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  padding: 6px 9px;
  font-size: 12px;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.fly-post-card .fly-post-body {
  position: static;
  z-index: auto;
  display: flex;
  min-width: 0;
  min-height: 0;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: flex-start;
  padding: 14px 0 0;
  color: var(--muted);
}

.fly-post-title {
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  color: var(--text);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.2;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.fly-post-title a {
  transition: opacity 180ms ease;
}

.fly-post-card:hover .fly-post-title a,
.fly-post-card:focus-within .fly-post-title a {
  color: var(--text);
  opacity: 0.68;
}

.fly-post-excerpt {
  display: -webkit-box;
  margin: 9px 0 0;
  overflow: hidden;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.fly-post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
}

.fly-post-tags a {
  overflow: hidden;
  border: 0;
  border-radius: 6px;
  background: var(--page-alt);
  color: var(--muted);
  padding: 5px 8px;
  font-size: 11px;
  font-weight: 500;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fly-post-card .fly-post-meta {
  display: flex;
  min-width: 0;
  flex-wrap: wrap;
  row-gap: 6px;
  margin-top: auto;
  padding-top: 14px;
  color: var(--faint);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
}

.fly-post-card .fly-author-pill {
  max-width: 100%;
  flex: 1 1 120px;
}

.fly-post-card .fly-post-meta time {
  flex: 0 0 auto;
  white-space: nowrap;
}

.fly-post-card[hidden],
.fly-post-card.fly-is-filtered-out {
  display: none;
}

.fly-topic-view-link .fly-iconify--chevron {
  width: 14px;
  height: 14px;
  flex-basis: 14px;
  margin-left: 0;
  transform: rotate(-90deg);
}

.fly-empty-state {
  margin: 28px 0 0;
  border: 1px dashed var(--line);
  border-radius: 14px;
  background: var(--page-alt);
  color: var(--muted);
  padding: 24px;
  text-align: center;
}

.fly-topic-section {
  display: grid;
  gap: clamp(60px, 5.6vw, 80px);
  margin: 0 0 clamp(60px, 5.6vw, 80px);
}

.fly-topic-block {
  display: grid;
  gap: 20px;
}

.fly-topic-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
}

.fly-topic-header p {
  max-width: 600px;
  margin: 7px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.5;
}

.fly-topic-view-link {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 8px;
  color: var(--text);
  font-size: 13px;
  font-weight: 600;
}

.fly-topic-view-link:hover {
  opacity: 0.68;
}

@media (min-width: 640px) {
  .fly-article-grid.fly-latest-grid,
  .fly-article-grid.fly-topic-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .fly-article-grid.fly-latest-grid,
  .fly-article-grid.fly-topic-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1280px) {
  .fly-article-grid.fly-latest-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

@media (min-width: 1400px) {
  body[data-fly-sidebar-collapsed="true"] .fly-article-grid.fly-latest-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  body[data-fly-sidebar-collapsed="true"] .fly-article-grid.fly-topic-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 639px) {
  .fly-category-filter {
    margin-top: 0;
    margin-bottom: 24px;
  }

  .fly-topic-header {
    display: block;
  }

  .fly-topic-view-link {
    margin-top: 14px;
  }

  .fly-post-card .fly-author-pill {
    flex-grow: 0;
  }

}

@media (prefers-reduced-motion: reduce) {
  .fly-filter-chip,
  .fly-post-cover,
  .fly-post-title a,
  .fly-topic-view-link {
    transition: none;
  }

  .fly-filter-chip:hover,
  .fly-post-card:hover .fly-post-cover {
    transform: none;
  }

}
`,
};
