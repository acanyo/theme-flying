export const LINK_APPLICATION_API_BASE = "/apis/api.link.halo.run/v1alpha1";
export const LINK_APPLICATION_CAPTCHA_ENDPOINT = `${LINK_APPLICATION_API_BASE}/link-applications/captcha`;
export const LINK_APPLICATION_ENDPOINT = `${LINK_APPLICATION_API_BASE}/link-applications`;

export class LinkApplicationRequestError extends Error {
  constructor(message, response, payload) {
    super(message);
    this.name = "LinkApplicationRequestError";
    this.status = response?.status || 0;
    this.type = typeof payload?.type === "string" ? payload.type : "";
    this.errors = Array.isArray(payload?.errors) ? payload.errors : [];
    this.retryAfterSeconds = Number(payload?.retryAfterSeconds) || 0;
  }
}

async function readJsonPayload(response) {
  const text = await response.text();
  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function payloadMessage(payload, fallback) {
  for (const key of ["detail", "title", "message"]) {
    const value = payload?.[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }

  return fallback;
}

function assertSuccessfulResponse(response, payload, expectedStatus, fallback) {
  if (response.status === expectedStatus) return;

  throw new LinkApplicationRequestError(
    payloadMessage(payload, fallback),
    response,
    payload,
  );
}

export async function requestLinkApplicationCaptcha(endpoint, signal) {
  const response = await fetch(endpoint || LINK_APPLICATION_CAPTCHA_ENDPOINT, {
    method: "POST",
    credentials: "omit",
    headers: {
      Accept: "application/json, application/problem+json",
    },
    signal,
  });
  const payload = await readJsonPayload(response);

  assertSuccessfulResponse(response, payload, 200, "CAPTCHA request failed");

  if (
    typeof payload?.challengeId !== "string" ||
    !payload.challengeId ||
    typeof payload?.image !== "string" ||
    !payload.image.startsWith("data:image/")
  ) {
    throw new LinkApplicationRequestError(
      "Invalid CAPTCHA response",
      response,
      payload,
    );
  }

  return {
    challengeId: payload.challengeId,
    image: payload.image,
    expiresInSeconds: Number(payload.expiresInSeconds) || 0,
  };
}

export async function submitLinkApplication(endpoint, application, signal) {
  const response = await fetch(endpoint || LINK_APPLICATION_ENDPOINT, {
    method: "POST",
    credentials: "omit",
    headers: {
      Accept: "application/json, application/problem+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(application),
    signal,
  });
  const payload = await readJsonPayload(response);

  assertSuccessfulResponse(
    response,
    payload,
    201,
    "Link application request failed",
  );

  return payload;
}
