/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/bg.webp')",
      },
      fontFamily: {
        sans: ['poppins', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '3xl': '1700px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
