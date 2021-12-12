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
        brand: '#C90076',
        'brand-dark': '#200530',
      },
      backgroundImage: {
        'cloth-pattern': 'url(/icons/cloth.jpg)',
        'cloth-pattern-dark': 'url(/icons/cloth-dark.jpg)',
        'chevron-pattern': 'url(/icons/chevron.svg)',
      },
      minWidth: {
        '1/4': '25%',
        '1/3': '33%',
        '1/2': '50%',
        '2/3': '66%',
        '3/4': '75%',
        '4/5': '80%',
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
    gradientColorStops: theme => ({
      // primary: '#22c1c3',
      // secondary: '#fdbb2d',
      // primary: '#00c3ff',
      // secondary: '#ffff1c',
      primary: '#3a6186',
      secondary: '#89253e',
      // primary: '#36D1DC',
      // secondary: '#5B86E5',
      // primary: '#007991',
      // secondary: '#78ffd6',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
