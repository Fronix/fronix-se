const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      background: '#0a192f',
      green: '#64ffda',
      text: '#8892b0',
      lightText: '#a8b2d1',
      lightestText: '#ccd6f6'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      colors
    }
  },
  variants: {},
  plugins: [require('tailwindcss-filters')]
};
