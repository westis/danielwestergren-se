<script setup lang="ts">
import { ref, onMounted } from "vue";
import { client } from "@/sanityClient";

interface Service {
  _id: string;
  name: string;
  description: string;
  icon: string;
}

const services = ref<Service[]>([]);
const sectionTitle = ref("");

onMounted(async () => {
  const query = `
    *[_type == "homePage" && isHomePage == true][0] {
      servicesTitle,
      "services": services[]-> {
        _id,
        name,
        description,
        "icon": icon.name
      }
    }
  `;

  try {
    const result = await client.fetch(query);
    if (result) {
      sectionTitle.value = result.servicesTitle || "Tjänster";
      services.value = result.services?.filter(Boolean) || [];
    }
  } catch (error) {
    console.error("Error fetching services:", error);
  }
});
</script>

<template>
  <section class="bg-white dark:bg-gray-900 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8"
      >
        {{ sectionTitle }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="service in services"
          :key="service._id"
          class="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center"
        >
          <Icon
            v-if="service.icon"
            :name="service.icon"
            class="h-12 w-12 text-gray-900 dark:text-white mb-4"
          />
          <h3
            class="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2"
          >
            {{ service.name }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-center">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
