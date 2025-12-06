/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./theme.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#f97316',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
