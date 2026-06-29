'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

/* ----------------------------------------------------------------
   App Store Badge
   Props:
     platform: 'ios' | 'android'
     size:     'sm' | 'md' | 'lg'   (default: 'md')
   Uses downloaded official Apple and Play Store icons.
---------------------------------------------------------------- */
interface AppStoreBadgeProps {
  platform: 'ios' | 'android'
  size?: 'sm' | 'md' | 'lg'
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
      <div className="flex items-center justify-center shrink-0" style={{ width: s.iconSize, height: s.iconSize }}>
        {isApple ? (
          <Image
            src="/images/apple_badge.svg"
            alt="Apple logo"
            width={s.iconSize}
            height={s.iconSize}
            className="object-contain"
          />
        ) : (
          <Image
            src="/images/google_play_badge.png"
            alt="Google Play logo"
            width={s.iconSize}
            height={s.iconSize}
            className="object-contain"
          />
        )}
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
