export const postCoverMediaPreflight = {
  getCSS: () => String.raw`
.fly-post-cover-media {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fly-post-cover-media--video {
  background: var(--page-alt);
}

.fly-post-cover-media--video[hidden] {
  display: none;
}

.fly-post-video-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 6;
  display: inline-flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: rgba(5, 5, 5, 0.7);
  color: #fff;
}

.fly-post-video-badge > .fly-iconify {
  width: 14px;
  height: 14px;
  flex-basis: 14px;
}

.fly-post-video-tooltip[popover] {
  position: fixed;
  inset: auto;
  top: var(--fly-post-video-tooltip-top, 0);
  left: var(--fly-post-video-tooltip-left, 0);
  z-index: 100;
  width: max-content;
  max-width: calc(100vw - 24px);
  margin: 0;
  overflow: visible;
  border: 0;
  border-radius: 4px;
  background: #333;
  color: #fff;
  padding: 6px 9px;
  box-shadow: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, 4px);
  transition: opacity 120ms ease, transform 120ms ease;
}

.fly-post-video-tooltip[popover]::after {
  position: absolute;
  top: auto;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0;
  border-color: #333 transparent transparent;
  content: "";
  transform: translateX(-50%);
}

.fly-post-video-tooltip[popover][data-fly-placement="bottom"]::after {
  top: -5px;
  bottom: auto;
  border-width: 0 5px 5px;
  border-color: transparent transparent #333;
}

.fly-post-video-tooltip[popover]:popover-open {
  opacity: 1;
  transform: translate(-50%, 0);
}

@media (prefers-reduced-motion: reduce) {
  .fly-post-video-tooltip[popover] {
    transition: none;
  }
}
`,
};
