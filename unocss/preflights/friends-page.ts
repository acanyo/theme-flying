export const friendsPagePreflight = {
  getCSS: () => String.raw`
.fly-taxonomy-detail.fly-friends-detail {
  width: 100%;
  min-width: 0;
  padding-bottom: var(--content-padding-x);
}

.fly-friends-hero {
  margin-top: 16px;
}

.fly-friends-hero-copy {
  gap: 16px;
}

.fly-friends-feed-section {
  --fly-taxonomy-grid-columns: 1;

  display: grid;
  min-width: 0;
  gap: 24px;
}

.fly-friends-feed-heading {
  align-items: flex-end;
}

.fly-friends-feed-heading p {
  margin-top: 7px;
  color: var(--muted);
  font-size: 14px;
  line-height: 21px;
}

.fly-friends-feed-grid {
  min-width: 0;
}

.fly-taxonomy-detail .fly-article-grid--classic.fly-friends-feed-grid {
  gap: 20px;
}

.fly-friend-feed-card {
  position: relative;
  display: block;
  height: 100%;
  min-height: 244px;
  min-width: 0;
  overflow: hidden;
  border-radius: 14px;
  background:
    linear-gradient(
      135deg,
      color-mix(in srgb, var(--accent-secondary-soft) 72%, transparent),
      transparent 48%
    ),
    var(--page-alt);
  box-shadow: inset 0 0 0 1px
    color-mix(in srgb, var(--text) 7%, transparent);
  isolation: isolate;
  transition:
    background-color 180ms ease,
    box-shadow 220ms ease,
    transform 360ms cubic-bezier(0.2, 1, 0.2, 1);
}

.fly-friend-feed-card::after {
  position: absolute;
  right: 22px;
  bottom: 0;
  left: 22px;
  height: 2px;
  background: var(--text);
  content: "";
  opacity: 0.72;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 360ms cubic-bezier(0.2, 1, 0.2, 1);
}

.fly-friend-feed-logo {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  overflow: hidden;
  border-radius: 14px;
  background: var(--page);
  box-shadow:
    inset 0 0 0 1px color-mix(in srgb, var(--text) 7%, transparent),
    0 14px 30px -22px rgba(0, 0, 0, 0.7);
  transition: transform 360ms cubic-bezier(0.2, 1, 0.2, 1);
}

.fly-friend-feed-logo:focus-visible,
.fly-friend-feed-source-name:focus-visible,
.fly-friend-feed-title a:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.fly-friend-feed-logo-fallback {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--page);
}

.fly-friend-feed-logo-image {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: var(--page);
  object-fit: contain;
  padding: 7px;
}

.fly-friend-feed-logo-image[hidden] {
  display: none;
}

.fly-friend-feed-content {
  display: flex;
  min-width: 0;
  flex-direction: column;
  padding: 20px 22px 22px;
}

.fly-friend-feed-source {
  display: grid;
  min-height: 48px;
  min-width: 0;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
  padding-left: 62px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
}

.fly-friend-feed-source-name {
  overflow: hidden;
  color: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fly-friend-feed-source time {
  flex: none;
  white-space: nowrap;
}

.fly-friend-feed-title {
  display: -webkit-box;
  margin: 24px 0 0;
  overflow: hidden;
  color: var(--text);
  font-size: 21px;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 26px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.fly-friend-feed-title a {
  transition: opacity 180ms ease;
}

.fly-friend-feed-summary {
  display: -webkit-box;
  margin: 12px 0 0;
  overflow: hidden;
  color: var(--muted);
  font-size: 14px;
  line-height: 21px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.fly-friend-feed-card:hover,
.fly-friend-feed-card:focus-within {
  background: var(--hover-bg-color);
  box-shadow:
    inset 0 0 0 1px color-mix(in srgb, var(--text) 5%, transparent),
    0 22px 44px -34px rgba(0, 0, 0, 0.55);
  transform: translateY(-3px);
}

.fly-friend-feed-card:hover .fly-friend-feed-title a,
.fly-friend-feed-card:focus-within .fly-friend-feed-title a {
  opacity: 0.68;
}

.fly-friend-feed-card:hover::after,
.fly-friend-feed-card:focus-within::after {
  transform: scaleX(1);
}

.fly-friend-feed-card:hover .fly-friend-feed-logo,
.fly-friend-feed-card:focus-within .fly-friend-feed-logo {
  transform: translateY(-2px) scale(1.03);
}

.fly-friends-feed-section .fly-load-more-wrap {
  text-align: center;
}

.fly-friends-feed-section .fly-load-more {
  cursor: pointer;
}

.fly-friends-feed-section .fly-load-more:disabled {
  pointer-events: none;
}

@media (max-width: 539px) {
  .fly-friends-hero {
    margin-top: 16px;
  }

  .fly-friends-feed-heading {
    align-items: flex-start;
  }

  .fly-taxonomy-detail .fly-article-grid--classic.fly-friends-feed-grid {
    gap: 16px;
  }

  .fly-friend-feed-card {
    min-height: 220px;
  }

  .fly-friend-feed-logo {
    top: 17px;
    left: 16px;
    width: 44px;
    height: 44px;
    border-radius: 13px;
  }

  .fly-friend-feed-content {
    padding: 17px 16px 18px;
  }

  .fly-friend-feed-source {
    min-height: 44px;
    padding-left: 56px;
  }

  .fly-friend-feed-title {
    margin-top: 22px;
    font-size: 19px;
    line-height: 24px;
  }

  .fly-friend-feed-summary {
    margin-top: 10px;
    -webkit-line-clamp: 3;
  }
}

@media (min-width: 700px) {
  .fly-friends-feed-section {
    --fly-taxonomy-grid-columns: 2;
  }
}

@media (min-width: 992px) {
  .fly-friends-feed-section {
    --fly-taxonomy-grid-columns: 3;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fly-friend-feed-card,
  .fly-friend-feed-logo,
  .fly-friend-feed-title a,
  .fly-friend-feed-card::after {
    transition: none;
  }

  .fly-friend-feed-card:hover,
  .fly-friend-feed-card:focus-within {
    transform: none;
  }

  .fly-friend-feed-card:hover .fly-friend-feed-logo,
  .fly-friend-feed-card:focus-within .fly-friend-feed-logo {
    transform: none;
  }
}
`,
};
