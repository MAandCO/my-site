import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle } from 'lucide-react'
import ConsultationForm from '@/components/ConsultationForm'

export const metadata: Metadata = {
  title: 'Contact MA & CO Accountants | Book Free Consultation',
  description: 'Contact MA & CO Accountants for expert accounting services. Book your free consultation today. Phone: 020 8158 8499',
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['020 8158 8499', 'Mon-Fri: 9:00 AM - 5:30 PM'],
      action: 'tel:02081588499'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      details: ['020 3890 1933', 'Quick responses during business hours'],
      action: 'https://wa.me/2038901933'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@maandcoaccountants.com', 'Response within 24 hours'],
      action: 'mailto:info@maandcoaccountants.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Croydon, London', 'United Kingdom'],
      action: '#'
    }
  ]

  const consultationBenefits = [
    'Complete tax efficiency analysis',
    'Business structure optimization review',
    'AI-powered financial opportunity assessment',
    'Personalized action plan worth £350',
    'No obligation, completely free',
    'Immediate actionable insights'
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Ready to transform your business finances? Book your free consultation today 
              and discover how we can help you save money and optimize your financial operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-16">
            How to Reach Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="card text-center group hover:shadow-xl">
                <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <method.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold font-serif text-primary mb-4">
                  {method.title}
                </h3>
                <div className="space-y-2 mb-6">
                  {method.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
                {method.action.startsWith('http') || method.action.startsWith('tel') || method.action.startsWith('mailto') ? (
                  <a
                    href={method.action}
                    className="text-accent font-semibold hover:text-accent-dark transition-colors"
                    target={method.action.startsWith('http') ? '_blank' : undefined}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {method.title === 'Call Us' ? 'Call Now' : 
                     method.title === 'WhatsApp' ? 'Message Us' : 
                     method.title === 'Email Us' ? 'Send Email' : 'Contact'}
                  </a>
                ) : (
                  <span className="text-accent font-semibold">Get Directions</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section id="consultation" className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Benefits */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-8">
                Book Your Free Consultation
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Take the first step towards financial optimization. Our 30-minute consultation 
                will give you immediate insights into how we can improve your business finances.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-bold font-serif text-primary">
                  What You'll Get:
                </h3>
                {consultationBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <Calendar className="text-accent" size={24} />
                  <span className="font-bold text-primary">Limited Availability</span>
                </div>
                <p className="text-gray-700">
                  We only offer 5 free consultations per month to ensure maximum value. 
                  Book yours today!
                </p>
              </div>
            </div>

            {/* Consultation Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Additional Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold font-serif text-primary mb-6">
                Business Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Monday - Friday</span>
                  <span className="text-primary font-semibold">9:00 AM - 5:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Saturday</span>
                  <span className="text-gray-500">By Appointment</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-light rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Emergency Support:</strong> For urgent matters outside business hours, 
                  please email us and we'll respond as soon as possible.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-serif text-primary mb-6">
                Why Choose MA & CO?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-primary">Expert Team</p>
                    <p className="text-gray-600 text-sm">Qualified accountants with 15+ years experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-primary">Proven Results</p>
                    <p className="text-gray-600 text-sm">£500K+ in tax savings generated for clients</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-primary">Technology-Driven</p>
                    <p className="text-gray-600 text-sm">AI-powered insights for better financial decisions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-primary">Personal Service</p>
                    <p className="text-gray-600 text-sm">Direct access to qualified accountants</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
