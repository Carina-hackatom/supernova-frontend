/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      'sm' : "0.625rem", //10px
      'lg': "6.25rem", //100px
      DEFAULT: '0.9375rem',
      'full': '9999px',
    },
    fontSize: {
      13: "0.813rem",
      15: "0.938rem",
      16: "1rem",
      20: "1.25rem",
      23: "1.438rem",
      24: "1.5rem",
      34: "2.125rem",
    },
    colors: {
      'tw-black': colors.black,
      'tw-white': colors.white,
      'tw-gray': colors.slate,
      'tw-green': colors.emerald,
      'tw-purple': colors.violet,
      'tw-yellow': colors.amber,
      'tw-pink': colors.fuchsia,
      blue: {
        default: "#3838F4",
        light: "#7474F7",
      },
      purple: {
        default: "#B6B6FB",
        light: "#E1E1FE",
      },
      yellow: {
        default: "#E6FF67",
        light: "#F8FED8",
      },
      gray: {
        dark: "#4B4B4B",
        text: "#818181",
        medium: "#9F9F9F",
        light: "#F1F1F1",
      },
      black: "#000000",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
