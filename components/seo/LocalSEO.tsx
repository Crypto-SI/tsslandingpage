import { ReactNode } from 'react';

interface LocalSEOProps {
  businessName: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  phone: string;
  email: string;
  website: string;
  serviceAreas: string[];
  geoCoordinates?: {
    latitude: string;
    longitude: string;
  };
  openingHours?: {
    dayOfWeek: string;
    opens: string;
    closes: string;
  }[];
  sameAs?: string[];
  reviews?: {
    ratingValue: number;
    reviewCount: number;
  };
  children?: ReactNode;
}

export default function LocalSEO({
  businessName,
  description,
  address,
  phone,
  email,
  website,
  serviceAreas,
  geoCoordinates,
  openingHours,
  sameAs = [],
  reviews,
  children
}: LocalSEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "description": description,
    "url": website,
    "telephone": phone,
    "email": email,
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
    ...(sameAs.length > 0 && {
      "sameAs": sameAs
    }),
    ...(reviews && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": reviews.ratingValue,
        "reviewCount": reviews.reviewCount
      }
    }),
    "areaServed": serviceAreas.map(area => ({
      "@type": "Place",
      "name": area
    })),
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
    ]
  };

  return (
    <>
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      {/* Local Meta Tags */}
      <meta name="geo.region" content={address.addressCountry} />
      <meta name="geo.placename" content={address.addressLocality} />
      <meta name="geo.position" content={
        geoCoordinates ? `${geoCoordinates.latitude};${geoCoordinates.longitude}` : ''
      } />
      <meta name="ICBM" content={
        geoCoordinates ? `${geoCoordinates.latitude}, ${geoCoordinates.longitude}` : ''
      } />
      
      {/* Local Keywords */}
      <meta name="keywords" content={
        [
          businessName,
          address.addressLocality,
          "football coaching",
          "after school football",
          "walking football",
          "toddler football",
          "children's sports",
          "sports activities",
          ...serviceAreas
        ].join(', ')
      } />
      
      {children}
    </>
  );
}