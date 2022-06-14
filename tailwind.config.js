/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Manrope', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        "frontier-x": {
          100: "#665AEF",
          200: "#FC364C",
        },
        "frontier-bg":{
          100: "#2E2D66",
          200: "#3A273F",
          300: "#181818",
          400: "#0D0D0D",
        }
      },

    },

  },
  plugins: [
   
  ]
 
}


