export const transitionPreflight = {
  getCSS: () => String.raw`
#swup {
  transition: opacity 180ms ease, transform 180ms ease;
}

html.is-changing #swup {
  opacity: 0;
  transform: translateY(6px);
}

.swup-loading::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 2px;
  background: var(--accent);
  animation: flying-progress 900ms ease-in-out infinite;
}

@keyframes flying-progress {
  0% {
    transform: translateX(-100%);
  }

  55% {
    transform: translateX(-20%);
  }

  100% {
    transform: translateX(100%);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
`,
};
