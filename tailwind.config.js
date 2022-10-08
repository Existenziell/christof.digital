module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // https://tailwindcss.com/docs/font-family#customizing
        sans: [
          'Gotu',
        ],
      },
      colors: {
        // brand: '#C90076',
        // 'brand-dark': '#200530',
        // 'brand': '#a6d1c9',
        // 'brand-dark': '#282b29',
        // 'highlight': '#C90076',
        'brand': '#DBDBDB',
        'brand-dark': '#242424',
        'highlight': '#D6A269',
        'gray': '#CFCFCF',
        'gray-dark': '#323232',
      },
      backgroundImage: {
        poly: 'url(/icons/poly.png)',
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
