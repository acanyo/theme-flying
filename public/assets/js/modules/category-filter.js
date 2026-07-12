import { all, first } from "../utils/dom.js?fly=1.0.33";

export function setupCategoryFilter(root) {
  if (window.flyCategoryFilterController) {
    window.flyCategoryFilterController.abort();
  }

  const controller = new AbortController();
  window.flyCategoryFilterController = controller;

  const feed =
    first("[data-fly-feed]", root) || first(".fly-article-grid", root);
  const chips = all("[data-fly-filter]", root);
  const empty =
    first("[data-fly-feed-empty]", root) || first(".fly-empty-state", root);
  let activeFilter = "all";
  let collapsedBeforeFilter = null;

  function cards() {
    return feed ? all("[data-fly-post-card]", feed) : [];
  }

  function matches(card) {
    const cardCategory = card.dataset.flyCategory || "uncategorized";
    return activeFilter === "all" || cardCategory === activeFilter;
  }

  function render() {
    const currentCards = cards();
    const matchedCards = currentCards.filter(matches);
    const filtered = activeFilter !== "all";

    if (feed && filtered && collapsedBeforeFilter === null) {
      collapsedBeforeFilter = feed.dataset.flyFeedCollapsed || "false";
      feed.dataset.flyFeedCollapsed = "false";
    } else if (feed && !filtered && collapsedBeforeFilter !== null) {
      feed.dataset.flyFeedCollapsed = collapsedBeforeFilter;
      collapsedBeforeFilter = null;
    }

    currentCards.forEach((card) => {
      card.classList.toggle("fly-is-filtered-out", !matches(card));
    });

    if (empty) {
      empty.hidden = matchedCards.length > 0;
    }
  }

  chips.forEach((chip) => {
    chip.addEventListener(
      "click",
      () => {
        activeFilter = chip.dataset.flyFilter || "all";
        chips.forEach((item) => {
          const active = item === chip;
          item.classList.toggle("fly-is-active", active);
          item.setAttribute("aria-pressed", active ? "true" : "false");
        });
        chip.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
        render();
      },
      { signal: controller.signal },
    );
  });

  root.addEventListener("fly:posts-appended", render, {
    signal: controller.signal,
  });
  render();
}
