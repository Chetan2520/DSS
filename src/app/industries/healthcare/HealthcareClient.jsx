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
    heading: "Healthcare SEO",
    desc1: "Build Visibility on Search Engines\n\nSearch Engine Optimization is one of the most important long-term strategies for healthcare businesses.\n\nPeople search for healthcare services using terms such as: Best dental clinic, IVF centre near me, Orthopedic doctor, Physiotherapy clinic, Diagnostic center, Skin specialist, Eye hospital, Best hospital.\n\nA properly optimized website can improve the chances of appearing when potential patients search for relevant services.",
    blocks: [
      {
        title: "Healthcare SEO may include:",
        list: ["Keyword research", "On-page SEO", "Technical SEO", "Service-page optimization", "Healthcare blogs", "Internal linking", "Local SEO", "Mobile optimization", "Website speed optimization", "Quality backlinks"]
      }
    ],
    cta: "Improve Search Visibility",
    image: "/images/sectors/healthcare/h2.png",
    bg: "bg-white"
  },
  {
    id: "website",
    heading: "Professional Healthcare Website",
    desc1: "Turn Website Visitors Into Enquiries\n\nA healthcare website is often one of the first major touchpoints between a provider and a potential patient.\n\nA professional website should make important information easy to understand and easy to access.\n\nThe website should also be mobile-friendly, fast, easy to navigate, and structured around the needs of patients.",
    blocks: [
      {
        title: "Important sections may include:",
        list: ["Doctor profiles", "Healthcare services", "Treatments", "Hospital or clinic information", "Appointment options", "Contact details", "Location and directions", "FAQs", "Educational resources", "Patient reviews and testimonials"]
      }
    ],
    cta: "Build Your Healthcare Website",
    image: "/images/sectors/healthcare/h3.png",
    bg: "bg-slate-50"
  },
  {
    id: "local-seo",
    heading: "Google Business Profile & Local SEO",
    desc1: "Reach Patients Searching Nearby\n\nFor clinics, hospitals, diagnostic centers, dentists, physiotherapists, and other location-based healthcare businesses, local visibility is extremely important.\n\nA properly maintained Google Business Profile can help improve local visibility and make it easier for potential patients to contact the business.",
    blocks: [
      {
        title: "Google may display local business information such as:",
        list: ["Business name", "Location", "Phone number", "Reviews", "Working hours", "Photos", "Services", "Website", "Directions"]
      }
    ],
    cta: "Improve Local Visibility",
    image: "/images/sectors/healthcare/h4.png",
    bg: "bg-white"
  },
  {
    id: "content",
    heading: "Healthcare Content Marketing",
    desc1: "Educate Before You Convert\n\nHealthcare is an information-driven industry. Patients frequently search online to understand symptoms, treatments, procedures, and general health topics.\n\nThis makes content marketing highly valuable for healthcare businesses.\n\nUseful content can improve search visibility while helping potential patients make more informed decisions.",
    blocks: [
      {
        title: "Content ideas can include:",
        list: ["Treatment guides", "Healthcare awareness articles", "FAQs", "Doctor advice", "General wellness information", "Procedure explanations", "Preventive healthcare content", "Healthcare videos", "Myth vs. fact content"]
      }
    ],
    cta: "Start Content Marketing",
    image: "/images/sectors/healthcare/h5.png",
    bg: "bg-slate-50"
  },
  {
    id: "social-media",
    heading: "Social Media Marketing for Healthcare",
    desc1: "Build Trust Through Consistent Communication\n\nSocial media provides healthcare businesses with an opportunity to communicate with their audience regularly.\n\nThe goal should not be posting just for the sake of activity. A strong healthcare social media strategy should communicate professionalism, knowledge, trust, and human connection.",
    blocks: [
      {
        title: "Healthcare brands can share:",
        list: ["Healthcare awareness posts", "Educational videos", "Doctor introductions", "Treatment information", "FAQs", "Wellness tips", "Clinic updates", "Healthcare myths and facts", "Patient education content"]
      }
    ],
    cta: "Grow Social Media",
    image: "/images/sectors/healthcare/h6.png",
    bg: "bg-white"
  },
  {
    id: "performance",
    heading: "Performance Marketing",
    desc1: "Reach the Right Audience Faster\n\nSEO is a long-term strategy, while paid advertising can help healthcare businesses increase visibility for specific services more quickly.\n\nPlatforms such as Google Ads and Meta Ads can be used to promote appropriate healthcare services, subject to applicable advertising, platform, and privacy requirements.\n\nThe focus should be on generating relevant enquiries instead of simply increasing clicks.",
    blocks: [
      {
        title: "Healthcare campaigns can be designed around services such as:",
        list: ["Dental services", "Diagnostic services", "Physiotherapy", "Wellness services", "Consultations", "Hospital departments", "Specialized treatments"]
      }
    ],
    cta: "Launch Paid Campaigns",
    image: "/images/sectors/healthcare/h7.png",
    bg: "bg-slate-50"
  },
  {
    id: "analytics",
    heading: "Analytics and Performance Tracking",
    desc1: "Measure What Is Working\n\nOne of the biggest advantages of digital marketing is the ability to measure performance.\n\nThese insights can help identify which strategies are producing results and where improvements are needed.\n\nData-driven optimization helps businesses make better marketing decisions.",
    blocks: [
      {
        title: "Healthcare businesses can track metrics such as:",
        list: ["Website traffic", "Organic search visibility", "Keyword rankings", "Phone enquiries", "Appointment enquiries", "Google Business Profile interactions", "Social media engagement", "Ad performance", "Landing-page conversions"]
      }
    ],
    cta: "Track Performance",
    image: "/images/sectors/healthcare/h8.png",
    bg: "bg-white"
  }
];

export default function HealthcareClient() {
  const [openFaqIdx, setOpenFaqIdx] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [openIntroIdx, setOpenIntroIdx] = useState(null);
  const [openWhyChooseIdx, setOpenWhyChooseIdx] = useState(0);

  const introAccordions = [
    {
      title: "What Is Digital Marketing in Healthcare?",
      desc: "Healthcare digital marketing means using online platforms and digital strategies to promote healthcare services, educate potential patients, build trust, and generate relevant enquiries. It can include SEO, Local SEO, Google Business Profile optimization, website development, social media marketing, content marketing, Google Ads, Meta Ads, and more. The objective is not simply to get more traffic, but to help people find the right information, understand available services, trust the provider, and take the next appropriate action."
    },
    {
      title: "Why Is Digital Marketing Important for Healthcare?",
      desc: "Patients are becoming more proactive when researching healthcare services online. Before choosing a healthcare provider, they may search for doctors, treatments, facilities, locations, reviews, costs, and general educational information."
    },
    {
      title: "Benefits of a Strong Digital Presence",
      desc: "A strong digital presence can help healthcare businesses increase online visibility, reach potential patients, generate relevant enquiries, improve brand awareness, build credibility and trust, increase website traffic, and support long-term business growth. Digital marketing should focus on helpful information, responsible communication, transparency, and a positive user experience."
    }
  ];

  const faqs = [];

  return (
    <main className="   font-sans">

      {/* ── Section 1: Hero Section ── */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden pt-24 md:pt-32 pb-16">
        <div className="absolute inset-0 z-0">
          <img src="/images/sectors/healthcare/hero.png" alt="Healthcare Background" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="max-w-2xl">
            <FadeIn>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-zinc-900 leading-[1.1] tracking-tight mb-6">
                Importance of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Digital Marketing in Healthcare</span>
              </h1>

              <div className="mb-8 text-sm md:text-lg text-zinc-900  ">
                {isExpanded ? (
                  <>
                    <p>
                      The way patients find and choose healthcare providers has changed. Today, people often search on Google, explore healthcare websites, check reviews, watch informative videos, and compare different providers before making an appointment. This change has made digital marketing in healthcare an important part of modern healthcare growth. Hospitals, clinics, doctors, diagnostic centers, dental clinics, IVF centers, physiotherapy centers, and wellness businesses need a strong online presence to connect with potential patients at the right stage of their journey.
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
                    The way patients find and choose healthcare providers has changed. Today, people often search on Google, explore healthcare websites, check reviews, watch informative videos, and compare different providers before making an appointment...
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
                src="/images/sectors/healthcare/h1.png"
                alt="Healthcare Business Growth"
                className="rounded-2xl  border border-slate-100"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-800 mb-6">
              What Is Digital Marketing in Healthcare?
            </h2>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              Digital Success Solutions helps healthcare businesses improve their online visibility through SEO, Local SEO, website development, social media marketing, performance marketing, content marketing, and other digital growth strategies.
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
              7 Effective Digital Marketing Strategies for Healthcare
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

      {/* ── Section 15: Our Approach ── */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Digital Marketing for Different Healthcare Businesses
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                Every healthcare business has different marketing requirements. We create targeted strategies to help you reach the right audience.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-8">
            {[
              { step: "01", title: "Hospitals", desc: "Hospitals can benefit from SEO, service-page optimization, content marketing, reputation management, Local SEO, and performance marketing." },
              { step: "02", title: "Clinics", desc: "Clinics can focus on local search visibility, Google Business Profile optimization, website development, reviews, and targeted advertising." },
              { step: "03", title: "Dental Clinics", desc: "Dental businesses can use SEO, social media, educational content, Google Ads, and local marketing to attract potential patients." },
              { step: "04", title: "IVF Centres", desc: "IVF centers can benefit from educational content, SEO, reputation building, social media, and carefully planned paid campaigns." },
              { step: "05", title: "Diagnostic Centres", desc: "Diagnostic centers can focus on Local SEO, service pages, Google Ads, Google Business Profile optimization, and conversion-focused landing pages." },
              { step: "06", title: "Physiotherapy & Wellness Centres", desc: "These businesses can use informative content, social media marketing, SEO, video content, and local digital marketing to increase awareness and enquiries." }
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

      {/* ── Section 16: Why Choose DSS ── */}
      <section className="py-20 md:py-32 bg-[#fdfbf7] border-t border-orange-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Your Healthcare Digital Marketing Partner
              </h2>
              <p className="text-lg text-slate-600">
                At Digital Success Solutions, we understand that healthcare marketing is not just about running advertisements or posting on social media. A complete strategy needs different digital channels to work together. Our approach focuses on creating a strong digital presence that helps healthcare businesses become easier to discover, easier to understand, and easier to contact.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { icon: Target, title: "SEO & Local SEO", desc: "We provide comprehensive SEO and Google Business Profile optimization to help you get discovered." },
              { icon: LineChart, title: "Website Development", desc: "We build fast, secure, and user-friendly healthcare websites designed for patient conversions." },
              { icon: BookOpen, title: "Social Media & Performance", desc: "Engage your audience with professional social media and reach them faster with targeted paid campaigns." },
              { icon: BarChart, title: "Content & Brand Building", desc: "We develop educational content and digital brand building strategies to establish trust and authority." }
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
                Benefits of Digital Marketing for Healthcare Businesses
              </h2>
              <p className="text-lg text-slate-600">
                A well-planned healthcare digital marketing strategy can provide several long-term benefits.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Better Online Visibility", desc: "SEO and Local SEO can help healthcare businesses become more discoverable when people search for relevant services." },
              { icon: MessageSquare, title: "More Relevant Enquiries", desc: "Targeted digital marketing can help connect healthcare providers with audiences interested in their services." },
              { icon: CheckCircle2, title: "Stronger Brand Trust", desc: "Educational content, professional websites, genuine reviews, and consistent communication can strengthen credibility." },
              { icon: Users, title: "Better Patient Engagement", desc: "Social media, email, content, and digital communication can help healthcare brands stay connected with their audience." },
              { icon: LineChart, title: "Long-Term Growth", desc: "Unlike one-time advertising, SEO and content strategies can continue generating visibility and value over time." }
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
              Build a Stronger Digital Presence for Your Healthcare Business
            </h2>
            <p className="text-lg md:text-xl text-orange-50 mb-10 leading-relaxed font-medium">
              The healthcare industry is becoming increasingly digital, and patient behaviour is changing with it. People want convenient access to information, transparent communication, trusted healthcare providers, and easy ways to make enquiries or appointments. From SEO and healthcare websites to Local SEO, content marketing, social media, and performance marketing, the right combination of strategies can help healthcare businesses improve visibility, build trust, and generate meaningful enquiries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/lets-connect" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-full transition-all hover:shadow-xl hover:-translate-y-1">
                Connect with DSS Today <ArrowRight size={20} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
