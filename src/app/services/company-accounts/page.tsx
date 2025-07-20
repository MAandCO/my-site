import type { Metadata } from 'next'
import Link from 'next/link'
import { Building, CheckCircle, Clock, Shield, FileText, Calculator, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Company Accounts Preparation | MA & CO Accountants',
  description: 'Professional company accounts preparation and filing. Statutory accounts, annual returns, Companies House compliance.',
}

export default function CompanyAccountsPage() {
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
              Company Accounts Preparation
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Professional statutory accounts preparation and filing. Ensure compliance with 
              Companies House and HMRC requirements while optimizing your company's financial position.
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

      {/* Services Included */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-16">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <FileText className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold font-serif text-primary mb-4">
                Statutory Accounts
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Profit & Loss Account</li>
                <li>✓ Balance Sheet</li>
                <li>✓ Notes to Accounts</li>
                <li>✓ Directors' Report</li>
              </ul>
            </div>
            <div className="card">
              <Calculator className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold font-serif text-primary mb-4">
                Corporation Tax
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ CT600 Preparation</li>
                <li>✓ Tax Computation</li>
                <li>✓ iXBRL Tagging</li>
                <li>✓ HMRC Filing</li>
              </ul>
            </div>
            <div className="card">
              <Shield className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold font-serif text-primary mb-4">
                Compliance
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Companies House Filing</li>
                <li>✓ Confirmation Statement</li>
                <li>✓ Deadline Management</li>
                <li>✓ Penalty Protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-12">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold font-serif text-primary mb-4">Micro Company</h3>
              <div className="text-4xl font-bold text-accent mb-4">£349</div>
              <p className="text-gray-600 mb-6">Turnover under £632k, Assets under £316k</p>
              <Link href="/contact" className="btn bg-primary text-white w-full">
                Choose Plan
              </Link>
            </div>
            <div className="bg-accent text-primary rounded-xl p-8 shadow-lg transform scale-105">
              <h3 className="text-2xl font-bold font-serif mb-4">Small Company</h3>
              <div className="text-4xl font-bold mb-4">£549</div>
              <p className="mb-6">Turnover under £10.2m, Assets under £5.1m</p>
              <Link href="/contact" className="btn bg-primary text-white w-full">
                Choose Plan
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold font-serif text-primary mb-4">Medium/Large</h3>
              <div className="text-4xl font-bold text-accent mb-4">POA</div>
              <p className="text-gray-600 mb-6">Custom pricing for larger companies</p>
              <Link href="/contact" className="btn bg-primary text-white w-full">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold font-serif mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Let our experts handle your company accounts while you focus on growing your business.
          </p>
          <Link
            href="/contact"
            className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
