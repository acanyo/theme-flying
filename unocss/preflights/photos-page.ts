export const photosPagePreflight = {
  getCSS: () => String.raw`
body.fly-photos-page,
body.fly-photo-detail-page {
  --content-padding-x: var(--fly-responsive-gutter);
  --content-padding-mobile: var(--fly-responsive-gutter);
}
.fly-photos-shell,
.fly-photos-content,
.fly-photos-feed,
.fly-photos-list,
.fly-photo-card,
.fly-photo-card-link,
.fly-photo-detail-shell,
.fly-photo-detail { width: 100%; min-width: 0; }
.fly-photos-content {
  display: flex;
  flex-direction: column;
  gap: var(--section-gap);
  padding-bottom: var(--content-padding-x);
}
.fly-photos-content .fly-taxonomy-hero { margin: 0; }
.fly-photos-filter { margin: calc((var(--section-gap) - 30px) * -1) 0 -4px; }
.fly-photos-filter-item { gap: 7px; }
.fly-photos-filter-item small {
  color: var(--faint);
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  line-height: 1;
}
.fly-photos-filter-item.fly-is-active small,
.fly-photos-filter-item[aria-current="page"] small { color: var(--muted); }
.fly-photos-feed { margin: calc((var(--section-gap) - 30px) * -1) 0 0; }
.fly-photos-list { columns: 1; column-gap: clamp(16px, 1.8vw, 26px); }
.fly-photo-card {
  display: inline-block;
  break-inside: avoid;
  margin: 0 0 clamp(16px, 1.8vw, 26px);
  vertical-align: top;
}
.fly-photo-card-link {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 14px;
  background: var(--page-alt);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--text) 5%, transparent);
  color: #fff;
  transition: box-shadow 360ms ease, transform 420ms cubic-bezier(0.2, 1, 0.2, 1);
}
.fly-photo-card-link:hover,
.fly-photo-card-link:focus-visible {
  color: #fff;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12), 0 28px 52px -38px rgba(0, 0, 0, 0.72);
  transform: translateY(-3px);
}
.fly-photo-card-image {
  display: block;
  width: 100%;
  height: auto;
  min-height: 180px;
  object-fit: cover;
  transition: transform 720ms cubic-bezier(0.2, 1, 0.2, 1);
}
.fly-photo-card-link:hover .fly-photo-card-image,
.fly-photo-card-link:focus-visible .fly-photo-card-image { transform: scale(1.025); }
.fly-photo-card-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 48%, rgba(0, 0, 0, 0.74) 100%);
  opacity: 0.82;
  pointer-events: none;
}
.fly-photo-card-copy {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 5px;
  padding: 24px 18px 17px;
  pointer-events: none;
}
.fly-photo-card-copy strong,
.fly-photo-card-copy > span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fly-photo-card-copy strong { font-size: 16px; font-weight: 600; line-height: 21px; }
.fly-photo-card-copy > span { color: rgba(255, 255, 255, 0.76); font-size: 12px; line-height: 18px; }
.fly-photos-empty {
  margin: 0;
  border-radius: 14px;
  background: var(--page-alt);
  color: var(--muted);
  padding: 52px 24px;
  text-align: center;
}
.fly-photos-feed .fly-load-more-wrap { min-height: 40px; margin: clamp(28px, 3vw, 42px) auto 0; }

.fly-photo-detail-shell { padding-bottom: var(--content-padding-x); }
.fly-photo-detail { max-width: 1120px; margin: 0 auto; }
.fly-photo-back-link,
.fly-photo-navigation-action {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  background: var(--page-alt);
  color: var(--text);
  padding: 8px 15px;
  font-size: 13px;
  font-weight: 600;
  transition: background-color 160ms ease, transform 160ms ease;
}
.fly-photo-back-link { margin: 10px 0 26px; }
.fly-photo-back-link:hover,
.fly-photo-back-link:focus-visible,
.fly-photo-navigation-action:hover,
.fly-photo-navigation-action:focus-visible { background: var(--hover-bg-color); color: var(--text); }
.fly-photo-back-link:hover,
.fly-photo-back-link:focus-visible,
.fly-photo-navigation-action--prev:hover,
.fly-photo-navigation-action--prev:focus-visible { transform: translateX(-2px); }
.fly-photo-navigation-action--next:hover,
.fly-photo-navigation-action--next:focus-visible { transform: translateX(2px); }
.fly-photo-detail-header { display: grid; gap: 10px; margin-bottom: clamp(24px, 3vw, 38px); }
.fly-photo-detail-position {
  margin: 0;
  color: var(--faint);
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  line-height: 20px;
}
.fly-photo-detail-header h1 {
  max-width: 850px;
  margin: 0;
  color: var(--text);
  font-size: clamp(30px, 4.1vw, 58px);
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1.04;
}
.fly-photo-detail-media {
  display: grid;
  width: 100%;
  min-height: min(48vw, 480px);
  margin: 0;
  overflow: hidden;
  border-radius: 16px;
  background: var(--page-alt);
  place-items: center;
}
.fly-photo-detail-image {
  display: block;
  width: 100%;
  max-height: min(76vh, 920px);
  object-fit: contain;
  cursor: url("../images/zoom-in.cur") 15 15, zoom-in;
}
.fly-photo-detail-copy { width: min(100%, 760px); margin: clamp(24px, 3vw, 38px) 0 0; }
.fly-photo-detail-copy p {
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.65;
  overflow-wrap: anywhere;
}
.fly-photo-metadata {
  display: grid;
  gap: 20px;
  margin-top: clamp(30px, 4vw, 52px);
  border-top: 1px solid var(--line);
  padding-top: 28px;
}
.fly-photo-metadata h2 { margin: 0; color: var(--text); font-size: 18px; font-weight: 600; line-height: 24px; }
.fly-photo-exif {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin: 0;
}
.fly-photo-exif > div {
  display: grid;
  min-width: 0;
  gap: 3px;
  border-radius: 12px;
  background: var(--page-alt);
  padding: 14px 16px;
}
.fly-photo-exif dt,
.fly-photo-exif dd { margin: 0; }
.fly-photo-exif dt { color: var(--faint); font-size: 11px; font-weight: 600; line-height: 17px; }
.fly-photo-exif dd {
  overflow: hidden;
  color: var(--text);
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  font-weight: 500;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fly-photo-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.fly-photo-tags span {
  border-radius: 999px;
  background: var(--page-alt);
  color: var(--muted);
  padding: 6px 11px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
}
.fly-photo-navigation { display: grid; gap: 18px; margin-top: clamp(34px, 5vw, 64px); }
.fly-photo-navigation-actions {
  display: flex;
  min-height: 40px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.fly-photo-navigation-action--next { margin-left: auto; }
.fly-photo-neighbors {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: clamp(8px, 1.4vw, 16px);
}
.fly-photo-neighbor {
  position: relative;
  display: block;
  min-width: 0;
  overflow: hidden;
  border-radius: 12px;
  background: var(--page-alt);
  aspect-ratio: 4 / 3;
  opacity: 0.58;
  transition: opacity 180ms ease, transform 320ms cubic-bezier(0.2, 1, 0.2, 1);
}
.fly-photo-neighbor::after {
  position: absolute;
  inset: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.fly-photo-neighbor img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 520ms cubic-bezier(0.2, 1, 0.2, 1);
}
.fly-photo-neighbor:hover,
.fly-photo-neighbor:focus-visible,
.fly-photo-neighbor.fly-is-active { opacity: 1; transform: translateY(-2px); }
.fly-photo-neighbor:hover img,
.fly-photo-neighbor:focus-visible img { transform: scale(1.035); }
.fly-photo-neighbor.fly-is-active::after { border-color: var(--text); }
.fly-photo-comments {
  width: min(100%, 760px);
  margin-top: clamp(36px, 5vw, 64px);
  grid-column: auto;
  grid-row: auto;
  border-top: 0;
  padding: 0;
}
.fly-photo-comments .fly-post-comments-body {
  overflow: visible;
  border-radius: 0;
}

@media (min-width: 700px) { .fly-photos-list { columns: 2; } }
@media (min-width: 1280px) { .fly-photos-list { columns: 3; } }
@media (max-width: 899px) { .fly-photo-exif { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 639px) {
  .fly-photo-card { margin-bottom: 16px; }
  .fly-photo-detail-header { margin-bottom: 22px; }
  .fly-photo-detail-header h1 { font-size: 31px; }
  .fly-photo-detail-media { min-height: 220px; border-radius: 14px; }
  .fly-photo-exif { grid-template-columns: minmax(0, 1fr); }
  .fly-photo-neighbors {
    margin-right: calc(var(--content-padding-x) * -1);
    grid-auto-columns: minmax(110px, 36vw);
    grid-template-columns: none;
    grid-auto-flow: column;
    overflow-x: auto;
    padding-right: var(--content-padding-x);
    scrollbar-width: none;
  }
  .fly-photo-neighbors::-webkit-scrollbar { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .fly-photo-card-link,
  .fly-photo-card-image,
  .fly-photo-back-link,
  .fly-photo-navigation-action,
  .fly-photo-neighbor,
  .fly-photo-neighbor img { transition: none; }
  .fly-photo-card-link:hover,
  .fly-photo-card-link:focus-visible,
  .fly-photo-card-link:hover .fly-photo-card-image,
  .fly-photo-card-link:focus-visible .fly-photo-card-image,
  .fly-photo-back-link:hover,
  .fly-photo-back-link:focus-visible,
  .fly-photo-navigation-action:hover,
  .fly-photo-navigation-action:focus-visible,
  .fly-photo-neighbor:hover,
  .fly-photo-neighbor:focus-visible,
  .fly-photo-neighbor.fly-is-active,
  .fly-photo-neighbor:hover img,
  .fly-photo-neighbor:focus-visible img { transform: none; }
}
`,
};
