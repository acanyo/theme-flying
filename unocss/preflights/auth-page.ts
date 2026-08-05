export const authPagePreflight = {
  getCSS: () => String.raw`
@font-face {
  font-family: "Geist";
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url("../fonts/Geist-Variable.woff2") format("woff2");
}

.fly-auth-root {
  min-width: 0;
  min-height: 100%;
  background: #ffffff;
}

.fly-auth-root[data-theme="dark"] {
  --page: #0f0f0f;
  --page-alt: #212121;
  --text: #ffffff;
  --muted: #aaaaaa;
  --faint: #808080;
  --line: rgba(255, 255, 255, 0.14);
  background: #0f0f0f;
}

.fly-auth-page {
  display: block !important;
  width: 100%;
  min-width: 0;
  min-height: 100%;
  margin: 0 !important;
  padding: 0 !important;
  overflow-x: hidden;
  background: var(--page) !important;
  color: var(--muted);
  font-family: Geist, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

.fly-auth-page .fly-auth-shell {
  --fly-auth-gap: clamp(60px, calc(53.2143px + 1.7857vw), 80px);
  display: flex;
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  align-items: stretch;
  gap: var(--fly-auth-gap);
}

.fly-auth-page .fly-auth-cover {
  position: sticky;
  top: 0;
  flex: 0 0 34%;
  width: 34%;
  height: 100vh;
  height: 100svh;
  min-width: 0;
  margin: 0;
  overflow: hidden;
  background: #1a1a1a;
}

.fly-auth-page .fly-auth-cover img {
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: cover;
}

.fly-auth-page .fly-auth-panel {
  display: flex;
  flex: 0 0 400px;
  flex-direction: column;
  width: 400px;
  max-width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  padding: var(--fly-responsive-gutter);
  gap: 16px;
}

.fly-auth-page .fly-auth-back {
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  margin-left: -16px;
  padding: 6px 16px;
  gap: 6px;
  border-radius: 20px;
  color: var(--faint);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-decoration: none;
  transition: opacity 0.15s, background-color 0.15s, color 0.15s;
}

.fly-auth-page .fly-auth-back svg {
  display: block;
  flex: 0 0 20px;
}

.fly-auth-page .fly-auth-back:hover,
.fly-auth-page .fly-auth-back:focus-visible {
  background: var(--accent-secondary-soft);
  color: var(--text);
}

.fly-auth-page .fly-auth-main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-block: auto;
  gap: 16px;
}

.fly-auth-page .fly-auth-native .alert {
  display: flex;
  min-height: 40px;
  align-items: center;
  margin: 4px 0 12px !important;
  padding: 10px 16px !important;
  border: 0 !important;
  border-radius: 20px !important;
  background: var(--accent-secondary-soft) !important;
  box-shadow: none !important;
  color: var(--text) !important;
  font-size: 13px !important;
  line-height: 20px !important;
}

.fly-auth-page .fly-auth-intro {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.fly-auth-page .fly-auth-intro h1 {
  margin: 0;
  color: var(--text);
  font-family: inherit;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.1;
}

.fly-auth-page .fly-auth-intro p {
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 24px;
}

.fly-auth-page .fly-auth-native,
.fly-auth-page .fly-auth-native > .gateway-wrapper,
.fly-auth-page .fly-auth-native .halo-form-wrapper {
  width: 100% !important;
  max-width: none !important;
}

.fly-auth-page .fly-auth-native > .gateway-wrapper {
  display: block !important;
  min-height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
}

.fly-auth-page .fly-auth-native .halo-logo,
.fly-auth-page .fly-auth-native .form-title,
.fly-auth-page .fly-auth-native .returntosite-content,
.fly-auth-page .fly-auth-native .language-switcher {
  display: none !important;
}

.fly-auth-page .fly-auth-native .halo-form-wrapper,
.fly-auth-page .fly-auth-native .halo-form {
  margin-inline: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  background: transparent !important;
}

.fly-auth-page .fly-auth-native .halo-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 0;
  margin-block: 20px !important;
  gap: 12px;
}

.fly-auth-page .fly-auth-native .form-item-group {
  display: grid !important;
  grid-template-columns: minmax(0, 1fr) !important;
  margin: 0 !important;
  gap: 12px !important;
}

.fly-auth-page .fly-auth-native .form-item {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 !important;
  gap: 6px;
}

.fly-auth-page .fly-auth-native .form-item > label,
.fly-auth-page .fly-auth-native .form-label-group > label {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.fly-auth-page .fly-auth-native .form-label-group {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}

.fly-auth-page .fly-auth-native .form-item-extra-link {
  position: absolute;
  top: 14px;
  right: 54px;
  color: var(--faint) !important;
  font-size: 12px;
  line-height: 20px;
  pointer-events: auto;
  text-decoration: none !important;
}

.fly-auth-page .fly-auth-native .form-item-extra-link:hover,
.fly-auth-page .fly-auth-native .form-item-extra-link:focus-visible,
.fly-auth-page .fly-auth-native :is(.signup-notice-content, .login-notice-content) a:hover,
.fly-auth-page .fly-auth-native :is(.signup-notice-content, .login-notice-content) a:focus-visible {
  color: var(--text) !important;
}

.fly-auth-page .fly-auth-native .form-input,
.fly-auth-page .fly-auth-native .form-input-group {
  width: 100% !important;
}

.fly-auth-page .fly-auth-native .form-input {
  height: 48px !important;
  min-height: 48px !important;
  padding: 0 !important;
  border: 0 !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
}

.fly-auth-page .fly-auth-native .form-input:focus-within {
  border: 0 !important;
  box-shadow: none !important;
}

.fly-auth-page .fly-auth-native .form-input-group {
  display: flex;
  align-items: stretch;
  gap: 18px;
}

.fly-auth-page .fly-auth-native .form-input-stack {
  position: relative;
}

.fly-auth-page .fly-auth-native .form-input-stack-icon {
  position: absolute;
  top: 50%;
  right: 18px;
  z-index: 3;
  display: grid;
  width: 24px;
  height: 24px;
  padding: 0;
  place-items: center;
  color: var(--faint);
  cursor: pointer;
  transform: translateY(-50%);
}

.fly-auth-page .fly-auth-native input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]) {
  display: block;
  width: 100% !important;
  height: 48px !important;
  min-height: 48px !important;
  margin: 0 !important;
  padding: 12px 20px !important;
  appearance: none;
  border: 0 !important;
  border-radius: 24px !important;
  outline: 0;
  background: var(--accent-secondary-soft) !important;
  box-shadow: none !important;
  color: var(--text) !important;
  font-family: inherit;
  font-size: 14px !important;
  font-weight: 500;
  line-height: 21px !important;
}

.fly-auth-page .fly-auth-native .form-input-stack input {
  padding-right: 54px !important;
}

.fly-auth-page .fly-auth-native #plainPassword {
  padding-right: 104px !important;
}

.fly-auth-page .fly-auth-native input::placeholder {
  color: var(--faint);
  opacity: 1;
}

.fly-auth-page .fly-auth-native input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):focus-visible {
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 38%, transparent) !important;
}

.fly-auth-page .fly-auth-native .form-item-compact {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 !important;
  gap: 8px;
  color: var(--muted);
  font-size: 13px;
  line-height: 20px;
}

.fly-auth-page .fly-auth-native .form-item-compact input[type="checkbox"] {
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--accent);
}

.fly-auth-page
  .fly-auth-native
  .form-item-compact:has(> #agreedToTerms) {
  display: grid;
  min-height: 0 !important;
  grid-template-columns: 16px minmax(0, 1fr);
  align-items: start;
  margin: 0 !important;
  padding: 0 !important;
  gap: 8px;
  border: 0 !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
}

.fly-auth-page .fly-auth-native #agreedToTerms {
  margin-top: 2px;
}

.fly-auth-page
  .fly-auth-native
  .form-item-compact
  > label[for="agreedToTerms"] {
  min-width: 0;
  margin: 0 !important;
  padding: 0 !important;
  color: var(--muted) !important;
  font-size: 13px !important;
  font-weight: 400 !important;
  line-height: 20px !important;
}

.fly-auth-page
  .fly-auth-native
  .form-item-compact
  > label[for="agreedToTerms"]
  a {
  color: var(--text) !important;
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, var(--text) 34%, transparent);
  text-underline-offset: 2px;
}

.fly-auth-page .fly-auth-native altcha-widget {
  display: block;
  width: 100%;
}

.fly-auth-page .fly-auth-native .halo-form button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 8px 20px;
  border: 0;
  border-radius: 24px;
  background: var(--accent-secondary-soft);
  color: var(--text);
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  transition: opacity 0.15s, background-color 0.15s, color 0.15s;
}

.fly-auth-page .fly-auth-native .halo-form > .form-item > button[type="submit"],
.fly-auth-page .fly-auth-native .fly-auth-submit-row > .form-item > button[type="submit"] {
  align-self: flex-start;
  min-width: 105px;
  padding-inline: 30px;
  background: var(--accent);
  color: var(--accent-contrast);
}

.fly-auth-page .fly-auth-native .halo-form button:hover,
.fly-auth-page .fly-auth-native .halo-form button:focus-visible {
  opacity: 0.8;
}

.fly-auth-page .fly-auth-native #emailCodeSendButton {
  flex: 0 0 auto;
  min-width: 76px;
}

.fly-auth-page .fly-auth-native .divider-wrapper {
  display: flex;
  align-items: center;
  margin: 16px 0 12px;
  gap: 12px;
  color: var(--faint);
  font-size: 12px;
  line-height: 18px;
}

.fly-auth-page .fly-auth-native .divider-wrapper hr {
  flex: 1 1 auto;
  margin: 0;
  border: 0;
  border-top: 1px solid var(--line);
}

.fly-auth-page .fly-auth-native .pill-items {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  gap: 8px;
  list-style: none;
}

.fly-auth-page .fly-auth-native .social-auth-provider-form {
  min-width: 0;
  margin: 0;
}

.fly-auth-page .fly-auth-native .pill-items > li {
  padding: 0 !important;
  border: 0 !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
}

.fly-auth-page .fly-auth-native .fly-auth-submit-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 2px;
  gap: 10px 18px;
}

.fly-auth-page .fly-auth-native .fly-auth-submit-row > .form-item {
  width: auto !important;
  flex: 0 0 auto;
}

.fly-auth-page .fly-auth-native .fly-auth-submit-row .signup-notice-content {
  width: auto;
  margin: 0 !important;
  font-size: 14px !important;
  line-height: 21px !important;
}

.fly-auth-page .fly-auth-native .fly-auth-social-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 4px;
  gap: 6px 12px;
}

.fly-auth-page .fly-auth-native .fly-auth-social-row .divider-wrapper {
  flex: 0 0 auto;
  margin: 0;
  gap: 0;
  font-size: 12px;
  line-height: 18px;
}

.fly-auth-page .fly-auth-native .fly-auth-social-row .divider-wrapper hr {
  display: none;
}

.fly-auth-page .fly-auth-native .fly-auth-social-row .pill-items {
  width: auto;
  flex: 1 1 auto;
  flex-wrap: wrap;
  gap: 8px;
}

.fly-auth-page .fly-auth-native .social-auth-provider-form button {
  position: relative;
  display: inline-flex;
  width: auto;
  min-width: 0;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  padding: 5px 2px;
  gap: 6px;
  box-sizing: border-box;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  color: var(--text);
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  transition: opacity 0.15s, transform 0.15s;
}

.fly-auth-page .fly-auth-native .social-auth-provider-form button::after {
  position: absolute;
  right: 2px;
  bottom: 4px;
  left: 2px;
  height: 1px;
  background: currentColor;
  content: "";
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.15s;
}

.fly-auth-page .fly-auth-native .social-auth-provider-form button:hover,
.fly-auth-page .fly-auth-native .social-auth-provider-form button:focus-visible {
  background: transparent;
  opacity: 0.72;
  transform: translateY(-1px);
}

.fly-auth-page .fly-auth-native .social-auth-provider-form button:hover::after,
.fly-auth-page .fly-auth-native .social-auth-provider-form button:focus-visible::after {
  transform: scaleX(1);
}

.fly-auth-page .fly-auth-native .social-auth-provider-form button:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--accent) 38%, transparent);
  outline-offset: 3px;
}

.fly-auth-page .fly-auth-native .social-auth-provider-form img {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.fly-auth-page .fly-auth-native :is(.signup-notice-content, .login-notice-content) {
  margin: 16px 0 0 !important;
  color: var(--muted) !important;
  font-size: 16px !important;
  line-height: 24px !important;
  text-align: left !important;
}

.fly-auth-page .fly-auth-native :is(.signup-notice-content, .login-notice-content) a {
  color: var(--text) !important;
  text-decoration: underline !important;
  text-underline-offset: 2px;
}

.fly-auth-page .fly-auth-native :is(.form-item-error, .field-error, .error-message) {
  margin: 2px 12px 0;
  color: #d92d20;
  font-size: 12px;
  line-height: 18px;
}

.fly-auth-page--logout .fly-auth-intro p {
  max-width: 360px;
}

.fly-auth-page--logout .fly-auth-native .halo-form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.fly-auth-page--logout .fly-auth-native .fly-auth-user-card {
  display: flex !important;
  width: 100%;
  min-height: 96px;
  align-items: center;
  margin: 0 !important;
  padding: 16px !important;
  gap: 16px;
  border: 0 !important;
  border-radius: 20px !important;
  background: var(--accent-secondary-soft) !important;
  box-shadow: none !important;
}

.fly-auth-page--logout .fly-auth-native .fly-auth-user-card img {
  width: 64px !important;
  height: 64px !important;
  flex: 0 0 64px;
  border-radius: 50%;
  object-fit: cover;
}

.fly-auth-page--logout .fly-auth-native .fly-auth-user-card :is(p, strong) {
  margin: 0;
}

.fly-auth-page--logout .fly-auth-native form[data-fly-logout-actions] {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 !important;
  gap: 10px;
}

.fly-auth-page--logout .fly-auth-native form[data-fly-logout-actions] .form-item {
  width: auto;
  flex: 0 0 auto;
}

.fly-auth-page--logout .fly-auth-native form[data-fly-logout-actions] > a {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  border-radius: 24px;
  background: var(--accent-secondary-soft);
  color: var(--text) !important;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  text-decoration: none !important;
  transition: opacity 0.15s, transform 0.15s;
}

.fly-auth-page--logout .fly-auth-native form[data-fly-logout-actions] > a:hover,
.fly-auth-page--logout .fly-auth-native form[data-fly-logout-actions] > a:focus-visible {
  opacity: 0.78;
  transform: translateY(-1px);
}

.fly-auth-page--logout .fly-auth-native .halo-form-wrapper > :empty {
  display: none !important;
}

.fly-auth-page .fly-auth-footer {
  width: 100%;
  color: var(--muted);
}

.fly-auth-page .fly-auth-footer .fly-footer-identity {
  width: 100%;
  gap: 6px;
}

.fly-auth-page .fly-auth-footer .fly-footer-copyright {
  column-gap: 3px;
  row-gap: 2px;
  font-size: 13px;
  line-height: 20px;
}

.fly-auth-page .fly-auth-footer .fly-footer-copyright-icon {
  margin-right: 1px;
}

.fly-auth-page .fly-auth-footer a {
  color: var(--text);
  text-decoration: underline;
  text-underline-offset: 2px;
}

@media (min-width: 1600px) {
  .fly-auth-page .fly-auth-cover {
    flex-basis: 38%;
    width: 38%;
  }

  .fly-auth-page .fly-auth-panel {
    flex-basis: 480px;
    width: 480px;
  }
}

@media (min-width: 768px) and (max-height: 760px) {
  .fly-auth-page .fly-auth-main-content,
  .fly-auth-page .fly-auth-intro {
    gap: 12px;
  }

  .fly-auth-page .fly-auth-native .alert {
    min-height: 36px;
    margin: 2px 0 8px !important;
    padding: 8px 14px !important;
  }

  .fly-auth-page .fly-auth-native .halo-form {
    margin-block: 14px !important;
    gap: 10px;
  }

  .fly-auth-page .fly-auth-native .form-item-group {
    gap: 10px !important;
  }

  .fly-auth-page .fly-auth-native .form-input,
  .fly-auth-page .fly-auth-native input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]) {
    height: 44px !important;
    min-height: 44px !important;
  }

  .fly-auth-page .fly-auth-native .halo-form button {
    min-height: 44px;
  }

  .fly-auth-page .fly-auth-native .divider-wrapper {
    margin: 10px 0 8px;
  }

  .fly-auth-page .fly-auth-native :is(.signup-notice-content, .login-notice-content) {
    margin-top: 10px !important;
  }
}

@media (max-width: 767px) {
  .fly-auth-page .fly-auth-shell {
    --fly-auth-mobile-cover-height: clamp(240px, 35.5svh, 360px);
    flex-wrap: wrap;
    align-content: stretch;
  }

  .fly-auth-page .fly-auth-cover {
    position: relative;
    flex-basis: 100%;
    width: 100%;
    height: var(--fly-auth-mobile-cover-height);
  }

  .fly-auth-page .fly-auth-cover img {
    aspect-ratio: 16 / 9;
  }

  .fly-auth-page .fly-auth-panel {
    flex: 1 0 100%;
    width: 100%;
    min-height: calc(100svh - var(--fly-auth-mobile-cover-height) - var(--fly-auth-gap));
    margin-inline: auto;
    padding:
      16px max(16px, env(safe-area-inset-right))
      max(16px, env(safe-area-inset-bottom))
      max(16px, env(safe-area-inset-left));
  }

  .fly-auth-page .fly-auth-back {
    margin-top: calc(var(--fly-auth-gap) * -1);
    margin-bottom: 40px;
    margin-left: -16px;
  }

  .fly-auth-page .fly-auth-main-content {
    margin-block: 0;
  }

  .fly-auth-page .fly-auth-native input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]) {
    padding-block: 10px !important;
    font-size: 1.025rem !important;
    line-height: 1.5 !important;
  }

  .fly-auth-page .fly-auth-native .halo-form > .form-item > button[type="submit"],
  .fly-auth-page .fly-auth-native .fly-auth-submit-row > .form-item > button[type="submit"] {
    width: 100%;
  }

  .fly-auth-page .fly-auth-native .fly-auth-submit-row > .form-item,
  .fly-auth-page .fly-auth-native .fly-auth-submit-row .signup-notice-content {
    width: 100% !important;
    flex-basis: 100%;
  }

  .fly-auth-page .fly-auth-native .fly-auth-social-row {
    align-items: flex-start;
    flex-direction: column;
  }

  .fly-auth-page .fly-auth-footer {
    margin-top: 40px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fly-auth-page .fly-auth-back,
  .fly-auth-page .fly-auth-native button {
    transition-duration: 0.01ms !important;
  }
}
`,
};
