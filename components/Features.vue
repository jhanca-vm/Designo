<template>
  <section
    class="features px-6 text-center grid gap-y-20 sm:px-0 sm:gap-y-8 sm:text-left lg:text-center lg:grid-cols-3 lg:gap-x-8"
  >
    <div
      class="sm:flex sm:items-center lg:block"
      v-for="feature in features"
      :key="feature.title"
    >
      <figure class="mx-auto relative">
        <span
          :style="{ transform: feature.bgTransform }"
          class="rounded-full bg-gradient opacity-20 inline-block"
        />
        <img class="absolute inset-0 mx-auto" :src="feature.img" :alt="feature.title" />
      </figure>
      <span class="sm:ml-12 lg:ml-0">
        <h3
          class="uppercase font-medium text-xl tracking-max mt-9 mb-7 sm:mt-0 sm:mb-4 lg:mt-9 lg:mb-7"
        >
          {{ feature.title }}
        </h3>
        <p>{{ feature.description }}</p>
      </span>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    data() {
      return {
        features: [
          {
            img: require('~/assets/home/mobile/illustration-passionate.svg'),
            title: 'passionate',
            description:
              'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
            bgTransform: 'matrix(-1, 0, 0, 1, 0, 0)',
          },
          {
            img: require('~/assets/home/mobile/illustration-resourceful.svg'),
            title: 'resourceful',
            description:
              'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
            bgTransform: 'matrix(0, 1, 1, 0, 0, 0)',
          },
          {
            img: require('~/assets/home/mobile/illustration-friendly.svg'),
            title: 'friendly',
            description:
              ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
            bgTransform: 'matrix(0, -1, -1, 0, 0, 0)',
          },
        ],
      };
    },
  });
</script>

<style>
  .features figure span {
    height: 12.625rem;
    width: 12.625rem;
  }

  .features figure img {
    transform: inherit;
  }
</style>
