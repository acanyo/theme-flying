const IMAGE_FILE_PATTERN = /\.(?:avif|bmp|gif|jpe?g|png|svg|webp)(?:$|[?#])/i;
const ROOT_TRANSITION_MS = 330;
const SWIPE_THRESHOLD = 48;
const DRAG_THRESHOLD = 4;

function isEligibleImage(image) {
  return !image.matches(
    ".emoji, .emoji-img, [role='presentation'], [data-fly-no-lightbox]",
  );
}

function getFullImageSource(image) {
  const link = image.closest("a[href]");
  const linkHref = link?.href || "";
  if (IMAGE_FILE_PATTERN.test(linkHref)) return linkHref;

  return image.currentSrc || image.src;
}

function createImageEntries(content) {
  return Array.from(content.querySelectorAll("img"))
    .filter(isEligibleImage)
    .map((image) => ({
      image,
      source: getFullImageSource(image),
      alt: image.getAttribute("alt")?.trim() || "文章图片",
    }))
    .filter((entry) => entry.source);
}

export function setupPostLightbox(page, signal) {
  const content = page.querySelector("[data-fly-post-content]");
  const dialog = page.querySelector("[data-fly-post-lightbox]");
  const preview = dialog?.querySelector("[data-fly-post-lightbox-image]");
  const counter = dialog?.querySelector("[data-fly-post-lightbox-counter]");
  const stage = dialog?.querySelector("[data-fly-post-lightbox-stage]");
  const closeButton = dialog?.querySelector("[data-fly-post-lightbox-close]");
  const zoomButton = dialog?.querySelector("[data-fly-post-lightbox-zoom]");
  const prevButton = dialog?.querySelector("[data-fly-post-lightbox-prev]");
  const nextButton = dialog?.querySelector("[data-fly-post-lightbox-next]");

  if (
    !content ||
    !dialog ||
    !preview ||
    !counter ||
    !stage ||
    !closeButton ||
    !zoomButton ||
    !prevButton ||
    !nextButton
  ) {
    return;
  }

  const entries = createImageEntries(content);
  if (entries.length === 0) return;

  let currentIndex = 0;
  let opener = null;
  let closeTimer = 0;
  let renderToken = 0;
  let gesture = null;
  let zoomed = false;
  let zoomScale = 1;
  let scale = 1;
  let panX = 0;
  let panY = 0;
  let suppressStageClickUntil = 0;

  function applyView() {
    preview.style.setProperty("--fly-lightbox-scale", String(scale));
    preview.style.setProperty("--fly-lightbox-pan-x", panX + "px");
    preview.style.setProperty("--fly-lightbox-pan-y", panY + "px");
  }

  function setZoomButtonState() {
    dialog.dataset.flyZoomed = String(zoomed);
    zoomButton.setAttribute("aria-pressed", String(zoomed));
    zoomButton.setAttribute("aria-label", zoomed ? "缩小图片" : "放大图片");
  }

  function clampPan(nextX, nextY) {
    const maxX = Math.max(
      0,
      (preview.clientWidth * scale - stage.clientWidth) / 2,
    );
    const maxY = Math.max(
      0,
      (preview.clientHeight * scale - stage.clientHeight) / 2,
    );
    panX = Math.min(maxX, Math.max(-maxX, nextX));
    panY = Math.min(maxY, Math.max(-maxY, nextY));
    applyView();
  }

  function resetView() {
    zoomed = false;
    scale = 1;
    panX = 0;
    panY = 0;
    delete dialog.dataset.flyDragging;
    setZoomButtonState();
    applyView();
  }

  function updateZoomAvailability() {
    const fittedWidth = preview.clientWidth;
    const fittedHeight = preview.clientHeight;
    const naturalWidth = preview.naturalWidth;
    const naturalHeight = preview.naturalHeight;

    if (!fittedWidth || !fittedHeight || !naturalWidth || !naturalHeight) {
      zoomScale = 1;
      zoomButton.disabled = true;
      return;
    }

    zoomScale = Math.max(
      1,
      Math.min(3, naturalWidth / fittedWidth, naturalHeight / fittedHeight),
    );
    zoomButton.disabled = zoomScale <= 1.01;
  }

  function toggleZoom() {
    if (zoomButton.disabled) return;
    if (zoomed) {
      resetView();
      return;
    }

    zoomed = true;
    scale = zoomScale;
    panX = 0;
    panY = 0;
    setZoomButtonState();
    applyView();
  }

  function updateControls() {
    const hasMultipleImages = entries.length > 1;
    prevButton.disabled = !hasMultipleImages || currentIndex === 0;
    nextButton.disabled =
      !hasMultipleImages || currentIndex === entries.length - 1;
    counter.textContent = `${currentIndex + 1} / ${entries.length}`;
  }

  async function renderImage(index, animate = true) {
    const entry = entries[index];
    if (!entry) return;

    currentIndex = index;
    renderToken += 1;
    const token = renderToken;
    resetView();
    zoomButton.disabled = true;
    dialog.dataset.flyImageChanging = String(animate);
    preview.src = entry.source;
    preview.alt = entry.alt;
    updateControls();

    try {
      await preview.decode();
    } catch {
      // The image element still reports loading failures through its native UI.
    }

    if (token !== renderToken) return;
    requestAnimationFrame(() => {
      if (token !== renderToken) return;
      updateZoomAvailability();
      dialog.dataset.flyImageChanging = "false";
    });
  }

  function finishClose() {
    window.clearTimeout(closeTimer);
    closeTimer = 0;
    dialog.dataset.flyOpen = "false";
    dialog.dataset.flyImageChanging = "false";
    resetView();
    if (dialog.open) dialog.close();
    dialog.style.removeProperty("--fly-lightbox-scrollbar-width");
    delete document.body.dataset.flyLightboxOpen;
    if (opener?.isConnected) opener.focus({ preventScroll: true });
    opener = null;
  }

  function closeLightbox() {
    if (!dialog.open || closeTimer) return;
    dialog.dataset.flyOpen = "false";
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      finishClose();
      return;
    }
    closeTimer = window.setTimeout(finishClose, ROOT_TRANSITION_MS);
  }

  function openLightbox(index, sourceImage) {
    window.clearTimeout(closeTimer);
    closeTimer = 0;
    opener = sourceImage;
    const scrollbarWidth = Math.max(
      0,
      window.innerWidth - document.documentElement.clientWidth,
    );
    dialog.style.setProperty(
      "--fly-lightbox-scrollbar-width",
      scrollbarWidth + "px",
    );
    void renderImage(index, false);

    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    document.body.dataset.flyLightboxOpen = "true";

    requestAnimationFrame(() => {
      dialog.dataset.flyOpen = "true";
      closeButton.focus({ preventScroll: true });
    });
  }

  function showPrevious() {
    if (currentIndex > 0) void renderImage(currentIndex - 1);
  }

  function showNext() {
    if (currentIndex < entries.length - 1) void renderImage(currentIndex + 1);
  }

  entries.forEach((entry, index) => {
    const { image } = entry;
    const previousTabIndex = image.getAttribute("tabindex");
    const previousRole = image.getAttribute("role");
    const previousAriaLabel = image.getAttribute("aria-label");

    image.dataset.flyLightboxSource = "true";
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", `查看大图：${entry.alt}`);

    image.addEventListener(
      "click",
      (event) => {
        event.preventDefault();
        event.stopPropagation();
        openLightbox(index, image);
      },
      { signal },
    );
    image.addEventListener(
      "keydown",
      (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        openLightbox(index, image);
      },
      { signal },
    );

    signal.addEventListener(
      "abort",
      () => {
        delete image.dataset.flyLightboxSource;
        if (previousTabIndex == null) image.removeAttribute("tabindex");
        else image.setAttribute("tabindex", previousTabIndex);
        if (previousRole == null) image.removeAttribute("role");
        else image.setAttribute("role", previousRole);
        if (previousAriaLabel == null) image.removeAttribute("aria-label");
        else image.setAttribute("aria-label", previousAriaLabel);
      },
      { once: true },
    );
  });

  closeButton.addEventListener("click", closeLightbox, { signal });
  zoomButton.addEventListener("click", toggleZoom, { signal });
  prevButton.addEventListener("click", showPrevious, { signal });
  nextButton.addEventListener("click", showNext, { signal });

  stage.addEventListener(
    "click",
    (event) => {
      if (performance.now() < suppressStageClickUntil) return;
      if (event.target === stage || event.target === preview) closeLightbox();
    },
    { signal },
  );
  dialog.addEventListener(
    "cancel",
    (event) => {
      event.preventDefault();
      closeLightbox();
    },
    { signal },
  );
  dialog.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
      if (event.key === "Home") {
        event.preventDefault();
        void renderImage(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        void renderImage(entries.length - 1);
      }
    },
    { signal },
  );

  stage.addEventListener(
    "pointerdown",
    (event) => {
      if (event.button !== 0 || gesture) return;
      const canPan = zoomed && event.target === preview;
      if (zoomed && !canPan) return;

      gesture = {
        id: event.pointerId,
        mode: canPan ? "pan" : "swipe",
        startX: event.clientX,
        startY: event.clientY,
        startPanX: panX,
        startPanY: panY,
        moved: false,
      };
      stage.setPointerCapture?.(event.pointerId);
      if (canPan) dialog.dataset.flyDragging = "true";
    },
    { signal },
  );
  stage.addEventListener(
    "pointermove",
    (event) => {
      if (!gesture || gesture.id !== event.pointerId) return;
      const deltaX = event.clientX - gesture.startX;
      const deltaY = event.clientY - gesture.startY;
      const distance = Math.hypot(deltaX, deltaY);
      if (distance > DRAG_THRESHOLD) gesture.moved = true;

      if (gesture.mode !== "pan") return;
      event.preventDefault();
      clampPan(gesture.startPanX + deltaX, gesture.startPanY + deltaY);
    },
    { signal },
  );
  stage.addEventListener(
    "pointerup",
    (event) => {
      if (!gesture || gesture.id !== event.pointerId) return;
      const completedGesture = gesture;
      const deltaX = event.clientX - completedGesture.startX;
      const deltaY = event.clientY - completedGesture.startY;
      gesture = null;
      delete dialog.dataset.flyDragging;
      if (stage.hasPointerCapture?.(event.pointerId)) {
        stage.releasePointerCapture(event.pointerId);
      }

      if (completedGesture.moved) {
        suppressStageClickUntil = performance.now() + 250;
      }
      if (
        completedGesture.mode !== "swipe" ||
        Math.abs(deltaX) < SWIPE_THRESHOLD ||
        Math.abs(deltaX) < Math.abs(deltaY)
      ) {
        return;
      }

      if (deltaX > 0) showPrevious();
      else showNext();
    },
    { signal },
  );
  stage.addEventListener(
    "pointercancel",
    (event) => {
      if (!gesture || gesture.id !== event.pointerId) return;
      gesture = null;
      delete dialog.dataset.flyDragging;
    },
    { signal },
  );

  window.addEventListener(
    "resize",
    () => {
      resetView();
      requestAnimationFrame(updateZoomAvailability);
    },
    { signal },
  );

  signal.addEventListener(
    "abort",
    () => {
      window.clearTimeout(closeTimer);
      if (dialog.open) dialog.close();
      dialog.style.removeProperty("--fly-lightbox-scrollbar-width");
      delete document.body.dataset.flyLightboxOpen;
    },
    { once: true },
  );
}
