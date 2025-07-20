import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, FileText, Receipt, Users, Building, TrendingUp, Globe, Shield, PiggyBank, Briefcase, FileSearch, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accounting Services | MA & CO Accountants',
  description: 'Comprehensive accounting services from A to Z. Self assessment, company accounts, VAT returns, payroll, tax planning and more.',
}

const allServices = [
  {
    href: '/services/self-assessment',
    title: 'Self Assessment',
    description: 'Complete personal tax return preparation and filing service',
    icon: FileText,
    category: 'Personal Tax'
  },
  {
    href: '/services/company-accounts',
    title: 'Company Accounts',
    description: 'Annual accounts preparation and filing for limited companies',
    icon: Building,
    category: 'Business Services'
  },
  {
    href: '/services/corporation-tax',
    title: 'Corporation Tax (CT600)',
    description: 'CT600 preparation and corporation tax planning',
    icon: Calculator,
    category: 'Business Tax'
  },
  {
    href: '/services/vat-returns',
    title: 'VAT Returns',
    description: 'VAT registration, returns, and compliance management',
    icon: Receipt,
    category: 'Compliance'
  },
  {
    href: '/services/bookkeeping',
    title: 'Bookkeeping',
    description: 'Professional bookkeeping and financial record management',
    icon: FileText,
    category: 'Business Services'
  },
  {
    href: '/services/payroll-cis',
    title: 'Payroll & CIS',
    description: 'Complete payroll management and CIS compliance',
    icon: Users,
    category: 'HR & Payroll'
  },
  {
    href: '/services/estate-planning',
    title: 'Estate Planning',
    description: 'Comprehensive estate planning and wealth protection',
    icon: Shield,
    category: 'Wealth Management'
  },
  {
    href: '/services/inheritance-tax',
    title: 'Inheritance Tax Support',
    description: 'IHT planning and mitigation strategies',
    icon: PiggyBank,
    category: 'Tax Planning'
  },
  {
    href: '/services/property-tax',
    title: 'Property Tax Strategy',
    description: 'Tax optimization for property investors and landlords',
    icon: Building,
    category: 'Property Tax'
  },
  {
    href: '/services/rd-tax-relief',
    title: 'R&D Tax Relief',
    description: 'Research and development tax credit claims',
    icon: TrendingUp,
    category: 'Tax Incentives'
  },
  {
    href: '/services/business-setup',
    title: 'Startups & Business Structuring',
    description: 'Business formation and structure optimization',
    icon: Briefcase,
    category: 'Business Setup'
  },
  {
    href: '/services/hmrc-support',
    title: 'HMRC Correspondence & Appeals',
    description: 'HMRC liaison and tax dispute resolution',
    icon: Phone,
    category: 'Compliance'
  },
  {
    href: '/services/personal-tax',
    title: 'Personal Tax Advice',
    description: 'Comprehensive personal tax planning and advice',
    icon: FileSearch,
    category: 'Personal Tax'
  },
  {
    href: '/services/tax-planning',
    title: 'Tax Planning & Forecasting',
    description: 'Strategic tax planning and financial forecasting',
    icon: TrendingUp,
    category: 'Tax Planning'
  },
  {
    href: '/services/international-clients',
    title: 'International Clients',
    description: 'Tax services for non-residents and expats',
    icon: Globe,
    category: 'International'
  },
  {
    href: '/services/crypto-tax',
    title: 'Crypto Tax Reporting',
    description: 'Cryptocurrency tax calculation and reporting',
    icon: TrendingUp,
    category: 'Digital Assets'
  },
  {
    href: '/services/company-formation',
    title: 'Limited Company Setup',
    description: 'Complete company formation and registration service',
    icon: Building,
    category: 'Business Setup'
  },
  {
    href: '/services/contractors-freelancers',
    title: 'Contractors & Freelancers',
    description: 'Specialized services for contractors and freelancers',
    icon: Briefcase,
    category: 'Contractors'
  },
]

const categories = Array.from(new Set(allServices.map(service => service.category)))

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Complete A-Z Accounting Services
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              From personal tax returns to complex business structures, we provide comprehensive 
              accounting solutions tailored to your specific needs. Every service backed by our 
              expertise and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {categories.map((category) => (
            <div key={category} className="mb-16">
              <h2 className="text-3xl font-bold font-serif text-primary mb-8 pb-4 border-b border-gray-200">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allServices
                  .filter(service => service.category === category)
                  .map((service) => (
                    <Link key={service.href} href={service.href}>
                      <div className="card group hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-lg mb-4 group-hover:scale-110 transition-transform">
                          <service.icon className="text-primary" size={24} />
                        </div>
                        <h3 className="text-xl font-bold font-serif text-primary mb-3 group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="mt-4 text-accent font-semibold group-hover:translate-x-2 transition-transform">
                          Learn More →
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We offer bespoke accounting solutions for unique business needs. 
            Contact us to discuss your specific requirements.
          </p>
          <Link
            href="/contact"
            className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
          >
            Get Custom Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
