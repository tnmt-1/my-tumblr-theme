/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./theme.html", "./src/template.html"],

  theme: {
    extend: {
      colors: {
        // Catppuccin Mocha Palette
        "ctp-rosewater": "#f5e0dc",
        "ctp-flamingo": "#f2cdcd",
        "ctp-pink": "#f5c2e7",
        "ctp-mauve": "#cba6f7",
        "ctp-red": "#f38ba8",
        "ctp-maroon": "#eba0ac",
        "ctp-peach": "#fab387",
        "ctp-yellow": "#f9e2af",
        "ctp-green": "#a6e3a1",
        "ctp-teal": "#94e2d5",
        "ctp-sky": "#89dceb",
        "ctp-sapphire": "#74c7ce",
        "ctp-blue": "#89b4fa",
        "ctp-lavender": "#b4befe",
        "ctp-text": "#cdd6f4",
        "ctp-subtext1": "#bac2de",
        "ctp-subtext0": "#a6adc8",
        "ctp-overlay2": "#9399b2",
        "ctp-overlay1": "#7f849c",
        "ctp-overlay0": "#6c7086",
        "ctp-surface2": "#585b70",
        "ctp-surface1": "#45475a",
        "ctp-surface0": "#313244",
        "ctp-base": "#1e1e2e",
        "ctp-mantle": "#181825",
        "ctp-crust": "#11111b",

        // Original semantic names mapped to CSS variables
        main: "var(--color-main)",
        base: "var(--color-base)",
        accent: "var(--color-accent)",
        sub: "var(--color-sub)",
        text: "var(--color-text)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.ctp-text"),
            "--tw-prose-headings": theme("colors.ctp-mauve"),
            "--tw-prose-lead": theme("colors.ctp-subtext1"),
            "--tw-prose-links": theme("colors.ctp-mauve"),
            "--tw-prose-bold": theme("colors.ctp-lavender"),
            "--tw-prose-counters": theme("colors.ctp-overlay2"),
            "--tw-prose-bullets": theme("colors.ctp-overlay2"),
            "--tw-prose-hr": theme("colors.ctp-surface1"),
            "--tw-prose-quotes": theme("colors.ctp-subtext1"),
            "--tw-prose-quote-borders": theme("colors.ctp-mauve"),
            "--tw-prose-captions": theme("colors.ctp-subtext0"),
            "--tw-prose-code": theme("colors.ctp-pink"),
            "--tw-prose-pre-code": theme("colors.ctp-text"),
            "--tw-prose-pre-bg": theme("colors.ctp-mantle"),
            "--tw-prose-th-borders": theme("colors.ctp-surface2"),
            "--tw-prose-td-borders": theme("colors.ctp-surface1"),
            "a:hover": {
              color: theme("colors.ctp-pink"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
