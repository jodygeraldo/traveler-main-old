const defaultTheme = require('tailwindcss/defaultTheme')
// const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    // colors: {
    //   primary: colors.slate,
    //   secondary: colors.red,
    //   tertiary: colors.amber,
    //   black: colors.black,
    //   white: colors.white,
    // },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
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
      backgroundImage: {
        'item-1': "url('/images/bg_items/bg-item-1.png')",
        'item-2': "url('/images/bg_items/bg-item-2.png')",
        'item-3': "url('/images/bg_items/bg-item-3.png')",
        'item-4': "url('/images/bg_items/bg-item-4.png')",
        'item-5': "url('/images/bg_items/bg-item-5.png')",
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
