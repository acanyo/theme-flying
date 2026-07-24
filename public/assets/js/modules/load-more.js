import { all, first } from "../utils/dom.js?fly=1.0.37";

const DEFAULT_END_TEXT = "全部文章已显示";

export function setupLoadMore(root) {
  if (window.flyLoadMoreController) {
    window.flyLoadMoreController.abort();
  }

  const controller = new AbortController();
  window.flyLoadMoreController = controller;

  const feed = first("[data-fly-feed]", root);
  const loadLink = first("[data-fly-load-more]", root);

  if (!feed || !loadLink) {
    return;
  }

  const region = loadLink.closest("[data-fly-feed-region]");
  const decoration = first("[data-fly-pagination-decoration]", region || root);
  const loadLabel = first("[data-fly-load-label]", loadLink);
  const loadLabelCopies = all("[data-fly-load-label-copy]", loadLink);
  const loadComplete = first("[data-fly-load-complete]", loadLink);
  const loadStatus = first("[data-fly-load-status]", root);
  const endText = loadLink.dataset.flyEndText || DEFAULT_END_TEXT;
  const itemSelector =
    loadLink.dataset.flyLoadItemSelector || "[data-fly-post-card]";
  const itemAttribute =
    loadLink.dataset.flyLoadItemAttribute || "data-fly-post-name";
  const loadingText = loadLink.dataset.flyLoadingText || "正在加载更多文章…";
  const loadedUnit = loadLink.dataset.flyLoadedUnit || "篇文章";
  const appendEvent = loadLink.dataset.flyAppendEvent || "fly:posts-appended";
  let loading = false;
  let autoLoadBlocked = false;
  let autoLoadObserver = null;

  function setLoadState(state, message = "") {
    loading = state === "loading";
    const complete = state === "complete";

    loadLink.classList.toggle("fly-is-loading", loading);
    loadLink.classList.toggle("fly-is-complete", complete);
    loadLink.classList.toggle("fly-has-error", state === "error");
    loadLink.setAttribute("aria-busy", loading ? "true" : "false");
    loadLink.setAttribute(
      "aria-disabled",
      loading || complete ? "true" : "false",
    );

    if (region) {
      region.setAttribute("aria-busy", loading ? "true" : "false");
    }

    if (decoration) {
      decoration.hidden = complete;
    }

    if (loadLabel) {
      const labelText = state === "error" ? "重试" : "加载更多";

      if (loadLabelCopies.length > 0) {
        loadLabelCopies.forEach((label) => {
          label.textContent = labelText;
        });
      } else {
        loadLabel.textContent = labelText;
      }
    }

    if (loadComplete) {
      loadComplete.textContent = endText;
    }

    if (loadStatus) {
      loadStatus.textContent = message;
      loadStatus.dataset.flyState = state;
    }
  }

  function appendNextPage(nextDocument) {
    const nextFeed = nextDocument.querySelector("[data-fly-feed]");

    if (!nextFeed) {
      throw new Error("下一页缺少内容列表");
    }

    const knownItems = new Set(
      all(itemSelector, feed)
        .map((item) => item.getAttribute(itemAttribute))
        .filter(Boolean),
    );
    let appended = 0;

    all(itemSelector, nextFeed).forEach((item) => {
      const itemKey = item.getAttribute(itemAttribute);

      if (itemKey && knownItems.has(itemKey)) {
        return;
      }

      feed.appendChild(document.importNode(item, true));
      if (itemKey) {
        knownItems.add(itemKey);
      }
      appended += 1;
    });

    const nextLoadLink = nextDocument.querySelector(
      "[data-fly-load-more][href]",
    );
    return {
      appended,
      nextHref: nextLoadLink ? nextLoadLink.getAttribute("href") : "",
    };
  }

  function completeLoading() {
    autoLoadObserver?.disconnect();
    loadLink.removeAttribute("href");
    loadLink.dataset.flyExhausted = "true";
    setLoadState("complete", endText);
  }

  async function loadMore(event, automatic = false) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      autoLoadBlocked = false;
    }

    if (loading || (automatic && autoLoadBlocked)) {
      return;
    }

    const nextUrl = loadLink.getAttribute("href");
    if (!nextUrl || loadLink.dataset.flyExhausted === "true") {
      completeLoading();
      return;
    }

    setLoadState("loading", loadingText);

    try {
      const response = await fetch(nextUrl, {
        headers: { Accept: "text/html" },
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("内容加载失败");
      }

      const html = await response.text();
      const nextDocument = new DOMParser().parseFromString(html, "text/html");
      const { appended, nextHref } = appendNextPage(nextDocument);

      if (appended > 0) {
        feed.dispatchEvent(
          new CustomEvent(appendEvent, {
            bubbles: true,
            detail: { count: appended, feed },
          }),
        );
      }

      if (nextHref) {
        loadLink.setAttribute("href", nextHref);
        delete loadLink.dataset.flyExhausted;
        autoLoadBlocked = false;
        setLoadState(
          "ready",
          appended > 0
            ? `已加载 ${appended} ${loadedUnit}。`
            : "没有可加载的新内容。",
        );
      } else {
        completeLoading();
      }
    } catch (error) {
      if (error && error.name === "AbortError") {
        return;
      }
      autoLoadBlocked = true;
      loadLink.setAttribute("href", nextUrl);
      setLoadState("error", "加载失败，请重试。");
    }
  }

  function setupAutoLoad() {
    if (
      !loadLink.hasAttribute("data-fly-load-more-auto") ||
      typeof IntersectionObserver !== "function"
    ) {
      return;
    }

    autoLoadObserver = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.some((entry) => entry.isIntersecting);
        loadLink.classList.toggle("fly-is-intersecting", intersecting);

        if (intersecting) {
          loadMore(null, true);
        }
      },
      {
        rootMargin: "0px 0px 300px 0px",
        threshold: 0,
      },
    );
    autoLoadObserver.observe(loadLink);
    controller.signal.addEventListener(
      "abort",
      () => autoLoadObserver?.disconnect(),
      { once: true },
    );
  }

  loadLink.addEventListener("click", loadMore, { signal: controller.signal });
  setLoadState("ready");
  setupAutoLoad();
}
