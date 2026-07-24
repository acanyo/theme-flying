export function setupMomentTagFilter(root) {
  const filter = root.querySelector("[data-fly-moments-filter]");
  if (!filter) return;

  const selectedTag =
    new URL(window.location.href).searchParams.get("tag") || "";

  filter.querySelectorAll("[data-fly-moment-tag]").forEach((link) => {
    const isActive = link.dataset.flyMomentTag === selectedTag;
    link.classList.toggle("fly-is-active", isActive);

    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}
