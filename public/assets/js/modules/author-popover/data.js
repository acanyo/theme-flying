function value(source, key) {
  return source.dataset[key]?.trim() || "";
}

function safeExternalUrl(rawUrl) {
  if (!rawUrl) return "";

  try {
    const url = new URL(rawUrl, window.location.href);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.href
      : "";
  } catch {
    return "";
  }
}

function setProfileLink(link, data) {
  link.href = data.permalink || "/";
  link.setAttribute("aria-label", `查看作者：${data.name}`);
}

function setCopyContact(popover, kind, contactValue, authorName, label) {
  const item = popover.querySelector(`[data-fly-author-contact="${kind}"]`);
  const button = item?.querySelector("[data-fly-contact-copy]");
  if (!item || !button) return false;

  item.hidden = !contactValue;
  button.dataset.flyContactValue = contactValue;
  button.dataset.flyContactOriginalLabel = `复制 ${authorName} 的${label}`;
  delete button.dataset.flyContactCopied;
  button.setAttribute("aria-label", button.dataset.flyContactOriginalLabel);
  button.title = contactValue ? `${label}：${contactValue}（点击复制）` : "";
  return Boolean(contactValue);
}

function setLinkContact(popover, kind, contactValue, href, authorName, label) {
  const item = popover.querySelector(`[data-fly-author-contact="${kind}"]`);
  const link = item?.querySelector("a");
  if (!item || !link) return false;

  item.hidden = !contactValue;
  link.href = contactValue ? href : "/";
  link.setAttribute("aria-label", `${label}：${authorName}`);
  link.title = label;
  return Boolean(contactValue);
}

export function readAuthorData(trigger) {
  return {
    name: value(trigger, "flyAuthorName") || document.title,
    permalink: value(trigger, "flyAuthorPermalink") || "/",
    avatar: value(trigger, "flyAuthorAvatar"),
    bio: value(trigger, "flyAuthorBio"),
    qq: value(trigger, "flyAuthorQq"),
    wechat: value(trigger, "flyAuthorWechat"),
    email: value(trigger, "flyAuthorEmail").replace(/[\r\n]/g, ""),
    website: safeExternalUrl(value(trigger, "flyAuthorWebsite")),
  };
}

export function renderAuthorPopover(popover, data) {
  popover
    .querySelectorAll("[data-fly-author-popover-profile]")
    .forEach((link) => setProfileLink(link, data));

  const avatar = popover.querySelector("[data-fly-author-popover-avatar]");
  if (avatar) {
    avatar.src = data.avatar || popover.dataset.flyAuthorFallbackAvatar || "";
    avatar.alt = data.name;
  }

  const name = popover.querySelector("[data-fly-author-popover-name]");
  if (name) name.textContent = data.name;

  const bio = popover.querySelector("[data-fly-author-popover-bio]");
  if (bio) {
    bio.hidden = !data.bio;
    bio.textContent = data.bio;
  }

  const hasQq = setCopyContact(popover, "qq", data.qq, data.name, "QQ 号");
  const hasWechat = setCopyContact(
    popover,
    "wechat",
    data.wechat,
    data.name,
    "微信号",
  );
  const hasEmail = setLinkContact(
    popover,
    "email",
    data.email,
    `mailto:${data.email}`,
    data.name,
    "发送邮件给",
  );
  const hasWebsite = setLinkContact(
    popover,
    "website",
    data.website,
    data.website,
    data.name,
    "访问网站",
  );

  const contacts = popover.querySelector("[data-fly-author-popover-contacts]");
  if (contacts) {
    contacts.hidden = !(hasQq || hasWechat || hasEmail || hasWebsite);
    contacts.setAttribute("aria-label", `${data.name} 的联系方式`);
  }

  popover.setAttribute("aria-label", `${data.name} 的联系信息`);
}
