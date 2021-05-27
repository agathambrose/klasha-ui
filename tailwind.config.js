module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": "'Space Grotesk', 'sans-serif'",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
