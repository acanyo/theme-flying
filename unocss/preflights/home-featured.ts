export const homeFeaturedPreflight = {
  getCSS: () => String.raw`
.fly-featured-section {
  min-width: 0;
  margin-bottom: var(--section-gap);
}

.fly-featured-section .fly-post-chip {
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}

.fly-featured-section .fly-post-meta--light,
.fly-featured-section .fly-post-meta--light a,
.fly-featured-section .fly-post-meta--light time {
  color: rgba(255, 255, 255, 0.94);
}

.fly-featured-section .fly-post-meta--light {
  border-top-color: rgba(255, 255, 255, 0.34);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.58);
}

.fly-featured-section .fly-post-meta--light .fly-dot {
  opacity: 0.88;
}

/* Grid */
.fly-home-shell .fly-featured-grid {
  display: grid;
  min-width: 0;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(16px, 2.1vw, 30px);
}

.fly-featured-card {
  position: relative;
  min-width: 0;
  min-height: 0;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 14px;
  background: var(--page-alt);
  color: #fff;
  isolation: isolate;
}

.fly-featured-grid > .fly-featured-card:only-child {
  grid-column: 1 / -1;
}

.fly-featured-image,
.fly-home-slide-image {
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s cubic-bezier(0.2, 1, 0.2, 1);
}

.fly-image-shade {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(180deg, transparent 20%, rgba(0, 0, 0, 0.72) 100%);
}

.fly-home-shell .fly-featured-content {
  position: relative;
  z-index: 2;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  pointer-events: none;
}

.fly-featured-content a {
  pointer-events: auto;
}

.fly-featured-title {
  display: -webkit-box;
  max-width: 720px;
  margin: 0;
  overflow: hidden;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.2;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.fly-featured-card--lead .fly-featured-title {
  font-size: clamp(24px, 2.3vw, 28px);
  line-height: 1.1;
}

.fly-featured-excerpt {
  display: -webkit-box;
  max-width: 650px;
  margin: 12px 0 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.86);
  font-size: 15px;
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.fly-featured-card--side .fly-featured-excerpt,
.fly-featured-card--side .fly-post-meta {
  display: none;
}

.fly-featured-card:hover .fly-featured-image,
.fly-featured-card:focus-within .fly-featured-image {
  transform: scale(1.03);
}

@media (min-width: 540px) and (max-width: 991px) {
  .fly-home-shell .fly-featured-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .fly-featured-card--lead {
    grid-column: 1 / -1;
  }

  .fly-featured-grid > .fly-featured-card:nth-child(n + 4) {
    display: none;
  }
}

@media (min-width: 992px) and (max-width: 1399px) {
  .fly-home-shell .fly-featured-grid {
    height: clamp(360px, 29vw, 390px);
    grid-template-columns: minmax(0, 2.05fr) minmax(250px, 1fr);
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  .fly-featured-card {
    aspect-ratio: auto;
  }

  .fly-featured-card--lead {
    grid-row: 1 / 3;
  }

  .fly-featured-grid > .fly-featured-card:nth-child(n + 4) {
    display: none;
  }

  .fly-home-shell .fly-featured-card--lead .fly-featured-content {
    padding: 40px;
  }
}

@media (min-width: 1400px) {
  .fly-home-shell .fly-featured-grid {
    height: clamp(360px, 26vw, 390px);
    grid-template-columns: minmax(0, 2.05fr) repeat(2, minmax(220px, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: clamp(20px, 1.6vw, 30px);
  }

  .fly-featured-card {
    aspect-ratio: auto;
  }

  .fly-featured-card--lead {
    grid-row: 1 / 3;
  }

  .fly-home-shell .fly-featured-card--lead .fly-featured-content {
    padding: 40px;
  }
}

/* Full-width slider */
.fly-home-slider,
.fly-home-carousel {
  position: relative;
  min-width: 0;
}

.fly-home-slider {
  overflow: hidden;
  border-radius: 16px;
  background: #000;
}

.fly-home-slider-rail,
.fly-home-carousel-rail {
  display: flex;
  gap: 0;
}

.fly-home-slide {
  position: relative;
  display: flex;
  min-width: 0;
  min-height: 300px;
  flex: 0 0 100%;
  aspect-ratio: 21 / 9;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #000;
  color: #fff;
  isolation: isolate;
  scroll-snap-align: start;
}

.fly-home-slide .fly-image-shade {
  background: rgba(0, 0, 0, 0.56);
}

.fly-home-slide:hover .fly-home-slide-image,
.fly-home-slide:focus-within .fly-home-slide-image {
  transform: scale(1.03);
}

.fly-home-slide-content {
  position: relative;
  z-index: 2;
  display: flex;
  width: min(700px, calc(100% - 120px));
  flex-direction: column;
  align-items: center;
  padding: clamp(32px, 6vw, 72px) 0;
  text-align: center;
  pointer-events: none;
}

.fly-home-slide-content a {
  pointer-events: auto;
}

.fly-home-slide-content h2 {
  display: -webkit-box;
  margin: 12px 0 0;
  overflow: hidden;
  color: #fff;
  font-size: clamp(24px, 3vw, 42px);
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.fly-home-slide-content > p {
  display: -webkit-box;
  max-width: 640px;
  margin: 16px 0 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.82);
  font-size: clamp(16px, 1.4vw, 18px);
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.fly-home-slide-content .fly-post-meta {
  width: min(100%, 560px);
  justify-content: center;
  margin-top: 20px;
  padding-top: 16px;
  border-top-color: rgba(255, 255, 255, 0.25);
}

.fly-home-slider > .fly-carousel-controls {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
}

.fly-home-slider .fly-carousel-arrow {
  position: absolute;
  top: 50%;
  border: 0;
  background: rgba(0, 0, 0, 0.48);
  color: #fff;
  opacity: 0;
  pointer-events: auto;
  transform: translateY(-50%);
}

.fly-home-slider .fly-carousel-arrow--prev {
  left: 20px;
}

.fly-home-slider .fly-carousel-arrow--next {
  right: 20px;
}

.fly-home-slider:hover .fly-carousel-arrow,
.fly-home-slider:focus-within .fly-carousel-arrow {
  opacity: 1;
}

.fly-home-slider .fly-carousel-arrow:not(:disabled):hover {
  background: rgba(0, 0, 0, 0.68);
  transform: translateY(-50%);
}

.fly-home-slider .fly-carousel-dots {
  position: absolute;
  bottom: 18px;
  left: 50%;
  pointer-events: auto;
  transform: translateX(-50%);
}

.fly-home-slider .fly-carousel-dot {
  background: rgba(255, 255, 255, 0.48);
}

.fly-home-slider .fly-carousel-dot.fly-is-active {
  background: #fff;
}

/* Split carousel */
.fly-home-carousel {
  overflow: hidden;
  border-radius: clamp(16px, 2vw, 30px);
  background: var(--page-alt);
  padding: 20px;
}

.fly-home-carousel-card {
  display: grid;
  min-width: 0;
  flex: 0 0 100%;
  grid-template-areas: "copy media";
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  align-items: stretch;
  scroll-snap-align: start;
}

.fly-home-carousel-copy {
  display: flex;
  min-width: 0;
  grid-area: copy;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px 20px 84px;
  color: var(--text);
}

.fly-home-carousel-copy h2 {
  display: -webkit-box;
  margin: 12px 0 0;
  overflow: hidden;
  color: var(--text);
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.fly-home-carousel-copy > p {
  display: -webkit-box;
  margin: 16px 0 0;
  overflow: hidden;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.fly-home-carousel-copy .fly-post-meta {
  flex-wrap: wrap;
  margin-top: 20px;
}

.fly-home-carousel-media {
  position: relative;
  display: block;
  width: 100%;
  min-width: 0;
  grid-area: media;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 14px;
  background: var(--hover-bg-color);
}

.fly-home-carousel-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s cubic-bezier(0.2, 1, 0.2, 1);
}

.fly-home-carousel-media:hover img,
.fly-home-carousel-media:focus-visible img {
  transform: scale(1.03);
}

.fly-home-carousel-read {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  border-radius: 999px;
  background: var(--text);
  color: var(--page);
  padding: 9px 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
}

.fly-home-carousel-read .fly-iconify--chevron {
  width: 14px;
  height: 14px;
  margin: 0;
  opacity: 1;
  transform: rotate(-90deg);
}

.fly-home-carousel > .fly-carousel-controls {
  position: absolute;
  right: calc(50% + 40px);
  bottom: 40px;
  z-index: 5;
}

.fly-home-carousel .fly-carousel-arrow {
  border-color: transparent;
  background: transparent;
}

.fly-home-carousel .fly-carousel-arrow:not(:disabled):hover {
  border-color: transparent;
  background: var(--hover-bg-color);
  transform: none;
}

.fly-home-carousel .fly-carousel-dot.fly-is-active {
  background: var(--text);
}

@media (max-width: 991px) {
  .fly-home-carousel {
    border-radius: 14px;
    padding: 0;
  }

  .fly-home-carousel-card {
    grid-template-areas:
      "media"
      "copy";
    grid-template-columns: minmax(0, 1fr);
    gap: 0;
  }

  .fly-home-carousel-media {
    aspect-ratio: 16 / 9;
    border-radius: 14px 14px 0 0;
  }

  .fly-home-carousel-copy {
    min-height: 280px;
    padding: 30px 30px 84px;
  }

  .fly-home-carousel > .fly-carousel-controls {
    right: 24px;
    bottom: 24px;
  }
}

@media (max-width: 620px) {
  .fly-featured-card--lead .fly-featured-title,
  .fly-featured-title {
    font-size: 22px;
    line-height: 1.2;
  }

  .fly-featured-card--side .fly-post-chip,
  .fly-featured-card--side .fly-featured-excerpt,
  .fly-featured-card--side .fly-post-meta {
    display: none;
  }

  .fly-home-slide {
    aspect-ratio: 4 / 3;
  }

  .fly-home-slide-content {
    width: calc(100% - 48px);
    padding: 40px 0 64px;
  }

  .fly-home-slide-content h2 {
    font-size: 26px;
  }

  .fly-home-slide-content > p {
    font-size: 15px;
  }

  .fly-home-slider .fly-carousel-arrow {
    opacity: 1;
  }

  .fly-home-slider .fly-carousel-arrow--prev {
    left: 12px;
  }

  .fly-home-slider .fly-carousel-arrow--next {
    right: 12px;
  }

  .fly-home-slider .fly-carousel-dots {
    bottom: 14px;
  }

  .fly-home-carousel-copy {
    min-height: 290px;
    padding: 24px 20px 80px;
  }

  .fly-home-carousel-copy h2 {
    font-size: 22px;
    line-height: 1.2;
  }

  .fly-home-carousel-copy > p {
    font-size: 14px;
  }

  .fly-home-carousel > .fly-carousel-controls {
    right: 18px;
    bottom: 18px;
  }

  .fly-home-carousel .fly-carousel-dots {
    display: none;
  }
}

@media (max-width: 539px) {
  .fly-featured-grid > .fly-featured-card:nth-child(n + 4) {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fly-featured-image,
  .fly-home-slide-image,
  .fly-home-carousel-media img {
    transition-duration: 1ms;
  }
}
`,
};
