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
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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

body[data-menu-open="true"] {
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
  outline: 2px solid color-mix(in srgb, var(--accent) 78%, white);
  outline-offset: 4px;
}

.sr-only {
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

.brand {
  font-size: 40px;
}

.button {
  transition: transform 160ms ease, background 160ms ease, opacity 160ms ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button--primary {
  box-shadow: 0 8px 24px color-mix(in srgb, var(--accent) 28%, transparent);
}
`,
};
