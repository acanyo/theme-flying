export const archivePreflight = {
  getCSS: () => String.raw`
body.fly-archive {
  --content-padding-x: var(--fly-responsive-gutter);
  --content-padding-mobile: var(--fly-responsive-gutter);
  --section-gap: clamp(60px, calc(53.1px + 1.8vw), 80px);
}

.fly-archive-page,
.fly-archive-posts,
.fly-archive-grid {
  width: 100%;
  min-width: 0;
}

.fly-archive-page {
  --fly-archive-grid-columns: 1;

  display: flex;
  flex-direction: column;
  gap: var(--section-gap);
  padding-bottom: var(--content-padding-x);
}

.fly-archive-page .fly-taxonomy-hero {
  margin: 0;
}

.fly-archive-nav {
  margin: calc((var(--section-gap) - 30px) * -1) 0 -4px;
}

.fly-archive-posts {
  margin-top: calc((var(--section-gap) - 30px) * -1);
}

.fly-archive-grid {
  grid-template-columns: repeat(
    var(--fly-archive-grid-columns),
    minmax(0, 1fr)
  );
  gap: var(--content-padding-x);
}

body.fly-archive .fly-archive-grid .fly-taxonomy-post-media {
  transition:
    box-shadow 220ms ease,
    transform 800ms cubic-bezier(0.2, 1, 0.2, 1);
}

body.fly-archive
  .fly-archive-grid
  .fly-taxonomy-post-card:hover
  .fly-taxonomy-post-media,
body.fly-archive
  .fly-archive-grid
  .fly-taxonomy-post-card:focus-within
  .fly-taxonomy-post-media {
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.4);
  transform: scale(1.04);
}

body.fly-archive
  .fly-archive-grid
  .fly-taxonomy-post-card:hover
  :is(.fly-taxonomy-post-cover, .fly-post-cover-media),
body.fly-archive
  .fly-archive-grid
  .fly-taxonomy-post-card:focus-within
  :is(.fly-taxonomy-post-cover, .fly-post-cover-media) {
  transform: none;
}

body.fly-archive
  .fly-archive-grid
  .fly-taxonomy-post-card:hover
  .fly-taxonomy-post-title
  a,
body.fly-archive
  .fly-archive-grid
  .fly-taxonomy-post-card:focus-within
  .fly-taxonomy-post-title
  a {
  opacity: 1;
}

.fly-archive-page .fly-pagination-decoration {
  display: flex;
  gap: var(--content-padding-x);
  margin: var(--content-padding-x) 0 0;
  overflow: hidden;
}

.fly-archive-page .fly-pagination-decoration > span {
  --fly-archive-decoration-width: calc(
    (100% + var(--content-padding-x)) / var(--fly-archive-grid-columns) -
      var(--content-padding-x)
  );

  display: block;
  width: var(--fly-archive-decoration-width);
  min-width: var(--fly-archive-decoration-width);
  flex: 0 0 var(--fly-archive-decoration-width);
}

body.fly-archive .fly-load-more,
body.fly-archive .fly-load-more.fly-button,
body.fly-archive .fly-load-more.fly-button--dark {
  width: 130px;
  height: 40px;
  min-height: 40px;
  border: 0;
  background: transparent;
  color: var(--text);
}

body.fly-archive .fly-load-more:hover,
body.fly-archive .fly-load-more.fly-button--dark:hover {
  background: var(--hover-bg-color);
  color: var(--text);
  opacity: 1;
}

body.fly-archive .fly-load-more.fly-is-complete {
  width: max-content;
  white-space: nowrap;
}

@media (min-width: 540px) {
  .fly-archive-page {
    --fly-archive-grid-columns: 2;
  }
}

@media (min-width: 992px) {
  .fly-archive-page {
    --fly-archive-grid-columns: 3;
  }
}

@media (min-width: 1200px) {
  body[data-fly-sidebar-collapsed="true"] .fly-archive-page {
    --fly-archive-grid-columns: 4;
  }
}

@media (min-width: 1575px) {
  .fly-archive-page {
    --fly-archive-grid-columns: 4;
  }

  body[data-fly-sidebar-collapsed="true"] .fly-archive-page {
    --fly-archive-grid-columns: 5;
  }
}

@media (min-width: 1900px) {
  .fly-archive-page {
    --fly-archive-grid-columns: 5;
  }

  body[data-fly-sidebar-collapsed="true"] .fly-archive-page {
    --fly-archive-grid-columns: 6;
  }
}

@media (max-width: 991px) {
  .fly-archive-page
    .fly-taxonomy-hero-copy
    > p:not(.fly-newsletter-status) {
    min-height: 72px;
  }
}

@media (max-width: 639px) {
  body.fly-archive .fly-load-more,
  body.fly-archive .fly-load-more.fly-button,
  body.fly-archive .fly-load-more.fly-button--dark,
  body.fly-archive .fly-load-more.fly-is-complete {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  body.fly-archive .fly-archive-grid .fly-taxonomy-post-media {
    transition: none;
  }

  body.fly-archive
    .fly-archive-grid
    .fly-taxonomy-post-card:hover
    .fly-taxonomy-post-media,
  body.fly-archive
    .fly-archive-grid
    .fly-taxonomy-post-card:focus-within
    .fly-taxonomy-post-media {
    transform: none;
  }
}
`,
};
