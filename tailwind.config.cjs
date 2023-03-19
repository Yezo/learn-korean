/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Fira Sans", sans-serif;'],
      },
      colors: {
        primary: "#181824",
        secondary: "#24273D",
        tertiary: "#464d77",
      },
    },
  },
  plugins: [],
}
