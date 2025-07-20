import type { Metadata } from 'next'
import Link from 'next/link'
import { PiggyBank, CheckCircle, TrendingDown, Shield, Gift, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Inheritance Tax Support | MA & CO Accountants',
  description: 'Expert inheritance tax planning and mitigation strategies. Reduce IHT liability through legitimate planning and maximize wealth transfer to beneficiaries.',
}

export default function InheritanceTaxPage() {
  const strategies = [
    'Annual exemption maximization',
    'Potentially exempt transfers (PETs)',
    'Business property relief planning',
    'Agricultural property relief',
    'Charitable giving strategies',
    'Trust structures for IHT mitigation',
    'Life insurance planning',
    'Deed of variation advice',
    'Family investment companies',
    'Residence nil rate band optimization'
  ]

  const benefits = [
    {
      icon: TrendingDown,
      title: 'Reduce Tax Liability',
      description: 'Minimize inheritance tax through legitimate planning strategies'
    },
    {
      icon: Gift,
      title: 'Maximize Gifts',
      description: 'Optimize lifetime giving to reduce estate value'
    },
    {
      icon: Shield,
      title: 'Protect Assets',
      description: 'Safeguard family wealth from unnecessary taxation'
    },
    {
      icon: Users,
      title: 'Family Planning',
      description: 'Ensure smooth wealth transfer to next generation'
    }
  ]

  const thresholds = [
    { amount: '£325,000', description: 'Standard nil rate band (2024/25)' },
    { amount: '£175,000', description: 'Residence nil rate band (2024/25)' },
    { amount: '£500,000', description: 'Combined threshold for main residence' },
    { amount: '£1,000,000', description: 'Married couple total allowance' }
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-accent rounded-full mx-auto mb-6">
              <PiggyBank className="text-primary" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Inheritance Tax Support
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Expert inheritance tax planning and mitigation strategies. Reduce your IHT liability 
              through legitimate planning and ensure more of your wealth passes to your beneficiaries.
            </p>
            <Link
              href="/contact#consultation"
              className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
            >
              Reduce Your IHT
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-16">
            Why Plan for Inheritance Tax?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-full mx-auto mb-6">
                  <benefit.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold font-serif text-primary mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold font-serif text-primary mb-8">
                IHT Planning Strategies
              </h2>
              <div className="space-y-4">
                {strategies.map((strategy, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{strategy}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold font-serif text-primary mb-8">
                Current IHT Thresholds
              </h2>
              <div className="space-y-4">
                {thresholds.map((threshold, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-2">{threshold.amount}</div>
                    <div className="text-gray-600">{threshold.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold font-serif mb-6">
            Don't Let HMRC Take 40% of Your Estate
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            With proper planning, you can significantly reduce your inheritance tax liability 
            and ensure more of your wealth passes to your chosen beneficiaries.
          </p>
          <Link
            href="/contact"
            className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
          >
            Start IHT Planning
          </Link>
        </div>
      </section>
    </div>
  )
}
