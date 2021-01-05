<template>
  <main class="sm:px-10 lg:px-14 xl:px-0">
    <InnerHero :title="title" :description="desc" />
    <Projects :projects="graphicDesigns" />
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
        title: 'Graphic Design',
        desc:
          'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
        graphicDesigns: [
          {
            name: 'Tim Brown',
            img: require('~/assets/graphic-design/image-change.jpg'),
            description: 'A book cover designed for Tim Brown’s new release, ‘Change’',
          },
          {
            name: 'Boxed Water',
            img: require('~/assets/graphic-design/image-boxed-water.jpg'),
            description: 'A simple packaging concept made for Boxed Water',
          },
          {
            name: 'Science!',
            img: require('~/assets/graphic-design/image-science.jpg'),
            description: 'A poster made in collaboration with the Federal Art Project',
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
            slug: 'web-design',
            name: 'web design',
            img: {
              desktop: require('~/assets/home/desktop/image-web-design-small.jpg'),
              mobile: require('~/assets/home/mobile/image-web-design.jpg'),
              tablet: require('~/assets/home/tablet/image-web-design.jpg'),
            },
          },
        ],
      };
    },
  });
</script>
