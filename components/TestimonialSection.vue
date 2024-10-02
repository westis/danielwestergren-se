<template>
  <section class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <h2
          class="text-lg font-semibold leading-8 tracking-tight text-indigo-600"
        >
          Testimonials
        </h2>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          We have worked with thousands of amazing people
        </p>
      </div>
      <div
        class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none"
      >
        <div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial._id"
            class="pt-8 sm:inline-block sm:w-full sm:px-4"
          >
            <figure class="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
              <blockquote class="text-gray-900">
                <p>"{{ testimonial.content }}"</p>
              </blockquote>
              <figcaption class="mt-6 flex items-center gap-x-4">
                <img
                  class="h-10 w-10 rounded-full bg-gray-50"
                  :src="testimonial.image.asset.url"
                  :alt="testimonial.image.alt"
                />
                <div>
                  <div class="font-semibold text-gray-900">
                    {{ testimonial.name }}
                  </div>
                  <div class="text-gray-600">{{ testimonial.role }}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const query = groq`*[_type == "testimonial"]{
  _id,
  name,
  role,
  content,
  image {
    asset->{url},
    alt
  }
}`;
const { data: testimonials } = await useSanityQuery(query);
</script>
