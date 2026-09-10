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
  ChevronRight
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
          {block.desc && <p className="text-slate-600 text-[15px] mb-4 leading-relaxed">{block.desc}</p>}
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
      {service.desc1 && <p className="text-slate-600 text-lg mb-8 leading-relaxed">{service.desc1}</p>}
      
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
      
      {service.cta && (
        <div className="mt-8">
          <Link href="/lets-connect" className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all">
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
    heading: "SEO Services for Ayurveda Centers",
    desc1: "Search Engine Optimization helps your Ayurveda center become more discoverable when potential clients search online for Ayurvedic treatments, doctors, wellness services, and related information.",
    desc2: "Our Ayurveda SEO strategy focuses on improving search visibility while attracting relevant visitors who are more likely to engage with your business.",
    blocks: [
      {
        title: "Keyword Research",
        desc: "We identify relevant keywords based on your services, location, audience, and search demand. Examples include:",
        list: ["Ayurveda center near me", "Ayurvedic treatment center", "Best Ayurveda center", "Ayurvedic doctor", "Panchakarma treatment", "Ayurvedic wellness center", "Ayurvedic therapy", "Ayurveda treatment"]
      },
      {
        title: "On-Page SEO",
        desc: "We optimize important website elements such as:",
        list: ["Website titles", "Headings", "Website content", "Internal linking", "URLs", "Images", "Meta descriptions", "Other important SEO elements"]
      },
      {
        title: "Local SEO",
        desc: "We optimize your online presence for location-based searches so potential clients can find your Ayurveda center when searching for relevant services in your city or area."
      },
      {
        title: "Content SEO",
        desc: "We create useful and search-focused content around Ayurveda, wellness, treatments, therapies, FAQs, and commonly searched questions."
      }
    ],
    footer: { title: "SEO Goal", desc: "The objective is not just to generate website traffic. Our focus is on attracting relevant visitors and potential enquiries for your Ayurveda business." },
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop",
    bg: "bg-white"
  },
  {
    id: "local-seo",
    heading: "Google & Local SEO for Ayurveda Centers",
    desc1: "For local Ayurveda businesses, visibility on Google can play an important role in attracting nearby potential clients. People may search for terms such as \"Ayurveda center near me,\" \"Ayurvedic doctor near me,\" or \"Panchakarma treatment near me.\"",
    desc2: "Our Local SEO services focus on strengthening your visibility for relevant local searches.",
    blocks: [
      {
        title: "Our Local SEO Services Include",
        list: ["Google Business Profile Optimization", "Local Keyword Targeting", "Business Information Optimization", "Google Posts", "Review Strategy", "Local Content", "Location-Based Website Optimization", "NAP Consistency", "Local Search Optimization"]
      }
    ],
    cta: "Improve Your Local Visibility",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop",
    bg: "bg-slate-50"
  },
  {
    id: "social-media",
    heading: "Social Media Marketing for Ayurveda Centers",
    desc1: "Social media gives Ayurveda brands an opportunity to educate their audience, showcase expertise, communicate wellness information, and build trust over time.",
    desc2: "Instead of making every post promotional, we focus on creating content that is informative, useful, trustworthy, and engaging.",
    blocks: [
      {
        title: "Content We Create",
        list: ["Ayurvedic lifestyle tips", "Wellness education", "Treatment information", "Panchakarma awareness", "Frequently Asked Questions", "Healthy daily routines", "Ayurveda-inspired wellness content", "Ayurveda center facilities", "Practitioner expertise", "Educational videos and reels"]
      },
      {
        title: "Platforms",
        desc: "Instagram | Facebook | YouTube"
      }
    ],
    footer: { desc: "Our content strategy focuses on educating the audience while maintaining a professional and trustworthy brand image." },
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop",
    bg: "bg-white"
  },
  {
    id: "performance-marketing",
    heading: "Performance Marketing for Ayurveda Centers",
    desc1: "If your Ayurveda center needs faster audience reach and enquiry opportunities, paid advertising can be integrated with your overall digital marketing strategy.",
    desc2: "Performance marketing allows you to target relevant audiences based on factors such as location, search intent, interests, and other campaign signals.",
    blocks: [
      {
        title: "Campaign Focus",
        list: ["Location-based targeting", "Relevant audience segments", "Search intent", "Remarketing", "Lead generation", "Website traffic", "Call campaigns", "Enquiry campaigns"]
      },
      {
        title: "Optimization",
        desc: "Campaign performance is continuously monitored to identify opportunities for improvement. Based on performance data, we can optimize:",
        list: ["Audience targeting", "Ad creatives", "Campaign messaging", "Landing pages", "Budget allocation", "Conversion opportunities"]
      }
    ],
    footer: { desc: "The objective is to improve campaign efficiency and generate more relevant opportunities for your Ayurveda business." },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    bg: "bg-slate-50"
  },
  {
    id: "content-marketing",
    heading: "Content Marketing for Ayurveda Businesses",
    desc1: "Potential clients often have many questions before choosing an Ayurveda center or treatment. They may search for information about Panchakarma, Ayurvedic therapies, wellness practices, treatment processes, or how to choose the right Ayurveda center.",
    desc2: "Useful content can answer these questions while helping your brand build credibility and trust.",
    blocks: [
      {
        title: "Content Types",
        list: ["SEO Blogs", "Website Content", "Treatment Pages", "Social Media Content", "Educational Articles", "Video Scripts", "FAQs", "Informational Guides"]
      },
      {
        title: "Blog Topic Examples",
        list: ["What Is Panchakarma and What Can You Expect During the Process?", "How to Choose an Ayurveda Center for Your Wellness Goals", "Understanding Traditional Ayurvedic Wellness Therapies"]
      }
    ],
    footer: { desc: "Consistent content marketing can help your Ayurveda business educate potential clients while creating additional opportunities to appear for relevant search queries." },
    image: "/images/sectors/ayurveda.png",
    bg: "bg-white"
  },
  {
    id: "website-development",
    heading: "Website Development for Ayurveda Centers",
    desc1: "Your website is an important digital touchpoint for your Ayurveda business. It is often one of the first places where potential clients learn about your treatments, services, practitioners, and center.",
    desc2: "If your website is slow, confusing, difficult to navigate, or outdated, interested visitors may leave without making an enquiry. Digital Success Solutions focuses on creating websites that provide a clear, mobile-friendly, and user-focused experience.",
    blocks: [
      {
        title: "Our Website Focus",
        list: ["Clear service presentation", "Mobile-friendly design", "Easy navigation", "Strong CTAs", "SEO-friendly structure", "Fast-loading pages", "Appointment & enquiry options", "Trust-building content", "Location-based information"]
      },
      {
        title: "Goal",
        desc: "Your website should quickly help visitors understand: Who you are. What you offer. How they can contact you.",
      }
    ],
    footer: { desc: "A clear and conversion-focused website can help turn interested visitors into genuine enquiry opportunities." },
    image: "/images/sectors/massage.png",
    bg: "bg-slate-50"
  }
];

export default function AyurvedaClient() {
  const [openFaqIdx, setOpenFaqIdx] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [openIntroIdx, setOpenIntroIdx] = useState(0);

  const introAccordions = [
    {
      title: "The Shift in Patient Search",
      desc: "The way people search for healthcare and wellness services has changed. Today, potential clients do not depend only on referrals when looking for Ayurvedic treatments. They use Google, social media, and websites to research Ayurveda centers, Ayurvedic doctors, Panchakarma treatments, Ayurvedic therapies, and wellness services."
    },
    {
      title: "Tailored Marketing Strategies",
      desc: "Digital Success Solutions creates customized digital marketing strategies for Ayurveda centers, Ayurvedic clinics, wellness centers, and practitioners. Our approach combines SEO, Local SEO, Social Media Marketing, Performance Marketing, Content Marketing, and Website Development to help your business build a stronger digital presence."
    },
    {
      title: "Our Core Objective",
      desc: "Our goal is not simply to increase online traffic. We focus on reaching the right audience, building trust through useful information, improving online visibility, and creating relevant enquiry opportunities."
    }
  ];

  const faqs = [
    {
      q: "Why is digital marketing important for Ayurveda centers?",
      a: "Digital marketing helps Ayurveda centers improve online visibility, reach people searching for Ayurvedic services, build trust through educational content, and generate relevant enquiries through SEO, social media, and performance marketing."
    },
    {
      q: "How can SEO help an Ayurveda center get more patients or enquiries?",
      a: "SEO helps an Ayurveda center appear in relevant Google searches such as “Ayurveda center near me,” “Ayurvedic treatment center,” and “Panchakarma treatment.” Better visibility can bring more relevant visitors and enquiry opportunities."
    },
    {
      q: "What digital marketing services are useful for Ayurveda centers?",
      a: "Important services include SEO, Local SEO, Google Business Profile optimization, Social Media Marketing, Performance Marketing, Content Marketing, and conversion-focused Website Development."
    },
    {
      q: "How does Local SEO help Ayurveda centers?",
      a: "Local SEO improves visibility for location-based searches. By optimizing your Google Business Profile, website, local content, business information, and reviews, your Ayurveda center can become easier for nearby potential clients to discover."
    },
    {
      q: "What type of content should an Ayurveda center post online?",
      a: "An Ayurveda center can create educational content such as Ayurvedic lifestyle tips, treatment information, Panchakarma awareness, FAQs, wellness guides, healthy routines, educational videos, and informative blogs."
    },
    {
      q: "How can Digital Success Solutions help grow an Ayurveda center online?",
      a: "Digital Success Solutions provides an integrated digital marketing approach covering SEO, Local SEO, Social Media Marketing, Performance Marketing, Content Marketing, and Website Development to help Ayurveda businesses improve visibility, build trust, and generate relevant enquiries."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-orange-500 selection:text-white overflow-x-clip">
      
      {/* ── Section 1: Hero Section ── */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden pt-24 md:pt-32 pb-16">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/images/sectors/ayurveda-hero.png" alt="Ayurveda Background" className="w-full h-full object-cover" />
          {/* Dark Overlay for Text Readability */}
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="max-w-2xl">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-900 leading-[1.1] tracking-tight mb-6">
                Digital Marketing for <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Ayurveda Centers</span>
              </h1>
              
              <div className="mb-8 text-sm md:text-lg text-zinc-900  ">
                {isExpanded ? (
                  <>
                    <p>
                      Ayurveda centers need a strong digital marketing strategy for online visibility, relevant enquiries, and long-term growth. Digital Success Solutions helps Ayurveda businesses reach the right audience through SEO, Local SEO, Social Media Marketing, Performance Marketing, Content Marketing, and Website Development.
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
                     Ayurveda centers need a strong digital marketing strategy for online visibility, relevant enquiries, and long-term growth. Digital Success Solutions helps Ayurveda businesses reach the... 
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
                  Get Started Today <ArrowRight size={20} />
                </Link>
                 
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Section 2: Introduction ── */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-10 text-left tracking-tight">
              Grow Your Ayurveda Center <br /> With Digital Marketing
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Image Side */}
            <FadeIn>
              <div className="relative w-full aspect-[4/3] lg:aspect-[1/1] xl:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <img src="/images/sectors/ayurveda.png" alt="Ayurveda" className="w-full h-full object-cover" />
              </div>
            </FadeIn>

            {/* Right Content Side */}
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-start">
                {/* Paragraph Dropdowns */}
                <div className="w-full mt-4">
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
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Section 3: Why Digital Marketing Is Important ── */}
      <section className="py-20 md:py-32 bg-[#fdfbf7] border-y border-orange-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6">
                Why Ayurveda Centers Need Digital Marketing
              </h2>
              <p className="text-sm md:text-base text-slate-600">
                The Ayurveda and wellness industry is becoming increasingly competitive online. When potential clients search for Ayurvedic services, your business needs to be visible where those searches are happening.
              </p>
            </div>  
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: " Increase Online Visibility",
                desc: "Improve your presence across search engines, local search results, social media, and other digital platforms."
              },
              {
                icon: Users,
                title: " Reach People Searching",
                desc: "Connect with people actively looking for Ayurvedic doctors, Ayurveda centers, Panchakarma treatments, wellness therapies, and related services."
              },
              {
                icon: MessageSquare,
                title: "  Generate Relevant Enquiries",
                desc: "A combination of SEO, advertising, content, and conversion-focused website experiences can create more opportunities for calls, enquiries, and appointments."
              },
              {
                icon: MapPin,
                title: "  Improve Google & Local Search",
                desc: "Local SEO can help your Ayurveda center become more visible when people search for services in your city or nearby areas."
              },
              {
                icon: BookOpen,
                title: "  Build Trust Through Content",
                desc: "Blogs, FAQs, videos, social media posts, and informative guides can help answer potential clients' questions and demonstrate your expertise."
              },
              {
                icon: Heart,
                title: "  Showcase Treatments & Expertise",
                desc: "Use your website and social media channels to clearly communicate your treatments, therapies, facilities, practitioners, and approach."
              }
            ].map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-2xl   h-full">
                  <div className="w-12 h-12   flex items-center justify-center mb-6">
                    <feature.icon className="text-orange-500" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          
        </div>
      </section>

      {/* ── Section 4 Header ── */}
      <section className="pt-20 md:pt-32 pb-12 bg-white relative z-[5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Our Digital Marketing Services for Ayurveda Centers
              </h2>
              <p className="text-lg text-slate-600">
                At Digital Success Solutions, we provide an integrated range of digital marketing services designed around the specific requirements of Ayurveda centers, clinics, wellness businesses, and practitioners.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 4 Content (Full-Width Sticky Stack) ── */}
      <div className="relative">
        {servicesData.map((service, idx) => (
          <section 
            key={service.id}
            className={`sticky top-0 min-h-screen w-full flex items-center py-20 lg:py-24 ${service.bg}  `}
            style={{ zIndex: 10 + idx }}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              
              {/* Left Content */}
              <ServiceLeftContent service={service} />

              {/* Right Image */}
              <div className="relative w-full lg:w-[85%] mx-auto aspect-video lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-slate-100">
                <img src={service.image} alt={service.heading} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent mix-blend-multiply"></div>
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* ── Section 5: Challenges & Solutions ── */}
      <section className="py-20 md:py-32 bg-[#1e293b] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Digital Marketing Challenges Faced by Ayurveda Centers
              </h2>
              <p className="text-lg text-slate-300">
                Ayurveda centers can face several challenges when trying to build their online presence. The right digital strategy should address these challenges with practical solutions.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="max-w-5xl mx-auto bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <div className="grid grid-cols-2 bg-slate-900 p-6 border-b border-slate-700">
                <div className="font-bold text-lg text-slate-300">Challenge</div>
                <div className="font-bold text-lg text-orange-400">Solution</div>
              </div>
              {[
                ["Low Google Visibility", "SEO & Local SEO"],
                ["Few Website Enquiries", "Conversion-Focused Website"],
                ["Strong Local Competition", "Local SEO & Targeted Campaigns"],
                ["Limited Social Media Reach", "Social Media Marketing"],
                ["Lack of Online Trust", "Educational Content & Reviews"],
                ["Low-Quality Leads", "Audience & Campaign Optimization"],
                ["Poor Website Experience", "Website Redesign & CRO"],
                ["Limited Brand Awareness", "Content & Performance Marketing"]
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 p-6 border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                  <div className="text-slate-300 flex items-center gap-3">
                    <Minus className="text-slate-500 shrink-0" size={16} /> {row[0]}
                  </div>
                  <div className="text-white flex items-center gap-3 font-medium">
                    <CheckCircle className="text-orange-500 shrink-0" size={18} /> {row[1]}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 6: Our Approach ── */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Our Approach to Ayurveda Digital Marketing
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                Every Ayurveda business is different. We do not follow a one-size-fits-all digital marketing strategy. We build our approach around your specific business requirements.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Research First", desc: "We understand your market, competitors, search demand, target audience, services, and existing digital presence." },
              { step: "02", title: "Build Visibility", desc: "We use SEO, Local SEO, content marketing, and social media to improve your online presence and make your business easier to discover." },
              { step: "03", title: "Generate Enquiries", desc: "We target potentially interested audiences and create opportunities for website enquiries, calls, appointments, and consultations." },
              { step: "04", title: "Measure & Improve", desc: "We analyze website and campaign performance and continuously optimize the strategy based on available data and results." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#fdfbf7] p-8 rounded-2xl border border-orange-100 h-full relative overflow-hidden group hover:shadow-md transition-all">
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

      {/* ── Section 7: Why Choose DSS ── */}
      <section className="py-20 md:py-32 bg-[#fdfbf7] border-t border-orange-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Why Choose Digital Success Solutions?
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Industry-Focused Strategy", desc: "We create strategies according to your business, target audience, location, services, competition, and growth objectives." },
              { title: "SEO + Performance Marketing", desc: "Combine long-term organic visibility with relevant paid marketing opportunities to create a balanced digital growth strategy." },
              { title: "Content That Educates", desc: "We create informative content that answers audience questions, communicates your expertise, and helps build trust." },
              { title: "Data-Driven Decisions", desc: "Website and campaign data help us understand what is working and where improvements can be made." },
              { title: "Complete Digital Solutions", desc: "From Web Dev and SEO to Social Media and Performance Marketing, we provide multiple services through one dedicated team." }
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.1} className={i === 4 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="text-orange-500" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">{feature.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 8: Final CTA ── */}
      <section className="py-20 md:py-32 bg-orange-500 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Grow Your Ayurveda Center Online?
            </h2>
            <p className="text-lg md:text-xl text-orange-50 mb-10 leading-relaxed font-medium">
              Digital Success Solutions helps Ayurveda businesses build a stronger digital presence. Whether you want to improve Google visibility, reach a wider audience, or generate relevant enquiries, the right strategy can help you move toward sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/lets-connect" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-full transition-all hover:shadow-xl hover:-translate-y-1">
                Talk to Our Experts <ArrowRight size={20} />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold rounded-full transition-all">
                Get a Free Consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="border-t border-slate-200">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  title={faq.q}
                  desc={faq.a}
                  isOpen={openFaqIdx === idx}
                  onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
// Helper icon
function SparkleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    </svg>
  );
}
