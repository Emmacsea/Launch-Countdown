/** @type {import('tailwindcss').Config} */

const path = require(`path`);


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          grayishblue: "hsl(237, 18%, 59%)",
          softred: "hsl(345, 95%, 68%)",
        },

        neutral: {
          white: "hsl(0, 0%, 100%)",
          ddesaturatedblue: "hsl(0, 0%, 100%)",
          vdarkblue: "hsl(235, 16%, 14%)",
          verydarkblue: "hsl(234, 17%, 12%)",
        }
      },

      backgroundImage: {
        'body-image': `url(${path.resolve(__dirname, 'src/assets/images/pattern-hills.svg')})`
      }

    },
  },
  plugins: [],
}