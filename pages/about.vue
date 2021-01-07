<template>
  <main class="text-grey-200 sm:px-10 lg:px-14 xl:px-0">
    <AboutHero />
    <Card :content="card1" />
    <Locations />
    <Card :content="card2" />
  </main>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Card from '@/components/Card.vue';
  import AboutHero from '@/components/AboutHero.vue';
  import Locations from '@/components/Locations.vue';

  export default Vue.extend({
    components: {
      AboutHero,
      Card,
      Locations,
    },
    data() {
      return {
        card1: {
          title: 'World-class talent',
          p1:
            'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
          p2:
            'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
          img: {
            desktop: require('~/assets/about/desktop/image-world-class-talent.jpg'),
            mobile: require('~/assets/about/mobile/image-world-class-talent.jpg'),
            tablet: require('~/assets/about/tablet/image-world-class-talent.jpg'),
          },
          stylesImg: 'lg:rounded-r-none lg:rounded-l-2xl',
          stylesDiv: 'lg:rounded-l-none lg:rounded-r-2xl',
        },
        card2: {
          id: 'card2',
          title: 'The real deal',
          p1:
            'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.',
          p2:
            'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.',
          img: {
            desktop: require('~/assets/about/desktop/image-real-deal.jpg'),
            mobile: require('~/assets/about/mobile/image-real-deal.jpg'),
            tablet: require('~/assets/about/tablet/image-real-deal.jpg'),
          },
          stylesImg: 'lg:rounded-l-none lg:rounded-r-2xl',
          stylesDiv: 'lg:rounded-r-none lg:rounded-l-2xl',
        },
      };
    },
  });
</script>
