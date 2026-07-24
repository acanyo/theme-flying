export const postPagePreflight = {
  getCSS: () => String.raw`
body.fly-post {
  --fly-post-padding: var(--fly-responsive-gutter);
  --fly-post-gap: clamp(60px, calc(53.2143px + 1.7857vw), 80px);
}

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

.fly-post-page-grid { width: 100%; max-width: 1100px; margin-inline: auto; }

.fly-post-page-header { display: flex; width: 100%; margin-inline: auto; }
.fly-post-page-header-copy { display: flex; min-width: 0; flex-direction: column; gap: 16px; }

.fly-post-page-header--classic { max-width: 1100px; flex-direction: column; padding-top: 30px; }
.fly-post-page-header--classic .fly-post-page-header-copy { width: 100%; }
.fly-post-page-header--classic .fly-post-page-title { order: 1; }
.fly-post-page-header--classic .fly-post-page-excerpt { display: -webkit-box; order: 2; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 3; }
.fly-post-page-header--classic .fly-post-page-tags { order: 3; width: 700px; margin-top: 4px; }
.fly-post-page-header--classic .fly-post-page-header-info { order: 4; }
.fly-post-page-header--classic :is(.fly-post-page-title, .fly-post-page-excerpt) { width: 700px; }

.fly-post-page-title,
.fly-post-page-excerpt,
.fly-post-page-tags { max-width: 100%; }

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

.fly-post-page-tags {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 10px;
  margin: 0;
  padding: 0;
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
.fly-post-page-tags a:focus-visible { background: color-mix(in srgb, var(--hover-bg-color) 92%, var(--text)); }

.fly-post-page-header--split { max-width: 1300px; align-items: stretch; flex-direction: row; gap: 40px; }
.fly-post-page-header--split > .fly-post-page-media { width: auto; max-width: 50%; flex: 1 1 0%; margin-inline: 0; }
.fly-post-page-header--split > .fly-post-page-media figure { height: 100%; aspect-ratio: auto; }
.fly-post-page-header--split .fly-post-page-header-copy { max-width: 600px; flex: 1 1 0%; justify-content: center; padding: 30px 0; }
.fly-post-page-header--split :is(.fly-post-page-title, .fly-post-page-excerpt, .fly-post-page-tags) { width: 100%; }
.fly-post-page-header--split .fly-post-page-tags { margin-bottom: 4px; }
.fly-post-page-header--split .fly-post-page-header-info { align-items: flex-end; }

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
  flex: 1 0 max-content;
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
.fly-post-page-meta > li { display: flex; align-items: center; gap: 0 8px; }
.fly-post-page-meta-author {
  min-width: 0;
  min-height: 24px;
  flex: 0 0 100%;
}
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
.fly-post-page-meta-avatar > .fly-author-popover-trigger,
.fly-post-page-meta-avatar .fly-author-popover-anchor { width: 100%; height: 100%; }
.fly-post-page-meta-author > .fly-author-popover-trigger--name-only { min-width: 0; color: var(--text); }
.fly-post-page-meta-author > .fly-author-popover-trigger--name-only .fly-author-popover-anchor { min-width: 0; color: var(--text); }
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
.fly-post-page-action:focus-visible,
.fly-post-page-action[aria-expanded="true"] { background: color-mix(in srgb, var(--hover-bg-color) 92%, var(--text)); }
.fly-post-page-action[data-fly-motion-button]:hover,
.fly-post-page-action[data-fly-motion-button]:focus-visible,
.fly-post-page-action[data-fly-motion-button][aria-expanded="true"] { opacity: 1; }
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
.fly-post-page-media figure { position: relative; width: 100%; aspect-ratio: 21 / 9; margin: 0; border-radius: 14px; background: var(--page-alt); overflow: hidden; }
.fly-post-page-media :is(img, video, .fly-post-cover-media) { width: 100%; height: 100%; object-fit: cover; }

.fly-post-page-grid {
  display: grid;
  min-width: 0;
  grid-template-columns: minmax(0, 1fr) 320px;
  column-gap: var(--fly-post-gap);
  row-gap: var(--fly-post-gap);
}
.fly-post-page-body { min-width: 0; grid-column: 1; grid-row: 1; }

.fly-post-page-aside { display: flex; min-width: 0; grid-column: 2; grid-row: 1 / span 2; flex-direction: column; gap: 50px; }
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
.fly-post-toc-list a.fly-is-active { background: var(--hover-bg-color); color: var(--text); }

.fly-post-sidebar-newsletter h2 { margin: 0 0 12px; color: var(--muted); font-size: 14px; font-weight: 600; line-height: 21px; }
.fly-post-sidebar-newsletter-form,
.fly-post-newsletter-form { position: relative; width: 100%; }
.fly-post-sidebar-newsletter-control,
.fly-post-newsletter-control { display: contents; }
.fly-post-sidebar-newsletter-form label,
.fly-post-newsletter-form label { display: block; }
.fly-post-sidebar-newsletter-form input { width: 100%; height: 50px; border: 0; border-radius: 32px; outline: 0; background: var(--hover-bg-color); color: var(--text); padding: 12px 128px 12px 20px; font-size: 14px; font-weight: 500; line-height: 21px; }
.fly-post-sidebar-newsletter-form input:focus,
.fly-post-newsletter-form input:focus { box-shadow: 0 0 0 2px var(--accent); }
.fly-post-sidebar-newsletter-form .fly-button { position: absolute; top: 5px; right: 5px; min-height: 40px; border: 0; border-radius: 32px; background: var(--accent); color: var(--accent-contrast); padding: 6px 16px; font-size: 14px; font-weight: 600; line-height: 21px; }
.fly-post-sidebar-newsletter-form .fly-newsletter-status { position: static; margin: 8px 0 0; padding: 0 10px; }

.fly-post-related { position: relative; width: 100%; margin-inline: auto; border-top: 1px solid var(--line); padding-top: var(--fly-post-gap); }
.fly-post-related > h2 { max-width: 700px; margin: 0 0 30px; color: var(--text); font-size: 22px; font-weight: 600; line-height: 26.4px; }
.fly-post-related-track { position: relative; container-name: fly-post-related-track; container-type: inline-size; }
.fly-post-related-rail,
.fly-post-related-arrow {
  --fly-related-columns: 1;
  --fly-related-card-width: calc((100cqi - (var(--fly-related-columns) - 1) * var(--fly-post-padding)) / var(--fly-related-columns));
}
.fly-post-related-rail { display: grid; min-width: 0; grid-auto-columns: 100%; grid-auto-flow: column; gap: var(--fly-post-padding); overflow-x: auto; overflow-y: hidden; scroll-snap-type: x mandatory; scrollbar-width: none; overscroll-behavior-inline: contain; touch-action: pan-x pan-y; }
@supports (width: 1cqi) {
  .fly-post-related-rail { grid-auto-columns: var(--fly-related-card-width); }
}
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
.fly-post-related-arrow { position: absolute; top: clamp(64px, 12vw, 145px); z-index: 3; display: grid; width: 40px; height: 40px; place-items: center; border: 0; border-radius: 50%; background: var(--page); box-shadow: 0 5px 20px -7px rgba(0, 0, 0, 0.2); color: var(--text); transition: color 150ms ease, opacity 150ms ease, background-color 150ms ease; }
@supports (width: 1cqi) {
  .fly-post-related-arrow { top: calc(var(--fly-related-card-width) * 0.28125 - 20px); }
}
.fly-post-related-arrow:hover:not(:disabled),
.fly-post-related-arrow:focus-visible:not(:disabled) { background: var(--accent); color: var(--accent-contrast); }
.fly-post-related-arrow:disabled { opacity: 0; pointer-events: none; }
.fly-post-related-arrow--prev { left: -20px; }
.fly-post-related-arrow--prev .fly-iconify { transform: rotate(180deg); }
.fly-post-related-arrow--next { right: -20px; }
.fly-post-related-arrow .fly-iconify { width: 20px; height: 20px; flex-basis: 20px; }

@container fly-post-related-track (min-width: 600px) {
  .fly-post-related-rail,
  .fly-post-related-arrow { --fly-related-columns: 2; }
}

@container fly-post-related-track (min-width: 900px) {
  .fly-post-related-rail,
  .fly-post-related-arrow { --fly-related-columns: 3; }
}

@container fly-post-related-track (min-width: 1200px) {
  .fly-post-related-rail,
  .fly-post-related-arrow { --fly-related-columns: 4; }
}

@container fly-post-related-track (min-width: 1500px) {
  .fly-post-related-rail,
  .fly-post-related-arrow { --fly-related-columns: 5; }
}

@container fly-post-related-track (min-width: 1800px) {
  .fly-post-related-rail,
  .fly-post-related-arrow { --fly-related-columns: 6; }
}

.fly-post-newsletter-panel { display: none; width: 100%; max-width: 1300px; min-width: 0; align-items: flex-start; gap: 30px; margin-inline: auto; border-radius: var(--radius-section); background: var(--page-alt); padding: 30px; }
.fly-post-newsletter-panel > div { width: 100%; max-width: 40%; flex: 1 0 0%; }
.fly-post-newsletter-panel h2 { margin: 0; color: var(--text); font-size: 22px; font-weight: 600; line-height: 26.4px; }
.fly-post-newsletter-panel > div > p { margin: 12px 0 0; color: var(--muted); font-size: 16px; line-height: 24px; }
.fly-post-newsletter-form { display: flex; flex: 1 1 0%; gap: 12px; }
.fly-post-newsletter-form label { width: 100%; }
.fly-post-newsletter-form input { width: 100%; height: 50px; border: 0; border-radius: 32px; outline: 0; background: var(--page); color: var(--text); padding: 12px 128px 12px 20px; font-size: 14px; font-weight: 500; line-height: 21px; }
.fly-post-newsletter-form .fly-button { position: absolute; top: 5px; right: 5px; min-height: 40px; border: 0; border-radius: 32px; background: var(--accent); color: var(--accent-contrast); padding: 6px 16px; font-size: 14px; font-weight: 600; line-height: 21px; }
.fly-post-newsletter-form .fly-newsletter-status { position: absolute; top: calc(100% + 6px); left: 20px; margin: 0; color: var(--muted); font-size: 14px; line-height: 21px; }
.fly-post-newsletter-form .fly-newsletter-status:empty { display: none; }

.fly-post-comments {
  width: 100%;
  min-width: 0;
  max-width: 700px;
  grid-column: 1;
  grid-row: 2;
  border-top: 1px solid var(--line);
  outline: none;
  padding-top: var(--fly-post-gap);
  scroll-margin-top: calc(var(--navbar-height) + 24px);
}
.fly-post-comments-heading { position: relative; display: flex; min-width: 0; align-items: flex-start; gap: 7px; margin-bottom: 26px; padding-bottom: 11px; }
.fly-post-comments-heading::after { position: absolute; bottom: 0; left: 0; width: 24px; height: 3px; border-radius: 999px; background: var(--accent); content: ""; }
.fly-post-comments-heading h2 { margin: 0; color: var(--text); font-size: 24px; font-weight: 600; letter-spacing: -0.02em; line-height: 28.8px; }
.fly-post-comments-count {
  display: inline-grid;
  min-width: 20px;
  height: 20px;
  place-items: center;
  border-radius: 999px;
  background: var(--accent);
  color: var(--accent-contrast);
  padding: 0 6px;
  font-size: 11px;
  font-weight: 700;
  line-height: 20px;
  transform: translateY(-3px);
}
.fly-post-comments-body { width: 100%; min-width: 0; }

@media (prefers-reduced-motion: no-preference) {
  html:has(body.fly-post) { scroll-behavior: smooth; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .fly-post-page-grid { grid-template-columns: minmax(0, 1fr) 280px; }
}

@media (max-width: 991px) {
  .fly-post-page-header--split { flex-direction: column; gap: 40px; }
  .fly-post-page-header--split > .fly-post-page-media { width: 100%; max-width: 100%; flex: none; margin-inline: auto; }
  .fly-post-page-header--split > .fly-post-page-media figure { height: auto; aspect-ratio: 21 / 9; }
  .fly-post-page-header--split .fly-post-page-header-copy { width: 100%; max-width: 100%; flex: none; padding: 0; }
  .fly-post-page-grid { display: flex; max-width: 1100px; flex-direction: column; gap: 0; }
  .fly-post-page-aside { order: 1; width: 100%; max-width: 700px; margin: 0 auto; }
  .fly-post-page-body { order: 2; width: 100%; max-width: 700px; margin: 0 auto; }
  .fly-post-comments { order: 3; width: 100%; max-width: 700px; margin: var(--fly-post-gap) auto 0; }
  .fly-post-author--desktop,
  .fly-post-sidebar-newsletter { display: none; }
  .fly-post-author--compact { display: flex; }
  .fly-post-page-aside-sticky { position: static; display: block; }
  .fly-post-toc { width: 100%; border: 1px solid var(--line); border-radius: 14px; padding: 6px 8px; overflow: hidden; }
  .fly-post-toc-toggle { cursor: pointer; }
  .fly-post-toc-list { margin-top: 8px; border-left: 0; padding: 0 2px 2px; }
  .fly-post-toc[data-fly-expanded="false"] .fly-post-toc-list { display: none; }
  .fly-post-toc-list ol { padding-left: 12px; }
  .fly-post-newsletter-panel { display: flex; }
}

@media (max-width: 766px) {
  .fly-post-newsletter-panel { flex-direction: column; }
  .fly-post-newsletter-panel > div { max-width: 400px; }
  .fly-post-newsletter-form { width: 100%; flex: 0 0 auto; flex-direction: column; align-self: flex-start; }
}

@media (max-width: 560px) {
  .fly-post-page-header--classic .fly-post-page-excerpt { -webkit-line-clamp: 5; }
  .fly-post-page-meta { flex-basis: 100%; }
}

@media (max-width: 480px) {
  .fly-post-page--split { padding-top: 8px; }
  .fly-post-page-header--split { gap: 30px; }
  .fly-post-page--classic > .fly-post-page-media { margin-top: calc(var(--fly-post-gap) * -0.5); }
  .fly-post-author--compact { padding: var(--fly-post-padding); }
  .fly-post-related-arrow--prev { left: -12px; }
  .fly-post-related-arrow--next { right: -12px; }
  .fly-post-newsletter-panel { border-radius: var(--fly-post-padding); padding: 20px; }
  .fly-post-newsletter-form { gap: 8px; }
  .fly-post-newsletter-form input { height: 48px; padding: 10px 20px; }
  .fly-post-newsletter-form .fly-button { position: static; width: 100%; }
  .fly-post-newsletter-form .fly-newsletter-status { position: static; width: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  .fly-post-related-image,
  .fly-post-share-menu { transition: none; }
}
`,
};
