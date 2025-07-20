import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe, CheckCircle, Plane, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'International Clients | MA & CO Accountants',
  description: 'Specialist tax services for non-residents, expats, and international businesses. Cross-border tax planning and compliance expertise.',
}

export default function InternationalClientsPage() {
  const services = [
    'Non-resident tax returns',
    'Expat tax planning and compliance',
    'Double taxation treaty advice',
    'International business structuring',
    'Cross-border investment planning',
    'Overseas property taxation',
    'Foreign income reporting',
    'Remittance basis planning'
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-accent rounded-full mx-auto mb-6">
              <Globe className="text-primary" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              International Clients
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Specialist tax services for non-residents, expats, and international businesses. 
              Navigate complex cross-border tax requirements with expert guidance.
            </p>
            <Link href="/contact#consultation" className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4">
              Get International Tax Help
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-primary text-center mb-12">
              International Tax Services
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
            Global Expertise, Local Service
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Complex international tax matters require specialist knowledge. Our experts understand 
            cross-border taxation and can guide you through the complexities.
          </p>
          <Link href="/contact" className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4">
            Get Expert Guidance
          </Link>
        </div>
      </section>
    </div>
  )
}
