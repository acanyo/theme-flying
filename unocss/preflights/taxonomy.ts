export const taxonomyPreflight = {
  getCSS: () => String.raw`
.fly-taxonomy-collection,
.fly-taxonomy-archive,
.fly-taxonomy-detail {
  width: 100%;
  min-width: 0;
}

body.fly-taxonomy {
  --content-padding-x: var(--fly-responsive-gutter);
  --content-padding-mobile: var(--fly-responsive-gutter);
}

html[data-theme="dark"] body.fly-taxonomy--collection {
  --page: #0f0f0f;
  --page-alt: #282828;
  --muted: #aaaaaa;
  --hover-bg-color: #282828;
}

.fly-taxonomy--collection .fly-taxonomy-collection {
  padding-bottom: var(--content-padding-x);
}

.fly-taxonomy-hero {
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px var(--content-padding-x);
  margin-bottom: var(--section-gap);
}

.fly-taxonomy-hero-copy,
.fly-taxonomy-hero-media {
  width: calc(50% - var(--content-padding-x) / 2);
  min-width: 0;
  flex: 0 0 calc(50% - var(--content-padding-x) / 2);
}

.fly-taxonomy-hero-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  padding: 30px 30px 30px 0;
}

.fly-taxonomy-hero-copy h1,
.fly-taxonomy-hero-title {
  margin: 0;
  color: var(--text);
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 30.8px;
}

.fly-taxonomy-hero-copy > p:not(.fly-newsletter-status),
.fly-taxonomy-hero-description {
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 24px;
}

.fly-taxonomy-newsletter {
  position: relative;
  display: flex;
  width: min(100%, 400px);
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-top: 30px;
}

.fly-taxonomy-newsletter-label {
  margin-top: -4px;
  color: var(--text);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
}

.fly-taxonomy-newsletter-control {
  position: relative;
  width: 100%;
  height: 50px;
  min-width: 0;
}

.fly-taxonomy-newsletter-control label {
  display: block;
  width: 100%;
  min-width: 0;
}

.fly-taxonomy-newsletter input {
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 32px;
  outline: 0;
  background: var(--page-alt);
  color: var(--text);
  padding: 12px 128px 12px 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
}

.fly-taxonomy-newsletter input:focus {
  box-shadow: 0 0 0 2px var(--accent);
}

.fly-taxonomy-newsletter .fly-button {
  position: absolute;
  top: 5px;
  right: 5px;
  height: 40px;
  min-height: 40px;
  border-radius: 32px;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
}

.fly-taxonomy-newsletter .fly-newsletter-status {
  position: absolute;
  top: calc(100% + 6px);
  left: 16px;
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 21px;
}

.fly-taxonomy-newsletter .fly-newsletter-status:empty {
  display: none;
}

.fly-taxonomy-newsletter .fly-newsletter-status[data-fly-state="error"] {
  color: #c34d4d;
}

.fly-taxonomy-newsletter .fly-newsletter-status[data-fly-state="success"] {
  color: #348f3f;
}

.fly-taxonomy-hero-media {
  overflow: hidden;
  border-radius: 16px;
  background: var(--page-alt);
  aspect-ratio: 16 / 9;
}

.fly-taxonomy-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fly-taxonomy-sections {
  display: grid;
  min-width: 0;
  gap: var(--section-gap);
  margin-bottom: var(--section-gap);
}

.fly-taxonomy-section {
  position: relative;
  display: grid;
  min-width: 0;
  gap: 20px;
}

.fly-taxonomy-section-header {
  position: relative;
  z-index: 6;
  display: flex;
  min-width: 0;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  pointer-events: none;
}

.fly-taxonomy-section-header > * {
  position: relative;
  z-index: 1;
  pointer-events: auto;
}

.fly-taxonomy-section-header-copy,
.fly-taxonomy-section-copy,
.fly-taxonomy-section-header > div {
  width: 100%;
  max-width: 700px;
  min-width: 0;
}

.fly-taxonomy-section-header h2 {
  margin: 0;
  color: var(--text);
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 26.4px;
}

.fly-taxonomy-section-header p {
  margin: 7px 0 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 24px;
}

.fly-taxonomy-section-button {
  display: inline-flex;
  min-height: 33px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 0;
  border-radius: 20px;
  background: var(--hover-bg-color);
  box-shadow: none;
  color: var(--text);
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  transition: opacity 150ms ease;
}

.fly-taxonomy-section-button:hover,
.fly-taxonomy-section-button:focus-visible {
  color: var(--text);
  opacity: 0.72;
}

.fly-taxonomy-carousel {
  position: relative;
  min-width: 0;
}

.fly-taxonomy-rail {
  display: flex;
  min-width: 0;
  gap: 30px;
  margin: -50px calc(var(--content-padding-x) * -1);
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-inline: contain;
  padding: 50px var(--content-padding-x);
  scroll-behavior: smooth;
  scroll-padding-inline: var(--content-padding-x);
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  touch-action: pan-x;
  -webkit-overflow-scrolling: touch;
}

.fly-taxonomy-rail::-webkit-scrollbar {
  display: none;
}

.fly-taxonomy-slide {
  min-width: 0;
  flex: 0 0 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.fly-taxonomy-carousel-arrow {
  position: absolute;
  top: var(--fly-taxonomy-control-center-y, 50%);
  z-index: 5;
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  background: var(--page);
  box-shadow: 0 5px 20px -7px rgba(0, 0, 0, 0.2);
  color: var(--text);
  padding: 0;
  transform: translateY(-50%);
  transition:
    background-color 150ms ease,
    color 150ms ease,
    opacity 150ms ease,
    visibility 150ms ease;
}

.fly-taxonomy-carousel > .fly-carousel-arrow.fly-taxonomy-carousel-arrow {
  flex: 0 0 40px;
}

.fly-taxonomy-carousel > .fly-carousel-arrow--prev {
  left: -20px;
}

.fly-taxonomy-carousel > .fly-carousel-arrow--next {
  right: -20px;
}

.fly-taxonomy-carousel-arrow:not(:disabled) {
  cursor: pointer;
}

.fly-taxonomy-carousel-arrow:not(:disabled):hover,
.fly-taxonomy-carousel-arrow:focus-visible {
  background: var(--accent);
  color: var(--accent-contrast);
}

.fly-taxonomy-carousel > .fly-carousel-arrow.fly-taxonomy-carousel-arrow:not(:disabled):hover,
.fly-taxonomy-carousel > .fly-carousel-arrow.fly-taxonomy-carousel-arrow:focus-visible {
  transform: translateY(-50%);
}

.fly-taxonomy-carousel-arrow:disabled {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
}

.fly-taxonomy-carousel-arrow .fly-iconify {
  width: 20px;
  height: 20px;
  flex-basis: 20px;
}

.fly-taxonomy-nav {
  margin: -4px 0;
}

.fly-taxonomy-detail {
  --fly-taxonomy-grid-columns: 1;
}

.fly-taxonomy-detail .fly-article-grid--classic {
  grid-template-columns: repeat(
    var(--fly-taxonomy-grid-columns),
    minmax(0, 1fr)
  );
  gap: var(--content-padding-x);
}

.fly-taxonomy-detail .fly-pagination-decoration {
  display: flex;
  gap: var(--content-padding-x);
  margin: var(--content-padding-x) 0 0;
  overflow: hidden;
}

.fly-taxonomy-detail .fly-pagination-decoration > span {
  --fly-taxonomy-decoration-width: calc(
    (100% + var(--content-padding-x)) / var(--fly-taxonomy-grid-columns) -
      var(--content-padding-x)
  );

  display: block;
  width: var(--fly-taxonomy-decoration-width);
  min-width: var(--fly-taxonomy-decoration-width);
  flex: 0 0 var(--fly-taxonomy-decoration-width);
}

.fly-taxonomy-detail .fly-load-more,
.fly-taxonomy-detail .fly-load-more.fly-button,
.fly-taxonomy-detail .fly-load-more.fly-button--dark {
  width: 130px;
  height: 40px;
  min-height: 40px;
}

.fly-taxonomy-detail .fly-load-more.fly-is-complete {
  width: max-content;
  white-space: nowrap;
}

.fly-taxonomy-detail-hero {
  display: grid;
  width: 100%;
  max-width: 700px;
  gap: 16px;
  margin: 56px 0 30px;
}

.fly-taxonomy-detail-count {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
}

.fly-taxonomy-detail-hero h1 {
  margin: 0;
  color: var(--text);
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 30.8px;
}

.fly-taxonomy-detail-hero > p:not(.fly-taxonomy-detail-count) {
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 24px;
}

@media (min-width: 540px) {
  .fly-taxonomy-detail {
    --fly-taxonomy-grid-columns: 2;
  }

  .fly-taxonomy-slide {
    flex-basis: calc((100% - var(--content-padding-x)) / 2);
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .fly-taxonomy-hero-copy {
    width: 70%;
    max-width: 70%;
    flex-basis: 70%;
  }

  .fly-taxonomy-hero-media {
    width: 100%;
    flex-basis: 100%;
  }
}

@media (min-width: 992px) {
  .fly-taxonomy-detail {
    --fly-taxonomy-grid-columns: 3;
  }

  .fly-taxonomy-slide {
    flex-basis: calc((100% - var(--content-padding-x) * 2) / 3);
  }

}

@media (min-width: 1200px) {
  body[data-fly-sidebar-collapsed="true"] .fly-taxonomy-detail {
    --fly-taxonomy-grid-columns: 4;
  }
}

@media (min-width: 1575px) {
  .fly-taxonomy-detail {
    --fly-taxonomy-grid-columns: 4;
  }

  body[data-fly-sidebar-collapsed="true"] .fly-taxonomy-detail {
    --fly-taxonomy-grid-columns: 5;
  }

  .fly-taxonomy-slide {
    flex-basis: calc((100% - var(--content-padding-x) * 3) / 4);
  }
}

@media (min-width: 1900px) {
  .fly-taxonomy-detail {
    --fly-taxonomy-grid-columns: 5;
  }

  .fly-taxonomy-slide {
    flex-basis: calc((100% - var(--content-padding-x) * 4) / 5);
  }
}

@media (max-width: 767px) {
  .fly-taxonomy-hero-copy,
  .fly-taxonomy-hero-media {
    width: 100%;
    max-width: 100%;
    flex-basis: 100%;
  }

  .fly-taxonomy-hero-copy {
    padding: 30px 0;
  }
}

@media (max-width: 639px) {
  .fly-taxonomy-detail .fly-load-more.fly-is-complete {
    width: 100%;
  }
}

@media (max-width: 539px) {
  .fly-taxonomy-newsletter-control {
    height: auto;
  }

  .fly-taxonomy-newsletter-control label,
  .fly-taxonomy-newsletter .fly-button {
    width: 100%;
  }

  .fly-taxonomy-newsletter input {
    height: 48px;
    padding: 10px 20px;
    font-size: 16px;
  }

  .fly-taxonomy-newsletter .fly-button {
    position: static;
    height: 40px;
    margin-top: 8px;
  }

  .fly-taxonomy-newsletter .fly-newsletter-status {
    position: static;
    width: 100%;
  }

  .fly-taxonomy-section-header {
    display: block;
  }

  .fly-taxonomy-section-header .fly-section-view-link {
    width: 100%;
    margin-top: 14px;
  }

  .fly-taxonomy-carousel-arrow {
    display: none;
  }

  .fly-taxonomy-detail-hero {
    margin-top: 30px;
  }

}

@media (prefers-reduced-motion: reduce) {
  .fly-taxonomy-rail {
    scroll-behavior: auto;
  }

  .fly-taxonomy-carousel-arrow {
    transition: none;
  }
}
`,
};
