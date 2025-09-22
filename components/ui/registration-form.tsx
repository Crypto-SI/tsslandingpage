"use client"

import { useState } from "react"
import { Calendar, MapPin, Users, Mail, Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface RegistrationData {
  participantName: string
  participantAge: string
  parentName: string
  email: string
  phone: string
  program: string
  sessionPreference: string
  emergencyContact: string
  medicalConditions: string
  experience: string
  message: string
}

interface RegistrationFormProps {
  programName: string
  programDescription: string
  onSubmit?: (data: RegistrationData) => void
}

export default function RegistrationForm({ 
  programName, 
  programDescription, 
  onSubmit 
}: RegistrationFormProps) {
  const [formData, setFormData] = useState<RegistrationData>({
    participantName: '',
    participantAge: '',
    parentName: '',
    email: '',
    phone: '',
    program: programName,
    sessionPreference: '',
    emergencyContact: '',
    medicalConditions: '',
    experience: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: keyof RegistrationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (onSubmit) {
      onSubmit(formData)
    }
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-green-600 flex items-center justify-center gap-2">
                <Calendar className="h-6 w-6" />
                Registration Successful!
              </CardTitle>
              <CardDescription>
                Thank you for registering for {programName}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-lg">
                We've received your registration and will be in touch within 24 hours to confirm your spot.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg text-left">
                <h4 className="font-medium mb-2">Next Steps:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Check your email for confirmation details</li>
                  <li>• Complete any required forms</li>
                  <li>• Arrive 15 minutes early for your first session</li>
                  <li>• Bring appropriate sports clothing and equipment</li>
                </ul>
              </div>
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Register Another Participant
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Register for {programName}</h2>
            <p className="text-lg text-muted-foreground">{programDescription}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Participant Information
              </CardTitle>
              <CardDescription>
                Please fill in all required fields to complete your registration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Participant Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Participant Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        required
                        value={formData.participantName}
                        onChange={(e) => handleInputChange('participantName', e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Participant Age *
                    </label>
                    <input
                      type="number"
                      required
                      min="3"
                      max="99"
                      value={formData.participantAge}
                      onChange={(e) => handleInputChange('participantAge', e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Age"
                    />
                  </div>
                </div>

                {/* Parent/Guardian Details */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => handleInputChange('parentName', e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Full name"
                  />
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="email@example.com"
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
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                </div>

                {/* Session Preference */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preferred Session Day/Time
                  </label>
                  <select
                    value={formData.sessionPreference}
                    onChange={(e) => handleInputChange('sessionPreference', e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select preferred time</option>
                    <option value="monday-afternoon">Monday Afternoon</option>
                    <option value="tuesday-afternoon">Tuesday Afternoon</option>
                    <option value="wednesday-afternoon">Wednesday Afternoon</option>
                    <option value="thursday-afternoon">Thursday Afternoon</option>
                    <option value="friday-afternoon">Friday Afternoon</option>
                    <option value="saturday-morning">Saturday Morning</option>
                    <option value="saturday-afternoon">Saturday Afternoon</option>
                    <option value="flexible">Flexible - Any time works</option>
                  </select>
                </div>

                {/* Emergency Contact */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Emergency Contact *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.emergencyContact}
                    onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Name and phone number"
                  />
                </div>

                {/* Medical Information */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Medical Conditions or Allergies
                  </label>
                  <textarea
                    value={formData.medicalConditions}
                    onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={3}
                    placeholder="List any medical conditions, allergies, or special requirements"
                  />
                </div>

                {/* Experience Level */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Football Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select experience level</option>
                    <option value="beginner">Beginner - New to football</option>
                    <option value="some-experience">Some experience - played casually</option>
                    <option value="regular">Regular - play regularly</option>
                    <option value="advanced">Advanced - competitive experience</option>
                  </select>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Additional Information
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={4}
                    placeholder="Any additional information or questions"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Complete Registration'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}