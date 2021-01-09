<template>
  <div id="l-contact" class="pt-24 md:pt-0">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';

  export default Vue.extend({
    components: {
      Header,
      Footer,
    },
  });
</script>

<style>
  #l-contact {
    min-width: 22.5rem;
  }

  main {
    margin: 0 auto 18.9rem;
    max-width: 69.4375rem;
  }

  @media (min-width: 640px) {
    main {
      margin-bottom: 24rem;
    }
  }

  @media (min-width: 1024px) {
    main {
      margin-bottom: 21.5rem;
    }
  }

  @media (min-width: 1280px) {
    main {
      margin-bottom: 24rem;
    }
  }
</style>
