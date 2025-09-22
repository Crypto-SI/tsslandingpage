import Link from "next/link"
import { ArrowLeft, Clock, Users, Award, Star } from "lucide-react"
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
    title: "After School Football Skills Session",
    description: "Watch our expert coaches work with children on fundamental football skills including dribbling, passing, and shooting techniques.",
    thumbnail: "/placeholder-image",
    duration: "3:45"
  },
  {
    id: "2", 
    title: "Team Match Play",
    description: "Exciting small-sided matches where children apply their skills in a fun, competitive environment.",
    thumbnail: "/placeholder-image",
    duration: "4:20"
  },
  {
    id: "3",
    title: "Coaching Philosophy",
    description: "Learn about our approach to youth football development and how we create a positive learning environment.",
    thumbnail: "/placeholder-image",
    duration: "2:30"
  }
]

const images = [
  {
    id: "1",
    alt: "Children practicing football drills",
    caption: "Skill development session with professional coaching",
    category: "Training"
  },
  {
    id: "2",
    alt: "Small-sided football match",
    caption: "Fun competitive match play",
    category: "Matches"
  },
  {
    id: "3",
    alt: "Team huddle after session",
    caption: "Building teamwork and sportsmanship",
    category: "Team Building"
  },
  {
    id: "4",
    alt: "Award ceremony",
    caption: "Celebrating achievements and progress",
    category: "Awards"
  },
  {
    id: "5",
    alt: "Professional coaching session",
    caption: "Expert guidance from qualified coaches",
    category: "Coaching"
  },
  {
    id: "6",
    alt: "Children having fun with football",
    caption: "Enjoying the beautiful game",
    category: "Fun"
  }
]

const pricingTiers = [
  {
    name: "Pay As You Go",
    price: "£12",
    period: "session",
    description: "Flexible booking for occasional attendance",
    features: [
      "✓ Individual session booking",
      "✓ All equipment provided",
      "✓ Professional coaching",
      "✓ Certificate of attendance",
      "✓ Access to all facilities"
    ],
    cta: "Book a Session",
    featured: false
  },
  {
    name: "Monthly Package",
    price: "£95",
    period: "month",
    description: "Best value for regular attendance",
    features: [
      "✓ 8 sessions per month",
      "✓ Priority booking",
      "✓ Free football kit",
      "✓ Progress tracking",
      "✓ Parent app access",
      "✓ Discount on additional sessions"
    ],
    cta: "Sign Up Monthly",
    featured: true
  },
  {
    name: "Term Package",
    price: "£280",
    period: "term",
    description: "Complete term commitment with best rates",
    features: [
      "✓ 24 sessions per term",
      "✓ Guaranteed spot",
      "✓ Full football kit",
      "✓ End-of-term report",
      "✓ Tournament entry",
      "✓ 10% sibling discount",
      "✓ Free parent workshops"
    ],
    cta: "Enroll for Term",
    featured: false
  }
]

const schedule = [
  {
    day: "Monday",
    time: "4:00 PM - 5:30 PM",
    location: "Main Pitch",
    duration: "1.5 hours",
    notes: "Ages 5-7"
  },
  {
    day: "Tuesday", 
    time: "4:00 PM - 5:30 PM",
    location: "Main Pitch",
    duration: "1.5 hours",
    notes: "Ages 8-10"
  },
  {
    day: "Wednesday",
    time: "4:00 PM - 5:30 PM", 
    location: "Main Pitch",
    duration: "1.5 hours",
    notes: "Ages 11-12"
  },
  {
    day: "Thursday",
    time: "4:00 PM - 5:30 PM",
    location: "Main Pitch", 
    duration: "1.5 hours",
    notes: "Advanced skills group"
  },
  {
    day: "Friday",
    time: "4:00 PM - 5:30 PM",
    location: "Main Pitch",
    duration: "1.5 hours", 
    notes: "Mixed age group"
  }
]

export default function AfterSchoolFootballPage() {
  return (
    <>
      <SEO
        title="After School Football Coaching | Ages 5-12"
        description="Expert after school football coaching for children aged 5-12. Professional coaching in a fun, structured environment focusing on skill development and teamwork."
        keywords={[
          "after school football",
          "football coaching for kids",
          "youth football training",
          "children's football",
          "after school sports",
          "football skills development",
          "kids football academy",
          "youth soccer coaching",
          "children's sports programs",
          "after school activities",
          "football for children",
          "youth football academy",
          "football coaching near me",
          "kids football classes"
        ]}
        ogTitle="After School Football Coaching | Ages 5-12"
        ogDescription="Expert after school football coaching for children aged 5-12. Professional coaching in a fun, structured environment."
        ogImage="/images/after-school-football.jpg"
        canonicalUrl="/after-school-football"
        publishedTime="2025-09-20T00:00:00+00:00"
        modifiedTime="2025-09-20T00:00:00+00:00"
        additionalMetaTags={{
          "program-type": "after school football",
          "age-group": "5-12 years",
          "duration": "1.5 hours per session",
          "frequency": "Monday - Friday",
          "price-range": "£12-£280",
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
              text="After School Football Clubs"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            />
            
            <AnimatedComponent 
              animation="fadeIn" 
              delay={0.3}
              className="text-xl text-muted-foreground mb-8"
            >
              Expert coaching for ages 5-12 in a fun, structured environment focusing on skill development and teamwork
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our After School Football?</h2>
            <p className="text-lg text-muted-foreground mb-12">
              We provide professional coaching in a safe, fun environment where children can develop their football skills while building confidence and teamwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedComponent animation="slideUp" delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Coaching</h3>
                <p className="text-muted-foreground">
                  Qualified coaches with years of experience working with children of all skill levels
                </p>
              </div>
            </AnimatedComponent>

            <AnimatedComponent animation="slideUp" delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Flexible Schedule</h3>
                <p className="text-muted-foreground">
                  Multiple sessions available throughout the week to fit your busy schedule
                </p>
              </div>
            </AnimatedComponent>

            <AnimatedComponent animation="slideUp" delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Progress Tracking</h3>
                <p className="text-muted-foreground">
                  Regular assessments and feedback to help children track their development
                </p>
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <VideoGallery videos={videos} title="Program Videos" />

      {/* Image Gallery */}
      <ImageGallery images={images} title="Program Gallery" />

      {/* Pricing */}
      <PricingTable 
        tiers={pricingTiers}
        title="After School Football Pricing"
        description="Choose the perfect plan for your child's football journey"
      />

      {/* Schedule */}
      <ScheduleDisplay 
        schedule={schedule}
        title="After School Football Schedule"
        subtitle="Available sessions Monday - Friday"
      />

      {/* Registration Form */}
      <RegistrationForm 
        programName="After School Football"
        programDescription="Register your child for expert football coaching in a fun, supportive environment"
      />
    </main>
  </>
)
}