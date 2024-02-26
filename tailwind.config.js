/** @type {import('tailwindcss').Config} */
export default {
  important:true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary_bg:"#1A1A1A",
      secondory_:"#FFFFFF1A",
      txt_cl:"#FFFFFF",
      button_hover:"#2CBB5D"
    },
    fontFamily:{
      'Outfit':['Outfit', 'sans-serif'],
      'Outfit-button':['Outfit','sans-serif']
      
    },

    },
    

  },
  plugins: [],
}