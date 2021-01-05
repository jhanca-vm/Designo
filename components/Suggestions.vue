<template>
  <section class="px-6 grid gap-y-6 sm:px-0 lg:grid-cols-2 lg:gap-x-8">
    <n-link
      v-for="({ slug, name, img }, index) in suggestions"
      :to="`/${slug}`"
      class="suggestion block relative"
      :key="slug"
    >
      <picture>
        <source media="(min-width: 1024px)" :srcset="img.desktop" />
        <source media="(min-width: 640px)" :srcset="img.tablet" />
        <img class="w-full rounded-2xl" :src="img.mobile" :alt="name" />
      </picture>
      <div
        class="bg-black bg-opacity-50 rounded-2xl text-white absolute inset-0 flex flex-col items-center justify-center uppercase hover:bg-peach-200 hover:bg-opacity-80"
      >
        <h2 class="font-medium tracking-wider">{{ name }}</h2>
        <p class="mt-4 sm:mt-7">view projects <span class="inline-block ml-1" /></p>
      </div>
    </n-link>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: ['suggestions'],
  });
</script>

<style>
  .suggestion h2 {
    font-size: 1.75rem;
  }

  .suggestion p {
    letter-spacing: 0.3125em;
  }

  .suggestion p span {
    background-image: url('~assets/shared/mobile/icon-right-arrow.svg');
    height: 0.625rem;
    width: 0.4375rem;
  }

  @media (min-width: 768px) {
    .suggestion h2 {
      font-size: 2.5rem;
    }
  }
</style>
