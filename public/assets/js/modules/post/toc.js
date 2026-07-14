function slugifyHeading(value, fallbackIndex) {
  const normalized = String(value || "")
    .normalize("NFKC")
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\p{Letter}\p{Number}-]+/gu, "")
    .replace(/-{2,}/g, "-")
    .replace(/^-|-$/g, "");

  return normalized || `section-${fallbackIndex + 1}`;
}

function ensureHeadingIds(headings) {
  const used = new Set(
    Array.from(
      document.querySelectorAll("[id]"),
      (element) => element.id,
    ).filter(Boolean),
  );

  headings.forEach((heading, index) => {
    if (heading.id) return;

    const base = slugifyHeading(heading.textContent, index);
    let candidate = base;
    let suffix = 2;
    while (used.has(candidate)) {
      candidate = `${base}-${suffix}`;
      suffix += 1;
    }

    heading.id = candidate;
    used.add(candidate);
  });
}

function createTocItem(heading) {
  const item = document.createElement("li");
  const link = document.createElement("a");
  link.href = `#${encodeURIComponent(heading.id)}`;
  link.textContent = heading.textContent.trim();
  link.dataset.flyPostTocLink = heading.id;
  item.appendChild(link);
  return { item, link };
}

function renderHeadingTree(list, headings) {
  const linkByHeading = new Map();
  let currentSection = null;
  let nestedList = null;

  headings.forEach((heading) => {
    const { item, link } = createTocItem(heading);
    linkByHeading.set(heading, link);

    if (heading.tagName === "H2" || !currentSection) {
      list.appendChild(item);
      currentSection = item;
      nestedList = null;
      return;
    }

    if (!nestedList) {
      nestedList = document.createElement("ol");
      currentSection.appendChild(nestedList);
    }
    nestedList.appendChild(item);
  });

  return linkByHeading;
}

function setupResponsiveToggle(toc, toggle, narrowLayout, signal) {
  function setExpanded(expanded) {
    toggle.setAttribute("aria-expanded", String(expanded));
    toc.dataset.flyExpanded = String(expanded);
  }

  function syncResponsiveState() {
    setExpanded(!narrowLayout.matches);
  }

  toggle.addEventListener(
    "click",
    () => {
      if (!narrowLayout.matches) return;
      setExpanded(toggle.getAttribute("aria-expanded") !== "true");
    },
    { signal },
  );
  narrowLayout.addEventListener("change", syncResponsiveState, { signal });
  syncResponsiveState();
}

function setupTocLinks(list, signal) {
  list.addEventListener(
    "click",
    (event) => {
      const link = event.target.closest("a[data-fly-post-toc-link]");
      if (!link) return;
      const heading = document.getElementById(link.dataset.flyPostTocLink);
      if (!heading) return;

      event.preventDefault();
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      heading.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
      history.replaceState(null, "", `#${encodeURIComponent(heading.id)}`);
    },
    { signal },
  );
}

function setupActiveHeading(headings, linkByHeading, signal) {
  let activeFrame = 0;

  function updateActiveLink() {
    activeFrame = 0;
    const readingLine = Math.min(150, window.innerHeight * 0.28);
    let activeHeading = headings[0];

    headings.forEach((heading) => {
      if (heading.getBoundingClientRect().top <= readingLine) {
        activeHeading = heading;
      }
    });

    linkByHeading.forEach((link, heading) => {
      const isActive = heading === activeHeading;
      link.classList.toggle("fly-is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }

  function scheduleActiveLinkUpdate() {
    if (activeFrame) return;
    activeFrame = window.requestAnimationFrame(updateActiveLink);
  }

  window.addEventListener("scroll", scheduleActiveLinkUpdate, {
    passive: true,
    signal,
  });
  window.addEventListener("resize", scheduleActiveLinkUpdate, {
    passive: true,
    signal,
  });
  signal.addEventListener(
    "abort",
    () => window.cancelAnimationFrame(activeFrame),
    { once: true },
  );
  updateActiveLink();
}

export function setupPostToc(page, signal) {
  const content = page.querySelector("[data-fly-post-content]");
  const toc = page.querySelector("[data-fly-post-toc]");
  const list = page.querySelector("[data-fly-post-toc-list]");
  const toggle = page.querySelector("[data-fly-post-toc-toggle]");
  if (!content || !toc || !list || !toggle) return;

  const headings = Array.from(content.querySelectorAll("h2, h3")).filter(
    (heading) => heading.textContent.trim(),
  );
  if (headings.length === 0) {
    toc.hidden = true;
    return;
  }

  toc.hidden = false;
  ensureHeadingIds(headings);
  list.replaceChildren();

  const linkByHeading = renderHeadingTree(list, headings);
  const narrowLayout = window.matchMedia("(max-width: 991px)");
  setupResponsiveToggle(toc, toggle, narrowLayout, signal);
  setupTocLinks(list, signal);
  setupActiveHeading(headings, linkByHeading, signal);
}
