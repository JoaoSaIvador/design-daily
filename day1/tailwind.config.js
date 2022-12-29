/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#3fe1ff',
        'facebook-blue': '#4483B8',
      },
    },
  },
  plugins: [],
};
