/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      "mobile-sm": "320px",
      // => @media (min-width: 640px) { ... }
      "desktop-b": "1070px",
    },
  },
  plugins: [],
};
