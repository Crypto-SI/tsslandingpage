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
    thumbnail: "/toddler-video-thumbnail-400x300-introduction.png",
    duration: "3:20"
  },
  {
    id: "2", 
    title: "Parent & Toddler Activities",
    description: "See how parents participate in helping their children develop coordination and social skills through football.",
    thumbnail: "/toddler-video-thumbnail-400x300-fun-activities.png",
    duration: "2:50"
  },
  {
    id: "3",
    title: "Early Development Benefits",
    description: "Learn about the physical and cognitive benefits of early football participation for toddlers.",
    thumbnail: "/toddler-video-thumbnail-400x300-parent-participation.png",
    duration: "4:10"
  }
]

const images = [
  {
    id: "1",
    alt: "Toddlers playing with footballs",
    caption: "Fun introduction to football fundamentals",
    category: "Fun",
    src: "/toddler-development-coordination-600x400-motor-skills.png"
  },
  {
    id: "2",
    alt: "Parent helping child with football drill",
    caption: "Parent participation builds confidence and bonding",
    category: "Parenting",
    src: "/toddler-development-coordination-600x400-motor-skills.png"
  },
  {
    id: "3",
    alt: "Group of toddlers playing games",
    caption: "Developing social skills through play",
    category: "Social",
    src: "/toddler-development-coordination-600x400-motor-skills.png"
  },
  {
    id: "4",
    alt: "Toddler celebrating a goal",
    caption: "Building confidence and achievement",
    category: "Achievement",
    src: "/toddler-development-coordination-600x400-motor-skills.png"
  },
  {
    id: "5",
    alt: "Coaching toddlers with colorful equipment",
    caption: "Age-appropriate coaching methods",
    category: "Coaching",
    src: "/toddler-development-coordination-600x400-motor-skills.png"
  },
  {
    id: "6",
    alt: "Happy toddlers with certificates",
    caption: "Celebrating participation and progress",
    category: "Celebration",
    src: "/toddler-development-coordination-600x400-motor-skills.png"
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
        ogImage="/toddler-hero-1920x800-parent-child-football.png"
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
        events={[
          {
            name: "Parent & Toddler Football Session",
            description: "Fun football activities for toddlers aged 3-5 with parent participation",
            startDate: "2025-09-23T09:30:00+00:00",
            endDate: "2025-09-23T10:30:00+00:00",
            location: "Indoor Hall, Sportsville",
            organizer: "TSS Multisports",
            eventType: "Event",
            duration: "PT1H"
          }
        ]}
        courses={[
          {
            name: "Toddler Football Development Program",
            description: "Early introduction to football fundamentals for children aged 3-5",
            provider: "TSS Multisports",
            educationalLevel: "Beginner",
            courseMode: "PhysicalActivity",
            duration: "PT1H",
            offers: [
              {
                price: "15",
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock"
              },
              {
                price: "160",
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock"
              }
            ],
            audience: "Children aged 3-5 with parent participation"
          }
        ]}
        faqs={[
          {
            questionName: "What age range is toddler football suitable for?",
            acceptedAnswerText: "Our toddler football program is designed specifically for children aged 3-5 years. Parent participation is required as this helps children feel secure and learn from their role models."
          },
          {
            questionName: "What should my child wear to toddler football?",
            acceptedAnswerText: "Children should wear comfortable clothing that allows them to move freely. We recommend tracksuit bottoms or shorts and a t-shirt. All football equipment is provided, but children should wear indoor trainers."
          },
          {
            questionName: "Do parents need to participate?",
            acceptedAnswerText: "Yes, parent participation is a key part of our toddler football program. We encourage parents to join in the activities as it helps children build confidence and strengthens the parent-child bond through shared experiences."
          }
        ]}
        reviews={{
          reviews: [
            {
              author: "Emma Wilson",
              datePublished: "2025-09-12",
              reviewRating: { ratingValue: 5 },
              reviewBody: "My 4-year-old absolutely loves the toddler football sessions! The coaches are so patient and make it really fun for both kids and parents.",
              itemReviewed: "Toddler Football Program"
            },
            {
              author: "David Chen",
              datePublished: "2025-09-08",
              reviewRating: { ratingValue: 4 },
              reviewBody: "Great program for introducing young children to football. My son has really improved his coordination and social skills.",
              itemReviewed: "Toddler Football Program"
            }
          ],
          aggregateRating: {
            ratingValue: 4.5,
            reviewCount: 2
          }
        }}
        eatData={{
          name: "TSS Multisports",
          description: "Professional football coaching and multisports programs for children and seniors in Sportsville, UK",
          url: "https://tssmultisports.com",
          logo: "/toddler-hero-1920x800-parent-child-football.png",
          image: "/toddler-hero-1920x800-parent-child-football.png",
          address: {
            streetAddress: "123 Sports Avenue",
            addressLocality: "Sportsville",
            addressRegion: "UK",
            postalCode: "12345",
            addressCountry: "GB"
          },
          contactPoint: {
            telephone: "+44-1234-567890",
            contactType: "customer service",
            email: "info@tssmultisports.com"
          },
          sameAs: [
            "https://facebook.com/tssmultisports",
            "https://instagram.com/tssmultisports",
            "https://twitter.com/tssmultisports"
          ],
          foundingDate: "2020-01-01",
          numberOfEmployees: "10-50",
          priceRange: "££",
          openingHours: [
            {
              dayOfWeek: "Monday",
              opens: "09:00",
              closes: "20:00"
            },
            {
              dayOfWeek: "Tuesday",
              opens: "09:00",
              closes: "20:00"
            },
            {
              dayOfWeek: "Wednesday",
              opens: "09:00",
              closes: "20:00"
            },
            {
              dayOfWeek: "Thursday",
              opens: "09:00",
              closes: "20:00"
            },
            {
              dayOfWeek: "Friday",
              opens: "09:00",
              closes: "20:00"
            },
            {
              dayOfWeek: "Saturday",
              opens: "08:00",
              closes: "18:00"
            },
            {
              dayOfWeek: "Sunday",
              opens: "10:00",
              closes: "16:00"
            }
          ]
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
                  Coming Soon
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
        
        {/* Hero Image */}
        <div className="container mx-auto px-4 mt-12">
          <div className="max-w-4xl mx-auto">
            <img
              src="/toddler-hero-1920x800-parent-child-football.png"
              alt="Parent and Child Football Session"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
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
