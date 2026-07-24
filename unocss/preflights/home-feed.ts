export const homeFeedPreflight = {
  getCSS: () => String.raw`
.fly-category-filter {
  margin: -4px 0 clamp(20px, 2vw, 30px);
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

  .fly-topic-header .fly-section-view-link {
    width: 100%;
    justify-content: center;
    margin-top: 14px;
  }

}

`,
};
