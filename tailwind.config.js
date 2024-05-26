/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      borderColor: {
        DEFAULT: '#FFD290',
      }
  },
  plugins: [],
}
}
