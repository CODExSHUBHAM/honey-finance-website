// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      mono: ['Red Hat Mono', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      boxShadow: {
        default: '6px 6px 0px',
        'default-mini': '4px 4px 0px 0px',
        'default-left': '-6px 6px 0px 0px',
        'default-mini-left': '-4px 4px 0px 0px',
      },
      colors: {
        white: '#ffffff',
        black: '#111111',
        primary: '#E7B400',
        secondary: '#E78B00',
      },
    },
  },
  plugins: [],
};
