const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    colors: {
      primary: colors.slate,
      secondary: colors.red,
      tertiary: colors.amber,
      gray: colors.gray,
      black: colors.black,
      white: colors.white,
      rarity: {
        one: '#7E8084',
        two: '#638879',
        three: '#6E84A6',
        four: '#9272C4',
        five: '#B17A49',
        aloy: '#C44F54',
        'one-dark': '#4B4C4E',
        'two-dark': '#3C534A',
        'three-dark': '#3E4E65',
        'four-dark': '#533681',
        'five-dark': '#69482B',
        'aloy-dark': '#7A292D',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
