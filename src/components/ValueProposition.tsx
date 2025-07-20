import { Coins, TrendingUp, Shield } from 'lucide-react'
import Link from 'next/link'

const ValueProposition = () => {
  const benefits = [
    {
      icon: Coins,
      title: 'Stop Overpaying Taxes',
      description: 'Our strategic approach saves businesses an average of £5,000+ annually in unnecessary taxes through legitimate strategies tailored to your specific situation.',
      highlight: '£5,000+ Average Savings',
    },
    {
      icon: TrendingUp,
      title: 'Unlock Hidden Profits',
      description: 'Our AI-powered analysis identifies financial opportunities others miss, giving you insights that directly impact your bottom line and growth potential.',
      highlight: '15-25% Profit Increase',
    },
    {
      icon: Shield,
      title: 'Sleep Better at Night',
      description: 'Never miss a deadline with our guaranteed compliance system. We handle all the complex paperwork so you can focus on growing your business.',
      highlight: '100% Compliance Guarantee',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary mb-6">
            The MA & CO Advantage
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stop settling for basic accounting. Your business deserves better. Our integrated approach 
            delivers results that transform your financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gray-light rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="text-primary" size={32} />
              </div>
              
              <h3 className="text-xl font-bold font-serif text-primary mb-4">
                {benefit.title}
              </h3>
              
              <div className="mb-4">
                <span className="inline-block bg-accent text-primary text-sm font-bold px-3 py-1 rounded-full">
                  {benefit.highlight}
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/about"
            className="btn bg-primary text-white hover:bg-primary-light text-lg px-8 py-4"
          >
            Discover How We Transform Businesses
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ValueProposition
