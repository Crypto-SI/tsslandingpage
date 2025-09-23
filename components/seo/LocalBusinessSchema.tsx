import Schema from './Schema';

interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  url: string;
  logo: string;
  image: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    telephone: string;
    contactType: string;
    email: string;
  };
  sameAs: string[];
  openingHours?: {
    dayOfWeek: string;
    opens: string;
    closes: string;
  }[];
  priceRange?: string;
  geo?: {
    latitude: string;
    longitude: string;
  };
  servesCuisine?: string;
  acceptsReservations?: boolean;
  menu?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  review?: {
    author: string;
    datePublished: string;
    reviewRating: {
      ratingValue: number;
    };
    reviewBody: string;
  }[];
  areaServed?: string[];
  hasMap?: string;
}

export default function LocalBusinessSchema({
  name,
  description,
  url,
  logo,
  image,
  address,
  contactPoint,
  sameAs,
  openingHours,
  priceRange,
  geo,
  servesCuisine,
  acceptsReservations,
  menu,
  aggregateRating,
  review,
  areaServed,
  hasMap,
}: LocalBusinessSchemaProps) {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "description": description,
    "url": url,
    "logo": logo,
    "image": image,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "geo": geo ? {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    } : undefined,
    "telephone": contactPoint.telephone,
    "email": contactPoint.email,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": contactPoint.telephone,
      "contactType": contactPoint.contactType,
      "email": contactPoint.email,
      "availableLanguage": ["en-GB", "en-US"]
    },
    "sameAs": sameAs,
    ...(openingHours && { "openingHours": openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.dayOfWeek,
      "opens": hours.opens,
      "closes": hours.closes
    }))}),
    ...(priceRange && { "priceRange": priceRange }),
    ...(servesCuisine && { "servesCuisine": servesCuisine }),
    ...(acceptsReservations !== undefined && { "acceptsReservations": acceptsReservations }),
    ...(menu && { "hasMenu": menu }),
    ...(aggregateRating && { "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount
    }}),
    ...(review && { "review": review.map(r => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": r.author
      },
      "datePublished": r.datePublished,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.reviewRating.ratingValue
      },
      "reviewBody": r.reviewBody
    }))}),
    ...(areaServed && { "areaServed": areaServed.map(area => ({
      "@type": "Place",
      "name": area
    }))}),
    ...(hasMap && { "hasMap": hasMap }),
    "currenciesAccepted": "GBP",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "knowsAbout": [
      "Football Coaching",
      "Children's Sports",
      "Youth Development",
      "Sports Activities",
      "After School Programs",
      "Walking Football",
      "Toddler Sports",
      "Community Sports"
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Football Coaching Programs",
        "description": "Professional football coaching for children and seniors",
        "provider": {
          "@type": "Organization",
          "name": name
        },
        "areaServed": areaServed || ["Sportsville", "UK"]
      }
    }
  };

  return <Schema type="LocalBusiness" data={localBusinessData} />;
}