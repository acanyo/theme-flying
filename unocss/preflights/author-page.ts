export const authorPagePreflight = {
  getCSS: () => String.raw`
body.fly-author--detail { --fly-author-page-gap: 30px; }
.fly-author-detail { width: 100%; min-width: 0; }
.fly-author-profile-hero { display: flex; width: 100%; min-width: 0; align-items: center; gap: 30px var(--content-padding-x); }
.fly-author-profile-avatar { width: 210px; min-width: 210px; height: 280px; overflow: hidden; border-radius: 14px; background: var(--page-alt); }
.fly-author-profile-avatar img { display: block; width: 100%; height: 100%; object-fit: cover; }
.fly-author-profile-copy { display: flex; width: calc(50% - 15px); max-width: calc(50% - 15px); min-width: 0; flex-direction: column; align-items: flex-start; gap: 16px; padding: 30px 30px 30px 0; }
.fly-author-profile-copy :is(h1, p) { margin: 0; }
.fly-author-profile-meta { color: var(--muted); font-size: 14px; font-weight: 500; line-height: 21px; }
.fly-author-profile-copy h1 { color: var(--text); font-size: 28px; font-weight: 600; line-height: 30.8px; overflow-wrap: anywhere; }
.fly-author-profile-bio { max-width: 100%; color: var(--muted); font-size: 16px; line-height: 24px; overflow-wrap: anywhere; }
.fly-author-profile-contacts { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; margin: 0; padding: 0; list-style: none; }
.fly-author-profile-contacts > li { display: flex; }
.fly-author-profile-contacts .fly-author-contact-action { display: inline-flex; min-height: 32px; align-items: center; justify-content: center; gap: 6px; border: 0; border-radius: 20px; background: var(--hover-bg-color); color: var(--text); padding: 6px 12px; font-family: inherit; font-size: 14px; font-weight: 500; line-height: 18.2px; transition: background-color 150ms ease, color 150ms ease, transform 150ms ease; }
.fly-author-profile-contacts .fly-author-contact-action:hover, .fly-author-profile-contacts .fly-author-contact-action:focus-visible { background: color-mix(in srgb, var(--hover-bg-color) 92%, var(--text)); }
.fly-author-profile-contacts .fly-author-contact-action:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.fly-author-profile-contacts .fly-iconify { width: 16px; height: 16px; flex: 0 0 16px; }
.fly-author-posts { min-width: 0; margin-top: var(--fly-author-page-gap); }
.fly-author-posts .fly-article-grid.fly-latest-grid { grid-template-columns: minmax(0, 1fr); gap: var(--content-padding-x); }
.fly-author-detail .fly-load-more, .fly-author-detail .fly-load-more.fly-button, .fly-author-detail .fly-load-more.fly-button--dark { width: 130px; min-height: 40px; border: 0; background: transparent; color: var(--text); }
.fly-author-detail .fly-load-more:hover, .fly-author-detail .fly-load-more.fly-button--dark:hover, .fly-author-detail .fly-load-more:focus-visible { background: transparent; color: var(--text); opacity: 0.62; }
.fly-author-detail .fly-load-more.fly-is-complete { width: max-content; background: transparent; color: var(--text); white-space: nowrap; }
@media (min-width: 540px) { .fly-author-posts .fly-article-grid.fly-latest-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (min-width: 768px) and (max-width: 1199px) { .fly-author-profile-copy { width: 70%; max-width: 70%; flex: 1 1 0%; } }
@media (min-width: 992px) { .fly-author-posts .fly-article-grid.fly-latest-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@media (min-width: 1200px) { body[data-fly-sidebar-collapsed="true"] .fly-author-posts .fly-article-grid.fly-latest-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
@media (min-width: 1575px) { .fly-author-posts .fly-article-grid.fly-latest-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); } body[data-fly-sidebar-collapsed="true"] .fly-author-posts .fly-article-grid.fly-latest-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); } }
@media (min-width: 1900px) { .fly-author-posts .fly-article-grid.fly-latest-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); } body[data-fly-sidebar-collapsed="true"] .fly-author-posts .fly-article-grid.fly-latest-grid { grid-template-columns: repeat(6, minmax(0, 1fr)); } }
@media (max-width: 767px) { .fly-author-profile-hero { flex-direction: column; align-items: center; gap: 30px; } .fly-author-profile-copy { width: 100%; max-width: 100%; align-items: center; padding: 30px 0; text-align: center; } .fly-author-profile-contacts { justify-content: center; } }
@media (max-width: 639px) { .fly-author-detail .fly-load-more, .fly-author-detail .fly-load-more.fly-button, .fly-author-detail .fly-load-more.fly-button--dark, .fly-author-detail .fly-load-more.fly-is-complete { width: 100%; } }
@media (max-width: 539px) { .fly-author-posts .fly-article-grid.fly-latest-grid { gap: 16px; } }
@media (prefers-reduced-motion: reduce) { .fly-author-profile-contacts .fly-author-contact-action { transition: none; } }
`,
};
