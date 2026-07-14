export const transitionPreflight = {
  getCSS: () => String.raw`
@property --fly-view-transition-progress {
  syntax: "<number>";
  inherits: false;
  initial-value: 0;
}

html.is-changing #swup {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: no-preference) {
  html.fly-document-enter body:not(.fly-swup-revealing) #swup {
    animation: fly-content-fade-in 240ms ease-out both;
  }
}

@keyframes fly-content-fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

body.fly-swup-revealing #swup {
  --fly-view-transition-progress: 0;

  animation: fly-page-reveal 600ms cubic-bezier(0.35, 0, 0.4, 1) both;
  -webkit-mask-image: linear-gradient(
    270deg,
    #000 calc(-70% + 170% * var(--fly-view-transition-progress)),
    transparent calc(170% * var(--fly-view-transition-progress))
  );
  mask-image: linear-gradient(
    270deg,
    #000 calc(-70% + 170% * var(--fly-view-transition-progress)),
    transparent calc(170% * var(--fly-view-transition-progress))
  );
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.fly-swup-loading::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 2px;
  background: var(--accent);
  animation: fly-progress 900ms ease-in-out infinite;
}

@keyframes fly-progress {
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

@keyframes fly-page-reveal {
  from {
    --fly-view-transition-progress: 0;
    opacity: 1;
    transform: none;
  }

  to {
    --fly-view-transition-progress: 1;
    opacity: 1;
    transform: none;
  }
}

@supports not (mask-image: linear-gradient(#000, #000)) {
  body.fly-swup-revealing #swup {
    animation: fly-page-reveal-fallback 420ms cubic-bezier(0.35, 0, 0.4, 1) both;
    clip-path: inset(0 0 0 0);
  }
}

@keyframes fly-page-reveal-fallback {
  from {
    clip-path: inset(0 0 0 100%);
  }

  to {
    clip-path: inset(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  body.fly-swup-revealing #swup {
    animation: none;
    clip-path: none;
    -webkit-mask-image: none;
    mask-image: none;
  }
}
`,
};
