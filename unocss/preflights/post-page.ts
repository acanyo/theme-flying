export const postPagePreflight = {
  getCSS: () => String.raw`
body.fly-post {
  --fly-post-padding: var(--fly-responsive-gutter);
  --fly-post-gap: var(--section-gap);
}

body.fly-post[data-fly-comments-open="true"] { overflow: hidden; }

.fly-post-page {
  display: flex;
  width: 100%;
  min-width: 0;
  max-width: 3080px;
  flex-direction: column;
  gap: var(--fly-post-gap);
  margin: 0 auto;
  padding: 16px var(--fly-post-padding) var(--fly-post-padding);
}

.fly-post-page-header,
.fly-post-page-grid { width: 100%; max-width: 1100px; margin-inline: auto; }

.fly-post-page-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 30px;
}

.fly-post-page-title,
.fly-post-page-excerpt { width: 700px; max-width: 100%; }

.fly-post-page-title {
  margin: 0;
  color: var(--text);
  font-size: 28px;
  font-weight: 600;
  line-height: 30.8px;
  overflow-wrap: anywhere;
}

.fly-post-page-excerpt {
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 24px;
}

.fly-post-page-tags { width: 700px; max-width: 100%; margin-top: 4px; }
.fly-post-page-tags ul {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.fly-post-page-tags a {
  display: inline-flex;
  height: 26px;
  align-items: center;
  border-radius: 6px;
  background: var(--hover-bg-color);
  color: var(--text);
  padding: 2px 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  transition: color 150ms ease, background-color 150ms ease;
}
.fly-post-page-tags a:hover,
.fly-post-page-tags a:focus-visible { background: color-mix(in srgb, var(--hover-bg-color) 72%, var(--text)); }

.fly-post-page-header-info {
  display: flex;
  min-width: 0;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 20px 30px;
  margin-top: 16px;
  border-top: 1px solid var(--line);
  padding-top: 30px;
}

.fly-post-page-meta {
  position: relative;
  display: flex;
  min-width: 0;
  min-height: 46px;
  flex: 1 1 auto;
  align-items: center;
  flex-wrap: wrap;
  gap: 0 8px;
  margin: 0;
  padding: 0 0 0 58px;
  color: var(--faint);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  list-style: none;
}
.fly-post-page-meta-author { display: inline-flex; min-width: 0; align-items: center; gap: 4px; }
.fly-post-page-meta-avatar {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: var(--page-alt);
  overflow: hidden;
}
.fly-post-page-meta-avatar img { width: 100%; height: 100%; border-radius: inherit; object-fit: cover; }
.fly-post-page-meta-author-name { min-width: 0; overflow: hidden; color: var(--text); text-overflow: ellipsis; white-space: nowrap; }
.fly-post-page-meta-separator { color: var(--faint); }

.fly-post-page-actions { display: flex; flex: 0 0 auto; align-items: center; flex-wrap: wrap; gap: 6px 10px; }
.fly-post-page-action {
  display: inline-flex;
  min-width: 0;
  height: 33px;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 0;
  border-radius: 20px;
  background: var(--hover-bg-color);
  color: var(--text);
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  transition: opacity 150ms ease, background-color 150ms ease, color 150ms ease;
}
.fly-post-page-action:hover,
.fly-post-page-action:focus-visible { background: color-mix(in srgb, var(--hover-bg-color) 72%, var(--text)); }
.fly-post-page-action .fly-iconify { width: 20px; height: 20px; flex-basis: 20px; }
.fly-post-comment-count {
  display: inline-grid;
  min-width: 16px;
  height: 16px;
  place-items: center;
  border-radius: 999px;
  background: var(--page);
  color: var(--text);
  font-size: 11px;
  font-weight: 600;
  line-height: 16px;
}

.fly-post-page-share { position: relative; }
.fly-post-share-menu {
  position: absolute;
  top: calc(100% + 18px);
  right: 0;
  z-index: 40;
  display: grid;
  width: 210px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--page);
  box-shadow: var(--shadow-soft);
  opacity: 0;
  padding: 4px;
  pointer-events: none;
  transform: translateY(-2px);
  visibility: hidden;
  transition: transform 150ms ease, visibility 150ms ease, opacity 150ms ease;
}
.fly-post-share-menu[data-fly-open="true"] { opacity: 1; pointer-events: auto; transform: translateY(0); visibility: visible; }
.fly-post-share-menu > a,
.fly-post-share-menu > button {
  display: flex;
  width: 100%;
  min-height: 40px;
  align-items: center;
  gap: 10px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: var(--text);
  padding: 8px 12px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
}
.fly-post-share-menu > a:hover,
.fly-post-share-menu > button:hover,
.fly-post-share-menu > a:focus-visible,
.fly-post-share-menu > button:focus-visible { background: var(--hover-bg-color); }
.fly-post-share-menu .fly-iconify,
.fly-post-share-letter { display: inline-grid; width: 20px; height: 20px; flex: 0 0 20px; place-items: center; font-size: 13px; font-weight: 600; line-height: 1; }

.fly-post-page-media { position: relative; width: 100%; max-width: 1300px; margin-inline: auto; }
.fly-post-page-media figure { width: 100%; aspect-ratio: 21 / 9; margin: 0; border-radius: 14px; background: var(--page-alt); overflow: hidden; }
.fly-post-page-media img { width: 100%; height: 100%; object-fit: cover; }

.fly-post-page-grid {
  display: grid;
  min-width: 0;
  grid-template-columns: minmax(0, 1fr) 320px;
  column-gap: var(--fly-post-gap);
  row-gap: 30px;
}
.fly-post-page-body { min-width: 0; grid-column: 1; grid-row: 1; }

body.fly-post .fly-post-page-content { min-width: 0; color: var(--muted); font-size: 16px; line-height: 24px; }
body.fly-post .fly-post-page-content > * { width: 100%; max-width: 700px; margin-right: auto; margin-left: auto; }
body.fly-post .fly-post-page-content > *:first-child { margin-top: 0; }
body.fly-post .fly-post-page-content > p,
body.fly-post .fly-post-page-content > ul,
body.fly-post .fly-post-page-content > ol { margin-top: 24px; margin-bottom: 0; }
body.fly-post .fly-post-page-content h2,
body.fly-post .fly-post-page-content h3,
body.fly-post .fly-post-page-content h4 { color: var(--text); font-weight: 600; letter-spacing: 0; }
body.fly-post .fly-post-page-content h2 { margin-top: 48px; margin-bottom: 0; font-size: 22px; line-height: 26.4px; }
body.fly-post .fly-post-page-content h3 { margin-top: 48px; margin-bottom: 0; font-size: 20px; line-height: 24px; }
body.fly-post .fly-post-page-content h4 { margin-top: 36px; margin-bottom: 0; font-size: 18px; line-height: 24px; }
body.fly-post .fly-post-page-content ul,
body.fly-post .fly-post-page-content ol { padding-left: 20px; }
body.fly-post .fly-post-page-content li { margin: 0; padding: 0; }
body.fly-post .fly-post-page-content a { color: var(--text); font-weight: inherit; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
body.fly-post .fly-post-page-content > figure,
body.fly-post .fly-post-page-content > .kg-card { margin-top: 30px; margin-bottom: 30px; }
body.fly-post .fly-post-page-content figure { padding: 0; }
body.fly-post .fly-post-page-content figure > img,
body.fly-post .fly-post-page-content .kg-image-card img { width: 100%; height: auto; border-radius: 14px; object-fit: cover; }
body.fly-post .fly-post-page-content blockquote { max-width: 700px; margin-top: 24px; margin-bottom: 22px; border: 0; color: var(--text); padding: 12px 0; text-align: center; font-size: 22px; font-weight: 300; line-height: 1.3; }
body.fly-post .fly-post-page-content blockquote p { margin: 0; }
body.fly-post .fly-post-page-content code { border-radius: 5px; background: var(--page-alt); color: var(--text); padding: 2px 5px; font-size: 0.9em; }
body.fly-post .fly-post-page-content pre { max-width: 700px; margin-top: 30px; margin-bottom: 30px; border-radius: 14px; background: var(--page-alt); padding: 18px; overflow: auto; }
body.fly-post .fly-post-page-content pre code { background: transparent; padding: 0; }
body.fly-post .fly-post-page-content iframe,
body.fly-post .fly-post-page-content video { max-width: 100%; border-radius: 14px; }
body.fly-post .fly-post-page-content table { display: block; max-width: 700px; border-collapse: collapse; overflow-x: auto; }
body.fly-post .fly-post-page-content th,
body.fly-post .fly-post-page-content td { border: 1px solid var(--line); padding: 8px 10px; text-align: left; }

.fly-post-page-aside { display: flex; min-width: 0; grid-column: 2; grid-row: 1; flex-direction: column; gap: 50px; }
.fly-post-page-aside-sticky { position: sticky; top: 78px; z-index: 1; display: flex; min-width: 0; flex-direction: column; gap: 50px; }
.fly-post-author { display: flex; min-width: 0; align-items: flex-start; flex-direction: column; gap: 12px; color: var(--muted); }
.fly-post-author-avatar { display: block; width: 46px; height: 46px; margin-bottom: 4px; border-radius: 50%; background: var(--page-alt); overflow: hidden; }
.fly-post-author-avatar img { width: 100%; height: 100%; border-radius: inherit; object-fit: cover; }
.fly-post-author h2,
.fly-post-author p { margin: 0; }
.fly-post-author h2 { color: var(--text); font-size: 18px; font-weight: 600; line-height: 21.6px; }
.fly-post-author-bio { font-size: 16px; line-height: 24px; }
.fly-post-author-links { display: flex; min-width: 0; align-items: center; flex-wrap: wrap; gap: 8px; margin: 0; padding: 0; list-style: none; }
.fly-post-author-links a { display: inline-grid; width: 32px; height: 32px; place-items: center; border-radius: 8px; background: var(--page-alt); color: var(--text); transition: background-color 150ms ease; }
.fly-post-author-links a:hover,
.fly-post-author-links a:focus-visible { background: var(--hover-bg-color); }
.fly-post-author-links .fly-iconify { width: 20px; height: 20px; flex-basis: 20px; }
.fly-post-author--compact { display: none; width: 100%; max-width: 700px; margin: var(--fly-post-gap) auto 0; border-radius: 14px; background: var(--page-alt); padding: 30px; }

.fly-post-toc[hidden] { display: none !important; }
.fly-post-toc-toggle { display: flex; width: 100%; min-height: 32px; align-items: center; gap: 8px; border: 0; background: transparent; color: var(--text); padding: 0; text-align: left; font-size: 14px; font-weight: 600; line-height: 21px; cursor: default; }
.fly-post-toc-toggle .fly-iconify { width: 16px; height: 16px; flex-basis: 16px; }
.fly-post-toc-list,
.fly-post-toc-list ol { margin: 0; padding: 0; list-style: none; }
.fly-post-toc-list { margin-top: 12px; border-left: 1px solid var(--line); padding-left: 14px; }
.fly-post-toc-list ol { padding-left: 12px; }
.fly-post-toc-list a { display: block; border-radius: 6px; color: var(--muted); padding: 4px 6px; font-size: 14px; font-weight: 500; line-height: 21px; transition: background-color 150ms ease, color 150ms ease; }
.fly-post-toc-list a:hover,
.fly-post-toc-list a:focus-visible,
.fly-post-toc-list a.fly-is-active { background: var(--page-alt); color: var(--text); }

.fly-post-sidebar-newsletter h2 { margin: 0 0 12px; color: var(--muted); font-size: 14px; font-weight: 600; line-height: 21px; }
.fly-post-sidebar-newsletter-form,
.fly-post-newsletter-form { position: relative; width: 100%; }
.fly-post-sidebar-newsletter-form label,
.fly-post-newsletter-form label { display: block; }
.fly-post-sidebar-newsletter-form input { width: 100%; height: 50px; border: 0; border-radius: 32px; outline: 0; background: var(--hover-bg-color); color: var(--text); padding: 12px 128px 12px 20px; font-size: 14px; font-weight: 500; line-height: 21px; }
.fly-post-sidebar-newsletter-form input:focus,
.fly-post-newsletter-form input:focus { box-shadow: 0 0 0 2px var(--text); }
.fly-post-sidebar-newsletter-form .fly-button { position: absolute; top: 5px; right: 5px; min-height: 40px; border: 0; border-radius: 32px; background: var(--text); color: var(--page); padding: 6px 16px; font-size: 14px; font-weight: 600; line-height: 21px; }
.fly-post-sidebar-newsletter-form .fly-newsletter-status { position: static; margin: 8px 0 0; padding: 0 10px; }

.fly-post-related { position: relative; width: 100%; max-width: 1300px; margin-inline: auto; border-top: 1px solid var(--line); padding-top: var(--fly-post-gap); }
.fly-post-related > h2 { max-width: 700px; margin: 0 0 30px; color: var(--text); font-size: 22px; font-weight: 600; line-height: 26.4px; }
.fly-post-related-track { --fly-related-card-width: calc((100% - 2 * var(--fly-post-padding)) / 3); position: relative; }
.fly-post-related-rail { display: grid; min-width: 0; grid-auto-columns: var(--fly-related-card-width); grid-auto-flow: column; gap: var(--fly-post-padding); overflow-x: auto; overflow-y: hidden; scroll-snap-type: x mandatory; scrollbar-width: none; overscroll-behavior-inline: contain; touch-action: pan-x pan-y; }
.fly-post-related-rail::-webkit-scrollbar { display: none; }
.fly-post-related-rail.fly-is-dragging { cursor: grabbing; scroll-snap-type: none; user-select: none; }
.fly-post-related-card { display: flex; min-width: 0; flex-direction: column; scroll-snap-align: start; }
.fly-post-related-media { position: relative; display: block; width: 100%; aspect-ratio: 16 / 9; border-radius: 14px; background: var(--hover-bg-color); overflow: hidden; }
.fly-post-related-media :is(img, video, .fly-post-cover-media) { width: 100%; height: 100%; object-fit: cover; }
.fly-post-related-image { transition: transform 600ms cubic-bezier(0.2, 1, 0.2, 1); }
.fly-post-related-card:hover .fly-post-related-image,
.fly-post-related-card:focus-within .fly-post-related-image { transform: scale(1.025); }
.fly-post-related-read { position: absolute; right: 8px; bottom: 8px; border-radius: 6px; background: rgba(0, 0, 0, 0.62); color: #fff; padding: 2px 8px; font-size: 12px; font-weight: 600; line-height: 18px; }
.fly-post-related-summary { display: grid; min-width: 0; grid-template-columns: 36px minmax(0, 1fr); gap: 12px; margin-top: 8px; padding: 12px 8px 16px 0; }
.fly-post-related-avatar { display: block; width: 36px; height: 36px; border-radius: 50%; background: var(--page-alt); overflow: hidden; }
.fly-post-related-avatar img { width: 100%; height: 100%; object-fit: cover; }
.fly-post-related-summary h3,
.fly-post-related-summary p { margin: 0; }
.fly-post-related-summary h3 { margin-bottom: 6px; color: var(--text); font-size: 16px; font-weight: 600; line-height: 19.2px; }
.fly-post-related-summary h3 a { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
.fly-post-related-summary p { color: var(--muted); font-size: 14px; font-weight: 500; line-height: 21px; }
.fly-post-related-meta { display: flex; min-width: 0; align-items: center; flex-wrap: wrap; gap: 0 6px; }
.fly-post-related-arrow { position: absolute; top: calc(var(--fly-related-card-width) * 0.28125 - 20px); z-index: 3; display: grid; width: 40px; height: 40px; place-items: center; border: 0; border-radius: 50%; background: var(--page); box-shadow: 0 5px 20px -7px rgba(0, 0, 0, 0.2); color: var(--text); transition: color 150ms ease, opacity 150ms ease, background-color 150ms ease; }
.fly-post-related-arrow:hover:not(:disabled),
.fly-post-related-arrow:focus-visible:not(:disabled) { background: var(--text); color: var(--page); }
.fly-post-related-arrow:disabled { opacity: 0; pointer-events: none; }
.fly-post-related-arrow--prev { left: -20px; }
.fly-post-related-arrow--prev .fly-iconify { transform: rotate(180deg); }
.fly-post-related-arrow--next { right: -20px; }
.fly-post-related-arrow .fly-iconify { width: 20px; height: 20px; flex-basis: 20px; }

.fly-post-newsletter-panel { display: none; width: 100%; max-width: 1300px; min-width: 0; align-items: flex-start; gap: 30px; margin-inline: auto; border-radius: var(--radius-section); background: var(--page-alt); padding: 30px; }
.fly-post-newsletter-panel > div { width: 100%; max-width: 40%; flex: 1 0 0%; }
.fly-post-newsletter-panel h2 { margin: 0; color: var(--text); font-size: 22px; font-weight: 600; line-height: 26.4px; }
.fly-post-newsletter-panel > div > p { margin: 12px 0 0; color: var(--muted); font-size: 16px; line-height: 24px; }
.fly-post-newsletter-form { display: flex; flex: 1 1 0%; gap: 12px; }
.fly-post-newsletter-form label { width: 100%; }
.fly-post-newsletter-form input { width: 100%; height: 50px; border: 0; border-radius: 32px; outline: 0; background: var(--page); color: var(--text); padding: 12px 128px 12px 20px; font-size: 14px; font-weight: 500; line-height: 21px; }
.fly-post-newsletter-form .fly-button { position: absolute; top: 5px; right: 5px; min-height: 40px; border: 0; border-radius: 32px; background: var(--text); color: var(--page); padding: 6px 16px; font-size: 14px; font-weight: 600; line-height: 21px; }
.fly-post-newsletter-form .fly-newsletter-status { position: absolute; top: calc(100% + 6px); left: 20px; margin: 0; color: var(--muted); font-size: 14px; line-height: 21px; }
.fly-post-newsletter-form .fly-newsletter-status:empty { display: none; }

.fly-post-comments-layer { position: fixed; inset: 0; z-index: 10001; opacity: 0; pointer-events: none; visibility: hidden; transition: opacity 200ms ease, visibility 200ms ease; }
.fly-post-comments-layer[data-fly-open="true"] { opacity: 1; pointer-events: auto; visibility: visible; }
.fly-post-comments-backdrop { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; background: color-mix(in srgb, var(--navigation-overlay) 82%, transparent); backdrop-filter: blur(9px); }
.fly-post-comments-panel { position: absolute; top: 0; right: 0; display: flex; width: min(400px, 100vw); height: 100%; flex-direction: column; background: var(--page); box-shadow: var(--shadow-soft); transform: translateX(100%); transition: transform 600ms cubic-bezier(0.2, 1, 0.2, 1); }
.fly-post-comments-layer[data-fly-open="true"] .fly-post-comments-panel { transform: translateX(0); }
.fly-post-comments-panel > header { display: flex; height: var(--navbar-height); flex: 0 0 var(--navbar-height); align-items: center; justify-content: space-between; border-bottom: 1px solid var(--line); padding: 0 18px; }
.fly-post-comments-panel h2 { margin: 0; color: var(--text); font-size: 16px; font-weight: 600; line-height: 19.2px; }
.fly-post-comments-close { display: grid; width: 32px; height: 32px; place-items: center; border: 0; border-radius: 10px; background: var(--page-alt); color: var(--text); }
.fly-post-comments-close .fly-iconify { width: 16px; height: 16px; flex-basis: 16px; }
.fly-post-comments-body { min-height: 0; flex: 1 1 auto; overflow-y: auto; padding: 0 18px 24px; }

@media (min-width: 992px) {
  body.fly-post .fly-post-page-content .kg-gallery-card.kg-width-wide { width: calc(100% + var(--fly-post-padding)); max-width: calc(100% + var(--fly-post-padding)); margin-right: calc(var(--fly-post-padding) * -0.5); margin-left: calc(var(--fly-post-padding) * -0.5); }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .fly-post-page-grid { grid-template-columns: minmax(0, 1fr) 280px; }
}

@media (max-width: 991px) {
  .fly-post-page-grid { display: flex; max-width: 1100px; flex-direction: column; gap: 0; }
  .fly-post-page-aside { order: 1; width: 100%; max-width: 700px; margin: 0 auto; }
  .fly-post-page-body { order: 2; width: 100%; max-width: 700px; margin: 0 auto; }
  .fly-post-author--desktop,
  .fly-post-sidebar-newsletter { display: none; }
  .fly-post-author--compact { display: flex; }
  .fly-post-page-aside-sticky { position: static; display: block; }
  .fly-post-toc { width: 100%; border: 1px solid var(--line); border-radius: 14px; padding: 6px 8px; overflow: hidden; }
  .fly-post-toc-toggle { cursor: pointer; }
  .fly-post-toc-list { margin-top: 8px; border-left: 0; padding: 0 2px 2px; }
  .fly-post-toc[data-fly-expanded="false"] .fly-post-toc-list { display: none; }
  .fly-post-toc-list ol { padding-left: 12px; }
  .fly-post-related-track { --fly-related-card-width: calc((100% - var(--fly-post-padding)) / 2); }
  .fly-post-newsletter-panel { display: flex; }
}

@media (max-width: 766px) {
  .fly-post-newsletter-panel { flex-direction: column; }
  .fly-post-newsletter-panel > div { max-width: 400px; }
  .fly-post-newsletter-form { width: 100%; flex: 0 0 auto; flex-direction: column; align-self: flex-start; }
}

@media (max-width: 560px) {
  .fly-post-page-meta { flex-basis: 100%; }
  body.fly-post .fly-post-page-content .kg-bookmark-container { min-height: 0; flex-direction: column-reverse; }
  body.fly-post .fly-post-page-content .kg-bookmark-content { flex: 0 0 auto; padding: 8px 12px 12px; }
  body.fly-post .fly-post-page-content .kg-bookmark-thumbnail { width: 100%; aspect-ratio: 16 / 9; flex: 0 0 auto; }
  .fly-post-related-track { --fly-related-card-width: 100%; }
}

@media (max-width: 480px) {
  .fly-post-page-media { margin-top: calc(var(--fly-post-gap) * -0.5); }
  .fly-post-author--compact { padding: var(--fly-post-padding); }
  .fly-post-related-arrow--prev { left: -12px; }
  .fly-post-related-arrow--next { right: -12px; }
  .fly-post-comments-panel { width: 100%; }
  .fly-post-newsletter-panel { border-radius: var(--fly-post-padding); padding: 20px; }
  .fly-post-newsletter-form { gap: 8px; }
  .fly-post-newsletter-form input { height: 48px; padding: 10px 20px; }
  .fly-post-newsletter-form .fly-button { position: static; width: 100%; }
  .fly-post-newsletter-form .fly-newsletter-status { position: static; width: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  .fly-post-related-image,
  .fly-post-comments-panel,
  .fly-post-share-menu { transition: none; }
}
`,
};
