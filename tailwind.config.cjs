/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    ...defaultTheme,
    content: ["./node_modules/tw-elements/dist/js/**/*.js"],
    extend: {
      colors: {
        accent: "rgb(152, 204, 51)",
        linarogreen: "rgb(152, 204, 51)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // enter default text styles here
          },
        },
      }),
    },
    fontFamily: {
      sans: ["Lato", "system-ui", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tw-elements/dist/plugin.cjs"),
    // ...
  ],
};
