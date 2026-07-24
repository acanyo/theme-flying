export const NEWSLETTER_ENDPOINT =
  "/apis/api.flow.post.kunkunyu.com/v1alpha1/follows/-/submit";

export class NewsletterRequestError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "NewsletterRequestError";
    this.status = status;
  }
}

async function readResponsePayload(response) {
  const text = await response.text();
  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch {
    return { detail: text.trim() };
  }
}

function responseMessage(payload) {
  if (!payload || typeof payload !== "object") return "";

  for (const key of ["detail", "message", "title"]) {
    const value = payload[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }

  return "";
}

function fallbackErrorMessage(status) {
  if (status === 404) return "订阅服务暂不可用，请联系站点管理员。";
  if (status === 429) return "请求过于频繁，请稍后再试。";
  if (status >= 500) return "订阅服务暂时异常，请稍后重试。";
  return "订阅失败，请检查邮箱地址后重试。";
}

export async function submitNewsletterRequest(endpoint, email, signal) {
  const response = await fetch(endpoint || NEWSLETTER_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json, application/problem+json",
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
    body: JSON.stringify({ email }),
    signal,
  });
  const payload = await readResponsePayload(response);

  if (!response.ok) {
    throw new NewsletterRequestError(
      responseMessage(payload) || fallbackErrorMessage(response.status),
      response.status,
    );
  }

  return {
    message: responseMessage(payload),
    status: response.status,
  };
}
