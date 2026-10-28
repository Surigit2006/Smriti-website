/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FAF7F2',
          100: '#F5F0E8', // primary warm beige paper
          200: '#EBE4D8',
          300: '#DDD4C4',
          400: '#C7BBA7',
          surface: '#FFFFFF',
          card: '#FBF9F5',
        },
        ink: {
          900: '#111111',
          800: '#1A1A1A',
          700: '#262626',
          muted: '#6B655A',
        },
        dovv: {
          accent: '#ed4a1c', // DOVV signature vermillion
          lime: '#16c847',
          sun: '#f59e0b',    // Indian artwork solar halo
          peacock: '#104f8b',// Indian artwork peacock feather blue
          lotus: '#e87a90',  // Indian artwork lotus pink
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
        'clean-card': '0 0 0 1px rgba(0,0,0,0.06), 0 10px 35px -10px rgba(0,0,0,0.05)',
        'clean-hover': '0 0 0 1px rgba(0,0,0,0.12), 0 20px 45px -12px rgba(0,0,0,0.1)',
        'dovv-pill': '0 0 0 1px rgba(0,0,0,0.08), 0 6px 20px -4px rgba(0,0,0,0.08)',
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
