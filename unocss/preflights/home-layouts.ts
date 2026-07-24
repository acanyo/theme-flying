export const homeLayoutsPreflight = {
  getCSS: () => String.raw`
[data-fly-carousel-rail] {
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-inline: contain;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  touch-action: pan-x pan-y pinch-zoom;
}

[data-fly-carousel-rail]::-webkit-scrollbar {
  display: none;
}

[data-fly-carousel-rail].fly-is-dragging {
  cursor: grabbing;
  scroll-behavior: auto;
  scroll-snap-type: none;
  user-select: none;
}

[data-fly-carousel-rail].fly-is-animating {
  scroll-behavior: auto;
  scroll-snap-type: none;
}

@media (hover: hover) and (pointer: fine) {
  [data-fly-carousel-buttons-only] [data-fly-carousel-rail] {
    overflow-x: hidden;
    touch-action: pan-y pinch-zoom;
  }
}

.fly-carousel-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

[data-fly-carousel][data-fly-carousel-single="true"] > .fly-carousel-controls {
  display: none;
}

.fly-carousel-arrow {
  display: grid;
  width: 36px;
  height: 36px;
  flex: 0 0 36px;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: var(--page);
  color: var(--text);
  padding: 0;
  transition: border-color 180ms ease, background 180ms ease, opacity 180ms ease, transform 180ms ease;
}

.fly-carousel-arrow:not(:disabled):hover {
  border-color: var(--accent);
  transform: translateY(-1px);
}

.fly-carousel-arrow:focus-visible,
.fly-carousel-dot:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.fly-carousel-arrow:disabled {
  cursor: default;
  opacity: 0.34;
}

.fly-carousel-arrow .fly-iconify--arrow-right {
  width: 20px;
  height: 20px;
  flex-basis: 20px;
  margin: 0;
  opacity: 1;
}

.fly-carousel-arrow--prev .fly-iconify--arrow-right {
  transform: rotate(180deg);
}

.fly-carousel-dots {
  display: flex;
  max-width: 128px;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.fly-carousel-dot {
  width: 7px;
  height: 7px;
  flex: 0 0 auto;
  border: 0;
  border-radius: 50%;
  background: color-mix(in srgb, var(--text) 26%, transparent);
  padding: 0;
  transition: width 180ms ease, border-radius 180ms ease, background 180ms ease;
}

.fly-carousel-dot.fly-is-active {
  width: 20px;
  border-radius: 999px;
  background: var(--accent);
}

@media (prefers-reduced-motion: reduce) {
  [data-fly-carousel-rail] {
    scroll-behavior: auto;
  }

  .fly-carousel-arrow,
  .fly-carousel-dot {
    transition-duration: 1ms;
  }
}
`,
};
