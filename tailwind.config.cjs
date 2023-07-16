/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/bg.png')",
      },
      fontFamily: {
        sans: ['poppins', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '3xl': '1700px',
      },
    },
  },
  plugins: [],
};
