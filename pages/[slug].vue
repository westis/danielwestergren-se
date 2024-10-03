<template>
  <div v-if="page" class="mx-auto max-w-7xl px-6 lg:px-8 py-24">
    <h1 class="text-4xl font-bold mb-8" data-sanity-edit-target="title">
      {{ page.title }}
    </h1>
    <div class="prose prose-lg" data-sanity-edit-target="content">
      <SanityContent :blocks="page.content" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;

const query = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  content
}`;
const { data: page } = await useSanityQuery(query, { slug });

if (!page.value) {
  throw createError({ statusCode: 404, message: "Page not found" });
}
</script>
