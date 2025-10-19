import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0C',
        card: '#111114',
        foreground: '#F3F3F3',
        accent: '#5EEAD4',
        muted: '#9CA3AF'
      },
      borderRadius: {
        xl: '1rem'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.04), 0 0 12px rgba(94,234,212,0.05)'
      }
    }
  },
  plugins: []
}

export default config
