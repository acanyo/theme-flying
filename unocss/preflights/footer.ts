export const footerPreflight = {
  getCSS: () => String.raw`
.fly-site-footer {
  border-top: 0;
}

.fly-footer-shell {
  margin-top: calc(
    clamp(60px, calc(53.1px + 1.8vw), 80px) - var(--fly-responsive-gutter)
  );
}

body .fly-footer-shell {
  padding: 0 var(--fly-responsive-gutter) var(--fly-responsive-gutter);
}

.fly-footer-identity {
  flex: 0 1 auto;
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 8px;
}

.fly-footer-shell > .fly-footer-identity {
  display: flex;
  width: 100%;
  min-height: 64px;
  flex: 1 0 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px 24px;
  border: 1px solid color-mix(in srgb, var(--line) 72%, transparent);
  border-radius: var(--radius-card);
  padding: 16px clamp(16px, 1.6vw, 24px);
}

.fly-footer-shell > .fly-footer-identity--copyright-only {
  width: auto;
  min-height: 0;
  flex: 0 0 auto;
  border: 0;
  padding: 0;
}

.fly-footer-shell > .fly-footer-identity .fly-footer-copyright {
  order: 1;
  color: var(--faint);
  font-size: 13px;
  line-height: 19px;
}

.fly-footer-shell > .fly-footer-identity .fly-footer-records {
  order: 2;
  justify-content: flex-end;
}

.fly-footer-shell > .fly-footer-identity .fly-footer-copyright a {
  color: inherit;
  text-decoration: none;
}

.fly-footer-shell > .fly-footer-identity .fly-footer-copyright a:hover,
.fly-footer-shell > .fly-footer-identity .fly-footer-copyright a:focus-visible {
  color: var(--text);
}

.fly-footer-copyright {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
}

.fly-footer-copyright-icon {
  width: 15px;
  height: 15px;
  flex-basis: 15px;
  margin-right: 4px;
}

.fly-footer-copyright-site,
.fly-footer-copyright-credit {
  display: inline-flex;
  min-width: 0;
  align-items: center;
  white-space: nowrap;
}

.fly-footer-copyright-separator {
  margin: 0 4px;
}

.fly-footer-copyright-credit {
  gap: 3px;
}

.fly-footer-copyright a {
  color: var(--text);
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, var(--text) 32%, transparent);
  transition: color 100ms ease, text-decoration-color 100ms ease;
}

.fly-footer-copyright a:hover {
  text-decoration-color: color-mix(in srgb, var(--text) 54%, transparent);
}

.fly-footer-records {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px 16px;
}

.fly-footer-record {
  display: inline-flex;
  min-width: 0;
  max-width: 100%;
  align-items: center;
  gap: 6px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  transition: color 100ms ease;
}

.fly-footer-record:hover,
.fly-footer-record:focus-visible {
  color: var(--text);
}

.fly-footer-record span {
  min-width: 0;
  overflow-wrap: anywhere;
}

.fly-footer-record-icon {
  width: 17px;
  height: 17px;
  flex: 0 0 auto;
  object-fit: contain;
}

.fly-footer-navigation {
  flex: 0 0 auto;
  max-width: 100%;
}

.fly-footer-navigation ul {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
  padding: 0;
  list-style: none;
}

.fly-footer-navigation--sidebar ul {
  margin: -3px -8px;
}

.fly-footer-link {
  display: flex;
  align-items: center;
  border-radius: 6px;
  color: var(--muted);
  padding: 3px 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  transition: color 100ms ease, background-color 100ms ease;
}

.fly-footer-link:hover,
.fly-footer-link:focus-visible {
  background: transparent;
  color: color-mix(in srgb, var(--text) 91%, var(--page));
}

@media (max-width: 539px) {
  .fly-footer-navigation--content {
    flex-basis: 100%;
  }

  .fly-footer-shell > .fly-footer-identity {
    min-height: 0;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
  }

  .fly-footer-shell > .fly-footer-identity--copyright-only {
    padding: 0;
  }

  .fly-footer-shell > .fly-footer-identity .fly-footer-copyright {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }

  .fly-footer-shell
    > .fly-footer-identity
    .fly-footer-copyright-separator {
    display: none;
  }

  .fly-footer-shell > .fly-footer-identity .fly-footer-records {
    justify-content: flex-start;
  }
}

@media (min-width: 1200px) {
  body:not([data-fly-sidebar-collapsed="true"])
    .fly-site-footer
    .fly-footer-navigation--content {
    display: none;
  }
}
`,
};
