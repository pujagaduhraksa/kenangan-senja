/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        kopi: '#854d0e',
        dark: '0f172a',
      },
      screens: {
        '2xl' : '1320px',
      },
      backgroundImage: {
        'hero-section': "url('dist/img/hero.jpg')",
      },
    },
  },
  plugins: [],
}
