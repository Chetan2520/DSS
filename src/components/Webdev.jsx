"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShoppingCart,
  Database,
  Target,
  UserCircle,
  Store,
  Palette,
  Building2,
  Stethoscope,
  Briefcase,
  Utensils,
  Layers,
  TrendingUp,
  Sparkles,
  Zap,
  Shield,
  Rocket,
  Code,
  Server,
  Layout,
  Globe,
  Check,
  ChevronRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ServiceBanner from "./ServiceBanner";
import ScrollRevealIntro from "./ScrollRevealIntro";
import FAQ from "@/components/FAQ";
import GrowthBreakthrough from "@/components/GrowthBreakthrough";
import { FaBezierCurve } from "react-icons/fa6";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// Animated Tech Icon Component - RETIRED in favor of Marquee
// const TechIcon = ({ name, Icon, color, delay = 0 }) => (...);

// Floating Particles - FIXED Hydration Mismatch
const FloatingParticles = () => {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setMounted(true);
    setParticles(
      [...Array(30)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 10,
      })),
    );
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-float"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

// Grid Background
const GridBackground = () => (
  <div className="absolute inset-0 pointer-events-none opacity-20">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,150,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,150,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  </div>
);

const serviceData = {
  hero: {
    title: "Website Development",
    subtitle: "Build a Powerful Online Presence",
    intro:
      "In the modern digital era, a website is not just a platform it is the face of your business online. Choosing the right web development company in Indore can make a significant difference in how your brand is perceived. Digital Success Solutions helps businesses build powerful, result oriented websites that create a strong and lasting impact.",
    desc: "We focus on developing websites that not only look professional but also perform efficiently to support your business growth and customer engagement.",
    ctaText:
      "So you need a high-quality, fast, mobile-friendly, and conversion-optimized website.",
  },

  types:[
    {
      title: "We Provide Custom Website Solutions",
      desc: "We build fully personalized websites that align perfectly with your brand and business objectives.",
      icon: Code,
      color: "blue",
    },
    {
      title: "Search Engine Friendly Development",
      desc: "Our websites are structured to improve visibility on search engines and attract the right audience organically.",
      icon: Globe,
      color: "orange",
    },
    {
      title: "Website Improvement & Maintenance",
      desc: "We upgrade existing websites by improving speed, fixing issues, and enhancing overall performance.",
      icon: Server,
      color: "cyan",
    },
    {
      title: "E-Commerce Website Development",
      desc: "We develop user friendly online stores that simplify the buying journey and boost conversions.",
      icon: ShoppingCart,
      color: "amber",
    },
    {
      title: "Responsive Web Design",
      desc: "We create mobile friendly and fully responsive websites that deliver a seamless experience across all devices, including smartphones, tablets, and desktops.",
      icon: Layout,
      color: "emerald",
    },
    {
      title: "UI/UX Focused Design",
      desc: "Our designs are crafted with user experience in mind, ensuring intuitive navigation, attractive layouts, and higher user engagement for better conversion results.",
      icon: Palette,
      color: "indigo",
    },
  ],

  strategySection: {
    title: " E-Commerce Websites &  UI/UX Design",
    part1: {
      heading: "Strategic Structure & Growth",
      text: "We have designed e-commerce and brand websites for many fashion and cosmetic brands where users get smooth browsing, attractive product presentation and easy checkout experience. The structure of these websites is planned in such a way that customers can easily explore the products and take purchase decisions quickly. This has helped the brands get strong growth in online sales along with organic traffic.",
    },
    part2: {
      heading: "UI/UX & User Engagement",
      text: "Our expert website development team puts special focus on UI (User Interface) and UX (User Experience) in every project. A clean design, clear navigation and fast loading website engages the users. When the user finds it comfortable to use the website, they spend more time and the chances of conversion automatically increase. This is why we see higher engagement and better sales performance on our clients' websites.",
    },
  },

  industries: [
    { name: "Real Estate Companies", icon: Building2 },
    { name: "Hospitals & Clinics", icon: Stethoscope },
    { name: "Doctors", icon: UserCircle },
    { name: "Fashion & Cosmetic Brands", icon: Store },
    { name: "Hotels & Restaurants", icon: Utensils },
    { name: "E-commerce Business", icon: ShoppingCart },
    { name: "Service Provider", icon: Briefcase },
  ],

  benefits: [
    {
      title: "Goal Oriented Execution",
      text: "We focus on building websites that contribute directly to your success and growth.",
      icon: Target,
    },
    {
      title: "Experienced Professionals",
      text: "Our team combines technical knowledge with creative thinking to deliver impactful solutions.",
      icon: Briefcase,
    },
    {
      title: "User Centric Approach",
      text: "We prioritize user experience to ensure better engagement and higher conversion rates.",
      icon: UserCircle,
    },
    {
      title: "Fully Responsive Design",
      text: "Your website will perform smoothly across all devices, including mobile, tablet, and desktop.",
      icon: Layout,
    },
    {
      title: "Cost Effective Services",
      text: "We provide high quality solutions at competitive prices without compromising on standards.",
      icon: Sparkles,
    },
  ],

  techStack: [
    {
      name: "MongoDB",
      logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    },
    {
      name: "Express",
      logo: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
    },
    {
      name: "React",
      logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    },
    {
      name: "Node.js",
      logo: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
    },
    {
      name: "Next.js",
      logo: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
    },
    { name: "PHP", logo: "https://www.vectorlogo.zone/logos/php/php-icon.svg" },
    {
      name: "Laravel",
      logo: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg",
    },
    {
      name: "WordPress",
      logo: "https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg",
    },
    {
      name: "Shopify",
      logo: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg",
    },
    {
      name: "Git",
      logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    },
    {
      name: "Tailwind",
      logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
  ],
};

const webDevFaqs = [
  {
    question: "What services does Digital Success Solutions offer in website development?",
    answer: "We offer full website development services, including custom website design, responsive development, e-commerce solutions, website optimization, and continuous maintenance support."
  },
  {
    question: "How much time is required to create a website?",
    answer: "The time needed depends on the website’s specific requirements and features. Simple websites can be completed quickly, while more complex or e-commerce projects require additional time for development and quality assurance."
  },
  {
    question: "Do you create mobile-friendly websites?",
    answer: "Yes, all our websites are fully responsive and designed to work well on mobile, tablet, and desktop devices."
  },
  {
    question: "Will my website be SEO-friendly?",
    answer: "Yes, we ensure that all websites are built with an SEO-friendly structure, fast loading speeds, and proper coding to help improve your search engine rankings."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes, we can update and improve your current website to provide a modern design, better performance, and a more enhanced user experience."
  },
  {
    question: "Do you provide e-commerce website development?",
    answer: "Yes, we develop secure and user-friendly e-commerce websites that make online selling efficient and easy."
  }
];

const WebDevAgency = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".strategy-part",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.3,
          duration: 1.2,
          scrollTrigger: { trigger: ".strategy-section", start: "top 70%" },
        },
      );

      ScrollTrigger.batch(".animate-card", {
        start: "top 80%",
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.15,
            overwrite: true,
            duration: 0.9,
            ease: "power3.out",
          }),
      });

      gsap.fromTo(
        ".what-we-build-container",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".what-we-build-wrapper",
            start: "top 80%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black text-white overflow-hidden font-sans selection:bg-cyan-500/30"
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
        }
        .animate-float { animation: float linear infinite; }
      `}</style>

      {/* Clean Black Background with Minimal Overlays */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* <FloatingParticles /> */}
        <GridBackground />
        {/* Subtle bottom glow only */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-96 bg-gradient-radial from-blue-900/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* --- HERO BANNER SECTION --- */}
      <ServiceBanner
        title={serviceData.hero.title}
        description={serviceData.hero.desc}
        videoSrc="/web.mp4"
        currentPage="Web Development"
      />

      {/* Intro Section - Standardized with shared component */}
      <ScrollRevealIntro text={serviceData.hero.intro} />

      {/* What We Build Section - REVERTED TO PREVIOUS LIGHT THEME */}
      <section
        className="what-we-build-wrapper relative py-16 px-2 md:px-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/services.webp')` }}
      >
        {/* Subtle Overlay to make text readable on white */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 px-2">
            <div>
              {/* <span className="text-orange-500 text-[10px]     tracking-[0.4em] mb-4 block">Our Deliverables</span> */}
              <h2 className="text-4xl md:text-5xl tracking-tighter bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent leading-tight">
                Our Web Development <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-orange-400 to-orange-600">
                  Services in Indore
                </span>
              </h2>
            </div>
            <p className="text-zinc-400 text-xs max-w-xs font-medium border-l border-orange-500/30 pl-4 leading-relaxed">
              We offer complete web solutions designed to meet the unique needs of every business.
            </p>
          </div>

          <div className="what-we-build-container bg-white/95 backdrop-blur-xl border border-zinc-200 rounded-4xl p-3 md:p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-8 md:gap-12">
              {serviceData.types.map((type, i) => (
                <div key={i} className="group relative">
                  <div className="relative p-1 md:p-8 rounded-3xl bg-zinc-50/50 border border-zinc-100 transition-all duration-500 h-full flex flex-col justify-center overflow-hidden hover:bg-white hover:border-blue-500 hover:shadow-xl active:scale-95">
                    <h3 className="text-xl md:text-2xl   text-zinc-900 mb-3 tracking-tight  ">
                      {type.title}
                    </h3>
                    <p className=" text-xs md:text-sm leading-relaxed text-zinc-800  ">
                      {type.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 mt-40">
        {/* Strategy Section - REFINED EDITORIAL LAYOUT */}
        <div className="strategy-section mb-40 relative">
          <div className="mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter leading-[1.1] bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent">
              {serviceData.strategySection.title}
            </h2>
          </div>

          <div className="space-y-32">
            {/* Part 1: Strategic Structure & Growth */}
            <div className="strategy-part group flex flex-col md:flex-row gap-12 md:gap-20 items-start relative">
              <div className="md:sticky md:top-32 flex flex-col items-start gap-4">
                <TrendingUp
                  className="w-16 h-16 md:w-20 md:h-20 text-orange-500 transition-all duration-700"
                  strokeWidth={1}
                />
                {/* <div className="h-1 w-16 bg-orange-500/20 rounded-full transition-all duration-700 group-hover:w-24 group-hover:bg-orange-500" /> */}
              </div>

              <div className="flex-1 space-y-3">
                <h3 className="text-3xl md:text-4xl  tracking-tighter leading-tight bg-linear-to-b from-white via-white to-zinc-700 bg-clip-text text-transparent">
                  Strategic{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-orange-400 to-orange-600">
                    Structure & Growth
                  </span>
                </h3>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-3xl transition-colors group-hover:text-zinc-400 duration-500">
                  {serviceData.strategySection.part1.text}
                </p>
              </div>
            </div>

            {/* Part 2: UI/UX & User Engagement */}
            <div className="strategy-part group flex flex-col md:flex-row gap-12 md:gap-20 items-start relative">
              <div className="md:sticky md:top-32 flex flex-col items-start gap-4">
                <FaBezierCurve className="w-16 h-16 md:w-20 md:h-20 text-blue-500 transition-all duration-700" />
                {/* <div className="h-1 w-16 bg-blue-500/20 rounded-full transition-all duration-700 group-hover:w-24 group-hover:bg-blue-500" /> */}
              </div>

              <div className="flex-1 space-y-3">
                <h3 className="text-3xl md:text-4xl  tracking-tighter leading-tight bg-linear-to-b from-white via-white to-zinc-700 bg-clip-text text-transparent">
                  UI/UX &{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-blue-400 to-blue-600">
                    User Engagement
                  </span>
                </h3>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-3xl transition-colors group-hover:text-zinc-400 duration-500">
                  {serviceData.strategySection.part2.text}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid Section */}
        <section className="mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Title Card - Inspired by "Guiding Values" */}
            <div className="animate-card group relative p-10 rounded-4xl bg-blue-500/50 border border-indigo-500/20 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter leading-[1.1]">
                Why Choose <br /> Digital Success Solutions?
              </h2>
            </div>

            {/* Benefit Cards - Exactly like the reference image grid */}
            {serviceData.benefits.map((benefit, i) => (
              <div
                key={i}
                className="animate-card opacity-0 translate-y-8 rounded-4xl group p-px bg-[linear-gradient(to_right,transparent,white,transparent,transparent,transparent)]  relative h-full"
              >
                <div className="relative h-full p-10 rounded-4xl bg-black  border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col items-start">
                  <div className="mb-6">
                    <benefit.icon
                      className="text-orange-400 group-hover:scale-110 transition-transform"
                      size={20}
                      strokeWidth={2}
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-white tracking-tight">
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

        {/* --- GROWTH BREAKTHROUGH CTA --- */}
        <GrowthBreakthrough />

        {/* --- FAQ SECTION --- */}
        <FAQ faqs={webDevFaqs} />

        {/* Mastered Technologies - Marquee Section */}
        <div className="border-t border-white/5 pt-32 pb-48 overflow-hidden">
          <div className="text-center mb-32 px-5 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent">
              Technologies We Used
            </h2>
            {/* <p className="text-zinc-500 text-xs md:text-sm mt-6   tracking-[0.3em] font-medium opacity-50">Tools we use to build high-performance web experiences</p> */}
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
              {/* 4 sets for guaranteed seamlessness on ultra-wide screens */}
              {[...Array(4)].map((_, groupIdx) => (
                <div
                  key={groupIdx}
                  className="flex items-center gap-24 shrink-0"
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
      </div>
    </div>
  );
};

export default WebDevAgency;
