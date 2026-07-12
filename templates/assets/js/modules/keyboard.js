export function setupKeyboardShortcuts(root, actions) {
  root.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    const target = event.target;
    const isEditing =
      target instanceof Element &&
      Boolean(
        target.closest("input, textarea, select, [contenteditable='true']"),
      );

    if ((event.ctrlKey || event.metaKey) && key === "k") {
      event.preventDefault();
      actions.openSearch();
    }

    if (
      key === "/" &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.altKey &&
      !isEditing
    ) {
      event.preventDefault();
      actions.openSearch();
    }

    if (event.key === "Escape") {
      actions.closeMenu();
    }
  });
}
