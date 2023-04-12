/** @type {import('tailwindcss').Config} */
// const colors = require('./colors')  
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        button: "#7721bf",
        buttonHover: "#bd72fd",
        bg: "#3d235a",
        contraste: "#470083"
      },
    },
  },
  plugins: [],
}