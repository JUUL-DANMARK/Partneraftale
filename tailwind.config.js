/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'outer-space': {
          '50': '#E9EBEC',
          '100': '#D6D9DC',
          '200': '#ACB4B9',
          '300': '#808C93',
          '400': '#5B656C',
          '500': '#383E42',
          '600': '#2C3134',
          '700': '#212427',
          '800': '#171A1C',
          '900': '#0C0D0E'
        },
      },
    },
  },
  plugins: [],
}
