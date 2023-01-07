/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Main: "#0A223D",
        Secondary: "#EC1F46",
        OffWhite: "#F5FAFE",
        lightBlack:"#333333",
        white:"#FFFFFF",
      },
      fontFamily: {
        Mullish: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
};
