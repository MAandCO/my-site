import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, Shield, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HMRC Correspondence & Appeals | MA & CO Accountants',
  description: 'Expert HMRC liaison and tax dispute resolution. Handle enquiries, appeals, and investigations with professional representation.',
}

export default function HMRCSupportPage() {
  const services = [
    'HMRC enquiry response',
    'Tax investigation support',
    'Appeal preparation and submission',
    'Penalty mitigation and appeals',
    'Compliance check assistance',
    'Tribunal representation',
    'Settlement negotiations',
    'Disclosure facility applications'
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
              HMRC Correspondence & Appeals
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Expert HMRC liaison and tax dispute resolution. Professional representation 
              for enquiries, investigations, and appeals to protect your interests.
            </p>
            <Link href="/contact#consultation" className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4">
              Get HMRC Support
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-primary text-center mb-12">
              HMRC Support Services
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
            Don't Face HMRC Alone
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            HMRC enquiries can be stressful and complex. Our experienced team provides 
            professional representation to protect your interests.
          </p>
          <Link href="/contact" className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4">
            Get Professional Help
          </Link>
        </div>
      </section>
    </div>
  )
}
