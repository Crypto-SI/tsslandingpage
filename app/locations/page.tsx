import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/seo/seo";
import LocalSEO from "@/components/seo/LocalSEO";
import LocationSchema from "@/components/seo/LocationSchema";

export default function LocationsPage() {
  const locations = [
    {
      id: 1,
      name: "Sportsville Main Facility",
      description: "Our flagship location with state-of-the-art facilities for all football programs",
      address: {
        streetAddress: "123 Sports Avenue",
        addressLocality: "Sportsville",
        addressRegion: "UK",
        postalCode: "12345",
        addressCountry: "GB"
      },
      phone: "+44-1234-567890",
      email: "info@tssmultisports.com",
      website: "https://tssmultisports.com",
      geoCoordinates: {
        latitude: "51.5074",
        longitude: "-0.1278"
      },
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
      serviceAreas: ["Sportsville", "North District", "South District", "East District", "West District"],
      facilities: ["Full-size pitch", "Training area", "Indoor facility", "Parking", "Changing rooms", "Café"],
      programs: ["All Programs", "After School Football", "Walking Football", "Toddler Football", "Holiday Clubs"]
    },
    {
      id: 2,
      name: "North District Sports Hub",
      description: "Community-focused facility serving the northern areas of Sportsville",
      address: {
        streetAddress: "456 North Street",
        addressLocality: "North District",
        addressRegion: "UK",
        postalCode: "12346",
        addressCountry: "GB"
      },
      phone: "+44-1234-567891",
      email: "north@tssmultisports.com",
      website: "https://tssmultisports.com/locations/north-district",
      geoCoordinates: {
        latitude: "51.5200",
        longitude: "-0.1278"
      },
      openingHours: [
        {
          dayOfWeek: "Monday",
          opens: "15:00",
          closes: "19:00"
        },
        {
          dayOfWeek: "Tuesday",
          opens: "15:00",
          closes: "19:00"
        },
        {
          dayOfWeek: "Wednesday",
          opens: "15:00",
          closes: "19:00"
        },
        {
          dayOfWeek: "Thursday",
          opens: "15:00",
          closes: "19:00"
        },
        {
          dayOfWeek: "Friday",
          opens: "15:00",
          closes: "19:00"
        },
        {
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "16:00"
        }
      ],
      serviceAreas: ["North District", "Northern Suburbs", "Northwest Communities"],
      facilities: ["5-a-side pitch", "Training area", "Community hall", "Parking"],
      programs: ["After School Football", "Holiday Clubs", "Weekend Sessions"]
    },
    {
      id: 3,
      name: "South District Community Centre",
      description: "Accessible facility serving southern communities with inclusive programs",
      address: {
        streetAddress: "789 South Road",
        addressLocality: "South District",
        addressRegion: "UK",
        postalCode: "12347",
        addressCountry: "GB"
      },
      phone: "+44-1234-567892",
      email: "south@tssmultisports.com",
      website: "https://tssmultisports.com/locations/south-district",
      geoCoordinates: {
        latitude: "51.4940",
        longitude: "-0.1278"
      },
      openingHours: [
        {
          dayOfWeek: "Monday",
          opens: "10:00",
          closes: "18:00"
        },
        {
          dayOfWeek: "Tuesday",
          opens: "10:00",
          closes: "18:00"
        },
        {
          dayOfWeek: "Wednesday",
          opens: "10:00",
          closes: "18:00"
        },
        {
          dayOfWeek: "Thursday",
          opens: "10:00",
          closes: "18:00"
        },
        {
          dayOfWeek: "Friday",
          opens: "10:00",
          closes: "18:00"
        },
        {
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "17:00"
        },
        {
          dayOfWeek: "Sunday",
          opens: "11:00",
          closes: "15:00"
        }
      ],
      serviceAreas: ["South District", "Southern Communities", "Southeast Areas"],
      facilities: ["Indoor facility", "Community hall", "Accessible facilities", "Parking"],
      programs: ["Walking Football", "Toddler Football", "All Abilities Programs", "Holiday Clubs"]
    }
  ];

  return (
    <>
      <SEO
        title="TSS Multisports Locations"
        description="Find your nearest TSS Multisports location in Sportsville and surrounding areas. We have multiple facilities offering football coaching for children and seniors."
        keywords={[
          "TSS Multisports locations",
          "football coaching near me",
          "sports facilities Sportsville",
          "after school football locations",
          "walking football venues",
          "toddler football classes near me",
          "children's sports programs",
          "community sports centers"
        ]}
        ogTitle="TSS Multisports Locations"
        ogDescription="Find your nearest TSS Multisports location in Sportsville and surrounding areas."
        ogImage="/locations-hero-1920x800-sports-facilities.png"
        canonicalUrl="/locations"
        breadcrumbs={[
          {
            position: 1,
            name: "Home",
            item: "https://tssmultisports.com/"
          },
          {
            position: 2,
            name: "Locations",
            item: "https://tssmultisports.com/locations"
          }
        ]}
      />
      
      <LocalSEO
        businessName="TSS Multisports"
        description="Professional football coaching and multisports programs for children and seniors in Sportsville, UK"
        address={{
          streetAddress: "123 Sports Avenue",
          addressLocality: "Sportsville",
          addressRegion: "UK",
          postalCode: "12345",
          addressCountry: "GB"
        }}
        phone="+44-1234-567890"
        email="info@tssmultisports.com"
        website="https://tssmultisports.com"
        serviceAreas={["Sportsville", "North District", "South District", "East District", "West District"]}
        geoCoordinates={{
          latitude: "51.5074",
          longitude: "-0.1278"
        }}
        openingHours={[
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
        ]}
        sameAs={[
          "https://facebook.com/tssmultisports",
          "https://instagram.com/tssmultisports",
          "https://twitter.com/tssmultisports"
        ]}
        reviews={{
          ratingValue: 4.8,
          reviewCount: 45
        }}
      />

      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-background to-muted flex items-center py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
              Find Your Local TSS Multisports
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              We have multiple locations across Sportsville and surrounding areas, making it easy for families and seniors to access our professional football coaching programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white gap-2">
                View Map <MapPin className="h-4 w-4" />
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
                src="/locations-hero-1920x800-sports-facilities.png"
                alt="Sports Facilities"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="w-full py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Locations</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {locations.map((location) => (
                <Card key={location.id} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-red-600" />
                      {location.name}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {location.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                      <div>
                        <p className="font-medium">{location.address.streetAddress}</p>
                        <p className="text-sm text-muted-foreground">
                          {location.address.addressLocality}, {location.address.addressRegion} {location.address.postalCode}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{location.phone}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{location.email}</span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground mt-1" />
                      <div className="text-sm">
                        <p className="font-medium mb-1">Opening Hours:</p>
                        <ul className="space-y-1 text-muted-foreground">
                          {location.openingHours.slice(0, 3).map((hours, index) => (
                            <li key={index}>
                              {hours.dayOfWeek}: {hours.opens} - {hours.closes}
                            </li>
                          ))}
                          {location.openingHours.length > 3 && (
                            <li className="text-xs">+ {location.openingHours.length - 3} more days</li>
                          )}
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Programs Offered:</p>
                      <div className="flex flex-wrap gap-1">
                        {location.programs.slice(0, 3).map((program, index) => (
                          <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                            {program}
                          </span>
                        ))}
                        {location.programs.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                            +{location.programs.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/locations/${location.id}`}>
                      <Button className="w-full gap-2">
                        View Details <MapPin className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="w-full py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">We Serve These Areas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {["Sportsville", "North District", "South District", "East District", "West District", "Northern Suburbs", "Southern Communities", "Eastern Areas", "Western Communities", "Central City", "Local Towns", "Surrounding Villages"].map((area, index) => (
                <div key={index} className="text-center p-4 bg-background rounded-lg">
                  <p className="font-medium">{area}</p>
                  <p className="text-sm text-muted-foreground">Football Programs</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Can't Find Your Area?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              We're expanding our services! Contact us to inquire about programs in your area or to discuss bringing TSS Multisports to your community.
            </p>
            <Button variant="secondary" size="lg">
              Contact Us Today
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}