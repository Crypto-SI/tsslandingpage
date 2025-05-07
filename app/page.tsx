import Link from "next/link";
import { ArrowRight, Award, Calendar, MapPin, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedComponent from "@/components/ui/animated-component";
import AnimatedText from "@/components/ui/animated-text";
import AnimatedCard from "@/components/ui/animated-card";
import AnimatedButton from "@/components/ui/animated-button";
import PlaceholderImage from "@/components/ui/placeholder-image";

export default function HomePage() {
  const offerItems = [
    {
      icon: <Calendar className="h-10 w-10 text-brand-red" />,
      title: "Varied Sports",
      description: "From football to tennis, cricket to athletics - we offer a diverse range of activities to keep children engaged."
    },
    {
      icon: <Users className="h-10 w-10 text-brand-red" />,
      title: "Expert Coaches",
      description: "Our qualified coaches bring enthusiasm and expertise, creating a supportive environment for all skill levels."
    },
    {
      icon: <Shield className="h-10 w-10 text-brand-red" />,
      title: "Safe Environment",
      description: "Safety is our priority. All coaches are DBS checked with first aid training and safeguarding qualifications."
    },
    {
      icon: <Award className="h-10 w-10 text-brand-red" />,
      title: "All Abilities Welcome",
      description: "Whether beginners or experienced athletes, we ensure every child has a positive and enriching experience."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full relative min-h-[80vh] bg-gradient-to-b from-background via-background to-primary/5 flex items-center">
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <AnimatedText
              text="TSS Multisports Holiday Club"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            />
            <AnimatedComponent 
              animation="fadeIn" 
              delay={0.5}
              className="mb-8 text-lg text-muted-foreground"
            >
              Providing fun, active, and engaging sports activities for children of all ages and abilities during school holidays.
            </AnimatedComponent>
            <div className="flex flex-col sm:flex-row gap-4">
              <AnimatedButton 
                size="lg" 
                className="gap-2"
                delay={0.7}
              >
                View Events <ArrowRight className="h-4 w-4" />
              </AnimatedButton>
              <AnimatedButton 
                variant="outline" 
                size="lg"
                delay={0.8}
              >
                Register Interest
              </AnimatedButton>
            </div>
          </div>
          <AnimatedComponent 
            animation="scale" 
            delay={0.4} 
            className="md:w-1/2 flex justify-center"
          >
            <div className="w-full max-w-md aspect-square rounded-lg overflow-hidden shadow-xl">
              <PlaceholderImage />
            </div>
          </AnimatedComponent>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="w-full py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedText
            text="What We Offer"
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerItems.map((item, index) => (
              <AnimatedCard
                key={item.title}
                delay={0.2 + index * 0.1}
              >
                <CardHeader>
                  <div className="mb-4">{item.icon}</div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Teaser */}
      <section className="w-full py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <AnimatedText
            text="Upcoming Events"
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedCard delay={0.3}>
              <CardHeader>
                <CardTitle>Summer Holiday Club</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-2">
                  <Calendar className="h-4 w-4" /> July 25 - August 30, 2023
                </CardDescription>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4" /> Central Sports Center
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join us for six weeks of multi-sports fun! Daily activities include football, tennis, 
                  cricket, athletics, and team challenges.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">View Details</Button>
              </CardFooter>
            </AnimatedCard>
            
            <AnimatedCard delay={0.4}>
              <CardHeader>
                <CardTitle>Half-Term Sports Camp</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-2">
                  <Calendar className="h-4 w-4" /> October 23 - 27, 2023
                </CardDescription>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4" /> Westside Community Hall
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A week of sports and activities designed to keep children active during the half-term break. 
                  Perfect for building skills and making friends.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">View Details</Button>
              </CardFooter>
            </AnimatedCard>
          </div>
          
          <div className="text-center mt-12">
            <AnimatedButton delay={0.6}>
              See All Events
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedComponent animation="slideUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Fun?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Register your interest today to secure a spot for your child at our next holiday club event.
              Early registration receives a 10% discount!
            </p>
            <AnimatedButton 
              variant="secondary" 
              size="lg"
              delay={0.3}
            >
              Register Now
            </AnimatedButton>
          </AnimatedComponent>
        </div>
      </section>
    </main>
  );
}
