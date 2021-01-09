<template>
  <div class="map lg:grid lg:grid-cols-3 lg:gap-x-8">
    <picture :class="data.classImg">
      <source media="(min-width: 1024px)" :srcset="data.map.desktop" />
      <img
        class="h-80 w-full object-cover object-right sm:rounded-2xl sm:mb-8 lg:mb-0"
        :src="data.map.mobile"
        :alt="data.address[0]"
      />
    </picture>
    <div
      :class="position"
      class="bg-peach-50 bg-left-top bg-no-repeat h-96 flex flex-col justify-center text-center text-grey-200 sm:rounded-2xl sm:bg-left-bottom sm:text-left sm:px-16 sm:h-80 lg:col-span-2 xl:px-20"
    >
      <h2 class="font-medium text-peach-200 text-4xl leading-relaxed sm:leading-loose">
        {{ data.name }}
      </h2>
      <div class="text-hero sm:flex sm:items-center sm:text-base sm:leading-normal">
        <span class="inline-block my-6">
          <h3 class="font-bold">{{ data.address[0] }}</h3>
          <p>{{ data.address[1] }}</p>
          <p>{{ data.address[2] }}</p>
        </span>
        <span class="inline-block sm:ml-32">
          <h3 class="font-bold">Contact</h3>
          <p>P: {{ data.phone }}</p>
          <p>M: {{ data.email }}</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: ['data'],
    computed: {
      position() {
        if (this.data.classImg === 'lg:col-start-3') {
          return 'lg:row-start-1';
        }
      },
    },
  });
</script>

<style>
  .map > div {
    background-image: url('~assets/shared/mobile/bg-pattern-circles.svg');
  }

  @media (min-width: 640px) {
    .map > div h2 {
      font-size: 2.5rem;
    }
  }
</style>
