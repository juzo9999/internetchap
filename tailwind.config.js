/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        chapBlack: "#0f0f11",
        chapGray: "#1c1c1e",
        chapGreen: "#00ff88",
        chapWhite: "#f1f1f1",
      },
      dropShadow: {
        neon: "0 0 5px #00ff88, 0 0 10px #00ff88",
      },
      fontFamily: {
        sans: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
