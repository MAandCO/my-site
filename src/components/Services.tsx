import { Calculator, Search, Bot, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Services = () => {
  const serviceCategories = [
    {
      icon: Calculator,
      title: 'Expert Accountancy',
      description: 'Comprehensive accounting solutions with meticulous attention to detail and guaranteed compliance.',
      services: [
        'Company Formation & Accounts',
        'Self Assessment Tax Returns',
        'VAT & Payroll Management',
        'Bookkeeping & Compliance',
        'Annual Accounts Preparation',
        'Management Accounts',
      ],
      link: '/services#accounting',
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
    },
    {
      icon: Search,
      title: 'Strategic Tax Planning',
      description: 'Proactive tax strategies that legally minimize your tax burden and maximize your profits.',
      services: [
        'Tax Efficiency Strategies',
        'Business Structure Optimization',
        'Investment & Growth Planning',
        'Exit Strategy Planning',
        'Corporation Tax (CT600)',
        'Inheritance Tax Support',
      ],
      link: '/services#tax-planning',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600',
    },
    {
      icon: Bot,
      title: 'AI-Powered Insights',
      description: 'Cutting-edge technology that gives you the competitive advantage through intelligent financial analysis.',
      services: [
        'Real-time Financial Dashboards',
        'Predictive Cash Flow Analysis',
        'Automated Expense Categorization',
        'Growth Opportunity Identification',
        'R&D Tax Relief Optimization',
        'Crypto Tax Reporting',
      ],
      link: '/services#ai-solutions',
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600',
    },
  ]

  const additionalServices = [
    'Estate Planning',
    'Property Tax Strategy',
    'Startups & Business Structuring',
    'HMRC Correspondence & Appeals',
    'International Clients Support',
    'Contractors & Freelancers',
  ]

  return (
    <section className="section-padding bg-gray-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary mb-6">
            Our Integrated Services
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stop settling for basic accounting. Your business deserves better. Our three-part approach 
            eliminates financial blind spots, slashes your tax burden, and gives you the real-time data 
            you need to make profitable decisions.
          </p>
        </div>

        {/* Main Service Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className={`card border-2 ${category.color} hover:shadow-2xl transition-all duration-300`}
            >
              <div className={`flex items-center justify-center w-16 h-16 ${category.iconColor} bg-white rounded-full mb-6 shadow-md`}>
                <category.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold font-serif text-primary mb-4">
                {category.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {category.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href={category.link}
                className="inline-flex items-center text-accent hover:text-accent-dark font-semibold transition-colors duration-200 group"
              >
                Learn More 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold font-serif text-primary text-center mb-8">
            Additional Specialist Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/services"
              className="btn bg-accent text-primary hover:bg-accent-dark"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
