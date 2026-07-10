export const homeAuthorsPreflight = {
  getCSS: () => String.raw`
.fly-authors-section {
  min-width: 0;
  margin: 0 0 var(--section-gap);
}

.fly-authors-heading {
  align-items: center;
  margin-bottom: 24px;
}

.fly-authors-heading h2 {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.2;
}

.fly-authors-heading p:not(.fly-eyebrow) {
  max-width: 440px;
  margin-top: 8px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.5;
}

.fly-author-controls {
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
}

.fly-author-controls .fly-carousel-arrow {
  width: 36px;
  height: 36px;
  flex-basis: 36px;
  border-color: transparent;
  background: transparent;
}

.fly-author-controls .fly-carousel-arrow:not(:disabled):hover {
  border-color: transparent;
  background: var(--hover-bg-color);
}

.fly-authors-list {
  display: flex;
  min-width: 0;
  gap: clamp(16px, 2.1vw, 30px);
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.fly-authors-list::-webkit-scrollbar {
  display: none;
}

.fly-author-card {
  min-width: 0;
  flex: 0 0 calc((100% - clamp(48px, 6.3vw, 90px)) / 4);
  scroll-snap-align: start;
  scroll-snap-stop: normal;
}

.fly-author-card-link {
  display: block;
  min-width: 0;
  color: var(--text);
}

.fly-author-portrait {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: var(--radius-card);
  background: var(--page-alt);
  aspect-ratio: 3 / 4;
  transition: box-shadow 220ms ease, transform 220ms ease;
}

.fly-author-portrait img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s cubic-bezier(0.2, 1, 0.2, 1);
}

.fly-author-card-link:hover .fly-author-portrait {
  box-shadow: var(--shadow-soft);
  transform: translateY(-2px);
}

.fly-author-card-link:hover .fly-author-portrait img {
  transform: scale(1.03);
}

.fly-author-card-link:focus-visible {
  outline: 0;
}

.fly-author-card-link:focus-visible .fly-author-portrait {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--text) 22%, transparent);
}

.fly-author-copy {
  display: grid;
  min-width: 0;
  gap: 4px;
  margin-top: 14px;
}

.fly-author-name {
  overflow: hidden;
  color: var(--text);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fly-author-link-label {
  overflow: hidden;
  color: var(--faint);
  font-size: 13px;
  line-height: 1.4;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (max-width: 1100px) {
  .fly-author-card {
    flex-basis: calc((100% - clamp(32px, 4.2vw, 60px)) / 3);
  }
}

@media (max-width: 800px) {
  .fly-author-card {
    flex-basis: calc((100% - 18px) / 2);
  }
}

@media (max-width: 620px) {
  .fly-authors-heading {
    display: flex;
    align-items: flex-end;
    gap: 16px;
  }

  .fly-authors-heading p:not(.fly-eyebrow) {
    max-width: 270px;
  }

  .fly-author-controls {
    margin-top: 0;
  }

  .fly-author-card {
    flex-basis: min(78vw, 280px);
  }
}

@media (max-width: 420px) {
  .fly-authors-heading p:not(.fly-eyebrow) {
    display: none;
  }

  .fly-author-card {
    flex-basis: min(76vw, 268px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .fly-authors-list {
    scroll-behavior: auto;
  }

  .fly-author-portrait,
  .fly-author-portrait img {
    transition-duration: 0.01ms;
  }
}
`,
};
