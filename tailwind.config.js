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
          700 : '#1f1f23',
          600 : '#2b2b2d',
          500 : '#3e3e40',
          400 : '#3c3c40'
        }
      },
      keyframes: {
        appear: {
          '0%' : {opacity: '0'},
          '80%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
    animation: {
      appear: 'appear 1000ms',
      appear_hint: 'appear 200ms',
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
