"use client"

import Link from "next/link"
import { ArrowLeft, Award, Calendar, Clock, MapPin, Mail, Phone, Star, Shield, Trophy, Users, GraduationCap } from "lucide-react"
import AnimatedText from "@/components/ui/animated-text"
import AnimatedComponent from "@/components/ui/animated-component"
import SEO from "@/components/seo/seo"

// Coach data structure (same as main coaches page)
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

// Mock coach data (same as main coaches page)
const coaches: Coach[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Head Coach & Football Director",
    bio: "FA qualified coach with over 10 years of experience developing young talent. Passionate about creating a positive learning environment where children can thrive both on and off the pitch. Sarah brings a wealth of experience from both professional and grassroots football, ensuring every player receives the best possible coaching tailored to their individual needs and aspirations.",
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
    imageUrl: "/placeholder-image",
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
    bio: "Specialist in early years football development with a background in child psychology. Creates engaging, age-appropriate activities that build confidence and fundamental movement skills. Emma's approach focuses on making football fun while developing essential physical and social skills that children will use throughout their lives.",
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
    imageUrl: "/placeholder-image",
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
    bio: "Passionate about promoting health and wellbeing through football for seniors. Creates inclusive, social environments where participants can enjoy the game at their own pace. John believes that football is for everyone and has dedicated his career to making the sport accessible and enjoyable for older adults.",
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
    imageUrl: "/placeholder-image",
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
    bio: "Versatile coach with expertise in multiple sports and physical education. Focuses on developing well-rounded athletes with strong fundamental movement skills. Michael's multisports approach helps children discover their athletic potential while developing a lifelong love for physical activity.",
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
    imageUrl: "/placeholder-image",
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
    bio: "Former professional goalkeeper turned specialist coach. Expert in developing shot-stoppers with technical excellence and mental toughness. Lisa brings first-hand experience from professional football and uses her expertise to help goalkeepers develop the skills, confidence, and mindset needed to excel between the posts.",
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
    imageUrl: "/placeholder-image",
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
    bio: "Technical coach focused on individual player development and tactical understanding. Uses modern coaching methods to maximize player potential. David's analytical approach helps players understand not just what to do, but why they're doing it, developing intelligent footballers who can make decisions in game situations.",
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
    imageUrl: "/placeholder-image",
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

interface CoachPageProps {
  params: {
    id: string
  }
}

export default function CoachPage({ params }: CoachPageProps) {
  const coach = coaches.find(c => c.id === params.id)

  if (!coach) {
    return (
      <>
        <SEO
          title="Coach Not Found | TSS Multisports"
          description="The requested coach profile could not be found."
        />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Coach Not Found</h1>
            <Link href="/coaches" className="text-primary hover:underline">
              Back to Coaches
            </Link>
          </div>
        </main>
      </>
    )
  }

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
    <>
      <SEO
        title={`${coach.name} | ${coach.title} | TSS Multisports`}
        description={`${coach.name} - ${coach.title}. ${coach.bio.substring(0, 160)}... Learn more about qualifications, experience, and coaching philosophy.`}
        keywords={[
          `${coach.name} coach`,
          `${coach.title}`,
          "football coach",
          "sports coach",
          "qualified coach",
          "FA coach",
          "youth coaching",
          `${coach.specialties.join(', ')}`,
          "coach profile",
          "DBS checked coach"
        ]}
        ogTitle={`${coach.name} | ${coach.title}`}
        ogDescription={coach.bio.substring(0, 160)}
        ogImage="/images/coach-profile-og.jpg"
        canonicalUrl={`/coaches/${coach.id}`}
        publishedTime="2025-09-20T00:00:00+00:00"
        modifiedTime="2025-09-20T00:00:00+00:00"
        additionalMetaTags={{
          "coach-name": coach.name,
          "coach-title": coach.title,
          "coach-specialties": coach.specialties.join(', '),
          "qualifications": coach.qualifications.join(', ')
        }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/10 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Link href="/coaches" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
                <ArrowLeft className="h-4 w-4" />
                Back to Coaches
              </Link>
              
              <AnimatedText
                text={coach.name}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              />
              
              <AnimatedComponent 
                animation="fadeIn" 
                delay={0.3}
                className="text-xl text-primary font-medium mb-8"
              >
                {coach.title}
              </AnimatedComponent>

              {coach.rating && (
                <div className="flex items-center justify-center gap-1 mb-8">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-lg font-medium">{coach.rating}</span>
                  <span className="text-muted-foreground">({coach.reviewCount} reviews)</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Coach Profile Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Coach Info */}
                <div className="lg:col-span-2">
                  <AnimatedComponent animation="slideUp" delay={0.1}>
                    <div className="bg-background rounded-lg shadow-md p-8 border">
                      <h2 className="text-2xl font-bold mb-6 text-foreground">About {coach.name}</h2>
                      
                      <div className="prose prose-lg max-w-none mb-8">
                        <p className="text-muted-foreground leading-relaxed">
                          {coach.bio}
                        </p>
                      </div>

                      {/* Specialties */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Coaching Specialties</h3>
                        <div className="flex flex-wrap gap-3">
                          {coach.specialties.map((specialty, index) => (
                            <span key={index} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary">
                              <span className="text-lg">{getSpecialtyIcon(specialty)}</span>
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Age Groups */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Age Groups</h3>
                        <div className="flex flex-wrap gap-2">
                          {coach.ageGroups.map((ageGroup, index) => (
                            <span key={index} className="px-3 py-1 rounded-full text-sm font-medium bg-muted text-muted-foreground">
                              {ageGroup}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Experience */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Experience</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-5 w-5" />
                          <span>{coach.experience}</span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                        <ul className="space-y-2">
                          {coach.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Trophy className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AnimatedComponent>
                </div>

                {/* Coach Sidebar */}
                <div className="lg:col-span-1">
                  <AnimatedComponent animation="slideUp" delay={0.2}>
                    <div className="bg-background rounded-lg shadow-md p-6 sticky top-6 border">
                      {/* Contact Info */}
                      <div className="text-center mb-6">
                        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="h-12 w-12 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{coach.name}</h3>
                        <p className="text-primary font-medium mb-4">{coach.title}</p>
                        
                        <div className="space-y-3">
                          {coach.email && (
                            <a href={`mailto:${coach.email}`} className="flex items-center justify-center gap-2 text-primary hover:text-primary/80">
                              <Mail className="h-4 w-4" />
                              <span className="text-sm">{coach.email}</span>
                            </a>
                          )}
                          {coach.phone && (
                            <a href={`tel:${coach.phone}`} className="flex items-center justify-center gap-2 text-primary hover:text-primary/80">
                              <Phone className="h-4 w-4" />
                              <span className="text-sm">{coach.phone}</span>
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="border-t pt-6 mb-6">
                        <h4 className="font-semibold mb-4">Quick Stats</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Experience</span>
                            <span className="font-medium">{coach.experience}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Specialties</span>
                            <span className="font-medium">{coach.specialties.length}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Age Groups</span>
                            <span className="font-medium">{coach.ageGroups.length}</span>
                          </div>
                          {coach.rating && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Rating</span>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                <span className="font-medium">{coach.rating}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Qualifications */}
                      <div className="border-t pt-6">
                        <h4 className="font-semibold mb-4">Key Qualifications</h4>
                        <div className="space-y-2">
                          {coach.qualifications.slice(0, 3).map((qualification, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <GraduationCap className="h-4 w-4 text-primary" />
                              <span className="text-sm text-muted-foreground">{qualification}</span>
                            </div>
                          ))}
                          {coach.qualifications.length > 3 && (
                            <div className="text-sm text-muted-foreground">
                              +{coach.qualifications.length - 3} more qualifications
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Safety & Quality */}
                      <div className="border-t pt-6 mt-6">
                        <div className="flex items-center gap-2 text-green-600 text-sm">
                          <Shield className="h-4 w-4" />
                          <span>DBS Checked & First Aid Certified</span>
                        </div>
                      </div>
                    </div>
                  </AnimatedComponent>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With {coach.name}?</h2>
              <p className="text-lg mb-8 opacity-90">
                Get in touch with {coach.name} to discuss coaching programs, player development, or any questions you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`mailto:${coach.email}`} className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Email {coach.name}
                </a>
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