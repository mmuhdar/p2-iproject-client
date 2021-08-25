module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#053F5E",
        secondary: "#115173",
        main: {
          DEFAULT: "#FFD700",
          50: "#FFFBE5",
          100: "#FFF7CC",
          200: "#FFEF99",
          300: "#FFE766",
          400: "#FFDF33",
          500: "#FFD700",
          600: "#CCAC00",
          700: "#998100",
          800: "#665600",
          900: "#332B00",
        },
        orange: {
          DEFAULT: "#FF4C29",
          50: "#FFFFFF",
          100: "#FFF7F5",
          200: "#FFCCC2",
          300: "#FFA18F",
          400: "#FF775C",
          500: "#FF4C29",
          600: "#F52800",
          700: "#C22000",
          800: "#8F1700",
          900: "#5C0F00",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
