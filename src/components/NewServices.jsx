"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Globe,
  Megaphone,
  Share2,
  Search,
  PenTool,
  ShoppingBag,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    desc: "Professional website solutions designed to help your business grow. From modern designs to fully functional platforms, we build what your brand needs.",
    icon: Globe,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    features: [
      "Static & Dynamic Websites",
      "WordPress, Shopify, MERN",
      "SSL, Hosting, Speed Opt",
      "Admin Panel Development",
      "E-commerce Store Setup",
      "Fully Responsive + SEO",
    ],
  },
  {
    title: "Digital Marketing (PPC)",
    desc: "Powerful PPC campaigns designed to bring you real, measurable growth. We optimize every campaign for maximum clicks, conversions, and ROI.",
    icon: Megaphone,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "group-hover:border-orange-500/50",
    features: [
      "Facebook & Instagram Ads",
      "Google Ads (Search/Display)",
      "Lead Generation",
      "Sales Funnels",
      "Audience Targeting",
      "Retargeting & Scaling",
    ],
  },
  {
    title: "Social Media Management",
    desc: "Professional social media solutions to grow your brand and engage your audience. We amplify your presence across platforms with creative content.",
    icon: Share2,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    features: [
      "12–15 Posts per month",
      "Reels & Motion Graphics",
      "Creative Storytelling",
      "Brand Consistency",
      "Page Optimization",
      "Monthly Analytics",
    ],
  },
  {
    title: "SEO Optimization",
    desc: "Improve your website’s visibility and rankings. Our strategies drive organic traffic, boost credibility, and deliver long-term growth.",
    icon: Search,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "group-hover:border-orange-500/50",
    features: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Backlink Building",
      "Local SEO",
      "Ranking Reports",
    ],
  },
  {
    title: "Branding & Design",
    desc: "Crafting designs that define your brand’s identity. From logos to complete brand systems, we create visuals that strengthen recognition.",
    icon: PenTool,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    features: [
      "Logo Design",
      "Packaging Design",
      "Catalogues & Brochures",
      "Visiting Cards",
      "Social Media Kit",
      "Brand Guidelines",
    ],
  },
  {
    title: "E-commerce Setup",
    desc: "Seamless solutions to launch and grow your online store. We provide everything to create a smooth, engaging, and profitable shopping experience.",
    icon: ShoppingBag,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "group-hover:border-orange-500/50",
    features: [
      "Shopify Store Setup",
      "Payment Gateway Integration",
      "Delivery Partner Setup",
      "Product Listing",
      "Conversion Optimization",
      "Inventory Management",
    ],
  },
  {
    title: "Local Business Growth",
    desc: "Strategies designed to boost your local presence. We create tailored plans that help your business attract more local customers.",
    icon: MapPin,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    features: [
      "GMB Profile Setup",
      "Local SEO",
      "Review Management",
      "Local Ads",
      "Reputation Building",
      "Location Growth Plans",
    ],
  },
];

export default function ServicesSection() {
  const containerRef = useRef(null);
  const [isGsapReady, setIsGsapReady] = useState(false);

  // --- SAFE GSAP LOADING ---
  useEffect(() => {
    const loadGsap = async () => {
      try {
        if (window.gsap && window.ScrollTrigger) {
          setIsGsapReady(true);
          return;
        }

        const loadScript = (src) => {
          return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
              resolve();
              return;
            }
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
          });
        };

        if (!window.gsap)
          await loadScript(
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",
          );
        if (!window.ScrollTrigger)
          await loadScript(
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js",
          );

        setIsGsapReady(true);
      } catch (err) {
        console.error("GSAP Loading Error:", err);
      }
    };
    loadGsap();
  }, []);

  useEffect(() => {
    if (!isGsapReady || !containerRef.current) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    const ctx = gsap.context(() => {
      // Reveal Heading
      gsap.from(".services-heading", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 85%",
        },
      });

      // Staggered Cards Reveal
      gsap.from(".service-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isGsapReady]);

  return (
    <section
      ref={containerRef}
      className="py-32 bg-black overflow-hidden relative"
      id="services"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-600/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="services-heading mb-24 max-w-3xl">
          <h4 className="text-blue-500 font-bold tracking-[0.3em]   text-sm mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-blue-500" /> Our Expertise
          </h4>
          <h2 className="text-5xl md:text-7xl   text-white tracking-tighter leading-[0.95]  ">
            Services that <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-500 to-orange-500">
              Scale Digital Empires
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card group relative p-10 rounded-[3rem] bg-zinc-950 border border-white/5 transition-all duration-700 hover:bg-zinc-900/50 ${service.border}`}
            >
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon & Title */}
                <div className="flex justify-between items-start mb-10">
                  <div
                    className={`p-5 rounded-2xl ${service.bg} ${service.color} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <service.icon size={32} />
                  </div>
                  <div className="text-white/5   text-7xl select-none leading-none group-hover:text-white/10 transition-colors">
                    0{index + 1}
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  <h3 className="text-2xl   text-white   tracking-tight group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-medium line-clamp-3 group-hover:text-zinc-400">
                    {service.desc}
                  </p>
                </div>

                {/* Features List */}
                <div className="grid grid-cols-1 gap-3 mb-10">
                  {service.features.slice(0, 4).map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-xs font-bold text-zinc-600 group-hover:text-zinc-300 transition-colors"
                    >
                      <CheckCircle2 size={14} className={service.color} />
                      <span className="  tracking-wider">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Lower Action */}
                <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                  <button className="text-white text-xs font-bold   tracking-widest flex items-center gap-2 group/btn">
                    Explore Service{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover/btn:translate-x-2 transition-transform"
                    />
                  </button>
                </div>
              </div>

              {/* Invisible Glow Effect on Hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl -z-10 rounded-[3rem] ${service.bg}`}
              />
            </div>
          ))}

          {/* Custom CTA Card */}
          <div className="service-card animate-card relative p-10 rounded-[3rem] bg-blue-600 flex flex-col justify-between overflow-hidden group border-none shadow-2xl shadow-blue-600/20">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />

            <div className="relative z-10">
              <h3 className="text-3xl   text-white   leading-[0.9] tracking-tighter mb-6">
                Have a Unique <br /> Challenge Outside <br /> The Grid?
              </h3>
              <p className="text-white/80 text-sm font-medium leading-relaxed">
                We don't just follow lists; we solve problems. Tell us your
                vision, and we'll engineer the path to it.
              </p>
            </div>

            <div className="relative z-10 pt-10">
              <a
                href="#LetsConnect"
                className="inline-flex items-center gap-4 bg-white text-blue-600 px-8 py-4 rounded-full     text-xs tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                Start Collaborating <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
