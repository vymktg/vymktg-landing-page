/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      textHeading: {
        1: {
          color: "rgb(23, 37, 84)",
        },
      },
    },
  },
  plugins: [],
};
