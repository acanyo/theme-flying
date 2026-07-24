// Shared structural shortcuts; component-specific navigation styles live in preflights.
export const componentShortcuts = {
  "fly-brand":
    "inline-flex min-w-0 items-center text-[var(--text)] font-sans font-500 leading-none",
  "fly-button":
    "inline-flex min-h-10 items-center justify-center rounded-full border-0 px-5.5 text-sm font-800",
  "fly-button--primary": "bg-[var(--accent)] text-[var(--accent-contrast)]",
  "fly-button--dark": "bg-[var(--accent)] text-[var(--accent-contrast)]",
  "fly-icon-button": "h-10 w-10 border-0 bg-transparent text-[var(--text)]",
  "fly-featured-grid": "min-w-0",
  "fly-featured-card":
    "relative isolate overflow-hidden rounded-[var(--radius-card)] bg-[var(--page-alt)] text-white shadow-[var(--shadow-soft)]",
  "fly-featured-image": "absolute inset-0 -z-2 h-full w-full object-cover",
  "fly-featured-content":
    "relative z-2 flex min-h-full flex-col justify-end p-4 pointer-events-none sm:p-6",

  "fly-article-grid": "grid min-w-0",
  "fly-post-card": "relative min-w-0",
  "fly-post-image-frame": "relative",
  "fly-post-image-link":
    "block overflow-hidden rounded-[var(--radius-card)] bg-[var(--page-alt)]",
  "fly-post-cover": "h-full w-full object-cover",
  "fly-post-body": "min-w-0",
  "fly-post-meta": "flex items-center gap-2 text-xs text-[var(--muted)]",
  "fly-author-pill": "flex min-w-0 items-center gap-2",
  "fly-post-tags": "flex flex-wrap gap-2",
  "fly-topic-section": "grid",
  "fly-topic-block": "grid",
  "fly-authors-section": "min-w-0",
  "fly-authors-list": "min-w-0",
  "fly-author-card": "min-w-0",
};
