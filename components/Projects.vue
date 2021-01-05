<template>
  <section
    class="projects px-6 my-24 grid gap-y-10 sm:px-0 sm:gap-y-8 sm:py-6 lg:grid-cols-2 lg:gap-x-8 xl:grid-cols-3 xl:py-0 xl:my-40"
  >
    <article
      class="sm:flex lg:block"
      v-for="(project, index) in projects"
      :key="index + 1"
    >
      <img
        class="rounded-t-2xl sm:w-1/2 sm:rounded-l-2xl sm:rounded-r-none lg:rounded-l-none lg:w-full lg:rounded-t-2xl"
        :src="project.img"
        :alt="project.name"
      />
      <div
        class="bg-peach-50 rounded-b-2xl text-center p-8 sm:w-1/2 sm:flex sm:flex-col sm:justify-center sm:rounded-r-2xl sm:rounded-l-none lg:rounded-r-none lg:rounded-b-2xl lg:w-full"
      >
        <h2
          class="text-peach-200 uppercase font-medium text-xl leading-normal tracking-max"
        >
          {{ project.name }}
        </h2>
        <p class="text-grey-200 mt-5">{{ project.description }}</p>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: ['projects'],
  });
</script>

<style>
  .projects article:hover {
    cursor: pointer;
  }

  .projects article:hover h2,
  .projects article:hover p {
    color: white;
  }

  .projects article:hover div {
    @apply bg-peach-200;
  }
</style>
