<template>
  <main class="sm:px-10 lg:px-14 xl:px-0">
    <InnerHero :title="title" :description="desc" />
    <Projects :projects="webDesigns" />
    <Suggestions :suggestions="categories" />
  </main>
</template>

<script lang="ts">
  import Vue from 'vue';
  import InnerHero from '@/components/InnerHero.vue';
  import Projects from '@/components/Projects.vue';
  import Suggestions from '@/components/Suggestions.vue';

  export default Vue.extend({
    layout: 'projects',
    components: {
      InnerHero,
      Projects,
      Suggestions,
    },
    data() {
      return {
        title: 'Web Design',
        desc:
          'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
        webDesigns: [
          {
            name: 'express',
            img: require('~/assets/web-design/image-express.jpg'),
            description: 'A multi-carrier shipping website for ecommerce businesses',
          },
          {
            name: 'transfer',
            img: require('~/assets/web-design/image-transfer.jpg'),
            description:
              'Site for low-cost money transfers and sending money within seconds',
          },
          {
            name: 'photon',
            img: require('~/assets/web-design/image-photon.jpg'),
            description:
              'A state-of-the-art music player with high-resolution audio and DSP effects',
          },
          {
            name: 'builder',
            img: require('~/assets/web-design/image-builder.jpg'),
            description: 'Connects users with local contractors based on their location',
          },
          {
            name: 'blogr',
            img: require('~/assets/web-design/image-blogr.jpg'),
            description: 'Blogr is a platform for creating an online blog or publication',
          },
          {
            name: 'camp',
            img: require('~/assets/web-design/image-camp.jpg'),
            description:
              'Get expert training in coding, data, design, and digital marketing',
          },
        ],
        categories: [
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
