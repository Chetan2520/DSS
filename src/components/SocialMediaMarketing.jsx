"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessageSquare,
  Users,
  Image as ImageIcon,
  Video,
  BarChart,
  Target,
  Zap,
  Share2,
  TrendingUp,
  Search,
  Layout,
  Activity,
} from "lucide-react";
import ServiceBanner from "./ServiceBanner";
import ScrollRevealIntro from "./ScrollRevealIntro";
import FAQ from "@/components/FAQ";
import GrowthBreakthrough from "@/components/GrowthBreakthrough";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// --- CONTENT DATA ---
const serviceData = {
  id: "social-media-marketing",
  title: "Social Media Marketing",
  subtitle: "Build. Engage. Dominate.",
  description:
    "At Digital Success Solutions, we help businesses turn social media into a result driven growth engine. With the right strategy, your brand can generate loyal followers, high quality leads, and consistent revenue.",
  intro:
    "For businesses of all sizes, social media marketing is one of the most powerful ways to connect with potential customers and build long term relationships. If your business is not actively using platforms like Facebook, Instagram, and LinkedIn, you are missing valuable opportunities to engage, convert, and grow.",

  platforms: [
    {
      title: "Instagram",
      icon: (
        <img
          src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg"
          className="w-6 h-6"
          alt="Instagram"
        />
      ),
      desc: "Visual storytelling through high-retention Reels and aesthetic lifestyle content.",
    },
    {
      title: "LinkedIn",
      icon: (
        <img
          src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg"
          className="w-6 h-6"
          alt="LinkedIn"
        />
      ),
      desc: "B2B thought leadership and professional networking to drive high-value leads.",
    },
    {
      title: "Facebook",
      icon: (
        <img
          src="https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg"
          className="w-6 h-6"
          alt="Facebook"
        />
      ),
      desc: "Community building and precision-targeted ad campaigns for massive reach.",
    },
    {
      title: "YouTube",
      icon: (
        <img
          src="https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg"
          className="w-6 h-6"
          alt="YouTube"
        />
      ),
      desc: "Long-form authority building and high-production video marketing.",
    },
  ],

  services: [
    {
      title: "Twitter Marketing",
      icon: MessageSquare,
      desc: "Twitter is a fast growing platform ideal for sharing ideas, updates, and engaging in real time conversations. We help you build authority and visibility through strategic posting and engagement.",
      color: "blue",
    },
    {
      title: "LinkedIn Marketing",
      icon: Users,
      desc: "LinkedIn is a powerful platform for B2B marketing and building strong professional connections.",
      color: "indigo",
    },
    {
      title: "Instagram Marketing",
      icon: ImageIcon,
      desc: "Instagram is a visually driven platform with massive user engagement. Our team creates creative content strategies that boost your brand visibility and engagement.",
      color: "pink",
    },
    {
      title: "Pinterest Marketing",
      icon: Layout,
      desc: "Pinterest is ideal for showcasing products and driving website traffic. We design strategies to maximize your reach and conversions.",
      color: "red",
    },
    {
      title: "Facebook Marketing",
      icon: Share2,
      desc: "Facebook remains one of the largest platforms for audience targeting. We help you generate leads, build communities, and grow your business.",
      color: "blue",
    },
    {
      title: "Blog Marketing",
      icon: Search,
      desc: "Blogs are essential for long term growth. We create SEO friendly, engaging blog content that improves your website ranking and builds authority.",
      color: "emerald",
    },
  ],

  strategy: [
    {
      title: "Deep Discovery",
      text: "We analyze your audience's digital footprints to understand exactly what captures their attention.",
      icon: Search,
    },
    {
      title: "Creative Blueprint",
      text: "Developing a unique visual and verbal identity that stands out in the crowded feed.",
      icon: Layout,
    },
    {
      title: "Multi-Platform Sync",
      text: "Ensuring consistent brand messaging across Instagram, LinkedIn, and Facebook.",
      icon: Share2,
    },
    {
      title: "Real-Time Pivot",
      text: "Monitoring trends 24/7 to insert your brand into relevant cultural conversations.",
      icon: Activity,
    },
  ],

  techStack: [
    {
      name: "Instagram",
      logo: "https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg",
    },
    {
      name: "Facebook",
      logo: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg",
    },
    {
      name: "YouTube",
      logo: "https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg",
    },
    {
      name: "LinkedIn",
      logo: "https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg",
    }
  ],
};

const socialMediaFaqs = [
  {
    question: "How can social media marketing help grow my business?",
    answer: "Social media marketing helps your business reach a wider audience, build trust, and convert followers into paying customers through consistent and strategic engagement."
  },
  {
    question: "Which platforms should I focus on for better results?",
    answer: "The choice of platform depends on your business type, target audience, and goals. We analyze your niche to select the most effective channels for maximum impact."
  },
  {
    question: "Do I need paid ads along with organic marketing?",
    answer: "While organic growth builds trust over time, paid advertising accelerates reach and delivers faster results by targeting the right audience."
  },
  {
    question: "How do you create engaging social media content?",
    answer: "We combine creative visuals, compelling captions, and trending strategies to produce content that captures attention and encourages interaction."
  },
  {
    question: "Will I get measurable results from social media marketing?",
    answer: "Yes, we track performance through analytics such as reach, engagement, and conversions to ensure your campaigns deliver real business outcomes."
  },
  {
    question: "How do you maintain brand consistency across platforms?",
    answer: "We follow a structured content strategy, consistent design elements, and brand voice guidelines to ensure a strong and unified brand presence."
  }
];

const SocialMediaMarketing = () => {
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
      className="relative min-h-screen bg-black text-white pt-0 pb-40 overflow-hidden selection:bg-blue-500/30"
    >
      {/* Background Noise */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- HERO BANNER SECTION --- */}
      <ServiceBanner
        title="Social Media Marketing"
        description={serviceData.description}
        imageSrc="/social-media.png"
        currentPage="Social Media"
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
                  Our Social Media <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-blue-400 to-blue-600">
                    Marketing Services
                  </span>
                </h2>
              </div>
              <p className="text-zinc-400 text-xs max-w-xs font-medium border-l border-blue-500/30 pl-4 leading-relaxed">
                Comprehensive social media solutions to grow your business.
              </p>
            </div>

            <div className="what-we-build-container bg-white/95 backdrop-blur-xl border border-zinc-200 rounded-4xl p-3 md:p-12 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-8 md:gap-12">
                {serviceData.services.map((service, i) => (
                  <div key={i} className="group relative">
                  <div className="relative p-1 md:p-8 rounded-3xl bg-zinc-50/50 border border-zinc-100 transition-all duration-500 h-full flex flex-col justify-center overflow-hidden hover:bg-white hover:border-blue-500 hover:shadow-xl active:scale-95">
                      <h3 className="text-xl md:text-2xl   text-zinc-900 mb-3 tracking-tight  ">
                        {service.title}
                      </h3>
                      <p className=" text-xs md:text-sm leading-relaxed text-zinc-800  ">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-40">
          {/* --- BENEFITS GRID (STANDARD STYLE) --- */}
          <section className="mb-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Title Card */}
              <div className="animate-card group relative p-10 rounded-4xl bg-white  border border-orange-600 flex flex-col justify-center min-h-[300px]">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tighter leading-[1.1]  ">
                  Why Choose <br /> Digital Success Solutions?
                </h2>
              </div>

              {[
                {
                  title: "Expert Strategy",
                  text: "Our experienced team creates customized strategies based on your business goals and target audience.",
                  icon: Target,
                },
                {
                  title: "Creative Content",
                  text: "We design high quality content that captures attention and drives engagement.",
                  icon: ImageIcon,
                },
                {
                  title: "Targeted Marketing",
                  text: "We reach the right audience using advanced targeting techniques.",
                  icon: Users,
                },
                {
                  title: "Performance Tracking",
                  text: "We monitor campaigns, analyze data, and continuously optimize for better results.",
                  icon: TrendingUp,
                },
                {
                  title: "Brand Reputation Management",
                  text: "We handle customer interactions and manage your brand image professionally.",
                  icon: Activity,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="animate-card opacity-0 translate-y-8 rounded-4xl group p-[1px] bg-[linear-gradient(to_right,transparent,white,transparent,transparent,transparent)] relative h-full"
                >
                  <div className="relative h-full p-10 rounded-4xl bg-black border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col items-start">
                    <div className="mb-6 text-orange-400 group-hover:scale-110 transition-transform">
                      <item.icon />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-white tracking-tight  ">
                        {item.title}
                      </h4>
                      <p className="text-white/70 text-sm font-medium leading-normal">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- STRATEGY SECTION (EDITORIAL LAYOUT) --- */}
          <div className="mb-40 relative">
            <div className="mb-32 text-center max-w-4xl mx-auto px-6">
              <h2 className="text-3xl md:text-7xl   tracking-tighter leading-[0.8] bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent  ml-2">
                The Content
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-blue-400 to-blue-600 italic">
                  Engine
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-16 md:gap-24 max-w-4xl mx-auto">
              {serviceData.strategy.map((item, i) => (
                <div
                  key={i}
                  className="animate-card group flex flex-col md:flex-row gap-8 md:gap-16 relative px-6 md:px-0"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-transparent flex items-center justify-center border border-orange-500 group-hover:border-blue-500 transition-all duration-300 overflow-hidden shrink-0">
                      <item.icon className="w-8 h-8 text-orange-500 group-hover:text-blue-500 transition-colors" />
                    </div>
                    {i !== serviceData.strategy.length - 1 && (
                      <div className="hidden md:block w-px h-full bg-linear-to-b from-orange-500/50 to-transparent" />
                    )}
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-baseline gap-4">
                      <h3 className="text-3xl md:text-5xl tracking-tighter leading-tight bg-linear-to-b from-white via-white to-zinc-700 bg-clip-text text-transparent    ">
                        {item.title}
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

          {/* --- GROWTH BREAKTHROUGH CTA --- */}
        
        </div>
          <GrowthBreakthrough />

          {/* --- FAQ SECTION --- */}
          <FAQ faqs={socialMediaFaqs} />
      </div>
    </div>
  );
};

export default SocialMediaMarketing;
