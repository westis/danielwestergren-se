<template>
  <div class="bg-gray-900 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-white text-center mb-8">
        Ultramarathon Community
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(community, index) in communities"
          :key="index"
          class="bg-gray-800 rounded-lg p-6"
        >
          <h3 class="text-xl font-semibold text-white mb-2">
            {{ community.title }}
          </h3>
          <p class="text-gray-300 mb-4">{{ community.description }}</p>
          <Button size="sm" variant="secondary">{{
            community.buttonText
          }}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";

const communities = [
  {
    title: "ultramarathon.se",
    description:
      "Din guide till ultralöpning i Sverige, hem för podden Ultraaktuellt",
    buttonText: "Besök ultramarathon.se",
  },
  {
    title: "Ultrarunning News",
    description:
      "De senaste nyheterna inom ultralöpning - internationell täckning",
    buttonText: "Besök Ultrarunning News",
  },
];
</script>
