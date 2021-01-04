<template>
  <div id="l-default" class="pt-24 md:pt-0 xl:bg-no-repeat">
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
  #l-default {
    min-width: 22.5rem;
  }

  main {
    margin: 0 auto;
    max-width: 69.4375rem;
  }

  @media (min-width: 1280px) {
    #l-default {
      background-image: url('~assets/home/desktop/bg-pattern-leaf.svg');
      background-position-y: 29rem;
    }
  }
</style>
