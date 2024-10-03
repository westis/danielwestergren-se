import { defineNuxtPlugin } from "#app";
import { createClient } from "@sanity/client";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const client = createClient({
    projectId: config.public.sanity.projectId,
    dataset: config.public.sanity.dataset,
    useCdn: false, // set to `true` to fetch from edge cache
    apiVersion: "2024-09-03", // use current date (YYYY-MM-DD) to target the latest API version
  });

  return {
    provide: {
      sanity: client,
    },
  };
});
