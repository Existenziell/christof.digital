'use strict'
const { colors: themeColors, mauve } = require('./lib/theme.js')

/** Mauve scale as Tailwind colors (e.g. mauve-1 … mauve-12); vars switch in .dark */
const mauveScale = Object.fromEntries(
  Object.entries(mauve).map(([step]) => [`${step}`, `var(--color-mauve-${step})`])
)

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
        page: 'var(--color-page-bg)',
        section: 'var(--color-section-bg)',
        'section-alt': 'var(--color-section-alt)',
        surface: 'var(--color-surface)',
        'surface-muted': 'var(--color-surface-muted)',
        primary: 'var(--color-text-primary)',
        muted: 'var(--color-text-muted)',
        border: 'var(--color-border)',
        'header-bg': 'var(--color-header-bg)',
        'header-fg': 'var(--color-header-fg)',
        mauve: mauveScale,
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
