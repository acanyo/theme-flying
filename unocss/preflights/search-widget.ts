export const searchWidgetPreflight = {
  getCSS: () => String.raw`
:root,
:root[data-color-scheme="light"] {
  --halo-search-widget-base-font-size: 16px;
  --halo-search-widget-base-font-family: "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --halo-search-widget-base-rounded: var(--radius-card);
  --halo-search-widget-base-bg-color: var(--page-alt);
  --halo-search-widget-primary-color: var(--accent-strong);
  --halo-search-widget-muted-color: var(--faint);
  --halo-search-widget-content-color: var(--text);
  --halo-search-widget-modal-bg-color: var(--page);
  --halo-search-widget-modal-layer-color: rgba(17, 19, 23, 0.56);
  --halo-search-widget-hit-bg-color: var(--page-alt);
  --halo-search-widget-divider-color: var(--line);
  --halo-search-widget-kbd-border-color: color-mix(in srgb, var(--accent-secondary) 16%, transparent);
  --halo-search-widget-kbd-shadow: 0 2px 0 rgba(0, 0, 0, 0.08);

  /* PluginSearchWidget 1.x compatibility aliases. */
  --halo-search-widget-base-border-radius: var(--halo-search-widget-base-rounded);
  --halo-search-widget-color-modal-layer: var(--halo-search-widget-modal-layer-color);
  --halo-search-widget-color-modal-content-bg: var(--halo-search-widget-modal-bg-color);
  --halo-search-widget-color-form-input-bg: var(--halo-search-widget-base-bg-color);
  --halo-search-widget-color-form-input: var(--halo-search-widget-content-color);
  --halo-search-widget-color-form-input-placeholder: var(--halo-search-widget-muted-color);
  --halo-search-widget-color-form-divider: var(--halo-search-widget-divider-color);
  --halo-search-widget-color-result-empty: var(--halo-search-widget-muted-color);
  --halo-search-widget-color-result-item-bg: var(--halo-search-widget-hit-bg-color);
  --halo-search-widget-color-result-item-hover-bg: var(--hover-bg-color);
  --halo-search-widget-color-result-item-title: var(--halo-search-widget-content-color);
  --halo-search-widget-color-result-item-content: var(--halo-search-widget-muted-color);
  --halo-search-widget-color-command-kbd-item: var(--halo-search-widget-content-color);
  --halo-search-widget-color-command-kbd-border: var(--halo-search-widget-kbd-border-color);
}

:root[data-color-scheme="dark"] {
  --halo-search-widget-base-bg-color: var(--page-alt);
  --halo-search-widget-primary-color: var(--accent-strong);
  --halo-search-widget-muted-color: var(--faint);
  --halo-search-widget-content-color: var(--text);
  --halo-search-widget-modal-bg-color: var(--page);
  --halo-search-widget-modal-layer-color: rgba(0, 0, 0, 0.72);
  --halo-search-widget-hit-bg-color: var(--page-alt);
  --halo-search-widget-divider-color: var(--line);
  --halo-search-widget-kbd-border-color: color-mix(in srgb, var(--accent-secondary) 16%, transparent);
  --halo-search-widget-kbd-shadow: 0 2px 0 rgba(255, 255, 255, 0.08);
}
`,
};
