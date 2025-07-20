import { Play } from 'lucide-react'

const VideoSection = () => {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6">
            See How We Transform Businesses
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Discover how our integrated approach combining accountancy, tax planning, 
            and AI solutions has helped businesses like yours achieve financial success.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
            {/* Placeholder for video - in production, replace with actual video */}
            <div className="aspect-video bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center">
              <div className="text-center">
                <div className="bg-accent hover:bg-accent-dark w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                  <Play className="text-primary ml-1" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Client Success Stories</h3>
                <p className="text-gray-300">Watch how we've transformed businesses across London</p>
              </div>
            </div>

            {/* Overlay for actual video */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Video Caption */}
          <div className="text-center mt-8">
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              From startups to established enterprises, see real results from real clients 
              who've experienced the MA & CO advantage firsthand.
            </p>
          </div>

          {/* Key Benefits Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent mb-2">£15K+</div>
              <div className="text-sm text-gray-300">Average Tax Savings</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent mb-2">48hrs</div>
              <div className="text-sm text-gray-300">Setup Time</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-gray-300">AI Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
