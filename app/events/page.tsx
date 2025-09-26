"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Calendar, Clock, MapPin, Users, Award, Star, Filter, Search, SortAsc } from "lucide-react"
import AnimatedText from "@/components/ui/animated-text"
import AnimatedComponent from "@/components/ui/animated-component"
import SEO from "@/components/seo/seo"

// Event data structure
interface Event {
  id: string
  name: string
  description: string
  type: 'regular' | 'special' | 'tournament'
  program: 'after-school' | 'toddler' | 'walking' | 'holiday' | 'multisports'
  startDate: string
  endDate: string
  location: string
  ageGroup: string
  price?: string
  capacity?: number
  registered?: number
  imageUrl?: string
  instructor?: string
  requirements?: string[]
  highlights?: string[]
}

// Mock event data
const events: Event[] = [
  {
    id: "1",
    name: "After School Football Session",
    description: "Professional football coaching for children aged 5-12, focusing on skill development and teamwork in a fun environment.",
    type: "regular",
    program: "after-school",
    startDate: "2025-09-23T16:00:00+00:00",
    endDate: "2025-09-23T17:30:00+00:00",
    location: "Main Pitch, Sportsville",
    ageGroup: "5-12 years",
    price: "£12",
    capacity: 20,
    registered: 15,
    instructor: "Coach Sarah Johnson",
    requirements: ["Sports clothing", "Trainers", "Water bottle"],
    highlights: ["Professional coaching", "Small group sizes", "Skill development"],
    imageUrl: "/after-school-hero-1920x800-children-football-training.png"
  },
  {
    id: "2",
    name: "Parent & Toddler Football",
    description: "Fun introduction to football fundamentals with age-appropriate activities for toddlers aged 3-5.",
    type: "regular",
    program: "toddler",
    startDate: "2025-09-24T09:30:00+00:00",
    endDate: "2025-09-24T10:30:00+00:00",
    location: "Indoor Hall, Sportsville",
    ageGroup: "3-5 years",
    price: "£15",
    capacity: 15,
    registered: 12,
    instructor: "Coach Emma Wilson",
    requirements: ["Comfortable clothing", "Indoor trainers", "Parent participation"],
    highlights: ["Parent participation", "Coordination development", "Social skills"],
    imageUrl: "/toddler-hero-1920x800-parent-child-football.png"
  },
  {
    id: "3",
    name: "Walking Football Social Session",
    description: "Low-impact football perfect for maintaining fitness and enjoying social sport for ages 50+.",
    type: "regular",
    program: "walking",
    startDate: "2025-09-24T10:00:00+00:00",
    endDate: "2025-09-24T11:30:00+00:00",
    location: "Indoor Pitch, Sportsville",
    ageGroup: "50+ years",
    price: "£8",
    capacity: 25,
    registered: 18,
    instructor: "Coach John Davis",
    requirements: ["Comfortable clothing", "Indoor/outdoor trainers", "Water bottle"],
    highlights: ["Health benefits", "Social connection", "Inclusive environment"],
    imageUrl: "/walking-hero-1920x800-senior-football.png"
  },
  {
    id: "4",
    name: "October Half-Term Football Camp",
    description: "Intensive 5-day football camp during school holidays with professional coaching and match play.",
    type: "special",
    program: "holiday",
    startDate: "2025-10-27T09:00:00+00:00",
    endDate: "2025-10-31T16:00:00+00:00",
    location: "Sportsville Main Facility",
    ageGroup: "6-12 years",
    price: "£175",
    capacity: 30,
    registered: 8,
    instructor: "Coaching Team",
    requirements: ["Football kit", "Lunch", "Water bottle", "Sun protection"],
    highlights: ["5 days of coaching", "Match play", "Certificate", "Progress tracking"],
    imageUrl: "/events-holiday-800x600-camps.png"
  },
  {
    id: "5",
    name: "End of Season Tournament",
    description: "Exciting tournament for all age groups to showcase skills and compete for trophies.",
    type: "tournament",
    program: "multisports",
    startDate: "2025-11-15T10:00:00+00:00",
    endDate: "2025-11-15T16:00:00+00:00",
    location: "Main Sports Complex",
    ageGroup: "5-16 years",
    price: "£25",
    capacity: 100,
    registered: 45,
    instructor: "Tournament Director",
    requirements: ["Team kit", "Boots", "Shin pads", "Water bottle"],
    highlights: ["Trophies", "Professional refereeing", "Family entertainment", "Refreshments"],
    imageUrl: "/events-special-800x600-tournaments.png"
  },
  {
    id: "6",
    name: "Christmas Multisports Fun Day",
    description: " festive multisports activities including football, dodgeball, and team games with a Christmas theme.",
    type: "special",
    program: "multisports",
    startDate: "2025-12-20T10:00:00+00:00",
    endDate: "2025-12-20T15:00:00+00:00",
    location: "Indoor Sports Hall",
    ageGroup: "4-12 years",
    price: "£20",
    capacity: 40,
    registered: 22,
    instructor: "Coaching Team",
    requirements: ["Sports clothing", "Trainers", "Packed lunch", "Christmas spirit"],
    highlights: ["Christmas theme", "Multiple sports", "Prizes", "Hot chocolate"],
    imageUrl: "/events-regular-800x600-weekly-sessions.png"
  }
]

// Filter and sort functions
const filterEvents = (events: Event[], filters: {
  type?: string
  program?: string
  search?: string
}) => {
  return events.filter(event => {
    if (filters.type && event.type !== filters.type) return false
    if (filters.program && event.program !== filters.program) return false
    if (filters.search && !event.name.toLowerCase().includes(filters.search.toLowerCase()) && 
        !event.description.toLowerCase().includes(filters.search.toLowerCase())) return false
    return true
  })
}

const sortEvents = (events: Event[], sortBy: 'date' | 'name' | 'price') => {
  return [...events].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      case 'name':
        return a.name.localeCompare(b.name)
      case 'price':
        return (a.price ? parseFloat(a.price.replace('£', '')) : 0) - (b.price ? parseFloat(b.price.replace('£', '')) : 0)
      default:
        return 0
    }
  })
}

// Event card component
const EventCard = ({ event }: { event: Event }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'regular': return 'bg-blue-100 text-blue-800'
      case 'special': return 'bg-purple-100 text-purple-800'
      case 'tournament': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getProgramIcon = (program: string) => {
    switch (program) {
      case 'after-school': return '🏫'
      case 'toddler': return '👶'
      case 'walking': return '🚶'
      case 'holiday': return '🏖️'
      case 'multisports': return '⚽'
      default: return '🎯'
    }
  }

  const availableSpots = event.capacity ? event.capacity - (event.registered || 0) : 0

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 relative">
        {event.imageUrl ? (
          <img
            src={event.imageUrl}
            alt={event.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
            <span className="text-4xl">{getProgramIcon(event.program)}</span>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{getProgramIcon(event.program)}</span>
          <h3 className="text-xl font-semibold text-gray-900">{event.name}</h3>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(event.startDate)}</span>
            <span>•</span>
            <span>{formatTime(event.startDate)} - {formatTime(event.endDate)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Users className="h-4 w-4" />
            <span>{event.ageGroup}</span>
            {event.capacity && (
              <>
                <span>•</span>
                <span>{availableSpots} spots available</span>
              </>
            )}
          </div>
          {event.price && (
            <div className="flex items-center gap-2 text-sm font-medium text-green-600">
              <span>{event.price}</span>
            </div>
          )}
        </div>

        {event.highlights && event.highlights.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Highlights:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {event.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-2">
          <Link href={`/register?eventId=${event.id}`} className="flex-1 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors text-center">
            Register Now
          </Link>
          <Link href={`/events/${event.id}`} className="flex-1 border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors text-center">
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState<string>('')
  const [selectedProgram, setSelectedProgram] = useState<string>('')
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'price'>('date')

  // Get unique filters
  const eventTypes = Array.from(new Set(events.map(event => event.type)))
  const programs = Array.from(new Set(events.map(event => event.program)))

  // Filter and sort events
  const filteredEvents = filterEvents(events, {
    type: selectedType,
    program: selectedProgram,
    search: searchTerm
  })

  const sortedEvents = sortEvents(filteredEvents, sortBy)

  return (
    <>
      <SEO
        title="Events & Sessions | TSS Multisports"
        description="Discover upcoming football sessions, holiday camps, tournaments, and special events at TSS Multisports. Book your place today!"
        keywords={[
          "football events",
          "sports sessions",
          "holiday camps",
          "football tournaments",
          "after school football",
          "toddler football",
          "walking football",
          "children's sports",
          "football coaching",
          "sports activities",
          "football events near me",
          "kids football camps",
          "football training sessions"
        ]}
        ogTitle="Events & Sessions | TSS Multisports"
        ogDescription="Discover upcoming football sessions, holiday camps, tournaments, and special events at TSS Multisports."
        ogImage="/events-hero-1920x800-calendar-sports.png"
        canonicalUrl="/events"
        publishedTime="2025-09-20T00:00:00+00:00"
        modifiedTime="2025-09-20T00:00:00+00:00"
        additionalMetaTags={{
          "page-type": "events",
          "total-events": events.length.toString(),
          "featured-events": "holiday camps, tournaments"
        }}
        events={events.map(event => ({
          name: event.name,
          description: event.description,
          startDate: event.startDate,
          endDate: event.endDate,
          location: event.location,
          organizer: "TSS Multisports",
          eventType: event.type === 'tournament' ? 'SportsEvent' : 'Event',
          duration: "PT1H30M"
        }))}
        faqs={[
          {
            questionName: "How do I register for events?",
            acceptedAnswerText: "You can register for any event by clicking the 'Register Now' button on the event card. You'll be taken to a registration form where you can provide your details and payment information."
          },
          {
            questionName: "What is the cancellation policy?",
            acceptedAnswerText: "We offer a 48-hour cancellation policy for all regular sessions. For holiday camps and special events, we require 7 days notice for a full refund."
          },
          {
            questionName: "What should my child bring to sessions?",
            acceptedAnswerText: "Children should wear comfortable sports clothing and appropriate footwear. All equipment is provided, but they should bring a water bottle and any necessary medications."
          },
          {
            questionName: "Are your coaches qualified?",
            acceptedAnswerText: "Yes, all our coaches are FA qualified with extensive experience working with children. They are DBS checked and trained in first aid and safeguarding."
          }
        ]}
        reviews={{
          reviews: [
            {
              author: "Sarah Johnson",
              datePublished: "2025-09-15",
              reviewRating: { ratingValue: 5 },
              reviewBody: "My son absolutely loves the holiday camps! The coaches are fantastic and he's developed so much confidence and made new friends.",
              itemReviewed: "Events Program"
            },
            {
              author: "Mike Thompson",
              datePublished: "2025-09-10",
              reviewRating: { ratingValue: 4 },
              reviewBody: "Great variety of events and sessions. The tournament was well organized and my daughter really enjoyed the competitive experience.",
              itemReviewed: "Events Program"
            }
          ],
          aggregateRating: {
            ratingValue: 4.5,
            reviewCount: 2
          }
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
                text="Events & Sessions"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              />
              
              <AnimatedComponent 
                animation="fadeIn" 
                delay={0.3}
                className="text-xl text-muted-foreground mb-8"
              >
                Discover upcoming football sessions, holiday camps, tournaments, and special events
              </AnimatedComponent>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#register" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Register Interest
                </Link>
                <Link href="#contact" className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="">All Types</option>
                  {eventTypes.map(type => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>

                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                >
                  <option value="">All Programs</option>
                  {programs.map(program => (
                    <option key={program} value={program}>
                      {program.charAt(0).toUpperCase() + program.slice(1).replace('-', ' ')}
                    </option>
                  ))}
                </select>

                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'date' | 'name' | 'price')}
                >
                  <option value="date">Sort by Date</option>
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Upcoming Events
                </h2>
                <p className="text-lg text-muted-foreground">
                  {sortedEvents.length} events found
                </p>
              </div>

              {sortedEvents.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className="text-xl font-semibold mb-2">No events found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your filters to see more events.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sortedEvents.map((event) => (
                    <AnimatedComponent key={event.id} animation="slideUp" delay={0.1}>
                      <EventCard event={event} />
                    </AnimatedComponent>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <AnimatedComponent animation="slideUp" delay={0.1}>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {events.length}+
                  </div>
                  <div className="text-muted-foreground">
                    Events This Year
                  </div>
                </AnimatedComponent>

                <AnimatedComponent animation="slideUp" delay={0.2}>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {events.reduce((sum, event) => sum + (event.registered || 0), 0)}+
                  </div>
                  <div className="text-muted-foreground">
                    Participants
                  </div>
                </AnimatedComponent>

                <AnimatedComponent animation="slideUp" delay={0.3}>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {programs.length}
                  </div>
                  <div className="text-muted-foreground">
                    Programs
                  </div>
                </AnimatedComponent>

                <AnimatedComponent animation="slideUp" delay={0.4}>
                  <div className="text-4xl font-bold text-primary mb-2">
                    4.8★
                  </div>
                  <div className="text-muted-foreground">
                    Average Rating
                  </div>
                </AnimatedComponent>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join the Action?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Register for any of our events and start your football journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Register Now
                </Link>
                <Link href="/contact" className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}