<template>
  <section
    class="hero bg-peach-200 bg-no-repeat bg-left overflow-hidden flex flex-col items-center px-6 text-white text-center sm:rounded-2xl lg:flex-row lg:justify-between lg:text-left lg:px-12 xl:px-24"
  >
    <div class="-mb-20 sm:-mb-24 lg:mb-14">
      <h1 class="max-w-xl font-medium text-4xl leading-relaxed sm:text-5xl">
        Award-winning custom designs and digital branding solutions
      </h1>
      <p class="text-hero my-6 mx-auto sm:text-base sm:leading-normal lg:mx-0 lg:my-9">
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find out more
        about our services.
      </p>
      <n-link
        class="w-36 h-14 inline-flex items-center justify-center bg-white text-grey-200 font-medium uppercase rounded-lg hover:bg-peach-100 hover:text-white"
        to="/about"
      >
        Learn More
      </n-link>
    </div>
    <img
      class="max-w-none -mt-2 lg:mt-36 lg:-mx-44"
      src="~/assets/home/mobile/image-hero-phone.png"
      alt="Phone"
    />
  </section>
</template>

<style>
  .hero {
    background-image: url('~assets/home/mobile/bg-pattern-hero-home.svg');
    height: 52.6875rem;
    padding-top: 4.25rem;
  }

  .hero div p {
    max-width: 27.8125rem;
  }

  .hero div a {
    font-size: 0.9375rem;
  }

  @media (min-width: 640px) {
    .hero {
      background-position-x: calc(100% + 121.55px);
      padding-top: 3.75rem;
    }
  }

  @media (min-width: 1024px) {
    .hero {
      background-position: right;
      height: 40rem;
    }
  }
</style>
