const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.tsx",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      blue: colors.blue,
      yellow: colors.yellow
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
