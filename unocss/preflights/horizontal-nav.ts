export const horizontalNavPreflight = {
  getCSS: () => String.raw`
.fly-horizontal-nav {
  position: relative;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  height: 41px;
}

.fly-horizontal-nav-rail {
  display: flex;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  height: 41px;
  align-items: center;
  gap: 6px;
  margin: 0;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-inline: contain;
  padding: 4px 0;
  scroll-behavior: smooth;
  scroll-padding-inline: 0;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
  touch-action: pan-x;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.fly-horizontal-nav-rail::-webkit-scrollbar {
  display: none;
}

.fly-horizontal-nav-item {
  display: inline-flex;
  width: auto;
  min-width: max-content;
  height: 33px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  appearance: none;
  border: 0;
  border-radius: 8px;
  outline: 0;
  background: transparent;
  box-shadow: none;
  color: var(--text);
  margin: 0;
  padding: 6px 12px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 21px;
  scroll-snap-align: start;
  text-decoration: none;
  white-space: nowrap;
  transition:
    background-color 180ms ease,
    transform 180ms ease;
  -webkit-appearance: none;
}

.fly-horizontal-nav-item:hover,
.fly-horizontal-nav-item:focus-visible,
.fly-horizontal-nav-item.fly-is-active,
.fly-horizontal-nav-item[aria-current="page"],
.fly-horizontal-nav-item[aria-pressed="true"] {
  border: 0;
  background: var(--hover-bg-color);
  box-shadow: none;
  color: var(--text);
}

.fly-horizontal-nav-item:hover {
  transform: translateY(-1px);
}

.fly-horizontal-nav-item:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: -2px;
}

.fly-horizontal-nav-arrow {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 6;
  display: inline-flex;
  width: 33px;
  height: 41px;
  flex: 0 0 33px;
  align-items: center;
  justify-content: center;
  appearance: none;
  border: 0;
  border-radius: 50%;
  outline: 0;
  background: var(--page);
  box-shadow: 0 5px 20px -7px rgba(0, 0, 0, 0.2);
  color: var(--text);
  margin: 0;
  padding: 0;
  font: inherit;
  isolation: isolate;
  cursor: pointer;
  transition:
    opacity 150ms ease,
    visibility 150ms ease;
  -webkit-appearance: none;
}

.fly-horizontal-nav-arrow::before {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;
  width: 90px;
  content: "";
  pointer-events: none;
}

.fly-horizontal-nav-arrow--prev {
  left: 0;
}

.fly-horizontal-nav-arrow--prev::before {
  left: 0;
  background: linear-gradient(90deg, var(--page) 33px, transparent 100%);
}

.fly-horizontal-nav-arrow--next {
  right: 0;
}

.fly-horizontal-nav-arrow--next::before {
  right: 0;
  background: linear-gradient(
    90deg,
    transparent 0,
    var(--page) calc(100% - 33px)
  );
}

.fly-horizontal-nav-arrow[hidden],
.fly-horizontal-nav-arrow:disabled {
  display: inline-flex;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
}

.fly-horizontal-nav-arrow:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: -2px;
}

.fly-horizontal-nav-arrow-icon {
  position: relative;
  z-index: 1;
  display: block;
  width: 18px;
  height: 18px;
  flex: 0 0 18px;
  pointer-events: none;
}

.fly-horizontal-nav-arrow--prev .fly-horizontal-nav-arrow-icon {
  transform: rotate(180deg);
}

@media (prefers-reduced-motion: reduce) {
  .fly-horizontal-nav-rail {
    scroll-behavior: auto;
  }

  .fly-horizontal-nav-item,
  .fly-horizontal-nav-arrow {
    transition: none;
  }

  .fly-horizontal-nav-item:hover {
    transform: none;
  }
}
`,
};
