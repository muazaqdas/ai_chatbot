/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    screens:{
      'xs':'320px',
       // => @media (min-width: 320px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        // primary: '#4cbebc',
        // secondary: '#fffffd',
        // success: '#3b221d',
        // text: '#0b0507',

        // primary: '#302d44',
        // secondary: '#07c279',
        // success: '#fcffff',
        // text: '#616d86',

        // primary: '#d33072',
        // secondary: '#dbcccb',
        // success: '#ec6097',
        // text: '#0f1011',

        primary: '#89b2da',
        secondary: '#ffffff',
        success: '#a1b5bc',
        text: '#184865',
      },
    },
  },
  plugins: [],
};
