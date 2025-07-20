import type { Metadata } from 'next'
import Link from 'next/link'
import { Users, CheckCircle, Clock, Shield, Calculator, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Payroll & CIS Services | MA & CO Accountants',
  description: 'Professional payroll management and CIS compliance services. RTI submissions, pension auto-enrolment, and Construction Industry Scheme support.',
}

export default function PayrollCISPage() {
  const payrollServices = [
    'Monthly payroll processing',
    'RTI submissions to HMRC',
    'P60 and P45 preparation',
    'Pension auto-enrolment',
    'Statutory payments (SSP, SMP, etc.)',
    'Year-end reporting',
    'Payslip generation',
    'Employee starter/leaver forms'
  ]

  const cisServices = [
    'CIS registration assistance',
    'Monthly CIS returns',
    'Subcontractor verification',
    'CIS deduction calculations',
    'Contractor compliance',
    'CIS reconciliation',
    'HMRC correspondence',
    'End of year certificates'
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Always On Time',
      description: 'Guaranteed payroll processing and RTI submissions before deadlines'
    },
    {
      icon: Shield,
      title: 'Full Compliance',
      description: 'Stay compliant with HMRC payroll and CIS regulations'
    },
    {
      icon: Calculator,
      title: 'Accurate Calculations',
      description: 'Precise tax, NI, and pension calculations every time'
    },
    {
      icon: Users,
      title: 'Employee Support',
      description: 'Direct support for employee payroll queries and documentation'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-accent rounded-full mx-auto mb-6">
              <Users className="text-primary" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Payroll & CIS Services
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Professional payroll management and Construction Industry Scheme (CIS) compliance. 
              From RTI submissions to pension auto-enrolment, we handle it all so you can focus 
              on your business.
            </p>
            <Link
              href="/contact#consultation"
              className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
            >
              Get Payroll Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-16">
            Why Choose Our Payroll Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-full mx-auto mb-6">
                  <benefit.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold font-serif text-primary mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Payroll Services */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Users className="text-accent mr-4" size={32} />
                <h2 className="text-3xl font-bold font-serif text-primary">
                  Payroll Services
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Complete payroll management from calculation to submission, ensuring 
                your employees are paid accurately and on time.
              </p>
              <div className="space-y-3">
                {payrollServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CIS Services */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <FileText className="text-accent mr-4" size={32} />
                <h2 className="text-3xl font-bold font-serif text-primary">
                  CIS Compliance
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                Specialist Construction Industry Scheme support for contractors 
                and subcontractors, ensuring full HMRC compliance.
              </p>
              <div className="space-y-3">
                {cisServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Deadlines */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold font-serif text-primary text-center mb-12">
            Important Payroll & CIS Deadlines
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Payroll Deadlines</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>RTI Submission:</strong> On or before each pay date</li>
                  <li><strong>PAYE Payment:</strong> 22nd of following month</li>
                  <li><strong>P60s:</strong> By 31st May</li>
                  <li><strong>P11D Forms:</strong> By 6th July</li>
                </ul>
              </div>
              <div className="bg-gray-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4">CIS Deadlines</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Monthly Returns:</strong> 19th of following month</li>
                  <li><strong>CIS Payment:</strong> 22nd of following month</li>
                  <li><strong>Annual Return:</strong> 19th May</li>
                  <li><strong>Verification:</strong> Before first payment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold font-serif mb-12">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold font-serif mb-4">Basic Payroll</h3>
              <div className="text-4xl font-bold text-accent mb-4">£15</div>
              <p className="text-gray-200 mb-6">Per employee, per month</p>
              <ul className="space-y-2 text-sm text-left mb-6">
                <li>✓ Monthly payroll processing</li>
                <li>✓ RTI submissions</li>
                <li>✓ Payslips and P60s</li>
                <li>✓ Basic reporting</li>
              </ul>
              <Link href="/contact" className="btn bg-accent text-primary w-full">
                Choose Plan
              </Link>
            </div>
            <div className="bg-accent text-primary rounded-xl p-8 transform scale-105">
              <h3 className="text-2xl font-bold font-serif mb-4">Payroll + CIS</h3>
              <div className="text-4xl font-bold mb-4">£25</div>
              <p className="mb-6">Per employee, per month</p>
              <ul className="space-y-2 text-sm text-left mb-6">
                <li>✓ Full payroll service</li>
                <li>✓ CIS compliance</li>
                <li>✓ Pension auto-enrolment</li>
                <li>✓ Priority support</li>
              </ul>
              <Link href="/contact" className="btn bg-primary text-white w-full">
                Choose Plan
              </Link>
            </div>
            <div className="bg-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold font-serif mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-accent mb-4">POA</div>
              <p className="text-gray-200 mb-6">50+ employees</p>
              <ul className="space-y-2 text-sm text-left mb-6">
                <li>✓ Volume discounts</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ Custom reporting</li>
                <li>✓ HR support</li>
              </ul>
              <Link href="/contact" className="btn bg-accent text-primary w-full">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold font-serif text-primary mb-6">
            Ready to Simplify Your Payroll?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our payroll experts handle your employee payments and CIS compliance 
            while you focus on growing your business.
          </p>
          <Link
            href="/contact"
            className="btn bg-accent text-primary hover:bg-accent-dark text-lg px-8 py-4"
          >
            Start Your Payroll Service
          </Link>
        </div>
      </section>
    </div>
  )
}
