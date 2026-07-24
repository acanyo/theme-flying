export const postLightboxPreflight = {
  getCSS: () => String.raw`
body.fly-post .fly-post-page-content img[data-fly-lightbox-source] {
  cursor: url("../images/zoom-in.cur") 15 15, zoom-in;
}

body[data-fly-lightbox-open="true"] {
  overflow: hidden;
}

.fly-post-lightbox {
  position: fixed;
  inset: 0;
  z-index: 4000000;
  width: calc(100% - var(--fly-lightbox-scrollbar-width, 0px));
  max-width: none;
  height: 100%;
  max-height: none;
  margin: 0;
  border: 0;
  background: #fff;
  color: #000;
  opacity: 0;
  padding: 0;
  overflow: hidden;
  transform: scale(0.998);
  visibility: hidden;
  transition:
    opacity 0.33s cubic-bezier(0.16, 1, 0.3, 1),
    visibility 0.33s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.33s cubic-bezier(0.16, 1, 0.3, 1);
}

.fly-post-lightbox[open][data-fly-open="true"] {
  opacity: 1;
  transform: scale(1);
  visibility: visible;
}

.fly-post-lightbox::backdrop {
  background: #fff;
  opacity: 0;
  transition: opacity 0.33s cubic-bezier(0.16, 1, 0.3, 1);
}

.fly-post-lightbox[data-fly-open="true"]::backdrop {
  opacity: 1;
}

.fly-post-lightbox-shell,
.fly-post-lightbox-stage {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.fly-post-lightbox-shell {
  background: #fff;
}

.fly-post-lightbox-stage {
  z-index: 1;
  touch-action: none;
}

.fly-post-lightbox-stage img {
  --fly-lightbox-scale: 1;
  --fly-lightbox-pan-x: 0px;
  --fly-lightbox-pan-y: 0px;
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  cursor: zoom-out;
  object-fit: contain;
  opacity: 1;
  transform: translate(-50%, -50%)
    translate3d(
      var(--fly-lightbox-pan-x),
      var(--fly-lightbox-pan-y),
      0
    )
    scale(var(--fly-lightbox-scale));
  transform-origin: center;
  transition:
    opacity 0.33s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.33s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
  -webkit-user-drag: none;
}

.fly-post-lightbox[data-fly-image-changing="true"]
  .fly-post-lightbox-stage
  img {
  opacity: 0;
}

.fly-post-lightbox[data-fly-dragging="true"] .fly-post-lightbox-stage img {
  cursor: grabbing;
  transition: none;
}

.fly-post-lightbox-control {
  position: absolute;
  z-index: 3;
  display: grid;
  width: 40px;
  height: 40px;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: rgba(218, 218, 218, 0.5);
  color: #000;
  padding: 0;
  opacity: 1;
  visibility: visible;
  transition:
    opacity 0.5s cubic-bezier(0.32, 0.72, 0, 1),
    visibility 0.5s cubic-bezier(0.32, 0.72, 0, 1),
    transform 0.5s cubic-bezier(0.32, 0.72, 0, 1),
    background-color 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.fly-post-lightbox-control:hover,
.fly-post-lightbox-control:focus-visible {
  background: rgba(218, 218, 218, 0.95);
}

.fly-post-lightbox-control:focus-visible {
  outline: 2px solid #000;
  outline-offset: 2px;
}

.fly-post-lightbox-control .fly-iconify {
  width: 20px;
  height: 20px;
  flex-basis: 20px;
}

.fly-post-lightbox-close {
  top: 12px;
  right: 12px;
}

.fly-post-lightbox-zoom {
  top: 12px;
  right: 64px;
}

.fly-post-lightbox-zoom:disabled {
  cursor: default;
  opacity: 1;
}

.fly-post-lightbox-zoom-icon {
  display: block;
  width: 20px;
  height: 20px;
  flex-basis: 20px;
}

.fly-post-lightbox-zoom-icon--out {
  display: none;
}

.fly-post-lightbox[data-fly-zoomed="true"] .fly-post-lightbox-zoom-icon--in {
  display: none;
}

.fly-post-lightbox[data-fly-zoomed="true"] .fly-post-lightbox-zoom-icon--out {
  display: block;
}

.fly-post-lightbox-chevron {
  display: block;
  width: 9px;
  height: 9px;
  border-top: 1.5px solid currentColor;
  border-right: 1.5px solid currentColor;
}

.fly-post-lightbox-arrow {
  top: 50%;
  transform: translateY(-50%);
}

.fly-post-lightbox-arrow--prev {
  left: 12px;
}

.fly-post-lightbox-arrow--prev .fly-post-lightbox-chevron {
  transform: rotate(-135deg);
}

.fly-post-lightbox-arrow--next .fly-post-lightbox-chevron {
  transform: rotate(45deg);
}

.fly-post-lightbox-arrow--next {
  right: 12px;
}

.fly-post-lightbox-arrow--prev:disabled {
  opacity: 0;
  pointer-events: none;
  transform: translateY(-50%) translateX(-20px);
  visibility: visible;
}

.fly-post-lightbox-arrow--next:disabled {
  opacity: 0;
  pointer-events: none;
  transform: translateY(-50%) translateX(20px);
  visibility: visible;
}

.fly-post-lightbox-counter {
  position: absolute;
  bottom: 12px;
  left: 50%;
  z-index: 3;
  border-radius: 32px;
  background: rgba(218, 218, 218, 0.5);
  color: #000;
  padding: 6.4px 12.8px;
  font-size: 12.8px;
  font-variant-numeric: tabular-nums;
  font-weight: 500;
  line-height: normal;
  opacity: 1;
  transform: translateX(-50%);
  visibility: visible;
  transition:
    opacity 0.5s cubic-bezier(0.32, 0.72, 0, 1),
    visibility 0.5s cubic-bezier(0.32, 0.72, 0, 1),
    transform 0.5s cubic-bezier(0.32, 0.72, 0, 1),
    background-color 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.fly-post-lightbox:not([data-fly-open="true"]) .fly-post-lightbox-close,
.fly-post-lightbox:not([data-fly-open="true"]) .fly-post-lightbox-zoom {
  opacity: 0;
  transform: translateY(-20px);
  visibility: hidden;
}

.fly-post-lightbox:not([data-fly-open="true"])
  .fly-post-lightbox-arrow--prev {
  opacity: 0;
  transform: translateY(-50%) translateX(-20px);
  visibility: hidden;
}

.fly-post-lightbox:not([data-fly-open="true"])
  .fly-post-lightbox-arrow--next {
  opacity: 0;
  transform: translateY(-50%) translateX(20px);
  visibility: hidden;
}

.fly-post-lightbox:not([data-fly-open="true"]) .fly-post-lightbox-counter {
  opacity: 0;
  transform: translate(-50%, 20px);
  visibility: hidden;
}

@media (prefers-reduced-motion: reduce) {
  .fly-post-lightbox,
  .fly-post-lightbox::backdrop,
  .fly-post-lightbox-stage img,
  .fly-post-lightbox-control,
  .fly-post-lightbox-counter {
    transition: none;
  }
}
`,
};
