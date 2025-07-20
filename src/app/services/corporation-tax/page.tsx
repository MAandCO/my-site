import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, CheckCircle, TrendingUp, Shield, FileText, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Corporation Tax (CT600) | MA & CO Accountants',
  description: 'Expert CT600 preparation and corporation tax planning. Minimize your company tax liability with strategic planning.',
}

export default function CorporationTaxPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Tax Optimization',
      description: 'Strategic planning to legally minimize your corporation tax liability'
    },
    {
      icon: Shield,
      title: 'Compliance Assurance',
      description: 'Accurate CT600 preparation ensuring full HMRC compliance'
    },
    {
      icon: Clock,
      title: 'Timely Filing',
      description: 'Never miss deadlines with our automated reminder system'
    },
    {
      icon: FileText,
      title: 'Detailed Reporting',
      description: 'Comprehensive tax computations and supporting documentation'
    }
  ]

  const included = [
    'CT600 preparation and filing',
    'Corporation tax computation',
    'Tax planning strategies',
    'Capital allowances optimization',
    'R&D tax credit identification',
    'Group relief calculations',
    'Loss relief planning',
    'Quarterly installment calculations',
    'HMRC correspondence handling',
    'Next year tax planning'
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-accent rounded-full mx-auto mb-6">
              <Calculator className="text-primary" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Corporation Tax (CT600)
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Expert CT600 preparation and strategic corporation tax planning. Minimize your 
              tax liability while ensuring full compliance with HMRC requirements.
            </p>
            <Link
              href="/contact#consultation"
              className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
            >
              Get Expert Help Today
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-16">
            Why Choose Our Corporation Tax Service?
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

      {/* What's Included */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-primary text-center mb-12">
              Complete Corporation Tax Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {included.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tax Rates */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold font-serif text-primary text-center mb-12">
            Current Corporation Tax Rates 2024/25
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-light rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">19%</div>
                  <div className="text-lg font-semibold text-primary mb-2">Small Profits Rate</div>
                  <div className="text-gray-600">Profits up to £50,000</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">25%</div>
                  <div className="text-lg font-semibold text-primary mb-2">Main Rate</div>
                  <div className="text-gray-600">Profits over £250,000</div>
                </div>
              </div>
              <div className="text-center mt-8 p-4 bg-white rounded-lg">
                <p className="text-gray-600">
                  <strong>Marginal Relief:</strong> Tapered rate between £50,000 and £250,000 profits
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold font-serif mb-6">
            Minimize Your Corporation Tax Legally
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Our strategic approach has saved clients an average of £8,000 annually in corporation tax 
            through legitimate planning strategies.
          </p>
          <Link
            href="/contact"
            className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
          >
            Book Free Tax Review
          </Link>
        </div>
      </section>
    </div>
  )
}
