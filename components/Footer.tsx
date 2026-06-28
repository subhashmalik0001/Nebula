'use client'

import Image from 'next/image'

const productLinks = [
  { label: 'Features',     href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Download',     href: '#download' },
  { label: 'FAQs',         href: '#faqs' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use',   href: '#' },
  { label: 'Cookie Policy',  href: '#' },
]

function TwitterX({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.85L2.25 2.25h6.988l4.265 5.641zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function Instagram({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function LinkedIn({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const socialLinks = [
  { Icon: TwitterX,  href: '#', label: 'Follow on X' },
  { Icon: Instagram, href: '#', label: 'Follow on Instagram' },
  { Icon: LinkedIn,  href: '#', label: 'Connect on LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 px-5" style={{ backgroundColor: '#0E0B1A' }}>
      <div className="mx-auto max-w-7xl">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand column — logo.png only (icon is part of the logo) */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/logo.png"
                alt="Nebula"
                width={130}
                height={36}
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="font-body text-[14px] leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
              The fastest way to capture, organize, and act on every business contact — powered by AI.
            </p>
            <p
              className="font-body text-[11px] font-bold tracking-[0.16em] uppercase mt-6"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              SCAN · ORGANIZE · CONNECT
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-body text-[12px] font-bold tracking-[0.12em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Product
            </h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-[14px] font-medium no-underline transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="font-body text-[12px] font-bold tracking-[0.12em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-[14px] font-medium no-underline transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[13px]" style={{ color: 'rgba(255,255,255,0.28)' }}>
            © 2025 Nebula. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full no-underline transition-all duration-200"
                style={{ color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.07)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.13)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.4)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
