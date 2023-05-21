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
        "pink-primary": "#ff7179",
      },
    },
  },
  plugins: [],
};
