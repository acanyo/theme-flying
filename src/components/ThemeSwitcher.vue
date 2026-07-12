<script lang="ts" setup>
import { onMounted, ref } from "vue";

type Theme = "dark" | "light";

const STORAGE_KEY = "flying-theme";
const theme = ref<Theme>("light");

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function applyTheme(nextTheme: Theme) {
  theme.value = nextTheme;
  document.documentElement.dataset.theme = nextTheme;
  document.documentElement.dataset.colorScheme = nextTheme;
  localStorage.setItem(STORAGE_KEY, nextTheme);
}

function toggleTheme() {
  applyTheme(currentTheme() === "dark" ? "light" : "dark");
}

onMounted(() => {
  theme.value = currentTheme();
  document.documentElement.dataset.colorScheme = theme.value;
});
</script>

<template>
  <button
    class="fly-navbar-user"
    type="button"
    :aria-label="theme === 'dark' ? '切换到亮色模式' : '切换到暗色模式'"
    @click="toggleTheme"
  >
    <span
      class="fly-iconify fly-iconify--moon fly-theme-icon-dark"
      aria-hidden="true"
    />
    <span
      class="fly-iconify fly-iconify--sun fly-theme-icon-light"
      aria-hidden="true"
    />
  </button>
</template>
