module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        martinique: {
          50: "#f4f7fa",
          100: "#e6ebf3",
          200: "#d2dceb",
          300: "#b4c5dc",
          400: "#8fa7cb",
          500: "#758cbc",
          600: "#6276ae",
          700: "#57659e",
          800: "#4b5582",
          900: "#3f4869",
          950: "#32374e",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};
