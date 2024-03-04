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
               5: "#F2FBFD",
               50: "#EBE7F7",
               100: "#CDC5EB",
               200: "#AB9FDF",
               300: "#8978D3",
               400: "#6E5CC9",
               500: "#5141C0",
               600: "#473CB9",
               700: "#3634B0",
               800: "#262FA8",
               900: "#00249A",
            },
         },
      },
   },
   plugins: ["prettier-plugin-tailwindcss"],
};
