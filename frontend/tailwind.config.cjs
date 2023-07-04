/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
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
