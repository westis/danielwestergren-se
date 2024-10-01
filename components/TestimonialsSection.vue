<template>
  <div class="bg-gray-100 dark:bg-gray-800 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8"
      >
        Referenser
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-white dark:bg-gray-700 rounded-lg p-6"
        >
          <p class="text-gray-600 dark:text-gray-300 italic mb-4">
            "{{ testimonial.quote }}"
          </p>
          <p class="text-gray-900 dark:text-white font-semibold text-right">
            - {{ testimonial.author }}, {{ testimonial.role }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote:
      "Daniels expertis och energi lyfte vår ultralöpning till en ny nivå.",
    author: "Anna Svensson",
    role: "Arrangör",
  },
  {
    quote: "En oumbärlig röst inom svensk ultralöpning.",
    author: "Erik Andersson",
    role: "Löpare",
  },
  {
    quote:
      "Daniels liverapportering gjorde det möjligt för oss att följa loppet i realtid.",
    author: "Maria Nilsson",
    role: "Tävlingsledare",
  },
];
</script>
