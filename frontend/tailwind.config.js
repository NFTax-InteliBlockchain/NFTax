/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat'],
    },
    extend: {
      colors: {
        "blue": "#0D327F",
        "darkblue": '#08225E',
        "grey": "#EFECEC",
        "darkblue": "#0d327f",
        "button-darkblue": "#08225e",
        "lightblue": "#1BA8E3",
      }
    },
  },
  plugins: [],
}