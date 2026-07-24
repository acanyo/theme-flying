export function setupPhotoGroupFilter(root) {
  const filter = root.querySelector("[data-fly-photo-filter]");
  if (!filter) return;

  const selectedGroup =
    new URL(window.location.href).searchParams.get("group") || "";

  filter.querySelectorAll("[data-fly-photo-group]").forEach((link) => {
    const isActive = link.dataset.flyPhotoGroup === selectedGroup;
    link.classList.toggle("fly-is-active", isActive);

    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}
