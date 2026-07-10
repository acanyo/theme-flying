export const homeMotionPreflight = {
  getCSS: () => String.raw`
[data-fly-motion-button] {
  transition: opacity 150ms ease, background-color 150ms ease, color 150ms ease;
}

[data-fly-motion-button]:hover,
[data-fly-motion-button]:focus-visible {
  opacity: 0.86;
}

.fly-motion-label {
  position: relative;
  display: block;
  overflow: hidden;
  line-height: inherit;
}

.fly-motion-label-copy {
  display: block;
  white-space: nowrap;
}

.fly-motion-label-copy:last-child {
  position: absolute;
  inset: 0;
  transform: translateY(100%);
}

.fly-button-animation .fly-motion-label-copy:first-child {
  animation: fly-button-label-leave 500ms ease both;
}

.fly-button-animation .fly-motion-label-copy:last-child {
  animation: fly-button-label-enter 500ms ease both;
}

.fly-button-animation .fly-motion-icon {
  animation: fly-button-icon 600ms ease both;
}

@keyframes fly-button-label-enter {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes fly-button-label-leave {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-100%);
  }
}

@keyframes fly-button-icon {
  0% {
    clip-path: inset(0);
    translate: 0;
  }

  50% {
    clip-path: inset(0 0 0 100%);
    translate: 4px 0;
  }

  51% {
    clip-path: inset(0 100% 0 0);
    translate: 0;
  }

  100% {
    clip-path: inset(0);
    translate: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  [data-fly-motion-button],
  .fly-motion-label-copy,
  .fly-motion-icon {
    animation: none !important;
    transition: none;
  }

  .fly-motion-label-copy:last-child {
    display: none;
  }
}
`,
};
