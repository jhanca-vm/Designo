<template>
  <div
    class="call-to-action--container absolute inset-x-0 mx-auto px-6 sm:px-10 lg:px-14 xl:px-0"
  >
    <section
      class="call-to-action bg-peach-200 bg-no-repeat rounded-2xl flex flex-col justify-center items-center px-6 lg:flex-row lg:justify-between lg:px-24"
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
  </div>
</template>

<style>
  .call-to-action--container {
    max-width: 69.4375rem;
    top: -11.84375rem;
  }

  .call-to-action {
    background-image: url(~assets/shared/mobile/bg-pattern-call-to-action.svg);
    background-position: -15rem center;
    height: 23.6875rem;
  }

  @media (min-width: 640px) {
    .call-to-action--container {
      top: -16.5rem;
    }

    .call-to-action {
      background-position: -1rem center;
      height: 21.875rem;
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
    .call-to-action--container {
      top: -13.75rem;
    }

    .call-to-action {
      background-position: right center;
      height: 18.25rem;
    }
  }
</style>
