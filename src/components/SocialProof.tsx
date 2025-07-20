import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const SocialProof = () => {
  const testimonials = [
    {
      content: "MA & CO transformed our financial operations. Their AI-powered insights helped us identify £15,000 in tax savings we would have missed with our previous accountant. The level of service is exceptional.",
      author: "John Smith",
      position: "CEO, London Tech Solutions",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      content: "Switching to MA & CO was the best decision for our business. Their strategic tax planning has saved us thousands, and their proactive approach means we're never caught off guard by deadlines.",
      author: "Sarah Johnson",
      position: "Director, Urban Property Group",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      content: "As a freelancer, I was overwhelmed by taxes and compliance. MA & CO simplified everything and found deductions I never knew existed. Their service has more than paid for itself!",
      author: "David Williams",
      position: "Independent Consultant",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5,
    },
  ]

  const stats = [
    { number: "100+", label: "Happy Clients" },
    { number: "£500K+", label: "Tax Savings Generated" },
    { number: "99.9%", label: "Compliance Rate" },
    { number: "24h", label: "Average Response Time" },
  ]

  const certifications = [
    { name: "AAT", description: "Association of Accounting Technicians" },
    { name: "ACCA", description: "Association of Chartered Certified Accountants" },
    { name: "FreeAgent", description: "Certified Partner" },
    { name: "Xero", description: "Gold Partner" },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary mb-6">
            Trusted by Business Owners Across London
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See what our clients say about the transformation 
            we've brought to their businesses.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-light rounded-xl p-8 relative hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-accent/20">
                <Quote size={40} />
              </div>
              
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-accent fill-current" size={16} />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-primary">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-primary rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold font-serif text-center mb-8">
            Professional Certifications & Partnerships
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 rounded-lg p-6 mb-3 hover:bg-white/20 transition-colors duration-300">
                  <div className="text-2xl font-bold text-accent mb-2">
                    {cert.name}
                  </div>
                </div>
                <div className="text-sm text-gray-300">
                  {cert.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
