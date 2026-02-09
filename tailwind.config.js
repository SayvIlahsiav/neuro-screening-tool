/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#4C7033',
        sage: '#839463',
        wood: '#3F2D1C',
        ash: '#5C6352',
        paper: '#FBFBF8',
        parchment: '#EBEEDF',
      }
    },
  },
  plugins: [],
}
