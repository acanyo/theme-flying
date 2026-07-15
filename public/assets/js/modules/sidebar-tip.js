import { all } from "../utils/dom.js?fly=1.0.30";

const compactRailQuery = window.matchMedia(
  "(min-width: 768px) and (max-width: 1199px)",
);
const wideDesktopQuery = window.matchMedia("(min-width: 1200px)");
const HIDE_DELAY = 120;

function createTip() {
  const existing = document.querySelector(".fly-sidebar-tip");
  if (existing) {
    return existing;
  }

  const tip = document.createElement("div");
  tip.className = "fly-sidebar-tip";
  tip.setAttribute("role", "tooltip");
  tip.setAttribute("aria-hidden", "true");
  document.body.appendChild(tip);
  return tip;
}

function createFlyout() {
  const existing = document.querySelector(".fly-sidebar-flyout");
  if (existing) {
    return existing;
  }

  const flyout = document.createElement("div");
  flyout.className = "fly-sidebar-flyout";
  flyout.setAttribute("aria-hidden", "true");
  document.body.appendChild(flyout);
  return flyout;
}

function isCollapsedStaticSidebar(target) {
  if (!target.closest(".fly-site-sidebar--static")) {
    return false;
  }

  return (
    compactRailQuery.matches ||
    (wideDesktopQuery.matches &&
      document.body.dataset.flySidebarCollapsed === "true")
  );
}

function shouldShow(target) {
  if (target.closest(".fly-site-sidebar--popup")) {
    return false;
  }

  return (
    (isCollapsedStaticSidebar(target) || hasClippedLabel(target)) &&
    Boolean(target.dataset.flyTip && target.dataset.flyTip.trim())
  );
}

function shouldShowCollapsedPanel(target) {
  return (
    isCollapsedStaticSidebar(target) &&
    Boolean(target.dataset.flyTip && target.dataset.flyTip.trim())
  );
}

function hasClippedLabel(target) {
  const label = target.querySelector(".fly-nav-label, span:last-child");
  return Boolean(label && label.scrollWidth > label.clientWidth);
}

function getSubmenuLinks(target) {
  const tags = target.closest(".fly-sidebar-tags");
  if (tags && target.matches(".fly-sidebar-tags-trigger")) {
    return all(".fly-sidebar-tag-link", tags);
  }

  const section = target.closest(".fly-sidebar-section");
  const list = section && section.querySelector(".fly-sidebar-sub-list");
  return list ? all("a", list) : [];
}

function positionPanel(panel, target, options = {}) {
  const rect = target.getBoundingClientRect();
  const viewportPadding = 12;
  const left = Math.min(rect.right + 10, window.innerWidth - viewportPadding);
  const anchorY = options.alignTop ? rect.top : rect.top + rect.height / 2;
  const top = Math.min(
    Math.max(anchorY, viewportPadding),
    window.innerHeight - viewportPadding,
  );

  panel.style.left = `${left}px`;
  panel.style.top = `${top}px`;
}

function cloneIndicator(link) {
  const indicator = link.querySelector(".fly-menu-icon, .fly-tag-dot");
  return indicator ? indicator.cloneNode(true) : null;
}

function buildFlyout(flyout, links) {
  const list = document.createElement("div");
  list.className = "fly-sidebar-flyout-list";

  links.forEach((link) => {
    const item = document.createElement("a");
    const href = link.getAttribute("href");
    const target = link.getAttribute("target");
    const rel = link.getAttribute("rel");
    const text = link.dataset.flyTip || link.textContent.trim();
    const indicator = cloneIndicator(link);

    item.className = "fly-sidebar-flyout-link";
    item.textContent = "";
    if (href) {
      item.setAttribute("href", href);
    }
    if (target) {
      item.setAttribute("target", target);
    }
    if (rel) {
      item.setAttribute("rel", rel);
    }
    item.setAttribute("aria-label", text);

    const tagColor = window
      .getComputedStyle(link)
      .getPropertyValue("--fly-tag-color");
    if (tagColor) {
      item.style.setProperty("--fly-tag-color", tagColor);
    }

    if (indicator) {
      item.appendChild(indicator);
    }

    const label = document.createElement("span");
    label.textContent = text;
    item.appendChild(label);
    list.appendChild(item);
  });

  flyout.replaceChildren(list);
}

export function setupSidebarTip(root) {
  const targets = all("[data-fly-tip]", root);
  const tip = createTip();
  const flyout = createFlyout();
  let activeTarget = null;
  let hideTimer = 0;

  function hide() {
    window.clearTimeout(hideTimer);
    activeTarget = null;
    tip.dataset.flyVisible = "false";
    tip.setAttribute("aria-hidden", "true");
    flyout.dataset.flyVisible = "false";
    flyout.setAttribute("aria-hidden", "true");
  }

  function scheduleHide() {
    window.clearTimeout(hideTimer);
    hideTimer = window.setTimeout(hide, HIDE_DELAY);
  }

  function showTip(target) {
    if (!shouldShow(target)) {
      hide();
      return;
    }

    flyout.dataset.flyVisible = "false";
    flyout.setAttribute("aria-hidden", "true");
    activeTarget = target;
    tip.textContent = target.dataset.flyTip.trim();
    positionPanel(tip, target);
    tip.dataset.flyVisible = "true";
    tip.setAttribute("aria-hidden", "false");
  }

  function showFlyout(target, links) {
    if (!shouldShowCollapsedPanel(target) || !links.length) {
      showTip(target);
      return;
    }

    tip.dataset.flyVisible = "false";
    tip.setAttribute("aria-hidden", "true");
    activeTarget = target;
    buildFlyout(flyout, links);
    positionPanel(flyout, target, { alignTop: true });
    flyout.dataset.flyVisible = "true";
    flyout.setAttribute("aria-hidden", "false");
  }

  function show(target) {
    window.clearTimeout(hideTimer);
    const links = getSubmenuLinks(target);
    if (links.length) {
      showFlyout(target, links);
      return;
    }
    showTip(target);
  }

  targets.forEach((target) => {
    target.addEventListener("pointerenter", () => show(target));
    target.addEventListener("mouseenter", () => show(target));
    target.addEventListener("mouseover", () => show(target));
    target.addEventListener("focus", () => show(target));
    target.addEventListener("focusin", () => show(target));
    target.addEventListener("pointerleave", scheduleHide);
    target.addEventListener("mouseleave", scheduleHide);
    target.addEventListener("blur", scheduleHide);
    target.addEventListener("focusout", scheduleHide);
  });

  flyout.addEventListener("pointerenter", () => window.clearTimeout(hideTimer));
  flyout.addEventListener("mouseenter", () => window.clearTimeout(hideTimer));
  flyout.addEventListener("pointerleave", scheduleHide);
  flyout.addEventListener("mouseleave", scheduleHide);
  flyout.addEventListener("click", hide);

  tip.addEventListener("pointerenter", () => window.clearTimeout(hideTimer));
  tip.addEventListener("pointerleave", scheduleHide);

  function repositionActive() {
    if (!activeTarget) {
      return;
    }

    if (flyout.dataset.flyVisible === "true") {
      positionPanel(flyout, activeTarget, { alignTop: true });
      return;
    }

    if (tip.dataset.flyVisible === "true") {
      positionPanel(tip, activeTarget);
    }
  }

  window.addEventListener("resize", hide);
  window.addEventListener(
    "scroll",
    () => {
      repositionActive();
    },
    true,
  );
  window.addEventListener("fly:sidebar-collapse-change", (event) => {
    if (!event.detail || !event.detail.collapsed) {
      hide();
    }
  });
}
