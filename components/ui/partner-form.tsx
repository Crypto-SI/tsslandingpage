"use client"

import { useState } from "react"
import { CheckCircle, Building2, Users, Target, Mail, Phone, Globe } from "lucide-react"

interface PartnerFormData {
  organizationName: string
  organizationType: string
  contactPerson: string
  email: string
  phone: string
  website: string
  partnershipType: string
  goals: string
  message: string
}

export default function PartnerForm() {
  const [formData, setFormData] = useState<PartnerFormData>({
    organizationName: '',
    organizationType: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    partnershipType: '',
    goals: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof PartnerFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const resetForm = () => {
    setFormData({
      organizationName: '',
      organizationType: '',
      contactPerson: '',
      email: '',
      phone: '',
      website: '',
      partnershipType: '',
      goals: '',
      message: ''
    })
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <div className="border-green-200 bg-green-50 rounded-lg p-6">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h3 className="text-green-800 text-xl font-bold mb-2">Thank You for Your Interest!</h3>
          <p className="text-green-700 mb-4">
            We've received your partnership inquiry and will contact you within 2-3 business days.
          </p>
          <p className="text-green-700 mb-6">
            Our team will review your submission and reach out to discuss potential partnership opportunities.
          </p>
          <button
            onClick={resetForm}
            className="text-green-700 border border-green-300 bg-green-50 hover:bg-green-100 px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Building2 className="h-10 w-10 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Partner Registration</h3>
        <p className="text-gray-600">
          Join our network of football organizations and create opportunities for players
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Organization Name *
            </label>
            <input
              type="text"
              value={formData.organizationName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('organizationName', e.target.value)}
              placeholder="Enter organization name"
              required
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Organization Type *
            </label>
            <select
              value={formData.organizationType}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange('organizationType', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select organization type</option>
              <option value="football-club">Football Club</option>
              <option value="sports-agency">Sports Agency</option>
              <option value="educational-institution">Educational Institution</option>
              <option value="community-organization">Community Organization</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Contact Person *
            </label>
            <input
              type="text"
              value={formData.contactPerson}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('contactPerson', e.target.value)}
              placeholder="Enter contact person name"
              required
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="email"
                value={formData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('email', e.target.value)}
                placeholder="Enter email address"
                required
                className="w-full pl-10 pr-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('phone', e.target.value)}
                placeholder="Enter phone number"
                className="w-full pl-10 pr-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Website
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="url"
                value={formData.website}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('website', e.target.value)}
                placeholder="Enter website URL"
                className="w-full pl-10 pr-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Partnership Type *
          </label>
          <select
            value={formData.partnershipType}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange('partnershipType', e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select partnership type</option>
            <option value="player-pathway">Player Pathway</option>
            <option value="coaching-development">Coaching Development</option>
            <option value="facility-sharing">Facility Sharing</option>
            <option value="sponsorship">Sponsorship</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Partnership Goals *
          </label>
          <textarea
            value={formData.goals}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange('goals', e.target.value)}
            placeholder="Describe your partnership goals and objectives"
            required
            rows={3}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Additional Information
          </label>
          <textarea
            value={formData.message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange('message', e.target.value)}
            placeholder="Any additional information you'd like to share"
            rows={4}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={resetForm}
            className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Reset Form
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Partnership Inquiry'}
          </button>
        </div>
      </form>
    </div>
  )
}