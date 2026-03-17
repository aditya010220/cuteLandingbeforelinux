
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        lavender: '#E9D5FF',
        mint: '#D1FAE5',
        peach: '#FED7AA',
        'soft-blue': '#DBEAFE',
        'warm-white': '#FEFCE8',
        charcoal: '#1C1917',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
