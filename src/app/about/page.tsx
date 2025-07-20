import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Users, Award, Clock, Shield, Target, Heart, TrendingUp, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About MA & CO Accountants | Expert Team & Values',
  description: 'Learn about MA & CO Accountants - our expert team, values, and commitment to transforming business finances across London.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every calculation checked, every deadline met, every detail matters'
    },
    {
      icon: Heart,
      title: 'Partnership',
      description: 'We become part of your team, invested in your success'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Embracing technology to deliver superior results'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparent, honest, and ethical in everything we do'
    }
  ]

  const achievements = [
    { number: '100+', label: 'Happy Clients' },
    { number: '£500K+', label: 'Tax Savings Generated' },
    { number: '99.9%', label: 'Compliance Rate' },
    { number: '15+', label: 'Years Experience' }
  ]

  const certifications = [
    'AAT - Association of Accounting Technicians',
    'ACCA - Association of Chartered Certified Accountants',
    'FreeAgent Certified Partner',
    'Xero Gold Partner',
    'QuickBooks ProAdvisor',
    'Sage Business Partner'
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              About MA & CO Accountants
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              For over 15 years, we've been transforming business finances across London, 
              combining traditional accounting excellence with cutting-edge technology to 
              deliver unparalleled results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  MA & CO Accountants was founded with a simple mission: to provide London 
                  businesses with accounting services that go beyond compliance to drive 
                  real financial transformation.
                </p>
                <p>
                  What started as a traditional accounting practice has evolved into a 
                  forward-thinking firm that combines decades of expertise with the latest 
                  AI-powered technology. We've helped over 100 businesses save hundreds 
                  of thousands in taxes while achieving unprecedented financial clarity.
                </p>
                <p>
                  Today, we're proud to be the accounting firm that business owners trust 
                  not just with their numbers, but with their financial future.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-light rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="MA & CO Accountants office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-full mx-auto mb-6">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold font-serif text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-16">
            Meet Our Expert Team
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-light rounded-xl p-8 text-center">
              <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">MA</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-primary mb-2">
                Majed Ali
              </h3>
              <p className="text-accent font-semibold mb-4">
                Founder & Managing Director
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
                With over 15 years of experience in accounting and tax planning, Majed has 
                built MA & CO into London's premier accounting firm. His vision of combining 
                traditional expertise with AI-powered insights has transformed how businesses 
                approach their finances.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                <div className="space-y-2">
                  <p className="font-semibold text-primary">Qualifications:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AAT Qualified</li>
                    <li>• ACCA Certified</li>
                    <li>• Tax Planning Specialist</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-primary">Specializations:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Corporate Tax Strategy</li>
                    <li>• Business Structure Optimization</li>
                    <li>• AI-Powered Financial Analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-16">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-200 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-serif text-center mb-8">
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-accent flex-shrink-0" size={20} />
                  <span className="text-gray-200">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6">
            Ready to Transform Your Finances?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the businesses that have already discovered the MA & CO advantage. 
            Book your free consultation today and see how we can help your business thrive.
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
