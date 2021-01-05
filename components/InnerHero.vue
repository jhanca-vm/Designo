<template>
  <section
    class="inner-hero bg-peach-200 bg-no-repeat text-white h-80 text-center flex flex-col justify-center bg-right-top px-6 sm:rounded-2xl"
  >
    <h1 class="font-medium text-4xl leading-normal mb-6 sm:text-5xl">{{ title }}</h1>
    <p class="text-hero sm:text-base sm:max-w-sm sm:mx-auto">{{ description }}</p>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: ['title', 'description'],
  });
</script>

<style>
  .inner-hero {
    background-image: url('~assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg');
  }

  @media (min-width: 640px) {
    .inner-hero {
      background-image: url('~assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg');
      background-position: -1.5rem center;
      height: 15.75rem;
    }
  }

  @media (min-width: 1024px) {
    .inner-hero {
      background-position: right center;
    }
  }
</style>
