export const commentWidgetPreflight = {
  getCSS: () => String.raw`
.fly-post-comments {
  color-scheme: light;

  --halo-cw-primary-1-color: var(--fly-primary-color);
  --halo-cw-primary-2-color: color-mix(in srgb, var(--fly-secondary-color) 28%, var(--page));
  --halo-cw-primary-3-color: color-mix(in srgb, var(--fly-secondary-color) 10%, var(--page));

  --halo-cw-text-1-color: var(--text);
  --halo-cw-text-2-color: var(--muted);
  --halo-cw-text-3-color: var(--faint);

  --halo-cw-muted-1-color: color-mix(in srgb, var(--text) 18%, var(--page));
  --halo-cw-muted-2-color: var(--page-alt);
  --halo-cw-muted-3-color: color-mix(in srgb, var(--text) 4%, var(--page));

  --halo-cw-base-rounded: var(--radius-card);
  --halo-cw-avatar-rounded: 50%;
  --halo-cw-avatar-size: 36px;
  --halo-cw-base-font-size: 14px;
  --halo-cw-base-font-family: "Geist", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

[data-theme="dark"] .fly-post-comments {
  color-scheme: dark;

  --halo-cw-primary-1-color: color-mix(in srgb, var(--fly-primary-color) 72%, var(--faint));
  --halo-cw-primary-2-color: color-mix(in srgb, var(--fly-secondary-color) 30%, var(--hover-bg-color));
  --halo-cw-primary-3-color: color-mix(in srgb, var(--fly-secondary-color) 12%, var(--page-alt));
}
`,
};
