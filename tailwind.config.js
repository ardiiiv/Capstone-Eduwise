/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-eduwise': '#0072CE',
        'gray-text': '#565759',
        'gray-bg': '#FAFDFF',
      },
      scale: {
        120: '1.20',
      },
    },
  },
  plugins: [],
}
