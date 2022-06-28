import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#111111',
      primary: '#E7B400',
      secondary: '#E78B00',
    },
    fontFamily: {
      sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      mono: ['Red Hat Mono', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      boxShadow: {
        default: '6px 6px 0px',
      },
    },
  },
  plugins: [],
};
