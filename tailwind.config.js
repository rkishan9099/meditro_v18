/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  corePlugins: {
    preflight: false, // Disable Tailwind’s global reset
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/markup/**/*.{js,jsx}",
    "./public/**/*.html",
    "./index.html",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        accent: {
          100: "#e0e1fb",
          200: "#c0c2f7",
          300: "#a1a3f3",
          400: "#8184ef",
          500: "#565acf", // Base color
          600: "#484caa",
          700: "#3a3e85",
          800: "#2c3060",
          900: "#1e213b",
          DEFAULT: "#565acf",
        },
        accentOrange: {
          100: "#fde5d8",
          200: "#fbc9b1",
          300: "#f9ad89",
          400: "#f79162",
          500: "#f17732", // Base color
          600: "#c9622a",
          700: "#a14e22",
          800: "#79391a",
          900: "#512512",
          DEFAULT: "#f17732",
        },
      },

      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
     
    },
  },
  plugins: [require("tailwindcss-animate")],
};
