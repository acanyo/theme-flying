export const momentsPagePreflight = {
  getCSS: () => String.raw`
body.fly-moments {
  --content-padding-x: var(--fly-responsive-gutter);
  --content-padding-mobile: var(--fly-responsive-gutter);
  --section-gap: clamp(60px, calc(53.1px + 1.8vw), 80px);
}

.fly-moments-shell,
.fly-moments-page,
.fly-moments-feed,
.fly-moments-list,
.fly-moment-card,
.fly-moment-body,
.fly-moment-media,
.fly-moment-detail-shell,
.fly-moment-detail {
  width: 100%;
  min-width: 0;
}

.fly-moments-page {
  display: flex;
  flex-direction: column;
  gap: var(--section-gap);
  padding-bottom: var(--content-padding-x);
}

.fly-moments-page .fly-taxonomy-hero { margin: 0; }
.fly-moments-filter { margin: calc((var(--section-gap) - 30px) * -1) 0 -4px; }
.fly-moments-filter-item { gap: 7px; }
.fly-moments-filter-item small {
  color: var(--faint);
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  line-height: 1;
}
.fly-moments-filter-item.fly-is-active small,
.fly-moments-filter-item[aria-current="page"] small { color: var(--muted); }

.fly-moments-feed {
  margin: calc((var(--section-gap) - 30px) * -1) 0 0;
}
.fly-moments-list {
  columns: 1;
  column-gap: clamp(18px, 1.65vw, 26px);
}
.fly-moment-card {
  position: relative;
  display: inline-flex;
  break-inside: avoid;
  flex-direction: column;
  overflow: hidden;
  margin: 0 0 clamp(18px, 1.65vw, 26px);
  border-radius: 14px;
  background: var(--page-alt);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--text) 5%, transparent);
  padding: clamp(19px, 1.55vw, 24px);
  transition:
    background-color 180ms ease,
    box-shadow 360ms ease,
    transform 420ms cubic-bezier(0.2, 1, 0.2, 1);
}
.fly-moment-card:hover,
.fly-moment-card:focus-within {
  background: var(--hover-bg-color);
  box-shadow:
    inset 0 0 0 1px color-mix(in srgb, var(--text) 4%, transparent),
    0 24px 48px -36px rgba(0, 0, 0, 0.58);
  transform: translateY(-3px);
}
.fly-moment-card .fly-moment-body {
  margin-top: 22px;
}

.fly-moment-author {
  display: grid;
  min-width: 0;
  grid-template-columns: 44px minmax(0, 1fr);
  align-items: center;
  gap: 13px;
}
.fly-moment-author-avatar {
  display: block;
  width: 44px;
  height: 44px;
  overflow: hidden;
  border-radius: 50%;
  background: var(--page);
  box-shadow: 0 10px 22px -18px rgba(0, 0, 0, 0.7);
}
.fly-moment-author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 520ms cubic-bezier(0.2, 1, 0.2, 1);
}
.fly-moment-card:hover .fly-moment-author-avatar img,
.fly-moment-card:focus-within .fly-moment-author-avatar img { transform: scale(1.05); }
.fly-moment-author-copy {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}
.fly-moment-author-name {
  max-width: 100%;
  overflow: hidden;
  color: var(--text);
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fly-moment-author-time { transition: opacity 160ms ease; }
.fly-moment-author-time:hover,
.fly-moment-author-time:focus-visible { opacity: 0.62; }
.fly-moment-author-time {
  color: var(--faint);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  font-weight: 500;
  line-height: 19px;
}
.fly-moment-rich-text,
.fly-moment-raw-text {
  color: var(--text);
  font-size: 16px;
  line-height: 1.72;
  overflow-wrap: anywhere;
}
.fly-moment-rich-text > :first-child { margin-top: 0; }
.fly-moment-rich-text > :last-child { margin-bottom: 0; }
.fly-moment-rich-text p,
.fly-moment-rich-text ul,
.fly-moment-rich-text ol,
.fly-moment-rich-text blockquote,
.fly-moment-raw-text { margin: 0 0 16px; }
.fly-moment-rich-text ul,
.fly-moment-rich-text ol { padding-left: 22px; }
.fly-moment-rich-text a {
  color: var(--text);
  text-decoration: underline;
  text-decoration-color: var(--faint);
  text-underline-offset: 3px;
}
.fly-moment-rich-text a.tag[href^="/moments?tag="] {
  display: none;
}
.fly-moment-rich-text br:has(+ a.tag[href^="/moments?tag="]),
.fly-moment-rich-text br:has(+ br + a.tag[href^="/moments?tag="]) {
  display: none;
}
.fly-moment-rich-text blockquote {
  border-left: 2px solid var(--text);
  color: var(--muted);
  padding-left: 16px;
}
.fly-moment-rich-text pre {
  overflow-x: auto;
  border-radius: 12px;
  background: var(--page);
  padding: 16px;
}
.fly-moment-rich-text code {
  border-radius: 5px;
  background: var(--page);
  padding: 2px 5px;
  font-size: 0.9em;
}
.fly-moment-rich-text pre code { background: transparent; padding: 0; }

.fly-moment-media {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}
.fly-moment-photo-grid {
  display: grid;
  gap: 4px;
  overflow: hidden;
  border-radius: 12px;
  background: var(--page);
}
.fly-moment-photo-grid--single { grid-template-columns: minmax(0, 1fr); }
.fly-moment-photo-grid--pair,
.fly-moment-photo-grid--gallery { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.fly-moment-photo-grid--gallery > :first-child:nth-last-child(3) { grid-row: span 2; }
.fly-moment-photo-link {
  display: block;
  min-width: 0;
  overflow: hidden;
  background: var(--page);
}
.fly-moment-photo {
  width: 100%;
  height: 100%;
  min-height: 190px;
  max-height: 420px;
  object-fit: cover;
}
.fly-moment-photo-grid--single .fly-moment-photo {
  height: auto;
  min-height: 0;
  max-height: 620px;
  object-fit: contain;
}
.fly-moment-photo-link .fly-moment-photo { transition: transform 700ms cubic-bezier(0.2, 1, 0.2, 1); }
.fly-moment-photo-link:hover .fly-moment-photo,
.fly-moment-photo-link:focus-visible .fly-moment-photo { transform: scale(1.025); }
.fly-moment-card .fly-moment-photo-grid--single { aspect-ratio: 4 / 3; }
.fly-moment-card .fly-moment-photo-grid {
  grid-auto-rows: minmax(0, 1fr);
}
.fly-moment-card .fly-moment-photo-grid--single .fly-moment-photo {
  width: 100%;
  height: 100%;
  max-height: none;
  object-fit: cover;
}
.fly-moment-card .fly-moment-photo-grid--pair,
.fly-moment-card .fly-moment-photo-grid--gallery { aspect-ratio: 4 / 3; }
.fly-moment-card .fly-moment-photo { min-height: 0; }
.fly-moment-video {
  display: block;
  width: 100%;
  max-height: 620px;
  border-radius: 14px;
  background: #000;
}
.fly-moment-audio { display: block; width: 100%; height: 44px; }
.fly-moment-post-link {
  display: flex;
  min-height: 52px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-radius: 12px;
  background: var(--page);
  color: var(--text);
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 160ms ease;
}
.fly-moment-post-link:hover,
.fly-moment-post-link:focus-visible { background: var(--hover-bg-color); }

.fly-moment-meta {
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 22px;
  border-top: 1px solid color-mix(in srgb, var(--text) 8%, transparent);
  padding-top: 16px;
}
.fly-moment-tags,
.fly-moment-stats {
  display: flex;
  min-width: 0;
  flex-wrap: wrap;
  align-items: center;
  gap: 7px 12px;
}
.fly-moment-tags a,
.fly-moment-stats,
.fly-moment-stats a {
  color: var(--faint);
  font-size: 13px;
  font-weight: 500;
  line-height: 19px;
}
.fly-moment-tags a {
  border-radius: 6px;
  background: var(--page);
  padding: 4px 7px;
}
.fly-moment-tags a,
.fly-moment-stats a { transition: color 160ms ease; }
.fly-moment-tags a:hover,
.fly-moment-tags a:focus-visible,
.fly-moment-stats a:hover,
.fly-moment-stats a:focus-visible { color: var(--text); }
.fly-moment-stats { flex: 0 0 auto; justify-content: flex-end; }
.fly-moment-detail-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--text) !important;
  font-weight: 600 !important;
  border-radius: 999px;
  background: var(--page);
  padding: 6px 10px;
  transition: background-color 160ms ease, opacity 160ms ease;
}
.fly-moment-detail-link:hover,
.fly-moment-detail-link:focus-visible { background: color-mix(in srgb, var(--page) 78%, var(--text) 8%); }
.fly-moment-detail-link .fly-motion-icon {
  display: block;
  flex: 0 0 auto;
}
.fly-moments-empty {
  margin: 0;
  border-radius: 14px;
  background: var(--page-alt);
  color: var(--muted);
  padding: 52px 24px;
  text-align: center;
}
.fly-moments-feed .fly-load-more-wrap {
  min-height: 40px;
  margin: clamp(28px, 3vw, 42px) auto 0;
}

.fly-moment-detail-shell {
  padding-bottom: var(--content-padding-x);
}
.fly-moment-detail {
  max-width: 700px;
  margin: 0 auto;
}
.fly-moment-back-link {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  background: var(--page-alt);
  color: var(--text);
  margin: 10px 0 20px;
  padding: 8px 15px;
  font-size: 13px;
  font-weight: 600;
  transition: background-color 160ms ease, transform 160ms ease;
}
.fly-moment-back-link:hover,
.fly-moment-back-link:focus-visible {
  background: var(--hover-bg-color);
  transform: translateX(-2px);
}
.fly-moment-detail-panel {
  overflow: visible;
  border-top: 1px solid var(--line);
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  padding: 30px 0 0;
}
.fly-moment-detail-panel .fly-moment-author {
  grid-template-columns: 46px minmax(0, 1fr);
  gap: 12px;
  margin-bottom: 30px;
}
.fly-moment-detail-panel .fly-moment-author-avatar {
  width: 46px;
  height: 46px;
}
.fly-moment-detail-content {
  min-width: 0;
  margin-left: 0;
}
.fly-moment-body--detail .fly-moment-rich-text,
.fly-moment-body--detail .fly-moment-raw-text {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.65;
}
.fly-moment-body--detail .fly-moment-meta {
  margin-top: 30px;
  padding-top: 16px;
}
.fly-moment-detail .fly-moment-photo[data-fly-lightbox-source] {
  cursor: url("../images/zoom-in.cur") 15 15, zoom-in;
}
.fly-moment-detail .fly-moment-comments {
  width: 100%;
  max-width: 700px;
  margin: 36px auto 0;
  grid-column: auto;
  grid-row: auto;
  border-top: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  padding: 0;
}
.fly-moment-detail .fly-post-comments-body {
  overflow: visible;
  border-radius: 0;
}

@media (max-width: 991px) {
  .fly-moments-page .fly-taxonomy-hero-copy > p:not(.fly-newsletter-status) { min-height: 72px; }
}
@media (min-width: 700px) {
  .fly-moments-list { columns: 2; }
}
@media (min-width: 1280px) {
  .fly-moments-list { columns: 3; }
}
@media (max-width: 639px) {
  .fly-moment-card {
    margin-bottom: 16px;
    padding: 18px;
  }
  .fly-moment-author {
    grid-template-columns: 40px minmax(0, 1fr);
    gap: 12px;
  }
  .fly-moment-author-avatar { width: 40px; height: 40px; }
  .fly-moment-card .fly-moment-body { margin-top: 18px; }
  .fly-moment-rich-text,
  .fly-moment-raw-text { font-size: 15px; }
  .fly-moment-photo { min-height: 120px; }
  .fly-moment-meta { flex-direction: column; gap: 10px; }
  .fly-moment-meta { align-items: flex-start; }
  .fly-moment-stats { justify-content: flex-start; }
  .fly-moment-detail-content { margin-left: 0; }
  .fly-moment-detail-panel {
    padding-top: 24px;
  }
  .fly-moment-detail-panel .fly-moment-author {
    grid-template-columns: 40px minmax(0, 1fr);
    gap: 12px;
    margin-bottom: 24px;
  }
  .fly-moment-detail-panel .fly-moment-author-avatar {
    width: 40px;
    height: 40px;
  }
  .fly-moment-body--detail .fly-moment-rich-text,
  .fly-moment-body--detail .fly-moment-raw-text { font-size: 16px; }
  .fly-moment-back-link { margin-bottom: 16px; }
  .fly-moment-detail .fly-moment-comments {
    margin-top: 28px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .fly-moment-photo-link .fly-moment-photo,
  .fly-moment-author-avatar img,
  .fly-moment-card,
  .fly-moment-back-link { transition: none; }
  .fly-moment-photo-link:hover .fly-moment-photo,
  .fly-moment-photo-link:focus-visible .fly-moment-photo,
  .fly-moment-card:hover,
  .fly-moment-card:focus-within,
  .fly-moment-back-link:hover,
  .fly-moment-back-link:focus-visible { transform: none; }
}
`,
};
