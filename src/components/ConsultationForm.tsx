'use client'

import { useState } from 'react'
import { Send, Loader } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  businessType: string
  currentAccountant: string
  mainChallenges: string
  preferredTime: string
  message: string
}

const ConsultationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    currentAccountant: '',
    mainChallenges: '',
    preferredTime: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const businessTypes = [
    'Sole Trader',
    'Limited Company',
    'Partnership',
    'LLP',
    'Freelancer/Contractor',
    'Property Investor',
    'Other'
  ]

  const preferredTimes = [
    'Morning (9:00 AM - 12:00 PM)',
    'Afternoon (12:00 PM - 5:00 PM)',
    'Evening (5:00 PM - 7:00 PM)',
    'Weekend (By Appointment)'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }

    if (!formData.businessType) {
      newErrors.businessType = 'Please select your business type'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // In a real application, you would send this to your backend or form service
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your form. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="text-primary" size={32} />
        </div>
        <h3 className="text-2xl font-bold font-serif text-primary mb-4">
          Thank You!
        </h3>
        <p className="text-gray-600 mb-6">
          Your consultation request has been received. We'll contact you within 24 hours 
          to schedule your free consultation.
        </p>
        <div className="bg-gray-light p-4 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>What's Next?</strong><br />
            1. We'll review your information<br />
            2. One of our experts will call you<br />
            3. We'll schedule your free 30-minute consultation
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold font-serif text-primary mb-2">
          Free 30-Minute Consultation
        </h3>
        <p className="text-gray-600">
          Fill out the form below and we'll be in touch within 24 hours
        </p>
      </div>

      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your phone number"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            placeholder="Your company name"
          />
        </div>
      </div>

      {/* Business Information */}
      <div>
        <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
          Business Type *
        </label>
        <select
          id="businessType"
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
            errors.businessType ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select your business type</option>
          {businessTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.businessType && <p className="mt-1 text-sm text-red-600">{errors.businessType}</p>}
      </div>

      <div>
        <label htmlFor="currentAccountant" className="block text-sm font-medium text-gray-700 mb-2">
          Do you currently have an accountant?
        </label>
        <select
          id="currentAccountant"
          name="currentAccountant"
          value={formData.currentAccountant}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
        >
          <option value="">Please select</option>
          <option value="yes-satisfied">Yes, and I'm satisfied</option>
          <option value="yes-unsatisfied">Yes, but looking for better service</option>
          <option value="no">No, I need an accountant</option>
          <option value="diy">I do my own accounting</option>
        </select>
      </div>

      <div>
        <label htmlFor="mainChallenges" className="block text-sm font-medium text-gray-700 mb-2">
          What are your main financial challenges?
        </label>
        <textarea
          id="mainChallenges"
          name="mainChallenges"
          value={formData.mainChallenges}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
          placeholder="e.g., High tax bills, poor cash flow, compliance issues..."
        />
      </div>

      <div>
        <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Consultation Time
        </label>
        <select
          id="preferredTime"
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
        >
          <option value="">Select preferred time</option>
          {preferredTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Additional Information
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
          placeholder="Any additional information you'd like to share..."
        />
      </div>

      <div className="bg-gray-light p-4 rounded-lg">
        <p className="text-sm text-gray-600">
          <strong>Privacy Notice:</strong> Your information is secure and will only be used to contact you 
          about your consultation. We never share your details with third parties.
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn bg-accent text-primary hover:bg-accent-dark text-lg py-4 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader className="animate-spin" size={20} />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <Send size={20} />
            <span>Book My Free Consultation</span>
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to be contacted by MA & CO Accountants regarding your consultation.
      </p>
    </form>
  )
}

export default ConsultationForm
