import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import './globals.css'

/* ----------------------------------------------------------------
   FONTS
   Bricolage Grotesque → bold, rounded display character for headlines
   Inter               → clean, readable UI body text
---------------------------------------------------------------- */
const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

/* ----------------------------------------------------------------
   METADATA
---------------------------------------------------------------- */
export const viewport: Viewport = {
  themeColor: '#6A3EEB',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Nebula — Scan Any Business Card in 2 Seconds',
  description:
    'Point your camera at any business card and Nebula extracts every detail instantly — name, title, company, phone, email. Available on iOS and Android. Free to start.',
  keywords: ['business card scanner', 'contact management', 'nebula', 'OCR', 'networking'],
  openGraph: {
    title: 'Nebula — Never Type a Contact Again',
    description: 'Scan any business card in 2 seconds. AI extracts every detail automatically.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nebula — Business Card Scanner',
    description: 'Scan any card in 2 seconds. AI does the rest.',
  },
}

/* ----------------------------------------------------------------
   ROOT LAYOUT
---------------------------------------------------------------- */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased bg-bg text-ink" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
