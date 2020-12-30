<template>
  <n-link :to="`/${slug}`" class="category block relative">
    <picture>
      <source media="(min-width: 1024px)" :srcset="img.desktop" />
      <source media="(min-width: 640px)" :srcset="img.tablet" />
      <img class="w-full" :src="img.mobile" :alt="name" />
    </picture>
    <div
      class="bg-black bg-opacity-50 text-white absolute inset-0 flex flex-col items-center justify-center uppercase hover:bg-peach-200 hover:bg-opacity-80"
    >
      <h2 class="font-medium tracking-wider">{{ name }}</h2>
      <p class="mt-4 sm:mt-7">view projects <span class="inline-block ml-1" /></p>
    </div>
  </n-link>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: ['slug', 'name', 'img'],
  });
</script>

<style>
  .category,
  .category picture img,
  .category div {
    border-radius: 15px;
  }

  .category h2 {
    font-size: 1.75rem;
  }

  .category p {
    letter-spacing: 0.3125em;
  }

  .category p span {
    background-image: url('~assets/shared/mobile/icon-right-arrow.svg');
    height: 0.625rem;
    width: 0.4375rem;
  }

  @media (min-width: 768px) {
    .category h2 {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 1024px) {
    .category:first-of-type {
      grid-row: span 2;
    }
  }
</style>
