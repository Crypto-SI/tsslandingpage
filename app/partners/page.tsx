import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Award, Users, Target, Heart, Star, CheckCircle, Globe } from "lucide-react"
import AnimatedText from "@/components/ui/animated-text"
import AnimatedComponent from "@/components/ui/animated-component"
import SEO from "@/components/seo/seo"
import Schema from "@/components/seo/Schema"

export const metadata: Metadata = {
  title: "Partners | TSS Multisports",
  description: "Discover our strategic partnerships with affillia Sports, Peterborough United FC, and Bedford Town FC. These collaborations provide player pathways, career support, and professional development opportunities.",
  keywords: [
    "TSS Multisports partners",
    "affillia Sports",
    "Peterborough United FC",
    "Bedford Town FC",
    "football partnerships",
    "player pathways",
    "career support",
    "football development",
    "youth football partnerships",
    "football agency partnerships",
    "professional football clubs",
    "semi-pro football partnerships",
    "football coaching partnerships",
    "player recruitment",
    "football career opportunities"
  ],
  openGraph: {
    title: "Partners | TSS Multisports",
    description: "Strategic partnerships with affillia Sports, Peterborough United FC, and Bedford Town FC providing player pathways and career development opportunities.",
    images: [
      {
        url: "/partners-hero-1920x800-football-collaborations.png",
        width: 1200,
        height: 630,
        alt: "TSS Multisports - Football Partnerships"
      }
    ],
    type: "website",
    locale: "en_GB",
    url: "https://tssmultisports.com/partners"
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners | TSS Multisports",
    description: "Strategic football partnerships providing player pathways and career development opportunities",
    images: ["/partners-hero-1920x800-football-collaborations.png"],
    creator: "@tssmultisports"
  },
  alternates: {
    canonical: "https://tssmultisports.com/partners"
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

export default function PartnersPage() {
  const partnerships = [
    {
      name: "Bedford Town FC",
      logo: "/partners-logo-bedford-town-400x400-semi-pro-club.png",
      link: "https://bedfordtownfc.co.uk",
      description: "Bedford Town FC are a semi-pro club who TSS runs courses on behalf of. This collaboration combines TSS's coaching expertise with Bedford Town's established football program to provide quality training and development opportunities.",
      type: "semi-pro-club",
      focus: "course-delivery"
    },
    {
      name: "Affillia Sports",
      logo: "/partners-logo-affillia-sports-400x400-football-agency.png",
      link: "https://affilliasports.com",
      description: "Affillia Sports is an agency that offers exceptional players a pathway and optional free support with any future careers in the game. They provide professional guidance and opportunities for talented athletes to advance their football careers.",
      type: "agency",
      focus: "career-pathway"
    },
    {
      name: "Peterborough United FC",
      logo: "/partners-logo-peterborough-united-400x400-professional-club.png",
      link: "https://theposh.com",
      description: "Peterborough United FC are a professional team that Anton Jacob, head coach at TSS, often recruits for. This partnership provides talented players with direct pathways to professional football opportunities.",
      type: "professional-club",
      focus: "player-recruitment"
    }
  ]

  return (
    <>
      <SEO
        title="Partners | TSS Multisports"
        description="Discover our strategic partnerships with affillia Sports, Peterborough United FC, and Bedford Town FC. These collaborations provide player pathways, career support, and professional development opportunities."
        keywords={[
          "TSS Multisports partners",
          "affillia Sports",
          "Peterborough United FC",
          "Bedford Town FC",
          "football partnerships",
          "player pathways",
          "career support",
          "football development",
          "youth football partnerships",
          "football agency partnerships",
          "professional football clubs",
          "semi-pro football partnerships",
          "football coaching partnerships",
          "player recruitment",
          "football career opportunities"
        ]}
        ogTitle="Partners | TSS Multisports"
        ogDescription="Strategic partnerships with affillia Sports, Peterborough United FC, and Bedford Town FC providing player pathways and career development opportunities"
        ogImage="/partners-hero-1920x800-football-collaborations.png"
        canonicalUrl="/partners"
        publishedTime="2025-09-23T00:00:00+00:00"
        modifiedTime="2025-09-23T00:00:00+00:00"
        additionalMetaTags={{
          "partnership-type": "multiple-strategic-collaborations",
          "partners-count": "3",
          "partnership-focus": "player-development-pathways"
        }}
        faqs={[
          {
            questionName: "What partnerships does TSS Multisports have?",
            acceptedAnswerText: "TSS Multisports has three key strategic partnerships: with affillia Sports (career pathway agency), Peterborough United FC (professional recruitment), and Bedford Town FC (semi-pro course delivery). Each partnership provides different opportunities for player development and career advancement."
          },
          {
            questionName: "How do these partnerships benefit young players?",
            acceptedAnswerText: "Our partnerships provide comprehensive support for young players including career guidance and pathways through affillia Sports, opportunities for professional football with Peterborough United FC, and quality training programs through Bedford Town FC. This creates a complete development pathway from youth to potential professional levels."
          },
          {
            questionName: "Are there any additional costs for partnership programs?",
            acceptedAnswerText: "No, our partnerships are designed to enhance existing programs without additional costs. The benefits include improved coaching quality, better facilities, enhanced career support, and expanded opportunities - all integrated into our current program structure at no extra charge."
          },
          {
            questionName: "How can players get involved with these partnerships?",
            acceptedAnswerText: "Players can get involved through our regular programs, with exceptional talent being identified for specific partnership opportunities. Our coaching staff work closely with all partners to identify and develop talent. Interested parents and players should speak with our coaches for more information about specific pathways."
          }
        ]}
        reviews={{
          reviews: [
            {
              author: "Sarah Johnson",
              datePublished: "2025-09-20",
              reviewRating: { ratingValue: 5 },
              reviewBody: "The multiple partnerships at TSS have given my son incredible opportunities. The career guidance from affillia Sports and the pathway to professional football through Peterborough United have been life-changing for his development.",
              itemReviewed: "Partnership Programs"
            },
            {
              author: "Mike Thompson",
              datePublished: "2025-09-18",
              reviewRating: { ratingValue: 5 },
              reviewBody: "Amazing to see TSS collaborating with such diverse partners. From agency support to professional clubs, the comprehensive approach to player development is outstanding. My daughter has benefited tremendously from these connections.",
              itemReviewed: "Partnership Programs"
            }
          ],
          aggregateRating: {
            ratingValue: 5,
            reviewCount: 2
          }
        }}
      />

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
                text="Our Partners"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              />
              
              <AnimatedComponent
                animation="fadeIn"
                delay={0.3}
                className="text-xl text-muted-foreground mb-8"
              >
                Strategic partnerships that enhance player development and create pathways for talented athletes
              </AnimatedComponent>
            </div>
          </div>
        </section>

        {/* Partnerships Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {partnerships.map((partnership, index) => (
                <AnimatedComponent
                  key={partnership.name}
                  animation={index % 2 === 0 ? "slideUp" : "slideIn"}
                  delay={0.1 + index * 0.1}
                >
                  <div className={`bg-muted/50 rounded-lg p-8 md:p-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex-row items-center gap-8`}>
                    {/* Logo */}
                    <div className="flex-shrink-0 mb-6 md:mb-0">
                      <img
                        src={partnership.logo}
                        alt={`${partnership.name} Logo`}
                        className="w-32 h-32 object-contain rounded-lg"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="mb-4">
                        <Link
                          href={partnership.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors inline-block"
                        >
                          {partnership.name}
                        </Link>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {partnership.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                          href={partnership.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                        >
                          Visit Website <Globe className="h-4 w-4" />
                        </a>
                        <span className="px-4 py-2 bg-background rounded-lg text-sm text-muted-foreground">
                          {partnership.type === 'agency' && 'Agency'}
                          {partnership.type === 'professional-club' && 'Professional Club'}
                          {partnership.type === 'semi-pro-club' && 'Semi-Pro Club'}
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimatedComponent>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedComponent animation="fadeIn" delay={0.3}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Our Partnerships?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Learn more about how these partnerships can benefit your child's football development and career opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Get in Touch
                  </Link>
                  <Link href="/coaches" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors">
                    Meet Our Coaches
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