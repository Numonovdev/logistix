/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: "340px",
      md: "760px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {},
    fontFamily:{
      ConcertOne: ["Concert One", 'sans-serif']
    },
    container:{
      center: true,
      padding:"12px",
      md:"32px"
    },
  },
  plugins: [],
}