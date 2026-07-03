/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#071322',
        accentBlue: '#2D7FF9',
        accentCyan: '#00E5FF',
        accentPurple: '#7C5CFF',
        accentGold: '#FFC857',
        textWhite: '#FFFFFF',
        textSecondary: '#A9B3C1',
      },
      fontFamily: {
        spaceGrotesk: ['"Space Grotesk"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        permanentMarker: ['"Permanent Marker"', 'cursive'],
      },
      boxShadow: {
        cyanGlow: '0 0 15px rgba(0, 229, 255, 0.4)',
        blueGlow: '0 0 20px rgba(45, 127, 249, 0.5)',
        purpleGlow: '0 0 20px rgba(124, 92, 255, 0.4)',
        glassGlow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
    },
  },
  plugins: [],
}
