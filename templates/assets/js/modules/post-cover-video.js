import { all } from "../utils/dom.js?fly=1.0.33";

const VIDEO_SELECTOR = "[data-fly-post-cover-video]";

export function setupPostCoverVideo(root) {
  function configure(video) {
    if (video.dataset.flyPostCoverVideoReady !== "true") {
      video.dataset.flyPostCoverVideoReady = "true";
      video.muted = true;
      video.defaultMuted = true;
      video.loop = true;
      video.playsInline = true;

      video.addEventListener("error", () => {
        video.dataset.flyPostCoverVideoFailed = "true";
        video.hidden = true;
        video.pause();
      });
      video.addEventListener("loadeddata", () => {
        delete video.dataset.flyPostCoverVideoFailed;
        video.hidden = false;
        play(video);
      });
    }

    play(video);
  }

  function play(video) {
    if (video.dataset.flyPostCoverVideoFailed === "true") return;

    video.hidden = false;
    video.autoplay = true;
    video.setAttribute("autoplay", "");
    void video.play().catch(() => {
      // The poster remains visible when the browser declines autoplay.
    });
  }

  all(VIDEO_SELECTOR, root).forEach(configure);
}
