/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {},
      boxShadow: {
        1: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
        2: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
      },
    },
  },
  plugins: [],
};
