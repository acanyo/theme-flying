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
  margin-right: auto;
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

.fly-sidebar-socials .fly-footer-records {
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}

@media (max-width: 539px) {
  .fly-footer-navigation--content {
    flex-basis: 100%;
  }
}

@media (min-width: 1200px) {
  body:not([data-fly-sidebar-collapsed="true"])
    .fly-site-footer
    .fly-footer-shell {
    display: none;
  }
}
`,
};
