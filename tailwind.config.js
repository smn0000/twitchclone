/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'roobert': ['Roobert', 'sans-serif']
      },
      colors:{
        black :{
          900 : '#0e0e10',
          800 : '#18181b',
          700 : '#1f1f23'
        }
      }
      
    },
  },
  plugins: [],
}
