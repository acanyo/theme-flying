export const basePreflight = {
  getCSS: () => String.raw`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  min-width: 0;
  background: var(--page);
  font-family: Geist, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  letter-spacing: 0;
}

body {
  margin: 0;
  min-width: 0;
  overflow-x: hidden;
  background: var(--page);
  color: var(--muted);
  font-size: 16px;
  line-height: 1.5;
}

body[data-fly-menu-open="true"] {
  overflow: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

button[disabled] {
  cursor: default;
  opacity: 0.45;
  transform: none;
}

img {
  display: block;
  max-width: 100%;
}

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.fly-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.fly-brand {
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
}

.fly-button {
  transition: opacity 150ms ease, background-color 150ms ease, color 150ms ease;
}

.fly-button--primary:hover,
.fly-button--primary:focus-visible,
.fly-button--dark:hover,
.fly-button--dark:focus-visible {
  opacity: 0.86;
}

.fly-button--primary {
  box-shadow: none;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`,
};
