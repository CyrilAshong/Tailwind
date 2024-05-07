/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#1fb6ff'
      },
      fontFamily: {
        body: ["Nunito"]
      }
    },
  },
  plugins: [],
}