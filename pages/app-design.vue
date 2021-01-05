<template>
  <main class="sm:px-10 lg:px-14 xl:px-0">
    <InnerHero :title="title" :description="desc" />
    <Projects :projects="appDesigns" />
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
        title: 'App Design',
        desc:
          'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
        appDesigns: [
          {
            name: 'airfilter',
            img: require('~/assets/app-design/image-airfilter.jpg'),
            description:
              'Solving the problem of poor indoor air quality by filtering the air',
          },
          {
            name: 'eyecam',
            img: require('~/assets/app-design/image-eyecam.jpg'),
            description:
              'Product that lets you edit your favorite photos and videos at any time',
          },
          {
            name: 'faceit',
            img: require('~/assets/app-design/image-faceit.jpg'),
            description:
              'Get to meet your favorite internet superstar with the faceit app',
          },
          {
            name: 'todo',
            img: require('~/assets/app-design/image-todo.jpg'),
            description: 'A todo app that features cloud sync with light and dark mode',
          },
          {
            name: 'loopstudios',
            img: require('~/assets/app-design/image-loopstudios.jpg'),
            description: 'A VR experience app made for Loopstudios',
          },
        ],
        categories: [
          {
            slug: 'web-design',
            name: 'web design',
            img: {
              desktop: require('~/assets/home/desktop/image-web-design-small.jpg'),
              mobile: require('~/assets/home/mobile/image-web-design.jpg'),
              tablet: require('~/assets/home/tablet/image-web-design.jpg'),
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
