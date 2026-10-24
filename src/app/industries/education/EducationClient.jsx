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
    heading: "Education Website Development",
    desc1: "Create a Website That Answers Student Questions\n\nYour website is often the first detailed interaction a prospective student has with your institution.\n\nA good education website should provide clear and updated information about courses, admissions, fees, and infrastructure.\n\nAt Digital Success Solutions, we create websites with a focus on user experience, SEO, responsive design, and conversion.",
    blocks: [
      {
        title: "Important information includes:",
        list: ["Courses", "Admissions", "Eligibility", "Fees", "Faculty", "Infrastructure", "Placements", "Results", "Events", "Facilities", "Contact information", "FAQs"]
      }
    ],
    cta: "Build Your Education Website",
    image: "/images/sectors/education/e2.png",
    bg: "bg-white"
  },
  {
    id: "seo",
    heading: "SEO for Educational Institutions",
    desc1: "Get Found When Students Search\n\nSEO helps educational institutions improve their organic visibility on search engines.\n\nInstead of relying entirely on paid advertising, an institution can build long-term search visibility through useful and relevant content.\n\nThe focus should be on creating genuinely useful content for students and parents while maintaining accurate educational information.",
    blocks: [
      {
        title: "Education SEO may include:",
        list: ["Course keyword research", "Location-based keywords", "Admission keywords", "On-page optimization", "Technical SEO", "Blog creation", "Internal linking", "Local SEO", "Content optimization", "Website performance improvement"]
      }
    ],
    cta: "Improve Search Visibility",
    image: "/images/sectors/education/e3.png",
    bg: "bg-slate-50"
  },
  {
    id: "social-media",
    heading: "Social Media Marketing for Education",
    desc1: "Turn Your Institution Into a Digital Community\n\nSocial media gives educational institutions a chance to showcase the real personality of their campus and connect with students.\n\nConsistent social media communication can help students understand what makes your institution different.",
    blocks: [
      {
        title: "Content can include:",
        list: ["Campus activities", "Student achievements", "Faculty introductions", "Events", "Workshops", "Student experiences", "Course information", "Career guidance", "Educational tips", "Festivals and celebrations", "Short-form videos and Reels"]
      }
    ],
    cta: "Build Your Social Community",
    image: "/images/sectors/education/e4.png",
    bg: "bg-white"
  },
  {
    id: "performance-marketing",
    heading: "Performance Marketing & Lead Generation",
    desc1: "Generate Enquiries During Admission Season\n\nPaid advertising can be particularly useful when institutions want to increase enquiries for specific courses or admission periods.\n\nPlatforms such as Google Ads and Meta Ads can be used to promote relevant programs and campaigns.\n\nA successful campaign should connect the advertisement with a relevant landing page and a simple enquiry process.",
    blocks: [
      {
        title: "Campaigns can focus on:",
        list: ["New admissions", "Specific courses", "Entrance preparation", "Counselling", "Scholarship information", "Upcoming batches", "Online programs"]
      }
    ],
    cta: "Launch Admission Campaigns",
    image: "/images/sectors/education/e5.png",
    bg: "bg-slate-50"
  },
  {
    id: "content-marketing",
    heading: "Content Marketing",
    desc1: "Give Students the Information They Need\n\nStudents and parents have many questions before choosing an institution.\n\nEducational content can answer these questions while also supporting SEO.\n\nUseful content can attract organic visitors and help an institution establish itself as a reliable source of information.",
    blocks: [
      {
        title: "Content ideas include:",
        list: ["Course guides", "Admission guides", "Career options", "Eligibility information", "Exam preparation", "College comparison guides", "FAQs", "Student success stories", "Career advice", "Educational videos"]
      }
    ],
    cta: "Create Helpful Content",
    image: "/images/sectors/education/e6.png",
    bg: "bg-white"
  },
  {
    id: "video-marketing",
    heading: "Video Marketing",
    desc1: "Show More Than Just Your Brochure\n\nVideo can give prospective students a better understanding of an institution.\n\nPlatforms such as YouTube, Instagram, and Facebook can help distribute this content to prospective students.",
    blocks: [
      {
        title: "Educational institutions can create videos around:",
        list: ["Campus tours", "Faculty introductions", "Student experiences", "Course explanations", "Events", "Workshops", "Placement activities", "Educational tips", "FAQs"]
      }
    ],
    cta: "Showcase with Video",
    image: "/images/sectors/education/e7.png",
    bg: "bg-slate-50"
  },
  {
    id: "local-seo",
    heading: "Local SEO & Google Business Profile",
    desc1: "Help Students Find Your Institution\n\nFor schools, colleges, coaching institutes, training centers, and other location-based educational businesses, local visibility matters.\n\nLocal SEO can work alongside website SEO to strengthen visibility for location-based searches.",
    blocks: [
      {
        title: "An optimized profile helps students find:",
        list: ["Institution location", "Contact details", "Working hours", "Website", "Photos", "Reviews", "Directions", "Services"]
      }
    ],
    cta: "Improve Local Visibility",
    image: "/images/sectors/education/e8.png",
    bg: "bg-white"
  },
  {
    id: "reputation-management",
    heading: "Online Reputation Management",
    desc1: "Build Confidence Through Authentic Experiences\n\nBefore choosing an institution, students and parents may look at online reviews. A positive and authentic online reputation can help build confidence.\n\nReputation management should focus on transparency rather than artificially creating positive reviews.",
    blocks: [
      {
        title: "Educational institutions should:",
        list: ["Encourage genuine feedback", "Monitor reviews", "Respond professionally", "Address concerns appropriately", "Keep online information accurate", "Showcase genuine achievements and experiences"]
      }
    ],
    cta: "Manage Your Reputation",
    image: "/images/sectors/education/e9.png",
    bg: "bg-slate-50"
  }
];

export default function EducationClient() {
  const [openFaqIdx, setOpenFaqIdx] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [openIntroIdx, setOpenIntroIdx] = useState(null);
  const [openWhyChooseIdx, setOpenWhyChooseIdx] = useState(0);

  const introAccordions = [
    {
      title: "What Is Digital Marketing for Education?",
      desc: "Digital marketing for education refers to using online channels and marketing strategies to promote educational institutions, courses, programs, and learning services. It can include SEO, website development, social media, Google Ads, content marketing, and more. The purpose is not simply to attract website visitors, but to help students and parents find relevant information and move naturally from research to enquiry to admission."
    },
    {
      title: "Why Is Digital Marketing Important?",
      desc: "Students and parents have access to more information than ever before. They can compare multiple institutions online before making a decision. They may look at your website, social media profiles, Google reviews, course information, faculty details, campus photographs, student results, and other online signals."
    },
    {
      title: "The Danger of a Weak Online Presence",
      desc: "If an institution has limited or outdated online information, potential students may simply move to another option. Effective digital marketing can help increase online visibility, reach prospective students, generate admission enquiries, and build institutional credibility."
    }
  ];

  const faqs = [
    {
      q: "Why is digital marketing important for the education sector?",
      a: "Digital marketing helps educational institutions reach students online, build trust, increase visibility, generate enquiries, and improve admissions."
    },
    {
      q: "What digital marketing services are useful for educational institutions?",
      a: "SEO, social media marketing, Google Ads, Meta Ads, content marketing, website development, Local SEO, and lead generation are useful for education businesses."
    },
    {
      q: "How does SEO help educational institutions?",
      a: "SEO helps schools, colleges, coaching institutes, and EdTech businesses appear in search results when students and parents are looking for courses or educational services."
    },
    {
      q: "Can digital marketing help increase student admissions?",
      a: "Yes. A well-planned digital marketing strategy can attract relevant students, generate qualified enquiries, support counselling, and improve the overall admission journey."
    },
    {
      q: "Is social media marketing effective for education businesses?",
      a: "Yes. Social media helps educational brands showcase courses, achievements, student experiences, educational content, events, and build engagement with their target audience."
    },
    {
      q: "How can Digital Success Solutions help educational institutions?",
      a: "Digital Success Solutions provides SEO, performance marketing, social media, content, website development, and lead generation solutions designed to support the digital growth of education businesses."
    }
  ];

  return (
    <main className="   font-sans">

      {/* ── Section 1: Hero Section ── */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden pt-24 md:pt-32 pb-16">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/images/sectors/education/hero.png" alt="Education Background" className="w-full h-full object-cover" />
          {/* Dark Overlay for Text Readability - OMITTED AS REQUESTED */}
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="max-w-2xl">
            <FadeIn>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-zinc-900 leading-[1.1] tracking-tight mb-6">
                Digital Marketing for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Educational Institutions</span>
              </h1>

              <div className="mb-8 text-sm md:text-lg text-zinc-900 bg-white/50 backdrop-blur-md p-4 rounded-xl md:bg-transparent md:backdrop-blur-none md:p-0">
                {isExpanded ? (
                  <>
                    <p>
                      The way students and parents search for educational opportunities has changed dramatically. Today, before choosing a school, college, coaching institute, or university, people often begin their research online. Digital Success Solutions helps educational institutions build their online presence and reach the right audience.
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
                    The way students and parents search for educational opportunities has changed dramatically. Today, before choosing a school, college, coaching institute, or university, people...
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
                src="/images/sectors/education/e1.png"
                alt="Spa Business Growth"
                className="rounded-2xl  border border-slate-100"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-800 mb-6">
              Why Is Digital Marketing Important in Education?
            </h2>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              A well-planned education digital marketing strategy can help institutions reach the right students and parents, communicate their strengths, generate admission enquiries, and build trust before a student even visits the campus. We help educational institutions build their online presence through SEO, website development, social media marketing, performance marketing, content marketing, Local SEO, and other digital growth solutions.
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
              Digital Marketing Strategies for Education Sector
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
                Digital Marketing for Different Education Businesses
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                At Digital Success Solutions, we understand that every educational institution is unique. Whether you are a school, university, or coaching center, we build a tailored strategy that aligns with your specific goals and audience.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-8">
            {[
              { step: "01", title: "Schools", desc: "Communicate academics, facilities, activities, achievements, admission information, and campus experiences to parents." },
              { step: "02", title: "Colleges & Universities", desc: "Promote courses, admissions, campus facilities, placements, and student opportunities with an integrated digital strategy." },
              { step: "03", title: "Coaching Institutes", desc: "Use Google Ads, Meta Ads, SEO, and lead-generation campaigns to attract students for upcoming batches." },
              { step: "04", title: "EdTech Companies", desc: "Combine content marketing, SEO, paid advertising, and conversion optimization to reach learners online." },
              { step: "05", title: "Professional Training", desc: "Promote skill-based courses, certifications, workshops, and career-focused programs through targeted digital campaigns." }
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
              "Organic search traffic",
              "Keyword rankings",
              "Admission enquiries",
              "Phone calls",
              "WhatsApp enquiries",
              "Form submissions",
              "Cost per lead",
              "Landing-page conversions",
              "Social media engagement",
              "Advertising performance"
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
                At Digital Success Solutions, we understand that education marketing is different from ordinary business marketing. Students and parents are making important decisions, so educational brands need to communicate information clearly and build trust throughout the decision-making process.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { icon: Target, title: "A Complete Digital Growth Partner", desc: "From SEO and Local SEO to website development, social media marketing, and reputation management, we provide an integrated approach." },
              { icon: LineChart, title: "Customized Strategies", desc: "We create strategies around your institution, courses, target audience, location, and admission objectives." },
              { icon: BookOpen, title: "Responsible Communication", desc: "Our content focuses on educating and engaging your audience to build trust and credibility." },
              { icon: BarChart, title: "Performance-Focused", desc: "We measure success through organic traffic, keyword rankings, enquiries, and cost per lead, refining the strategy based on actual performance." }
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
                Benefits of Digital Marketing in Education
              </h2>
              <p className="text-lg text-slate-600">
                A well-planned digital marketing strategy can guide prospective students from online discovery to meaningful actions like course enquiries and admissions.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Reach Students Where They Search", desc: "Digital marketing allows you to reach students across search engines, social media, and online communities." },
              { icon: CheckCircle2, title: "Build Trust and Credibility", desc: "A professional website, genuine reviews, and student stories help build confidence in your institution." },
              { icon: MessageSquare, title: "Generate Quality Enquiries", desc: "Digital campaigns can direct interested users toward admission forms, counselling requests, and phone calls." },
              { icon: BookOpen, title: "Promote Courses & Programs", desc: "Create targeted campaigns for different undergraduate, postgraduate, online, and certification programs." },
              { icon: Target, title: "Improve Search Visibility", desc: "SEO optimization helps your institution rank for relevant queries, building long-term organic visibility." }
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
              Build a Stronger Digital Presence for Your Educational Institution
            </h2>
            <p className="text-lg md:text-xl text-orange-50 mb-10 leading-relaxed font-medium">
              The education industry has become increasingly digital. Students and parents now use online platforms to discover institutions, compare courses, and make admission decisions. Digital Success Solutions can help educational institutions strengthen their digital presence and build sustainable online growth.
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
