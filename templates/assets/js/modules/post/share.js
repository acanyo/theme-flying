function fallbackCopy(value) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  return copied;
}

function buildShareUrls(title, url) {
  return {
    x: `https://x.com/intent/post?${new URLSearchParams({ text: title, url })}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?${new URLSearchParams({ u: url })}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?${new URLSearchParams({ url })}`,
    email: `mailto:?${new URLSearchParams({ subject: title, body: url })}`,
  };
}

function assignShareLinks(page, urls) {
  const mapping = {
    "[data-fly-share-x]": urls.x,
    "[data-fly-share-facebook]": urls.facebook,
    "[data-fly-share-linkedin]": urls.linkedin,
    "[data-fly-share-email]": urls.email,
  };

  Object.entries(mapping).forEach(([selector, href]) => {
    page.querySelectorAll(selector).forEach((link) => {
      link.href = href;
    });
  });
}

export function setupPostShare(page, signal) {
  const toggle = page.querySelector("[data-fly-share-toggle]");
  const menu = page.querySelector("[data-fly-share-menu]");
  const url = window.location.href.split("#")[0];
  const urls = buildShareUrls(document.title, url);
  assignShareLinks(page, urls);

  if (!toggle || !menu) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-hidden", String(!open));
    menu.dataset.flyOpen = String(open);
  }

  toggle.addEventListener(
    "click",
    () => setOpen(toggle.getAttribute("aria-expanded") !== "true"),
    { signal },
  );
  document.addEventListener(
    "click",
    (event) => {
      if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        setOpen(false);
      }
    },
    { signal },
  );
  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") setOpen(false);
    },
    { signal },
  );

  const copyButton = menu.querySelector("[data-fly-share-copy]");
  const copyLabel = menu.querySelector("[data-fly-share-copy-label]");
  let resetTimer = 0;
  copyButton?.addEventListener(
    "click",
    async () => {
      let copied = false;
      try {
        copied = navigator.clipboard?.writeText
          ? Boolean(await navigator.clipboard.writeText(url).then(() => true))
          : fallbackCopy(url);
      } catch {
        copied = fallbackCopy(url);
      }

      if (copyLabel) copyLabel.textContent = copied ? "已复制" : "复制失败";
      window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(() => {
        if (copyLabel) copyLabel.textContent = "复制链接";
      }, 1600);
    },
    { signal },
  );
  signal.addEventListener("abort", () => window.clearTimeout(resetTimer), {
    once: true,
  });
}
