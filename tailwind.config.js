/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '450px',
    },

    colors: {
      black: '#000000',
      blue: '#0094FF',
      gray: '#D9D9D9',
      white: '#FFFFFF',
    },
  },
  plugins: [],
};
