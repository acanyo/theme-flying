export const postContentPreflight = {
  getCSS: () => String.raw`
body:is(.fly-post, .fly-page) .fly-post-page-content {
  --fly-prose-font-size: 16px;
  --fly-prose-line-height: 24px;
  --fly-prose-block-gap: 24px;
  --fly-prose-section-gap: 48px;
  --fly-prose-radius: 14px;
  min-width: 0;
  color: var(--muted);
  font-size: var(--fly-prose-font-size);
  line-height: var(--fly-prose-line-height);
  overflow-wrap: break-word;
  text-rendering: optimizeLegibility;
}

body:is(.fly-post, .fly-page) .fly-post-page-content > * {
  width: 100%;
  max-width: 700px;
  margin-top: var(--fly-prose-block-gap);
  margin-right: auto;
  margin-left: auto;
}

body:is(.fly-post, .fly-page) .fly-post-page-content > *:first-child { margin-top: 0; }
body:is(.fly-post, .fly-page) .fly-post-page-content > *:last-child { margin-bottom: 0; }

body:is(.fly-post, .fly-page) .fly-post-page-content p { margin: 0; }
body:is(.fly-post, .fly-page) .fly-post-page-content > p,
body:is(.fly-post, .fly-page) .fly-post-page-content > ul,
body:is(.fly-post, .fly-page) .fly-post-page-content > ol,
body:is(.fly-post, .fly-page) .fly-post-page-content > dl { margin-top: var(--fly-prose-block-gap); margin-bottom: 0; }

body:is(.fly-post, .fly-page) .fly-post-page-content :is(h1, h2, h3, h4, h5, h6) {
  margin: 0;
  color: var(--text);
  font-weight: 600;
  letter-spacing: normal;
  overflow-wrap: anywhere;
  scroll-margin-top: 100px;
}

body:is(.fly-post, .fly-page) .fly-post-page-content h1 { font-size: 28px; line-height: 1.1; }
body:is(.fly-post, .fly-page) .fly-post-page-content h2 { font-size: 22px; line-height: 1.2; }
body:is(.fly-post, .fly-page) .fly-post-page-content h3 { font-size: 20px; line-height: 1.2; }
body:is(.fly-post, .fly-page) .fly-post-page-content h4 { font-size: 19px; line-height: 1.2; }
body:is(.fly-post, .fly-page) .fly-post-page-content h5 { font-size: 18px; line-height: 1.2; }
body:is(.fly-post, .fly-page) .fly-post-page-content h6 { font-size: 16px; line-height: 1.2; }
body:is(.fly-post, .fly-page) .fly-post-page-content > :is(h1, h2, h3, h4, h5, h6) { margin-top: var(--fly-prose-section-gap); }
body:is(.fly-post, .fly-page) .fly-post-page-content > h1 + :is(h2, h3, h4, h5, h6),
body:is(.fly-post, .fly-page) .fly-post-page-content > h2 + :is(h3, h4, h5, h6),
body:is(.fly-post, .fly-page) .fly-post-page-content > h3 + :is(h4, h5, h6),
body:is(.fly-post, .fly-page) .fly-post-page-content > h4 + :is(h5, h6),
body:is(.fly-post, .fly-page) .fly-post-page-content > h5 + h6 { margin-top: 12px; }

body:is(.fly-post, .fly-page) .fly-post-page-content strong { color: var(--text); font-weight: 600; }
body:is(.fly-post, .fly-page) .fly-post-page-content em { color: color-mix(in srgb, var(--text) 82%, var(--muted)); }
body:is(.fly-post, .fly-page) .fly-post-page-content small { font-size: 0.84em; }
body:is(.fly-post, .fly-page) .fly-post-page-content mark { border-radius: 3px; background: color-mix(in srgb, #ffd84d 42%, var(--page)); color: var(--text); padding: 0 0.18em; }
body:is(.fly-post, .fly-page) .fly-post-page-content :is(s, del) { color: var(--faint); text-decoration-thickness: 1px; }
body:is(.fly-post, .fly-page) .fly-post-page-content :is(sub, sup) { line-height: 0; }

body:is(.fly-post, .fly-page) .fly-post-page-content a {
  color: inherit;
  font-weight: inherit;
  text-decoration: underline 0.075em;
  text-underline-offset: 0.15em;
  transition: color 100ms ease, text-decoration-color 100ms ease;
}
body:is(.fly-post, .fly-page) .fly-post-page-content a:hover { text-decoration-color: transparent; }
body:is(.fly-post, .fly-page) .fly-post-page-content a:focus-visible { border-radius: 3px; outline: 2px solid var(--accent); outline-offset: 3px; }

body:is(.fly-post, .fly-page) .fly-post-page-content :is(ul, ol) { padding-left: 0; }
body:is(.fly-post, .fly-page) .fly-post-page-content ul { list-style: none; }
body:is(.fly-post, .fly-page) .fly-post-page-content ul > li { position: relative; padding-left: 20px; }
body:is(.fly-post, .fly-page) .fly-post-page-content ul > li::before { position: absolute; top: 10px; left: 4px; width: 4px; height: 4px; border-radius: 50%; background: currentColor; content: ""; }
body:is(.fly-post, .fly-page) .fly-post-page-content ul ul > li::before { border: 1px solid currentColor; background: transparent; }
body:is(.fly-post, .fly-page) .fly-post-page-content ul ul ul > li::before { border: 0; border-radius: 0; background: currentColor; }
body:is(.fly-post, .fly-page) .fly-post-page-content ol { padding-left: 20px; }
body:is(.fly-post, .fly-page) .fly-post-page-content ol ol { list-style: lower-alpha; }
body:is(.fly-post, .fly-page) .fly-post-page-content ol ol ol { list-style: lower-roman; }
body:is(.fly-post, .fly-page) .fly-post-page-content li { margin: 0; padding-left: 0; }
body:is(.fly-post, .fly-page) .fly-post-page-content li + li { margin-top: 0.5em; }
body:is(.fly-post, .fly-page) .fly-post-page-content li > p { margin: 0; }
body:is(.fly-post, .fly-page) .fly-post-page-content li > :is(ul, ol) { margin-top: 0.5em; }
body:is(.fly-post, .fly-page) .fly-post-page-content ol li::marker { color: var(--text); font-size: 0.938em; font-weight: 500; font-variant-numeric: tabular-nums; }
body:is(.fly-post, .fly-page) .fly-post-page-content input[type="checkbox"] { width: 1em; height: 1em; margin: 0 0.45em 0 0; accent-color: var(--text); vertical-align: -0.08em; }

body:is(.fly-post, .fly-page) .fly-post-page-content dl { display: grid; grid-template-columns: minmax(120px, 0.34fr) minmax(0, 1fr); gap: 10px 20px; }
body:is(.fly-post, .fly-page) .fly-post-page-content dt { color: var(--text); font-weight: 600; }
body:is(.fly-post, .fly-page) .fly-post-page-content dd { margin: 0; }

body:is(.fly-post, .fly-page) .fly-post-page-content blockquote {
  max-width: 700px;
  margin-top: var(--fly-prose-block-gap);
  margin-bottom: 0;
  border: 0;
  border-left: 2px solid var(--accent);
  border-radius: 0;
  background: transparent;
  color: var(--text);
  padding: 0.5em 0 0.5em 16px;
  text-align: left;
  font-size: 1em;
  font-weight: 500;
  line-height: var(--fly-prose-line-height);
}
body:is(.fly-post, .fly-page) .fly-post-page-content blockquote p + p { margin-top: 0.5em; }
body:is(.fly-post, .fly-page) .fly-post-page-content blockquote cite { display: block; margin-top: 0.75em; color: var(--faint); font-size: 0.82em; font-style: normal; }
body:is(.fly-post, .fly-page) .fly-post-page-content blockquote.kg-blockquote-alt { border: 0; border-radius: 0; background: transparent; color: var(--text); padding: 12px 0; text-align: center; font-size: 22px; font-weight: 300; line-height: 1.3; }

body:is(.fly-post, .fly-page) .fly-post-page-content :not(pre) > code,
body:is(.fly-post, .fly-page) .fly-post-page-content kbd {
  border: 1px solid color-mix(in srgb, var(--line) 82%, var(--text));
  border-radius: 6px;
  background: var(--page-alt);
  color: var(--text);
  box-decoration-break: clone;
  padding: 0.12em 0.38em;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.86em;
  line-height: 1.6;
  -webkit-box-decoration-break: clone;
}
body:is(.fly-post, .fly-page) .fly-post-page-content kbd { border-bottom-width: 2px; white-space: nowrap; }

body:is(.fly-post, .fly-page) .fly-post-page-content pre {
  max-width: 700px;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid var(--line);
  border-radius: var(--fly-prose-radius);
  background: var(--page-alt);
  color: var(--text);
  padding: 20px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 13.5px;
  line-height: 1.65;
  overflow: auto;
  tab-size: 2;
}
body:is(.fly-post, .fly-page) .fly-post-page-content pre code { border: 0; border-radius: 0; background: transparent; color: inherit; padding: 0; font-size: inherit; }
body:is(.fly-post, .fly-page) .fly-post-page-content shiki-code { display: block; margin-top: 30px; margin-bottom: 30px; border: 1px solid var(--line); border-radius: var(--fly-prose-radius); background: var(--page); box-shadow: 0 14px 34px -28px rgba(0, 0, 0, 0.38); overflow: hidden; }

body:is(.fly-post, .fly-page) .fly-post-page-content > figure,
body:is(.fly-post, .fly-page) .fly-post-page-content > .kg-card { margin-top: 30px; margin-bottom: 30px; }
body:is(.fly-post, .fly-page) .fly-post-page-content figure { padding: 0; }
body:is(.fly-post, .fly-page) .fly-post-page-content figure > a { display: block; text-decoration: none; }
body:is(.fly-post, .fly-page) .fly-post-page-content :is(img, svg, canvas) { max-width: 100%; }
body:is(.fly-post, .fly-page) .fly-post-page-content figure > img,
body:is(.fly-post, .fly-page) .fly-post-page-content figure > a > img,
body:is(.fly-post, .fly-page) .fly-post-page-content .kg-image-card img { display: block; width: 100%; height: auto; border-radius: var(--fly-prose-radius); object-fit: cover; }
body:is(.fly-post, .fly-page) .fly-post-page-content figcaption { width: min(92%, 620px); margin: 10px auto 0; color: var(--faint); text-align: center; font-size: 13px; line-height: 1.6; text-wrap: pretty; }

body:is(.fly-post, .fly-page) .fly-post-page-content :is(iframe, video, audio) { max-width: 100%; }
body:is(.fly-post, .fly-page) .fly-post-page-content :is(iframe, video) { display: block; width: 100%; border: 0; border-radius: var(--fly-prose-radius); }
body:is(.fly-post, .fly-page) .fly-post-page-content audio { width: 100%; }

body:is(.fly-post, .fly-page) .fly-post-page-content > div:has(> table) { margin-top: 30px; margin-bottom: 30px; border: 1px solid var(--line); border-radius: var(--fly-prose-radius); background: var(--page); overflow-x: auto !important; overscroll-behavior-inline: contain; }
body:is(.fly-post, .fly-page) .fly-post-page-content table { width: 100%; border: 1px solid var(--line); border-radius: var(--fly-prose-radius); border-collapse: separate; border-spacing: 0; color: var(--muted); font-size: 14px; line-height: 1.55; overflow: hidden; }
body:is(.fly-post, .fly-page) .fly-post-page-content > table { display: block; max-width: 700px; margin-top: 30px; margin-bottom: 30px; overflow-x: auto; }
body:is(.fly-post, .fly-page) .fly-post-page-content > div:has(> table) > table { display: table; min-width: 600px; margin: 0; border: 0; border-radius: 0; }
body:is(.fly-post, .fly-page) .fly-post-page-content :is(th, td) { min-width: 110px; border: 0; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: 13px 15px; text-align: left; vertical-align: top; }
body:is(.fly-post, .fly-page) .fly-post-page-content th { background: var(--page-alt); color: var(--text); font-weight: 600; }
body:is(.fly-post, .fly-page) .fly-post-page-content tr > :last-child { border-right: 0; }
body:is(.fly-post, .fly-page) .fly-post-page-content tr:last-child > :is(th, td) { border-bottom: 0; }
body:is(.fly-post, .fly-page) .fly-post-page-content tbody tr:nth-child(even) td { background: color-mix(in srgb, var(--page-alt) 42%, var(--page)); }
body:is(.fly-post, .fly-page) .fly-post-page-content :is(th, td) > p { margin: 0; }

body:is(.fly-post, .fly-page) .fly-post-page-content hr { height: 1px; margin: 30px auto; border: 0; background: var(--line); }

body:is(.fly-post, .fly-page) .fly-post-page-content details,
body:is(.fly-post, .fly-page) .fly-post-page-content .kg-toggle-card { margin-top: 24px; border: 0; border-radius: 10px; background: var(--page-alt); padding: 0 16px; }
body:is(.fly-post, .fly-page) .fly-post-page-content summary,
body:is(.fly-post, .fly-page) .fly-post-page-content .kg-toggle-heading { color: var(--text); padding: 14px 0; font-weight: 500; cursor: pointer; }
body:is(.fly-post, .fly-page) .fly-post-page-content details > :not(summary),
body:is(.fly-post, .fly-page) .fly-post-page-content .kg-toggle-content { margin-bottom: 16px; }

body:is(.fly-post, .fly-page) .fly-post-page-content .kg-callout-card { display: flex; align-items: flex-start; gap: 12px; border: 0; border-radius: var(--fly-prose-radius); color: var(--text); padding: 16px 20px; }
body:is(.fly-post, .fly-page) .fly-post-page-content .kg-callout-emoji { flex: 0 0 auto; font-size: 20px; line-height: 1.45; }
body:is(.fly-post, .fly-page) .fly-post-page-content .kg-callout-text { min-width: 0; }

body:is(.fly-post, .fly-page) .fly-post-page-content .kg-bookmark-container { display: flex; min-height: 150px; gap: 16px; border: 1px solid var(--line); border-radius: var(--fly-prose-radius); background: var(--page-alt); color: inherit; padding: 8px; text-decoration: none; overflow: hidden; }
body:is(.fly-post, .fly-page) .fly-post-page-content .kg-bookmark-content { display: flex; min-width: 0; flex: 1 1 auto; flex-direction: column; padding: 12px 4px 10px 12px; }
body:is(.fly-post, .fly-page) .fly-post-page-content .kg-bookmark-title { color: var(--text); font-weight: 600; line-height: 1.2; }
body:is(.fly-post, .fly-page) .fly-post-page-content .kg-bookmark-description { display: -webkit-box; margin-top: 6px; color: var(--muted); font-size: 14px; line-height: 1.55; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
body:is(.fly-post, .fly-page) .fly-post-page-content .kg-bookmark-metadata { display: flex; min-width: 0; align-items: center; gap: 6px; margin-top: auto; color: var(--faint); font-size: 12px; line-height: 1.4; }
body:is(.fly-post, .fly-page) .fly-post-page-content .kg-bookmark-icon { width: 18px; height: 18px; border-radius: 4px; object-fit: cover; }
body:is(.fly-post, .fly-page) .fly-post-page-content .kg-bookmark-thumbnail { width: 38%; min-width: 180px; flex: 0 0 auto; border-radius: 10px; overflow: hidden; }
body:is(.fly-post, .fly-page) .fly-post-page-content .kg-bookmark-thumbnail img { width: 100%; height: 100%; object-fit: cover; }

body:is(.fly-post, .fly-page) .fly-post-page-content .kg-gallery-container { display: flex; flex-direction: column; gap: 8px; }
body:is(.fly-post, .fly-page) .fly-post-page-content .kg-gallery-row { display: flex; gap: 8px; }
body:is(.fly-post, .fly-page) .fly-post-page-content .kg-gallery-image { flex: 1 1 0; }
body:is(.fly-post, .fly-page) .fly-post-page-content .kg-gallery-image img { display: block; width: 100%; height: 100%; border-radius: 8px; object-fit: cover; }

@media (min-width: 992px) {
  body:is(.fly-post, .fly-page) .fly-post-page-content .kg-gallery-card.kg-width-wide { width: calc(100% + var(--fly-post-padding)); max-width: calc(100% + var(--fly-post-padding)); margin-right: calc(var(--fly-post-padding) * -0.5); margin-left: calc(var(--fly-post-padding) * -0.5); }
}

@media (max-width: 640px) {
  body:is(.fly-post, .fly-page) .fly-post-page-content dl { grid-template-columns: 1fr; gap: 5px; }
  body:is(.fly-post, .fly-page) .fly-post-page-content > div:has(> table) > table { min-width: 540px; }
}

@media (max-width: 560px) {
  body:is(.fly-post, .fly-page) .fly-post-page-content .kg-bookmark-container { min-height: 0; flex-direction: column-reverse; }
  body:is(.fly-post, .fly-page) .fly-post-page-content .kg-bookmark-content { flex: 0 0 auto; padding: 8px 12px 12px; }
  body:is(.fly-post, .fly-page) .fly-post-page-content .kg-bookmark-thumbnail { width: 100%; min-width: 0; aspect-ratio: 16 / 9; flex: 0 0 auto; }
}

@media (prefers-reduced-motion: reduce) {
  body:is(.fly-post, .fly-page) .fly-post-page-content a { transition: none; }
}
`,
};
