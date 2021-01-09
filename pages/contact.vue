<template>
  <main class="contact sm:px-10 lg:px-14 xl:px-0">
    <section
      class="form bg-peach-200 bg-no-repeat text-white text-hero px-6 py-16 sm:rounded-2xl sm:px-14 sm:text-base sm:leading-normal lg:flex lg:py-12 lg:px-16 xl:px-24"
    >
      <div
        class="text-center pt-2 sm:text-left lg:w-7/12 lg:pt-0 lg:flex lg:flex-col lg:justify-center lg:pr-20"
      >
        <h1 class="font-medium text-4xl leading-relaxed sm:text-5xl sm:leading-loose">
          Contact Us
        </h1>
        <p class="mt-6">
          Ready to take it to the next level? Let’s talk about your project or idea and
          find out how we can help your business grow. If you are looking for unique
          digital experiences that’s relatable to your users, drop us a line.
        </p>
      </div>
      <form
        class="mt-12 pb-2 sm:mt-7 lg:w-96 lg:my-1 lg:ml-4"
        @submit.prevent="cleanForm"
      >
        <input
          class="w-full bg-transparent placeholder-white border-b border-white border-opacity-100 p-3 sm:py-4 sm:px-6"
          type="text"
          placeholder="Name"
          v-model="name"
        />
        <input
          class="w-full bg-transparent placeholder-white border-b border-white p-3 mt-3 sm:py-4 sm:px-6 sm:mt-4"
          type="email"
          placeholder="Email Address"
          v-model="email"
        />
        <input
          class="w-full bg-transparent placeholder-white border-b border-white p-3 mt-3 sm:py-4 sm:px-6 sm:mt-4"
          type="number"
          placeholder="Phone"
          v-model="phone"
        />
        <textarea
          class="w-full h-28 bg-transparent placeholder-white border-b border-white p-3 mt-3 resize-none sm:py-4 sm:px-6 sm:h-32 sm:mt-4"
          placeholder="Your Message"
          v-model="message"
        />
        <input
          class="submit bg-transparent mt-10 flex h-14 justify-center items-center bg-white text-grey-200 uppercase font-medium rounded-lg mx-auto cursor-pointer sm:mr-0 sm:mt-6 hover:bg-peach-100 hover:text-white"
          type="submit"
          value="Submit"
        />
      </form>
    </section>
    <Locations />
  </main>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Locations from '@/components/Locations.vue';

  export default Vue.extend({
    layout: 'contact',
    components: {
      Locations,
    },
    data() {
      return {
        name: '',
        email: '',
        phone: '',
        message: '',
      };
    },
    methods: {
      cleanForm() {
        this.name = '';
        this.email = '';
        this.phone = '';
        this.message = '';
      },
    },
  });
</script>

<style>
  .contact .form {
    background-image: url('~assets/contact/mobile/bg-pattern-hero-contact.svg');
    background-position: -5.75rem top;
  }

  .contact form input,
  .contact form textarea {
    @apply placeholder-opacity-50;
    @apply outline-none;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .contact form .submit {
    font-size: 0.9375rem;
    letter-spacing: 0.06666em;
    width: 9.5rem;
  }

  @media (min-width: 640px) {
    .contact .form {
      background-image: url('~assets/contact/tablet/bg-pattern-hero.svg');
      background-position: -6.5rem -2.5rem;
    }
  }

  @media (min-width: 1024px) {
    .contact .form {
      background-position: left bottom;
    }
  }
</style>
