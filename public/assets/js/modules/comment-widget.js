import { all } from "../utils/dom.js?fly=1.0.30";

const refreshedScripts = new WeakSet();

function isOfficialInitializer(script) {
  if (script.hasAttribute("src")) return false;

  const type = (script.getAttribute("type") || "").trim().toLowerCase();
  const source = script.textContent || "";

  if (type === "module") {
    return /^\s*import\s*\{\s*init\s*\}\s*from\s*["']\/plugins\/PluginCommentWidget\/assets\/static\/comment-widget\.js(?:\?[^"']*)?["']/.test(
      source,
    );
  }

  return (
    ["", "text/javascript", "application/javascript"].includes(type) &&
    /^\s*CommentWidget\.init\s*\(/.test(source)
  );
}

export function refreshOfficialComments(root) {
  // Swup inserts inert scripts; full page loads already run these initializers.
  all(".fly-post-comments-body > script", root).forEach((script) => {
    if (refreshedScripts.has(script) || !isOfficialInitializer(script)) return;

    const replacement = script.ownerDocument.createElement("script");
    for (const attribute of script.attributes) {
      replacement.setAttribute(attribute.name, attribute.value);
    }
    if (script.nonce) replacement.nonce = script.nonce;
    replacement.textContent = script.textContent;

    refreshedScripts.add(script);
    refreshedScripts.add(replacement);
    script.replaceWith(replacement);
  });
}
