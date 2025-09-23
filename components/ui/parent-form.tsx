"use client"

import { useState } from "react"
import { CheckCircle, Users, Mail, Phone, Calendar, Target } from "lucide-react"

interface ParentFormData {
  parentName: string
  email: string
  phone: string
  childName: string
  childAge: string
  childExperience: string
  programInterest: string
  preferredLocation: string
  sessionPreference: string
  emergencyContact: string
  medicalConditions: string
  additionalInfo: string
}

export default function ParentForm() {
  const [formData, setFormData] = useState<ParentFormData>({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    childExperience: '',
    programInterest: '',
    preferredLocation: '',
    sessionPreference: '',
    emergencyContact: '',
    medicalConditions: '',
    additionalInfo: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof ParentFormData, value: string) => {
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
      parentName: '',
      email: '',
      phone: '',
      childName: '',
      childAge: '',
      childExperience: '',
      programInterest: '',
      preferredLocation: '',
      sessionPreference: '',
      emergencyContact: '',
      medicalConditions: '',
      additionalInfo: ''
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
            We've received your registration inquiry and will contact you within 2-3 business days.
          </p>
          <p className="text-green-700 mb-6">
            Our team will review your submission and reach out to discuss program options for your child.
          </p>
          <button
            onClick={resetForm}
            className="text-green-700 border border-green-300 bg-green-50 hover:bg-green-100 px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Register Another Child
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Users className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Parent Registration</h3>
        <p className="text-gray-600">
          Register your child for our football programs and join our community
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Parent Information */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">Parent/Guardian Information</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Parent/Guardian Name *
              </label>
              <input
                type="text"
                value={formData.parentName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('parentName', e.target.value)}
                placeholder="Enter your full name"
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
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter phone number"
                  required
                  className="w-full pl-10 pr-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Child Information */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">Child Information</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Child's Name *
              </label>
              <input
                type="text"
                value={formData.childName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('childName', e.target.value)}
                placeholder="Enter child's full name"
                required
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Child's Age *
              </label>
              <input
                type="number"
                value={formData.childAge}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('childAge', e.target.value)}
                placeholder="Enter child's age"
                required
                min="3"
                max="18"
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Football Experience
              </label>
              <select
                value={formData.childExperience}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange('childExperience', e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select experience level</option>
                <option value="beginner">Beginner - New to football</option>
                <option value="some-experience">Some experience - played casually</option>
                <option value="regular">Regular - play regularly</option>
                <option value="advanced">Advanced - competitive experience</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Program Interest *
              </label>
              <select
                value={formData.programInterest}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange('programInterest', e.target.value)}
                required
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select program type</option>
                <option value="toddler-football">Toddler Football (3-5 years)</option>
                <option value="after-school-football">After School Football (6-12 years)</option>
                <option value="walking-football">Walking Football (50+ years)</option>
                <option value="competitive">Competitive Football</option>
                <option value="coaching-development">Coaching Development</option>
                <option value="unsure">Not sure - need guidance</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Preferred Location *
              </label>
              <select
                value={formData.preferredLocation}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange('preferredLocation', e.target.value)}
                required
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select preferred location</option>
                <option value="bedford">Bedford</option>
                <option value="milton-keynes">Milton Keynes</option>
                <option value="cambridge">Cambridge</option>
                <option value="northampton">Northampton</option>
                <option value="other">Other location</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Preferred Session Time
              </label>
              <select
                value={formData.sessionPreference}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange('sessionPreference', e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select preferred time</option>
                <option value="weekdays-morning">Weekday Morning</option>
                <option value="weekdays-afternoon">Weekday Afternoon</option>
                <option value="weekdays-evening">Weekday Evening</option>
                <option value="weekend-morning">Weekend Morning</option>
                <option value="weekend-afternoon">Weekend Afternoon</option>
                <option value="flexible">Flexible - Any time works</option>
              </select>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Emergency Contact *
          </label>
          <input
            type="text"
            value={formData.emergencyContact}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('emergencyContact', e.target.value)}
            placeholder="Name and phone number"
            required
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Medical Information */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Medical Conditions or Allergies
          </label>
          <textarea
            value={formData.medicalConditions}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange('medicalConditions', e.target.value)}
            placeholder="List any medical conditions, allergies, or special requirements"
            rows={3}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Additional Information */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Additional Information
          </label>
          <textarea
            value={formData.additionalInfo}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange('additionalInfo', e.target.value)}
            placeholder="Any additional information or questions"
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
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Registration'}
          </button>
        </div>
      </form>
    </div>
  )
}