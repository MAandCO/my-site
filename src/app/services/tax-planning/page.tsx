import type { Metadata } from 'next'
import Link from 'next/link'
import { TrendingUp, CheckCircle, Calendar, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tax Planning & Forecasting | MA & CO Accountants',
  description: 'Strategic tax planning and financial forecasting services. Proactive tax strategies, cash flow planning, and business growth forecasting.',
}

export default function TaxPlanningPage() {
  const services = [
    'Annual tax planning strategies',
    'Multi-year tax forecasting',
    'Cash flow tax planning',
    'Business growth tax strategies',
    'Timing optimization for transactions',
    'Investment and disposal planning',
    'Group relief and loss planning',
    'Quarterly tax reviews and adjustments'
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-accent rounded-full mx-auto mb-6">
              <Calendar className="text-primary" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Tax Planning & Forecasting
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Strategic tax planning and financial forecasting. Plan ahead to minimize tax 
              liabilities and optimize your business's financial performance.
            </p>
            <Link href="/contact#consultation" className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4">
              Plan Your Tax Strategy
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-primary text-center mb-12">
              Strategic Tax Planning Services
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
            Plan Ahead, Save More
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Proactive tax planning is the key to long-term financial success. Our strategic 
            approach helps you stay ahead of tax obligations and opportunities.
          </p>
          <Link href="/contact" className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4">
            Start Strategic Planning
          </Link>
        </div>
      </section>
    </div>
  )
}
