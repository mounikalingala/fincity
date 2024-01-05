/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Comfortaa: ['Comfortaa', 'sans-serif'],
        nunito: ['Nunito', 'sans - serif'],
        playfair: ['Playfair Display', 'serif'],
        sacramento: ['Sacramento', "cursive"],
        yatra: ['Yatra One', "cursive"],
        italian: ['Italianno', 'cursive'],
        nova: ['Nova Slim', "cursive"],
      }
    },
  },
  plugins: [],
}