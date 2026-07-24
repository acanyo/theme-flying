function setInputPlaceholders(root) {
  root.querySelectorAll(".form-item label[for]").forEach((label) => {
    const inputId = label.getAttribute("for");
    if (!inputId) return;

    const input = document.getElementById(inputId);
    if (!(input instanceof HTMLInputElement)) return;
    if (input.type === "hidden" || input.type === "checkbox") return;
    if (input.placeholder) return;

    const placeholder = label.textContent?.trim();
    if (placeholder) input.placeholder = placeholder;
  });
}

function setCurrentYear(root) {
  const currentYear = String(new Date().getFullYear());
  root.querySelectorAll("[data-fly-current-year]").forEach((element) => {
    element.textContent = currentYear;
  });
}

function markAuthFlow(root) {
  const form = root.querySelector("form.halo-form");
  if (!form) return;

  if (form.id === "login-form") root.dataset.flyAuthFlow = "login";
  if (form.id === "signup-form") root.dataset.flyAuthFlow = "signup";
}

function enhanceLogoutFlow(root) {
  if (!document.body.classList.contains("fly-auth-page--logout")) return;

  const wrapper = root.querySelector(".halo-form-wrapper");
  const logoutForm = wrapper?.querySelector("form.halo-form");
  if (!wrapper || !logoutForm) return;

  logoutForm.dataset.flyLogoutActions = "";

  const cancelLink = [...root.querySelectorAll("a")].find(
    (link) => link.textContent?.trim() === "取消",
  );
  if (cancelLink && !logoutForm.contains(cancelLink)) {
    logoutForm.append(cancelLink);
  }

  const avatar = wrapper.querySelector("img");
  if (!avatar) return;

  let userCard = avatar;
  while (userCard.parentElement && userCard.parentElement !== wrapper) {
    userCard = userCard.parentElement;
  }
  userCard.classList.add("fly-auth-user-card");
}

function arrangeLoginActions(root) {
  if (root.dataset.flyAuthFlow !== "login") return;

  const loginForm = root.querySelector("form.halo-form");
  const signupNotice = root.querySelector(".signup-notice-content");
  const socialDivider = root.querySelector(".divider-wrapper");
  const socialProviders = root.querySelector(".pill-items");
  const submitButton = loginForm?.querySelector('button[type="submit"]');
  const submitItem = submitButton?.closest(".form-item");

  if (loginForm && signupNotice && submitItem) {
    const submitRow = document.createElement("div");
    submitRow.className = "fly-auth-submit-row";
    submitItem.before(submitRow);
    submitRow.append(submitItem, signupNotice);
  }

  if (socialDivider && socialProviders) {
    const socialRow = document.createElement("div");
    socialRow.className = "fly-auth-social-row";
    socialDivider.before(socialRow);
    socialRow.append(socialDivider, socialProviders);
  }
}

function repairBrokenSocialIcons(root) {
  const fallbackIcon = root.dataset.flySocialFallbackIcon;

  root.querySelectorAll(".social-auth-provider-form img").forEach((image) => {
    const repairOrHideImage = () => {
      if (fallbackIcon && image.dataset.flyFallbackApplied !== "true") {
        image.dataset.flyFallbackApplied = "true";
        image.removeAttribute("srcset");
        image.src = fallbackIcon;
        image.hidden = false;
        return;
      }

      image.hidden = true;
    };

    image.addEventListener("error", repairOrHideImage);
    if (image.complete && image.naturalWidth === 0) repairOrHideImage();
  });
}

function initAuthPage() {
  const root = document.querySelector("[data-fly-auth]");
  if (!root) return;

  setInputPlaceholders(root);
  setCurrentYear(root);
  markAuthFlow(root);
  arrangeLoginActions(root);
  enhanceLogoutFlow(root);
  repairBrokenSocialIcons(root);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAuthPage, { once: true });
} else {
  initAuthPage();
}
