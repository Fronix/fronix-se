const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      background: '#0a192f',
      textLink: '#64ffda',
      text: '#8892b0',
      lightText: '#a8b2d1',
      lightestText: '#ccd6f6',
      textLinkTint: 'rgba(100,255,218,0.1)'
    },
    fontFamily: {
      sans: [
        'Calibre',
        'Inter',
        'San Francisco',
        'SF Pro Text',
        '-apple-system,system-ui,sans-serif'
      ],
      serif: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace']
    },
    extend: {
      colors
    }
  },
  variants: {},
  plugins: []
};
