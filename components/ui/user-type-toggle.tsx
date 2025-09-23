"use client"

import { useState } from "react"
import { Building2, Users, Trophy } from "lucide-react"

interface UserTypeToggleProps {
  onUserTypeChange?: (type: 'partner' | 'parent' | 'player') => void
}

export default function UserTypeToggle({ onUserTypeChange }: UserTypeToggleProps) {
  const [selectedType, setSelectedType] = useState<'partner' | 'parent' | 'player'>('partner')

  const userTypeOptions = [
    {
      id: 'partner',
      label: 'Partner',
      description: 'Club, agency, or organization',
      icon: Building2,
      color: 'bg-blue-100 text-blue-800 border-blue-200'
    },
    {
      id: 'parent',
      label: 'Parent',
      description: 'Registering for your child',
      icon: Users,
      color: 'bg-green-100 text-green-800 border-green-200'
    },
    {
      id: 'player',
      label: 'Player',
      description: 'Individual player registration',
      icon: Trophy,
      color: 'bg-purple-100 text-purple-800 border-purple-200'
    }
  ]

  const handleTypeChange = (type: 'partner' | 'parent' | 'player') => {
    setSelectedType(type)
    onUserTypeChange?.(type)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {userTypeOptions.map((option) => {
          const Icon = option.icon
          const isSelected = selectedType === option.id
          
          return (
            <button
              key={option.id}
              onClick={() => handleTypeChange(option.id as 'partner' | 'parent' | 'player')}
              className={`flex flex-col items-center p-6 rounded-xl border-2 transition-all duration-200 min-w-[140px] ${
                isSelected 
                  ? `${option.color} border-opacity-50 shadow-lg scale-105` 
                  : 'bg-gray-50 border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <Icon className={`h-8 w-8 mb-3 ${isSelected ? '' : 'text-gray-500'}`} />
              <span className={`font-semibold ${isSelected ? '' : 'text-gray-600'}`}>
                {option.label}
              </span>
              <span className={`text-sm mt-1 ${isSelected ? 'opacity-90' : 'text-gray-500'}`}>
                {option.description}
              </span>
            </button>
          )
        })}
      </div>
      
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Selected: <span className="font-semibold text-primary capitalize">{selectedType}</span>
        </p>
      </div>
    </div>
  )
}