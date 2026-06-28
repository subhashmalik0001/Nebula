'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

/* ----------------------------------------------------------------
   StatCard
   Displays an icon, a big animated count-up number, and a label.
   Count-up fires once on viewport entry using IntersectionObserver.
   Respects prefers-reduced-motion.
---------------------------------------------------------------- */
interface StatCardProps {
  icon: ReactNode
  value: string       /* e.g. "2M+" — the suffix (M+, K+, +) is extracted */
  label: string
}

/** Parse "2M+" → { base: 2, suffix: "M+" } */
function parseValue(val: string): { base: number; suffix: string } {
  const match = val.match(/^([0-9.]+)(.*)$/)
  if (!match) return { base: 0, suffix: val }
  return { base: parseFloat(match[1]), suffix: match[2] }
}

export default function StatCard({ icon, value, label }: StatCardProps) {
  const shouldReduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  const { base, suffix } = parseValue(value)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          if (shouldReduce) {
            setCount(base)
            return
          }

          const duration = 1800 // ms
          const start = performance.now()
          const animate = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            /* easeOutExpo curve */
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            setCount(parseFloat((eased * base).toFixed(base % 1 !== 0 ? 1 : 0)))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [base, hasAnimated, shouldReduce])

  /* Format count: if base is e.g. 2 or 180, show as int; if fraction show 1dp */
  const displayCount = Number.isInteger(base) ? Math.round(count) : count.toFixed(1)

  return (
    <div
      ref={ref}
      className="
        relative overflow-hidden rounded-3xl bg-white/70 border border-white
        p-8 shadow-card hover:shadow-cardHover transition-shadow duration-300
      "
    >
      {/* Dotted texture, bottom-right corner */}
      <div
        className="absolute bottom-0 right-0 h-28 w-28 opacity-25 pointer-events-none dot-grid"
        aria-hidden="true"
      />

      {/* Icon circle */}
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-primary mb-5">
        {icon}
      </div>

      {/* Number */}
      <p className="relative z-10 font-display font-extrabold leading-none text-ink"
         style={{ fontSize: 'clamp(36px, 4vw, 52px)', letterSpacing: '-0.02em' }}>
        {displayCount}{suffix}
      </p>

      {/* Label */}
      <p className="relative z-10 font-body text-ink-soft font-medium mt-2 text-[15px]">
        {label}
      </p>
    </div>
  )
}
