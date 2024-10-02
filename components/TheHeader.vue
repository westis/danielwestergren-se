<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">{{ siteSettings?.title }}</span>
          <img
            class="h-8 w-auto"
            :src="siteSettings?.logo?.asset.url"
            :alt="siteSettings?.logo?.alt"
          />
        </a>
      </div>
      <!-- ... rest of the navigation ... -->
    </nav>
  </header>
</template>

<script setup lang="ts">
const query = groq`*[_type == "siteSettings"][0]{
  title,
  logo {
    asset->{url},
    alt
  }
}`;
const { data: siteSettings } = await useSanityQuery(query);
</script>
