/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD2A4",
        secondary: "#FFA987",
        tertiary: "#FF7D6D",
        quaternary: "#FF526C",
        quinary: "#FF2D6D",
      },
    },
  },
  plugins: [],
}