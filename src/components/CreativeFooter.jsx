"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  const footerRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const socialLinks = [
    {
      icon: <FaLinkedinIn size={14} />,
      href: "https://in.linkedin.com/company/dss-digital-success-solutions-llp",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram size={16} />,
      href: "https://www.instagram.com/digitalsuccess_solutions/",
      label: "Instagram",
    },
    {
      icon: <FaFacebookF size={14} />,
      href: "https://www.facebook.com/p/Digital-Success-Solutions-61567317789854/",
      label: "Facebook",
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#000000] text-white pt-10 md:pt-24 pb-12 overflow-hidden font-sans"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/footer-img.webp"
          alt="Footer Background"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Top-to-bottom black gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Links */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-24 pt-8">
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="block shrink-0">
              <img
                src="/images/logo.png"
                alt="DSS Logo"
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Digital Success Solutions. We are a global digital agency crafting
              world-class digital experiences for ambitious brands.
            </p>
            <div className="flex gap-4 mt-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-sm md:text-2xl   text-white mb-6">
              Explore
            </h4>
            <ul className="flex flex-col gap-4 text-white/70 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-white transition-colors"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/portfoliopage"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-white transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/lets-connect"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-sm md:text-2xl  text-white mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-4 text-white/70 text-sm">
              <li>
                <Link
                  href="/website-development-company-in-india"
                  className="hover:text-white transition-colors"
                >
                  Development
                </Link>
              </li>
              <li>
                <Link
                  href="/graphic-designing-services-in-indore"
                  className="hover:text-white transition-colors"
                >
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link
                  href="/performance-marketing-agency-in-indore"
                  className="hover:text-white transition-colors"
                >
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/social-media-marketing-company-in-indore"
                  className="hover:text-white transition-colors"
                >
                  Social
                </Link>
              </li>
              <li>
                <Link
                  href="/seo-company-in-indore"
                  className="hover:text-white transition-colors"
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/influencer-marketing-agency-in-indore"
                  className="hover:text-white transition-colors"
                >
                  Influencer
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-sm md:text-2xl    text-white mb-6">
              Indore HQ
            </h4>
            <div className="flex flex-col gap-4 text-white/70 text-sm leading-relaxed">
              <p>Scheme No 53, Vijay Nagar, Indore, MP – 452010</p>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="mailto:Info@digitalsuccesssolutions.in"
                  className="hover:text-white transition-colors"
                >
                  Info@digitalsuccesssolutions.in
                </a>
                <a
                  href="mailto:business@digitalsuccesssolutions.in"
                  className="hover:text-white transition-colors"
                >
                  business@digitalsuccesssolutions.in
                </a>
                <a
                  href="tel:+916264398990"
                  className="hover:text-white transition-colors"
                >
                  +91 62643 98990
                </a>
                <a
                  href="tel:+918718980114"
                  className="hover:text-white transition-colors"
                >
                  +91 87189 80114
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Container */}
        <div className="flex flex-col items-center pt-8   text-[10px] text-white   tracking-[0.15em] gap-4">
          <div className="text-center">
            © 2026 DSS LLP. All Rights Reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>


    </footer>
  );
}
