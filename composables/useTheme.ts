import { ref, watch } from "vue";

export const useTheme = () => {
  const isDarkMode = ref(false);

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem("darkMode", isDarkMode.value.toString());
  };

  const initTheme = () => {
    const darkMode = localStorage.getItem("darkMode");
    isDarkMode.value = darkMode ? JSON.parse(darkMode) : false;
  };

  watch(isDarkMode, (newValue) => {
    if (newValue) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return {
    isDarkMode,
    toggleTheme,
    initTheme,
  };
};
