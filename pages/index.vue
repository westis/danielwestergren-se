<script setup lang="ts">
import { ref } from "vue";

const services = [
  {
    name: "Speaker",
    description: "Engagerande speaker vid ultralöpningsevenemang",
    icon: "MicrophoneIcon",
  },
  {
    name: "Föreläsare",
    description: "Inspirerande föreläsningar om ultralöpning",
    icon: "PresentationChartIcon",
  },
  {
    name: "Liverapportering",
    description: "Realtidsuppdateringar från ultralöpningar",
    icon: "VideoCameraIcon",
  },
  {
    name: "Artikelskrivande",
    description: "Expertartiklar om ultralöpning",
    icon: "PencilIcon",
  },
];
</script>

<template>
  <div class="bg-gray-900">
    <HeroSection />
    <ServicesSection :services="services" />
    <TestimonialsSection />
    <CommunitySection />
    <LatestNewsSection />
  </div>
</template>
