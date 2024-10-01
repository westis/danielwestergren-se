<script setup lang="ts">
import {
  Mic as MicrophoneIcon,
  BookOpen as PresentationIcon,
  Video as VideoCameraIcon,
  FileText as PencilIcon,
} from "lucide-vue-next";

const props = defineProps<{
  services: Array<{
    name: string;
    description: string;
    icon: string;
  }>;
}>();

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "MicrophoneIcon":
      return MicrophoneIcon;
    case "PresentationChartIcon":
      return PresentationIcon;
    case "VideoCameraIcon":
      return VideoCameraIcon;
    case "PencilIcon":
      return PencilIcon;
    default:
      return MicrophoneIcon;
  }
};
</script>

<template>
  <div class="bg-white dark:bg-gray-900 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8"
      >
        Tjänster
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="service in services"
          :key="service.name"
          class="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center"
        >
          <component
            :is="getIcon(service.icon)"
            class="h-12 w-12 text-gray-900 dark:text-white mb-4"
            aria-hidden="true"
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
  </div>
</template>
