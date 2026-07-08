export const footerPreflight = {
  getCSS: () => String.raw`
.eyebrow {
  margin: 0 0 8px;
  color: var(--accent);
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
}

.newsletter-panel h2 {
  font-size: 24px;
  line-height: 1.25;
}

.newsletter-panel p {
  margin: 8px 0 0;
  color: var(--muted);
}

.newsletter-form input {
  width: 100%;
  height: 40px;
  border: 1px solid var(--line);
  border-radius: 999px;
  outline: 0;
  background: var(--page);
  color: var(--text);
  padding: 0 16px;
}

.newsletter-form input:focus {
  border-color: color-mix(in srgb, var(--accent) 42%, var(--line));
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 12%, transparent);
}

.newsletter-status {
  min-height: 20px;
  margin: 0;
  color: var(--muted);
  font-size: 13px;
}

.newsletter-status[data-state="error"] {
  color: #dc2626;
}

.newsletter-status[data-state="success"] {
  color: #059669;
}

.brand--footer {
  font-size: 30px;
}

.footer-links p {
  max-width: 360px;
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 14px;
}

.footer-nav-group h2 {
  margin: 0 0 4px;
  color: var(--text);
  font-size: 13px;
  font-weight: 800;
}

.footer-nav-group a {
  color: var(--muted);
  font-size: 14px;
  font-weight: 600;
}

.copyright {
  margin: 30px 0 0;
  color: var(--faint);
  font-size: 13px;
}
`,
};
