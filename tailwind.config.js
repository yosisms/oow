/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          sage: '#5f7161',
          gold: '#c5a059',
          cream: '#faf8f5',
        }
      },
      fontFamily: {
        hebrew: ['Noto Sans Hebrew', 'Assistant', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
