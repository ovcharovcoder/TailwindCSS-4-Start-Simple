/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html', './src/js/*.{js,ts,jsx,tsx}'],
  safelist: [...],
  theme: {
    extend: {
      colors: {...},
      fontFamily: {...},
    },
  },
  plugins: [],
};
