"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Users, Target, Heart, Star, CheckCircle, Globe } from "lucide-react"
import AnimatedText from "@/components/ui/animated-text"
import AnimatedComponent from "@/components/ui/animated-component"
import UserTypeToggle from "@/components/ui/user-type-toggle"
import PartnerForm from "@/components/ui/partner-form"
import ParentForm from "@/components/ui/parent-form"
import PlayerForm from "@/components/ui/player-form"

export default function RegisterInterestPage() {
  const [selectedUserType, setSelectedUserType] = useState<'partner' | 'parent' | 'player'>('partner')

  const handleUserTypeChange = (type: 'partner' | 'parent' | 'player') => {
    setSelectedUserType(type)
  }

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/10 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
              
              <AnimatedText
                text="Register Your Interest"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              />
              
              <AnimatedComponent
                animation="fadeIn"
                delay={0.3}
                className="text-xl text-muted-foreground mb-8"
              >
                Join our football community and take the first step towards achieving your goals
              </AnimatedComponent>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="container mx-auto px-4 mt-8">
            <div className="max-w-4xl mx-auto">
              <img
                src="/register-interest-hero-1920x800-football-registration.png"
                alt="Football Registration"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedComponent animation="slideUp" delay={0.1}>
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Tell us about yourself</h2>
                    <p className="text-lg text-muted-foreground">
                      Select your role below to access the appropriate registration form
                    </p>
                  </div>

                  {/* User Type Toggle */}
                  <div className="mb-12">
                    <UserTypeToggle onUserTypeChange={handleUserTypeChange} />
                  </div>

                  {/* Forms Container */}
                  <div className="space-y-8">
                    {/* Partner Form */}
                    <div className={`form-section ${selectedUserType === 'partner' ? '' : 'hidden'}`}>
                      <PartnerForm />
                    </div>

                    {/* Parent Form */}
                    <div className={`form-section ${selectedUserType === 'parent' ? '' : 'hidden'}`}>
                      <ParentForm />
                    </div>

                    {/* Player Form */}
                    <div className={`form-section ${selectedUserType === 'player' ? '' : 'hidden'}`}>
                      <PlayerForm />
                    </div>
                  </div>
                </div>
              </AnimatedComponent>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedComponent animation="fadeIn" delay={0.3}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Join thousands of players, parents, and partners who have already discovered the TSS Multisports difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Contact Us
                  </Link>
                  <Link href="/locations" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors">
                    Find Locations
                  </Link>
                </div>
              </AnimatedComponent>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}