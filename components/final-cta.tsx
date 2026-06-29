'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ScanLine, Users, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import AppStoreBadge from '@/components/ui/app-store-badge'

/* ----------------------------------------------------------------
   FinalCTA — uses herosec2.png as the centrepiece image
---------------------------------------------------------------- */
export default function FinalCTA() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="download" className="bg-bg-mint py-24 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">

        {/* ====== APP SCREENSHOT — herosec2.png ====== */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative flex items-center justify-center mb-14"
        >
          {/* Soft ambient glow behind the image */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 70% 60% at 50% 60%, rgba(106,62,235,0.14) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
            aria-hidden="true"
          />

          <motion.div
            animate={shouldReduce ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/images/herosec2.png"
              alt="Nebula app — contacts and scanning screens"
              width={1400}
              height={1300}
              className="relative z-10 object-contain w-[900px] h-auto drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>

        {/* ====== HEADLINE ====== */}
        <motion.h2
          initial={shouldReduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-display font-extrabold text-ink leading-[0.96] tracking-tight mb-6"
          style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
        >
          Get every contact in<br />
          seconds, not minutes.
        </motion.h2>

        {/* Sub-copy */}
        <motion.p
          initial={shouldReduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-body text-[17px] leading-relaxed text-ink-soft max-w-md mx-auto mb-10"
        >
          Download Nebula and scan your first card today. Free to start — no account required.
        </motion.p>

        {/* App store badges */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex justify-center flex-wrap gap-4 mb-12"
        >
          <AppStoreBadge platform="ios" size="lg" />
          <AppStoreBadge platform="android" size="lg" />
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            { icon: CheckCircle, label: 'Free to download', color: '#12A664' },
            { icon: ScanLine, label: 'Scan 50 cards free', color: '#6A3EEB' },
            { icon: Users, label: '50,000+ professionals', color: '#6A3EEB' },
          ].map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon style={{ color }} className="h-4 w-4 shrink-0" />
              <span className="font-body text-[14px] text-ink-soft">{label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
