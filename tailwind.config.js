/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '430px',
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
}