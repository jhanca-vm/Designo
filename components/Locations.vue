<template>
  <section
    class="locations my-28 grid gap-y-12 sm:gap-y-14 lg:grid-cols-3 lg:gap-x-7 lg:py-2 xl:py-0 xl:my-40"
  >
    <div
      class="text-center font-medium uppercase"
      v-for="({ name, img, bgTransform }, index) in locations"
      :key="index + 1"
    >
      <figure class="relative">
        <span
          :style="{ transform: bgTransform }"
          class="rounded-full bg-gradient opacity-20 inline-block"
        />
        <img class="absolute inset-0 mx-auto" :src="img" :alt="name" />
      </figure>
      <h3 class="text-xl leading-normal tracking-max mt-8 mb-6">{{ name }}</h3>
      <n-link
        class="bg-peach-200 text-white rounded-lg h-14 inline-flex items-center justify-center hover:bg-peach-100"
        to="/locations"
      >
        See Location
      </n-link>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    data() {
      return {
        locations: [
          {
            name: 'Canada',
            img: require('~/assets/shared/mobile/illustration-canada.svg'),
            bgTransform: 'matrix(0, -1, -1, 0, 0, 0)',
          },
          {
            name: 'Australia',
            img: require('~/assets/shared/mobile/illustration-australia.svg'),
            bgTransform: 'matrix(-1, 0, 0, 1, 0, 0)',
          },
          {
            name: 'United Kingdom',
            img: require('~/assets/shared/mobile/illustration-united-kingdom.svg'),
            bgTransform: 'matrix(0, 1, 1, 0, 0, 0)',
          },
        ],
      };
    },
  });
</script>

<style>
  .locations figure span {
    height: 12.625rem;
    width: 12.625rem;
  }

  .locations a {
    font-size: 0.9375rem;
    width: 9.5rem;
  }
</style>
