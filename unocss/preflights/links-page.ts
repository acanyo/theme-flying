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
  display: grid;
  width: 100%;
  min-width: 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: auto minmax(0, 1fr);
  gap: 28px var(--content-padding-x);
  margin: 16px 0 50px;
}

.fly-links-hero-copy {
  display: grid;
  min-width: 0;
  grid-column: 1;
  grid-row: 1;
  align-content: start;
  gap: 18px;
  padding: 54px 30px 0 0;
}

.fly-links-hero-heading {
  display: flex;
  min-width: 0;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;
}

.fly-links-hero-heading h1 {
  margin: 0;
  color: var(--text);
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1;
}

.fly-links-hero-copy > p {
  max-width: 620px;
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 24px;
}

.fly-links-hero-media {
  min-width: 0;
  grid-column: 2;
  grid-row: 1 / 3;
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
  grid-column: 1;
  grid-row: 2;
  align-self: end;
  gap: 8px;
  margin: 0;
  overflow-x: auto;
  padding: 2px 30px 8px 0;
  scrollbar-width: none;
}

.fly-links-filter::-webkit-scrollbar {
  display: none;
}

.fly-links-filter a {
  display: inline-flex;
  min-height: 36px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--page-alt);
  color: var(--text);
  padding: 7px 15px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  transition: background-color 150ms ease, color 150ms ease;
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

.fly-links-application-trigger {
  display: inline-flex;
  min-height: 30px;
  flex: 0 0 auto;
  align-items: center;
  gap: 6px;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--muted);
  padding: 3px 0;
  font: inherit;
  font-size: 13px;
  font-weight: 550;
  line-height: 20px;
  transition: color 150ms ease;
}

.fly-links-application-trigger .fly-iconify {
  width: 16px;
  height: 16px;
  flex-basis: 16px;
  transition: transform 150ms ease;
}

.fly-links-application-trigger:hover,
.fly-links-application-trigger:focus-visible {
  color: var(--text);
}

.fly-links-application-trigger:hover .fly-iconify,
.fly-links-application-trigger:focus-visible .fly-iconify {
  transform: translateX(3px);
}

body[data-fly-link-application-open="true"] {
  overflow: hidden;
}

.fly-links-application-dialog {
  width: min(560px, calc(100vw - 48px));
  height: auto;
  max-width: none;
  max-height: calc(100dvh - 48px);
  margin: auto;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--line) 86%, transparent);
  border-radius: 18px;
  outline: 0;
  background: var(--page);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.2);
  color: var(--text);
  padding: 0;
  opacity: 0;
  transform: translateY(10px);
  transition:
    width 200ms ease,
    height 200ms ease,
    opacity 160ms ease,
    transform 160ms ease;
}

.fly-links-application-dialog[data-fly-step="form"] {
  width: min(860px, calc(100vw - 48px));
  height: min(760px, calc(100dvh - 48px));
}

.fly-links-application-dialog[open][data-fly-open="true"] {
  opacity: 1;
  transform: translateY(0);
}

.fly-links-application-dialog::backdrop {
  background: rgba(9, 11, 14, 0.48);
  backdrop-filter: blur(6px);
}

.fly-links-application-shell {
  display: grid;
  max-height: calc(100dvh - 48px);
  min-height: 0;
  grid-template-rows: auto minmax(0, 1fr);
  background: var(--page);
}

.fly-links-application-dialog[data-fly-step="form"]
  .fly-links-application-shell {
  height: 100%;
}

.fly-links-application-header {
  position: relative;
  z-index: 2;
  display: flex;
  min-width: 0;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  border-bottom: 1px solid var(--line);
  background: var(--page);
  padding: 24px 24px 20px 28px;
}

.fly-links-application-heading {
  display: grid;
  min-width: 0;
  gap: 5px;
}

.fly-links-application-heading h2,
.fly-links-application-guide-heading h3,
.fly-links-application-form-heading h3 {
  margin: 0;
  color: var(--text);
  font-weight: 600;
  letter-spacing: 0;
}

.fly-links-application-guide-heading h3:focus,
.fly-links-application-form-heading h3:focus {
  outline: none;
}

.fly-links-application-heading h2 {
  font-size: 23px;
  line-height: 29px;
}

.fly-links-application-heading > p,
.fly-links-application-guide-heading p,
.fly-links-application-form-heading p {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 21px;
}

.fly-links-application-progress {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 9px;
  margin: 15px 0 0;
  padding: 0;
  list-style: none;
}

.fly-links-application-progress li[data-fly-link-application-progress] {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 7px;
  color: var(--faint);
}

.fly-links-application-progress
  li[data-fly-link-application-progress]
  > span {
  display: inline-flex;
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line);
  border-radius: 50%;
  color: currentColor;
  font-size: 11px;
  font-weight: 650;
  line-height: 1;
}

.fly-links-application-progress
  li[data-fly-link-application-progress]
  > strong {
  font-size: 12px;
  font-weight: 550;
  line-height: 18px;
}

.fly-links-application-progress
  li[data-fly-link-application-progress][aria-current="step"] {
  color: var(--text);
}

.fly-links-application-progress
  li[data-fly-link-application-progress][aria-current="step"]
  > span {
  border-color: var(--text);
  background: var(--text);
  color: var(--page);
}

.fly-links-application-progress > li[aria-hidden="true"] {
  width: 34px;
  height: 1px;
  flex: 0 1 34px;
  background: var(--line);
}

.fly-links-application-close {
  display: inline-flex;
  width: 36px;
  height: 36px;
  flex: 0 0 36px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: transparent;
  color: var(--muted);
  padding: 0;
  transition: background-color 150ms ease, color 150ms ease;
}

.fly-links-application-close:hover,
.fly-links-application-close:focus-visible {
  background: var(--page-alt);
  color: var(--text);
}

.fly-links-application-body {
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 26px 28px 28px;
  scrollbar-gutter: stable;
}

.fly-links-application-panel[hidden] {
  display: none;
}

.fly-links-application-panel {
  min-width: 0;
}

.fly-links-application-panel--guide {
  display: grid;
  gap: 22px;
}

.fly-links-application-guide-heading,
.fly-links-application-form-heading {
  display: grid;
  gap: 6px;
}

.fly-links-application-guide-heading > span {
  color: var(--faint);
  font-size: 11px;
  font-weight: 650;
  letter-spacing: 0;
  line-height: 16px;
}

.fly-links-application-guide-heading h3,
.fly-links-application-form-heading h3 {
  font-size: 20px;
  line-height: 26px;
}

.fly-links-site-card {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 13px;
}

.fly-links-site-copybar {
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  border-bottom: 1px solid var(--line);
  background: color-mix(in srgb, var(--page-alt) 54%, transparent);
  padding: 10px 12px 10px 15px;
}

.fly-links-site-copybar > div {
  display: flex;
  min-width: 0;
  align-items: baseline;
  gap: 8px;
}

.fly-links-site-copybar strong {
  flex: 0 0 auto;
  color: var(--text);
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
}

.fly-links-site-copybar > div > span {
  overflow: hidden;
  color: var(--faint);
  font-size: 11px;
  line-height: 17px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fly-links-site-copy {
  display: inline-flex;
  min-height: 24px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--faint);
  padding: 2px 4px;
  font: inherit;
  font-size: 11px;
  font-weight: 550;
  line-height: 17px;
  transition: background-color 150ms ease, color 150ms ease;
}

.fly-links-site-copy .fly-iconify {
  width: 13px;
  height: 13px;
  flex-basis: 13px;
}

.fly-links-site-copy:hover,
.fly-links-site-copy:focus-visible {
  background: var(--page-alt);
  color: var(--text);
}

.fly-links-site-copy--all {
  min-height: 30px;
  border: 1px solid var(--line);
  background: var(--page);
  color: var(--muted);
  padding: 5px 9px;
}

.fly-links-site-copy[data-fly-link-copy-state="success"] {
  color: #237a4b;
}

.fly-links-site-copy[data-fly-link-copy-state="error"] {
  color: #b42318;
}

.fly-links-site-identity {
  display: grid;
  min-width: 0;
  grid-template-columns: 56px minmax(0, 1fr);
  align-items: center;
  gap: 14px;
  padding: 15px;
}

.fly-links-site-identity:not(:has(.fly-links-site-logo))
  .fly-links-site-identity-copy {
  grid-column: 1 / -1;
}

.fly-links-site-logo {
  width: 56px;
  height: 56px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--page-alt);
}

.fly-links-site-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fly-links-site-identity-copy {
  display: grid;
  min-width: 0;
  gap: 4px;
}

.fly-links-site-identity-copy h4 {
  margin: 0;
  color: var(--text);
  font-size: 15px;
  font-weight: 600;
  line-height: 21px;
}

.fly-links-site-identity-copy p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 19px;
}

.fly-links-site-info {
  display: grid;
  min-width: 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0;
  border-top: 1px solid var(--line);
}

.fly-links-site-info > div {
  display: grid;
  min-width: 0;
  align-content: start;
  gap: 2px;
  padding: 11px 15px 12px;
}

.fly-links-site-info > div:nth-child(even) {
  border-left: 1px solid var(--line);
}

.fly-links-site-info > div:nth-child(n + 3) {
  border-top: 1px solid var(--line);
}

.fly-links-site-info > div:last-child:nth-child(odd) {
  grid-column: 1 / -1;
}

.fly-links-site-info dt,
.fly-links-site-info dd {
  min-width: 0;
  margin: 0;
  font-size: 13px;
  line-height: 20px;
}

.fly-links-site-info dt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  color: var(--faint);
}

.fly-links-site-info dd,
.fly-links-site-info a {
  min-width: 0;
  color: var(--text);
  overflow-wrap: anywhere;
}

.fly-links-site-info a {
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, var(--text) 26%, transparent);
  text-underline-offset: 3px;
}

.fly-links-application-rules {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 15px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.fly-links-application-rules li {
  display: grid;
  min-width: 0;
  grid-template-columns: 22px minmax(0, 1fr);
  align-items: start;
  gap: 11px;
}

.fly-links-application-rules li > span {
  position: relative;
  width: 20px;
  height: 20px;
  margin-top: 1px;
  border-radius: 50%;
  background: var(--page-alt);
}

.fly-links-application-rules li > span::before {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 8px;
  height: 5px;
  border-bottom: 1.5px solid var(--text);
  border-left: 1.5px solid var(--text);
  content: "";
  transform: rotate(-45deg);
}

.fly-links-application-rules li > div {
  display: grid;
  gap: 2px;
}

.fly-links-application-rules strong {
  color: var(--text);
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
}

.fly-links-application-rules p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 19px;
}

.fly-links-application-note {
  margin: 0;
  color: var(--faint);
  font-size: 12px;
  line-height: 19px;
}

.fly-links-application-form-heading {
  margin-bottom: 22px;
}

.fly-links-application-fields {
  display: grid;
  min-width: 0;
  gap: 20px;
}

.fly-links-application-grid {
  display: grid;
  min-width: 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.fly-links-application-field {
  display: grid;
  min-width: 0;
  align-content: start;
  gap: 7px;
}

.fly-links-application-field--full {
  grid-column: 1 / -1;
}

.fly-links-application-field > span,
.fly-links-application-captcha-heading > label {
  color: var(--text);
  font-size: 13px;
  font-weight: 550;
  line-height: 20px;
}

.fly-links-application-field em,
.fly-links-application-captcha-heading em {
  color: #c23b32;
  font-style: normal;
}

.fly-links-application-field :is(input, textarea),
.fly-links-application-captcha-row > input {
  display: block;
  width: 100%;
  min-width: 0;
  border: 1px solid var(--line);
  border-radius: 10px;
  outline: 0;
  background: var(--page-alt);
  color: var(--text);
  padding: 10px 13px;
  font: inherit;
  font-size: 14px;
  line-height: 21px;
  transition:
    border-color 150ms ease,
    box-shadow 150ms ease,
    background-color 150ms ease;
}

.fly-links-application-field input,
.fly-links-application-captcha-row > input {
  min-height: 44px;
}

.fly-links-application-field textarea {
  resize: vertical;
}

.fly-links-application-field :is(input, textarea)::placeholder,
.fly-links-application-captcha-row > input::placeholder {
  color: var(--faint);
  opacity: 1;
}

.fly-links-application-field :is(input, textarea):focus-visible,
.fly-links-application-captcha-row > input:focus-visible {
  border-color: color-mix(in srgb, var(--accent) 68%, var(--line));
  background: var(--page);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 14%, transparent);
}

.fly-links-application-field :is(input, textarea)[aria-invalid="true"],
.fly-links-application-captcha-row > input[aria-invalid="true"] {
  border-color: #c23b32;
}

.fly-links-application-optional {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 11px;
}

.fly-links-application-optional summary {
  display: flex;
  min-height: 48px;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  color: var(--text);
  padding: 11px 13px;
  cursor: pointer;
  list-style: none;
}

.fly-links-application-optional summary::-webkit-details-marker {
  display: none;
}

.fly-links-application-optional summary:focus-visible {
  outline: none;
  background: var(--page-alt);
  box-shadow: inset 0 0 0 1px
    color-mix(in srgb, var(--accent) 32%, transparent);
}

.fly-links-application-optional summary > span:first-child {
  display: flex;
  min-width: 0;
  align-items: baseline;
  gap: 8px;
}

.fly-links-application-optional summary strong {
  flex: 0 0 auto;
  font-size: 13px;
  font-weight: 550;
  line-height: 20px;
}

.fly-links-application-optional summary small {
  min-width: 0;
  overflow: hidden;
  color: var(--faint);
  font-size: 12px;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fly-links-application-optional summary .fly-iconify {
  margin-left: 0;
  transition: transform 150ms ease;
}

.fly-links-application-optional[open] summary {
  border-bottom: 1px solid var(--line);
}

.fly-links-application-optional[open] summary .fly-iconify {
  transform: rotate(180deg);
}

.fly-links-application-optional > .fly-links-application-grid {
  padding: 16px;
}

.fly-links-application-captcha {
  display: grid;
  min-width: 0;
  gap: 9px;
  border-top: 1px solid var(--line);
  padding-top: 20px;
}

.fly-links-application-captcha-heading {
  display: flex;
  min-width: 0;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.fly-links-application-captcha-heading > span {
  color: var(--faint);
  font-size: 12px;
  line-height: 18px;
}

.fly-links-application-captcha-row {
  display: grid;
  min-width: 0;
  grid-template-columns: minmax(170px, 1fr) auto;
  align-items: center;
  gap: 12px;
}

.fly-links-application-captcha-media {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 8px;
}

.fly-links-application-captcha-media img {
  display: block;
  width: 150px;
  height: 46px;
  flex: 0 0 150px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: var(--page-alt);
  object-fit: contain;
}

.fly-links-application-captcha-media img:not([src]) {
  opacity: 0.55;
}

.fly-links-application-captcha-media button {
  flex: 0 0 auto;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--muted);
  padding: 7px 5px;
  font: inherit;
  font-size: 12px;
  line-height: 19px;
}

.fly-links-application-captcha-media button:hover,
.fly-links-application-captcha-media button:focus-visible {
  color: var(--text);
}

.fly-links-application-actions {
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: space-between;
  gap: 12px 18px;
  border-top: 1px solid var(--line);
  padding-top: 20px;
}

.fly-links-application-button {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border-radius: 10px;
  padding: 9px 16px;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  transition:
    background-color 150ms ease,
    border-color 150ms ease,
    color 150ms ease,
    opacity 150ms ease;
}

.fly-links-application-button .fly-iconify {
  width: 16px;
  height: 16px;
  flex-basis: 16px;
}

.fly-links-application-button--quiet {
  border: 1px solid var(--line);
  background: transparent;
  color: var(--muted);
}

.fly-links-application-button--quiet:hover,
.fly-links-application-button--quiet:focus-visible {
  background: var(--page-alt);
  color: var(--text);
}

.fly-links-application-button--primary {
  border: 1px solid var(--accent);
  background: var(--accent);
  color: var(--accent-contrast);
}

.fly-links-application-button--primary:hover,
.fly-links-application-button--primary:focus-visible {
  color: var(--accent-contrast);
  opacity: 0.82;
}

.fly-links-application-button:disabled,
.fly-links-application-captcha-media button:disabled {
  cursor: wait;
  opacity: 0.5;
}

.fly-links-application-back-icon {
  transform: rotate(180deg);
}

.fly-links-application-submit-group {
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: flex-end;
  gap: 12px 16px;
}

.fly-links-application-status {
  min-width: 0;
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 20px;
  text-align: right;
}

.fly-links-application-status:empty {
  display: none;
}

.fly-links-application-status[data-fly-state="success"] {
  color: #237a4b;
}

.fly-links-application-status[data-fly-state="error"] {
  color: #b42318;
}

[data-theme="dark"] .fly-links-application-dialog {
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.5);
}

[data-theme="dark"] .fly-links-application-status[data-fly-state="success"] {
  color: #72d6a1;
}

[data-theme="dark"]
  .fly-links-site-copy[data-fly-link-copy-state="success"] {
  color: #72d6a1;
}

[data-theme="dark"] .fly-links-site-copy[data-fly-link-copy-state="error"] {
  color: #ff8b84;
}

[data-theme="dark"] .fly-links-application-status[data-fly-state="error"],
[data-theme="dark"] .fly-links-application-field em,
[data-theme="dark"] .fly-links-application-captcha-heading em {
  color: #ff8b84;
}

@media (max-width: 759px) {
  .fly-links-hero {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto auto auto;
    gap: 0;
    margin-top: 16px;
    margin-bottom: 44px;
  }

  .fly-links-hero-copy {
    grid-column: 1;
    grid-row: 1;
    padding: 28px 0;
  }

  .fly-links-hero-media {
    grid-column: 1;
    grid-row: 2;
  }

  .fly-links-filter {
    grid-column: 1;
    grid-row: 3;
    margin-top: 22px;
    margin-right: calc(var(--content-padding-x) * -1);
    padding: 2px var(--content-padding-x) 2px 0;
  }

  .fly-links-application-dialog {
    inset: auto 0 0;
    width: 100%;
    max-height: calc(100dvh - 12px);
    margin: 0;
    border-right: 0;
    border-bottom: 0;
    border-left: 0;
    border-radius: 20px 20px 0 0;
    transform: translateY(24px);
  }

  .fly-links-application-dialog[data-fly-step="form"] {
    width: 100%;
    height: calc(100dvh - 12px);
  }

  .fly-links-application-dialog[open][data-fly-open="true"] {
    transform: translateY(0);
  }

  .fly-links-application-header {
    padding: 20px 18px 18px 20px;
  }

  .fly-links-application-body {
    padding: 22px 20px 26px;
  }

  .fly-links-application-rules {
    grid-template-columns: minmax(0, 1fr);
  }

  .fly-links-application-shell,
  .fly-links-application-dialog[data-fly-step="form"]
    .fly-links-application-shell {
    max-height: calc(100dvh - 12px);
  }
}

@media (max-width: 539px) {
  .fly-links-hero-heading {
    align-items: center;
  }

  .fly-links-hero-heading h1 {
    font-size: 28px;
  }

  .fly-links-application-heading > p {
    padding-right: 4px;
  }

  .fly-links-application-progress {
    margin-top: 13px;
  }

  .fly-links-application-progress
    li[data-fly-link-application-progress]
    > strong {
    display: none;
  }

  .fly-links-application-progress > li[aria-hidden="true"] {
    width: 44px;
    flex-basis: 44px;
  }

  .fly-links-site-identity {
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 12px;
    padding: 14px;
  }

  .fly-links-site-logo {
    width: 48px;
    height: 48px;
    border-radius: 10px;
  }

  .fly-links-site-info {
    grid-template-columns: minmax(0, 1fr);
  }

  .fly-links-site-info > div:nth-child(even) {
    border-left: 0;
  }

  .fly-links-site-info > div:nth-child(n + 2) {
    border-top: 1px solid var(--line);
  }

  .fly-links-site-info > div:last-child:nth-child(odd) {
    grid-column: auto;
  }

  .fly-links-group-heading {
    align-items: flex-start;
  }

  .fly-links-application-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .fly-links-application-field--full {
    grid-column: auto;
  }

  .fly-links-application-field :is(input, textarea),
  .fly-links-application-captcha-row > input {
    font-size: 16px;
  }

  .fly-links-application-captcha-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 2px;
  }

  .fly-links-application-captcha-row {
    grid-template-columns: minmax(0, 1fr);
  }

  .fly-links-application-captcha-media {
    justify-content: space-between;
  }

  .fly-links-application-optional summary > span:first-child {
    align-items: flex-start;
    flex-direction: column;
    gap: 0;
  }

  .fly-links-application-panel--guide > .fly-links-application-actions {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
  }

  .fly-links-application-panel--guide
    .fly-links-application-button--primary {
    width: 100%;
  }

  .fly-links-application-panel--form > .fly-links-application-fields
    > .fly-links-application-actions {
    align-items: stretch;
    flex-direction: column-reverse;
  }

  .fly-links-application-submit-group {
    align-items: stretch;
    flex-direction: column;
  }

  .fly-links-application-submit-group
    .fly-links-application-button--primary {
    width: 100%;
  }

  .fly-links-application-status {
    text-align: left;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fly-links-application-dialog,
  .fly-links-application-trigger,
  .fly-links-application-trigger .fly-iconify,
  .fly-links-application-close,
  .fly-links-application-button,
  .fly-links-application-optional summary .fly-iconify {
    transition: none;
  }
}
`,
};
