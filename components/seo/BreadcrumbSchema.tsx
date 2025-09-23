import Schema from './Schema';

interface Breadcrumb {
  position: number;
  name: string;
  item: string;
}

interface BreadcrumbSchemaProps {
  breadcrumbs: Breadcrumb[];
}

export default function BreadcrumbSchema({ breadcrumbs }: BreadcrumbSchemaProps) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": breadcrumb.position,
      "name": breadcrumb.name,
      "item": breadcrumb.item
    }))
  };

  return <Schema type="BreadcrumbList" data={breadcrumbData} />;
}