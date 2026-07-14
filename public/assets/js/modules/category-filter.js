import { all, first } from "../utils/dom.js?fly=1.0.33";

export function setupCategoryFilter(root) {
  if (window.flyCategoryFilterController) {
    window.flyCategoryFilterController.abort();
  }

  const controller = new AbortController();
  window.flyCategoryFilterController = controller;

  const feed =
    first("[data-fly-feed]", root) || first(".fly-article-grid", root);
  const filterNavigation = first("[data-fly-category-filter]", root);
  const filterRail = filterNavigation
    ? first("[data-fly-category-filter-rail]", filterNavigation)
    : null;
  const previousButton = filterNavigation
    ? first("[data-fly-category-filter-prev]", filterNavigation)
    : null;
  const nextButton = filterNavigation
    ? first("[data-fly-category-filter-next]", filterNavigation)
    : null;
  const chips = all("[data-fly-filter]", root);
  const empty =
    first("[data-fly-feed-empty]", root) || first(".fly-empty-state", root);
  let activeFilter = "all";
  let collapsedBeforeFilter = null;

  function updateRailControls() {
    if (!filterRail) {
      return;
    }

    const maximumScrollLeft = Math.max(
      0,
      filterRail.scrollWidth - filterRail.clientWidth,
    );
    const hasOverflow = maximumScrollLeft > 1;
    const currentScrollLeft = Math.max(0, filterRail.scrollLeft);

    if (previousButton) {
      previousButton.hidden = !hasOverflow || currentScrollLeft <= 1;
    }
    if (nextButton) {
      nextButton.hidden =
        !hasOverflow || currentScrollLeft >= maximumScrollLeft - 1;
    }
  }

  function scrollRail(direction) {
    if (!filterRail) {
      return;
    }

    filterRail.scrollBy({
      left: direction * Math.max(160, filterRail.clientWidth * 0.65),
      behavior: "smooth",
    });
  }

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

  if (filterRail) {
    filterRail.addEventListener("scroll", updateRailControls, {
      passive: true,
      signal: controller.signal,
    });

    previousButton?.addEventListener("click", () => scrollRail(-1), {
      signal: controller.signal,
    });
    nextButton?.addEventListener("click", () => scrollRail(1), {
      signal: controller.signal,
    });

    const resizeObserver = new ResizeObserver(updateRailControls);
    resizeObserver.observe(filterRail);
    controller.signal.addEventListener(
      "abort",
      () => resizeObserver.disconnect(),
      { once: true },
    );
    requestAnimationFrame(updateRailControls);
  }

  root.addEventListener("fly:posts-appended", render, {
    signal: controller.signal,
  });
  render();
}
