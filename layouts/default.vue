<template>
  <div id="l-default" class="pt-24 md:pt-0">
    <Header />
    <Nuxt />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Header from '@/components/Header.vue';

  export default Vue.extend({
    components: {
      Header,
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
</style>
