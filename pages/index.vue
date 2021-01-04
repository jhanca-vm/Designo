<template>
  <main
    class="text-grey-200 leading-normal mb-72 pb-4 sm:px-10 sm:mb-80 lg:px-14 lg:mb-96 xl:px-0"
  >
    <Hero />
    <section class="categories px-6 grid gap-y-6 sm:px-0 lg:grid-cols-2 gap-x-6">
      <Category
        v-for="({ slug, name, img }, index) in categories"
        :name="name"
        :img="img"
        :slug="slug"
        :key="slug"
      />
    </section>
    <Features />
  </main>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Hero from '@/components/Hero.vue';
  import Category from '@/components/Category.vue';
  import Features from '@/components/Features.vue';

  export default Vue.extend({
    components: {
      Hero,
      Category,
      Features,
    },
    data() {
      return {
        categories: [
          {
            slug: 'web-design',
            name: 'web design',
            img: {
              desktop: require('~/assets/home/desktop/image-web-design-large.jpg'),
              mobile: require('~/assets/home/mobile/image-web-design.jpg'),
              tablet: require('~/assets/home/tablet/image-web-design.jpg'),
            },
          },
          {
            slug: 'app-design',
            name: 'app design',
            img: {
              desktop: require('~/assets/home/desktop/image-app-design.jpg'),
              mobile: require('~/assets/home/mobile/image-app-design.jpg'),
              tablet: require('~/assets/home/tablet/image-app-design.jpg'),
            },
          },
          {
            slug: 'graphic-design',
            name: 'graphic design',
            img: {
              desktop: require('~/assets/home/desktop/image-graphic-design.jpg'),
              mobile: require('~/assets/home/mobile/image-graphic-design.jpg'),
              tablet: require('~/assets/home/tablet/image-graphic-design.jpg'),
            },
          },
        ],
      };
    },
  });
</script>

<style>
  .categories {
    margin: 7.5rem 0;
  }

  @media (min-width: 1024px) {
    .categories {
      margin: 10rem 0;
    }
  }
</style>
