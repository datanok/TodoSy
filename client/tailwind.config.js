/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",],
  
  theme: {
    
      
    extend: {colors: {
      'purple-dark':"#41106c",
      'purple-primary': '#633072',
      'purple-light': "#745D8C",
      'pink-primary':'#ff7179'

      
    },},
  },
  plugins: [],
};
