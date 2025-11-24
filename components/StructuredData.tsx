export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "GRADA",
    "description": "Expert customer insight and strategy consulting",
    "url": "https://grada.com.au",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "serviceType": [
      "Customer Insight",
      "Strategy Consulting",
      "Customer Experience",
      "Design Thinking",
      "Business Strategy"
    ],
    "priceRange": "$$"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "GRADA",
    "description": "Customer insight & strategy consulting",
    "url": "https://grada.com.au",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}

