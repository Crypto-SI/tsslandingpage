import Link from "next/link";
import { ArrowRight, Award, Calendar, MapPin, Shield, Users, Crown, Users2, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/seo/seo";

export default function HomePage() {
  const offerItems = [
    {
      icon: <Calendar className="h-10 w-10 text-red-600" />,
      title: "Varied Sports",
      description: "From football to tennis, cricket to athletics - we offer a diverse range of activities to keep children engaged."
    },
    {
      icon: <Users className="h-10 w-10 text-red-600" />,
      title: "Expert Coaches",
      description: "Our qualified coaches bring enthusiasm and expertise, creating a supportive environment for all skill levels."
    },
    {
      icon: <Shield className="h-10 w-10 text-red-600" />,
      title: "Safe Environment",
      description: "Safety is our priority. All coaches are DBS checked with first aid training and safeguarding qualifications."
    },
    {
      icon: <Award className="h-10 w-10 text-red-600" />,
      title: "All Abilities Welcome",
      description: "Whether beginners or experienced athletes, we ensure every child has a positive and enriching experience."
    }
  ];

  return (
    <>
      <SEO
        title="TSS Multisports Holiday Club"
        description="Fun and engaging sports activities for children of all ages and abilities during school holidays. Expert coaching in football, multisports, and holiday programs."
        keywords={[
          "TSS Multisports",
          "football coaching",
          "after school football",
          "walking football",
          "toddler football",
          "children's sports",
          "holiday club",
          "sports activities",
          "youth football",
          "kids sports",
          "football training",
          "multisports program",
          "school holiday activities",
          "children's fitness",
          "sports coaching for kids"
        ]}
        ogTitle="TSS Multisports Holiday Club"
        ogDescription="Fun and engaging sports activities for children of all ages and abilities during school holidays."
        ogImage="/pics/coach-huddle-1.jpg"
        canonicalUrl="/"
        publishedTime="2025-09-20T00:00:00+00:00"
        modifiedTime="2025-09-20T00:00:00+00:00"
        additionalMetaTags={{
          "football-program": "youth coaching",
          "age-group": "3-12 years, 50+",
          "location": "Sportsville, UK",
          "contact": "+44-1234-567890"
        }}
        events={[
          {
            name: "Holiday Football Camp",
            description: "Fun football activities during school holidays for children aged 3-12",
            startDate: "2025-10-21T09:00:00+00:00",
            endDate: "2025-10-25T16:00:00+00:00",
            location: "Sportsville Main Facility",
            organizer: "TSS Multisports",
            eventType: "Event",
            duration: "PT7H"
          }
        ]}
        courses={[
          {
            name: "Holiday Football Program",
            description: "Comprehensive football coaching and multisports activities during school holidays",
            provider: "TSS Multisports",
            educationalLevel: "Beginner to Intermediate",
            courseMode: "PhysicalActivity",
            duration: "PT7H",
            offers: [
              {
                price: "35",
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock"
              },
              {
                price: "175",
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock"
              }
            ],
            audience: "Children aged 3-12"
          }
        ]}
        faqs={[
          {
            questionName: "What age groups do you cater for?",
            acceptedAnswerText: "We offer programs for children aged 3-12 years, including toddler football (3-5), after school football (5-12), and holiday clubs for all age groups."
          },
          {
            questionName: "Are your coaches qualified?",
            acceptedAnswerText: "Yes, all our coaches are FA qualified with extensive experience working with children. They are DBS checked and trained in first aid and safeguarding."
          },
          {
            questionName: "What should children bring to sessions?",
            acceptedAnswerText: "Children should wear comfortable sports clothing and trainers. All equipment is provided, but they should bring a water bottle and any necessary medications."
          }
        ]}
        reviews={{
          reviews: [
            {
              author: "Sarah Johnson",
              datePublished: "2025-09-15",
              reviewRating: { ratingValue: 5 },
              reviewBody: "My son absolutely loves the holiday club! The coaches are fantastic and he's developed so much confidence and made new friends.",
              itemReviewed: "Holiday Club Program"
            },
            {
              author: "Mike Thompson",
              datePublished: "2025-09-10",
              reviewRating: { ratingValue: 4 },
              reviewBody: "Great program with professional coaching. My daughter has really improved her skills and looks forward to every session.",
              itemReviewed: "Holiday Club Program"
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
          logo: "/logo-400x400-tss-multisports.png",
          image: "/pics/field-drills-1.jpg",
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
        organizationData={{
          name: "TSS Multisports",
          description: "Professional football coaching and multisports programs for children and seniors in Sportsville, UK",
          url: "https://tssmultisports.com",
          logo: "/logo-400x400-tss-multisports.png",
          image: "/pics/field-drills-1.jpg",
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
          ],
          awards: [
            "FA Charter Standard",
            "Safeguarding Children Certificate",
            "First Aid Qualified"
          ],
          aggregateRating: {
            ratingValue: 4.8,
            reviewCount: 45
          },
          serviceArea: [
            { type: "Place", name: "Sportsville" },
            { type: "Place", name: "Surrounding areas" }
          ]
        }}
        localBusinessData={{
          name: "TSS Multisports",
          description: "Professional football coaching and multisports programs for children and seniors in Sportsville, UK",
          url: "https://tssmultisports.com",
          logo: "/logo-400x400-tss-multisports.png",
          image: "/pics/field-drills-1.jpg",
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
          ],
          priceRange: "££",
          geo: {
            latitude: "51.5074",
            longitude: "-0.1278"
          },
          areaServed: ["Sportsville", "UK", "Local communities"]
        }}
        breadcrumbs={[
          {
            position: 1,
            name: "Home",
            item: "https://tssmultisports.com/"
          }
        ]}
      />
      <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-background to-muted flex items-center py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
              TSS Multisports Holiday Club
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Providing fun, active, and engaging sports activities for children of all ages and abilities during school holidays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white gap-2">
                View Events <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Register Interest
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md aspect-square rounded-lg overflow-hidden shadow-xl">
              <img
                src="/pics/coach-huddle-1.jpg"
                alt="Children playing football at TSS Multisports"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="w-full py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerItems.map((item, index) => (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <div className="mb-4 flex justify-center">
                    <img
                      src={
                        item.title === "Varied Sports"
                          ? "/home-feature-calendar-400x400-icon-schedule.png"
                          : item.title === "Expert Coaches"
                          ? "/home-feature-users-400x400-expert-coaches.png"
                          : item.title === "Safe Environment"
                          ? "/home-feature-shield-400x400-safe-environment.png"
                          : "/home-feature-award-400x400-all-abilities-welcome.png"
                      }
                      alt={`${item.title} icon`}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Football Programs Section */}
      <section className="w-full py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Football Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* After School Football */}
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4">
                  <img
                    src="/pics/goal-lineup-1.jpg"
                    alt="After School Football"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle>After School Football</CardTitle>
                <CardDescription className="text-lg">
                  Ages 5-12 years
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Expert coaching in a fun, structured environment focusing on skill development and teamwork.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Professional coaching</li>
                  <li>• Small group sizes</li>
                  <li>• Match play opportunities</li>
                  <li>• Progressive skill building</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/after-school-football">
                  <Button className="w-full gap-2">
                    Coming Soon <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Walking Football */}
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4">
                  <img
                    src="/pics/coach-field-1.jpg"
                    alt="Walking Football"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle>Walking Football</CardTitle>
                <CardDescription className="text-lg">
                  Ages 50+ years
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Low-impact football perfect for maintaining fitness and enjoying social sport.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Gentle exercise</li>
                  <li>• Social connection</li>
                  <li>• Inclusive environment</li>
                  <li>• Health benefits</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/walking-football">
                  <Button className="w-full gap-2">
                    Coming Soon <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Football for Toddlers */}
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4">
                  <img
                    src="/pics/toddler-cones-1.jpg"
                    alt="Football for Toddlers"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle>Football for Toddlers</CardTitle>
                <CardDescription className="text-lg">
                  Ages 3-5 years
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Fun introduction to football fundamentals with age-appropriate activities.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Coordination development</li>
                  <li>• Social skills building</li>
                  <li>• Confidence building</li>
                  <li>• Parent participation</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/toddler-football">
                  <Button className="w-full gap-2">
                    Coming Soon <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Fun?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Register your interest today to secure a spot for your child at our next holiday club event.
            Early registration receives a 10% discount!
          </p>
          <Button variant="secondary" size="lg">
            Coming Soon
          </Button>
        </div>
      </section>
    </main>
    </>
  );
}
