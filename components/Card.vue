<template>
  <section :class="reverse" class="card lg:flex">
    <picture class="lg:w-5/12">
      <source media="(min-width: 1024px)" :srcset="content.img.desktop" />
      <source media="(min-width: 640px)" :srcset="content.img.tablet" />
      <img
        class="w-full sm:rounded-t-2xl"
        :class="content.stylesImg"
        :src="content.img.mobile"
        :alt="content.title"
      />
    </picture>
    <div
      :class="content.stylesDiv"
      class="text-hero text-center bg-peach-50 bg-no-repeat px-6 flex flex-col justify-center sm:rounded-b-2xl sm:px-16 sm:text-base sm:leading-normal lg:w-7/12 lg:text-left lg:px-24"
    >
      <h2 class="font-medium text-4xl text-peach-200 leading-relaxed sm:leading-loose">
        {{ content.title }}
      </h2>
      <p class="my-6 lg:px-2">{{ content.p1 }}</p>
      <p class="lg:px-2">{{ content.p2 }}</p>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: ['content'],
    computed: {
      reverse() {
        if (this.content.stylesImg === 'lg:rounded-l-none lg:rounded-r-2xl') {
          return 'lg:flex-row-reverse';
        }
      },
    },
  });
</script>

<style>
  .card div {
    background-image: url('~assets/shared/mobile/bg-pattern-circles.svg');
    height: 34rem;
  }

  @media (min-width: 640px) {
    .card div {
      height: 26rem;
      background-position: 6rem -13rem;
    }

    .card div h2 {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 1024px) {
    .card div {
      background-position: -9.125rem bottom;
      height: auto;
    }
  }
</style>
