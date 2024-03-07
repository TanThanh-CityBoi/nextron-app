const colors = require('tailwindcss/colors')

module.exports = {
   content: ["./renderer/pages/**/*.{js,ts,jsx,tsx}", "./renderer/components/**/*.{js,ts,jsx,tsx}"],
   theme: {
      colors: {
         white: colors.white,
         gray: colors.gray,
         blue: colors.blue,
      },
      extend: {
         colors: {
            primary: {
               50: "#ecfeff",
               100: "#cffafe",
               200: "#a5f3fc",
               300: "#67e8f9",
               400: "#22d3ee",
               500: "#06b6d4",
               600: "#0891b2",
               700: "#0e7490",
               800: "#155e75",
               900: "#164e63",
            },
         },
      },
   },
   plugins: ["prettier-plugin-tailwindcss"],
};
