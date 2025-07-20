import Hero from '@/components/Hero'
import ValueProposition from '@/components/ValueProposition'
import Services from '@/components/Services'
import SocialProof from '@/components/SocialProof'
import VideoSection from '@/components/VideoSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <ValueProposition />
      <Services />
      <SocialProof />
      <VideoSection />
      <CTASection />
    </div>
  )
}
