/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        asphalt: {
          50: '#f4f5f6',
          100: '#e6e8ea',
          200: '#cfd3d8',
          500: '#5b646e',
          700: '#3d444c',
          800: '#343a40',
          900: '#2d3237',
          950: '#171a1d',
        },
        trail: {
          300: '#f0b27a',
          400: '#e08a3c',
          500: '#d06e1f',
          600: '#b85a16',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Barlow Condensed', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
