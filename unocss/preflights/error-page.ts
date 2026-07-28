export const errorPagePreflight = {
  getCSS: () => String.raw`
html.fly-error-root {
  min-width: 0;
  min-height: 100%;
  background: var(--page);
}

body.fly-error-page {
  min-width: 0;
  min-height: 100vh;
  min-height: 100svh;
  margin: 0;
  overflow-x: hidden;
  background: var(--page);
  color: var(--muted);
}

.fly-error-page-shell {
  display: flex;
  width: min(100%, 1180px);
  min-height: 100vh;
  min-height: 100svh;
  margin: 0 auto;
  padding: var(--fly-responsive-gutter);
  flex-direction: column;
}

.fly-error-card {
  display: grid;
  width: 100%;
  min-width: 0;
  min-height: clamp(520px, 58vh, 620px);
  margin: clamp(32px, 7vh, 76px) auto auto;
  grid-template-columns: minmax(0, 0.96fr) minmax(440px, 1.04fr);
  gap: 20px;
  border-radius: var(--radius-section);
  background: var(--page-alt);
  padding: 20px;
}

.fly-error-copy {
  display: flex;
  min-width: 0;
  padding: clamp(28px, 3.2vw, 48px);
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.fly-error-eyebrow {
  display: inline-flex;
  min-height: 28px;
  align-items: center;
  margin: 0 0 20px;
  gap: 7px;
  border-radius: 6px;
  background: var(--page);
  color: var(--faint);
  padding: 5px 9px;
  font-size: 11px;
  font-weight: 550;
  line-height: 18px;
}

.fly-error-eyebrow strong {
  color: var(--text);
  font-family: ui-monospace, "SFMono-Regular", Consolas, monospace;
  font-size: 11px;
  font-weight: 650;
}

.fly-error-copy h1 {
  max-width: 460px;
  margin: 0;
  color: var(--text);
  font-size: clamp(34px, 4vw, 48px);
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1.08;
  text-wrap: balance;
}

.fly-error-description {
  max-width: 440px;
  margin: 18px 0 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.65;
  text-wrap: pretty;
}

.fly-error-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 28px;
  gap: 8px;
}

.fly-error-action {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border: 0;
  border-radius: 20px;
  padding: 8px 18px;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  transition: background-color 150ms ease, color 150ms ease, opacity 150ms ease;
}

.fly-error-action--primary {
  background: var(--accent);
  color: var(--accent-contrast);
}

.fly-error-action--secondary {
  background: var(--page);
  color: var(--text);
}

.fly-error-action:hover {
  opacity: 0.74;
}

.fly-error-action:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.fly-error-action svg {
  width: 18px;
  height: 18px;
  flex: 0 0 18px;
}

.fly-error-footnote {
  margin: 24px 0 0;
  color: var(--faint);
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
}

.fly-error-visual {
  position: relative;
  min-width: 0;
  min-height: 480px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius-card);
  background:
    radial-gradient(
      circle at 22% 20%,
      color-mix(in srgb, var(--accent) 13%, transparent),
      transparent 34%
    ),
    linear-gradient(
      145deg,
      var(--page) 0%,
      color-mix(in srgb, var(--accent) 5%, var(--page)) 100%
    );
  isolation: isolate;
}

.fly-error-visual::before {
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: radial-gradient(
    circle,
    color-mix(in srgb, var(--text) 16%, transparent) 1px,
    transparent 1.2px
  );
  background-size: 22px 22px;
  content: "";
  mask-image: linear-gradient(135deg, rgba(0, 0, 0, 0.5), transparent 62%);
  opacity: 0.44;
}

.fly-error-visual-code {
  position: absolute;
  right: -0.03em;
  bottom: -0.22em;
  z-index: -1;
  margin: 0;
  color: color-mix(in srgb, var(--text) 7%, transparent);
  font-size: clamp(150px, 15vw, 220px);
  font-weight: 650;
  letter-spacing: -0.09em;
  line-height: 1;
  white-space: nowrap;
}

.fly-error-card-stack {
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(57%, 288px);
  aspect-ratio: 0.78;
  transform: translate(-48%, -47%);
}

.fly-error-ghost-card {
  position: absolute;
  inset: 0;
  display: block;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 14px;
}

.fly-error-ghost-card--back {
  background: color-mix(in srgb, var(--accent) 15%, var(--page));
  transform: translate(34px, -16px) rotate(7deg);
}

.fly-error-ghost-card--front {
  background: var(--page);
  box-shadow: var(--shadow-soft);
  transform: rotate(-4deg);
}

.fly-error-ghost-cover {
  display: grid;
  width: 100%;
  aspect-ratio: 16 / 9;
  place-items: center;
  border-bottom: 1px solid var(--line);
  background: color-mix(in srgb, var(--accent) 10%, var(--page-alt));
  color: color-mix(in srgb, var(--text) 34%, transparent);
}

.fly-error-ghost-cover svg {
  width: 48px;
  height: 48px;
}

.fly-error-ghost-body {
  display: flex;
  padding: 18px;
  flex-direction: column;
  gap: 9px;
}

.fly-error-ghost-line {
  display: block;
  width: 82%;
  height: 7px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--text) 11%, transparent);
}

.fly-error-ghost-line--title {
  width: 68%;
  height: 11px;
  margin-bottom: 4px;
  background: color-mix(in srgb, var(--text) 72%, transparent);
}

.fly-error-ghost-line--short {
  width: 54%;
}

.fly-error-ghost-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
}

.fly-error-ghost-meta i {
  display: block;
  width: 46px;
  height: 7px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--text) 11%, transparent);
}

.fly-error-ghost-meta i:first-child {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

@media (prefers-reduced-motion: no-preference) {
  .fly-error-ghost-card--back {
    animation: fly-error-card-back-in 600ms cubic-bezier(0.2, 1, 0.2, 1) both;
  }

  .fly-error-ghost-card--front {
    animation: fly-error-card-front-in 720ms 80ms cubic-bezier(0.2, 1, 0.2, 1) both;
  }
}

@keyframes fly-error-card-back-in {
  from { opacity: 0; transform: translate(54px, 4px) rotate(12deg); }
  to { opacity: 1; transform: translate(34px, -16px) rotate(7deg); }
}

@keyframes fly-error-card-front-in {
  from { opacity: 0; transform: translate(-28px, 18px) rotate(-9deg); }
  to { opacity: 1; transform: translate(0, 0) rotate(-4deg); }
}

@media (max-width: 900px) {
  .fly-error-card {
    max-width: 680px;
    min-height: 0;
    margin: clamp(24px, 5vh, 48px) auto auto;
    grid-template-columns: minmax(0, 1fr);
  }

  .fly-error-copy {
    grid-row: 2;
    min-height: 390px;
  }

  .fly-error-visual {
    grid-row: 1;
    min-height: 340px;
  }

  .fly-error-card-stack {
    width: min(42%, 230px);
  }

  .fly-error-visual-code {
    font-size: clamp(142px, 28vw, 210px);
  }
}

@media (max-width: 539px) {
  .fly-error-page-shell {
    padding: 16px;
  }

  .fly-error-card {
    gap: 0;
    margin: clamp(16px, 4vh, 28px) auto auto;
    border-radius: 14px;
    padding: 0;
  }

  .fly-error-visual {
    min-height: 230px;
    border: 0;
    border-bottom: 1px solid var(--line);
    border-radius: 14px 14px 0 0;
  }

  .fly-error-card-stack {
    width: min(41%, 166px);
    transform: translate(-51%, -42%);
  }

  .fly-error-ghost-card--back {
    transform: translate(20px, -9px) rotate(7deg);
  }

  .fly-error-ghost-body {
    padding: 10px;
    gap: 5px;
  }

  .fly-error-ghost-line {
    height: 4px;
  }

  .fly-error-ghost-line--title {
    height: 7px;
    margin-bottom: 2px;
  }

  .fly-error-ghost-meta {
    margin-top: 5px;
  }

  .fly-error-ghost-meta i {
    width: 32px;
    height: 4px;
  }

  .fly-error-ghost-meta i:first-child {
    width: 15px;
    height: 15px;
  }

  .fly-error-ghost-cover svg {
    width: 34px;
    height: 34px;
  }

  .fly-error-visual-code {
    right: 4px;
    bottom: -0.18em;
    font-size: clamp(100px, 34vw, 132px);
  }

  .fly-error-copy {
    min-height: 0;
    padding: 28px 24px 30px;
  }

  .fly-error-eyebrow {
    margin-bottom: 16px;
  }

  .fly-error-copy h1 {
    font-size: clamp(30px, 9vw, 38px);
  }

  .fly-error-description {
    margin-top: 14px;
    font-size: 14px;
  }

  .fly-error-actions {
    width: 100%;
    margin-top: 24px;
  }

  .fly-error-action {
    width: 100%;
  }

  .fly-error-footnote {
    margin-top: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fly-error-action,
  .fly-error-ghost-card--back,
  .fly-error-ghost-card--front {
    animation: none;
    transition: none;
  }
}
`,
};
