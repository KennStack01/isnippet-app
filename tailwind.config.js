const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        mirage: {
          DEFAULT: "#192734",
          50: "#769BBD",
          100: "#648EB5",
          200: "#4B749B",
          300: "#3A5B79",
          400: "#2A4156",
          500: "#192734",
          600: "#080D12",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        broom: {
          DEFAULT: "#FFF50B",
          50: "#FFFEF1",
          100: "#FFFDD7",
          200: "#FFFBA4",
          300: "#FFF971",
          400: "#FFF73E",
          500: "#FFF50B",
          600: "#D7CE00",
          700: "#A49D00",
          800: "#716C00",
          900: "#3E3B00",
        },
        "big-stone": {
          DEFAULT: "#1A3248",
          50: "#79A6CF",
          100: "#6699C8",
          200: "#4380B8",
          300: "#356693",
          400: "#284C6D",
          500: "#1A3248",
          600: "#0C1823",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
