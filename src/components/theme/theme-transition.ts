const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const TRANSITION_DURATION = 360;
const TRANSITION_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

interface ThemeTransitionOptions {
  origin?: Element | null;
  update: () => void | Promise<void>;
}

interface ViewTransition {
  ready: Promise<void>;
  finished: Promise<void>;
}

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void | Promise<void>) => ViewTransition;
};

function getRevealGeometry(origin?: Element | null) {
  const rect = origin?.getBoundingClientRect();
  const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
  const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );

  return { radius, x, y };
}

export async function runThemeTransition({
  origin,
  update,
}: ThemeTransitionOptions): Promise<void> {
  const transitionDocument = document as ViewTransitionDocument;
  const prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;

  if (!transitionDocument.startViewTransition || prefersReducedMotion) {
    await update();
    return;
  }

  const { radius, x, y } = getRevealGeometry(origin);
  let updateStarted = false;

  try {
    const transition = transitionDocument.startViewTransition(async () => {
      updateStarted = true;
      await update();
    });

    await transition.ready;

    const animationOptions: KeyframeAnimationOptions & {
      pseudoElement: string;
    } = {
      duration: TRANSITION_DURATION,
      easing: TRANSITION_EASING,
      pseudoElement: "::view-transition-new(root)",
    };

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0 at ${x}px ${y}px)`,
          `circle(${radius}px at ${x}px ${y}px)`,
        ],
      },
      animationOptions,
    );

    await transition.finished;
  } catch {
    if (!updateStarted) {
      await update();
    }
  }
}
