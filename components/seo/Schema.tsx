import { ReactNode } from 'react';

interface SchemaProps {
  type: string;
  data: any;
}

export default function Schema({ type, data }: SchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}