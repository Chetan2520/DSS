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
    id: "website",
    heading: "Professional Healthcare Website",
    desc1: "Your Website Is Your Digital Clinic\n\nA healthcare website is often one of the first places potential patients visit after discovering a doctor online.\n\nYour website should be professional, easy to navigate, mobile-friendly, and informative.\n\nAt Digital Success Solutions, we create healthcare websites with a focus on user experience, SEO, responsive design, and conversion-friendly structure.",
    blocks: [
      {
        title: "Important website sections can include:",
        list: ["Doctor profile", "Qualifications and experience", "Specializations", "Treatments and services", "Clinic information", "Appointment options", "Contact information", "Location and directions", "FAQs", "Educational blogs", "Patient reviews", "Consultation information"]
      }
    ],
    cta: "Build Your Healthcare Website",
    image: "/images/sectors/doctor/d2.png",
    bg: "bg-white"
  },
  {
    id: "seo",
    heading: "SEO for Doctors",
    desc1: "Help Patients Find You on Google\n\nSearch Engine Optimization can help doctors and medical practices improve their organic visibility.\n\nPotential patients may search terms related to:\nDoctor specialization | Treatment | Medical condition | Clinic | Location | Healthcare service\n\nThe focus should be on accurate, helpful, user-focused content rather than simply inserting keywords repeatedly.",
    blocks: [
      {
        title: "A healthcare SEO strategy may include:",
        list: ["Keyword research", "On-page SEO", "Technical SEO", "Service-page optimization", "Healthcare blogs", "Internal linking", "Schema implementation", "Mobile optimization", "Website speed", "Local SEO", "Quality backlinks"]
      }
    ],
    cta: "Improve Your Search Visibility",
    image: "/images/sectors/doctor/d3.png",
    bg: "bg-slate-50"
  },
  {
    id: "local-seo",
    heading: "Local SEO & Google Business Profile",
    desc1: "Be Visible When Patients Search Nearby\n\nFor doctors and medical practices that depend on local patients, Google Business Profile is an important part of digital marketing.\n\nRegularly maintaining your profile and keeping information accurate can improve the overall local search experience.",
    blocks: [
      {
        title: "An optimized profile can provide access to:",
        list: ["Clinic name", "Address", "Phone number", "Website", "Working hours", "Services", "Photos", "Reviews", "Directions"]
      }
    ],
    cta: "Optimize Your Local Presence",
    image: "/images/sectors/doctor/d4.png",
    bg: "bg-white"
  },
  {
    id: "social-media",
    heading: "Social Media Marketing for Doctors",
    desc1: "Stay Connected With Your Audience\n\nSocial media gives doctors an opportunity to communicate with their audience outside the clinic.\n\nThe objective should be to create content that feels informative and trustworthy rather than overly promotional.",
    blocks: [
      {
        title: "Platforms such as Instagram, Facebook, and YouTube can be used for:",
        list: ["Health awareness content", "Educational videos", "Doctor introduction", "Treatment information", "FAQs", "General wellness tips", "Healthcare myths and facts", "Clinic updates", "Short-form videos", "Educational reels"]
      }
    ],
    cta: "Build Your Social Presence",
    image: "/images/sectors/doctor/d5.png",
    bg: "bg-slate-50"
  },
  {
    id: "content-marketing",
    heading: "Content Marketing for Medical Practices",
    desc1: "Answer the Questions Patients Are Searching For\n\nContent marketing can help doctors address common questions their audience is already asking online.\n\nFor example, an orthopedic practice could publish educational content about joint health, while a dental practice could create content around oral hygiene and common dental concerns.\n\nGood healthcare content should be easy to understand, factually responsible, and created with the patient's information needs in mind.",
    blocks: [
      {
        title: "A medical practice can create:",
        list: ["Blogs", "FAQs", "Treatment guides", "Educational videos", "Infographics", "Social media content", "Healthcare awareness articles"]
      }
    ],
    cta: "Develop Your Content Strategy",
    image: "/images/sectors/doctor/d6.png",
    bg: "bg-white"
  },
  {
    id: "performance-marketing",
    heading: "Performance Marketing for Doctors",
    desc1: "Reach the Right Audience With Paid Campaigns\n\nPaid advertising can provide faster visibility for selected healthcare services.\n\nDepending on the service and applicable advertising policies, campaigns can be planned through platforms such as Google Ads and Meta Ads.\n\nHowever, healthcare advertising requires careful attention to platform rules, privacy, responsible claims, and appropriate messaging.\n\nThe objective should be to generate relevant enquiries rather than simply maximize clicks.",
    blocks: [
      {
        title: "Campaigns may focus on:",
        list: ["Specific healthcare services", "Consultation enquiries", "Clinic awareness", "Location-based searches", "Treatment-related landing pages"]
      }
    ],
    cta: "Start Your Ads Campaign",
    image: "/images/sectors/doctor/d7.png",
    bg: "bg-slate-50"
  },
  {
    id: "reputation-management",
    heading: "Online Reputation Management",
    desc1: "Your Reviews Can Influence Patient Decisions\n\nOnline reviews are an important part of a medical practice's digital presence.\n\nPotential patients may look at reviews before deciding whether to contact a doctor or clinic.\n\nA professional approach to reputation management can help strengthen trust and demonstrate that patient experience matters.",
    blocks: [
      {
        title: "Doctors and medical practices should:",
        list: ["Encourage genuine patient feedback", "Monitor reviews regularly", "Respond professionally", "Address concerns appropriately", "Maintain accurate business information", "Avoid misleading or fabricated testimonials"]
      }
    ],
    cta: "Manage Your Reputation",
    image: "/images/sectors/doctor/d8.png",
    bg: "bg-white"
  },
  {
    id: "whatsapp",
    heading: "WhatsApp & Patient Communication",
    desc1: "Make Communication More Convenient\n\nWhatsApp can be useful for appropriate patient communication, depending on the practice's processes and privacy requirements.\n\nCommunication should always respect patient privacy and applicable healthcare data-protection requirements.",
    blocks: [
      {
        title: "It can support activities such as:",
        list: ["Appointment enquiries", "Appointment reminders", "General updates", "Follow-up communication", "Clinic information", "Service-related queries"]
      }
    ],
    cta: "Improve Patient Communication",
    image: "/images/sectors/doctor/d9.png",
    bg: "bg-slate-50"
  },
  {
    id: "video-marketing",
    heading: "Video Marketing for Doctors",
    desc1: "Let Patients Understand You Before They Visit\n\nVideo allows doctors to communicate in a more personal and engaging format.\n\nShort-form videos can be particularly useful for social media, while longer educational videos can provide deeper information through platforms such as YouTube.",
    blocks: [
      {
        title: "Doctors can create videos around:",
        list: ["General healthcare education", "Frequently asked questions", "Treatment explanations", "Clinic introductions", "Doctor introductions", "Preventive health information", "Healthcare awareness campaigns"]
      }
    ],
    cta: "Start Video Marketing",
    image: "/images/sectors/doctor/d10.png",
    bg: "bg-white"
  }
];

export default function DoctorClient() {
  const [openFaqIdx, setOpenFaqIdx] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [openIntroIdx, setOpenIntroIdx] = useState(null);
  const [openWhyChooseIdx, setOpenWhyChooseIdx] = useState(0);

  const introAccordions = [
    {
      title: "What Is Digital Marketing for Doctors?",
      desc: "Digital Marketing for Doctors is the use of online platforms and marketing strategies to improve a doctor's visibility, communicate expertise, educate potential patients, and generate relevant enquiries. It can include SEO, Local SEO, website development, social media, content marketing, and more."
    },
    {
      title: "Reaching the Right Audience",
      desc: "A good strategy does not focus only on getting more visitors. It focuses on reaching the right audience and providing useful information that helps people take the next appropriate step."
    },
    {
      title: "Why Do Doctors Need Digital Marketing?",
      desc: "Patients have more choices and more information than ever before. When someone searches for a doctor or medical practice, they may compare several options before contacting one. Your online presence can influence how they perceive your expertise, professionalism, services, and credibility."
    }
  ];

  const faqs = [];

  return (
    <main className="   font-sans">

      {/* ── Section 1: Hero Section ── */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden pt-24 md:pt-32 pb-16">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/images/sectors/doctor/hero.png" alt="Doctor Background" className="w-full h-full object-cover" />
          {/* Dark Overlay for Text Readability - OMITTED AS REQUESTED */}
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="max-w-2xl">
            <FadeIn>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-zinc-900 leading-[1.1] tracking-tight mb-6">
                Digital Marketing for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Doctors & Medical Practices</span>
              </h1>

              <div className="mb-8 text-sm md:text-lg text-zinc-900  ">
                {isExpanded ? (
                  <>
                    <p>
                      Today, a patient's journey often starts long before they visit a doctor's clinic. They may search on Google, check a doctor's website, read reviews, explore social media, or look for information about a particular treatment before making a decision. Digital Success Solutions provides result-focused digital marketing solutions for doctors and medical practices.
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
                    Today, a patient's journey often starts long before they visit a doctor's clinic. They may search on Google, check a doctor's website, read reviews, explore social media, or...
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
                src="/images/sectors/doctor/d1.png"
                alt="Spa Business Growth"
                className="rounded-2xl  border border-slate-100"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-800 mb-6">
              Why Do Doctors Need Digital Marketing?
            </h2>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              Effective Digital Marketing for Medical Practices can help doctors improve online visibility, reach potential patients, build professional credibility, generate relevant enquiries, increase website traffic, improve local search presence, share healthcare information, strengthen online reputation, stay connected with their audience, and build long-term brand awareness.
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
              Digital Marketing Strategies for Doctors
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
                Digital Marketing for Different Medical Practices
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                At Digital Success Solutions, we understand that every medical practice has different goals. That is why we focus on building customized digital strategies rather than following the same approach for every healthcare business.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-8">
            {[
              { step: "01", title: "Doctors & Specialists", desc: "Build professional visibility through SEO, content, social media, Local SEO, and a strong personal website." },
              { step: "02", title: "Hospitals", desc: "Promote departments, treatments, specialties, facilities, and healthcare information through an integrated digital strategy." },
              { step: "03", title: "Dental Clinics", desc: "Use local SEO, educational content, social media, websites, and paid campaigns to reach potential patients searching for dental services." },
              { step: "04", title: "Diagnostic Centres", desc: "Improve local visibility and promote diagnostic services through SEO, Google Business Profile, landing pages, and performance marketing." },
              { step: "05", title: "Physiotherapy Clinics", desc: "Use educational content, SEO, social media, and local digital marketing to build awareness around physiotherapy services." },
              { step: "06", title: "IVF & Fertility Centres", desc: "Develop educational content, strong service pages, SEO, reputation management, and carefully planned digital campaigns." }
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
              "Organic website traffic",
              "Keyword rankings",
              "Google Business Profile interactions",
              "Phone calls",
              "Enquiries",
              "Appointment requests",
              "Landing-page conversions",
              "Social media engagement",
              "Advertising performance",
              "Cost per enquiry"
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
                Choosing a digital marketing partner is about more than finding someone who can run ads or create social media posts. Healthcare marketing requires a balanced combination of visibility, trust, useful information, user experience, and responsible communication. Digital Success Solutions brings multiple digital services together to help doctors and medical practices build a stronger online presence.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { icon: Target, title: "A Complete Digital Growth Partner", desc: "From SEO and Local SEO to website development, social media marketing, and reputation management, we provide an integrated approach." },
              { icon: LineChart, title: "Customized Strategies", desc: "We help healthcare businesses create a digital strategy aligned with their specific goals and audience." },
              { icon: BookOpen, title: "Responsible Communication", desc: "Our content focuses on educating and engaging your audience rather than simply making promotional claims." },
              { icon: BarChart, title: "Performance-Focused", desc: "We measure success through organic traffic, keyword rankings, enquiries, and cost per enquiry, refining the strategy based on actual performance." }
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
                Benefits of Digital Marketing for Medical Practices
              </h2>
              <p className="text-lg text-slate-600">
                A well-planned digital marketing strategy can guide interested visitors toward meaningful actions such as calling the clinic, requesting an appointment, or asking a service-related question.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Increase Online Visibility", desc: "SEO, Local SEO, content marketing, and social media can help improve the online visibility of a medical practice." },
              { icon: CheckCircle2, title: "Build Patient Trust", desc: "A professional website, informative content, genuine reviews, educational videos, and consistent social media presence can help communicate credibility." },
              { icon: MessageSquare, title: "Generate Relevant Patient Enquiries", desc: "By combining SEO, landing pages, paid campaigns, clear CTAs, and conversion tracking, medical practices can create a smoother journey from online discovery to enquiry." },
              { icon: MapPin, title: "Strengthen Local Presence", desc: "Accurate business information, relevant categories, services, photos, reviews, website information, and consistent local signals all contribute to a stronger local digital presence." },
              { icon: BookOpen, title: "Educate Your Audience", desc: "Blogs, videos, FAQs, social media posts, and educational resources can explain common health concerns in a simple and responsible way." }
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
              Build Your Medical Practice for the Digital Age
            </h2>
            <p className="text-lg md:text-xl text-orange-50 mb-10 leading-relaxed font-medium">
              Patients are increasingly using digital channels to discover healthcare providers, research services, and decide whom they want to contact. With the right strategy and execution, Digital Success Solutions can help your medical practice build a stronger digital presence and create meaningful connections with potential patients.
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
