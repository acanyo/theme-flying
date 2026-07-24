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
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.2;
}

.fly-authors-carousel {
  position: relative;
  min-width: 0;
}

.fly-author-controls {
  position: absolute;
  inset: 0;
  z-index: 4;
  pointer-events: none;
}

.fly-author-controls .fly-carousel-arrow {
  position: absolute;
  top: 35%;
  width: 52px;
  height: 52px;
  border: 0;
  background: var(--page);
  box-shadow: 0 12px 34px -12px rgba(0, 0, 0, 0.32);
  pointer-events: auto;
  transform: translateY(-50%);
}

.fly-author-controls .fly-carousel-arrow:not(:disabled):hover {
  background: var(--hover-bg-color);
  transform: translateY(-50%) scale(1.03);
}

.fly-author-controls .fly-carousel-arrow:disabled {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
}

.fly-author-controls .fly-carousel-arrow--prev {
  left: -18px;
}

.fly-author-controls .fly-carousel-arrow--next {
  right: -18px;
}

.fly-author-controls .fly-iconify--arrow-right {
  width: 18px;
  height: 18px;
  flex-basis: 18px;
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
  flex: 0 0 212px;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
}

.fly-author-card-link,
.fly-author-name-link {
  display: block;
  min-width: 0;
  color: var(--text);
}

.fly-author-card-image {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 14px;
  background: var(--page-alt);
  aspect-ratio: 3 / 4;
  transition: box-shadow 220ms ease, transform 220ms ease;
}

.fly-author-card-image-link {
  width: 100%;
  height: 100%;
}

.fly-author-portrait {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: inherit;
  background: var(--page-alt);
}

.fly-author-portrait img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s cubic-bezier(0.2, 1, 0.2, 1);
}

.fly-author-card:hover .fly-author-card-image,
.fly-author-card:focus-within .fly-author-card-image {
  box-shadow: 0 18px 38px -16px rgba(0, 0, 0, 0.35);
}

.fly-author-card:hover .fly-author-portrait img,
.fly-author-card:focus-within .fly-author-portrait img {
  transform: scale(1.03);
}

.fly-author-card-link:focus-visible {
  outline: 0;
}

.fly-author-card-image-link:focus-visible .fly-author-portrait {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 32%, transparent);
}

.fly-author-copy {
  display: grid;
  min-width: 0;
  gap: 8px;
  margin-top: 14px;
  padding: 0 8px;
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

.fly-author-name-link {
  width: fit-content;
  max-width: 100%;
}

.fly-author-name-link:hover .fly-author-name,
.fly-author-name-link:focus-visible .fly-author-name {
  opacity: 0.68;
}

.fly-author-name-link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.fly-author-link-label {
  color: var(--faint);
  font-size: 14px;
  line-height: 1.5;
}

.fly-author-card-contacts {
  position: absolute;
  right: 20px;
  bottom: 20px;
  left: 20px;
  z-index: 3;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.fly-author-card-contacts > li {
  display: flex;
  transition: transform 250ms ease;
}

.fly-author-card-contacts > li:hover {
  transform: scale(1.1);
}

.fly-author-card-contacts .fly-author-contact-action {
  position: relative;
  display: inline-flex;
  min-width: 28px;
  min-height: 28px;
  align-items: center;
  justify-content: center;
  gap: 6px;
  appearance: none;
  border: 0;
  border-radius: 999px;
  outline: 0;
  background: rgba(5, 5, 5, 0.7);
  box-shadow: none;
  color: #ffffff;
  opacity: 0;
  padding: 6px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  transform: translateY(6px);
  transition:
    opacity 220ms ease,
    transform 500ms cubic-bezier(0.22, 1.4, 0.36, 1),
    background-color 160ms ease;
}

.fly-author-card:hover .fly-author-card-contacts .fly-author-contact-action,
.fly-author-card:focus-within
  .fly-author-card-contacts
  .fly-author-contact-action {
  opacity: 1;
  transform: translateY(0);
}

.fly-author-card:hover
  .fly-author-card-contacts
  > li:nth-child(2)
  .fly-author-contact-action,
.fly-author-card:focus-within
  .fly-author-card-contacts
  > li:nth-child(2)
  .fly-author-contact-action {
  transition-delay: 100ms;
}

.fly-author-card:hover
  .fly-author-card-contacts
  > li:nth-child(3)
  .fly-author-contact-action,
.fly-author-card:focus-within
  .fly-author-card-contacts
  > li:nth-child(3)
  .fly-author-contact-action {
  transition-delay: 200ms;
}

.fly-author-card:hover
  .fly-author-card-contacts
  > li:nth-child(4)
  .fly-author-contact-action,
.fly-author-card:focus-within
  .fly-author-card-contacts
  > li:nth-child(4)
  .fly-author-contact-action {
  transition-delay: 300ms;
}

.fly-author-card:hover
  .fly-author-card-contacts
  .fly-author-contact-action:hover,
.fly-author-card:focus-within
  .fly-author-card-contacts
  .fly-author-contact-action:hover,
.fly-author-card:focus-within
  .fly-author-card-contacts
  .fly-author-contact-action:focus-visible {
  opacity: 1;
  transform: translateY(0);
}

.fly-author-card-contacts .fly-author-contact-action:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}

.fly-author-card-contacts button.fly-author-contact-action::after {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  visibility: hidden;
  border-radius: 6px;
  background: rgba(5, 5, 5, 0.88);
  color: #ffffff;
  content: "已复制";
  opacity: 0;
  padding: 5px 7px;
  font-size: 11px;
  line-height: 1;
  pointer-events: none;
  transform: translate(-50%, 4px);
  transition:
    opacity 140ms ease,
    transform 140ms ease,
    visibility 140ms ease;
  white-space: nowrap;
}

.fly-author-card-contacts
  button.fly-author-contact-action[data-fly-contact-copied="true"]::after {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, 0);
}

.fly-author-card-contacts .fly-iconify {
  width: 14px;
  height: 14px;
  flex: 0 0 14px;
}

.fly-authors-section[data-fly-author-count="1"] .fly-author-controls {
  display: none;
}

@media (min-width: 440px) {
  .fly-author-card {
    flex-basis: calc((100% - 16px) / 2);
  }
}

@media (min-width: 768px) {
  .fly-author-card {
    flex-basis: calc((100% - var(--content-padding-x) * 3) / 4);
  }
}

@media (min-width: 992px) {
  .fly-author-card {
    flex-basis: calc((100% - var(--content-padding-x) * 4) / 5);
  }
}

@media (min-width: 1200px) {
  body[data-fly-sidebar-collapsed="true"] .fly-author-card {
    flex-basis: calc((100% - var(--content-padding-x) * 5) / 6);
  }
}

@media (max-width: 620px) {
  .fly-author-controls {
    display: none;
  }
}

@media (max-width: 420px) {
  .fly-authors-heading .fly-section-action {
    padding-inline: 10px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fly-authors-list {
    scroll-behavior: auto;
  }

  .fly-author-portrait,
  .fly-author-portrait img,
  .fly-author-card-contacts > li,
  .fly-author-card-contacts .fly-author-contact-action {
    transition-duration: 0.01ms;
  }

  .fly-author-card-contacts .fly-author-contact-action,
  .fly-author-card:hover
    .fly-author-card-contacts
    .fly-author-contact-action,
  .fly-author-card:focus-within
    .fly-author-card-contacts
    .fly-author-contact-action,
  .fly-author-card:hover
    .fly-author-card-contacts
    .fly-author-contact-action:hover,
  .fly-author-card:focus-within
    .fly-author-card-contacts
    .fly-author-contact-action:hover,
  .fly-author-card:focus-within
    .fly-author-card-contacts
    .fly-author-contact-action:focus-visible {
    transform: none;
    transition-delay: 0s;
  }

  .fly-author-card-contacts > li,
  .fly-author-card-contacts > li:hover {
    transform: none;
  }
}
`,
};
