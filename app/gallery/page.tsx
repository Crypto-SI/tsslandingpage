import type { Metadata } from "next"
import ImageGallery from "@/components/ui/image-gallery"
import Schema from "@/components/seo/Schema"

// Generate high-quality sports-themed gallery images
const generateGalleryImages = () => [
  {
    id: "holiday-camp-1",
    alt: "Children enjoying holiday camp football activities",
    caption: "Fun-filled holiday camp session with professional coaching and team building exercises",
    category: "Holiday Camp",
    src: "/holiday-camp-hero-1920x800-children-football-fun.png"
  },
  {
    id: "after-school-1",
    alt: "After school football training session",
    caption: "Expert coaching focusing on skill development and teamwork in after school programs",
    category: "After School Football",
    src: "/after-school-hero-1920x800-children-football-training.png"
  },
  {
    id: "walking-football-1",
    alt: "Walking football session for seniors",
    caption: "Gentle, inclusive football perfect for maintaining fitness and social connection",
    category: "Walking Football",
    src: "/walking-hero-1920x800-senior-football-group.png"
  },
  {
    id: "toddler-1",
    alt: "Toddler football development program",
    caption: "Early years football fundamentals with age-appropriate activities and parent participation",
    category: "Toddler Football",
    src: "/toddler-hero-1920x800-parent-child-football.png"
  },
  {
    id: "coaching-1",
    alt: "Professional coaching demonstration",
    caption: "Qualified coaches providing expert guidance and technique development",
    category: "Coaching Sessions",
    src: "/coaches-hero-1920x800-team-professional-coaches.png"
  },
  {
    id: "holiday-camp-2",
    alt: "Multi-sports activities during holiday program",
    caption: "Diverse sports activities including cricket, tennis, and athletics for comprehensive development",
    category: "Holiday Camp",
    src: "/holiday-camp-hero-1920x800-children-football-fun.png"
  },
  {
    id: "after-school-2",
    alt: "Match play in after school football",
    caption: "Friendly matches applying learned skills in competitive yet supportive environment",
    category: "After School Football",
    src: "/after-school-hero-1920x800-children-football-training.png"
  },
  {
    id: "walking-football-2",
    alt: "Social walking football session",
    caption: "Community-focused sports activity promoting health and friendship among seniors",
    category: "Walking Football",
    src: "/walking-hero-1920x800-senior-football-group.png"
  },
  {
    id: "toddler-2",
    alt: "Parent and toddler football session",
    caption: "Bonding through football with professional guidance for early childhood development",
    category: "Toddler Football",
    src: "/toddler-hero-1920x800-parent-child-football.png"
  }
]

export const metadata: Metadata = {
  title: "Gallery | TSS Multisports Holiday Club",
  description: "Discover the exciting world of TSS Multisports through our comprehensive gallery. Browse photos from holiday camps, football programs, coaching sessions, and community events.",
  keywords: [
    "TSS Multisports gallery",
    "football coaching photos",
    "children's sports activities", 
    "holiday club images",
    "sports program highlights",
    "after school football",
    "walking football",
    "toddler football",
    "coaching sessions",
    "youth sports",
    "community sports"
  ],
  openGraph: {
    title: "TSS Multisports Program Gallery",
    description: "Explore our collection of sports activities, coaching moments, and program highlights",
    images: [
      {
        url: "/gallery-hero-1920x800-sports-activities-collection.png",
        width: 1200,
        height: 630,
        alt: "TSS Multisports - Sports Activities Gallery"
      }
    ],
    type: "website",
    locale: "en_GB",
    url: "https://tssmultisports.com/gallery"
  },
  twitter: {
    card: "summary_large_image",
    title: "TSS Multisports Gallery",
    description: "Sports activities and coaching program highlights from our community",
    images: ["/gallery-hero-1920x800-sports-activities-collection.png"],
    creator: "@tssmultisports"
  },
  alternates: {
    canonical: "https://tssmultisports.com/gallery"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1
    }
  }
}

export default function GalleryPage() {
  const galleryImages = generateGalleryImages()

  return (
    <main className="min-h-screen bg-background">
      {/* Structured Data for Gallery */}
      <Schema
        type="WebPage"
        data={{
          name: "Program Gallery | TSS Multisports",
          description: "Discover the exciting world of TSS Multisports through our comprehensive gallery. Browse photos from holiday camps, football programs, coaching sessions, and community events.",
          url: "https://tssmultisports.com/gallery",
          mainEntity: {
            "@type": "ImageGallery",
            name: "TSS Multisports Program Gallery",
            description: "Sports activities and coaching program highlights",
            image: galleryImages.map(img => ({
              "@type": "ImageObject",
              name: img.alt,
              description: img.caption,
              contentUrl: img.src || "/gallery-hero-1920x800-sports-activities-collection.png",
              encodingFormat: "image/jpeg"
            }))
          }
        }}
      />

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Program Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of memorable moments from sports programs, coaching sessions, and community events
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full py-12">
          <ImageGallery
            images={galleryImages}
            title="Sports Program Gallery"
          />
        </section>

        {/* Categories Info Section */}
        <section className="w-full py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-background rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Holiday Camp</h3>
                <p className="text-sm text-muted-foreground">
                  Fun activities during school holidays with diverse sports programs
                </p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg">
                <h3 className="font-semibold text-primary mb-2">After School Football</h3>
                <p className="text-sm text-muted-foreground">
                  Professional coaching for ages 5-12 with skill development focus
                </p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Walking Football</h3>
                <p className="text-sm text-muted-foreground">
                  Low-impact football for seniors promoting fitness and social connection
                </p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Toddler Football</h3>
                <p className="text-sm text-muted-foreground">
                  Early years development program for ages 3-5 with parent participation
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}