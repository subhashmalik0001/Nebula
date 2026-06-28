'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ScanLine, Clock, Users } from 'lucide-react'
import StatCard from '@/components/ui/stat-card'

/* ----------------------------------------------------------------
   fadeUp — consistent scroll animation variant
---------------------------------------------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
}

/* ----------------------------------------------------------------
   Stat data
---------------------------------------------------------------- */
const stats = [
  {
    icon: <ScanLine className="h-5 w-5" />,
    value: '2M+',
    label: 'Cards scanned',
  },
  {
    icon: <Clock className="h-5 w-5" />,
    value: '180K+',
    label: 'Hours saved vs. manual entry',
  },
  {
    icon: <Users className="h-5 w-5" />,
    value: '50K+',
    label: 'Active professionals',
  },
]

/* ----------------------------------------------------------------
   StatsSection
   bg-mint (#F2EFFC) — light violet tint
   eyebrow → big bold headline → subtext → 3 animated stat cards
---------------------------------------------------------------- */
export default function StatsSection() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="why-us" className="bg-bg-mint py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header block */}
        <motion.div
          initial={shouldReduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="mb-16 lg:mb-20"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="font-body text-[12px] font-bold tracking-[0.14em] uppercase text-primary mb-4"
          >
            Why Nebula?
          </motion.p>

          <motion.h2
            custom={0}
            variants={fadeUp}
            className="font-display font-extrabold text-ink tracking-tight leading-[1.0] max-w-3xl mb-6"
            style={{ fontSize: 'clamp(34px, 4.5vw, 60px)' }}
          >
            Stop losing connections to a drawer full of paper.
          </motion.h2>

          <motion.p
            custom={0}
            variants={fadeUp}
            className="font-body text-[17px] leading-relaxed text-ink-soft max-w-xl"
          >
            Every card you scan is extracted, organized, searchable, and synced across your devices — forever. No piles. No typing. No missed follow-ups.
          </motion.p>
        </motion.div>

        {/* Stat cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={shouldReduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <StatCard
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            </motion.div>
          ))}
        </div>

        {/* Soft pull-quote below stats */}
        <motion.blockquote
          initial={shouldReduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 border-l-4 border-primary pl-6 max-w-2xl"
        >
          <p className="font-body text-[16px] italic leading-relaxed text-ink-soft">
            &ldquo;Scanned 47 cards from a conference in under 20 minutes. Used to take me an entire evening to enter them manually.&rdquo;
          </p>
          <footer className="mt-3 flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center font-body text-[11px] font-bold text-white shrink-0">
              PS
            </div>
            <div>
              <cite className="font-body text-[13px] font-bold text-ink not-italic">Priya Sharma</cite>
              <span className="font-body text-[12px] text-ink-soft ml-1">· VP Sales, TechCorp</span>
            </div>
          </footer>
        </motion.blockquote>

      </div>
    </section>
  )
}
