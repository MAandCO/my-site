import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle, Heart, PiggyBank, FileText, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Estate Planning Services | MA & CO Accountants',
  description: 'Comprehensive estate planning and wealth protection services. Wills, trusts, inheritance tax planning, and family wealth preservation.',
}

export default function EstatePlanningPage() {
  const services = [
    'Inheritance tax planning',
    'Will writing and estate structure',
    'Trust formation and management',
    'Business succession planning',
    'Pension death benefit planning',
    'Asset protection strategies',
    'Family wealth preservation',
    'Probate and estate administration',
    'Charitable giving strategies',
    'Cross-border estate planning'
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Asset Protection',
      description: 'Protect your wealth from unnecessary taxes and legal challenges'
    },
    {
      icon: Heart,
      title: 'Family Security',
      description: 'Ensure your loved ones are financially secure'
    },
    {
      icon: PiggyBank,
      title: 'Tax Efficiency',
      description: 'Minimize inheritance tax and maximize wealth transfer'
    },
    {
      icon: FileText,
      title: 'Legal Compliance',
      description: 'Ensure all estate planning meets current legal requirements'
    }
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-accent rounded-full mx-auto mb-6">
              <Shield className="text-primary" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Estate Planning Services
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Comprehensive estate planning and wealth protection services. Secure your family's 
              financial future with expert inheritance tax planning and asset protection strategies.
            </p>
            <Link
              href="/contact#consultation"
              className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
            >
              Plan Your Estate
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-16">
            Protect Your Legacy
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-primary text-center mb-12">
              Complete Estate Planning Services
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
            Secure Your Family's Future
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Don't leave your family's financial security to chance. Our estate planning experts 
            will help you create a comprehensive plan that protects your wealth and your loved ones.
          </p>
          <Link
            href="/contact"
            className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
          >
            Start Estate Planning
          </Link>
        </div>
      </section>
    </div>
  )
}
