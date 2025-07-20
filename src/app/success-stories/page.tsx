import type { Metadata } from 'next'
import Link from 'next/link'
import { TrendingUp, PiggyBank, Clock, Users, Star, Quote } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Client Success Stories | MA & CO Accountants',
  description: 'Real results from real clients. See how MA & CO Accountants has helped London businesses save money and optimize their finances.',
}

export default function SuccessStoriesPage() {
  const caseStudies = [
    {
      client: 'London Tech Solutions',
      industry: 'Software Development',
      challenge: 'High tax burden and poor financial visibility',
      solution: 'Restructured business, implemented R&D tax credits, and AI-powered dashboards',
      results: [
        '£15,000 annual tax savings',
        '40% improvement in cash flow visibility',
        'R&D credits recovered £8,000',
        'Monthly financial reviews implemented'
      ],
      quote: "MA & CO transformed our financial operations. Their AI-powered insights helped us identify £15,000 in tax savings we would have missed with our previous accountant.",
      author: 'John Smith, CEO',
      savings: '£23,000',
      timeframe: '12 months'
    },
    {
      client: 'Urban Property Group',
      industry: 'Property Investment',
      challenge: 'Complex property portfolio tax optimization',
      solution: 'Property holding structure optimization and capital gains planning',
      results: [
        '£12,000 inheritance tax savings',
        'Optimized capital gains structure',
        'Property portfolio restructuring',
        'Estate planning implementation'
      ],
      quote: "Switching to MA & CO was the best decision for our business. Their strategic tax planning has saved us thousands.",
      author: 'Sarah Johnson, Director',
      savings: '£18,500',
      timeframe: '18 months'
    },
    {
      client: 'Creative Design Agency',
      industry: 'Marketing & Design',
      challenge: 'IR35 compliance and contractor management',
      solution: 'Business incorporation and contractor optimization',
      results: [
        '£8,000 annual tax reduction',
        'Full IR35 compliance achieved',
        'Streamlined invoicing process',
        'Expense optimization program'
      ],
      quote: "As a freelancer, I was overwhelmed by taxes. MA & CO simplified everything and found deductions I never knew existed.",
      author: 'David Williams, Founder',
      savings: '£12,000',
      timeframe: '6 months'
    }
  ]

  const testimonials = [
    {
      quote: "The level of service is exceptional. They don't just do our accounts - they actively help us make better financial decisions.",
      author: "Michael Chen",
      position: "Restaurant Owner",
      rating: 5
    },
    {
      quote: "Their AI-powered insights have given us a competitive advantage. We can now predict cash flow issues before they happen.",
      author: "Emma Thompson",
      position: "E-commerce Director",
      rating: 5
    },
    {
      quote: "Finally, an accountant that speaks our language. They understand technology businesses and the unique challenges we face.",
      author: "James Rodriguez",
      position: "SaaS Startup Founder",
      rating: 5
    }
  ]

  const stats = [
    { number: '£500K+', label: 'Total Client Savings', icon: PiggyBank },
    { number: '100+', label: 'Happy Clients', icon: Users },
    { number: '£5,000', label: 'Average Annual Savings', icon: TrendingUp },
    { number: '48hrs', label: 'Average Setup Time', icon: Clock }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Real Results from Real Clients
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Don't just take our word for it. See how we've helped London businesses 
              save money, optimize operations, and achieve financial clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-16">
            Our Track Record
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-full mx-auto mb-4">
                  <stat.icon className="text-primary" size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-16">
            Client Case Studies
          </h2>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Case Study Content */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-accent text-primary text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold font-serif text-primary">
                          {study.client}
                        </h3>
                        <p className="text-gray-600">{study.industry}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-primary mb-2">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-primary mb-3">Results Achieved:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-light p-6 rounded-lg relative">
                      <Quote className="absolute top-4 right-4 text-accent/20" size={40} />
                      <p className="text-gray-700 italic mb-3">"{study.quote}"</p>
                      <p className="font-semibold text-primary">{study.author}</p>
                    </div>
                  </div>

                  {/* Results Summary */}
                  <div className="bg-primary text-white p-8 flex flex-col justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">
                        {study.savings}
                      </div>
                      <div className="text-lg mb-4">Total Savings</div>
                      <div className="text-2xl font-bold mb-2">
                        {study.timeframe}
                      </div>
                      <div className="text-gray-300">Timeframe</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-16">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-light rounded-xl p-8 text-center">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-accent fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-primary">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Join the businesses that have already discovered the MA & CO advantage. 
            Book your free consultation and see how we can transform your finances.
          </p>
          <Link
            href="/contact#consultation"
            className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
