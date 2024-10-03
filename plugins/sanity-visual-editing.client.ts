import { defineNuxtPlugin } from "#app";
import { enableVisualEditing } from "@sanity/visual-editing";

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();

  nuxtApp.vueApp.use(() => {
    enableVisualEditing({
      allowStudioOrigin: "http://localhost:3333", // Add this line
      history: {
        subscribe: (handleNavigate) => {
          return router.afterEach((to) => {
            handleNavigate({ type: "push", url: to.fullPath });
          });
        },
        update: (update) => {
          if (update.type === "push" || update.type === "replace") {
            router.push(update.url);
          } else if (update.type === "pop") {
            router.back();
          }
        },
      },
    });
  });
});
