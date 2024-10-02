<template>
  <div class="bg-gray-100 dark:bg-gray-800 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8"
      >
        {{ sectionTitle }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial._id"
          class="bg-white dark:bg-gray-700 rounded-lg p-6"
        >
          <p class="text-gray-600 dark:text-gray-300 italic mb-4">
            "{{ testimonial.content }}"
          </p>
          <p class="text-gray-900 dark:text-white font-semibold text-end">
            - {{ testimonial.name }}, {{ testimonial.role }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { client } from "@/sanityClient";

interface Testimonial {
  _id: string;
  content: string;
  name: string;
  role: string;
}

const testimonials = ref<Testimonial[]>([]);
const sectionTitle = ref("");

onMounted(async () => {
  const query = `
    *[_type == "homePage" && isHomePage == true][0] {
      testimonialsTitle,
      "testimonials": testimonials[]-> {
        _id,
        content,
        name,
        role
      }
    }
  `;

  try {
    const result = await client.fetch(query);
    if (result) {
      sectionTitle.value = result.testimonialsTitle || "Referenser";
      testimonials.value = result.testimonials?.filter(Boolean) || [];
    }
  } catch (error) {
    console.error("Error fetching testimonials:", error);
  }
});
</script>
