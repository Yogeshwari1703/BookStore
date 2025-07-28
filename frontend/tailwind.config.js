/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
       colors: {
        gray: {
          850: '#1b2027', // your custom dark color between 800 and 900
        },
      },
    },
  },
  plugins: [daisyui],
}
