'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
}

/* ----------------------------------------------------------------
   Step data — uses real app screenshots
   mainapp.png   → home / scanning screen
   hersection.png → my card / extract screen
   contacts.png  → contacts / save screen
---------------------------------------------------------------- */
const steps = [
  {
    label: 'Step 1',
    title: 'Point your camera',
    description: 'Open Nebula — the camera automatically detects any business card and frames it with a live guide. No button tapping needed.',
    image: '/images/mainapp.png',
    alt: 'Nebula app — scanning screen',
  },
  {
    label: 'Step 2',
    title: 'We extract everything',
    description: 'Name, title, company, phone, email — every field is read and structured in under 2 seconds. Works on any font, language, or layout.',
    image: '/images/hersection.png',
    alt: 'Nebula app — card detail extraction screen',
  },
  {
    label: 'Step 3',
    title: 'Saved. Searchable. Synced.',
    description: 'Every contact lands in your organized list, instantly searchable by name, company, or role, and ready to export anywhere.',
    image: '/images/contacts.png',
    alt: 'Nebula app — contacts list screen',
  },
]

/* ----------------------------------------------------------------
   PhoneStep card
---------------------------------------------------------------- */
interface PhoneStepProps {
  stepLabel: string
  title: string
  description: string
  image: string
  alt: string
  delay?: number
}

function PhoneStep({ stepLabel, title, description, image, alt, delay = 0 }: PhoneStepProps) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      custom={delay}
      variants={fadeUp}
      initial={shouldReduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="flex flex-col"
    >
      {/* Violet gradient card — screenshot sits inside */}
      <div
        className="relative rounded-[32px] overflow-hidden mb-7 flex flex-col justify-end"
        style={{
          background: 'linear-gradient(145deg, #7C55F0 0%, #6A3EEB 45%, #4A25C9 100%)',
          aspectRatio: '4/5',
        }}
      >
        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-[0.07] dot-grid-white pointer-events-none"
          aria-hidden="true"
        />

        {/* Ambient highlight top-right */}
        <div
          className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)',
            transform: 'translate(25%, -20%)',
          }}
          aria-hidden="true"
        />

        {/* Real app screenshot — fills the card width, aligned to top, cut in half at bottom */}
        <div className="relative w-[650px] h-[400px] overflow-hidden drop-shadow-2xl">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover object-top -translate-x-8"
          />
        </div>
      </div>

      {/* Step text */}
      <p className="font-body text-[11px] font-bold tracking-[0.14em] uppercase text-[#9B6EF5] mb-2">
        {stepLabel}
      </p>
      <h3 className="font-display font-extrabold text-white text-[22px] leading-tight mb-2">
        {title}
      </h3>
      <p className="font-body text-[15px] leading-relaxed text-white/55">
        {description}
      </p>
    </motion.div>
  )
}

/* ----------------------------------------------------------------
   HowItWorks — main export
---------------------------------------------------------------- */
export default function HowItWorks() {
  const shouldReduce = useReducedMotion()

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-24 lg:py-36"
      style={{ backgroundColor: '#0E0B1A' }}
    >
      {/* Ambient violet glow top-center */}
      <div
        className="absolute top-0 left-1/2 pointer-events-none"
        style={{
          width: 1000,
          height: 900,
          background: 'radial-gradient(ellipse, rgba(106,62,235,0.22) 0%, transparent 65%)',
          filter: 'blur(60px)',
          transform: 'translateX(-50%)',
          animation: shouldReduce ? 'none' : 'orbPulse 6s ease-in-out infinite',
        }}
        aria-hidden="true"
      />

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: 600,
          height: 400,
          background: 'radial-gradient(ellipse, rgba(74,37,201,0.15) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16 lg:mb-20"
        >
          <p className="font-body text-[12px] font-bold tracking-[0.14em] uppercase text-[#9B6EF5] mb-4">
            How it works
          </p>
          <h2
            className="font-display font-extrabold text-white leading-[1.0] tracking-tight mb-5"
            style={{ fontSize: 'clamp(34px, 4.5vw, 60px)' }}
          >
            From paper to pipeline<br />in seconds.
          </h2>
          <p className="font-body text-[17px] leading-relaxed text-white/50 max-w-md">
            Three steps. No typing. No mistakes. Works on every card — any font, any language, any layout.
          </p>
        </motion.div>

        {/* Three steps grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <PhoneStep
              key={step.label}
              stepLabel={step.label}
              title={step.title}
              description={step.description}
              image={step.image}
              alt={step.alt}
              delay={i * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
