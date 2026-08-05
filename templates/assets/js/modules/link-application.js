import { all } from "../utils/dom.js?fly=1.0.33";
import {
  LINK_APPLICATION_CAPTCHA_ENDPOINT,
  LINK_APPLICATION_ENDPOINT,
  LinkApplicationRequestError,
  requestLinkApplicationCaptcha,
  submitLinkApplication,
} from "./link-application/api.js?fly=1.0.1";
import { setupLinkApplicationDialog } from "./link-application/dialog.js?fly=1.0.2";
import { setupLinkApplicationCopy } from "./link-application/copy.js?fly=1.0.1";

const PROBLEM_MESSAGES = new Map([
  [
    "400 https://halo.run/probs/invalid-link-application",
    "请检查填写的站点信息。",
  ],
  [
    "400 https://halo.run/probs/invalid-link-application-captcha",
    "验证码错误或已过期，请重新输入。",
  ],
  [
    "403 https://halo.run/probs/link-application-disabled",
    "友链申请暂未开放。",
  ],
  [
    "409 https://halo.run/probs/duplicate-link-application",
    "该网站已经提交过申请。",
  ],
  [
    "409 https://halo.run/probs/link-application-capacity-reached",
    "待审核申请已满，请稍后再试。",
  ],
  [
    "429 https://halo.run/probs/request-not-permitted",
    "提交过于频繁，请稍后再试。",
  ],
  [
    "503 https://halo.run/probs/link-application-unavailable",
    "友链申请服务暂时不可用。",
  ],
]);

function endpoint(form, attribute, fallback) {
  return form.getAttribute(attribute)?.trim() || fallback;
}

function fieldValue(formData, name) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function applicationPayload(form, challengeId) {
  const formData = new FormData(form);
  const payload = {
    url: fieldValue(formData, "url"),
    displayName: fieldValue(formData, "displayName"),
    feedUrls: fieldValue(formData, "feedUrls")
      .split(/\r?\n/)
      .map((value) => value.trim())
      .filter(Boolean),
    challengeId,
    captchaCode: fieldValue(formData, "captchaCode"),
  };

  for (const field of ["logo", "description", "email", "backlink"]) {
    const value = fieldValue(formData, field);
    if (value) payload[field] = value;
  }

  return payload;
}

function setStatus(status, state, message) {
  status.textContent = message;

  if (state) {
    status.dataset.flyState = state;
  } else {
    delete status.dataset.flyState;
  }
}

function setSubmitting(form, button, label, submitting, idleLabel) {
  form.setAttribute("aria-busy", String(submitting));
  button.disabled = submitting;
  label.textContent = submitting ? "正在提交…" : idleLabel;
}

function requestErrorMessage(error) {
  if (!(error instanceof LinkApplicationRequestError)) {
    return "暂时无法连接友链申请服务，请稍后再试。";
  }

  const problemKey = `${error.status} ${error.type}`;
  const message = PROBLEM_MESSAGES.get(problemKey);

  if (error.status === 429 && error.retryAfterSeconds > 0) {
    return `提交过于频繁，请 ${error.retryAfterSeconds} 秒后再试。`;
  }

  if (message) return message;
  if (error.status === 404) return "友链申请暂未开放。";
  if (error.status >= 500) return "友链申请服务暂时不可用。";
  return "申请提交失败，请检查填写内容后重试。";
}

function setupApplicationForm(form, controller) {
  const captchaImage = form.querySelector("[data-fly-link-captcha-image]");
  const captchaInput = form.querySelector("[data-fly-link-captcha-code]");
  const captchaRefresh = form.querySelector("[data-fly-link-captcha-refresh]");
  const submitButton = form.querySelector("[data-fly-link-application-submit]");
  const submitLabel = form.querySelector(
    "[data-fly-link-application-submit-label]",
  );
  const status = form.querySelector("[data-fly-link-application-status]");

  if (
    !captchaImage ||
    !captchaInput ||
    !captchaRefresh ||
    !submitButton ||
    !submitLabel ||
    !status
  ) {
    return null;
  }

  const captchaEndpoint = endpoint(
    form,
    "data-fly-link-captcha-endpoint",
    LINK_APPLICATION_CAPTCHA_ENDPOINT,
  );
  const applicationEndpoint = endpoint(
    form,
    "data-fly-link-application-endpoint",
    LINK_APPLICATION_ENDPOINT,
  );
  const idleLabel = submitLabel.textContent.trim() || "提交申请";
  let challengeId = "";
  let captchaLoading = false;
  let submitting = false;

  async function refreshCaptcha({
    announce = false,
    preserveStatus = false,
  } = {}) {
    if (captchaLoading || controller.signal.aborted) return;

    challengeId = "";
    captchaLoading = true;
    captchaRefresh.disabled = true;
    submitButton.disabled = true;
    captchaImage.removeAttribute("src");
    captchaImage.setAttribute("aria-busy", "true");

    try {
      const captcha = await requestLinkApplicationCaptcha(
        captchaEndpoint,
        controller.signal,
      );
      challengeId = captcha.challengeId;
      captchaImage.src = captcha.image;

      if (announce) {
        setStatus(status, "success", "验证码已刷新。");
      }
    } catch (error) {
      if (error?.name !== "AbortError") {
        if (!preserveStatus || status.dataset.flyState !== "success") {
          setStatus(status, "error", requestErrorMessage(error));
        }
      }
    } finally {
      captchaLoading = false;
      captchaRefresh.disabled = submitting || controller.signal.aborted;
      submitButton.disabled =
        submitting || !challengeId || controller.signal.aborted;
      captchaImage.removeAttribute("aria-busy");
    }
  }

  form.addEventListener(
    "input",
    (event) => {
      if (event.target instanceof HTMLElement) {
        event.target.removeAttribute("aria-invalid");
      }

      setStatus(status, "", "");
    },
    { signal: controller.signal },
  );

  captchaRefresh.addEventListener(
    "click",
    () => {
      setStatus(status, "pending", "正在刷新验证码…");
      void refreshCaptcha({ announce: true });
    },
    { signal: controller.signal },
  );

  form.addEventListener(
    "submit",
    async (event) => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      if (!challengeId) {
        setStatus(status, "error", "请先获取验证码。");
        await refreshCaptcha({ preserveStatus: true });
        captchaInput.focus();
        return;
      }

      submitting = true;
      setSubmitting(form, submitButton, submitLabel, true, idleLabel);
      setStatus(status, "pending", "正在提交申请…");

      try {
        await submitLinkApplication(
          applicationEndpoint,
          applicationPayload(form, challengeId),
          controller.signal,
        );
        form.reset();
        setStatus(status, "success", "申请已提交，请等待站点管理员审核。");
      } catch (error) {
        if (error?.name !== "AbortError") {
          setStatus(status, "error", requestErrorMessage(error));

          if (
            error instanceof LinkApplicationRequestError &&
            error.type ===
              "https://halo.run/probs/invalid-link-application-captcha"
          ) {
            captchaInput.setAttribute("aria-invalid", "true");
          }
        }
      } finally {
        challengeId = "";
        captchaInput.value = "";
        await refreshCaptcha({ preserveStatus: true });
        submitting = false;
        setSubmitting(form, submitButton, submitLabel, false, idleLabel);
        submitButton.disabled = !challengeId || controller.signal.aborted;
      }
    },
    { signal: controller.signal },
  );

  return {
    ensureCaptcha() {
      if (!challengeId && !captchaLoading) void refreshCaptcha();
    },
  };
}

export function setupLinkApplication(root) {
  if (window.flyLinkApplicationController) {
    window.flyLinkApplicationController.abort();
  }

  const controller = new AbortController();
  window.flyLinkApplicationController = controller;

  setupLinkApplicationCopy(root, controller);

  const applicationForms = new Map();

  all("[data-fly-link-application-form]", root).forEach((form) => {
    const applicationForm = setupApplicationForm(form, controller);
    if (applicationForm) applicationForms.set(form, applicationForm);
  });

  all("[data-fly-link-application-dialog]", root).forEach((dialog) => {
    const form = dialog.querySelector("[data-fly-link-application-form]");
    const applicationForm = applicationForms.get(form);

    setupLinkApplicationDialog(dialog, root, controller, {
      onFormOpen: () => applicationForm?.ensureCaptcha(),
    });
  });
}
