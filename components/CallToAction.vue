<template>
  <section
    class="call-to-action bg-peach-200 bg-no-repeat rounded-2xl flex flex-col justify-center items-center px-6 absolute inset-x-6 sm:inset-x-10 lg:inset-x-14 lg:flex-row lg:justify-between lg:px-24 xl:inset-x-0 xl:mx-auto"
  >
    <div class="text-center lg:text-left">
      <h3 class="font-medium mx-auto text-4xl leading-relaxed sm:max-w-xs lg:mx-0">
        Let’s talk about your project
      </h3>
      <p class="text-hero mt-4 mb-8 sm:text-base sm:leading-normal sm:mb-7 lg:mb-0">
        Ready to take it to the next level? Contact us today and find out how our
        expertise can help your business grow.
      </p>
    </div>
    <n-link
      class="px-5 h-14 bg-white text-grey-200 uppercase flex items-center rounded-lg font-medium tracking-wider hover:bg-peach-100 hover:text-white"
      to="/contact"
    >
      Get in touch
    </n-link>
  </section>
</template>

<style>
  .call-to-action {
    background-image: url(~assets/shared/mobile/bg-pattern-call-to-action.svg);
    background-position-x: -15rem;
    background-position-y: center;
    height: 23.6875rem;
    max-width: 69.4375rem;
    top: -11.84375rem;
  }

  @media (min-width: 640px) {
    .call-to-action {
      background-position-x: -1rem;
      height: 21.875rem;
      top: -16.5rem;
    }

    .call-to-action h3 {
      font-size: 2.5rem;
      line-height: 2.5rem;
    }

    .call-to-action p {
      max-width: 27rem;
    }
  }

  @media (min-width: 1024px) {
    .call-to-action {
      background-position-x: right;
      height: 18.25rem;
      top: -13.75rem;
    }
  }
</style>
