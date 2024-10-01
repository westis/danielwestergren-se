<script setup lang="ts">
import { ref } from "vue";
import { useTheme } from "@/composables/useTheme";
import { SunIcon, MoonIcon, MenuIcon, GlobeIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

const { isDarkMode, toggleTheme } = useTheme();

const navigation = [
  { name: "Hem", href: "/" },
  { name: "Om Daniel", href: "/om-daniel" },
  { name: "Tjänster", href: "/tjanster" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blogg", href: "/blogg" },
  { name: "Podcast", href: "/podcast" },
  { name: "Kontakt", href: "/kontakt" },
];

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div
    :class="{ dark: isDarkMode }"
    class="min-h-screen bg-white dark:bg-gray-900"
  >
    <header class="bg-white dark:bg-gray-900 shadow-sm">
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div class="flex w-full items-center justify-between py-6">
          <div class="flex items-center">
            <NuxtLink
              to="/"
              class="text-2xl font-bold text-gray-900 dark:text-white"
            >
              Daniel Westergren
            </NuxtLink>
          </div>
          <div class="hidden space-x-6 lg:flex">
            <NuxtLink
              v-for="link in navigation"
              :key="link.name"
              :to="link.href"
              class="text-base font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-4">
            <Button @click="toggleTheme" variant="ghost" size="icon">
              <SunIcon
                v-if="isDarkMode"
                class="h-5 w-5 text-gray-900 dark:text-white"
              />
              <MoonIcon v-else class="h-5 w-5 text-gray-900 dark:text-white" />
            </Button>
            <Button variant="ghost" size="icon">
              <GlobeIcon class="h-5 w-5 text-gray-900 dark:text-white" />
            </Button>
            <Button
              @click="toggleMenu"
              class="lg:hidden"
              variant="ghost"
              size="icon"
            >
              <MenuIcon class="h-6 w-6 text-gray-900 dark:text-white" />
            </Button>
          </div>
        </div>
        <div v-show="isMenuOpen" class="py-4 lg:hidden">
          <div class="flex flex-col space-y-2">
            <NuxtLink
              v-for="link in navigation"
              :key="link.name"
              :to="link.href"
              class="text-base font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              @click="isMenuOpen = false"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer class="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-center md:text-left mb-4 md:mb-0">
            © {{ new Date().getFullYear() }} Daniel Westergren. Alla rättigheter
            förbehållna.
          </p>
          <div class="flex space-x-6">
            <a href="#" class="hover:text-gray-900 dark:hover:text-white"
              >Facebook</a
            >
            <a href="#" class="hover:text-gray-900 dark:hover:text-white"
              >Instagram</a
            >
            <a href="#" class="hover:text-gray-900 dark:hover:text-white"
              >LinkedIn</a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
