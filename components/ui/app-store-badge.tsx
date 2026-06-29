'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

/* ----------------------------------------------------------------
   AppStoreBadge
   Props:
     platform: 'ios' | 'android'
     size:     'sm' | 'md' | 'lg'   (default: 'md')
   Renders the pre-designed apple.webp or playstore.webp badge directly.
---------------------------------------------------------------- */
interface AppStoreBadgeProps {
  platform: 'ios' | 'android'
  size?: 'sm' | 'md' | 'lg'
}

export default function AppStoreBadge({ platform, size = 'md' }: AppStoreBadgeProps) {
  const isApple = platform === 'ios'

  const sizeMap = {
    sm: { width: 120, height: 36 },
    md: { width: 155, height: 46 },
    lg: { width: 185, height: 55 },
  }
  const s = sizeMap[size]

  return (
    <motion.a
      href="#"
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="inline-block cursor-pointer select-none shrink-0"
      aria-label={isApple ? 'Download on the App Store' : 'Get it on Google Play'}
    >
      {isApple ? (
        <Image
          src="/images/apple.webp"
          alt="Download on the App Store"
          width={s.width}
          height={s.height}
          className="object-contain w-auto h-full"
          priority
        />
      ) : (
        <Image
          src="/images/playstore.webp"
          alt="Get it on Google Play"
          width={s.width}
          height={s.height}
          className="object-contain w-auto h-full"
        />
      )}
    </motion.a>
  )
}
