import Schema from './Schema';
import { ReactNode } from 'react';

interface FAQItem {
  questionName: string;
  acceptedAnswerText: string;
}

interface FAQSchemaProps {
  mainEntity: FAQItem[];
  url?: string;
  image?: string;
}

export default function FAQSchema({
  mainEntity,
  url,
  image,
}: FAQSchemaProps) {
  const faqData = {
    "mainEntity": mainEntity.map(item => ({
      "@type": "Question",
      "name": item.questionName,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.acceptedAnswerText
      }
    })),
    ...(url && { "url": url }),
    ...(image && { "image": image })
  };

  return <Schema type="FAQPage" data={faqData} />;
}