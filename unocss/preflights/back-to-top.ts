export const backToTopPreflight = {
  getCSS: () => String.raw`
.fly-back-to-top {
  position: fixed;
  right: max(20px, env(safe-area-inset-right));
  bottom: max(20px, env(safe-area-inset-bottom));
  z-index: 1200;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--line) 86%, transparent);
  border-radius: 50%;
  outline: 0;
  background: color-mix(in srgb, var(--page) 92%, transparent);
  box-shadow: 0 12px 28px -18px rgba(0, 0, 0, 0.65);
  color: var(--text);
  padding: 0;
  opacity: 0;
  cursor: pointer;
  pointer-events: none;
  transform: translateY(8px);
  transition:
    opacity 180ms ease,
    transform 220ms cubic-bezier(0.2, 1, 0.2, 1),
    visibility 180ms ease,
    background-color 160ms ease,
    color 160ms ease;
  visibility: hidden;
  backdrop-filter: blur(10px);
}

.fly-back-to-top[data-fly-visible="true"] {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
  visibility: visible;
}

.fly-back-to-top:hover,
.fly-back-to-top:focus-visible {
  background: var(--text);
  color: var(--page);
  transform: translateY(-2px);
}

.fly-back-to-top:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.fly-back-to-top-icon {
  width: 19px;
  height: 19px;
  flex-basis: 19px;
  transform: rotate(-90deg);
}

body[data-fly-menu-open="true"] .fly-back-to-top,
body[data-fly-lightbox-open="true"] .fly-back-to-top {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}

@media (max-width: 767px) {
  .fly-back-to-top {
    right: max(16px, env(safe-area-inset-right));
    bottom: max(16px, env(safe-area-inset-bottom));
    width: 42px;
    height: 42px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fly-back-to-top {
    transition-duration: 0.01ms;
  }
}
`,
};
