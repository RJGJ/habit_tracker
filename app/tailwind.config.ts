import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: {
    files: [
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}'
    ]
  },
  // theme section removed; colors are defined in CSS only

  plugins: []
}

export default config
