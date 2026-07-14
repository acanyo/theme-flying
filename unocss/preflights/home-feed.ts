export const homeFeedPreflight = {
  getCSS: () => String.raw`
.fly-category-filter {
  position: relative;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  margin: -4px 0 clamp(20px, 2vw, 30px);
}

.fly-category-filter-rail {
  display: flex;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  gap: 6px;
  padding: 4px 0;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-inline: contain;
  scroll-padding-inline: 0;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
  touch-action: pan-x;
  -webkit-overflow-scrolling: touch;
}

.fly-category-filter-rail::-webkit-scrollbar {
  display: none;
}

.fly-filter-chip {
  min-width: max-content;
  flex: 0 0 auto;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--text);
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
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

.fly-category-filter-arrow {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  width: 33px;
  height: auto;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  background: var(--page);
  box-shadow: 0 5px 20px -7px rgba(0, 0, 0, 0.2);
  color: var(--text);
  padding: 0;
  isolation: isolate;
  transition:
    background-color 150ms ease,
    color 150ms ease,
    opacity 150ms ease,
    visibility 150ms ease;
}

.fly-category-filter-arrow[hidden] {
  display: none;
}

.fly-category-filter-arrow::before {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;
  width: 90px;
  content: "";
  pointer-events: none;
}

.fly-category-filter-arrow:hover,
.fly-category-filter-arrow:focus-visible {
  background: var(--text);
  color: var(--page);
}

.fly-category-filter-arrow--prev {
  left: 0;
}

.fly-category-filter-arrow--prev::before {
  left: 0;
  background: linear-gradient(90deg, var(--page) 33px, transparent 100%);
}

.fly-category-filter-arrow--next {
  right: 0;
}

.fly-category-filter-arrow--next::before {
  right: 0;
  background: linear-gradient(90deg, transparent 0, var(--page) calc(100% - 33px));
}

.fly-category-filter-arrow .fly-iconify--chevron {
  width: 20px;
  height: 20px;
  flex-basis: 20px;
  margin-left: 0;
  opacity: 1;
  transition: none;
}

.fly-category-filter-arrow--prev .fly-iconify--chevron {
  transform: rotate(90deg);
}

.fly-category-filter-arrow--next .fly-iconify--chevron {
  transform: rotate(-90deg);
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
  font-size: 22px;
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

.fly-article-grid.fly-latest-grid {
  grid-template-columns: minmax(0, 1fr);
  gap: var(--content-padding-x);
}

.fly-overlay-post-card {
  position: relative;
  min-width: 0;
  overflow: hidden;
  border-radius: 14px;
  background: var(--page-alt);
  aspect-ratio: 16 / 9;
  color: #fff;
  isolation: isolate;
}

.fly-overlay-post-hit {
  position: absolute;
  inset: 0;
  z-index: 3;
  border-radius: inherit;
}

.fly-overlay-post-image {
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s cubic-bezier(0.2, 1, 0.2, 1);
}

.fly-overlay-post-shade {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(0, 0, 0, 0.02) 18%,
    rgba(0, 0, 0, 0.11) 35%,
    rgba(0, 0, 0, 0.28) 55%,
    rgba(0, 0, 0, 0.5) 76%,
    rgba(0, 0, 0, 0.6) 100%
  );
}

.fly-overlay-post-content {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 4;
  padding: 60px 16px 12px;
  pointer-events: none;
}

.fly-overlay-post-content h3 {
  margin: 0;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
}

.fly-overlay-post-content a {
  position: relative;
  z-index: 4;
  pointer-events: auto;
}

.fly-overlay-post-meta {
  display: flex;
  margin: 4px 0 0;
  flex-wrap: wrap;
  gap: 0 6px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
}

.fly-overlay-post-card:hover .fly-overlay-post-image,
.fly-overlay-post-card:focus-within .fly-overlay-post-image {
  transform: scale(1.03);
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
  transition: box-shadow 500ms ease, transform 500ms ease;
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
  transform: scale(1.04);
}

.fly-post-card:hover .fly-post-image-frame,
.fly-post-card:focus-within .fly-post-image-frame {
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.4);
  transform: translateY(-2px);
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

.fly-home-shell[data-fly-home-layout="slider"] .fly-post-card .fly-post-body {
  padding: 8px 4px 0;
}

.fly-home-shell[data-fly-home-layout="slider"] .fly-post-card .fly-post-meta {
  margin-top: 4px;
  padding-top: 0;
  font-size: 11px;
}

.fly-home-shell[data-fly-home-layout="slider"] .fly-post-card .fly-author-popover-anchor {
  height: auto;
  gap: 0;
}

.fly-home-shell[data-fly-home-layout="slider"] .fly-post-card .fly-author-popover-anchor img {
  display: none;
}

.fly-home-shell[data-fly-home-layout="carousel"] .fly-post-card .fly-post-body {
  position: relative;
  padding: 12px 8px 16px 56px;
}

.fly-home-shell[data-fly-home-layout="carousel"] .fly-post-card .fly-post-meta {
  margin-top: 4px;
  padding-top: 0;
}

.fly-home-shell[data-fly-home-layout="carousel"] .fly-post-card .fly-author-popover-trigger {
  position: absolute;
  top: 10px;
  left: 8px;
  width: 36px;
  height: 36px;
  flex-basis: 36px;
}

.fly-home-shell[data-fly-home-layout="carousel"] .fly-post-card .fly-author-popover-anchor {
  width: 36px;
  height: 36px;
  gap: 0;
}

.fly-home-shell[data-fly-home-layout="carousel"] .fly-post-card .fly-author-popover-anchor img {
  width: 36px;
  height: 36px;
  flex-basis: 36px;
}

.fly-home-shell[data-fly-home-layout="carousel"] .fly-post-card .fly-author-popover-label {
  display: none;
}

.fly-post-card[hidden],
.fly-post-card.fly-is-filtered-out,
.fly-overlay-post-card[hidden],
.fly-overlay-post-card.fly-is-filtered-out {
  display: none;
}

.fly-topic-arrow {
  display: inline-flex;
  min-width: 16px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
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
  position: relative;
  display: grid;
  gap: 20px;
}

.fly-topic-rail {
  display: flex;
  gap: var(--content-padding-x);
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.fly-topic-rail::-webkit-scrollbar {
  display: none;
}

.fly-topic-slide {
  min-width: 0;
  flex: 0 0 100%;
  scroll-snap-align: start;
}

.fly-topic-block > .fly-carousel-controls {
  position: absolute;
  left: -18px;
  right: -18px;
  top: var(--fly-topic-control-center-y);
  height: 36px;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 4;
  pointer-events: none;
}

.fly-topic-block > .fly-carousel-controls .fly-carousel-dots {
  display: none;
}

.fly-topic-block > .fly-carousel-controls .fly-carousel-arrow {
  pointer-events: auto;
}

.fly-topic-block > .fly-carousel-controls .fly-carousel-arrow:disabled {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
}

.fly-section-action {
  display: inline-flex;
  min-height: 32px;
  align-items: center;
  gap: 6px;
  border-radius: 20px;
  background: var(--page-alt);
  color: var(--text);
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
}

.fly-section-action:hover {
  background: var(--hover-bg-color);
}

.fly-section-action .fly-iconify--chevron {
  width: 12px;
  height: 12px;
  transform: rotate(-90deg);
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
  font-size: 16px;
  line-height: 1.5;
}

.fly-topic-view-link {
  display: inline-flex;
  flex: 0 0 auto;
  min-height: 32px;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  background: var(--page-alt);
  color: var(--text);
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 600;
}

.fly-topic-view-link:hover {
  background: var(--hover-bg-color);
  opacity: 1;
}

@media (min-width: 540px) {
  .fly-article-grid.fly-latest-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .fly-topic-slide {
    flex-basis: calc((100% - var(--content-padding-x)) / 2);
  }
}

@media (min-width: 992px) {
  .fly-article-grid.fly-latest-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .fly-topic-slide {
    flex-basis: calc((100% - var(--content-padding-x) * 2) / 3);
  }
}

@media (min-width: 1200px) {
  .fly-article-grid.fly-latest-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  body[data-fly-sidebar-collapsed="true"] .fly-topic-slide {
    flex-basis: calc((100% - var(--content-padding-x) * 3) / 4);
  }

}

@media (min-width: 1575px) {
  .fly-article-grid.fly-latest-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .fly-topic-slide {
    flex-basis: calc((100% - var(--content-padding-x) * 3) / 4);
  }

  body[data-fly-sidebar-collapsed="true"] .fly-topic-slide {
    flex-basis: calc((100% - var(--content-padding-x) * 4) / 5);
  }
}

@media (max-width: 539px) {
  .fly-category-filter {
    margin-top: 0;
    margin-bottom: 24px;
  }

  .fly-topic-header {
    display: block;
  }

  .fly-topic-view-link {
    width: 100%;
    justify-content: center;
    margin-top: 14px;
    padding: 7px 12px;
  }

  .fly-post-card .fly-author-pill {
    flex-grow: 0;
  }

}

@media (prefers-reduced-motion: reduce) {
  .fly-filter-chip,
  .fly-post-cover,
  .fly-overlay-post-image,
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
