import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, CheckCircle, Clock, Shield, TrendingUp, Users, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Self Assessment Tax Returns | MA & CO Accountants',
  description: 'Professional self assessment tax return preparation and filing. Maximum deductions, guaranteed compliance, stress-free service.',
}

export default function SelfAssessmentPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Maximum Tax Savings',
      description: 'We identify every allowable deduction and expense to minimize your tax liability'
    },
    {
      icon: Shield,
      title: 'Guaranteed Compliance',
      description: 'Accurate preparation and timely filing to avoid penalties and interest'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Most returns completed within 48 hours of receiving your documents'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Direct access to qualified accountants for guidance and advice'
    }
  ]

  const included = [
    'Complete tax return preparation and filing',
    'Expense and deduction optimization',
    'Income assessment and calculation',
    'Capital gains tax calculations',
    'Dividend and rental income reporting',
    'Student loan repayment calculations',
    'High Income Child Benefit Charge',
    'HMRC correspondence handling',
    'Tax planning advice for next year',
    'Electronic filing and confirmation'
  ]

  const idealFor = [
    'Self-employed individuals and sole traders',
    'Property landlords and investors',
    'High earners (£100,000+ income)',
    'Those with multiple income sources',
    'Dividend recipients',
    'Capital gains from investments or property',
    'Foreign income or offshore assets',
    'Previously filed incorrectly'
  ]

  const process = [
    {
      step: 1,
      title: 'Document Collection',
      description: 'We provide a comprehensive checklist of required documents and information'
    },
    {
      step: 2,
      title: 'Expert Review',
      description: 'Our qualified accountants review your financial situation for optimization opportunities'
    },
    {
      step: 3,
      title: 'Return Preparation',
      description: 'We prepare your tax return with maximum accuracy and attention to detail'
    },
    {
      step: 4,
      title: 'Review & Filing',
      description: 'You review and approve before we file electronically with HMRC'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-accent rounded-full mx-auto mb-6">
              <FileText className="text-primary" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Self Assessment Tax Returns
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Professional self assessment preparation that maximizes your deductions, ensures 
              compliance, and gives you peace of mind. Let our experts handle the complexity 
              while you focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#consultation"
                className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
              >
                Get Started Today
              </Link>
              <Link
                href="#pricing"
                className="btn-outline border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-16">
            Why Choose Our Self Assessment Service?
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold font-serif text-primary mb-8">
                What's Included
              </h2>
              <div className="space-y-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold font-serif text-primary mb-8">
                Ideal For
              </h2>
              <div className="space-y-4">
                {idealFor.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Users className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-16">
            Our Simple 4-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold font-serif text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">
              Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold font-serif mb-4">Simple Return</h3>
                <div className="text-4xl font-bold text-accent mb-4">£149</div>
                <p className="text-gray-200 mb-6">For straightforward employed/pension income</p>
                <ul className="space-y-2 text-sm text-left">
                  <li>✓ Employment income</li>
                  <li>✓ Pension income</li>
                  <li>✓ Bank interest</li>
                  <li>✓ Basic deductions</li>
                </ul>
              </div>
              <div className="bg-accent text-primary rounded-xl p-8 transform scale-105">
                <h3 className="text-2xl font-bold font-serif mb-4">Standard Return</h3>
                <div className="text-4xl font-bold mb-4">£249</div>
                <p className="mb-6">For self-employed or rental income</p>
                <ul className="space-y-2 text-sm text-left">
                  <li>✓ Self-employment income</li>
                  <li>✓ Rental property income</li>
                  <li>✓ Dividend income</li>
                  <li>✓ Capital gains</li>
                  <li>✓ Expense optimization</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold font-serif mb-4">Complex Return</h3>
                <div className="text-4xl font-bold text-accent mb-4">£349</div>
                <p className="text-gray-200 mb-6">For multiple income sources & investments</p>
                <ul className="space-y-2 text-sm text-left">
                  <li>✓ Multiple businesses</li>
                  <li>✓ Foreign income</li>
                  <li>✓ Trust income</li>
                  <li>✓ Complex investments</li>
                  <li>✓ Tax planning advice</li>
                </ul>
              </div>
            </div>
            <div className="mt-12">
              <Link
                href="/contact"
                className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
              >
                Get Your Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6">
            Don't Leave Money on the Table
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            The average client saves £1,200 in their first year through proper deduction optimization 
            and tax planning. Our expertise pays for itself many times over.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#consultation"
              className="btn bg-primary text-white hover:bg-primary-light text-lg px-8 py-4"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/services"
              className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
