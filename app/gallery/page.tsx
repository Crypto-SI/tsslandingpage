import type { Metadata } from "next"
import ImageGallery from "@/components/ui/image-gallery"
import Schema from "@/components/seo/Schema"

// Curated selection of on-site photography in /public/pics
const generateGalleryImages = () => [
  {
    id: "archery-lesson-1",
    alt: "Junior athlete lining up an archery shot during camp",
    caption: "Archery fundamentals session building focus, balance, and body control.",
    category: "Multi-Sport",
    src: "/pics/archery-lesson-1.jpg"
  },
  {
    id: "dodgeball-drill-1",
    alt: "Children sprinting through a high-energy dodgeball drill indoors",
    caption: "Fast-paced dodgeball warm-up that sharpens agility and quick decision making.",
    category: "Holiday Club",
    src: "/pics/dodgeball-drill-1.jpg"
  },
  {
    id: "coach-huddle-1",
    alt: "Coach leading a focused huddle on the football pitch",
    caption: "Pitch-side tactical chat ensuring every player understands the next drill.",
    category: "Coaching",
    src: "/pics/coach-huddle-1.jpg"
  },
  {
    id: "goal-friends-1",
    alt: "Two young friends smiling together inside the goal frame",
    caption: "Celebrating friendship and teamwork after a well-earned training break.",
    category: "Football Family",
    src: "/pics/goal-friends-1.jpg"
  },
  {
    id: "parent-play-1",
    alt: "Parent joining their child for a passing drill",
    caption: "Family-inclusive session where adults and children learn side by side.",
    category: "Parent & Player",
    src: "/pics/parent-play-1.jpg"
  },
  {
    id: "toddler-cones-1",
    alt: "Toddler weaving a football around bright training cones",
    caption: "Mini dribbling course engineered for little feet developing coordination.",
    category: "Toddler Time",
    src: "/pics/toddler-cones-1.jpg"
  },
  {
    id: "dance-class-1",
    alt: "Young dancers stretching together in the studio",
    caption: "Creative movement workshop blending rhythm, strength, and confidence.",
    category: "Performing Arts",
    src: "/pics/dance-class-1.jpg"
  },
  {
    id: "cricket-drill-1",
    alt: "Player practicing controlled cricket bowling indoors",
    caption: "Technical cricket coaching to refine seam position and delivery stride.",
    category: "Cricket",
    src: "/pics/cricket-drill-1.jpg"
  },
  {
    id: "everton-visit-1",
    alt: "Everton community coach meeting excited players",
    caption: "Special guest visit inspiring our players with top-flight insight and smiles.",
    category: "Club Partnership",
    src: "/pics/everton-visit-1.jpg"
  },
  {
    id: "warmup-line-1",
    alt: "Squad powering through a dynamic warm-up line",
    caption: "Game-day intensity as players attack the warm-up ladder with intent.",
    category: "Match Prep",
    src: "/pics/warmup-line-1.jpg"
  },
  {
    id: "cup-celebration-1",
    alt: "Junior footballers lifting a silver cup together",
    caption: "Competition champions raising silverware after a day of spirited play.",
    category: "Tournaments",
    src: "/pics/cup-celebration-1.jpg"
  },
  {
    id: "trophy-team-1",
    alt: "Full squad posing proudly with trophies and medals",
    caption: "End-of-season presentation showcasing progress and community pride.",
    category: "Awards Night",
    src: "/pics/trophy-team-1.jpg"
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
      <section className="w-full bg-gradient-to-b from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground">Captured at TSS Multisports</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            A Day in the Life of Our Club
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Twelve hand-picked highlights from recent football fixtures, creative workshops, and multi-sport adventures. Scroll through the gallery to feel the energy, commitment, and joy that power every TSS Multisports experience.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full pb-12">
        <ImageGallery
          images={galleryImages}
          title="Latest Moments Gallery"
        />
      </section>

      {/* Categories Info Section */}
      <section className="w-full py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Beyond the Lens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background rounded-lg shadow-sm border border-border/40">
              <h3 className="font-semibold text-primary mb-2">Multi-Sport Discovery</h3>
              <p className="text-sm text-muted-foreground">
                Archery, cricket, dance, dodgeball, and more to build the most rounded athletes.
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm border border-border/40">
              <h3 className="font-semibold text-primary mb-2">Football Pathways</h3>
              <p className="text-sm text-muted-foreground">
                From toddlers to tournament winners, each pathway is coached with purpose.
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm border border-border/40">
              <h3 className="font-semibold text-primary mb-2">Family & Community</h3>
              <p className="text-sm text-muted-foreground">
                Parents on the pitch, club visits, and award nights keep the community close.
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm border border-border/40">
              <h3 className="font-semibold text-primary mb-2">Professional Standards</h3>
              <p className="text-sm text-muted-foreground">
                Every session is scaffolded by accredited coaches, structured plans, and clear goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
