/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
      'hero': "url('/public/assests/dark-side.jpg')"
    }
    },
    fontFamily:{
      special: ['Rubik Vinyl'],
      classic: 'Nosifer'
    },
    
  },
  plugins: [],
}
