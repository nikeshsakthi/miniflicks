/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#008080", // Teal
        "secondary": "#e0f7fa", // Light Teal
        "lightBg": "#e0f2f1", // Light Teal Background
        "lightSecondary": "#ffffff", // White
        "primaryText": "#004d4d", // Dark Teal Text
        "secondaryText": "#007373" // Medium Teal Text
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

