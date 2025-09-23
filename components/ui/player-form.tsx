"use client"

import { useState } from "react"
import { CheckCircle, Trophy, Mail, Phone, Calendar, Target, User } from "lucide-react"

interface PlayerFormData {
  playerName: string
  playerAge: string
  email: string
  phone: string
  parentName: string
  parentEmail: string
  parentPhone: string
  experienceLevel: string
  preferredPosition: string
  programInterest: string
  preferredLocation: string
  sessionPreference: string
  playingHistory: string
  achievements: string
  goals: string
  additionalInfo: string
}

export default function PlayerForm() {
  const [formData, setFormData] = useState<PlayerFormData>({
    playerName: '',
    playerAge: '',
    email: '',
    phone: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    experienceLevel: '',
    preferredPosition: '',
    programInterest: '',
    preferredLocation: '',
    sessionPreference: '',
    playingHistory: '',
    achievements: '',
    goals: '',
    additionalInfo: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof PlayerFormData, value: string) => {
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
      playerName: '',
      playerAge: '',
      email: '',
      phone: '',
      parentName: '',
      parentEmail: '',
      parentPhone: '',
      experienceLevel: '',
      preferredPosition: '',
      programInterest: '',
      preferredLocation: '',
      sessionPreference: '',
      playingHistory: '',
      achievements: '',
      goals: '',
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
            We've received your player registration and will contact you within 2-3 business days.
          </p>
          <p className="text-green-700 mb-6">
            Our coaching team will review your submission and reach out to discuss development opportunities.
          </p>
          <button
            onClick={resetForm}
            className="text-green-700 border border-green-300 bg-green-50 hover:bg-green-100 px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Register Another Player
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Trophy className="h-10 w-10 text-purple-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Player Registration</h3>
        <p className="text-gray-600">
          Take your football development to the next level with our expert coaching
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Player Information */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">Player Information</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Player Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={formData.playerName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('playerName', e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="w-full pl-10 pr-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Player Age *
              </label>
              <input
                type="number"
                value={formData.playerAge}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('playerAge', e.target.value)}
                placeholder="Enter your age"
                required
                min="3"
                max="99"
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
                  placeholder="Enter your email"
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
                  placeholder="Enter your phone number"
                  required
                  className="w-full pl-10 pr-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Parent/Guardian Information */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">Parent/Guardian Information</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Parent/Guardian Name *
              </label>
              <input
                type="text"
                value={formData.parentName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('parentName', e.target.value)}
                placeholder="Enter parent/guardian name"
                required
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Parent Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  value={formData.parentEmail}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('parentEmail', e.target.value)}
                  placeholder="Enter parent email"
                  required
                  className="w-full pl-10 pr-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Parent Phone *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="tel"
                  value={formData.parentPhone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('parentPhone', e.target.value)}
                  placeholder="Enter parent phone"
                  required
                  className="w-full pl-10 pr-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Football Experience */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">Football Experience</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Experience Level *
              </label>
              <select
                value={formData.experienceLevel}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange('experienceLevel', e.target.value)}
                required
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select experience level</option>
                <option value="beginner">Beginner - New to football</option>
                <option value="some-experience">Some experience - played casually</option>
                <option value="regular">Regular - play regularly</option>
                <option value="advanced">Advanced - competitive experience</option>
                <option value="professional">Professional - playing at high level</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Preferred Position
              </label>
              <select
                value={formData.preferredPosition}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange('preferredPosition', e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select preferred position</option>
                <option value="goalkeeper">Goalkeeper</option>
                <option value="defender">Defender</option>
                <option value="midfielder">Midfielder</option>
                <option value="forward">Forward</option>
                <option value="any">Any position</option>
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
                <option value="development">Development Program</option>
                <option value="competitive">Competitive Team</option>
                <option value="advanced">Advanced Coaching</option>
                <option value="trial">Trial/Assessment</option>
                <option value="coaching">Coaching Development</option>
                <option value="other">Other - please specify</option>
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

        {/* Football History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Playing History
            </label>
            <textarea
              value={formData.playingHistory}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange('playingHistory', e.target.value)}
              placeholder="Previous clubs, teams, or leagues you've played for"
              rows={3}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Achievements & Awards
            </label>
            <textarea
              value={formData.achievements}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange('achievements', e.target.value)}
              placeholder="Any awards, trophies, or recognition you've received"
              rows={3}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Goals */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Football Goals
          </label>
          <textarea
            value={formData.goals}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange('goals', e.target.value)}
            placeholder="What are your football goals and aspirations?"
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
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Player Registration'}
          </button>
        </div>
      </form>
    </div>
  )
}