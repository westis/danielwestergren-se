<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Button } from "@/components/ui/button";
import { client } from "@/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

const heroData = ref({
  image: null,
  title: "",
  subtitle: "",
  roles: [],
  buttonText: "",
});

function urlFor(source: any) {
  return builder.image(source);
}

onMounted(async () => {
  const result = await client.fetch(`
   *[_type == "homePage" && isHomePage == true][0] {
      hero {
        image,
        title,
        subtitle,
        roles,
        buttonText
      }
    }
  `);
  heroData.value = result.hero;
});
</script>

<template>
  <div class="bg-gray-100 dark:bg-gray-800 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/3 mb-8 md:mb-0">
          <img
            v-if="heroData.image"
            :src="
              urlFor(heroData.image).width(256).height(256).fit('crop').url()
            "
            :alt="heroData.title"
            class="rounded-full w-64 h-64 object-cover mx-auto"
          />
        </div>
        <div class="md:w-2/3 text-center md:text-start md:ps-8">
          <h1
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
            data-sanity-edit-target="hero.title"
          >
            {{ heroData.title }}
          </h1>
          <p class="mt-3 text-xl text-gray-600 dark:text-gray-300">
            {{ heroData.subtitle }}
          </p>
          <div
            class="flex flex-wrap justify-center md:justify-start gap-2 mt-5 mb-6"
          >
            <span
              v-for="(role, index) in heroData.roles"
              :key="index"
              class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300"
            >
              {{ role }}
            </span>
          </div>
          <div class="mt-5">
            <Button size="lg">{{ heroData.buttonText }}</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
