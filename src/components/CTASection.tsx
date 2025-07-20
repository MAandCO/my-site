import Link from 'next/link'
import { Clock, CheckCircle, TrendingUp } from 'lucide-react'

const CTASection = () => {
  const urgencyPoints = [
    {
      icon: Clock,
      text: "Limited Spots Available",
      subtext: "Only 5 free consultations per month"
    },
    {
      icon: CheckCircle,
      text: "No Obligation",
      subtext: "Completely free 30-minute assessment"
    },
    {
      icon: TrendingUp,
      text: "Immediate Value",
      subtext: "Walk away with actionable insights"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight">
            Stop Losing Money to Inefficient Financial Systems
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Your business is bleeding money every day without proper financial optimization. 
            Book your complimentary Financial Health Check today and discover exactly where 
            you're leaving money on the table.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold font-serif mb-4 text-accent">
              What You'll Get in Your FREE Consultation:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                <span>Complete tax efficiency analysis</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                <span>Business structure optimization review</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                <span>AI-powered financial opportunity assessment</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                <span>Personalized action plan worth £350</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {urgencyPoints.map((point, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-accent text-primary w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <point.icon size={24} />
                </div>
                <div className="font-semibold mb-1">{point.text}</div>
                <div className="text-sm text-gray-300">{point.subtext}</div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <Link
              href="/contact#consultation"
              className="btn bg-accent text-primary hover:bg-accent-dark text-xl px-10 py-5 font-bold transform hover:scale-105 transition-all duration-300 inline-block"
            >
              Secure Your Spot Now – Elevate Your Business Today!
            </Link>
            
            <div className="text-center">
              <Link
                href="/contact"
                className="text-accent hover:text-accent-light underline text-lg font-medium"
              >
                Or contact us directly for immediate assistance
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm text-gray-300 mb-4">
              Trusted by 100+ London businesses • Rated 5/5 stars • £500K+ in client savings
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-400">
              <span>✓ No contracts</span>
              <span>✓ No setup fees</span>
              <span>✓ 30-day guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
