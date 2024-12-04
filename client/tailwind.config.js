/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
// 'react': 

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script"],
      },
      colors: {
        react: {
          50: '#2b2c2e', 
        },
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
