import type { Metadata } from 'next'
import Link from 'next/link'
import { TrendingUp, CheckCircle, Shield, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Crypto Tax Reporting | MA & CO Accountants',
  description: 'Expert cryptocurrency tax calculation and reporting. Bitcoin, Ethereum, DeFi, NFTs, and all digital asset tax compliance.',
}

export default function CryptoTaxPage() {
  const services = [
    'Cryptocurrency gains and losses calculation',
    'DeFi transaction reporting',
    'NFT tax implications and reporting',
    'Mining income tax calculations',
    'Staking rewards taxation',
    'Airdrops and fork reporting',
    'Capital gains pooling for crypto',
    'Record keeping and compliance support'
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-accent rounded-full mx-auto mb-6">
              <TrendingUp className="text-primary" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Crypto Tax Reporting
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Expert cryptocurrency tax calculation and reporting. Navigate the complex world 
              of digital asset taxation with specialist guidance and accurate calculations.
            </p>
            <Link href="/contact#consultation" className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4">
              Get Crypto Tax Help
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-primary text-center mb-12">
              Cryptocurrency Tax Services
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
            Stay Compliant in the Digital Age
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Cryptocurrency taxation is complex and evolving. Our specialists ensure accurate 
            reporting and compliance with HMRC requirements for all digital assets.
          </p>
          <Link href="/contact" className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4">
            Start Crypto Tax Planning
          </Link>
        </div>
      </section>
    </div>
  )
}
