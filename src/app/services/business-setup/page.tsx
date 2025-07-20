import type { Metadata } from 'next'
import Link from 'next/link'
import { Briefcase, CheckCircle, Rocket, Building } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Startups & Business Structuring | MA & CO Accountants',
  description: 'Expert guidance for startups and business structure optimization. Company formation, tax planning, funding support, and growth strategies.',
}

export default function BusinessSetupPage() {
  const services = [
    'Business structure consultation',
    'Company formation and setup',
    'Tax-efficient structuring',
    'Funding and investment support',
    'Business plan financial modeling',
    'Startup accounting systems',
    'Growth planning and forecasting',
    'Exit strategy planning'
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-accent rounded-full mx-auto mb-6">
              <Rocket className="text-primary" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Startups & Business Structuring
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Expert guidance for startups and growing businesses. From initial structure 
              to scaling strategies, we help you build a solid financial foundation.
            </p>
            <Link href="/contact#consultation" className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4">
              Structure Your Business
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-primary text-center mb-12">
              Startup & Growth Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold font-serif mb-6">
            Start Right, Grow Smart
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Get your business structure right from day one. Our startup specialists help you 
            make informed decisions that support long-term growth.
          </p>
          <Link href="/contact" className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4">
            Get Startup Advice
          </Link>
        </div>
      </section>
    </div>
  )
}
