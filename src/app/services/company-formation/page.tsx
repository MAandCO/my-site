import type { Metadata } from 'next'
import Link from 'next/link'
import { Building, CheckCircle, Clock, Shield, FileText, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Company Formation & Setup | MA & CO Accountants',
  description: 'Professional limited company formation service. Complete company setup with Companies House registration, bank account opening, and ongoing support.',
}

export default function CompanyFormationPage() {
  const included = [
    'Companies House registration',
    'Memorandum and Articles of Association',
    'Share certificates preparation',
    'Company secretary appointment',
    'Registered office address service',
    'Corporation tax registration',
    'VAT registration (if required)',
    'Bank account opening support',
    'First year compliance calendar',
    'Director and shareholder guidance'
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Same Day Formation',
      description: 'Your company can be incorporated within 24 hours'
    },
    {
      icon: Shield,
      title: 'Full Compliance',
      description: 'Everything set up correctly from day one'
    },
    {
      icon: FileText,
      title: 'Complete Documentation',
      description: 'All legal documents prepared professionally'
    },
    {
      icon: Users,
      title: 'Ongoing Support',
      description: 'Continued guidance after incorporation'
    }
  ]

  const packages = [
    {
      name: 'Basic Formation',
      price: '£149',
      description: 'Essential company formation package',
      features: [
        'Companies House registration',
        'Standard Articles of Association',
        'Share certificates',
        'First directors appointed'
      ]
    },
    {
      name: 'Professional Package',
      price: '£299',
      popular: true,
      description: 'Complete formation with ongoing support',
      features: [
        'Everything in Basic',
        'Registered office address (1 year)',
        'Corporation tax registration',
        'Bank account introduction',
        'Compliance calendar',
        'Director guidance meeting'
      ]
    },
    {
      name: 'Premium Setup',
      price: '£449',
      description: 'Full business setup with accounting',
      features: [
        'Everything in Professional',
        'VAT registration (if applicable)',
        'Bookkeeping software setup',
        'First quarter accounting support',
        'Tax planning consultation'
      ]
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-accent rounded-full mx-auto mb-6">
              <Building className="text-primary" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Company Formation & Setup
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Professional limited company formation service. We handle everything from 
              Companies House registration to bank account opening, getting your business 
              ready to trade from day one.
            </p>
            <Link
              href="/contact#consultation"
              className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
            >
              Start Company Formation
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-16">
            Why Form Your Company With Us?
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
              Complete Company Formation Service
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

      {/* Packages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold font-serif text-primary text-center mb-12">
            Formation Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`rounded-xl p-8 shadow-lg ${
                  pkg.popular ? 'bg-accent text-primary transform scale-105' : 'bg-white'
                }`}
              >
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold font-serif mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold mb-2">{pkg.price}</div>
                  <p className={`text-sm ${pkg.popular ? 'text-primary' : 'text-gray-600'}`}>
                    {pkg.description}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle 
                        className={`mt-0.5 flex-shrink-0 ${
                          pkg.popular ? 'text-primary' : 'text-accent'
                        }`} 
                        size={16} 
                      />
                      <span className={`text-sm ${pkg.popular ? 'text-primary' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className={`btn w-full text-center ${
                    pkg.popular 
                      ? 'bg-primary text-white hover:bg-primary-light' 
                      : 'bg-accent text-primary hover:bg-accent-dark'
                  }`}
                >
                  Choose Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <h2 className="text-3xl font-bold font-serif text-primary text-center mb-12">
            Simple 4-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Consultation', desc: 'We discuss your business needs and structure' },
              { step: 2, title: 'Documentation', desc: 'We prepare all required formation documents' },
              { step: 3, title: 'Registration', desc: 'Submit to Companies House for incorporation' },
              { step: 4, title: 'Setup Complete', desc: 'Receive your incorporation certificate and support' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mx-auto mb-6 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold font-serif text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold font-serif mb-6">
            Ready to Start Your Company?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Get your limited company formed professionally and start trading with confidence. 
            Our experts guide you through every step.
          </p>
          <Link
            href="/contact"
            className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
          >
            Start Company Formation Today
          </Link>
        </div>
      </section>
    </div>
  )
}
