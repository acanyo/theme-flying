export const cardPreflight = {
  getCSS: () => String.raw`
.fly-card-hit {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.fly-post-chip {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  border-radius: var(--radius-control);
  background: var(--page-alt);
  color: var(--text);
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1;
}

.fly-post-chip--glass {
  margin-bottom: 12px;
  background: rgba(0, 0, 0, 0.46);
  color: #fff;
  backdrop-filter: blur(8px);
}

.fly-post-meta {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
  color: var(--muted);
  font-size: 13px;
}

.fly-post-meta--light {
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.24);
  color: rgba(255, 255, 255, 0.86);
}

.fly-author-pill {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

.fly-author-pill > img {
  width: 28px;
  height: 28px;
  flex: 0 0 28px;
  border-radius: 50%;
  object-fit: cover;
}

.fly-author-pill > span,
.fly-author-pill > a > span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fly-author-pill > .fly-author-name-link {
  min-width: 0;
}

.fly-dot {
  width: 3px;
  height: 3px;
  flex: 0 0 3px;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.7;
}
`,
};
