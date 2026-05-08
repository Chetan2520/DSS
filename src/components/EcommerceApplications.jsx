"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShoppingCart,
  CreditCard,
  Box,
  Zap,
  Globe,
  ShieldCheck,
  ArrowUpRight,
  Search,
  Layout,
  Code,
  Rocket,
  TrendingUp,
  Users,
} from "lucide-react";
import ServiceBanner from "./ServiceBanner";
import ScrollRevealIntro from "./ScrollRevealIntro";
import FAQ from "@/components/FAQ";
import GrowthBreakthrough from "@/components/GrowthBreakthrough";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// --- CONTENT DATA ---
const serviceData = {
  id: "ecommerce-applications",
  title: "E-commerce Applications",
  subtitle: "Shop. Sell. Scale.",
  description:
    "At Digital Success Solutions, we help businesses establish a strong online presence with advanced and scalable e-commerce solutions tailored to modern customer needs.",
  intro:
    "E-commerce has transformed the way businesses operate, enabling them to reach a global audience and deliver seamless shopping experiences. With rapid digital growth, Indore has emerged as a thriving hub for e-commerce development, offering innovative solutions and skilled professionals.",

  features: [
    {
      title: "Digital Adoption",
      desc: "The increasing use of smartphones and internet services has accelerated online shopping trends.",
      icon: <TrendingUp className="text-orange-500" />,
    },
    {
      title: "Startup-Friendly Environment",
      desc: "Indore’s growing startup ecosystem encourages innovation and digital business models.",
      icon: <Rocket className="text-orange-500" />,
    },
    {
      title: "Government Support",
      desc: "Various initiatives promoting digital transformation and MSMEs are fueling e-commerce growth.",
      icon: <ShieldCheck className="text-orange-500" />,
    },
    {
      title: "Changing Consumer Behavior",
      desc: "Customers now prefer convenience, variety, and quick delivery, making online platforms essential.",
      icon: <Users className="text-orange-500" />,
    },
  ],

  process: [
    {
      step: "Business Analysis",
      text: "Deep dive into your market, competitors, and target audience to uncover opportunities and define a winning e-commerce strategy. We help you choose the right platform, features, and growth roadmap tailored to your business goals.",
      icon: Search,
    },
    {
      step: "UX/UI Architecture",
      text: "Designing seamless, intuitive shopping experiences that convert visitors into customers. From product discovery to checkout, we craft mobile-first interfaces that reduce friction and boost engagement.",
      icon: Layout,
    },
    {
      step: "API & Core Development",
      text: "Building a powerful, secure foundation for your e-commerce platform. We develop scalable back-end systems, integrate payment gateways, shipping solutions, and connect third-party services for smooth operations.",
      icon: Code,
    },
    {
      step: "Scale & Launch",
      text: "From testing to deployment, we ensure your store is optimized for performance, security, and growth. Whether you're launching or scaling globally, we prepare your platform to handle high traffic and deliver consistent user experiences.",
      icon: Rocket,
    },
  ],

  techStack: [
    {
      name: "Shopify",
      logo: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg",
    },
    {
      name: "WooCommerce",
      logo: "https://www.svgrepo.com/show/354569/woocommerce-icon.svg",
    },

    {
      name: "WordPress",
      logo: "https://www.svgrepo.com/show/475696/wordpress-color.svg",
    },
    {
      name: "Custom Coding",
      logo: "https://www.svgrepo.com/show/294200/coding-programming-language.svg",
    },
  ],
};

const ecommerceFaqs = [
  {
    question: "What does influencer marketing mean for my business?",
    answer:
      "Influencer marketing involves partnering with trusted content creators who promote your brand to their audience in a natural and relatable way, helping you build credibility and attract potential customers.",
  },
  {
    question: "How do you find influencers that match my brand?",
    answer:
      "We conduct detailed research based on your industry, audience preferences, content style, and engagement quality to shortlist influencers who truly represent your brand values.",
  },
  {
    question: "Which social media platforms are best for influencer campaigns?",
    answer:
      "The right platform depends on your target audience. We typically use channels like Instagram, YouTube, and emerging platforms to ensure maximum visibility and impact.",
  },
  {
    question: "What is the typical timeline for a campaign?",
    answer:
      "Campaign timelines vary depending on the scope and objectives, but most campaigns are planned and executed within a few weeks to ensure timely results.",
  },
  {
    question: "How will I know if the campaign is successful?",
    answer:
      "We provide detailed performance reports including reach, audience interaction, website visits, and conversions to clearly show the effectiveness of the campaign.",
  },
  {
    question: "Can influencer marketing work within a limited budget?",
    answer:
      "Yes, we design flexible strategies that suit your budget by collaborating with micro and niche influencers who deliver strong engagement at cost-effective rates.",
  },
];

const EcommerceApplications = () => {
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const loadGsap = async () => {
      try {
        const ctx = gsap.context(() => {
          gsap.utils.toArray(".animate-card").forEach((card) => {
            gsap.fromTo(
              card,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: { trigger: card, start: "top 90%" },
              },
            );
          });
        }, containerRef);
      } catch (err) {
        console.error(err);
      }
    };
    loadGsap();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black text-white pt-0 pb-40 overflow-hidden selection:bg-orange-500/30"
    >
      {/* Background Noise */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- HERO BANNER SECTION --- */}
      <ServiceBanner
        title="E-commerce Applications"
        description={serviceData.description}
        imageSrc="/ecom.avif"
        currentPage="E-commerce"
      />

      {/* Intro Section */}
      <ScrollRevealIntro text={serviceData.intro} />

      <div className="relative z-10 w-full px-0">
        {/* --- WHAT WE DO SECTION (WHITE GRID) --- */}
        <section
          className="what-we-build-wrapper relative py-20 px-2 md:px-12 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/bg-cover.png')` }}
        >
          <div className="absolute inset-0 bg-black/60 z-0" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-2">
              <div>
                <h2 className="text-4xl md:text-5xl tracking-tighter bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent leading-tight    ">
                  Why E-commerce is <br />
                  <span className="bg-clip-text bg-linear-to-r from-white via-orange-400 to-orange-600">
                    Growing in Indore
                  </span>
                </h2>
              </div>
              <p className="text-zinc-400 text-xs max-w-xs font-medium border-l border-orange-500/30 pl-4 leading-relaxed">
                The shift towards digital shopping and business transformation.
              </p>
            </div>

            <div className="what-we-build-container bg-white/95 backdrop-blur-xl border border-zinc-200 rounded-4xl p-3 md:p-12 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-8 md:gap-12">
                {serviceData.features.map((feature, i) => (
                  <div key={i} className="group relative">
                    <div className="relative p-1 md:p-8 rounded-3xl bg-zinc-50/50 border border-zinc-100 transition-all duration-500 h-full flex flex-col justify-center overflow-hidden hover:bg-white hover:border-orange-500 hover:shadow-xl active:scale-95">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-zinc-900/5 transition-all group-hover:scale-110">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl   text-zinc-900 mb-3 tracking-tight">
                        {feature.title}
                      </h3>
                      <p className=" text-xs md:text-sm leading-relaxed text-zinc-800  ">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-40">
          {/* --- PROCESS SECTION (EDITORIAL LAYOUT) --- */}
          <div className="mb-40 px-6 relative">
            <div className="mb-32 text-center max-w-4xl mx-auto px-6">
              <h2 className="text-3xl md:text-7xl   tracking-tighter leading-[0.8] bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent  ml-2">
                The Retail
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-orange-400 to-orange-600 ">
                  Cycle
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-16 md:gap-24 max-w-4xl mx-auto">
              {serviceData.process.map((item, i) => (
                <div
                  key={i}
                  className="animate-card group flex flex-col md:flex-row gap-8 md:gap-16 relative px-6 md:px-0"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-transparent flex items-center justify-center border border-orange-500 group-hover:border-blue-500 transition-all duration-300 overflow-hidden shrink-0">
                      <item.icon className="w-8 h-8 text-orange-500 group-hover:text-blue-500 transition-colors" />
                    </div>
                    {i !== serviceData.process.length - 1 && (
                      <div className="hidden md:block w-px h-full bg-linear-to-b from-orange-500/50 to-transparent" />
                    )}
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-baseline gap-4">
                      <h3 className="text-3xl md:text-5xl tracking-tighter leading-tight bg-linear-to-b from-white via-white to-zinc-700 bg-clip-text text-transparent    ">
                        {item.step}
                      </h3>
                    </div>
                    <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl transition-colors group-hover:text-zinc-300 duration-500 font-medium">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- BENEFITS GRID (STANDARD STYLE) --- */}
          <section className="mb-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Title Card */}
              <div className="animate-card group relative p-10 rounded-4xl bg-white  border border-orange-600 flex flex-col justify-center min-h-[300px]">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tighter leading-[1.1]  ">
                  Our E-commerce <br /> Development Services <br /> in Indore
                </h2>
              </div>

              {[
                {
                  title: "Custom E-commerce Website Development",
                  text: "Our team develops websites that are both user-friendly and adaptable, tailored to drive growth for your business.",
                  icon: <Code />,
                },
                {
                  title: "Mobile Commerce Solutions",
                  text: "Mobile-optimized platforms and apps for better user engagement and higher conversions.",
                  icon: <Layout />,
                },
                {
                  title: "Payment Gateway Integration",
                  text: "Secure and smooth payment solutions for hassle-free transactions.",
                  icon: <CreditCard />,
                },
                {
                  title: "SEO & Digital Marketing",
                  text: "We optimize your store to rank higher and attract quality traffic.",
                  icon: <Search />,
                },
                {
                  title: "Custom Features & Integrations",
                  text: "From inventory management to analytics, we add features that enhance performance.",
                  icon: <Zap />,
                },
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="animate-card opacity-0 translate-y-8 rounded-4xl group p-px bg-[linear-gradient(to_right,transparent,white,transparent,transparent,transparent)] relative h-full"
                >
                  <div className="relative h-full p-10 rounded-4xl bg-black border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col items-start">
                    <div className="mb-6 text-orange-400 group-hover:scale-110 transition-transform">
                      {benefit.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-white tracking-tight  ">
                        {benefit.title}
                      </h4>
                      <p className="text-white/70 text-sm font-medium leading-normal">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-white/5 pt-32 pb-48 overflow-hidden -mx-6 md:-mx-12">
            <div className="text-center mb-32 px-5 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent">
                Technologies We Used
              </h2>
            </div>

            {/* Marquee Container */}
            <div className="relative flex flex-col gap-16 select-none">
              {/* Gradient Fades for depth */}
              <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-linear-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-linear-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

              {/* First Marquee Row */}
              <motion.div
                className="flex whitespace-nowrap items-center gap-24 pr-24"
                animate={{ x: [0, "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
              >
                {[...Array(4)].map((_, groupIdx) => (
                  <div
                    key={groupIdx}
                    className="flex items-center gap-10 md:gap-24 shrink-0"
                  >
                    {serviceData.techStack.map((tech, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-6 group"
                      >
                        <div className="h-10 md:h-14 w-auto flex items-center justify-center  transition-all duration-500 scale-90 group-hover:scale-110">
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="h-full w-auto object-contain pointer-events-none"
                          />
                        </div>
                        <span className="text-[9px] tracking-[0.3em] text-zinc-600   group-hover:text-white transition-all duration-500 group-hover:tracking-[0.4em]">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* --- GROWTH BREAKTHROUGH CTA --- */}

          {/* --- FAQ SECTION --- */}
        </div>
        <GrowthBreakthrough />

        <FAQ faqs={ecommerceFaqs} />
      </div>
    </div>
  );
};

export default EcommerceApplications;
