/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '432px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        poppins: ["'Oxygen'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('daisyui'), require('tailwind-scrollbar')],
};
