/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        shopify: {
          dark: '#08090D',
          darkSurface: '#0E1118',
          darkCard: '#131722',
          darkBorder: 'rgba(255, 255, 255, 0.08)',
          light: '#F8FAFC',
          lightSurface: '#FFFFFF',
          lightCard: '#FFFFFF',
          lightBorder: 'rgba(0, 0, 0, 0.08)',
          emerald: '#00F076',
          cyan: '#00E5FF',
          violet: '#7C3AED',
          gold: '#F59E0B',
          peacock: '#0F4C81',
          rose: '#E87A90',
        }
      },
      fontFamily: {
        anton: ['"Anton"', 'Impact', 'sans-serif'],
        archivo: ['"Archivo"', '"Anton"', 'Impact', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        marqueeReverse: 'marqueeReverse 28s linear infinite',
      }
    },
  },
  plugins: [],
}
