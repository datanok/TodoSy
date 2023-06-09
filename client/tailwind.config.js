/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],

  theme: {
    extend: {
      colors: {
        "purple-dark": "#41106C",
        "purple-primary": "#4E2971",
        "purple-light": "#7E588D",
        "primary": "rgba(42,45,63,255)",
        "main-text": "rgba(179,180,180,255)",
      },
      fontFamily: {
        cabin: ["Cabin", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
