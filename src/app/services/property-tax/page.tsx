import type { Metadata } from 'next'
import Link from 'next/link'
import { Building, CheckCircle, TrendingUp, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Property Tax Strategy | MA & CO Accountants',
  description: 'Expert property tax planning for landlords and investors. Capital gains optimization, rental income structuring, and property investment strategies.',
}

export default function PropertyTaxPage() {
  const services = [
    'Rental income tax optimization',
    'Capital gains tax planning',
    'Property allowances maximization',
    'Buy-to-let mortgage interest relief',
    'Incorporation vs personal ownership',
    'Capital allowances on furnished lettings',
    'Stamp duty land tax planning',
    'Property development tax strategies',
    'Overseas property taxation',
    'Property portfolio restructuring'
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-accent rounded-full mx-auto mb-6">
              <Building className="text-primary" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Property Tax Strategy
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Expert property tax planning for landlords and investors. Optimize your property 
              portfolio tax efficiency and maximize your rental investment returns.
            </p>
            <Link href="/contact#consultation" className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4">
              Optimize Property Tax
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-primary text-center mb-12">
              Property Tax Services
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
            Maximize Your Property Investment Returns
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Our property tax specialists help landlords and investors structure their portfolios 
            for maximum tax efficiency and profitability.
          </p>
          <Link href="/contact" className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4">
            Get Property Tax Advice
          </Link>
        </div>
      </section>
    </div>
  )
}
