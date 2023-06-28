/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        branding: '#F55875',
        black: '#2D2D2D',
        white: '#FFFFFF',
        borderColor: '#CBCBCB'
      }
    }
  },
  plugins: []
}
