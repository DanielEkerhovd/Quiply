/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.mjs"],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        },
        'background': '#BA9479',
        'highlight': '#BC845D',
        'highlight-hover': '#BE8C69',
        'q-yellow': '#FFD290',
        'q-yellow-hover': '#FFD699',

      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
  },
  plugins: [],
  }
};