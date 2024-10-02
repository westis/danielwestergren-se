<template>
  <div class="bg-white dark:bg-gray-900 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8"
      >
        {{ sectionTitle }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="item in communityItems"
          :key="item._id"
          class="bg-gray-100 dark:bg-gray-800 rounded-lg p-6"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {{ item.name }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ item.description }}
          </p>
          <Button size="sm" variant="secondary" @click="handleVisit(item.link)">
            Besök {{ item.name }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Button } from "@/components/ui/button";
import { client } from "@/sanityClient";

interface CommunityItem {
  _id: string;
  name: string;
  description: string;
  link: string;
}

const communityItems = ref<CommunityItem[]>([]);
const sectionTitle = ref("");

const handleVisit = (link: string) => {
  window.open(link, "_blank");
};

onMounted(async () => {
  const query = `
    *[_type == "homePage" && isHomePage == true][0] {
      communityTitle,
      "communityItems": communityItems[]-> {
        _id,
        name,
        description,
        link
      }
    }
  `;

  try {
    const result = await client.fetch(query);
    if (result) {
      sectionTitle.value = result.communityTitle || "Ultramarathon Community";
      communityItems.value = result.communityItems?.filter(Boolean) || [];
    }
  } catch (error) {
    console.error("Error fetching community items:", error);
  }
});
</script>
