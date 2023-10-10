/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '144': '36rem',
      }
    },
  },
  plugins: [],
  purge: ['./src/**/*.{js,ts,jsx,tsx,mdx}']
}

