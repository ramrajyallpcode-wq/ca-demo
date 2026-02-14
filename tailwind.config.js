/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
  './views/*.ejs',
    './views/**/*.ejs', 
    './views/**/**/*.ejs',
    "./views/components/*.ejs",
      "./node_modules/tw-elements/js/**/*.js",
    // 'node_modules/preline/dist/*.js',
    // './views/services/*.ejs',
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    extend: {
      fontFamily: {
        "montserrat": ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        theme1: "#1E3A8A",
        theme2: "#3B82F6",
      },
    },
  },
  plugins: [
       require("tw-elements/plugin.cjs"),
  ],
}
