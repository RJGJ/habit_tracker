import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
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
        darkBg: '#0b0f19', // Vue-style deep navy
        darkSoft: '#111827'
      }
    }
  },
  plugins: []
}

export default config
