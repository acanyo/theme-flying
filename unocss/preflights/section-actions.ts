export const sectionActionsPreflight = {
  getCSS: () => String.raw`
.fly-section-view-link {
  display: inline-flex;
  min-height: 32px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 0;
  border-radius: 20px;
  background: var(--hover-bg-color);
  box-shadow: none;
  color: var(--text);
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  opacity: 1;
}

.fly-section-view-link:hover,
.fly-section-view-link:focus-visible {
  background: var(--hover-bg-color);
  color: var(--text);
  opacity: 1;
}

.fly-section-view-link .fly-iconify--arrow-forward {
  width: 20px;
  height: 20px;
  flex-basis: 20px;
}
`,
};
