/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
// 'react': 

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
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
