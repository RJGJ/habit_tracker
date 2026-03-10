import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6fef6',
          100: '#c3fce8',
          200: '#8af8d0',
          300: '#4df3b6',
          400: '#22d3a6',
          500: '#10b981', // Vue-like green
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b'
        },
        error: '#F87171',
        darkBg: '#0D1117', // Vue-style deep navy
        darkSoft: 'rgba(13, 17, 23, 0.5)',
        foreground: '#F1F5F9'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif']
      }
    }
  },
  plugins: []
}

export default config
