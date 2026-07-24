export const homeLoadMorePreflight = {
  getCSS: () => String.raw`
.fly-pagination-decoration {
  display: grid;
  width: 100%;
  min-width: 0;
  height: 60px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: clamp(16px, 2.1vw, 30px);
  margin: 30px 0 0;
  overflow: hidden;
  pointer-events: none;
}

.fly-pagination-decoration[hidden] {
  display: none !important;
}

.fly-pagination-decoration > span {
  display: block;
  min-width: 0;
  height: 60px;
  border-radius: 14px 14px 0 0;
  background: linear-gradient(
    0deg,
    transparent 0%,
    color-mix(in srgb, var(--page-alt) 92%, var(--text) 4%) 100%
  );
}

.fly-load-more-wrap {
  width: 100%;
  min-width: 0;
  min-height: 40px;
  position: relative;
  z-index: 1;
  margin: -10px 0 -20px;
}

.fly-load-more,
.fly-load-more.fly-button,
.fly-load-more.fly-button--dark {
  display: inline-flex;
  width: 130px;
  max-width: 100%;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 0;
  border-radius: 20px;
  background: var(--accent);
  color: var(--accent-contrast);
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 21px;
  transition: opacity 150ms ease, background-color 150ms ease, color 150ms ease;
}

.fly-load-more:hover,
.fly-load-more.fly-button--dark:hover {
  background: var(--accent);
  color: var(--accent-contrast);
  opacity: 0.86;
}

.fly-load-more:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.fly-load-more[aria-disabled="true"] {
  pointer-events: none;
}

.fly-load-more.fly-is-loading {
  cursor: wait;
}

.fly-load-more.fly-is-complete {
  width: max-content;
  cursor: default;
}

.fly-load-more-state {
  display: grid;
  min-height: 21px;
  place-items: center;
}

.fly-load-more-label,
.fly-load-more-loader,
.fly-load-more-complete {
  grid-column: 1;
  grid-row: 1;
  align-items: center;
  justify-content: center;
}

.fly-load-more-label {
  display: inline-flex;
}

.fly-load-more-loader,
.fly-load-more-complete {
  display: none;
}

.fly-load-more.fly-is-loading .fly-load-more-label,
.fly-load-more.fly-is-complete .fly-load-more-label {
  display: none;
}

.fly-load-more.fly-is-loading .fly-load-more-loader,
.fly-load-more.fly-is-complete .fly-load-more-complete {
  display: inline-flex;
}

.fly-load-more-loader .fly-iconify--loader {
  width: 20px;
  height: 20px;
  flex-basis: 20px;
  animation: fly-load-spin 1s linear infinite;
}

.fly-load-status {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  white-space: nowrap;
}

.fly-load-status[data-fly-state="error"] {
  position: static;
  width: auto;
  height: auto;
  margin: 12px 0 0;
  overflow: visible;
  clip: auto;
  clip-path: none;
  color: color-mix(in srgb, var(--text) 56%, #d62828);
  font-size: 13px;
  line-height: 22px;
  text-align: center;
  white-space: normal;
}

@keyframes fly-load-spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 1279px) {
  .fly-pagination-decoration {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .fly-pagination-decoration > span:nth-child(n + 4) {
    display: none;
  }
}

@media (max-width: 639px) {
  .fly-pagination-decoration {
    grid-template-columns: minmax(0, 1fr);
    margin-top: 24px;
  }

  .fly-pagination-decoration > span:nth-child(n + 2) {
    display: none;
  }

  .fly-load-more-wrap {
    margin-top: -10px;
  }

  .fly-load-more,
  .fly-load-more.fly-button,
  .fly-load-more.fly-button--dark,
  .fly-load-more.fly-is-complete {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fly-load-more-loader .fly-iconify--loader {
    animation: none;
  }
}
`,
};
