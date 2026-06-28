import Nav from '@/components/nav'
import Hero from '@/components/hero'
import StatsSection from '@/components/stats-section'
import HowItWorks from '@/components/how-it-works'
import FeaturesSection from '@/components/features-section'
import FinalCTA from '@/components/final-cta'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <StatsSection />
      <HowItWorks />
      <FeaturesSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
