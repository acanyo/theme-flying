export const homeNewsletterPreflight = {
  getCSS: () => String.raw`
.fly-newsletter-panel {
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin: 0 0 var(--section-gap);
  border-radius: var(--radius-section);
  background: var(--page-alt);
  padding: 30px;
}

.fly-newsletter-panel > div {
  width: 100%;
  max-width: 40%;
}

.fly-newsletter-panel h2 {
  margin: 0;
  color: var(--text);
  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
}

.fly-newsletter-panel > div > p {
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.5;
}

.fly-newsletter-form {
  position: relative;
  width: min(100%, 400px);
  flex: 1 0 0%;
}

.fly-newsletter-form label {
  display: block;
}

.fly-newsletter-form input {
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 32px;
  outline: 0;
  background: var(--page);
  color: var(--text);
  padding: 12px 128px 12px 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
}

.fly-newsletter-form input:focus {
  box-shadow: 0 0 0 2px var(--text);
}

.fly-newsletter-form .fly-button {
  position: absolute;
  top: 5px;
  right: 5px;
  min-height: 40px;
  border-radius: 32px;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 600;
}

.fly-newsletter-status {
  position: absolute;
  top: calc(100% + 6px);
  left: 20px;
  margin: 0;
  color: var(--muted);
  font-size: 12px;
}

.fly-newsletter-status[data-fly-state="error"] {
  color: #c34d4d;
}

.fly-newsletter-status[data-fly-state="success"] {
  color: #348f3f;
}

@media (max-width: 767px) {
  .fly-newsletter-panel {
    align-items: stretch;
    flex-direction: column;
  }

  .fly-newsletter-panel > div {
    max-width: 400px;
  }

  .fly-newsletter-form {
    width: 100%;
    flex: 0 0 auto;
  }
}

@media (max-width: 439px) {
  .fly-newsletter-panel {
    padding: 20px;
  }

  .fly-newsletter-form {
    display: grid;
    gap: 8px;
  }

  .fly-newsletter-form input {
    height: 48px;
    padding-right: 20px;
  }

  .fly-newsletter-form .fly-button {
    position: static;
    width: 100%;
  }

  .fly-newsletter-status {
    position: static;
    min-height: 16px;
    padding-left: 4px;
  }
}
`,
};
