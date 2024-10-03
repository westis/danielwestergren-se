// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/sanity",
    "@nuxt/icon",
  ],
  sanity: {
    projectId: "p8xdhqgt",
    dataset: "production",
    useCdn: true,
    visualEditing: {
      token: process.env.NUXT_SANITY_VISUAL_EDITING_TOKEN,
      studioUrl: process.env.NUXT_SANITY_VISUAL_EDITING_STUDIO_URL,
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  // The generate section with routes has been removed
});
