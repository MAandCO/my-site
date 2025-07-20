import type { Metadata } from 'next'
import Link from 'next/link'
import { TrendingUp, CheckCircle, Lightbulb, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'R&D Tax Relief | MA & CO Accountants',
  description: 'Maximize R&D tax credits for your innovation projects. Expert R&D tax relief claims, qualifying activity assessment, and HMRC submissions.',
}

export default function RDTaxReliefPage() {
  const benefits = [
    'Up to 33% tax credit for qualifying R&D costs',
    'Cash payments for loss-making companies',
    'Reduced corporation tax for profitable companies',
    'Covers staff costs, materials, and subcontractor fees',
    'Includes software development and innovation',
    'Available for all company sizes and sectors'
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-accent rounded-full mx-auto mb-6">
              <Lightbulb className="text-primary" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              R&D Tax Relief
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Maximize your R&D tax credits and turn your innovation investments into cash benefits. 
              Our specialists identify qualifying activities and handle the entire claim process.
            </p>
            <Link href="/contact#consultation" className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4">
              Claim R&D Relief
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-primary text-center mb-12">
              R&D Tax Relief Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold font-serif mb-6">
            Turn Innovation into Cash
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Many companies miss out on valuable R&D tax credits. Our experts identify qualifying 
            activities and maximize your claims.
          </p>
          <Link href="/contact" className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4">
            Start R&D Claim
          </Link>
        </div>
      </section>
    </div>
  )
}
