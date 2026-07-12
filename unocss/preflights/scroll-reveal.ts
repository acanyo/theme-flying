export const scrollRevealPreflight = {
  getCSS: () => String.raw`
@media (prefers-reduced-motion: no-preference) {
  html.fly-scroll-reveal-ready [data-fly-reveal],
  html.fly-scroll-reveal-ready [data-fly-reveal-item] {
    transition:
      opacity 620ms cubic-bezier(0.2, 0.75, 0.25, 1),
      translate 620ms cubic-bezier(0.2, 0.75, 0.25, 1);
  }

  html.fly-scroll-reveal-ready [data-fly-reveal]:not(.fly-is-visible),
  html.fly-scroll-reveal-ready [data-fly-reveal-item]:not(.fly-is-visible) {
    opacity: 0;
    translate: 0 22px;
    will-change: opacity, translate;
  }

  html.fly-scroll-reveal-ready [data-fly-reveal].fly-is-visible,
  html.fly-scroll-reveal-ready [data-fly-reveal-item].fly-is-visible {
    opacity: 1;
    translate: 0 0;
  }

  html.fly-scroll-reveal-ready [data-fly-reveal-item] {
    transition-delay: calc(var(--fly-reveal-index, 0) * 70ms);
  }
}
`,
};
