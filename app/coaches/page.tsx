"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Award, Calendar, Clock, MapPin, Search, Filter, Star, Users, Shield, Trophy } from "lucide-react"
import AnimatedText from "@/components/ui/animated-text"
import AnimatedComponent from "@/components/ui/animated-component"
import SEO from "@/components/seo/seo"

// Coach data structure
interface Coach {
  id: string
  name: string
  title: string
  bio: string
  qualifications: string[]
  experience: string
  specialties: string[]
  ageGroups: string[]
  imageUrl?: string
  email?: string
  phone?: string
  achievements: string[]
  rating?: number
  reviewCount?: number
}

// Mock coach data
const coaches: Coach[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Head Coach & Football Director",
    bio: "FA qualified coach with over 10 years of experience developing young talent. Passionate about creating a positive learning environment where children can thrive both on and off the pitch.",
    qualifications: [
      "FA Level 3 UEFA B License",
      "FA Youth Module 1 & 2",
      "First Aid Certified",
      "Safeguarding Children Certified",
      "FA Level 1 Goalkeeping"
    ],
    experience: "10+ years coaching youth football",
    specialties: ["Football Development", "Tactical Awareness", "Goalkeeping", "Mental Resilience"],
    ageGroups: ["5-12 years", "13-16 years", "Adults"],
    imageUrl: "/coach-sarah-johnson-400x500-portrait-professional.png",
    email: "sarah.johnson@tssmultisports.com",
    phone: "+44-1234-567891",
    achievements: [
      "FA Charter Standard Award",
      "Regional Coach of the Year 2023",
      "Developed 50+ players to county level",
      "Established award-winning holiday camps"
    ],
    rating: 4.9,
    reviewCount: 45
  },
  {
    id: "2",
    name: "Emma Wilson",
    title: "Toddler Football Specialist",
    bio: "Specialist in early years football development with a background in child psychology. Creates engaging, age-appropriate activities that build confidence and fundamental movement skills.",
    qualifications: [
      "FA Level 2 Certificate",
      "Early Years Football Coaching",
      "Child Psychology Diploma",
      "Safeguarding Children Certified",
      "First Aid Certified"
    ],
    experience: "6 years specializing in toddler football",
    specialties: ["Early Development", "Parent Participation", "Coordination Skills", "Social Development"],
    ageGroups: ["3-5 years", "Parent & Toddler"],
    imageUrl: "/coach-emma-wilson-400x500-portrait-professional.png",
    email: "emma.wilson@tssmultisports.com",
    phone: "+44-1234-567892",
    achievements: [
      "Early Years Coaching Excellence Award",
      "Parent Participation Program Pioneer",
      "100% satisfaction rate from parents",
      "Developed unique toddler curriculum"
    ],
    rating: 4.8,
    reviewCount: 32
  },
  {
    id: "3",
    name: "John Davis",
    title: "Walking Football Coordinator",
    bio: "Passionate about promoting health and wellbeing through football for seniors. Creates inclusive, social environments where participants can enjoy the game at their own pace.",
    qualifications: [
      "FA Level 1 Certificate",
      "Walking Football Leadership",
      "Senior Fitness Certification",
      "First Aid Certified",
      "Safeguarding Adults Certified"
    ],
    experience: "8 years in senior football coaching",
    specialties: ["Low-Impact Exercise", "Social Connection", "Health Benefits", "Inclusive Coaching"],
    ageGroups: ["50+ years", "Senior Groups"],
    imageUrl: "/coach-john-davis-400x500-portrait-professional.png",
    email: "john.davis@tssmultisports.com",
    phone: "+44-1234-567893",
    achievements: [
      "Community Impact Award 2022",
      "Established largest walking football group in region",
      "Improved health outcomes for 200+ seniors",
      "Reduced social isolation in community"
    ],
    rating: 4.7,
    reviewCount: 28
  },
  {
    id: "4",
    name: "Michael Chen",
    title: "Multisports & Physical Education Coach",
    bio: "Versatile coach with expertise in multiple sports and physical education. Focuses on developing well-rounded athletes with strong fundamental movement skills.",
    qualifications: [
      "BA Physical Education",
      "FA Level 2 Certificate",
      "Multisports Coaching Diploma",
      "First Aid Certified",
      "Safeguarding Children Certified"
    ],
    experience: "7 years multisports coaching",
    specialties: ["Multisports Development", "Physical Literacy", "Athletic Fundamentals", "Game Sense Approach"],
    ageGroups: ["5-12 years", "Holiday Programs"],
    imageUrl: "/coach-james-wilson-400x500-portrait-professional.png",
    email: "michael.chen@tssmultisports.com",
    phone: "+44-1234-567894",
    achievements: [
      "Multisports Innovation Award",
      "Developed cross-sport curriculum",
      "Improved physical literacy in 500+ children",
      "Created successful holiday programs"
    ],
    rating: 4.6,
    reviewCount: 24
  },
  {
    id: "5",
    name: "Lisa Thompson",
    title: "Goalkeeping Specialist",
    bio: "Former professional goalkeeper turned specialist coach. Expert in developing shot-stoppers with technical excellence and mental toughness.",
    qualifications: [
      "FA Level 3 Goalkeeping License",
      "FA Level 2 Certificate",
      "Sports Psychology Certification",
      "First Aid Certified",
      "Safeguarding Children Certified"
    ],
    experience: "12 years goalkeeping coaching",
    specialties: ["Shot Stopping", "Distribution", "Command of Area", "Mental Toughness", "Footwork"],
    ageGroups: ["8-16 years", "Advanced Goalkeepers"],
    imageUrl: "/coach-lisa-williams-400x500-portrait-professional.png",
    email: "lisa.thompson@tssmultisports.com",
    phone: "+44-1234-567895",
    achievements: [
      "Goalkeeping Coach of the Year 2021",
      "Developed 15 professional goalkeepers",
      "Goalkeeping success rate 85%",
      "Specialized goalkeeper programs"
    ],
    rating: 4.9,
    reviewCount: 38
  },
  {
    id: "6",
    name: "David Martinez",
    title: "Football Development Coach",
    bio: "Technical coach focused on individual player development and tactical understanding. Uses modern coaching methods to maximize player potential.",
    qualifications: [
      "UEFA B License",
      "FA Level 3 Certificate",
      "Tactical Analysis Certification",
      "First Aid Certified",
      "Safeguarding Children Certified"
    ],
    experience: "9 years in player development",
    specialties: ["Technical Skills", "Tactical Awareness", "Game Intelligence", "Player Assessment"],
    ageGroups: ["10-16 years", "Advanced Development"],
    imageUrl: "/coach-anton-jacob-400x500-portrait-professional.png",
    email: "david.martinez@tssmultisports.com",
    phone: "+44-1234-567896",
    achievements: [
      "Player Development Excellence Award",
      "85% player progression rate",
      "Tactical innovation in youth coaching",
      "Scouting network connections"
    ],
    rating: 4.8,
    reviewCount: 31
  }
]

// Filter and sort functions
const filterCoaches = (coaches: Coach[], filters: {
  specialty?: string
  ageGroup?: string
  search?: string
}) => {
  return coaches.filter(coach => {
    if (filters.specialty && !coach.specialties.includes(filters.specialty)) return false
    if (filters.ageGroup && !coach.ageGroups.includes(filters.ageGroup)) return false
    if (filters.search && !coach.name.toLowerCase().includes(filters.search.toLowerCase()) && 
        !coach.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !coach.bio.toLowerCase().includes(filters.search.toLowerCase())) return false
    return true
  })
}

const sortCoaches = (coaches: Coach[], sortBy: 'name' | 'experience' | 'rating') => {
  return [...coaches].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'experience':
        const expA = parseInt(a.experience.match(/\d+/)?.[0] || '0')
        const expB = parseInt(b.experience.match(/\d+/)?.[0] || '0')
        return expB - expA
      case 'rating':
        return (b.rating || 0) - (a.rating || 0)
      default:
        return 0
    }
  })
}

// Coach card component
const CoachCard = ({ coach }: { coach: Coach }) => {
  const getSpecialtyIcon = (specialty: string) => {
    switch (specialty.toLowerCase()) {
      case 'football development': return '⚽'
      case 'goalkeeping': return '🧤'
      case 'early development': return '👶'
      case 'multisports development': return '🏃'
      case 'low-impact exercise': return '🚶'
      case 'tactical awareness': return '🧠'
      case 'mental resilience': return '💪'
      default: return '🎯'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={coach.imageUrl || "/coach-sarah-johnson-400x500-portrait-professional.png"}
              alt={coach.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{coach.name}</h3>
                <p className="text-primary font-medium">{coach.title}</p>
              </div>
              {coach.rating && (
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="font-medium text-foreground">{coach.rating}</span>
                  <span className="text-muted-foreground">({coach.reviewCount})</span>
                </div>
              )}
            </div>
            
            <p className="text-muted-foreground mb-4 line-clamp-3">{coach.bio}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {coach.specialties.slice(0, 3).map((specialty, index) => (
                <span key={index} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  <span>{getSpecialtyIcon(specialty)}</span>
                  {specialty}
                </span>
              ))}
              {coach.specialties.length > 3 && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                  +{coach.specialties.length - 3} more
                </span>
              )}
            </div>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{coach.experience}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Age Groups: {coach.ageGroups.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex gap-2">
            <Link href={`/coaches/${coach.id}`} className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors text-center">
              View Profile
            </Link>
            <button className="flex-1 border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors text-center">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CoachesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('')
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>('')
  const [sortBy, setSortBy] = useState<'name' | 'experience' | 'rating'>('rating');

  // Get unique filters
  const specialties = Array.from(new Set(coaches.flatMap(coach => coach.specialties)))
  const ageGroups = Array.from(new Set(coaches.flatMap(coach => coach.ageGroups)))

  // Filter and sort coaches
  const filteredCoaches = filterCoaches(coaches, {
    specialty: selectedSpecialty,
    ageGroup: selectedAgeGroup,
    search: searchTerm
  })

  const sortedCoaches = sortCoaches(filteredCoaches, sortBy)

  return (
    <>
      <SEO
        title="Our Coaches | TSS Multisports"
        description="Meet our team of qualified, experienced coaches dedicated to developing young talent and promoting sports participation. All coaches are FA qualified and DBS checked."
        keywords={[
          "football coaches",
          "sports coaches",
          "qualified coaches",
          "FA coaches",
          "youth coaching",
          "football coaching",
          "sports coaching for kids",
          "coach profiles",
          "DBS checked coaches",
          "football training",
          "multisports coaching",
          "toddler football coaches",
          "walking football coaches",
          "sports development"
        ]}
        ogTitle="Our Coaches | TSS Multisports"
        ogDescription="Meet our team of qualified, experienced coaches dedicated to developing young talent and promoting sports participation."
        ogImage="/coaches-hero-1920x800-coaching-team.png"
        canonicalUrl="/coaches"
        publishedTime="2025-09-20T00:00:00+00:00"
        modifiedTime="2025-09-20T00:00:00+00:00"
        additionalMetaTags={{
          "page-type": "coaches",
          "total-coaches": coaches.length.toString(),
          "coaching-philosophy": "player development, safety, enjoyment",
          "qualifications": "FA qualified, DBS checked, first aid certified"
        }}
        faqs={[
          {
            questionName: "Are all your coaches qualified?",
            acceptedAnswerText: "Yes, all our coaches are FA qualified with appropriate certifications for their age groups and specialties. They are also DBS checked and trained in first aid and safeguarding."
          },
          {
            questionName: "What age groups do your coaches specialize in?",
            acceptedAnswerText: "Our coaches specialize in various age groups including toddler football (3-5 years), after school football (5-12 years), walking football (50+ years), and advanced development programs."
          },
          {
            questionName: "How do I contact a specific coach?",
            acceptedAnswerText: "You can contact any coach directly through their profile page or by emailing them using the contact information provided. We also have a general contact form for general inquiries."
          },
          {
            questionName: "What coaching qualifications do your coaches hold?",
            acceptedAnswerText: "Our coaches hold various FA qualifications including Level 1, 2, and 3 certificates, UEFA B licenses, specialized modules for different age groups, and additional certifications in sports psychology and first aid."
          }
        ]}
        reviews={{
          reviews: [
            {
              author: "Sarah Johnson",
              datePublished: "2025-09-15",
              reviewRating: { ratingValue: 5 },
              reviewBody: "The coaching team at TSS Multisports is exceptional. My son has improved dramatically under their guidance, and the coaches are fantastic with children.",
              itemReviewed: "Coaching Program"
            },
            {
              author: "Mike Thompson",
              datePublished: "2025-09-10",
              reviewRating: { ratingValue: 4 },
              reviewBody: "Professional, qualified, and genuinely care about the children's development. Each coach brings their own expertise to the program.",
              itemReviewed: "Coaching Program"
            }
          ],
          aggregateRating: {
            ratingValue: 4.7,
            reviewCount: 2
          }
        }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/10 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
              
              <AnimatedText
                text="Meet Our Coaching Team"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              />
              
              <AnimatedComponent
                animation="fadeIn"
                delay={0.3}
                className="text-xl text-muted-foreground mb-8"
              >
                Qualified, experienced, and passionate coaches dedicated to developing young talent and promoting sports participation
              </AnimatedComponent>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#register" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Register Interest
                </Link>
                <Link href="#contact" className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="container mx-auto px-4 mt-12">
            <div className="max-w-4xl mx-auto">
              <img
                src="/coaches-hero-1920x800-coaching-team.png"
                alt="Professional Coaching Team"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Coaching Philosophy Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Coaching Philosophy</h2>
              <p className="text-lg text-muted-foreground mb-12">
                We believe in developing well-rounded athletes through positive coaching, technical excellence, and a love for the game.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedComponent animation="slideUp" delay={0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Safety First</h3>
                  <p className="text-muted-foreground">
                    All coaches are DBS checked, first aid certified, and trained in safeguarding to ensure a safe environment
                  </p>
                </div>
              </AnimatedComponent>

              <AnimatedComponent animation="slideUp" delay={0.2}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    FA qualified coaches with continuous professional development to maintain high coaching standards
                  </p>
                </div>
              </AnimatedComponent>

              <AnimatedComponent animation="slideUp" delay={0.3}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Player Development</h3>
                  <p className="text-muted-foreground">
                    Focus on individual growth, technical skills, and tactical awareness appropriate to each age group
                  </p>
                </div>
              </AnimatedComponent>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-muted border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search coaches..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                >
                  <option value="">All Specialties</option>
                  {specialties.map(specialty => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>

                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={selectedAgeGroup}
                  onChange={(e) => setSelectedAgeGroup(e.target.value)}
                >
                  <option value="">All Age Groups</option>
                  {ageGroups.map(ageGroup => (
                    <option key={ageGroup} value={ageGroup}>
                      {ageGroup}
                    </option>
                  ))}
                </select>

                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'experience' | 'rating')}
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="name">Sort by Name</option>
                  <option value="experience">Sort by Experience</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Coaches Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Coaching Team
                </h2>
                <p className="text-lg text-muted-foreground">
                  {sortedCoaches.length} coaches found
                </p>
              </div>

              {sortedCoaches.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">👨‍🏫</div>
                  <h3 className="text-xl font-semibold mb-2">No coaches found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your filters to see more coaches.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sortedCoaches.map((coach) => (
                    <AnimatedComponent key={coach.id} animation="slideUp" delay={0.1}>
                      <CoachCard coach={coach} />
                    </AnimatedComponent>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Questions About Our Coaches?</h2>
              <p className="text-lg mb-8 opacity-90">
                Get in touch with our coaching team to learn more about our programs and coaching philosophy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Contact Coaching Team
                </Link>
                <Link href="/register" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors">
                  Register Interest
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}