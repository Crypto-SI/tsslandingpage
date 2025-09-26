import Link from "next/link"
import { ArrowLeft, Heart, Users, Award, Star } from "lucide-react"
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
    title: "Walking Football Introduction",
    description: "Learn about the benefits and rules of walking football, a perfect low-impact sport for active seniors.",
    thumbnail: "/walking-video-thumbnail-400x300-introduction.png",
    duration: "4:15"
  },
  {
    id: "2", 
    title: "Walking Football Session",
    description: "Join our friendly walking football session and see the fun social atmosphere in action.",
    thumbnail: "/walking-video-thumbnail-400x300-health-benefits.png",
    duration: "3:30"
  },
  {
    id: "3",
    title: "Health Benefits",
    description: "Hear from participants about the physical and mental health benefits of regular walking football.",
    thumbnail: "/walking-video-thumbnail-400x300-social-connection.png",
    duration: "2:45"
  }
]

const images = [
  {
    id: "1",
    alt: "Group of seniors playing walking football",
    caption: "Friendly walking football match with emphasis on fun and fitness",
    category: "Matches",
    src: "/walking-benefit-social-600x400-seniors-group.png"
  },
  {
    id: "2",
    alt: "Participants socializing after game",
    caption: "Building friendships and community connections",
    category: "Social",
    src: "/walking-benefit-social-600x400-seniors-group.png"
  },
  {
    id: "3",
    alt: "Walking football coaching session",
    caption: "Professional guidance for safe and enjoyable play",
    category: "Coaching",
    src: "/walking-benefit-social-600x400-seniors-group.png"
  },
  {
    id: "4",
    alt: "Team celebrating a goal",
    caption: "Celebrating achievements in a supportive environment",
    category: "Fun",
    src: "/walking-benefit-social-600x400-seniors-group.png"
  },
  {
    id: "5",
    alt: "Walking football equipment",
    caption: "Specialized equipment for safe play",
    category: "Equipment",
    src: "/walking-benefit-social-600x400-seniors-group.png"
  },
  {
    id: "6",
    alt: "Group photo of participants",
    caption: "Our walking football community",
    category: "Community",
    src: "/walking-benefit-social-600x400-seniors-group.png"
  }
]

const pricingTiers = [
  {
    name: "Casual Drop-in",
    price: "£8",
    period: "session",
    description: "Perfect for trying walking football",
    features: [
      "✓ Single session access",
      "✓ All equipment provided",
      "✓ Professional coaching",
      "✓ Tea and coffee included",
      "✓ Social activities"
    ],
    cta: "Drop In",
    featured: false
  },
  {
    name: "Monthly Membership",
    price: "£25",
    period: "month",
    description: "Great value for regular players",
    features: [
      "✓ Unlimited sessions",
      "✓ Priority booking",
      "✓ Free refreshments",
      "✓ Social events access",
      "✓ Health tracking",
      "✓ Equipment discount"
    ],
    cta: "Join Monthly",
    featured: true
  },
  {
    name: "Annual Membership",
    price: "£250",
    period: "year",
    description: "Best value for committed players",
    features: [
      "✓ Full year access",
      "✓ Guaranteed spot",
      "✓ Free walking football kit",
      "✓ Annual health assessment",
      "✓ Tournament entry",
      "✓ 10% friend discount",
      "✓ Free workshops"
    ],
    cta: "Join Annual",
    featured: false
  }
]

const schedule = [
  {
    day: "Monday",
    time: "10:00 AM - 11:30 AM",
    location: "Indoor Pitch",
    duration: "1.5 hours",
    notes: "Beginners session"
  },
  {
    day: "Tuesday", 
    time: "2:00 PM - 3:30 PM",
    location: "Outdoor Pitch",
    duration: "1.5 hours",
    notes: "Mixed ability"
  },
  {
    day: "Wednesday",
    time: "10:00 AM - 11:30 AM", 
    location: "Indoor Pitch",
    duration: "1.5 hours",
    notes: "Advanced skills"
  },
  {
    day: "Thursday",
    time: "2:00 PM - 3:30 PM",
    location: "Outdoor Pitch", 
    duration: "1.5 hours",
    notes: "Social session"
  },
  {
    day: "Friday",
    time: "10:00 AM - 11:30 AM",
    location: "Indoor Pitch",
    duration: "1.5 hours", 
    notes: "Weekend preparation"
  },
  {
    day: "Saturday",
    time: "9:00 AM - 10:30 AM",
    location: "Outdoor Pitch",
    duration: "1.5 hours",
    notes: "Friendly matches"
  }
]

export default function WalkingFootballPage() {
  return (
    <>
      <SEO
        title="Walking Football | Ages 50+"
        description="Low-impact football perfect for maintaining fitness and enjoying social sport for ages 50+. Gentle exercise with great people in a supportive environment."
        keywords={[
          "walking football",
          "senior football",
          "football for over 50s",
          "gentle football",
          "low impact football",
          "social football",
          "football for seniors",
          "active seniors",
          "football for elderly",
          "recreational football",
          "football for older adults",
          "social sports for seniors",
          "gentle exercise",
          "football fitness over 50"
        ]}
        ogTitle="Walking Football | Ages 50+"
        ogDescription="Low-impact football perfect for maintaining fitness and enjoying social sport for ages 50+."
        ogImage="/walking-hero-1920x800-senior-football-group.png"
        canonicalUrl="/walking-football"
        publishedTime="2025-09-20T00:00:00+00:00"
        modifiedTime="2025-09-20T00:00:00+00:00"
        additionalMetaTags={{
          "program-type": "walking football",
          "age-group": "50+ years",
          "duration": "1.5 hours per session",
          "frequency": "Monday - Saturday",
          "price-range": "£8-£250",
          "equipment": "provided",
          "health-benefits": "cardiovascular, mobility, social",
          "qualification": "FA qualified coaches"
        }}
        events={[
          {
            name: "Walking Football Session",
            description: "Low-impact football perfect for maintaining fitness and enjoying social sport for ages 50+",
            startDate: "2025-09-23T10:00:00+00:00",
            endDate: "2025-09-23T11:30:00+00:00",
            location: "Indoor Pitch, Sportsville",
            organizer: "TSS Multisports",
            eventType: "Event",
            duration: "PT1H30M"
          }
        ]}
        courses={[
          {
            name: "Walking Football Fitness Program",
            description: "Low-impact football exercise for seniors aged 50+",
            provider: "TSS Multisports",
            educationalLevel: "Beginner",
            courseMode: "PhysicalActivity",
            duration: "PT1H30M",
            offers: [
              {
                price: "8",
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock"
              },
              {
                price: "250",
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock"
              }
            ],
            audience: "Seniors aged 50+"
          }
        ]}
        faqs={[
          {
            questionName: "Is walking football suitable for beginners?",
            acceptedAnswerText: "Yes, walking football is perfect for beginners and those returning to exercise. The focus is on gentle movement, social interaction, and having fun rather than competitive play."
          },
          {
            questionName: "What equipment do I need for walking football?",
            acceptedAnswerText: "All equipment is provided by TSS Multisports, including footballs, bibs, and first aid supplies. Just wear comfortable clothing and trainers suitable for indoor/outdoor play."
          },
          {
            questionName: "What are the health benefits of walking football?",
            acceptedAnswerText: "Walking football offers numerous health benefits including improved cardiovascular health, better balance and coordination, increased mobility, and enhanced social connections with other participants."
          }
        ]}
        reviews={{
          reviews: [
            {
              author: "Margaret Thompson",
              datePublished: "2025-09-14",
              reviewRating: { ratingValue: 5 },
              reviewBody: "I absolutely love the walking football sessions! It's great exercise and I've made wonderful new friends. The coaches are so supportive and understanding.",
              itemReviewed: "Walking Football Program"
            },
            {
              author: "John Davis",
              datePublished: "2025-09-09",
              reviewRating: { ratingValue: 4 },
              reviewBody: "Perfect activity for keeping active and social. The pace is just right and everyone is so welcoming. I look forward to every session!",
              itemReviewed: "Walking Football Program"
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
          logo: "/walking-hero-1920x800-senior-football-group.png",
          image: "/walking-hero-1920x800-senior-football-group.png",
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
              text="Walking Football"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            />
            
            <AnimatedComponent
              animation="fadeIn"
              delay={0.3}
              className="text-xl text-muted-foreground mb-8"
            >
              Low-impact football perfect for maintaining fitness and enjoying social sport for ages 50+
            </AnimatedComponent>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#register">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Join Today
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
              src="/walking-hero-1920x800-senior-football-group.png"
              alt="Senior Walking Football Group"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Walking Football?</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Experience the joy of football without the high impact. Walking football combines gentle exercise, social connection, and the beautiful game in a safe, inclusive environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedComponent animation="slideUp" delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Health Benefits</h3>
                <p className="text-muted-foreground">
                  Improves cardiovascular health, mobility, and overall fitness without joint stress
                </p>
              </div>
            </AnimatedComponent>

            <AnimatedComponent animation="slideUp" delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Social Connection</h3>
                <p className="text-muted-foreground">
                  Build lasting friendships and be part of a supportive, active community
                </p>
              </div>
            </AnimatedComponent>

            <AnimatedComponent animation="slideUp" delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Inclusive Environment</h3>
                <p className="text-muted-foreground">
                  All abilities welcome - focus on fun and participation rather than competition
                </p>
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <VideoGallery videos={videos} title="Walking Football Videos" />

      {/* Image Gallery */}
      <ImageGallery images={images} title="Walking Football Gallery" />

      {/* Pricing */}
      <PricingTable 
        tiers={pricingTiers}
        title="Walking Football Pricing"
        description="Flexible options to suit your lifestyle and budget"
      />

      {/* Schedule */}
      <ScheduleDisplay 
        schedule={schedule}
        title="Walking Football Schedule"
        subtitle="Multiple sessions available throughout the week"
      />

      {/* Registration Form */}
      <RegistrationForm 
        programName="Walking Football"
        programDescription="Join our friendly walking football community and enjoy gentle exercise with great people"
      />
    </main>
  </>
)
}