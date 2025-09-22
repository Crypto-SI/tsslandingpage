import Link from "next/link"
import { ArrowLeft, Baby, Users, Award, Star } from "lucide-react"
import AnimatedText from "@/components/ui/animated-text"
import AnimatedComponent from "@/components/ui/animated-component"
import VideoGallery from "@/components/ui/video-gallery"
import ImageGallery from "@/components/ui/image-gallery"
import PricingTable from "@/components/ui/pricing-table"
import ScheduleDisplay from "@/components/ui/schedule-display"
import RegistrationForm from "@/components/ui/registration-form"
import SEO from "@/components/seo/seo"

const videos = [
  {
    id: "1",
    title: "Toddler Football Fun Session",
    description: "Watch our little ones enjoy their first football experience with age-appropriate activities and games.",
    thumbnail: "/placeholder-image",
    duration: "3:20"
  },
  {
    id: "2", 
    title: "Parent & Toddler Activities",
    description: "See how parents participate in helping their children develop coordination and social skills through football.",
    thumbnail: "/placeholder-image",
    duration: "2:50"
  },
  {
    id: "3",
    title: "Early Development Benefits",
    description: "Learn about the physical and cognitive benefits of early football participation for toddlers.",
    thumbnail: "/placeholder-image",
    duration: "4:10"
  }
]

const images = [
  {
    id: "1",
    alt: "Toddlers playing with footballs",
    caption: "Fun introduction to football fundamentals",
    category: "Fun"
  },
  {
    id: "2",
    alt: "Parent helping child with football drill",
    caption: "Parent participation builds confidence and bonding",
    category: "Parenting"
  },
  {
    id: "3",
    alt: "Group of toddlers playing games",
    caption: "Developing social skills through play",
    category: "Social"
  },
  {
    id: "4",
    alt: "Toddler celebrating a goal",
    caption: "Building confidence and achievement",
    category: "Achievement"
  },
  {
    id: "5",
    alt: "Coaching toddlers with colorful equipment",
    caption: "Age-appropriate coaching methods",
    category: "Coaching"
  },
  {
    id: "6",
    alt: "Happy toddlers with certificates",
    caption: "Celebrating participation and progress",
    category: "Celebration"
  }
]

const pricingTiers = [
  {
    name: "Single Session",
    price: "£15",
    period: "session",
    description: "Perfect for trying toddler football",
    features: [
      "✓ One parent & toddler session",
      "✓ All equipment provided",
      "✓ Professional coaching",
      "✓ Certificate of attendance",
      "✓ Refreshments included"
    ],
    cta: "Try a Session",
    featured: false
  },
  {
    name: "Monthly Package",
    price: "£55",
    period: "month",
    description: "Great for regular development",
    features: [
      "✓ 4 sessions per month",
      "✓ Priority booking",
      "✓ Free toddler football",
      "✓ Progress reports",
      "✓ Parent workshops",
      "✓ Sibling discount"
    ],
    cta: "Monthly Package",
    featured: true
  },
  {
    name: "Term Package",
    price: "£160",
    period: "term",
    description: "Complete term commitment",
    features: [
      "✓ 12 sessions per term",
      "✓ Guaranteed spot",
      "✓ Full toddler kit",
      "✓ End-of-term report",
      "✓ Photo album",
      "✓ Family fun day",
      "✓ 15% sibling discount"
    ],
    cta: "Enroll for Term",
    featured: false
  }
]

const schedule = [
  {
    day: "Monday",
    time: "9:30 AM - 10:30 AM",
    location: "Indoor Hall",
    duration: "1 hour",
    notes: "Ages 3-4"
  },
  {
    day: "Tuesday", 
    time: "10:00 AM - 11:00 AM",
    location: "Indoor Hall",
    duration: "1 hour",
    notes: "Ages 4-5"
  },
  {
    day: "Wednesday",
    time: "9:30 AM - 10:30 AM", 
    location: "Outdoor Pitch",
    duration: "1 hour",
    notes: "Ages 3-4 (weather permitting)"
  },
  {
    day: "Thursday",
    time: "10:00 AM - 11:00 AM",
    location: "Outdoor Pitch", 
    duration: "1 hour",
    notes: "Ages 4-5 (weather permitting)"
  },
  {
    day: "Friday",
    time: "9:30 AM - 10:30 AM",
    location: "Indoor Hall",
    duration: "1 hour", 
    notes: "Mixed ages 3-5"
  },
  {
    day: "Saturday",
    time: "9:00 AM - 10:00 AM",
    location: "Outdoor Pitch",
    duration: "1 hour",
    notes: "Family session"
  }
]

export default function ToddlerFootballPage() {
  return (
    <>
      <SEO
        title="Football for Toddlers | Ages 3-5"
        description="Fun introduction to football fundamentals with age-appropriate activities for toddlers aged 3-5. Parent participation sessions available."
        keywords={[
          "football for toddlers",
          "toddler football classes",
          "kids football lessons",
          "football for 3 year olds",
          "football for 4 year olds",
          "football for 5 year olds",
          "parent and toddler football",
          "early football development",
          "toddler sports activities",
          "children's football introduction",
          "baby football classes",
          "toddler soccer",
          "kids sports programs",
          "early childhood football"
        ]}
        ogTitle="Football for Toddlers | Ages 3-5"
        ogDescription="Fun introduction to football fundamentals with age-appropriate activities for toddlers aged 3-5."
        ogImage="/images/toddler-football.jpg"
        canonicalUrl="/toddler-football"
        publishedTime="2025-09-20T00:00:00+00:00"
        modifiedTime="2025-09-20T00:00:00+00:00"
        additionalMetaTags={{
          "program-type": "toddler football",
          "age-group": "3-5 years",
          "duration": "1 hour per session",
          "frequency": "Monday - Saturday",
          "price-range": "£15-£160",
          "parent-participation": "required",
          "equipment": "provided",
          "qualification": "FA qualified coaches"
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
              text="Football for Toddlers"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            />
            
            <AnimatedComponent 
              animation="fadeIn" 
              delay={0.3}
              className="text-xl text-muted-foreground mb-8"
            >
              Fun introduction to football fundamentals with age-appropriate activities for ages 3-5
            </AnimatedComponent>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#register">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Register Now
                </button>
              </Link>
              <Link href="#pricing">
                <button className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors">
                  View Pricing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Toddler Football?</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our toddler football program introduces children to the beautiful game in a fun, safe environment that focuses on coordination, social skills, and confidence building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedComponent animation="slideUp" delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Age-Appropriate</h3>
                <p className="text-muted-foreground">
                  Specially designed activities that match developmental stages and attention spans
                </p>
              </div>
            </AnimatedComponent>

            <AnimatedComponent animation="slideUp" delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Parent Participation</h3>
                <p className="text-muted-foreground">
                  Parents actively participate, strengthening bonds and supporting development
                </p>
              </div>
            </AnimatedComponent>

            <AnimatedComponent animation="slideUp" delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
                <p className="text-muted-foreground">
                  Builds coordination, social skills, and confidence through fun activities
                </p>
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <VideoGallery videos={videos} title="Toddler Football Videos" />

      {/* Image Gallery */}
      <ImageGallery images={images} title="Toddler Football Gallery" />

      {/* Pricing */}
      <PricingTable 
        tiers={pricingTiers}
        title="Toddler Football Pricing"
        description="Flexible packages for your little football star"
      />

      {/* Schedule */}
      <ScheduleDisplay 
        schedule={schedule}
        title="Toddler Football Schedule"
        subtitle="Fun sessions available Monday - Saturday"
      />

      {/* Registration Form */}
      <RegistrationForm 
        programName="Football for Toddlers"
        programDescription="Register your child for a fun introduction to football fundamentals with parent participation"
      />
    </main>
  </>
)
}