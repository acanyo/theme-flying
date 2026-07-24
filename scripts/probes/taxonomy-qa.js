(() => {
  document.documentElement.classList.remove("fly-scroll-reveal-ready");
  document
    .querySelectorAll("[data-fly-reveal], [data-fly-reveal-group] > *")
    .forEach((element) => element.classList.add("fly-is-visible"));

  return {
    cards: document.querySelectorAll(".fly-taxonomy-post-card").length,
    sections: document.querySelectorAll(".fly-taxonomy-section").length,
  };
})()
