export const authorsPagePreflight = {
  getCSS: () => String.raw`
body.fly-authors-page { --fly-authors-directory-gap: 80px; }
.fly-authors-page-shell { width: 100%; min-width: 0; padding-bottom: var(--content-padding-x); }
.fly-authors-hero { display: flex; width: 100%; min-width: 0; align-items: center; flex-wrap: wrap; gap: 30px var(--content-padding-x); margin-bottom: var(--fly-authors-directory-gap); }
.fly-authors-hero-copy, .fly-authors-hero-media { width: calc(50% - 15px); min-width: 0; flex: 0 0 calc(50% - 15px); }
.fly-authors-hero-copy { display: flex; flex-direction: column; align-items: flex-start; gap: 16px; padding: 30px 30px 30px 0; }
.fly-authors-hero--without-cover .fly-authors-hero-copy { width: min(100%, 700px); flex-basis: min(100%, 700px); }
.fly-authors-hero-copy h1 { margin: 0; color: var(--text); font-size: 28px; font-weight: 600; letter-spacing: 0; line-height: 30.8px; }
.fly-authors-hero-copy > p:not(.fly-newsletter-status) { margin: 0; color: var(--muted); font-size: 16px; line-height: 24px; }
.fly-authors-hero-media { overflow: hidden; border-radius: 16px; background: var(--page-alt); aspect-ratio: 16 / 9; }
.fly-authors-hero-image { display: block; width: 100%; height: 100%; object-fit: cover; }
.fly-authors-newsletter { position: relative; display: flex; width: min(100%, 400px); min-width: 0; flex-direction: column; align-items: flex-start; gap: 12px; margin-top: 30px; }
.fly-authors-newsletter-label { margin-top: -4px; color: var(--text); font-size: 14px; font-weight: 500; line-height: 21px; }
.fly-authors-newsletter-control { position: relative; width: 100%; height: 50px; min-width: 0; }
.fly-authors-newsletter-control label { display: block; width: 100%; min-width: 0; }
.fly-authors-newsletter input { width: 100%; height: 50px; border: 0; border-radius: 32px; outline: 0; background: var(--page-alt); color: var(--text); padding: 12px 128px 12px 20px; font-size: 14px; font-weight: 500; line-height: 21px; }
.fly-authors-newsletter input:focus { box-shadow: 0 0 0 2px var(--accent); }
.fly-authors-newsletter .fly-button { position: absolute; top: 5px; right: 5px; min-height: 40px; border-radius: 32px; padding: 6px 16px; font-size: 14px; font-weight: 600; line-height: 21px; }
.fly-authors-newsletter .fly-newsletter-status { position: absolute; top: calc(100% + 6px); left: 16px; margin: 0; color: var(--muted); font-size: 14px; line-height: 21px; }
.fly-authors-newsletter .fly-newsletter-status:empty { display: none; }
.fly-authors-directory { display: grid; min-width: 0; gap: var(--fly-authors-directory-gap); margin-bottom: var(--fly-authors-directory-gap); }
.fly-authors-directory-section { position: relative; display: grid; min-width: 0; gap: 20px; }
.fly-authors-directory-header { position: relative; z-index: 6; display: flex; min-width: 0; align-items: flex-end; justify-content: space-between; gap: 24px; pointer-events: none; }
.fly-authors-directory-header > * { position: relative; z-index: 1; pointer-events: auto; }
.fly-authors-profile-copy { width: 100%; max-width: 700px; min-width: 0; }
.fly-authors-profile-name-row { display: flex; min-width: 0; align-items: center; gap: 12px; }
.fly-authors-profile-avatar { display: block; width: 46px; height: 46px; flex: 0 0 46px; border-radius: 50%; background: var(--page-alt); object-fit: cover; }
.fly-authors-profile-copy h2 { min-width: 0; margin: 0; overflow: hidden; color: var(--text); font-size: 22px; font-weight: 600; letter-spacing: 0; line-height: 26.4px; text-overflow: ellipsis; white-space: nowrap; }
.fly-authors-profile-copy p { margin: 16px 0 0; color: var(--muted); font-size: 16px; line-height: 24px; }
.fly-authors-directory-header .fly-section-view-link { min-height: 33px; }
.fly-authors-post-carousel { position: relative; min-width: 0; }
.fly-authors-post-rail { display: flex; min-width: 0; gap: var(--content-padding-x); margin: -50px calc(var(--content-padding-x) * -1); overflow-x: auto; overflow-y: hidden; overscroll-behavior-inline: contain; padding: 50px var(--content-padding-x); scroll-behavior: smooth; scroll-padding-inline: var(--content-padding-x); scroll-snap-type: x mandatory; scrollbar-width: none; touch-action: pan-x; -webkit-overflow-scrolling: touch; }
.fly-authors-post-rail::-webkit-scrollbar { display: none; }
.fly-authors-post-slide { min-width: 0; flex: 0 0 100%; scroll-snap-align: start; scroll-snap-stop: always; }
.fly-authors-post-slide .fly-taxonomy-post-card--author-preview { background: transparent; }
.fly-authors-carousel-arrow { position: absolute; top: var(--fly-authors-control-center-y, calc((100% - 94px) / 2)); z-index: 5; display: inline-flex; width: 38px; height: 38px; align-items: center; justify-content: center; border: 0; border-radius: 50%; background: #fff; box-shadow: 0 5px 20px -7px rgba(0, 0, 0, 0.2); color: var(--text); padding: 0; transform: translateY(-50%); transition: background-color 150ms ease, color 150ms ease, opacity 150ms ease, visibility 150ms ease; }
.fly-authors-post-carousel > .fly-carousel-arrow--prev { left: calc(var(--content-padding-x) * -1); }
.fly-authors-post-carousel > .fly-carousel-arrow--next { right: calc(var(--content-padding-x) * -1); }
.fly-authors-carousel-arrow:not(:disabled) { cursor: pointer; }
.fly-authors-carousel-arrow:not(:disabled):hover, .fly-authors-carousel-arrow:focus-visible { background: var(--hover-bg-color); color: var(--text); }
.fly-authors-post-carousel > .fly-carousel-arrow.fly-authors-carousel-arrow:not(:disabled):hover, .fly-authors-post-carousel > .fly-carousel-arrow.fly-authors-carousel-arrow:focus-visible { transform: translateY(-50%); }
.fly-authors-carousel-arrow:disabled { visibility: hidden; opacity: 0; pointer-events: none; }
.fly-authors-carousel-arrow .fly-iconify { width: 20px; height: 20px; flex-basis: 20px; }
.fly-authors-empty { margin: 0 0 var(--fly-authors-directory-gap); color: var(--muted); font-size: 16px; line-height: 24px; }
@media (min-width: 540px) { .fly-authors-directory-header { margin-bottom: 10px; } .fly-authors-post-slide { flex-basis: calc((100% - var(--content-padding-x)) / 2); } .fly-authors-carousel-arrow { width: 40px; height: 40px; } .fly-authors-post-carousel > .fly-carousel-arrow--prev { left: -20px; } .fly-authors-post-carousel > .fly-carousel-arrow--next { right: -20px; } }
@media (min-width: 768px) and (max-width: 991px) { .fly-authors-hero-copy { width: 70%; max-width: 70%; flex-basis: 70%; } .fly-authors-hero-media { width: 100%; flex-basis: 100%; } }
@media (min-width: 992px) { .fly-authors-post-slide { flex-basis: calc((100% - var(--content-padding-x) * 2) / 3); } }
@media (min-width: 1575px) { .fly-authors-post-slide { flex-basis: calc((100% - var(--content-padding-x) * 3) / 4); } }
@media (min-width: 1900px) { .fly-authors-post-slide { flex-basis: calc((100% - var(--content-padding-x) * 4) / 5); } }
@media (max-width: 767px) { .fly-authors-hero-copy, .fly-authors-hero-media { width: 100%; max-width: 100%; flex-basis: 100%; } .fly-authors-hero-copy { padding: 30px 0; } }
@media (max-width: 539px) { body.fly-authors-page { --fly-authors-directory-gap: 60px; } .fly-authors-newsletter-control { height: auto; } .fly-authors-newsletter-control label, .fly-authors-newsletter .fly-button { width: 100%; } .fly-authors-newsletter input { height: 48px; padding: 10px 20px; font-size: 16px; } .fly-authors-newsletter .fly-button { position: static; height: 40px; margin-top: 8px; } .fly-authors-newsletter .fly-newsletter-status { position: static; width: 100%; } .fly-authors-directory-header { display: block; } .fly-authors-directory-header .fly-section-view-link { display: flex; width: 100%; margin-top: 20px; } .fly-authors-profile-avatar { width: 36px; height: 36px; flex-basis: 36px; } }
@media (prefers-reduced-motion: reduce) { .fly-authors-post-rail { scroll-behavior: auto; } .fly-authors-carousel-arrow { transition: none; } }
`,
};
