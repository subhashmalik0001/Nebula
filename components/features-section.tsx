'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

/* ----------------------------------------------------------------
   FeatureBentoCard — Match reference image style exactly:
   - Content (title + description) at the TOP
   - Illustration at the BOTTOM, filling the card, clipped by rounded-3xl
---------------------------------------------------------------- */
interface FeatureBentoCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  illustrationHeight?: string
  className?: string
}

function FeatureBentoCard({ 
  title, 
  description, 
  imageSrc, 
  imageAlt,
  illustrationHeight = 'h-[240px]',
  className = '' 
}: FeatureBentoCardProps) {
  return (
    <div className={`
      group relative flex flex-col justify-between overflow-hidden 
      rounded-3xl bg-white border border-[#EFEFEF] h-full
      transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)]
      ${className}
    `}>
      {/* CONTENT ZONE AT TOP */}
      <div className="p-8 pb-4">
        {/* Title */}
        <h3 className="font-display text-[21px] font-extrabold text-[#0A0A0A] tracking-tight leading-snug">
          {title}
        </h3>
        {/* Description */}
        <p className="text-[14.5px] text-[#6B6B6B] leading-relaxed mt-2.5 font-body">
          {description}
        </p>
      </div>

      {/* ILLUSTRATION ZONE AT BOTTOM */}
      <div className={`relative w-full ${illustrationHeight} mt-auto overflow-hidden`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          draggable={false}
        />
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   FeaturesSection — 5-Card Bento Grid Layout matching the reference:
   - Row 1: 3 equal-width cards
   - Row 2: 2 cards (one wide 7/12, one medium 5/12)
---------------------------------------------------------------- */
export default function FeaturesSection() {
  const shouldReduce = useReducedMotion()

  const cardTransition = { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }

  return (
    <section id="features" className="bg-[#FAFAFA] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.05] text-[#0A0A0A] tracking-tight">
            Everything your contact<br />list was missing.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* ==================== ROW 1 (3 Equal Columns) ==================== */}
          
          {/* Card 1: Smart Search */}
          <motion.div 
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={cardTransition}
            className="lg:col-span-4 flex flex-col"
          >
            <FeatureBentoCard
              title="Smart Search"
              description="Search by name, company, role, or even a half-remembered detail — every field is indexed the moment you scan. No scrolling, no guessing."
              imageSrc="/images/illus1.png"
              imageAlt="Smart Search Illustration"
              illustrationHeight="h-[240px]"
            />
          </motion.div>
          
          {/* Card 2: QR Sharing */}
          <motion.div 
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...cardTransition, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col"
          >
            <FeatureBentoCard
              title="QR Sharing"
              description="Generate your own Nebula QR code. Anyone who scans it saves your full contact profile instantly — no typing, no app required on their side."
              imageSrc="/images/ill3.png"
              imageAlt="QR Sharing Illustration"
              illustrationHeight="h-[240px]"
            />
          </motion.div>
          
          {/* Card 3: Card Designer */}
          <motion.div 
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...cardTransition, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col"
          >
            <FeatureBentoCard
              title="Card Designer"
              description="Choose from premium templates, drag fields into exactly the layout you want, and add your photo. Your digital card, designed precisely how you need it."
              imageSrc="/images/illl4.png"
              imageAlt="Card Designer Illustration"
              illustrationHeight="h-[240px]"
            />
          </motion.div>

          {/* ==================== ROW 2 (2 Unequal Columns: 7/12 & 5/12) ==================== */}

          {/* Card 4: CRM & Contacts Hub (Wide 7/12 Card) */}
          <motion.div 
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={cardTransition}
            className="lg:col-span-7 flex flex-col"
          >
            <FeatureBentoCard
              title="Contacts Hub & CRM"
              description="Manage your saved contacts with searchable profiles, timeline logs, custom notes, interactive tags, and direct export options to your workflow pipeline."
              imageSrc="/images/contacts.png"
              imageAlt="Contacts Hub and CRM View"
              illustrationHeight="h-[320px] sm:h-[360px]"
            />
          </motion.div>

          {/* Card 5: Real-time Analytics (Medium 5/12 Card) */}
          <motion.div 
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...cardTransition, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col"
          >
            <FeatureBentoCard
              title="Real-time Analytics"
              description="Track how your connections grow. Monitor scans, saves, and interaction rates across conferences and meetings over time."
              imageSrc="/images/stats.png"
              imageAlt="Real-time Analytics View"
              illustrationHeight="h-[320px] sm:h-[360px]"
            />
          </motion.div>
        </div>
        
      </div>
    </section>
  )
}
