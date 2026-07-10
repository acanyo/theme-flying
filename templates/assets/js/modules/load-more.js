import { all, first } from "../utils/dom.js?fly=1.0.37";

const DEFAULT_END_TEXT = "已经到了列表的末尾";

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
  const loadLabel = first("[data-fly-load-label]", loadLink);
  const loadLabelCopies = all("[data-fly-load-label-copy]", loadLink);
  const loadComplete = first("[data-fly-load-complete]", loadLink);
  const loadStatus = first("[data-fly-load-status]", root);
  const endText = loadLink.dataset.flyEndText || DEFAULT_END_TEXT;
  let loading = false;

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

    if (loadLabel) {
      const labelText = state === "error" ? "重新加载" : "加载更多";

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
      throw new Error("下一页缺少文章列表");
    }

    const knownNames = new Set(
      all("[data-fly-post-card]", feed)
        .map((card) => card.dataset.flyPostName)
        .filter(Boolean),
    );
    let appended = 0;

    all("[data-fly-post-card]", nextFeed).forEach((card) => {
      const name = card.dataset.flyPostName;

      if (name && knownNames.has(name)) {
        return;
      }

      feed.appendChild(document.importNode(card, true));
      if (name) {
        knownNames.add(name);
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
    loadLink.removeAttribute("href");
    loadLink.dataset.flyExhausted = "true";
    setLoadState("complete", endText);
  }

  async function loadMore(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    if (loading) {
      return;
    }

    const nextUrl = loadLink.getAttribute("href");
    if (!nextUrl || loadLink.dataset.flyExhausted === "true") {
      completeLoading();
      return;
    }

    setLoadState("loading", "正在加载更多文章。");

    try {
      const response = await fetch(nextUrl, {
        headers: { Accept: "text/html" },
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("文章加载失败");
      }

      const html = await response.text();
      const nextDocument = new DOMParser().parseFromString(html, "text/html");
      const { appended, nextHref } = appendNextPage(nextDocument);

      if (appended > 0) {
        feed.dispatchEvent(
          new CustomEvent("fly:posts-appended", {
            bubbles: true,
            detail: { count: appended, feed },
          }),
        );
      }

      if (nextHref) {
        loadLink.setAttribute("href", nextHref);
        delete loadLink.dataset.flyExhausted;
        setLoadState(
          "ready",
          appended > 0 ? `已加载 ${appended} 篇文章。` : "没有新的文章可加载。",
        );
      } else {
        completeLoading();
      }
    } catch (error) {
      if (error && error.name === "AbortError") {
        return;
      }
      setLoadState("error", "加载失败，请检查网络后重试。");
    }
  }

  loadLink.addEventListener("click", loadMore, { signal: controller.signal });
  setLoadState("ready");
}
