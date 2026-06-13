import LeadPopup from "@/components/LeadPopup";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import FloatingCTA from "@/components/FloatingCTA";
import GoToTop from "@/components/GoToTop";
import Script from "next/script";
import LocalSchema from "@/components/LocalSchema";
import FacebookPixel from "@/components/FacebookPixel";

export const metadata = {
  metadataBase: new URL('https://digitalsuccesssolutions.in'),
  title: {
    default: "Best Digital Marketing Agency in Indore | Digital Success Solutions",
    template: "%s | Digital Success Solutions",
  },
  description:
    "Digital Success Solutions is the best digital marketing Agency in Indore, offering SEO, SMM, PPC, and web solutions to grow your business online.",
  keywords:
    "Digital Marketing, Digital Marketing Company in Indore, Best Digital Marketing Agency in Indore, Website Development, Website Development Company in Indore, Performance Marketing, Social Media Marketing, Social Media Management, SEO Optimization, Search Engine Optimization Services, Influencer Marketing, E-Commerce App Development, Pay Per Click, PPC Advertising, Online Marketing Services, Branding Agency in Indore",
  verification: {
    google: "twxBSbMIu8jvSeKn0jTy_qanRCI7907_XKsPLPCYJug",
  },
  alternates: {
    canonical: "https://digitalsuccesssolutions.in/",
  },
  icons: {
    icon: "/favicon.jpeg",
  },
  openGraph: {
    title: 'Best Digital Marketing Agency in Indore | Digital Success Solutions',
    description: 'Digital Success Solutions is the best digital marketing Agency in Indore, offering SEO, SMM, PPC, and web solutions to grow your business online.',
    url: 'https://digitalsuccesssolutions.in',
    siteName: 'Digital Success Solutions',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Digital Success Solutions',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Marketing Agency in Indore | Digital Success Solutions',
    description: 'Digital Success Solutions is the best digital marketing Agency in Indore, offering SEO, SMM, PPC, and web solutions to grow your business online.',
    images: ['/images/logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="relative">
      <head>
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          as="script"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1747CPHFPB"
          strategy="afterInteractive"
        />
        <Script strategy="afterInteractive" id="gtag-config">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1747CPHFPB');
          `}
        </Script>
        <FacebookPixel />
      </head>
      <body suppressHydrationWarning className="relative">
        <ClientLayout>
          <LocalSchema />
          {children}
          {/* <LeadPopup />  */}
          <FloatingCTA />
          <GoToTop />
        </ClientLayout>
      </body>
    </html>
  );
}
