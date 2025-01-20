/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "node_modules/preline/dist/*.js"],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
    extend: {
      fontFamily: {
        "great-vibes": ["Great Vibes", "cursive"],
        kablammo: ["Kablammo", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        nerko: ["Nerko One", "cursive"],
        quicksand: ["Quicksand", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [require("preline/plugin"),require("daisyui")],
}

