export const singlePagePreflight = {
  getCSS: () => String.raw`
body.fly-page {
  --fly-single-page-gap: clamp(60px, calc(53.2143px + 1.7857vw), 80px);
}

.fly-single-page,
.fly-single-page-intro,
.fly-single-page-grid,
.fly-single-page-content { width: 100%; min-width: 0; }

.fly-single-page { max-width: 3080px; margin-inline: auto; }

.fly-single-page-intro {
  display: flex;
  flex-direction: column;
}

.fly-single-page-media {
  order: 1;
  width: 100%;
  max-width: 1300px;
  aspect-ratio: 21 / 9;
  margin: 0 auto;
  border-radius: var(--radius-card);
  background: var(--page-alt);
  overflow: hidden;
}
.fly-single-page-media img { display: block; width: 100%; height: 100%; object-fit: cover; }

.fly-single-page-grid { margin-inline: auto; }

.fly-single-page-hero {
  display: flex;
  order: 2;
  width: 700px;
  max-width: 100%;
  flex-direction: column;
  gap: 16px;
  margin: 30px auto 60px;
}
.fly-single-page-intro:has(> .fly-single-page-media) .fly-single-page-hero { margin-top: 60px; }
.fly-single-page-title,
.fly-single-page-excerpt { width: 100%; max-width: 100%; margin: 0; }
.fly-single-page-title {
  color: var(--text);
  font-size: 28px;
  font-weight: 600;
  line-height: 30.8px;
  overflow-wrap: anywhere;
}
.fly-single-page-excerpt { color: var(--muted); font-size: 16px; line-height: 24px; }

.fly-single-page--cover .fly-single-page-intro {
  display: grid;
  min-height: clamp(520px, 62svh, 720px);
  grid-template-columns: minmax(280px, 0.9fr) minmax(420px, 1.1fr);
  align-items: center;
  gap: var(--fly-single-page-gap);
}

.fly-single-page--cover .fly-single-page-hero {
  grid-row: 1;
  grid-column: 1;
  width: 100%;
  margin: 0;
}

.fly-single-page--cover .fly-single-page-media {
  grid-row: 1;
  grid-column: 2;
  width: 100%;
  max-width: none;
  aspect-ratio: 16 / 9;
  margin: 0;
}

.fly-single-page--cover .fly-single-page-grid { margin-top: var(--section-gap); }

body.fly-page .fly-single-page-content > :nth-child(1 of :not(style, script)) {
  margin-top: 0;
}

.fly-single-page:has(.fly-single-page-content > form) .fly-single-page-hero,
body.fly-page .fly-single-page-content > form { width: 500px; max-width: 100%; }

body.fly-page .fly-single-page-content > follow-card {
  display: block;
  width: 100%;
  max-width: 700px;
  margin-right: auto;
  margin-left: auto;
}

body.fly-page .fly-single-page-content > style.pjax + follow-card {
  margin-top: 0;
}

/* Keep every visible top-level content block on the same 700px prose axis. */
body.fly-page .fly-single-page-content > :not(style, script) {
  margin-right: auto;
  margin-left: auto;
}

body.fly-page .fly-single-page-content.fly-post-page-content > h1 {
  font-size: 22px;
  font-weight: 600;
  line-height: 26.4px;
}

/* Halo may persist editor line-height declarations inline in page content. */
body.fly-page .fly-single-page-content.fly-post-page-content :is(p, li) {
  line-height: var(--fly-prose-line-height) !important;
}

body.fly-page .fly-single-page-comments {
  width: 700px;
  max-width: 100%;
  margin: 60px auto 0;
  border-top: 0;
  padding-top: 0;
}

body.fly-page .fly-single-page-comments .fly-post-comments-heading {
  margin-bottom: 24px;
  padding-bottom: 0;
}

body.fly-page .fly-single-page-comments .fly-post-comments-heading::after {
  display: none;
}

body.fly-page .fly-single-page-comments .fly-post-comments-heading h2 {
  font-size: 22px;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 26.4px;
}

body.fly-page .fly-single-page-content form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: auto;
  margin-left: auto;
}
body.fly-page .fly-single-page-content form > * { margin-top: 0; margin-bottom: 0; }
body.fly-page .fly-single-page-content form label {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 8px;
  color: var(--text);
}
body.fly-page .fly-single-page-content form :is(input, select, textarea, button) {
  max-width: 100%;
  font: inherit;
}
body.fly-page .fly-single-page-content form :is(input, select, textarea) {
  width: 100%;
  border: 0;
  outline: 0;
  background: var(--page-alt);
  color: var(--text);
}
body.fly-page .fly-single-page-content form :is(input:not([type="checkbox"]):not([type="radio"]):not([type="hidden"]):not([type="submit"]):not([type="button"]), select) {
  min-height: 48px;
  border-radius: 24px;
  padding: 12px 20px;
}
body.fly-page .fly-single-page-content form textarea {
  min-height: 140px;
  border-radius: 24px;
  padding: 12px 20px;
  resize: vertical;
}
body.fly-page .fly-single-page-content form :is(input, textarea)::placeholder { color: var(--faint); opacity: 1; }
body.fly-page .fly-single-page-content form :is(input, select, textarea):focus-visible {
  box-shadow: 0 0 0 2px var(--accent);
}
body.fly-page .fly-single-page-content form :is(input[type="checkbox"], input[type="radio"]) {
  width: 1em;
  height: 1em;
  accent-color: var(--accent);
}
body.fly-page .fly-single-page-content form :is(button, input[type="submit"], input[type="button"]) {
  display: inline-flex;
  width: fit-content;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  border: 0;
  border-radius: 20px;
  outline: 0;
  background: var(--accent);
  color: var(--accent-contrast);
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  cursor: pointer;
  transition: opacity 150ms ease, transform 150ms ease;
}
body.fly-page .fly-single-page-content form :is(button, input[type="submit"], input[type="button"]):hover { opacity: 0.82; }
body.fly-page .fly-single-page-content form :is(button, input[type="submit"], input[type="button"]):focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

@media (max-width: 991px) {
  .fly-single-page-hero > * { width: 70%; }
  .fly-single-page:has(.fly-single-page-content > form) .fly-single-page-hero > * { width: 100%; }

  .fly-single-page--cover .fly-single-page-intro {
    display: flex;
    min-height: 0;
    gap: 40px;
    padding-top: 30px;
  }

  .fly-single-page--cover .fly-single-page-hero {
    order: 1;
    width: 700px;
    max-width: 100%;
    margin: 0 auto;
  }

  .fly-single-page--cover .fly-single-page-hero > * { width: 100%; }

  .fly-single-page--cover .fly-single-page-media {
    order: 2;
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  .fly-single-page--cover .fly-single-page-grid { margin-top: 60px; }
}

@media (max-width: 767px) {
  .fly-single-page-hero > * { width: 100%; }
}

@media (max-width: 480px) {
  body.fly-page .fly-single-page-content form :is(input:not([type="checkbox"]):not([type="radio"]):not([type="hidden"]):not([type="submit"]):not([type="button"]), select, textarea) {
    padding: 10px 20px;
    font-size: 16px;
    line-height: 24px;
  }
}

@media (prefers-reduced-motion: reduce) {
  body.fly-page .fly-single-page-content form :is(button, input[type="submit"], input[type="button"]) { transition: none; }
}
`,
};
