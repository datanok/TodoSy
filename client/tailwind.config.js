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
        "text-head": "#ffffff",
        "main-text": "rgba(104,106,107,255)",
      },
      fontFamily: {
        cabin: ["Cabin", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
