import HomeClient from "./HomeClient";

export const metadata = {
  title: "Best Digital Marketing Agency in Indore | Digital Success Solutions",
  description: "Indore's best Digital Marketing Agency, delivering powerful SEO, PPC, SMM & Website Development services to 950+ brands with proven ROI-driven results.",
  keywords: "Digital Marketing, Digital Marketing Company in Indore, Best Digital Marketing Agency in Indore, Website Development, Website Development Company in Indore, SEO Optimization, Paid Ads"
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://digitalsuccesssolutions.in/#organization",
        "name": "Digital Success Solutions",
        "url": "https://digitalsuccesssolutions.in/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://digitalsuccesssolutions.in/images/logo.png"
        },
        "image": "https://digitalsuccesssolutions.in/images/final-services.jpeg",
        "description": "Indore's best Digital Marketing Agency, delivering powerful SEO, PPC, SMM & Website Development services to 950+ brands with proven ROI-driven results.",
        "telephone": "+916264398990",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Scheme No 53, Vijay Nagar",
          "addressLocality": "Indore",
          "addressRegion": "MP",
          "postalCode": "452010",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 22.7533,
          "longitude": 75.8937
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "19:00"
        },
        "sameAs": [
          "https://in.linkedin.com/company/dss-digital-success-solutions-llp",
          "https://www.instagram.com/digitalsuccess_solutions/",
          "https://www.facebook.com/p/Digital-Success-Solutions-61567317789854/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://digitalsuccesssolutions.in/#website",
        "url": "https://digitalsuccesssolutions.in/",
        "name": "Digital Success Solutions",
        "description": "Best Digital Marketing Agency in Indore | Digital Success Solutions",
        "publisher": {
          "@id": "https://digitalsuccesssolutions.in/#organization"
        }
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </main>
  );
}
