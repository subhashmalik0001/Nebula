import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ---- Font Families ---- */
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
      },

      /* ---- Color Tokens ---- */
      colors: {
        bg:           '#FFFFFF',
        'bg-soft':    '#F0F0F0',
        'bg-mint':    '#F2EFFC',
        'bg-dark':    '#0E0B1A',

        primary:        '#6A3EEB',
        'primary-dark': '#4A25C9',
        'primary-light':'#EDE8FC',

        ink:          '#0A0A0A',
        'ink-soft':   '#6B6B6B',
        'ink-faint':  '#B0B0B0',

        border:       '#E5E5E5',
        success:      '#12A664',
      },

      /* ---- Shadows ---- */
      boxShadow: {
        card:        '0 4px 24px 0 rgba(0,0,0,0.08)',
        cardHover:   '0 8px 40px 0 rgba(0,0,0,0.14)',
        primary:     '0 8px 32px 0 rgba(106,62,235,0.30)',
        primaryHover:'0 12px 48px 0 rgba(106,62,235,0.42)',
        phone:       '0 32px 80px 0 rgba(0,0,0,0.35)',
        inset:       'inset 0 0 0 1px rgba(255,255,255,0.10)',
      },

      /* ---- Border Radius ---- */
      borderRadius: {
        '4xl':  '2rem',     /* 32px */
        '5xl':  '2.5rem',   /* 40px */
        phone:  '44px',
      },

      /* ---- Spacing extras ---- */
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
      },

      /* ---- Keyframes (Tailwind-exposed) ---- */
      keyframes: {
        livePulse: {
          '0%, 100%': { opacity: '1',   transform: 'scale(1)' },
          '50%':       { opacity: '0.6', transform: 'scale(1.15)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
        orbPulse: {
          '0%, 100%': { opacity: '0.18', transform: 'scale(1)' },
          '50%':       { opacity: '0.28', transform: 'scale(1.06)' },
        },
      },
      animation: {
        'live-pulse': 'livePulse 2s ease-in-out infinite',
        'float-y':    'floatY 4s ease-in-out infinite',
        'orb-pulse':  'orbPulse 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
