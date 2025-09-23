import Schema from './Schema';
import { ReactNode } from 'react';

interface Review {
  author: string;
  datePublished: string;
  reviewRating: {
    ratingValue: number;
    bestRating?: number;
    worstRating?: number;
  };
  reviewBody: string;
  itemReviewed?: string;
}

interface AggregateRating {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

interface ReviewSchemaProps {
  reviews: Review[];
  aggregateRating: AggregateRating;
  url?: string;
  image?: string;
}

export default function ReviewSchema({
  reviews,
  aggregateRating,
  url,
  image,
}: ReviewSchemaProps) {
  const reviewData = {
    "name": "TSS Multisports Football Programs",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": aggregateRating.bestRating || 5,
      "worstRating": aggregateRating.worstRating || 1,
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.datePublished,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.reviewRating.ratingValue,
        "bestRating": review.reviewRating.bestRating || 5,
        "worstRating": review.reviewRating.worstRating || 1,
      },
      "reviewBody": review.reviewBody,
      ...(review.itemReviewed && { "itemReviewed": review.itemReviewed }),
    })),
    ...(url && { "url": url }),
    ...(image && { "image": image })
  };

  return <Schema type="Product" data={reviewData} />;
}