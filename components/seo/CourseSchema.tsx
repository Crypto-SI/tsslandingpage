import Schema from './Schema';
import { ReactNode } from 'react';

interface CourseOffer {
  price: string;
  priceCurrency: string;
  url?: string;
  availability?: 'https://schema.org/InStock' | 'https://schema.org/OutOfStock' | 'https://schema.org/PreOrder';
}

interface CourseSchemaProps {
  name: string;
  description: string;
  provider: string;
  educationalLevel: string;
  courseMode: string;
  duration: string;
  offers: CourseOffer[];
  url?: string;
  image?: string;
  audience?: string;
  learningResourceType?: string;
}

export default function CourseSchema({
  name,
  description,
  provider,
  educationalLevel,
  courseMode,
  duration,
  offers,
  url,
  image,
  audience,
  learningResourceType = 'Course',
}: CourseSchemaProps) {
  const courseData = {
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": "https://tssmultisports.com"
    },
    "educationalLevel": educationalLevel,
    "courseMode": courseMode,
    "duration": duration,
    "offers": offers.map(offer => ({
      "@type": "Offer",
      "price": offer.price,
      "priceCurrency": offer.priceCurrency,
      ...(offer.url && { "url": offer.url }),
      ...(offer.availability && { "availability": offer.availability })
    })),
    "url": url || "https://tssmultisports.com",
    "image": image || "https://tssmultisports.com/images/og-default.jpg",
    ...(audience && { "audience": { "@type": "Audience", "name": audience } }),
    "isAccessibleForFree": false,
    "coursePrerequisites": "Basic fitness and enthusiasm for football",
    "typicalAgeRange": "3-12 years, 50+ years depending on program"
  };

  return <Schema type={learningResourceType} data={courseData} />;
}