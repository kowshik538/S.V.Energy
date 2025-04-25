/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ee',
          100: '#c3ead5',
          200: '#9ddcbb',
          300: '#74cfa0',
          400: '#4fc58b',
          500: '#0D9E5A', // Main primary color
          600: '#0c8e51',
          700: '#0a7b47',
          800: '#09683c',
          900: '#075532',
        },
        secondary: {
          50: '#e8f1f9',
          100: '#c5ddf0',
          200: '#9fc7e6',
          300: '#77b1dc',
          400: '#519fd3',
          500: '#1D70B8', // Main secondary color
          600: '#1a65a6',
          700: '#17588f',
          800: '#144a79',
          900: '#103c62',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 2px 10px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};