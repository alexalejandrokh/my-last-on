/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: "#3f5fa0",
        mainGry: "#E9EAEC",
        darkGray: "#b3b6bb"
      },
    },
  },
  plugins: [],
}