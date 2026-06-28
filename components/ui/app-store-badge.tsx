'use client'

import { motion } from 'framer-motion'

/* ----------------------------------------------------------------
   App Store Badge
   Props:
     platform: 'ios' | 'android'
     size:     'sm' | 'md' | 'lg'   (default: 'md')
   Both icons are self-contained inline SVGs — no icon library needed.
---------------------------------------------------------------- */
interface AppStoreBadgeProps {
  platform: 'ios' | 'android'
  size?: 'sm' | 'md' | 'lg'
}

function AppleIcon({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 814 1000"
      width={size}
      height={size}
      fill="currentColor"
      className="text-ink"
      aria-hidden="true"
    >
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-32.8-155.5-127.4C46.7 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 71 0 130.1 46.4 174.5 46.4 42.7 0 109.2-49.7 192.6-49.7 31 0 113.4 2.7 174.5 102.5zM490.1 202.7c-17.7 34.9-46.7 58.9-85.3 75.3s-81.5 21.5-121.3 21.5c-2.5-19.9-.1-38.3 5.1-55.6 19.5-67.8 73.4-122.3 143.2-139.7 15-3.8 30.4-5.6 45.5-5.6 3.8 0 7.6.2 11.4.5 2.5 34.1-5.3 68.9-23.6 103.6z" />
    </svg>
  )
}

function GooglePlayIcon({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
    >
      {/* Play button arrow shape in Google brand colors */}
      <path d="M4.5 2.5C3.7 2.5 3 3.2 3 4v16c0 .8.7 1.5 1.5 1.5l11-8.5-11-8.5z" fill="#4285F4" />
      <path d="M15.5 12 4.5 20.5l8-4.8 3-1.8c.5-.3.5-1 0-1.3L15.5 12z" fill="#FBBC04" />
      <path d="M20.5 10.5c-.3-.5-.8-.8-1.3-.8L16 11.3l-3.5 2.1 3 1.8 4.3-2.5c.8-.5.8-1.7-.3-2.2z" fill="#EA4335" />
      <path d="M4.5 2.5l11 8.5-3 1.8L4.5 4.2V2.5z" fill="#34A853" />
    </svg>
  )
}

export default function AppStoreBadge({ platform, size = 'md' }: AppStoreBadgeProps) {
  const isApple = platform === 'ios'

  const sizeMap = {
    sm: { px: 'px-4 py-2.5', iconSize: 20, label: 'text-[9px]', store: 'text-[14px]' },
    md: { px: 'px-5 py-3',   iconSize: 22, label: 'text-[10px]', store: 'text-[17px]' },
    lg: { px: 'px-6 py-3.5', iconSize: 26, label: 'text-[11px]', store: 'text-[19px]' },
  }
  const s = sizeMap[size]

  return (
    <motion.a
      href="#"
      whileHover={{ y: -2, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.14)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className={`
        inline-flex items-center gap-3 rounded-2xl border border-border
        bg-white text-ink shadow-card cursor-pointer no-underline
        ${s.px}
      `}
      aria-label={isApple ? 'Download on the App Store' : 'Get it on Google Play'}
    >
      <div className="flex items-center justify-center shrink-0">
        {isApple
          ? <AppleIcon size={s.iconSize} />
          : <GooglePlayIcon size={s.iconSize} />
        }
      </div>
      <div className="flex flex-col items-start leading-none">
        <span className={`font-body font-bold tracking-widest uppercase text-ink-soft ${s.label}`}>
          {isApple ? 'Download on the' : 'Get it on'}
        </span>
        <span className={`font-display font-extrabold text-ink leading-tight mt-0.5 ${s.store}`}>
          {isApple ? 'App Store' : 'Google Play'}
        </span>
      </div>
    </motion.a>
  )
}
