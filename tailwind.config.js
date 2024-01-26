/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Starbucks": "#00704a",
        "HouseGreen": "#1E3932",
        "WarmWhite" : "#F5F5DC"
      }
    },
  },
  plugins: [],
}

