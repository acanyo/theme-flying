const CJK_PATTERN =
  /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/gu;

export function setupReadingTime(page) {
  const content = page.querySelector("[data-fly-post-content]");
  const output = page.querySelector("[data-fly-reading-time]");
  if (!content || !output) return;

  const text = content.innerText.replace(/\s+/g, " ").trim();
  const cjkCount = (text.match(CJK_PATTERN) || []).length;
  const latinWords = text
    .replace(CJK_PATTERN, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(cjkCount / 500 + latinWords / 220));

  output.textContent = `${minutes} 分钟阅读`;
}
