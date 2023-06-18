/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./dev/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      lg: '1024px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
