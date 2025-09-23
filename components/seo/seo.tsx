import Head from 'next/head';
import { ReactNode } from 'react';
import EventSchema from './EventSchema';
import CourseSchema from './CourseSchema';
import FAQSchema from './FAQSchema';
import ReviewSchema from './ReviewSchema';
import EATSchema from './EATSchema';
import OrganizationSchema from './OrganizationSchema';
import LocalBusinessSchema from './LocalBusinessSchema';
import BreadcrumbSchema from './BreadcrumbSchema';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  locale?: string;
  siteName?: string;
  additionalMetaTags?: { [key: string]: string };
  children?: ReactNode;
  
  // Enhanced Schema Props
  events?: any[];
  courses?: any[];
  faqs?: { questionName: string; acceptedAnswerText: string }[];
  reviews?: {
    reviews: {
      author: string;
      datePublished: string;
      reviewRating: { ratingValue: number };
      reviewBody: string;
      itemReviewed?: string;
    }[];
    aggregateRating: { ratingValue: number; reviewCount: number };
  };
  
  // E-E-A-T Schema Props
  eatData?: {
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
  };
  
  // Advanced Schema Props
  organizationData?: {
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
  };
  
  localBusinessData?: {
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
    areaServed?: string[];
  };
  
  breadcrumbs?: {
    position: number;
    name: string;
    item: string;
  }[];
}

export default function SEO({
  title,
  description,
  keywords = [],
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonicalUrl,
  robots = 'index, follow',
  author,
  publishedTime,
  modifiedTime,
  locale = 'en_GB',
  siteName = 'TSS Multisports',
  additionalMetaTags,
  children,
  events,
  courses,
  faqs,
  reviews,
  eatData,
  organizationData,
  localBusinessData,
  breadcrumbs,
}: SEOProps) {
  const fullTitle = ogTitle || `${title} | ${siteName}`;
  const fullDescription = ogDescription || description;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tssmultisports.com';
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullOgUrl = ogUrl ? `${siteUrl}${ogUrl}` : siteUrl;
  const fullOgImage = ogImage ? `${siteUrl}${ogImage}` : `${siteUrl}/images/og-default.jpg`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    "name": siteName,
    "description": description,
    "url": siteUrl,
    "logo": `${siteUrl}/images/logo.png`,
    "image": `${siteUrl}/images/club-image.jpg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Sports Avenue",
      "addressLocality": "Sportsville",
      "addressRegion": "UK",
      "postalCode": "12345",
      "addressCountry": "GB"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-1234-567890",
      "contactType": "customer service",
      "email": "info@tssmultisports.com"
    },
    "sameAs": [
      "https://facebook.com/tssmultisports",
      "https://instagram.com/tssmultisports",
      "https://twitter.com/tssmultisports"
    ]
  };

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={fullDescription} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta name="author" content={author || siteName} />
        <meta name="robots" content={robots} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={fullCanonicalUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={fullDescription} />
        <meta property="og:image" content={fullOgImage} />
        <meta property="og:url" content={fullOgUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content={locale} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={twitterTitle || fullTitle} />
        <meta name="twitter:description" content={twitterDescription || fullDescription} />
        <meta name="twitter:image" content={twitterImage || fullOgImage} />
        
        {/* Additional Meta Tags */}
        {publishedTime && <meta property="article:published_time" content={publishedTime} />}
        {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        
        {/* Additional meta tags */}
        {additionalMetaTags &&
          Object.entries(additionalMetaTags).map(([key, value]) => (
            <meta key={key} name={key} content={value} />
          ))}
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Enhanced Structured Data */}
        {events && events.map((event, index) => (
          <EventSchema key={`event-${index}`} {...event} />
        ))}
        
        {courses && courses.map((course, index) => (
          <CourseSchema key={`course-${index}`} {...course} />
        ))}
        
        {faqs && faqs.length > 0 && <FAQSchema mainEntity={faqs} />}
        
        {reviews && (
          <ReviewSchema
            reviews={reviews.reviews}
            aggregateRating={reviews.aggregateRating}
          />
        )}
        
        {eatData && <EATSchema {...eatData} />}
        
        {/* Advanced Structured Data */}
        {organizationData && <OrganizationSchema {...organizationData} />}
        
        {localBusinessData && <LocalBusinessSchema {...localBusinessData} />}
        
        {breadcrumbs && <BreadcrumbSchema breadcrumbs={breadcrumbs} />}
      </Head>
      {children}
    </>
  );
}