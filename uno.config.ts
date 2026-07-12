import { defineConfig, presetWind4 } from "unocss";

import { preflights } from "./unocss/preflights";
import { shortcuts } from "./unocss/shortcuts";
import { theme } from "./unocss/theme";

export default defineConfig({
  presets: [presetWind4()],
  preflights,
  blocklist: ["me"],
  content: {
    filesystem: ["src/**/*.{astro,vue}", "public/assets/js/**/*.js"],
  },
  theme: theme as any,
  shortcuts,
});
