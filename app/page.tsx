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
        ogImage="/images/og-default.jpg"
        canonicalUrl="/"
        publishedTime="2025-09-20T00:00:00+00:00"
        modifiedTime="2025-09-20T00:00:00+00:00"
        additionalMetaTags={{
          "football-program": "youth coaching",
          "age-group": "3-12 years, 50+",
          "location": "Sportsville, UK",
          "contact": "+44-1234-567890"
        }}
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
            <div className="w-full max-w-md aspect-square rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
              <div className="text-white text-7xl font-bold">TSS</div>
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
                  <div className="mb-4">{item.icon}</div>
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
                  <Crown className="h-12 w-12 text-red-600" />
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
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Walking Football */}
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4">
                  <Users2 className="h-12 w-12 text-red-600" />
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
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Football for Toddlers */}
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4">
                  <Baby className="h-12 w-12 text-red-600" />
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
                    Learn More <ArrowRight className="h-4 w-4" />
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
            Register Now
          </Button>
        </div>
      </section>
    </main>
    </>
  );
}
