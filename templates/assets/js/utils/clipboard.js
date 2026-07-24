function copyWithTextarea(value) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  const execCommand = Reflect.get(document, "execCommand");
  const didCopy =
    typeof execCommand === "function" && execCommand.call(document, "copy");
  textarea.remove();

  if (!didCopy) throw new Error("无法复制文本");
}

export async function copyText(value) {
  if (window.isSecureContext && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return;
    } catch {
      // Clipboard permissions can be denied; use the selection fallback below.
    }
  }

  copyWithTextarea(value);
}
