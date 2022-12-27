/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        watchDogPrimary : "#131921"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}
