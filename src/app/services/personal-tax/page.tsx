import type { Metadata } from 'next'
import Link from 'next/link'
import { User, CheckCircle, TrendingUp, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Personal Tax Advice | MA & CO Accountants',
  description: 'Comprehensive personal tax planning and advice. Income tax optimization, investment planning, and personal financial strategies.',
}

export default function PersonalTaxPage() {
  const services = [
    'Income tax planning and optimization',
    'Capital gains tax strategies',
    'Investment tax planning',
    'Pension contribution planning',
    'ISA and savings optimization',
    'Dividend tax planning',
    'Personal allowance maximization',
    'Tax-efficient investment structures'
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-accent rounded-full mx-auto mb-6">
              <User className="text-primary" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Personal Tax Advice
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Comprehensive personal tax planning and advice. Optimize your personal tax position 
              and maximize your wealth through strategic financial planning.
            </p>
            <Link href="/contact#consultation" className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4">
              Get Personal Tax Advice
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-primary text-center mb-12">
              Personal Tax Services
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
            Optimize Your Personal Finances
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Strategic personal tax planning can significantly increase your wealth over time. 
            Let our experts guide your financial decisions.
          </p>
          <Link href="/contact" className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4">
            Start Planning Today
          </Link>
        </div>
      </section>
    </div>
  )
}
