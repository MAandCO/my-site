import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Download, Calendar, HelpCircle, FileText, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources & Guides | MA & CO Accountants',
  description: 'Free accounting resources, guides, and tools for UK businesses. Stay informed with our expert insights and calculators.',
}

export default function ResourcesPage() {
  const resources = [
    {
      title: 'Tax Year 2024/25 Guide',
      description: 'Complete guide to tax rates, allowances, and key dates for the current tax year.',
      type: 'Guide',
      icon: FileText,
      downloadLink: '#'
    },
    {
      title: 'Corporation Tax Calculator',
      description: 'Calculate your corporation tax liability with our easy-to-use calculator.',
      type: 'Calculator',
      icon: Calculator,
      downloadLink: '#'
    },
    {
      title: 'VAT Return Checklist',
      description: 'Ensure you never miss a VAT requirement with our comprehensive checklist.',
      type: 'Checklist',
      icon: BookOpen,
      downloadLink: '#'
    },
    {
      title: 'Self Assessment Preparation Guide',
      description: 'Step-by-step guide to preparing your self assessment tax return.',
      type: 'Guide',
      icon: FileText,
      downloadLink: '#'
    }
  ]

  const keyDates = [
    { date: '31 Jan 2025', event: 'Self Assessment deadline' },
    { date: '31 Mar 2025', event: 'Corporation tax payment (companies with Dec year-end)' },
    { date: '6 Apr 2025', event: 'New tax year begins' },
    { date: '31 Jul 2025', event: 'Second payment on account due' }
  ]

  const faqs = [
    {
      question: 'When do I need to register for VAT?',
      answer: 'You must register for VAT if your taxable turnover exceeds £85,000 in a 12-month period.'
    },
    {
      question: 'What records do I need to keep for my business?',
      answer: 'You must keep all business records for at least 6 years, including invoices, receipts, bank statements, and accounting records.'
    },
    {
      question: 'Can I claim expenses for working from home?',
      answer: 'Yes, you can claim a proportion of home costs including heating, lighting, and council tax if you work from home regularly.'
    },
    {
      question: 'What is Making Tax Digital (MTD)?',
      answer: 'MTD requires businesses to keep digital records and submit VAT returns using compatible software.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Resources & Guides
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Access our free resources, guides, and tools designed to help UK businesses 
              stay compliant and optimize their finances.
            </p>
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-16">
            Free Downloads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="card group hover:shadow-xl">
                <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <resource.icon className="text-primary" size={32} />
                </div>
                <div className="mb-2">
                  <span className="inline-block bg-gray-light text-primary text-xs font-bold px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-serif text-primary mb-4">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {resource.description}
                </p>
                <a
                  href={resource.downloadLink}
                  className="inline-flex items-center text-accent font-semibold hover:text-accent-dark transition-colors group-hover:translate-x-1"
                >
                  <Download size={16} className="mr-2" />
                  Download Free
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold font-serif text-primary mb-8">
                <Calendar className="inline mr-3 text-accent" size={32} />
                Important Tax Dates
              </h2>
              <div className="space-y-4">
                {keyDates.map((date, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-primary">{date.event}</div>
                        <div className="text-gray-600 text-sm">Mark your calendar</div>
                      </div>
                      <div className="text-accent font-bold text-lg">
                        {date.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold font-serif text-primary mb-8">
                <HelpCircle className="inline mr-3 text-accent" size={32} />
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-primary mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Get the latest tax updates, business tips, and financial insights 
              delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="btn bg-accent text-primary hover:bg-accent-dark px-6 py-3">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-300 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6">
            Need Personalized Help?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            While our resources are helpful, nothing beats personalized advice. 
            Book a free consultation to get specific guidance for your situation.
          </p>
          <Link
            href="/contact#consultation"
            className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
