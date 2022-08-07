/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["'Oxygen'", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('daisyui'), require('tailwind-scrollbar')],
};