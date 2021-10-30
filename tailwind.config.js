module.exports = {
  purge: [
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./src/**/*.scss",
  ],
  darkMode: 'class',
  theme: {
    extends: {}
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
