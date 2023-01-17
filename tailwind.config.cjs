/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      firaCode: ["Fira Code", "monospace"],
      lato: ["Lato", "sans-serif"],
      crimson: ["Crimson Pro"],
    },
    extend: {
      colors: {
        brand: {
          dark: "#0F0D13",
          "player-bg": "#2A2141",
        },
      },
    },
  },
  plugins: [],
}
