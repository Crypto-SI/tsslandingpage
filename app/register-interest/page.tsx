import Link from "next/link";
import { ArrowLeft, Calendar, Users, Award, Shield, Clock, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/seo/seo";

export default function RegisterInterestPage() {
  const programs = [
    {
      id: "after-school",
      name: "After School Football",
      description: "Professional coaching for children aged 5-12, focusing on skill development and teamwork.",
      ageGroup: "5-12 years",
      duration: "1.5 hours",
      price: "£12 per session",
      features: ["Professional coaching", "Small group sizes", "Match play opportunities", "Progress tracking"],
      image: "/after-school-hero-1920x800-children-football-training.png"
    },
    {
      id: "toddler",
      name: "Toddler Football",
      description: "Fun introduction to football fundamentals with age-appropriate activities for ages 3-5.",
      ageGroup: "3-5 years",
      duration: "1 hour",
      price: "£15 per session",
      features: ["Parent participation", "Coordination development", "Social skills", "Confidence building"],
      image: "/toddler-hero-1920x800-parent-child-football.png"
    },
    {
      id: "walking",
      name: "Walking Football",
      description: "Low-impact football perfect for maintaining fitness and social connection for ages 50+.",
      ageGroup: "50+ years",
      duration: "1.5 hours",
      price: "£8 per session",
      features: ["Health benefits", "Social connection", "Inclusive environment", "Professional coaching"],
      image: "/walking-hero-1920x800-senior-football-group.png"
    },
    {
      id: "holiday",
      name: "Holiday Football Camp",
      description: "Intensive football camps during school holidays with professional coaching and activities.",
      ageGroup: "6-12 years",
      duration: "Full day (9am-4pm)",
      price: "£35 per day",
      features: ["5 days of coaching", "Match play", "Certificate", "Progress tracking", "Fun activities"],
      image: "/holiday-camp-hero-1920x800-children-football-fun.png"
    }
  ];

  return (
    <>
      <SEO
        title="Register Interest | TSS Multisports"
        description="Register your interest in our football programs for children, toddlers, and seniors. Join our community and start your football journey today!"
        keywords={[
          "register interest",
          "football registration",
          "after school football",
          "toddler football",
          "walking football",
          "holiday camps",
          "football coaching",
          "sports registration",
          "children's sports",
          "youth football",
          "senior football",
          "football programs"
        ]}
        ogTitle="Register Interest | TSS Multisports"
        ogDescription="Register your interest in our football programs for children, toddlers, and seniors."
        ogImage="/register-interest-hero-1920x800-football-registration.png"
        canonicalUrl="/register-interest"
        breadcrumbs={[
          {
            position: 1,
            name: "Home",
            item: "https://tssmultisports.com/"
          },
          {
            position: 2,
            name: "Register Interest",
            item: "https://tssmultisports.com/register-interest"
          }
        ]}
      />

      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-background to-muted flex items-center py-20">
          <div className="container mx-auto px-4 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
              Register Your Interest
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join our growing community of football enthusiasts. Register your interest in any of our programs and we'll contact you with more information and availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white gap-2">
                Get Started <Calendar className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Contact Us
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="container mx-auto px-4 mt-12">
            <div className="max-w-4xl mx-auto">
              <img
                src="/register-interest-hero-1920x800-football-registration.png"
                alt="Football Registration"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="w-full py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Available Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program) => (
                <Card key={program.id} className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{program.name}</CardTitle>
                    <CardDescription className="text-base">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{program.ageGroup}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 col-span-2">
                        <Award className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-600">{program.price}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Program Features:</h4>
                      <ul className="space-y-1">
                        {program.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Shield className="h-3 w-3 text-green-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full gap-2">
                      Register for {program.name} <Calendar className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="w-full py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Have Questions?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our friendly team is here to help you find the perfect program for you or your child.
                Contact us for more information about availability, pricing, and program details.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto">
                <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-sm text-muted-foreground">+44-1234-567890</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-sm text-muted-foreground">info@tssmultisports.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of players who have improved their skills, made new friends, and discovered their passion for football with TSS Multisports.
            </p>
            <Button variant="secondary" size="lg">
              Register Your Interest Today
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}