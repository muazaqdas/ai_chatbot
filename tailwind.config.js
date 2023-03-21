/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#4cbebc',
        secondary: '#fffffd',
        success: '#3b221d',
        text: '#0b0507',

        // primary: '#302d44',
        // secondary: '#07c279',
        // success: '#fcffff',
        // text: '#616d86',

        // primary: '#d33072',
        // secondary: '#dbcccb',
        // success: '#ec6097',
        // text: '#0f1011',

        // primary: '#a1b5bc',
        // secondary: '#ffffff',
        // success: '#89b2da',
        // text: '#184865',
      },
    },
  },
  plugins: [],
};
