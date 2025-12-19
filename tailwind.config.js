/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./theme.html"],

  theme: {
    extend: {
      colors: {
        main: "var(--color-main)",
        sub: "var(--color-sub)",
        accent: "var(--color-accent)",
        base: "var(--color-base)",
        text: "var(--color-text)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
