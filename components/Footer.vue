<template>
  <footer
    class="bg-grey-300 text-white px-6 relative pt-56 pb-14 sm:px-10 sm:pt-32 sm:pb-16 lg:px-14 lg:pt-24 xl:px-0"
  >
    <CallToAction />
    <section
      class="footer-content mx-auto text-center sm:grid sm:grid-cols-3 sm:gap-x-4 sm:gap-y-9 sm:text-left lg:mt-1"
    >
      <div
        class="sm:flex sm:justify-between sm:items-center sm:border-b border-white border-opacity-10 sm:py-10 sm:col-span-3"
      >
        <img
          class="logo-light mx-auto my-7 sm:m-0"
          src="~/assets/shared/mobile/logo-light.png"
          alt="Designo logo"
        />
        <ul
          class="footer-nav border-t border-white border-opacity-10 uppercase text-sm sm:flex sm:border-none"
        >
          <li>
            <n-link class="hover:underline" to="/about">Our company</n-link>
          </li>
          <li class="sm:ml-5 md:ml-10">
            <n-link class="hover:underline" to="/locations">Locations</n-link>
          </li>
          <li class="sm:ml-5 md:ml-10">
            <n-link class="hover:underline" to="/contact">Contact</n-link>
          </li>
        </ul>
      </div>
      <div class="my-10 opacity-50 leading-normal sm:my-0">
        <b>Designo Central Office</b>
        <p>3886 Wellington Street</p>
        <p>Toronto, Ontario M9C 3J5</p>
      </div>
      <div class="opacity-50 leading-normal">
        <b>Contact Us (Central Office)</b>
        <p class="sm:font-bold">P : +1 253-863-8967</p>
        <p class="sm:font-bold">M : contact@designo.co</p>
      </div>
      <SocialMedia />
    </section>
  </footer>
</template>

<script lang="ts">
  import Vue from 'vue';
  import SocialMedia from '@/components/SocialMedia.vue';
  import CallToAction from '@/components/CallToAction.vue';

  export default Vue.extend({
    components: {
      SocialMedia,
      CallToAction,
    },
  });
</script>

<style>
  .logo-light {
    height: 1.6875rem;
  }

  .footer-content {
    max-width: 69.4375rem;
  }

  .footer-nav {
    letter-spacing: 0.1429em;
  }

  .footer-nav li {
    @apply mt-8;
  }

  @media (min-width: 640px) {
    .footer-nav li {
      @apply mt-0;
    }
  }
</style>
