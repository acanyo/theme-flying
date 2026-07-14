export type ResolvedTheme = "dark" | "light";
export type ThemePreference = ResolvedTheme | "system";

export const THEME_STORAGE_KEY = "flying-theme";

const THEME_QUERY = "(prefers-color-scheme: dark)";

export function isThemePreference(value: unknown): value is ThemePreference {
  return value === "dark" || value === "light" || value === "system";
}

export function readThemePreference(): ThemePreference {
  const preference = document.documentElement.dataset.colorScheme;
  return isThemePreference(preference) ? preference : "system";
}

export function resolveTheme(
  preference: ThemePreference,
  prefersDark = window.matchMedia(THEME_QUERY).matches,
): ResolvedTheme {
  if (preference === "system") {
    return prefersDark ? "dark" : "light";
  }

  return preference;
}

export function applyThemePreference(
  preference: ThemePreference,
  persist = true,
): ResolvedTheme {
  const resolvedTheme = resolveTheme(preference);
  const root = document.documentElement;

  root.dataset.colorScheme = preference;
  root.dataset.theme = resolvedTheme;

  if (persist) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, preference);
    } catch {
      // The visual preference still applies when browser storage is unavailable.
    }
  }

  return resolvedTheme;
}

export function nextThemePreference(
  preference: ThemePreference,
): ThemePreference {
  if (preference === "system") {
    return "dark";
  }

  return preference === "dark" ? "light" : "system";
}

export function observeSystemTheme(
  onResolvedThemeChange?: (theme: ResolvedTheme) => void,
): () => void {
  const mediaQuery = window.matchMedia(THEME_QUERY);
  const handleChange = () => {
    if (readThemePreference() !== "system") {
      return;
    }

    const resolvedTheme = applyThemePreference("system", false);
    onResolvedThemeChange?.(resolvedTheme);
  };

  mediaQuery.addEventListener("change", handleChange);
  return () => mediaQuery.removeEventListener("change", handleChange);
}
