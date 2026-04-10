import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: "Best Digital Marketing  Agency in Indore | Digital Success Solutions",
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
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          as="script"
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
