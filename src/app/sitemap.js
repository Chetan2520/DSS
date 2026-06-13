export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = 'https://digitalsuccesssolutions.in';

  const routes = [
    { url: '', priority: 1.0 },
    { url: '/about-us', priority: 0.8 },
    { url: '/contact-us', priority: 0.8 },
    { url: '/lets-connect', priority: 0.8 },
    { url: '/portfoliopage', priority: 0.8 },
    { url: '/blogs', priority: 0.8 },
    { url: '/website-development-company-in-india', priority: 0.9 },
    { url: '/ecommerce-development-company-in-indore', priority: 0.9 },
    { url: '/graphic-designing-services-in-indore', priority: 0.9 },
    { url: '/performance-marketing-agency-in-indore', priority: 0.9 },
    { url: '/social-media-marketing-company-in-indore', priority: 0.9 },
    { url: '/seo-company-in-indore', priority: 0.9 },
    { url: '/influencer-marketing-agency-in-indore', priority: 0.9 },
    { url: '/privacy-policy', priority: 0.5 },
    { url: '/terms-and-conditions', priority: 0.5 },
    { url: '/blogs/how-to-choose-the-best-digital-marketing-company-in-indore', priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route.priority,
  }));
}
