/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7c2d12", // Deep Brown
        secondary: "#d4a373", // Tan / Cream
        dark: "#2d241e", // Dark Espresso
        light: "#fefae0", // Light Cream/White
        accent: "#faedcd", // Soft Cream
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
