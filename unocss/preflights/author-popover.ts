export const authorPopoverPreflight = {
  getCSS: () => String.raw`
.fly-author-popover-trigger {
  position: relative;
  display: block;
  width: 28px;
  height: 28px;
  flex: 0 0 28px;
}

.fly-author-popover-anchor {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
  background: var(--page-alt);
}

.fly-author-popover-trigger:hover .fly-author-popover-anchor,
.fly-author-popover-trigger:focus-within .fly-author-popover-anchor {
  z-index: 2;
}

.fly-author-popover-anchor img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fly-author-popover-trigger--named,
.fly-author-popover-trigger--name-only {
  display: flex;
  min-width: 0;
  width: auto;
  max-width: 100%;
  flex: 0 1 auto;
}

.fly-author-popover-trigger--named .fly-author-popover-anchor,
.fly-author-popover-trigger--name-only .fly-author-popover-anchor {
  display: flex;
  min-width: 0;
  width: auto;
  max-width: 100%;
  align-items: center;
  gap: 8px;
  overflow: visible;
  border-radius: 0;
  background: transparent;
}

.fly-author-popover-trigger--name-only {
  display: inline-flex;
  height: auto;
}

.fly-author-popover-trigger--name-only .fly-author-popover-anchor {
  height: auto;
  color: inherit;
}

.fly-author-popover-trigger--named .fly-author-popover-anchor img {
  width: 28px;
  height: 28px;
  flex: 0 0 28px;
  border-radius: 50%;
}

.fly-author-popover-label {
  min-width: 0;
  overflow: hidden;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fly-author-popover {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  z-index: 20;
  width: min(200px, calc(100vw - 32px));
  max-height: calc(100vh - 32px);
  visibility: hidden;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: var(--page);
  box-shadow: none;
  color: var(--text);
  opacity: 0;
  overflow-y: auto;
  padding: 20px;
  pointer-events: none;
  text-align: left;
  text-shadow: none;
  transform: translateY(6px);
  transition:
    opacity 180ms ease,
    transform 180ms ease,
    visibility 180ms ease;
}

.fly-author-popover[popover] {
  position: fixed;
  inset: auto;
  top: var(--fly-author-popover-top, 0);
  left: var(--fly-author-popover-left, 0);
  margin: 0;
}

.fly-author-popover::before {
  position: absolute;
  right: 0;
  bottom: 100%;
  left: 0;
  height: 12px;
  content: "";
}

.fly-author-popover:popover-open {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

@starting-style {
  .fly-author-popover:popover-open {
    opacity: 0;
    transform: translateY(6px);
  }
}

.fly-author-popover-avatar {
  display: block;
  width: 46px;
  height: 46px;
  overflow: hidden;
  border-radius: 50%;
  background: var(--page-alt);
}

.fly-author-popover-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fly-author-popover-name {
  display: block;
  width: fit-content;
  margin-top: 16px;
  color: var(--text);
  font-size: 18px;
  font-weight: 650;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.fly-author-popover-name:hover,
.fly-author-popover-name:focus-visible {
  color: var(--accent);
}

.fly-author-popover-bio {
  display: -webkit-box;
  margin: 12px 0 0;
  overflow: hidden;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.fly-author-popover-contacts {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
}

.fly-author-popover-contacts > li {
  display: flex;
}

.fly-author-popover-contacts .fly-author-contact-action {
  position: relative;
  display: inline-flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 9px;
  background: var(--hover-bg-color);
  color: var(--text);
  padding: 0;
  transition:
    background-color 160ms ease,
    color 160ms ease,
    transform 160ms ease;
}

.fly-author-popover-contacts .fly-author-contact-action:hover,
.fly-author-popover-contacts .fly-author-contact-action:focus-visible {
  background: var(--accent);
  color: var(--page);
  transform: translateY(-2px);
}

.fly-author-popover-contacts button.fly-author-contact-action::after {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  visibility: hidden;
  border-radius: 6px;
  background: var(--text);
  color: var(--page);
  content: "已复制";
  font-size: 12px;
  line-height: 1;
  opacity: 0;
  padding: 7px 9px;
  pointer-events: none;
  transform: translate(-50%, 4px);
  transition:
    opacity 140ms ease,
    transform 140ms ease,
    visibility 140ms ease;
  white-space: nowrap;
}

.fly-author-popover-contacts
  button.fly-author-contact-action[data-fly-contact-copied="true"]::after {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, 0);
}

.fly-author-popover-contacts .fly-iconify {
  width: 16px;
  height: 16px;
  flex-basis: 16px;
}

.fly-author-popover-contacts .fly-author-contact-label {
  display: none;
}

@media (prefers-reduced-motion: reduce) {
  .fly-author-popover,
  .fly-author-popover-contacts .fly-author-contact-action {
    transition-duration: 1ms;
  }
}
`,
};
