import { all, first } from "../utils/dom.js?fly=1.0.37";

const FEED_ENDPOINT = "/apis/api.link.halo.run/v1alpha1/linkfeeds";

function setText(element, value) {
  if (element) element.textContent = value;
}

function safeHttpUrl(value) {
  try {
    const url = new URL(value, window.location.origin);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.href
      : "#";
  } catch {
    return "#";
  }
}

function formatPublishedAt(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  const parts = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const values = Object.fromEntries(
    parts.map((part) => [part.type, part.value]),
  );
  return `${values.year}年${values.month}月${values.day}日`;
}

function setupRemoteImage(image, signal) {
  const hideBrokenImage = () => {
    image.hidden = true;
  };

  image.addEventListener("error", hideBrokenImage, { signal });
  if (image.complete && image.naturalWidth === 0) hideBrokenImage();
}

function configureExternalLink(link, url) {
  link.href = safeHttpUrl(url);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
}

function getSourceName(feed) {
  return feed.author || feed.linkName || "";
}

function createFeedImage(feed, signal) {
  if (!feed.authorLogo) return null;

  const image = document.createElement("img");
  image.className = "fly-friend-feed-logo-image";
  image.src = safeHttpUrl(feed.authorLogo);
  image.alt = getSourceName(feed);
  image.loading = "lazy";
  image.decoding = "async";
  image.referrerPolicy = "no-referrer";
  image.dataset.flyFriendFeedImage = "";
  setupRemoteImage(image, signal);
  return image;
}

function createLogoLink(feed, signal) {
  const link = document.createElement("a");
  link.className = "fly-friend-feed-logo";
  configureExternalLink(link, feed.authorUrl || feed.url);
  link.setAttribute("aria-label", `访问：${getSourceName(feed) || feed.url}`);

  const fallback = document.createElement("span");
  fallback.className = "fly-friend-feed-logo-fallback";
  fallback.setAttribute("aria-hidden", "true");
  link.appendChild(fallback);

  const image = createFeedImage(feed, signal);
  if (image) link.appendChild(image);

  return link;
}

function createSource(feed) {
  const source = document.createElement("div");
  source.className = "fly-friend-feed-source";

  const sourceName = getSourceName(feed);
  if (sourceName) {
    const link = document.createElement("a");
    link.className = "fly-friend-feed-source-name";
    configureExternalLink(link, feed.authorUrl || feed.url);
    link.textContent = sourceName;
    source.appendChild(link);
  }

  const time = document.createElement("time");
  time.dateTime = feed.publishedAt || "";
  time.textContent = formatPublishedAt(feed.publishedAt);

  source.appendChild(time);
  return source;
}

function cleanSummary(value) {
  const summary = typeof value === "string" ? value.trim() : "";
  return summary && !/[<>]/.test(summary) ? summary : "";
}

function createFeedCard(feed, signal) {
  const article = document.createElement("article");
  article.className = "fly-friend-feed-card";
  article.dataset.flyFriendFeedCard = "";

  const logo = createLogoLink(feed, signal);
  const content = document.createElement("div");
  content.className = "fly-friend-feed-content";
  content.appendChild(createSource(feed));

  const title = document.createElement("h2");
  title.className = "fly-friend-feed-title";
  const titleLink = document.createElement("a");
  configureExternalLink(titleLink, feed.url);
  titleLink.textContent = feed.title || feed.url || "";
  title.appendChild(titleLink);
  content.appendChild(title);

  const summaryText = cleanSummary(feed.summary);
  if (summaryText) {
    const summary = document.createElement("p");
    summary.className = "fly-friend-feed-summary";
    summary.textContent = summaryText;
    content.appendChild(summary);
  }

  article.append(logo, content);
  return article;
}

function setupInitialImages(region, signal) {
  all("[data-fly-friend-feed-image]", region).forEach((image) =>
    setupRemoteImage(image, signal),
  );
}

export function setupFriendFeed(root) {
  window.flyFriendFeedController?.abort();

  const controller = new AbortController();
  window.flyFriendFeedController = controller;

  all("[data-fly-friend-feed-region]", root).forEach((region) => {
    const grid = first("[data-fly-friend-feed]", region);
    const button = first("[data-fly-friend-feed-load]", region);
    const status = first("[data-fly-friend-feed-status]", region);
    const count = first("[data-fly-friend-feed-count]", region);
    const decoration = first("[data-fly-pagination-decoration]", region);
    const limit = Math.min(
      30,
      Math.max(1, Number(region.dataset.flyFriendFeedLimit) || 10),
    );
    let loading = false;

    setupInitialImages(region, controller.signal);
    if (!grid || !button) return;

    function setState(state, message = "") {
      const complete = state === "complete";
      loading = state === "loading";
      button.classList.toggle("fly-is-loading", loading);
      button.classList.toggle("fly-is-complete", complete);
      button.classList.toggle("fly-has-error", state === "error");
      button.disabled = loading || complete;
      button.setAttribute("aria-busy", loading ? "true" : "false");
      if (decoration) decoration.hidden = complete;
      if (status) {
        status.dataset.flyState = state;
        status.textContent = message;
      }
    }

    button.addEventListener(
      "click",
      async () => {
        if (loading) return;

        const beforePublishedAt = region.dataset.flyFriendFeedBeforePublishedAt;
        const beforeId = region.dataset.flyFriendFeedBeforeId;
        if (!beforePublishedAt || !beforeId) {
          setState("complete", "全部动态已显示");
          return;
        }

        setState("loading", "正在加载更多动态…");
        const params = new URLSearchParams({
          limit: String(limit),
          beforePublishedAt,
          beforeId,
        });

        try {
          const response = await fetch(`${FEED_ENDPOINT}?${params}`, {
            headers: { Accept: "application/json" },
            signal: controller.signal,
          });
          if (!response.ok) throw new Error("朋友圈动态加载失败");

          const page = await response.json();
          const items = Array.isArray(page.items) ? page.items : [];
          items.forEach((feed) =>
            grid.appendChild(createFeedCard(feed, controller.signal)),
          );

          region.dataset.flyFriendFeedBeforePublishedAt =
            page.nextBeforePublishedAt || "";
          region.dataset.flyFriendFeedBeforeId = page.nextBeforeId || "";
          setText(count, `已显示 ${grid.children.length} 条`);

          if (!page.hasNext || items.length === 0) {
            setState("complete", "全部动态已显示");
          } else {
            setState("ready", `已加载 ${items.length} 条动态。`);
          }
        } catch (error) {
          if (error?.name === "AbortError") return;
          setState("error", "加载失败，请稍后重试。");
        }
      },
      { signal: controller.signal },
    );

    setState("ready");
  });
}
