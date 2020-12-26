<template>
  <header
    class="h-24 flex items-center justify-between px-6 mx-auto relative sm:px-10 md:h-36 lg:px-14 xl:px-0"
  >
    <figure>
      <n-link to="/">
        <img class="w-48" src="~/assets/shared/mobile/logo-dark.png" alt="Designo logo" />
      </n-link>
    </figure>
    <div
      :class="menu.class"
      class="menu absolute inset-0 bottom-0 bg-black bg-opacity-50 mt-24 md:static md:block md:bg-transparent md:mt-0"
    >
      <ul
        class="bg-grey-300 px-6 py-12 text-white text-2xl uppercase sm:px-10 md:bg-transparent md:text-grey-200 md:flex md:text-sm md:p-0 md:justify-between"
      >
        <li class="mb-6 md:mb-0 hover:underline">
          <n-link to="/about">Our company</n-link>
        </li>
        <li class="mb-6 md:mb-0 hover:underline">
          <n-link to="/locations">Locations</n-link>
        </li>
        <li class="hover:underline"><n-link to="/contact">Contact</n-link></li>
      </ul>
    </div>
    <span
      @click="showHideMenu"
      :style="{ backgroundImage: `url(${menu.icon})` }"
      class="inline-block h-5 w-6 bg-no-repeat bg-right md:hidden"
    />
  </header>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    data() {
      return {
        hidden: true,
      };
    },
    methods: {
      showHideMenu() {
        this.hidden = !this.hidden;
      },
    },
    computed: {
      menu() {
        if (this.hidden) {
          return {
            icon: require('~/assets/shared/mobile/icon-hamburger.svg'),
            class: 'hidden',
          };
        } else {
          return {
            icon: require('~/assets/shared/mobile/icon-close.svg'),
            class: 'block',
          };
        }
      },
    },
  });
</script>

<style>
  header {
    max-width: 1111px;
  }

  .menu {
    height: calc(100vh - 6rem);
    letter-spacing: 2px;
  }

  @media (min-width: 768px) {
    .menu {
      height: auto;
    }

    .menu ul {
      width: 370px;
    }
  }
</style>
