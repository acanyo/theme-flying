export function setupPostComments(page, signal) {
  const layer = page.querySelector("[data-fly-comments-layer]");
  const openButtons = Array.from(
    page.querySelectorAll("[data-fly-comments-open]"),
  );
  if (!layer || openButtons.length === 0) return;

  const closeButtons = Array.from(
    layer.querySelectorAll("[data-fly-comments-close]"),
  );
  const panel = layer.querySelector(".fly-post-comments-panel");
  let returnFocus = null;

  function setOpen(open) {
    layer.dataset.flyOpen = String(open);
    layer.setAttribute("aria-hidden", String(!open));
    openButtons.forEach((button) =>
      button.setAttribute("aria-expanded", String(open)),
    );

    if (open) {
      document.body.dataset.flyCommentsOpen = "true";
      panel?.querySelector("button, a, input, textarea, [tabindex]")?.focus();
    } else {
      delete document.body.dataset.flyCommentsOpen;
      returnFocus?.focus();
    }
  }

  openButtons.forEach((button) =>
    button.addEventListener(
      "click",
      () => {
        returnFocus = button;
        setOpen(true);
      },
      { signal },
    ),
  );
  closeButtons.forEach((button) =>
    button.addEventListener("click", () => setOpen(false), { signal }),
  );
  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape" && layer.dataset.flyOpen === "true") {
        setOpen(false);
      }
    },
    { signal },
  );
}
