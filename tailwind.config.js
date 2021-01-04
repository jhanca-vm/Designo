module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Jost', 'sans-serif'],
    },
    lineHeight: {
      none: '1',
      normal: '1.625rem',
      relaxed: '2.25rem',
      loose: '3rem',
    },
    extend: {
      colors: {
        peach: {
          100: '#FFAD9B',
          200: '#E7816B',
        },
        grey: {
          100: '#F1F3F5',
          200: '#333136',
          300: '#1D1C1E',
        },
      },
      letterSpacing: {
        max: '0.25em',
      },
      fontSize: {
        '4xl': '2rem',
      },
      backgroundImage: theme => ({
        gradient:
          'linear-gradient(90deg, rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%)',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
