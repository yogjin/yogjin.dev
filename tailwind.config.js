/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Calligraffitti'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            code: {
              // inline code: clone notion's style
              color: '#EB5756',
              backgroundColor: '#EDEDEB',
              padding: '0.2em',
              borderRadius: '0.2em',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
              paddingLeft: '0.1em',
            },
            'code::after': {
              content: '""',
              paddingRight: '0.1em',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
