import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, CheckCircle, Clock, Shield, Calculator, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bookkeeping Services | MA & CO Accountants',
  description: 'Professional bookkeeping services for UK businesses. Accurate financial records, real-time reporting, and expert support.',
}

export default function BookkeepingPage() {
  const benefits = [
    {
      icon: FileText,
      title: 'Accurate Records',
      description: 'Precise financial record keeping with attention to every detail'
    },
    {
      icon: Clock,
      title: 'Real-Time Updates',
      description: 'Live financial data with cloud-based accounting software'
    },
    {
      icon: Shield,
      title: 'Compliance Ready',
      description: 'Always audit-ready with proper documentation and filing'
    },
    {
      icon: TrendingUp,
      title: 'Business Insights',
      description: 'Monthly reports that help you make informed decisions'
    }
  ]

  const services = [
    'Daily transaction recording',
    'Bank reconciliation',
    'Supplier payment management',
    'Customer invoice tracking',
    'Expense categorization',
    'Monthly financial reports',
    'VAT preparation support',
    'Year-end account preparation',
    'Real-time dashboard access',
    'Dedicated bookkeeper support'
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
              Professional Bookkeeping Services
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Keep your financial records accurate and up-to-date with our professional 
              bookkeeping service. Get real-time insights into your business performance.
            </p>
            <Link
              href="/contact#consultation"
              className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-16">
            Why Choose Our Bookkeeping Service?
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

      {/* Services Included */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-primary text-center mb-12">
              What's Included
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

      {/* Pricing */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold font-serif mb-8">
            Affordable Monthly Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold font-serif mb-4">Starter</h3>
              <div className="text-4xl font-bold text-accent mb-4">£99</div>
              <p className="text-gray-200 mb-6">Up to 50 transactions/month</p>
              <ul className="space-y-2 text-sm text-left mb-6">
                <li>✓ Basic bookkeeping</li>
                <li>✓ Monthly reports</li>
                <li>✓ Email support</li>
              </ul>
              <Link href="/contact" className="btn bg-accent text-primary w-full">
                Choose Plan
              </Link>
            </div>
            <div className="bg-accent text-primary rounded-xl p-8 transform scale-105">
              <h3 className="text-2xl font-bold font-serif mb-4">Professional</h3>
              <div className="text-4xl font-bold mb-4">£199</div>
              <p className="mb-6">Up to 200 transactions/month</p>
              <ul className="space-y-2 text-sm text-left mb-6">
                <li>✓ Full bookkeeping service</li>
                <li>✓ Weekly reports</li>
                <li>✓ Phone & email support</li>
                <li>✓ VAT return preparation</li>
              </ul>
              <Link href="/contact" className="btn bg-primary text-white w-full">
                Choose Plan
              </Link>
            </div>
            <div className="bg-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold font-serif mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-accent mb-4">£349</div>
              <p className="text-gray-200 mb-6">Unlimited transactions</p>
              <ul className="space-y-2 text-sm text-left mb-6">
                <li>✓ Premium bookkeeping</li>
                <li>✓ Real-time reporting</li>
                <li>✓ Dedicated bookkeeper</li>
                <li>✓ Management accounts</li>
              </ul>
              <Link href="/contact" className="btn bg-accent text-primary w-full">
                Choose Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold font-serif text-primary mb-6">
            Ready to Get Your Books in Order?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our expert bookkeepers handle your financial records while you focus on growing your business.
          </p>
          <Link
            href="/contact"
            className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
          >
            Start Your Bookkeeping Service
          </Link>
        </div>
      </section>
    </div>
  )
}
