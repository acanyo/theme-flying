export const linksPagePreflight = {
  getCSS: () => String.raw`
.fly-links-page-shell {
  min-width: 0;
  padding-bottom: var(--content-padding-x);
}

.fly-links-page-content {
  width: 100%;
  min-width: 0;
}

.fly-links-hero {
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px var(--content-padding-x);
  margin: 16px 0 40px;
}

.fly-links-hero-copy,
.fly-links-hero-media {
  width: calc(50% - var(--content-padding-x) / 2);
  min-width: 0;
  flex: 0 0 calc(50% - var(--content-padding-x) / 2);
}

.fly-links-hero-copy {
  display: grid;
  gap: 16px;
  padding: 30px 30px 30px 0;
}

.fly-links-hero-copy h1 {
  margin: 0;
  color: var(--text);
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.fly-links-hero-copy > p:last-child {
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 24px;
}

.fly-links-hero-media {
  overflow: hidden;
  border-radius: 16px;
  background: var(--page-alt);
  aspect-ratio: 16 / 9;
}

.fly-links-hero-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fly-links-filter {
  display: flex;
  min-width: 0;
  gap: 8px;
  margin: 0 0 50px;
  overflow-x: auto;
  padding: 2px 0;
  scrollbar-width: none;
}

.fly-links-filter::-webkit-scrollbar {
  display: none;
}

.fly-links-filter a {
  display: inline-flex;
  min-height: 38px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--page-alt);
  color: var(--text);
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  transition: background-color 150ms ease;
}

.fly-links-filter a:hover,
.fly-links-filter a:focus-visible,
.fly-links-filter a.fly-is-active {
  background: var(--hover-bg-color);
  color: var(--text);
}

.fly-links-groups {
  display: grid;
  min-width: 0;
  gap: var(--section-gap);
}

.fly-links-group {
  display: grid;
  min-width: 0;
  gap: 24px;
}

.fly-links-group-heading {
  display: flex;
  min-width: 0;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
}

.fly-links-group-heading h2 {
  margin: 0;
  color: var(--text);
  font-size: 22px;
  font-weight: 600;
  line-height: 26.4px;
}

.fly-links-group-heading span {
  flex: 0 0 auto;
  color: var(--muted);
  font-size: 14px;
  line-height: 21px;
}

.fly-links-empty {
  margin: 0 0 var(--section-gap);
  border-radius: 14px;
  background: var(--page-alt);
  color: var(--muted);
  padding: 32px;
  font-size: 15px;
  line-height: 22.5px;
  text-align: center;
}

.fly-links-application {
  display: grid;
  grid-template-columns: minmax(260px, 340px) minmax(0, 700px);
  align-items: start;
  gap: var(--content-padding-x);
  margin-top: var(--section-gap);
  border-top: 1px solid var(--line);
  padding-top: 40px;
}

.fly-links-application-guide {
  position: sticky;
  top: calc(var(--navbar-height) + 24px);
  display: grid;
  min-width: 0;
  gap: 18px;
  border-radius: 16px;
  background: var(--page-alt);
  padding: 28px;
}

.fly-links-application-guide h2,
.fly-links-application-form-heading h3 {
  margin: 0;
  color: var(--text);
  font-size: 22px;
  font-weight: 600;
  line-height: 26.4px;
}

.fly-links-application-guide > p,
.fly-links-application-form-heading p {
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 22.5px;
}

.fly-links-site-info {
  display: grid;
  gap: 10px;
  margin: 0;
}

.fly-links-site-info > div {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 10px;
}

.fly-links-site-info dt,
.fly-links-site-info dd {
  margin: 0;
  font-size: 14px;
  line-height: 21px;
}

.fly-links-site-info dt {
  color: var(--muted);
}

.fly-links-site-info dd,
.fly-links-site-info a {
  min-width: 0;
  overflow: hidden;
  color: var(--text);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fly-links-application-template {
  margin: 0;
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--page);
  color: var(--text);
  padding: 16px;
  font: inherit;
  font-size: 13px;
  line-height: 20px;
  white-space: pre-wrap;
}

.fly-links-application-copy {
  display: inline-flex;
  width: 100%;
  min-height: 42px;
  align-items: center;
  justify-content: space-between;
  border: 0;
  border-radius: 999px;
  background: var(--accent);
  color: var(--accent-contrast);
  padding: 9px 17px;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  cursor: pointer;
  transition: opacity 150ms ease;
}

.fly-links-application-copy:hover,
.fly-links-application-copy:focus-visible {
  color: var(--accent-contrast);
  opacity: 0.78;
}

.fly-links-application-status {
  min-height: 20px;
  margin: -8px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 20px;
}

.fly-links-application-status:empty {
  display: none;
}

.fly-links-application-form {
  width: 100%;
  min-width: 0;
  max-width: 700px;
}

.fly-links-application-form-heading {
  display: grid;
  gap: 8px;
  margin-bottom: 24px;
}

.fly-links-application-comment,
.fly-links-application-comment halo-comment {
  display: block;
  width: 100%;
  min-width: 0;
}

@media (max-width: 991px) {
  .fly-links-application {
    grid-template-columns: minmax(0, 700px);
  }

  .fly-links-application-guide {
    position: static;
  }
}

@media (max-width: 539px) {
  .fly-links-hero {
    margin-top: 16px;
  }

  .fly-links-hero-copy,
  .fly-links-hero-media {
    width: 100%;
    max-width: 100%;
    flex-basis: 100%;
  }

  .fly-links-hero-copy {
    padding: 30px 0;
  }

  .fly-links-filter {
    margin-right: calc(var(--content-padding-x) * -1);
    padding-right: var(--content-padding-x);
  }

  .fly-links-group-heading {
    align-items: flex-start;
  }

  .fly-links-application-guide {
    padding: 22px;
  }
}
`,
};
