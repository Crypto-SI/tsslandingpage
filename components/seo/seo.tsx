import Head from 'next/head';
import { ReactNode } from 'react';

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
      </Head>
      {children}
    </>
  );
}