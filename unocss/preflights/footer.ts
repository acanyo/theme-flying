export const footerPreflight = {
  getCSS: () => String.raw`
.fly-site-footer {
  border-top: 0;
}

.fly-copyright {
  margin: 0;
  color: var(--faint);
  font-size: 12px;
}

@media (max-width: 539px) {
  .fly-footer-shell {
    align-items: flex-start;
    flex-direction: column;
  }
}
`,
};
