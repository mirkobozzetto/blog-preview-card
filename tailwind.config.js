/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        yellow: "hsl(47, 88%, 63%)",
        white: "hsl(0, 0%, 100%)",
        grey: "hsl(0, 0%, 50%)",
        black: "hsl(0, 0%, 7%)",
      },
      fontFamily: {
        figtree: ["Figtree", "serif"],
      },
      fontWeight: {
        medium: 500,
        "extra-bold": 800,
      },
    },
  },
  plugins: [],
};
