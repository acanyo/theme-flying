const VIEWPORT_PADDING = 16;
const ANCHOR_GAP = 10;

export function placeAuthorPopover(anchor, popover) {
  const anchorRect = anchor.getBoundingClientRect();
  const popoverWidth = popover.offsetWidth;
  const popoverHeight = popover.offsetHeight;
  const maxLeft = Math.max(
    VIEWPORT_PADDING,
    window.innerWidth - popoverWidth - VIEWPORT_PADDING,
  );
  const maxTop = Math.max(
    VIEWPORT_PADDING,
    window.innerHeight - popoverHeight - VIEWPORT_PADDING,
  );

  const left = Math.min(Math.max(anchorRect.left, VIEWPORT_PADDING), maxLeft);
  const belowTop = anchorRect.bottom + ANCHOR_GAP;
  const aboveTop = anchorRect.top - popoverHeight - ANCHOR_GAP;
  const preferredTop =
    belowTop + popoverHeight <= window.innerHeight - VIEWPORT_PADDING ||
    aboveTop < VIEWPORT_PADDING
      ? belowTop
      : aboveTop;
  const top = Math.min(Math.max(preferredTop, VIEWPORT_PADDING), maxTop);

  popover.style.setProperty(
    "--fly-author-popover-left",
    `${Math.round(left)}px`,
  );
  popover.style.setProperty("--fly-author-popover-top", `${Math.round(top)}px`);
}
