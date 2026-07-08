export function setupKeyboardShortcuts(root, actions) {
  root.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    if ((event.ctrlKey || event.metaKey) && key === "k") {
      event.preventDefault();
      actions.focusSearch();
    }

    if (event.key === "Escape") {
      actions.closeMenu();
    }
  });
}
