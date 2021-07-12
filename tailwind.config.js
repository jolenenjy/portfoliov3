const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter"],
      sansvar: ["InterVar"],
      mono: ["Roboto Mono", "ui-monospace", "SFMono-Regular"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      indigo: colors.indigo,
      red: colors.rose,
      blue: colors.blue,
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {
      borderWidth: [
        "responsive",
        "dark",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
