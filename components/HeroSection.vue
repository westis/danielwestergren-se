<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";

const heroImage = ref("/daniel-speaker.jpg");
const roles = ref(["Journalist", "Speaker", "Föreläsare", "Poddare"]);
</script>

<template>
  <div class="bg-gray-800 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/3 mb-8 md:mb-0">
          <img
            :src="heroImage"
            alt="Daniel Westergren speaking"
            class="rounded-full w-64 h-64 object-cover mx-auto"
          />
        </div>
        <div class="md:w-2/3 text-center md:text-left md:pl-8">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Daniel Westergren
          </h1>
          <p class="mt-3 text-xl text-gray-300">Din expert inom ultralöpning</p>
          <div
            class="flex flex-wrap justify-center md:justify-start gap-2 mt-5 mb-6"
          >
            <span
              v-for="(role, index) in roles"
              :key="index"
              class="bg-gray-700 px-3 py-1 rounded-full text-sm text-white"
            >
              {{ role }}
            </span>
          </div>
          <div class="mt-5">
            <Button size="lg">Boka Daniel</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
