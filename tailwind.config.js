const twColors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: twColors.blue,
        secondary: twColors.blueGray,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
