export const footerPreflight = {
  getCSS: () => String.raw`
.fly-eyebrow {
  margin: 0 0 10px;
  color: var(--faint);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.fly-site-footer {
  border-top: 0;
}

.fly-newsletter-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: var(--section-gap);
  border-radius: var(--radius-section);
  background: var(--page-alt);
  padding: 30px;
}

.fly-newsletter-panel > div {
  max-width: 40%;
}

.fly-newsletter-panel h2 {
  margin: 0;
  color: var(--text);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.2;
}

.fly-newsletter-panel p {
  margin: 8px 0 0;
  color: var(--muted);
}

.fly-newsletter-form input {
  width: 100%;
  height: 44px;
  border: 1px solid var(--line);
  border-radius: 999px;
  outline: 0;
  background: var(--page);
  color: var(--text);
  padding: 0 16px;
}

.fly-newsletter-panel .fly-newsletter-form {
  width: min(100%, 400px);
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
}

.fly-newsletter-panel .fly-newsletter-status {
  grid-column: 1 / -1;
}

.fly-newsletter-panel .fly-button {
  min-height: 44px;
  padding-inline: 20px;
  font-size: 14px;
  font-weight: 600;
}

.fly-newsletter-form input:focus {
  border-color: color-mix(in srgb, var(--accent) 42%, var(--line));
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 12%, transparent);
}

.fly-newsletter-status {
  min-height: 20px;
  margin: 0;
  color: var(--muted);
  font-size: 13px;
}

.fly-newsletter-status[data-fly-state="error"] {
  color: #dc2626;
}

.fly-newsletter-status[data-fly-state="success"] {
  color: #059669;
}

.fly-newsletter-status[data-fly-state="notice"] {
  color: var(--faint);
}

.fly-footer-links {
  display: block;
}

@media (max-width: 760px) {
  .fly-newsletter-panel {
    align-items: stretch;
    flex-direction: column;
    padding: 24px;
  }

  .fly-newsletter-panel > div {
    max-width: 560px;
  }

  .fly-newsletter-panel .fly-newsletter-form {
    width: 100%;
  }
}

@media (max-width: 420px) {
  .fly-newsletter-panel {
    border-radius: var(--radius-card);
    padding: 20px;
  }

  .fly-newsletter-panel .fly-newsletter-form {
    grid-template-columns: 1fr;
  }

  .fly-newsletter-panel .fly-newsletter-status {
    grid-column: auto;
  }
}

.fly-brand--footer {
  font-size: 18px;
  font-weight: 600;
}

.fly-footer-links p {
  max-width: 360px;
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 14px;
}

.fly-footer-nav-group h2 {
  margin: 0 0 4px;
  color: var(--text);
  font-size: 13px;
  font-weight: 800;
}

.fly-footer-nav-group a {
  color: var(--muted);
  font-size: 14px;
  font-weight: 600;
}

.fly-copyright {
  margin: 30px 0 0;
  color: var(--faint);
  font-size: 13px;
}
`,
};
