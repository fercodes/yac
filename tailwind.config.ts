import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        navy: {
          900: '#0a1628',
          800: '#0f1f2e',
          700: '#142d42',
        },
        gray: {
          light: '#f5f5f5',
          medium: '#d0d0d0',
        },
      },
    },
  },
  plugins: [],
}
export default config
