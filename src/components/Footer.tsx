import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const services = [
    { href: '/services/self-assessment', label: 'Self Assessment' },
    { href: '/services/company-accounts', label: 'Company Accounts' },
    { href: '/services/corporation-tax', label: 'Corporation Tax' },
    { href: '/services/vat-returns', label: 'VAT Returns' },
    { href: '/services/bookkeeping', label: 'Bookkeeping' },
    { href: '/services/payroll-cis', label: 'Payroll & CIS' },
  ]

  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/success-stories', label: 'Success Stories' },
    { href: '/resources', label: 'Resources' },
    { href: '/resources/blog', label: 'Blog' },
    { href: '/resources/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="text-2xl font-bold font-serif">
                  MA <span className="text-accent">&</span> CO
                  <div className="text-sm font-medium text-gray-300">Accountants</div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                London's premier accountancy firm combining expert financial guidance, 
                strategic tax planning, and cutting-edge AI to maximize your business potential.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/ma-co-accountants"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/maandcoaccountants"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold font-serif mb-6 relative">
                Our Services
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-accent"></div>
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold font-serif mb-6 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-accent"></div>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold font-serif mb-6 relative">
                Contact Us
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-accent"></div>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-accent mt-1 flex-shrink-0" size={18} />
                  <div className="text-gray-300">
                    <p>Croydon, London</p>
                    <p>United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-accent flex-shrink-0" size={18} />
                  <a 
                    href="tel:02081588499" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    020 8158 8499
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-accent flex-shrink-0" size={18} />
                  <a 
                    href="https://wa.me/2038901933" 
                    className="text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp: 020 3890 1933
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-accent flex-shrink-0" size={18} />
                  <a 
                    href="mailto:info@maandcoaccountants.com" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    info@maandcoaccountants.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-accent flex-shrink-0" size={18} />
                  <div className="text-gray-300">
                    <p>Mon-Fri: 9:00 AM - 5:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 MA & CO Accountants Ltd. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
