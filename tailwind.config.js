module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // https://tailwindcss.com/docs/font-family#customizing
        sans: [
          'Gotu'
        ],
      },
      colors: {
        'brand': '#5D3FD3',
      },
      backgroundImage: {
        'cloth-pattern': "url('/icons/cloth.jpg')",
        'cloth-pattern-dark': "url('/icons/cloth-dark.jpg')",
        'chevron-pattern': "url('/icons/chevron.svg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
