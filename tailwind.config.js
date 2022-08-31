/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      boxShadow: {
        'inner-glow': 'inset 0 0 100px -60px #ffffff11;',
        'innerx-glow': 'inset 140px 0 250px -300px #ffffff45, inset -140px 0 250px -300px #ffffff45',
      }
    },
  },
  plugins: [],
}
