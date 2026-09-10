export default function LocalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://digitalsuccesssolutions.in/#organization",
        "name": "Digital Success Solutions",
        "url": "https://digitalsuccesssolutions.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://digitalsuccesssolutions.in/images/logo.png"
        },
        "sameAs": [
          "https://www.facebook.com/digitalsuccesssolutions",
          "https://www.instagram.com/digitalsuccesssolutions/",
          "https://www.linkedin.com/company/digital-success-solutions"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://digitalsuccesssolutions.in/#localbusiness",
        "name": "Digital Success Solutions",
        "url": "https://digitalsuccesssolutions.in",
        "logo": "https://digitalsuccesssolutions.in/images/logo.png",
        "image": "https://digitalsuccesssolutions.in/images/logo.png",
        "description": "Indore's best Digital Marketing Agency, delivering powerful SEO, PPC, SMM & Website Development services to 950+ brands.",
        "telephone": "+91-9999999999", // Update with real number
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Indore",
          "addressRegion": "Madhya Pradesh",
          "addressCountry": "IN"
        },
        "priceRange": "$$",
        "areaServed": {
          "@type": "City",
          "name": "Indore"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
