import Schema from './Schema';

interface EATSchemaProps {
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
  foundingDate?: string;
  numberOfEmployees?: string;
  priceRange?: string;
  openingHours?: {
    dayOfWeek: string;
    opens: string;
    closes: string;
  }[];
}

export default function EATSchema({
  name,
  description,
  url,
  logo,
  image,
  address,
  contactPoint,
  sameAs,
  foundingDate,
  numberOfEmployees,
  priceRange,
  openingHours,
}: EATSchemaProps) {
  const eatData = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
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
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": contactPoint.telephone,
      "contactType": contactPoint.contactType,
      "email": contactPoint.email
    },
    "sameAs": sameAs,
    ...(foundingDate && { "foundingDate": foundingDate }),
    ...(numberOfEmployees && { "numberOfEmployees": numberOfEmployees }),
    ...(priceRange && { "priceRange": priceRange }),
    ...(openingHours && { "openingHours": openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.dayOfWeek,
      "opens": hours.opens,
      "closes": hours.closes
    }))}),
    "isAccessibleForFree": false,
    "servesCuisine": "Sports Activities",
    "hasMap": "https://maps.google.com/?q=123+Sports+Avenue,+Sportsville,+UK,+12345",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "GBP",
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Football Coaching Programs",
        "description": "Professional football coaching for children and seniors",
        "provider": {
          "@type": "Organization",
          "name": name
        }
      }
    }
  };

  return <Schema type="SportsClub" data={eatData} />;
}