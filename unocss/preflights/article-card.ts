export const articleCardPreflight = {
  getCSS: () => String.raw`
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

.fly-overlay-post-card[hidden],
.fly-overlay-post-card.fly-is-filtered-out {
  display: none;
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

.fly-post-card--slider .fly-post-body,
.fly-home-shell[data-fly-home-layout="slider"] .fly-post-card .fly-post-body {
  padding: 8px 4px 0;
}

.fly-post-card--slider .fly-post-meta,
.fly-home-shell[data-fly-home-layout="slider"] .fly-post-card .fly-post-meta {
  margin-top: 4px;
  padding-top: 0;
  font-size: 11px;
}

.fly-post-card--slider .fly-author-popover-anchor,
.fly-home-shell[data-fly-home-layout="slider"] .fly-post-card .fly-author-popover-anchor {
  height: auto;
  gap: 0;
}

.fly-post-card--slider .fly-author-popover-anchor img,
.fly-home-shell[data-fly-home-layout="slider"] .fly-post-card .fly-author-popover-anchor img {
  display: none;
}

.fly-post-card--carousel .fly-post-body,
.fly-home-shell[data-fly-home-layout="carousel"] .fly-post-card .fly-post-body {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-rows: auto auto minmax(0, 1fr) auto;
  column-gap: 8px;
  padding: 12px 8px 16px 56px;
}

.fly-post-card--carousel .fly-post-title,
.fly-home-shell[data-fly-home-layout="carousel"] .fly-post-card .fly-post-title {
  grid-column: 1 / -1;
  grid-row: 1;
}

.fly-post-card--carousel .fly-post-excerpt,
.fly-home-shell[data-fly-home-layout="carousel"] .fly-post-card .fly-post-excerpt {
  grid-column: 1 / -1;
  grid-row: 2;
}

.fly-post-card--carousel .fly-post-meta,
.fly-home-shell[data-fly-home-layout="carousel"] .fly-post-card .fly-post-meta {
  grid-column: 2;
  grid-row: 4;
  align-self: center;
  flex-wrap: nowrap;
  margin-top: 12px;
  padding-top: 0;
}

.fly-post-card--carousel .fly-post-tags,
.fly-home-shell[data-fly-home-layout="carousel"] .fly-post-card .fly-post-tags {
  min-width: 0;
  grid-column: 1;
  grid-row: 4;
  align-self: center;
  flex-wrap: nowrap;
  margin-top: 12px;
  overflow: hidden;
}

.fly-post-card--carousel .fly-post-tags a,
.fly-home-shell[data-fly-home-layout="carousel"] .fly-post-card .fly-post-tags a {
  min-width: 0;
}

.fly-post-card--carousel .fly-author-pill:has(.fly-author-popover-trigger),
.fly-home-shell[data-fly-home-layout="carousel"] .fly-post-card .fly-author-pill:has(.fly-author-popover-trigger) {
  display: contents;
}

.fly-post-card--carousel .fly-author-popover-trigger,
.fly-home-shell[data-fly-home-layout="carousel"] .fly-post-card .fly-author-popover-trigger {
  position: absolute;
  top: 10px;
  left: 8px;
  width: 36px;
  height: 36px;
  flex-basis: 36px;
}

.fly-post-card--carousel .fly-author-popover-anchor,
.fly-home-shell[data-fly-home-layout="carousel"] .fly-post-card .fly-author-popover-anchor {
  width: 36px;
  height: 36px;
  gap: 0;
}

.fly-post-card--carousel .fly-author-popover-anchor img,
.fly-home-shell[data-fly-home-layout="carousel"] .fly-post-card .fly-author-popover-anchor img {
  width: 36px;
  height: 36px;
  flex-basis: 36px;
}

.fly-post-card--carousel .fly-author-popover-label,
.fly-home-shell[data-fly-home-layout="carousel"] .fly-post-card .fly-author-popover-label {
  display: none;
}

.fly-post-card[hidden],
.fly-post-card.fly-is-filtered-out {
  display: none;
}

.fly-taxonomy-post-card {
  position: relative;
  display: flex;
  height: 100%;
  min-width: 0;
  flex-direction: column;
  gap: 8px;
  background: var(--page);
}

.fly-taxonomy-post-media,
.fly-taxonomy-post-card .fly-post-image-frame {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 14px;
  background: var(--page-alt);
  aspect-ratio: 16 / 9;
}

.fly-taxonomy-post-media-link,
.fly-taxonomy-post-card .fly-post-image-link {
  position: absolute;
  inset: 0;
  display: block;
  border-radius: inherit;
}

.fly-taxonomy-post-cover,
.fly-taxonomy-post-media .fly-post-cover-media,
.fly-taxonomy-post-card .fly-post-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 800ms cubic-bezier(0.2, 1, 0.2, 1);
}

.fly-taxonomy-post-body,
.fly-taxonomy-post-card .fly-post-body {
  position: relative;
  display: flex;
  min-width: 0;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 2px;
  padding: 12px 8px 16px 56px;
}

.fly-taxonomy-post-card--author-preview .fly-taxonomy-post-body {
  padding: 12px 8px 16px;
}

.fly-taxonomy-post-title,
.fly-taxonomy-post-card .fly-post-title {
  display: -webkit-box;
  margin: 0 0 6px;
  overflow: hidden;
  color: var(--text);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 19.2px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.fly-taxonomy-post-title a,
.fly-taxonomy-post-card .fly-post-title a {
  transition: opacity 180ms ease;
}

.fly-taxonomy-post-card .fly-author-popover-trigger {
  position: absolute;
  top: 10px;
  left: 8px;
  width: 36px;
  height: 36px;
  flex-basis: 36px;
}

.fly-taxonomy-post-card .fly-author-popover-anchor,
.fly-taxonomy-post-card .fly-author-popover-anchor img {
  width: 36px;
  height: 36px;
}

.fly-taxonomy-post-card .fly-author-popover-anchor {
  gap: 0;
}

.fly-taxonomy-post-card .fly-author-popover-label {
  display: none;
}

.fly-taxonomy-post-fallback-avatar {
  position: absolute;
  top: 10px;
  left: 8px;
  width: 36px;
  height: 36px;
  overflow: hidden;
  border-radius: 50%;
  background: var(--page-alt);
}

.fly-taxonomy-post-fallback-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fly-taxonomy-post-card .fly-post-video-badge {
  top: auto;
  right: 10px;
  bottom: 10px;
}

.fly-author-preview-post-card .fly-author-preview-badge-group {
  position: absolute;
  right: 12px;
  bottom: 12px;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 6px;
}

.fly-author-preview-post-card .fly-author-preview-visit-badge {
  display: inline-flex;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: rgba(5, 5, 5, 0.7);
  color: #fff;
  padding: 2px 8px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;
}

.fly-author-preview-post-card .fly-author-preview-badge-group .fly-post-video-badge {
  position: static;
  width: 24px;
  height: 24px;
  padding: 2px;
}

.fly-taxonomy-post-author,
.fly-taxonomy-post-meta {
  color: var(--muted);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
}

.fly-taxonomy-post-author {
  margin-top: 0;
}

.fly-taxonomy-post-meta {
  display: flex;
  min-width: 0;
  flex-wrap: wrap;
  gap: 0 6px;
  margin-top: 0;
}

.fly-taxonomy-post-card:hover .fly-taxonomy-post-cover,
.fly-taxonomy-post-card:focus-within .fly-taxonomy-post-cover,
.fly-taxonomy-post-card:hover .fly-post-cover,
.fly-taxonomy-post-card:focus-within .fly-post-cover {
  transform: scale(1.04);
}

.fly-taxonomy-post-card:hover .fly-taxonomy-post-title a,
.fly-taxonomy-post-card:focus-within .fly-taxonomy-post-title a,
.fly-taxonomy-post-card:hover .fly-post-title a,
.fly-taxonomy-post-card:focus-within .fly-post-title a {
  opacity: 0.68;
}

.fly-taxonomy-post-card--author-preview:hover .fly-taxonomy-post-cover,
.fly-taxonomy-post-card--author-preview:focus-within .fly-taxonomy-post-cover,
.fly-taxonomy-post-card--author-preview:hover .fly-post-cover,
.fly-taxonomy-post-card--author-preview:focus-within .fly-post-cover {
  transform: none;
}

.fly-taxonomy-post-card--author-preview:hover .fly-taxonomy-post-title a,
.fly-taxonomy-post-card--author-preview:focus-within .fly-taxonomy-post-title a,
.fly-taxonomy-post-card--author-preview:hover .fly-post-title a,
.fly-taxonomy-post-card--author-preview:focus-within .fly-post-title a {
  opacity: 1;
}

@media (max-width: 539px) {
  .fly-post-card .fly-author-pill {
    flex-grow: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fly-post-cover,
  .fly-post-title a,
  .fly-overlay-post-image,
  .fly-taxonomy-post-cover,
  .fly-taxonomy-post-media .fly-post-cover-media,
  .fly-taxonomy-post-card .fly-post-cover,
  .fly-taxonomy-post-title a,
  .fly-taxonomy-post-card .fly-post-title a {
    transition: none;
  }

  .fly-post-card:hover .fly-post-cover,
  .fly-overlay-post-card:hover .fly-overlay-post-image,
  .fly-overlay-post-card:focus-within .fly-overlay-post-image,
  .fly-taxonomy-post-card:hover .fly-taxonomy-post-cover,
  .fly-taxonomy-post-card:focus-within .fly-taxonomy-post-cover,
  .fly-taxonomy-post-card:hover .fly-post-cover,
  .fly-taxonomy-post-card:focus-within .fly-post-cover {
    transform: none;
  }
}
`,
};
