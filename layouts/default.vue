<template>
  <div id="l-default">
    <Header />
    <main class="text-grey-200 leading-normal">
      <Nuxt />
    </main>
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
    min-width: 360px;
  }
</style>
