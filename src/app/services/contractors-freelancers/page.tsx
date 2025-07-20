import type { Metadata } from 'next'
import Link from 'next/link'
import { Briefcase, CheckCircle, Users, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contractors & Freelancers | MA & CO Accountants',
  description: 'Specialist accounting services for contractors and freelancers. IR35 compliance, expense optimization, and tax-efficient business structures.',
}

export default function ContractorsFreelancersPage() {
  const services = [
    'IR35 compliance and assessment',
    'Limited company vs sole trader advice',
    'Contractor expense optimization',
    'Dividend and salary optimization',
    'Umbrella company alternatives',
    'Contract review and status advice',
    'Quarterly business reviews',
    'Annual tax planning for contractors'
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-accent rounded-full mx-auto mb-6">
              <Briefcase className="text-primary" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Contractors & Freelancers
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Specialist accounting services for contractors and freelancers. Navigate IR35, 
              optimize your tax position, and focus on what you do best.
            </p>
            <Link href="/contact#consultation" className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4">
              Get Contractor Support
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-primary text-center mb-12">
              Contractor & Freelancer Services
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
            Focus on Your Work, We'll Handle the Rest
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contractor life is complex enough without worrying about tax compliance. Our specialists 
            understand the unique challenges contractors face and provide tailored solutions.
          </p>
          <Link href="/contact" className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4">
            Simplify Your Contracting
          </Link>
        </div>
      </section>
    </div>
  )
}
