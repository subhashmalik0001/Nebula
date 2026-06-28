'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import AppStoreBadge from '@/components/ui/app-store-badge'
import StarRating from '@/components/ui/star-rating'
import PressLogo from '@/components/ui/press-logo'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
}

const integrations = ['Gmail', 'Outlook', 'HubSpot', 'Salesforce']
const pressLogos = ['TechCrunch', 'YourStory', 'Inc42', 'Forbes India', 'Mint', 'Entrackr']

/* ----------------------------------------------------------------
   Hero right column — herosec2.png, no background
---------------------------------------------------------------- */
function HeroVisual() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      className="flex items-center justify-center w-full"
    >
      <Image
        src="/images/herosec2.png"
        alt="Nebula app — contacts and scanning screens"
        width={540}
        height={540}
        className="object-contain drop-shadow-2xl w-full max-w-[540px]"
        priority
        draggable={false}
      />
    </motion.div>
  )
}

/* ----------------------------------------------------------------
   Hero — main export
---------------------------------------------------------------- */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle top gradient leak */}
      <div
        className="absolute top-0 inset-x-0 h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 70% 0%, rgba(106,62,235,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 pt-28 pb-0 lg:pt-36 lg:pb-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">

          {/* ====== LEFT COLUMN ====== */}
          <div className="flex flex-col items-start">

            {/* Trust pill */}
            <motion.div
              custom={0.05}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-4 py-2 mb-8 shadow-card"
            >
              <span
                className="h-2 w-2 rounded-full bg-success shrink-0"
                style={{ animation: 'livePulse 2s ease-in-out infinite' }}
              />
              <span className="font-body text-[13px] font-semibold text-ink">
                Used by <strong>50,000+</strong> professionals · scanning in 40+ countries
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={0.15}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display font-extrabold text-ink leading-[0.96] tracking-tight mb-6"
              style={{ fontSize: 'clamp(48px, 6.5vw, 84px)' }}
            >
              Never type a<br />
              <span className="text-primary">contact</span> again.
            </motion.h1>

            {/* Subtext — shortened */}
            <motion.p
              custom={0.25}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-body text-[17px] leading-relaxed text-ink-soft max-w-md mb-6"
            >
              Point your camera at any card. Nebula reads every detail in seconds — no typing, ever.
            </motion.p>

            {/* Arrow text CTA */}
            <motion.a
              custom={0.33}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              href="#how-it-works"
              className="inline-flex items-center gap-2 font-body text-[15px] font-bold text-primary no-underline mb-8 group hover:gap-3 transition-all duration-200"
            >
              See how scanning works
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>

            {/* App store badges */}
            <motion.div
              custom={0.4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 mb-7"
            >
              <AppStoreBadge platform="ios" size="md" />
              <AppStoreBadge platform="android" size="md" />
            </motion.div>

            {/* Rating row */}
            <motion.div
              custom={0.48}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2.5 mb-8"
            >
              <StarRating rating={4.8} />
              <span className="font-body text-[14px] font-bold text-ink">4.8</span>
              <span className="font-body text-[14px] text-ink-soft">from 12,400+ reviews</span>
            </motion.div>

            {/* Integration pills */}
            <motion.div
              custom={0.56}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-2"
            >
              <span className="font-body text-[11px] font-bold tracking-widest uppercase text-ink-faint mr-1">
                Works with
              </span>
              {integrations.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border bg-white px-3.5 py-1.5 font-body text-[13px] font-semibold text-ink shadow-card"
                >
                  {tool}
                </span>
              ))}
              <a href="#features" className="font-body text-[13px] font-bold text-primary no-underline hover:underline">
                +3 more →
              </a>
            </motion.div>
          </div>

          {/* ====== RIGHT COLUMN — screenshot only, no bg ====== */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-full flex items-center justify-center"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>

      {/* ====== PRESS STRIP ====== */}
      <div className="relative z-10 mt-14 border-t border-border bg-white py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-center font-body text-[11px] font-bold tracking-[0.14em] uppercase text-ink-faint mb-7">
            Featured in
          </p>
          <div className="overflow-hidden relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, white, transparent)' }}
              aria-hidden="true"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, white, transparent)' }}
              aria-hidden="true"
            />
            <div className="flex items-center animate-marquee" style={{ width: 'max-content' }}>
              {[...pressLogos, ...pressLogos].map((name, i) => (
                <div key={`${name}-${i}`} className="px-10 opacity-40 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-300">
                  <PressLogo name={name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
