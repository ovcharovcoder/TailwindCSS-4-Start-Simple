/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './js/*.{js,ts,jsx,tsx}'],
  safelist: [...],
  theme: {
    extend: {
      colors: {...},
      fontFamily: {...},
    },
  },
  plugins: [],
};
