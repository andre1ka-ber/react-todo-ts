module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    scrollbar: ['rounded'],
  },
  plugins: [
      require("tailwind-scrollbar"),
      require("@tailwindcss/forms")({
        strategy: 'class'
      })
  ],
}
