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
        background: 'rgb(11 11 15 / <alpha-value>)',
        foreground: 'rgb(255 255 255 / <alpha-value>)',
        card: 'rgb(17 19 24 / <alpha-value>)',
        border: 'rgb(42 45 55 / <alpha-value>)',
        ring: 'rgb(42 45 55 / <alpha-value>)',
        primary: 'rgb(245 197 66 / <alpha-value>)',
        'primary-foreground': 'rgb(11 11 15 / <alpha-value>)',
        secondary: 'rgb(17 19 24 / <alpha-value>)',
        'secondary-foreground': 'rgb(230 230 234 / <alpha-value>)',
        accent: 'rgb(255 211 77 / <alpha-value>)',
        'accent-foreground': 'rgb(11 11 15 / <alpha-value>)',
        muted: 'rgb(156 163 175 / <alpha-value>)',
        'muted-foreground': 'rgb(181 183 192 / <alpha-value>)',
        success: 'rgb(48 209 88 / <alpha-value>)',
        warn: 'rgb(255 214 10 / <alpha-value>)',
        error: 'rgb(255 69 58 / <alpha-value>)'
      },
      maxWidth: {
        container: '80rem'
      },
      borderRadius: {
        xl: '1rem'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.04), 0 0 12px rgba(94,234,212,0.05)',
        brand: '0 10px 30px rgba(245,197,66,0.16)'
      }
    }
  },
  plugins: []
}

export default config
