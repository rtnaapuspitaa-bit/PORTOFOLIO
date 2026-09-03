/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // Electric Royal Indigo
        secondary: "#0ea5e9", // Vivid Cyan Blue
        dark: "#0f172a", // Slate Navy (Jernih & Kontras Tinggi)
        light: "#f8fafc", // Crisp Slate Light White (Bersih & Terang)
        accent: "#e0e7ff", // Soft Ice Tint
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
