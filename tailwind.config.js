/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./theme.html"],

  theme: {
    extend: {
      colors: {
        main: '#6A8BAA',
        sub: '#A8B8A3',
        accent: '#D4B8D8',
        base: '#F7F7F7',
        text: '#333333',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
