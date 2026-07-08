import { defineConfig, presetWind4 } from "unocss";

import { preflights } from "./unocss/preflights";
import { shortcuts } from "./unocss/shortcuts";
import { theme } from "./unocss/theme";

export default defineConfig({
  presets: [presetWind4()],
  preflights,
  blocklist: ["me"],
  content: {
    filesystem: ["templates/**/*.html", "templates/assets/js/**/*.js"],
  },
  theme,
  shortcuts,
});
