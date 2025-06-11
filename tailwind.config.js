/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './**/*.html',
    './**/*.js',
    './node_modules/flyonui/dist/js/*.js',
    './node_modules/flyonui/dist/js/accordion.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin")
  ],
}

module.exports = {
  //...
  flyonui: {
    themes: ["dark"]
  }
}