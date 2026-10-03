"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Search,
  MessageSquare,
  MapPin,
  BookOpen,
  Heart,
  Share2,
  LineChart,
  Layout,
  Plus,
  Minus,
  Activity,
  Users,
  BarChart,
  MonitorSmartphone,
  CheckCircle,
  Shield,
  Leaf,
  ChevronDown,
  ChevronRight,
  Star
} from "lucide-react";

// FadeIn Wrapper Component
function FadeIn({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Accordion Component for FAQs
function AccordionItem({ title, desc, isOpen, onClick }) {
  return (
    <div className="py-6 border-b border-slate-200">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left group cursor-pointer"
      >
        <h4 className="text-slate-900 font-semibold text-lg md:text-xl pr-4 group-hover:text-orange-500 transition-colors duration-200">{title}</h4>
        <span className="text-slate-400 flex-shrink-0">
          {isOpen ? <Minus className="text-orange-500" /> : <Plus />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-slate-600 text-base md:text-base   pt-4 pr-10">{desc}</p>
      </motion.div>
    </div>
  );
}

// Accordion Component for Service Blocks
function ServiceBlockAccordion({ block, isOpen, onClick }) {
  return (
    <div className="border-b border-slate-200 py-4 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left group cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <span className="text-emerald-700">
            {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </span>
          <h4 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors duration-200">
            {block.title}
          </h4>
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pt-4 pb-2 pl-8">
          {block.desc && <p className="text-slate-600 text-[15px] mb-4 leading-relaxed whitespace-pre-line">{block.desc}</p>}
          {block.list && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {block.list.map((item, j) => (
                <li key={j} className="flex items-center gap-2 text-slate-600 text-[15px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </div>
  );
}

// Service Left Content Component
function ServiceLeftContent({ service }) {
  const [openIdx, setOpenIdx] = useState(null); // All blocks closed by default

  return (
    <div className="flex flex-col text-slate-900">
      <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-zinc-800">{service.heading}</h3>
      {service.desc1 && <p className="text-slate-600 text-base mb-8    whitespace-pre-line">{service.desc1}</p>}

      {service.blocks && service.blocks.length > 0 && (
        <div className="mb-8 border-t border-slate-200">
          {service.blocks.map((block, i) => (
            <ServiceBlockAccordion
              key={i}
              block={block}
              isOpen={openIdx === i}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      )}

      {service.cta && (
        <div className="mt-8">
          <Link href="/lets-connect" className="inline-flex items-center gap-2 px-4 md:px-8 py-3 md:py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl md:rounded-full tex-sm   md:text-base transition-all">
            {service.cta} <ArrowRight size={20} />
          </Link>
        </div>
      )}
    </div>
  );
}

const servicesData = [
  {
    id: "seo",
    heading: "SEO for Solar Companies",
    desc1: "Search Engine Optimization helps your solar business become more visible when people search for solar-related services online.\n\nWe work on website structure, keyword targeting, technical SEO, content, internal linking, local visibility and other important SEO factors to build sustainable organic visibility.",
    blocks: [
      {
        title: "Relevant search terms can include:",
        list: ["Solar company near me", "Solar panel installation", "Residential solar solutions", "Commercial solar installation", "Solar rooftop installation", "Solar energy company", "Solar panel dealers", "Solar subsidy related searches"]
      }
    ],
    cta: "Improve Organic Visibility",
    image: "/images/sectors/solar/so1.png",
    bg: "bg-white"
  },
  {
    id: "local-seo",
    heading: "Local SEO & Google Business Profile",
    desc1: "For solar businesses serving specific cities or regions, local visibility can play an important role in lead generation.\n\nOur Local SEO strategy helps improve your presence across local search results and Google Business Profile.",
    blocks: [
      {
        title: "We focus on:",
        list: ["Google Business Profile optimization", "Local keyword targeting", "Business information consistency", "Customer reviews and reputation", "Local content", "Location-based landing pages", "Local citations and relevant backlinks"]
      }
    ],
    cta: "Strengthen Local Presence",
    image: "/images/sectors/solar/so2.png",
    bg: "bg-slate-50"
  },
  {
    id: "google-ads",
    heading: "Google Ads for Solar Lead Generation",
    desc1: "Solar customers can have high purchase intent, especially when they are actively searching for installation or consultation services.\n\nWith Google Ads for solar companies, we can target relevant searches and direct potential customers to dedicated landing pages.",
    blocks: [
      {
        title: "Campaigns can be structured around:",
        list: ["Solar installation", "Rooftop solar", "Residential solar", "Commercial solar", "Solar consultation", "Location-based searches", "Specific solar solutions"]
      }
    ],
    cta: "Launch Paid Campaigns",
    image: "/images/sectors/solar/so3.png",
    bg: "bg-white"
  },
  {
    id: "meta-ads",
    heading: "Meta Ads for Solar Companies",
    desc1: "Not every potential solar customer is actively searching on Google. Meta Ads can help solar companies reach homeowners, business owners and relevant audiences based on location, interests and online behaviour.\n\nStrong creatives combined with the right targeting can help generate more opportunities.",
    blocks: [
      {
        title: "Our solar Meta Ads strategy can include:",
        list: ["Lead generation campaigns", "WhatsApp campaigns", "Call-focused campaigns", "Awareness campaigns", "Remarketing", "Creative testing", "Audience testing"]
      }
    ],
    cta: "Start Meta Ads",
    image: "/images/sectors/solar/so4.png",
    bg: "bg-slate-50"
  },
  {
    id: "website",
    heading: "Solar Website Design & Development",
    desc1: "Your website is often one of the first places a potential customer goes after discovering your brand.\n\nA solar website should do more than display your company information. It should answer customer questions and make it easy for visitors to enquire.",
    blocks: [
      {
        title: "We create websites with:",
        list: ["Mobile-friendly design", "Clear service sections", "Strong calls-to-action", "Lead forms", "WhatsApp integration", "Fast-loading pages", "SEO-friendly structure", "Trust-building content"]
      }
    ],
    cta: "Build Your Solar Website",
    image: "/images/sectors/solar/so5.png",
    bg: "bg-white"
  },
  {
    id: "social-media",
    heading: "Social Media Marketing for Solar Businesses",
    desc1: "Solar energy can sometimes feel technical to customers. Social media gives your business an opportunity to explain solar solutions in a simple and engaging way.\n\nConsistent social media content helps keep your brand visible while building familiarity and trust.",
    blocks: [
      {
        title: "We can create content around:",
        list: ["Solar energy benefits", "Installation processes", "Customer projects", "Before-and-after transformations", "Solar myths and facts", "Energy-saving tips", "Maintenance information", "Customer testimonials"]
      }
    ],
    cta: "Grow Social Media",
    image: "/images/sectors/solar/so6.png",
    bg: "bg-slate-50"
  },
  {
    id: "content",
    heading: "Solar Content Marketing",
    desc1: "Customers have questions before investing in solar. Content marketing helps answer those questions while creating opportunities for your website to rank for relevant searches.\n\nUseful content can attract users during the research stage and move them closer to contacting your business.",
    blocks: [
      {
        title: "Useful topics can include:",
        list: ["How does rooftop solar work?", "Is solar worth the investment?", "How much electricity can solar panels generate?", "How to choose a solar installation company?", "Solar panel maintenance guide", "Residential vs commercial systems"]
      }
    ],
    cta: "Start Content Marketing",
    image: "/images/sectors/solar/so7.png",
    bg: "bg-white"
  }
];

export default function SolarClient() {
  const [openFaqIdx, setOpenFaqIdx] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [openIntroIdx, setOpenIntroIdx] = useState(null);
  const [openWhyChooseIdx, setOpenWhyChooseIdx] = useState(0);

  const introAccordions = [
    {
      title: "Why Do Solar Companies Need Digital Marketing?",
      desc: "Solar installation is a considered purchase. Customers often research pricing, benefits, subsidies, installation processes, financing options, reviews and local solar providers before making a decision. If your business does not appear when potential customers search, you may lose those enquiries to competitors."
    },
    {
      title: "Generating Relevant Enquiries",
      desc: "A strong solar digital marketing strategy helps your business reach homeowners and commercial customers online, improve visibility on Google, generate relevant solar leads, and build trust. The goal is not simply to get website traffic, but to bring relevant people who are genuinely interested."
    },
    {
      title: "Build Trust Before Asking for the Sale",
      desc: "Choosing a solar company is an important decision. Customers want to know whether the company is reliable, experienced and capable. Your digital marketing strategy should showcase customer reviews, completed projects, installation images, and certifications."
    }
  ];

  const faqs = [
    {
      q: "Why is digital marketing important for solar companies?",
      a: "Digital marketing helps solar companies increase online visibility, reach potential customers, generate enquiries and build trust before the customer makes a purchase decision."
    },
    {
      q: "What digital marketing services are best for solar companies?",
      a: "SEO, Local SEO, Google Ads, Meta Ads, social media marketing, content marketing, website development and lead generation are effective for solar businesses."
    },
    {
      q: "How does SEO help a solar company generate leads?",
      a: "Solar SEO helps your website rank for relevant searches such as solar panel installation, rooftop solar and solar companies, bringing potential customers to your website organically."
    },
    {
      q: "Can Google Ads generate leads for solar businesses?",
      a: "Yes. Google Ads can target people actively searching for solar installation and related services, helping businesses reach high-intent potential customers."
    },
    {
      q: "Is social media marketing useful for solar companies?",
      a: "Yes. Social media can educate customers about solar energy, showcase completed projects, share testimonials and build brand awareness among relevant audiences."
    },
    {
      q: "How can Digital Success Solutions help solar companies?",
      a: "Digital Success Solutions provides SEO, Google Ads, Meta Ads, social media, website development and lead generation strategies to help solar businesses build visibility and grow online."
    }
  ];

  return (
    <main className="   font-sans">

      {/* ── Section 1: Hero Section ── */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden pt-24 md:pt-32 pb-16">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/images/sectors/solar/hero.png" alt="Solar Energy Background" className="w-full h-full object-cover" />
          {/* Dark Overlay for Text Readability - OMITTED AS REQUESTED */}
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="max-w-2xl">
            <FadeIn>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-zinc-900 leading-[1.1] tracking-tight mb-6">
                Digital Marketing for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Solar Companies</span>
              </h1>

              <div className="mb-8 text-sm md:text-lg text-zinc-900  ">
                {isExpanded ? (
                  <>
                    <p>
                      The solar industry is growing rapidly, but getting consistent customers requires more than offering quality solar products or installation services. Today, homeowners and businesses usually search online before choosing a solar company. Digital Success Solutions helps solar businesses build a strong online presence and generate quality enquiries.
                    </p>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="text-zinc-900 underline transition-colors"
                    >
                      Read Less
                    </button>
                  </>
                ) : (
                  <p>
                    The solar industry is growing rapidly, but getting consistent customers requires more than offering quality solar products or installation services. Today, homeowners and businesses usually search online before choosing...
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="text-zinc-900 underline transition-colors inline"
                    >
                      Read More
                    </button>
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/lets-connect" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all hover:shadow-lg hover:-translate-y-1">
                  Get a Free Consultation <ArrowRight size={20} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Section 2: Introduction ── */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-50 rounded-[3rem] -z-10 transform -rotate-3"></div>
              <img
                src="/images/sectors/solar/so8.png"
                alt="Spa Business Growth"
                className="rounded-2xl  border border-slate-100"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-800 mb-6">
              Why Do Solar Companies Need Digital Marketing?
            </h2>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              Solar installation is a considered purchase. Customers often research pricing, benefits, subsidies, installation processes, financing options, reviews and local solar providers before making a decision.
              If your business does not appear when potential customers search for solar solutions, you may lose those enquiries to competitors.

            </p>

            <div className="border-t border-slate-200">
              {introAccordions.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  title={item.title}
                  desc={item.desc}
                  isOpen={openIntroIdx === idx}
                  onClick={() => setOpenIntroIdx(openIntroIdx === idx ? null : idx)}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 3-13: Services (Sticky Scroll Layout) ── */}
      <div className="relative bg-white">
        {/* Sticky Header for Services Section */}
        <section className="relative z-20 bg-white pt-2 pb-2 md:pt-24 md:pb-12 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            <h2 className="text-2xl md:text-5xl font-semibold text-slate-900">
              Our Digital Marketing Services for Solar Companies
            </h2>
          </div>
        </section>

        {servicesData.map((service, idx) => (
          <section
            key={service.id}
            className={`relative md:sticky md:top-0 h-auto md:min-h-screen w-full flex flex-col  overflow-visible ${service.bg}`}
            style={{ zIndex: 10 + idx }}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start md:items-center my-auto py-0 md:py-24">

              {/* Left Content */}
              <ServiceLeftContent service={service} />

              {/* Right Image */}
              <div className=" relative w-full lg:w-[85%] mx-auto aspect-video lg:aspect-[4/3] rounded-xl md:rounded-[2rem] overflow-hidden  ">
                <img src={service.image} alt={service.heading} className="w-full h-full object-cover" />

              </div>

            </div>
          </section>
        ))}
      </div>

      {/* ── Section 14: Challenges & Solutions ── */}
      <section className="py-10 md:py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                Common Digital Marketing <br className="hidden md:block" />
                <span className="text-orange-500">Challenges for Spa Businesses</span>
              </h2>
              <p className="text-lg text-slate-600">
                Every spa business has its own marketing challenges. Some businesses struggle with visibility, while others get website traffic but very few enquiries.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-2">
            {/* Table Header */}
            <div className="grid grid-cols-2 p-4 md:p-6 mb-2 rounded-xl bg-slate-50">
              <div className="font-bold text-red-500 uppercase tracking-wider text-xs md:text-sm">Challenge</div>
              <div className="font-bold text-emerald-600 uppercase tracking-wider text-xs md:text-sm">Digital Marketing Solution</div>
            </div>

            {/* Table Body */}
            <div className="flex flex-col gap-1">
              {[
                ["Low Google visibility", "SEO & Local SEO"],
                ["Few enquiries", "Lead Generation"],
                ["Strong competition", "SEO & Paid Advertising"],
                ["Low social engagement", "Social Media Marketing"],
                ["Weak online reputation", "Review Strategy"],
                ["Poor-quality leads", "Audience Optimization"],
                ["Outdated website", "Website Development"],
                ["Low brand awareness", "Content & Social Media"],
                ["High advertising costs", "Continuous Campaign Optimization"]
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 p-4 md:px-6 md:py-4 hover:bg-slate-50 rounded-xl transition-colors">
                  <div className="text-zinc-800 flex items-center gap-3 md:text-lg">
                    {row[0]}
                  </div>
                  <div className="text-green-600 flex items-center gap-3 font-semibold md:text-lg">
                    {row[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 15: Our Approach ── */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Digital Marketing for Different Solar Businesses
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                Our digital marketing approach can be customized according to the type of solar business you operate. We combine different marketing channels based on your business objectives.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-8">
            {[
              { step: "01", title: "Residential Solar", desc: "Reach homeowners looking for rooftop and residential solar solutions." },
              { step: "02", title: "Commercial Solar", desc: "Target businesses, industries, offices and commercial properties interested in reducing energy costs." },
              { step: "03", title: "Installation Companies", desc: "Generate enquiries from customers actively looking for professional installation services." },
              { step: "04", title: "Solar EPC Companies", desc: "Build online visibility and attract relevant residential, commercial and industrial opportunities." },
              { step: "05", title: "Dealers & Distributors", desc: "Promote solar products and solutions to customers and businesses across targeted locations." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#fdfbf7] p-6 rounded-2xl border border-orange-100 h-full relative overflow-hidden group hover:shadow-md transition-all">
                  <div className="text-6xl font-bold text-orange-100 absolute -top-4 -right-2 group-hover:text-orange-200 transition-colors">{item.step}</div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 mt-8">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 8: Measuring Success ── */}
      <section className="py-20 md:py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Measuring Digital Marketing Success
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                Digital marketing becomes more effective when performance is measured regularly. These insights help identify which channels are contributing to growth and where improvements are required. The strategy can then be refined based on actual performance rather than assumptions.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Website traffic",
              "Qualified leads",
              "Cost per lead",
              "Calls",
              "WhatsApp enquiries",
              "Form submissions",
              "Conversion rate",
              "Search rankings",
              "Google Business Profile actions",
              "Campaign performance"
            ].map((metric, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3 h-full">
                  <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                    <Activity className="text-orange-500" size={16} />
                  </div>
                  <span className="text-slate-700 text-sm font-semibold">{metric}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 16: Why Choose DSS ── */}
      <section className="py-20 md:py-32 bg-[#fdfbf7] border-t border-orange-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Why Choose Digital Success Solutions?
              </h2>
              <p className="text-lg text-slate-600">
                At Digital Success Solutions, we understand that every solar business has different goals, locations, audiences and sales processes. Our approach focuses on creating a digital marketing strategy around your actual business requirements rather than using the same strategy for everyone.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { icon: Target, title: "A Complete Lead Gen Strategy", desc: "We combine SEO, Ads, Social Media, and Content to create a stronger digital ecosystem for your solar business." },
              { icon: LineChart, title: "Customized Strategies", desc: "From increasing online visibility to generating relevant enquiries, our objective is to support your business growth." },
              { icon: BookOpen, title: "Build Trust Before the Sale", desc: "Our content showcases your reviews, projects, and expertise so customers feel confident enquiring." },
              { icon: BarChart, title: "Measure What Matters", desc: "We focus on metrics that help understand business performance, like qualified leads and cost per lead." }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white border border-slate-200 hover:border-orange-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col group">
                    <div className="w-12 h-12 rounded-lg bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center mb-4 transition-colors">
                      <Icon className="text-orange-500" size={24} strokeWidth={2} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 17: Benefits of Digital Marketing ── */}
      <section className="py-10 md:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Turn Solar Website Visitors Into Leads
              </h2>
              <p className="text-lg text-slate-600">
                Digital marketing encompasses more than just driving traffic; it involves a comprehensive strategy that includes engaging content, effective conversion techniques, and ongoing audience interaction.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Capture the Search", desc: "When potential customers search for solar solutions on Google, we ensure your business is visible." },
              { icon: CheckCircle2, title: "Provide Information", desc: "We ensure your website answers customer questions about pricing, subsidies, and installation." },
              { icon: MessageSquare, title: "Build Trust", desc: "Showcase past projects, customer testimonials, and certifications to prove your reliability." },
              { icon: BookOpen, title: "Drive Enquiries", desc: "Clear CTAs like 'Get a Quote' or 'Book a Consultation' make it easy for visitors to take the next step." },
              { icon: Target, title: "Optimize Conversions", desc: "We create a smoother path: Search → Website → Information → Trust → Enquiry → Consultation → Conversion." }
            ].map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-orange-50 transition-colors border border-slate-100 hover:border-orange-100">
                    <div className="w-12 h-12 rounded-full   flex items-center justify-center shrink-0">
                      <Icon className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h4>
                      <p className="text-slate-600 leading-relaxed text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 18 & 19: Final CTA ── */}
      <section className="py-20 md:py-32 bg-orange-500 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Start Growing Your Solar Business Online
            </h2>
            <p className="text-lg md:text-xl text-orange-50 mb-10 leading-relaxed font-medium">
              The demand for solar energy is increasing, but customers have more choices than ever. A strong online presence can help your solar company get discovered, educate potential customers, build trust and generate more enquiries. Let’s create a digital marketing strategy that helps your solar company reach more potential customers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/lets-connect" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-full transition-all hover:shadow-xl hover:-translate-y-1">
                Connect with DSS Today <ArrowRight size={20} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>




      {/* ── FAQ Section ── */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="border-t border-slate-200">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-slate-200 py-6">
                  <button
                    onClick={() => setOpenFaqIdx(openFaqIdx === i ? null : i)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-orange-500 transition-colors pr-8">
                      {faq.q}
                    </h3>
                    <span className={`text-orange-500 transition-transform duration-300 shrink-0 ${openFaqIdx === i ? "rotate-45" : ""}`}>
                      {openFaqIdx === i ? <Minus size={24} /> : <Plus size={24} />}
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaqIdx === i ? "auto" : 0, opacity: openFaqIdx === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-slate-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
      \n    </main>
  );
}
