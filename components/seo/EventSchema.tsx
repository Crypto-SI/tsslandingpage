import Schema from './Schema';
import { ReactNode } from 'react';

interface EventSchemaProps {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  organizer: string;
  image?: string;
  url?: string;
  eventType?: string;
  duration?: string;
}

export default function EventSchema({
  name,
  description,
  startDate,
  endDate,
  location,
  organizer,
  image,
  url,
  eventType = 'Event',
  duration,
}: EventSchemaProps) {
  const eventData = {
    "name": name,
    "description": description,
    "startDate": startDate,
    "endDate": endDate,
    "location": {
      "@type": "Place",
      "name": location,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Sports Avenue",
        "addressLocality": "Sportsville",
        "addressRegion": "UK",
        "postalCode": "12345",
        "addressCountry": "GB"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": organizer,
      "url": "https://tssmultisports.com"
    },
    "image": image || "https://tssmultisports.com/images/og-default.jpg",
    "url": url || "https://tssmultisports.com",
    "eventStatus": "EventScheduled",
    "eventAttendanceMode": "MixedEventAttendanceMode",
    ...(duration && { "duration": duration })
  };

  return <Schema type={eventType} data={eventData} />;
}