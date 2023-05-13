/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "back" : "url('../src/assets/refi.jpeg')"
      }
    },
  },
  plugins: [],
}