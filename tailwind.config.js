const { colors: themeColors } = require('./lib/theme.js')

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './hooks/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-gotu)', 'Gotu', 'Arial', 'sans-serif'],
        serif: ['var(--font-lora)', 'Lora', 'serif'],
      },
      colors: {
        brand: themeColors.brand,
        'brand-dark': themeColors.brandDark,
        cta: themeColors.cta,
        gray: themeColors.gray,
        'gray-dark': themeColors.grayDark,
      },
      backgroundImage: {
        poly: 'url(/icons/poly.png)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
