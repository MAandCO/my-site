import type { Metadata } from 'next'
import Link from 'next/link'
import { Receipt, CheckCircle, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'VAT Returns & Registration | MA & CO Accountants',
  description: 'Expert VAT return preparation, registration, and compliance. Never miss a VAT deadline again.',
}

export default function VATReturnsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-accent rounded-full mx-auto mb-6">
              <Receipt className="text-primary" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              VAT Returns & Registration
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Complete VAT services from registration to quarterly returns. Ensure compliance 
              and optimize your VAT position with our expert guidance.
            </p>
            <Link
              href="/contact#consultation"
              className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
            >
              Get VAT Help Today
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold font-serif text-primary text-center mb-12">
            Complete VAT Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <CheckCircle className="text-accent mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold font-serif text-primary mb-4">VAT Registration</h3>
              <p className="text-gray-600">Mandatory and voluntary VAT registration guidance</p>
            </div>
            <div className="card text-center">
              <Receipt className="text-accent mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold font-serif text-primary mb-4">Quarterly Returns</h3>
              <p className="text-gray-600">Accurate preparation and timely submission</p>
            </div>
            <div className="card text-center">
              <Shield className="text-accent mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold font-serif text-primary mb-4">Compliance</h3>
              <p className="text-gray-600">Full compliance with HMRC VAT regulations</p>
            </div>
            <div className="card text-center">
              <Clock className="text-accent mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold font-serif text-primary mb-4">Making Tax Digital</h3>
              <p className="text-gray-600">MTD compliance and digital record keeping</p>
            </div>
          </div>
        </div>
      </section>

      {/* VAT Rates */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <h2 className="text-3xl font-bold font-serif text-primary text-center mb-12">
            Current VAT Rates
          </h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">20%</div>
              <div className="font-semibold text-primary mb-2">Standard Rate</div>
              <div className="text-gray-600 text-sm">Most goods and services</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">5%</div>
              <div className="font-semibold text-primary mb-2">Reduced Rate</div>
              <div className="text-gray-600 text-sm">Energy saving materials, children's car seats</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">0%</div>
              <div className="font-semibold text-primary mb-2">Zero Rate</div>
              <div className="text-gray-600 text-sm">Books, children's clothes, food</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold font-serif mb-6">
            Never Miss a VAT Deadline Again
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Let our experts handle your VAT compliance while you focus on growing your business.
          </p>
          <Link
            href="/contact"
            className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}
