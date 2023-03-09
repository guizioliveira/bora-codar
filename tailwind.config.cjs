/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      firaCode: ["Fira Code", "monospace"],
      lato: ["Lato", "sans-serif"],
      crimson: ["Crimson Pro"],
      inter: ["Inter", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        brand: {
          dark: "#0F0D13",
          "player-bg": "#2A2141",
        },
      },
      backgroundImage: {
        "calculator-button":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0.01%, rgba(255, 255, 255, 0.05) 100%)",
        "calculator-button-press":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0.01%, rgba(255, 255, 255, 0.02) 100%)",
      },
      boxShadow: {
        "calculator-box":
          "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04), 0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26), 0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1), inset 0px -4px 5px rgba(0, 0, 0, 0.22);",
        "calculator-button":
          "0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06);",

        "calculator-button-press":
          "0px 5px 3.5px rgba(0, 0, 0, 0.01), 0px 3.5px 1.5px rgba(0, 0, 0, 0.04), 0px 2px 3px rgba(0, 0, 0, 0.10), 0px 1px 1px rgba(0, 0, 0, 0.26), 0px 0px 0px rgba(0, 0, 0, 0.29), inset 0px 1px 1.5px rgba(255, 255, 255, 0.06);",
        "dashboard-box": "3px 4px 26px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
