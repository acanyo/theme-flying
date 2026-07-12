export const homeFriendsPreflight = {
  getCSS: () => String.raw`
.fly-friends-section {
  min-width: 0;
  margin-bottom: var(--section-gap);
}

.fly-friends-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--content-padding-x);
}

.fly-friend-card {
  position: relative;
  display: flex;
  min-width: 0;
  min-height: 142px;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 14px;
  background: var(--page-alt);
  padding: 20px 20px 16px;
  transition: background-color 200ms ease;
}

.fly-friend-card:hover,
.fly-friend-card:focus-within {
  background: var(--hover-bg-color);
}

.fly-friend-card > a {
  position: absolute;
  inset: 0;
  z-index: 2;
  border-radius: inherit;
}

.fly-friend-card img {
  width: 28px;
  height: 28px;
  margin-bottom: auto;
  border-radius: 6px;
  object-fit: contain;
}

.fly-friend-card h3 {
  margin: 20px 0 0;
  color: var(--text);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
}

.fly-friend-card p {
  display: -webkit-box;
  margin: 8px 0 0;
  overflow: hidden;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

@media (min-width: 440px) {
  .fly-friends-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .fly-friends-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 992px) {
  .fly-friends-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (min-width: 1200px) {
  body[data-fly-sidebar-collapsed="true"] .fly-friends-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

@media (min-width: 1575px) {
  .fly-friends-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  body[data-fly-sidebar-collapsed="true"] .fly-friends-grid {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}
`,
};
