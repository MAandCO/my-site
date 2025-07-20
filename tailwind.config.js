/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a2942',
          light: '#354f77',
          dark: '#121a29',
        },
        accent: {
          DEFAULT: '#ffc107',
          light: '#ffcd38',
          dark: '#e6a800',
        },
        gray: {
          light: '#f5f5f5',
          medium: '#666666',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
