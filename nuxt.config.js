export default {
  target: 'static',

  head: {
    title: 'DESIGNO',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [{ rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700&display=swap',
      },
    ],
  },

  css: ['~/assets/css/tailwind.css'],

  plugins: [],

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],

  modules: [],

  build: {},
};
