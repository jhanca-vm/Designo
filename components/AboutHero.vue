<template>
  <section
    class="about-hero sm:mb-28 lg:flex lg:flex-row-reverse lg:pb-2 xl:pb-0 xl:mb-40"
  >
    <picture class="lg:w-5/12">
      <source
        media="(min-width: 1024px)"
        srcset="~/assets/about/desktop/image-about-hero.jpg"
      />
      <source
        media="(min-width: 640px)"
        srcset="~/assets/about/tablet/image-about-hero.jpg"
      />
      <img
        class="w-full sm:rounded-t-2xl lg:rounded-l-none lg:rounded-r-2xl"
        src="~/assets/about/mobile/image-about-hero.jpg"
        alt="Image about us"
      />
    </picture>
    <div
      class="bg-peach-200 bg-no-repeat text-white text-center px-6 py-20 sm:rounded-b-2xl sm:px-14 sm:py-16 lg:w-7/12 lg:rounded-r-none lg:rounded-l-2xl lg:text-left lg:flex lg:flex-col lg:justify-center lg:py-0 lg:px-20"
    >
      <h1 class="font-medium text-4xl leading-normal sm:text-5xl sm:leading-loose">
        About Us
      </h1>
      <p class="text-hero mt-6 sm:text-base sm:leading-normal sm:px-1 sm:mt-8">
        Founded in 2010, we are a creative agency that produces lasting results for our
        clients. We’ve partnered with many startups, corporations, and nonprofits alike to
        craft designs that make real impact. We’re always looking forward to creating
        brands, products, and digital experiences that connect with our clients’
        audiences.
      </p>
    </div>
  </section>
</template>

<style>
  .about-hero div {
    background-image: url('~assets/about/mobile/bg-pattern-hero-about.svg');
    background-position: right -9.5rem;
  }

  @media (min-width: 640px) {
    .about-hero div {
      background-image: url('~assets/about/tablet/bg-pattern-hero-about.svg');
      background-position: -7.5rem -27rem;
    }
  }

  @media (min-width: 1024px) {
    .about-hero div {
      background-position: right bottom;
    }
  }
</style>
