/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f0f0f0',
        secondary: '#252753' 
      },
      fontFamily: {
        arimo: ['arimo', 'sans-serif'],
        sofia: ['Sofia Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
};
