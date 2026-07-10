import { all, first } from "../utils/dom.js?fly=1.0.33";

function normalizedQuery(inputs) {
  const input = inputs[0];
  return (input && input.value ? input.value : "").trim().toLowerCase();
}

function cardText(card) {
  return [card.dataset.flyTitle || "", card.dataset.flyExcerpt || "", card.textContent || ""]
    .join(" ")
    .toLowerCase();
}

export function setupSearchFilter(root) {
  if (window.flySearchFilterController) {
    window.flySearchFilterController.abort();
  }

  const controller = new AbortController();
  window.flySearchFilterController = controller;

  const feed = first("[data-fly-feed]", root) || first(".fly-article-grid", root);
  const chips = all("[data-fly-filter]", root);
  const inputs = all("[data-fly-search]", root);
  const empty = first("[data-fly-feed-empty]", root) || first(".fly-empty-state", root);
  let activeFilter = "all";

  function cards() {
    return feed ? all("[data-fly-post-card]", feed) : [];
  }

  function matches(card) {
    const cardCategory = card.dataset.flyCategory || "uncategorized";
    const filterMatch = activeFilter === "all" || cardCategory === activeFilter;
    const query = normalizedQuery(inputs);
    return filterMatch && (!query || cardText(card).includes(query));
  }

  function syncInputs(value, source) {
    inputs.forEach((input) => {
      if (input !== source) {
        input.value = value;
      }
    });
  }

  function render() {
    const currentCards = cards();
    const matchedCards = currentCards.filter(matches);

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
        chip.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
        render();
      },
      { signal: controller.signal },
    );
  });

  inputs.forEach((input) => {
    input.addEventListener(
      "input",
      () => {
        syncInputs(input.value, input);
        render();
      },
      { signal: controller.signal },
    );
  });

  root.addEventListener("fly:posts-appended", render, { signal: controller.signal });
  render();

  return {
    focusSearch: () => {
      if (inputs[0]) {
        inputs[0].focus();
      }
    },
    refresh: render,
  };
}
