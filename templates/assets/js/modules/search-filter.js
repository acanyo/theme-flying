import { all, first } from "../utils/dom.js";

const DEFAULT_VISIBLE_LIMIT = 6;

export function setupSearchFilter(root) {
  if (window.flyingSearchFilterController) {
    window.flyingSearchFilterController.abort();
  }

  const controller = new AbortController();
  window.flyingSearchFilterController = controller;

  const chips = all("[data-filter]", root);
  const cards = all("[data-post-card]", root);
  const inputs = all("[data-search]", root);
  const empty = first(".empty-state", root);
  const loadButton = first("[data-load-more]", root);
  let activeFilter = "all";
  let visibleLimit = DEFAULT_VISIBLE_LIMIT;

  function query() {
    const input = inputs[0];
    return (input && input.value ? input.value : "").trim().toLowerCase();
  }

  function postText(card) {
    return [card.dataset.title || "", card.dataset.excerpt || "", card.textContent || ""].join(" ").toLowerCase();
  }

  function matches(card) {
    const cardCategory = card.dataset.category || "uncategorized";
    const filterMatch = activeFilter === "all" || cardCategory === activeFilter;
    const searchMatch = !query() || postText(card).includes(query());
    return filterMatch && searchMatch;
  }

  function syncInputs(value, source) {
    inputs.forEach((input) => {
      if (input !== source) {
        input.value = value;
      }
    });
  }

  function render(resetLimit = false) {
    if (resetLimit) {
      visibleLimit = DEFAULT_VISIBLE_LIMIT;
    }

    const matchedGridCards = [];
    let visibleCount = 0;

    cards.forEach((card) => {
      const matched = matches(card);
      card.classList.toggle("is-filtered-out", !matched);

      if (!matched || card.dataset.featured !== undefined) {
        card.classList.remove("is-hidden-by-load");
        return;
      }

      matchedGridCards.push(card);
      visibleCount += 1;
      card.classList.toggle("is-hidden-by-load", visibleCount > visibleLimit);
    });

    if (empty) {
      empty.hidden = cards.some(matches);
    }

    if (loadButton) {
      const hasHiddenCards = matchedGridCards.length > visibleLimit;
      const hasNextPage = Boolean(loadButton.dataset.nextUrl);
      loadButton.hidden = !hasHiddenCards && !hasNextPage;
      loadButton.disabled = !hasHiddenCards && !hasNextPage;
    }
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      activeFilter = chip.dataset.filter || "all";
      chips.forEach((item) => item.classList.toggle("is-active", item === chip));
      render(true);
    }, { signal: controller.signal });
  });

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      syncInputs(input.value, input);
      render(true);
    }, { signal: controller.signal });
  });

  if (loadButton) {
    loadButton.addEventListener("click", () => {
      const hiddenCards = all(".article-grid [data-post-card].is-hidden-by-load", root);

      if (hiddenCards.length > 0) {
        visibleLimit += DEFAULT_VISIBLE_LIMIT;
        render(false);
        return;
      }

      if (loadButton.dataset.nextUrl) {
        window.location.href = loadButton.dataset.nextUrl;
      }
    }, { signal: controller.signal });
  }

  render(false);

  return {
    focusSearch: () => {
      if (inputs[0]) {
        inputs[0].focus();
      }
    },
    refresh: render,
  };
}
