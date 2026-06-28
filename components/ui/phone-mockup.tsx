'use client'

import type { ReactNode } from 'react'

/* ----------------------------------------------------------------
   PhoneMockup
   A CSS-only realistic phone shell wrapper.
   Renders: outer shell, screen area, notch, side/volume buttons.
   Props:
     children:   ReactNode — screen content
     rotation:   number (degrees, default 0)
     width:      number (px, default 260)
     className:  extra classes on the outer wrapper
---------------------------------------------------------------- */
interface PhoneMockupProps {
  children?: ReactNode
  rotation?: number
  width?: number
  className?: string
}

export default function PhoneMockup({
  children,
  rotation = 0,
  width = 260,
  className = '',
}: PhoneMockupProps) {
  const height = Math.round(width * (19.5 / 9))

  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{
        width,
        height,
        transform: `rotate(${rotation}deg)`,
        willChange: 'transform',
      }}
    >
      {/* Outer shell */}
      <div
        className="relative w-full h-full"
        style={{
          borderRadius: 44,
          backgroundColor: '#111118',
          padding: 4,
          boxShadow:
            '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07) inset, inset 0 1px 0 rgba(255,255,255,0.12)',
        }}
      >
        {/* Screen */}
        <div
          className="relative w-full h-full overflow-hidden"
          style={{ borderRadius: 40, backgroundColor: '#F0F0F0' }}
        >
          {children}
        </div>

        {/* Dynamic Island / Notch */}
        <div
          className="absolute top-2 left-1/2 -translate-x-1/2 z-10"
          style={{
            width: 96,
            height: 30,
            backgroundColor: '#111118',
            borderRadius: 20,
          }}
          aria-hidden="true"
        />

        {/* Power button — right */}
        <div
          className="absolute"
          style={{
            right: -4,
            top: '26%',
            width: 4,
            height: 56,
            backgroundColor: '#1c1c24',
            borderRadius: '0 5px 5px 0',
          }}
          aria-hidden="true"
        />

        {/* Volume up — left */}
        <div
          className="absolute"
          style={{
            left: -4,
            top: '18%',
            width: 4,
            height: 36,
            backgroundColor: '#1c1c24',
            borderRadius: '5px 0 0 5px',
          }}
          aria-hidden="true"
        />

        {/* Volume down — left */}
        <div
          className="absolute"
          style={{
            left: -4,
            top: '28%',
            width: 4,
            height: 36,
            backgroundColor: '#1c1c24',
            borderRadius: '5px 0 0 5px',
          }}
          aria-hidden="true"
        />

        {/* Silent switch — left */}
        <div
          className="absolute"
          style={{
            left: -4,
            top: '10%',
            width: 4,
            height: 22,
            backgroundColor: '#1c1c24',
            borderRadius: '5px 0 0 5px',
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
