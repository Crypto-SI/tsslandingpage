import Schema from './Schema';

interface OrganizationSchemaProps {
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
  awards?: string[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  serviceArea?: {
    type: string;
    name: string;
  }[];
}

export default function OrganizationSchema({
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
  awards,
  aggregateRating,
  serviceArea,
}: OrganizationSchemaProps) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
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
      "email": contactPoint.email,
      "availableLanguage": ["en-GB", "en-US"]
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
    ...(awards && { "award": awards }),
    ...(aggregateRating && { "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount
    }}),
    ...(serviceArea && { "serviceArea": serviceArea.map(area => ({
      "@type": area.type,
      "name": area.name
    }))}),
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
    "hasPart": {
      "@type": "SportsActivityLocation",
      "name": `${name} Facilities`,
      "description": "Professional sports facilities for football coaching and multisports programs",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": address.streetAddress,
        "addressLocality": address.addressLocality,
        "addressRegion": address.addressRegion,
        "postalCode": address.postalCode,
        "addressCountry": address.addressCountry
      },
      "openingHours": openingHours,
      "image": image
    }
  };

  return <Schema type="Organization" data={organizationData} />;
}