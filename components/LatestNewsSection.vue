<template>
  <div class="bg-gray-800 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-white text-center mb-8">
        Senaste nytt
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(news, index) in latestNews"
          :key="index"
          class="bg-gray-700 rounded-lg p-6"
        >
          <h3 class="text-xl font-semibold text-white mb-2">
            {{ news.title }}
          </h3>
          <p class="text-gray-300 mb-4">{{ news.description }}</p>
          <a href="#" class="text-blue-400 hover:text-blue-300">Läs mer</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const latestNews = [
  {
    title: "Ny poddavsnitt ute nu",
    description: "Lyssna på det senaste avsnittet av Ultraaktuellt",
  },
  {
    title: "Kommande ultralopp",
    description: "En översikt över höstens mest spännande tävlingar",
  },
  {
    title: "Träningsråd",
    description: "Expertråd för att förbereda dig inför din första ultra",
  },
];
</script>
