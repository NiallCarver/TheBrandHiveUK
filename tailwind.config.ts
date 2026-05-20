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
        background: '#0B0B0F',
        foreground: '#FFFFFF',
        card: '#111318',
        border: '#2A2D37',
        ring: '#2A2D37',
        primary: '#F5C542',
        'primary-foreground': '#0B0B0F',
        secondary: '#111318',
        'secondary-foreground': '#E6E6EA',
        accent: '#FFD34D',
        'accent-foreground': '#0B0B0F',
        muted: '#9CA3AF',
        'muted-foreground': '#B5B7C0',
        success: '#30D158',
        warn: '#FFD60A',
        error: '#FF453A'
      },
      maxWidth: {
        container: '72rem'
      },
      borderRadius: {
        xl: '1rem'
      },
      boxShadow: {
        brand: '0 18px 60px rgba(245,197,66,0.16)',
        glow: '0 0 0 1px rgba(255,255,255,0.04), 0 0 12px rgba(245,197,66,0.05)'
      }
    }
  },
  plugins: []
}

export default config
