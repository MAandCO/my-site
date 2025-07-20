import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'MA & CO Accountants | Expert Accounting, Tax Planning & AI Solutions',
  description: 'London\'s premier accountancy firm combining expert financial guidance, strategic tax planning, and cutting-edge AI to maximize your business potential.',
  keywords: 'accountants london, tax planning, bookkeeping, vat returns, company formation, self assessment, payroll, corporation tax',
  authors: [{ name: 'MA & CO Accountants' }],
  openGraph: {
    title: 'MA & CO Accountants | Expert Accounting Services',
    description: 'Transform your business finances with our integrated approach combining accountancy, tax planning, and AI-powered insights.',
    url: 'https://maandcoaccountants.com',
    siteName: 'MA & CO Accountants',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'MA & CO Accountants - Professional Accounting Services',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MA & CO Accountants | Expert Accounting Services',
    description: 'Transform your business finances with our integrated approach combining accountancy, tax planning, and AI-powered insights.',
    images: ['/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
