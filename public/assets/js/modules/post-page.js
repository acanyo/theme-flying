import { setupPostComments } from "./post/comments.js";
import { setupReadingTime } from "./post/reading-time.js?fly=1.0.117";
import { setupPostShare } from "./post/share.js";
import { setupPostToc } from "./post/toc.js";

export function setupPostPage(root) {
  window.flyPostPageController?.abort();

  const page = root.querySelector("[data-fly-post-page]");
  if (!page) {
    delete window.flyPostPageController;
    return;
  }

  const controller = new AbortController();
  window.flyPostPageController = controller;

  setupReadingTime(page);
  setupPostToc(page, controller.signal);
  setupPostComments(page, controller.signal);
  setupPostShare(page, controller.signal);
}
