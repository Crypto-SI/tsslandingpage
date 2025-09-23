import Schema from './Schema';

interface LocationSchemaProps {
  name: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geoCoordinates?: {
    latitude: string;
    longitude: string;
  };
  openingHours?: {
    dayOfWeek: string;
    opens: string;
    closes: string;
  }[];
  phone?: string;
  email?: string;
  website?: string;
  image?: string;
  hasMap?: string;
  servesArea?: string[];
  facilities?: string[];
}

export default function LocationSchema({
  name,
  description,
  address,
  geoCoordinates,
  openingHours,
  phone,
  email,
  website,
  image,
  hasMap,
  servesArea = [],
  facilities = []
}: LocationSchemaProps) {
  const locationData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": name,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    ...(geoCoordinates && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": geoCoordinates.latitude,
        "longitude": geoCoordinates.longitude
      }
    }),
    ...(openingHours && {
      "openingHours": openingHours.map(hours => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": hours.dayOfWeek,
        "opens": hours.opens,
        "closes": hours.closes
      }))
    }),
    ...(phone && {
      "telephone": phone
    }),
    ...(email && {
      "email": email
    }),
    ...(website && {
      "url": website
    }),
    ...(image && {
      "image": image
    }),
    ...(hasMap && {
      "hasMap": hasMap
    }),
    ...(servesArea.length > 0 && {
      "areaServed": servesArea.map(area => ({
        "@type": "Place",
        "name": area
      }))
    }),
    ...(facilities.length > 0 && {
      "availableFacility": facilities.map(facility => ({
        "@type": "SportsActivityLocation",
        "name": facility
      }))
    }),
    "isAccessibleForFree": false,
    "servesCuisine": "Sports Activities",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "GBP"
  };

  return <Schema type="SportsActivityLocation" data={locationData} />;
}