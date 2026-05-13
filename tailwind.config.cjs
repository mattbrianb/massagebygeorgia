/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: [
          '"Libre Baskerville"',
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        sand: {
          50: "#fdfbf7",
          100: "#fbf8f0",
          200: "#f5eedf",
          300: "#e5e0d8",
          400: "#dfd4c5",
          500: "#d5c8b5",
          600: "#c2b29d",
        },
        olive: {
          50: "#f4f4f1",
          100: "#e8e8e1",
          200: "#d0d0c3",
          300: "#b8b8a5",
          400: "#a0a086",
          500: "#888868",
          600: "#717154",
          700: "#5a5a40",
          800: "#42422c",
          900: "#292918",
        },
        ink: {
          700: "#665f57",
          800: "#4a453f",
          900: "#2d2a26",
        },
      },
    },
  },
  plugins: [],
}
