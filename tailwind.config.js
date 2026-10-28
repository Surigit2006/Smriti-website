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
        dovv: {
          bg: '#05080c',
          dark: '#080808',
          card: '#111622',
          surface: '#171d2c',
          slate: '#1c1c1c',
          border: '#222222',
          accent: '#ed4a1c', // iconic DOVV studio vermillion
          lime: '#c6f432',   // DOVV neon lime
          silver: '#dadadb',
          nickel: '#aaa9ad',
          gray: '#5b5b5b',
        }
      },
      fontFamily: {
        anton: ['"Anton"', 'Impact', 'sans-serif'],
        archivo: ['"Archivo"', '"Anton"', 'Impact', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'dovv-card': 'inset 0 0 0 1px #222222, 0 4px 28px 4px rgba(0,0,0,0.5)',
        'dovv-chip': 'inset 0 0 0 1px #262626',
        'dovv-pill': '0 0 0 1px rgba(0,0,0,0.1), 0 10px 24px -8px rgba(0,0,0,0.22)',
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
        stickerFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(var(--rot, 0deg))' },
          '50%': { transform: 'translateY(-6px) rotate(calc(var(--rot, 0deg) + 2deg))' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marqueeReverse: 'marqueeReverse 25s linear infinite',
        stickerFloat: 'stickerFloat 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
