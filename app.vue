<script setup lang="ts">
import { useTheme } from "@/composables/useTheme";

const { initTheme } = useTheme();

// Initialize theme on app mount
onMounted(() => {
  initTheme();
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
