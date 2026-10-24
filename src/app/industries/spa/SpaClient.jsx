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
    heading: "SEO for Spa Businesses",
    desc1: "Search Engine Optimization, commonly known as SEO, is one of the most important long-term digital marketing strategies for a spa business.\n\nPeople may search Google using terms such as:\nSpa near me | Best spa | Spa services | Massage spa | Luxury spa | Wellness spa | Body massage | Couple spa | Spa treatment | Massage center\n\nYour website should provide useful and relevant information around the services your customers are searching for.\n\nOur SEO for Spa strategy focuses on improving your website's visibility through relevant keywords, useful content, technical optimization, and a better user experience.",
    blocks: [
      {
        title: "Keyword Research",
        desc: "We identify search terms relevant to your spa services, treatments, target audience, and business goals."
      },
      {
        title: "On-Page SEO",
        desc: "We optimize page titles, headings, website content, URLs, images, internal links, and other important website elements."
      },
      {
        title: "Technical SEO",
        desc: "We focus on technical factors such as website structure, mobile usability, page performance, crawlability, and indexability."
      },
      {
        title: "Content SEO",
        desc: "We create useful content around spa treatments, wellness, relaxation, skincare, massage services, and customer questions."
      },
      {
        title: "Conversion-Focused SEO",
        desc: "Getting visitors to your website is only one part of the process. We also focus on making it easier for visitors to call, enquire, message, or book a service."
      }
    ],
    cta: "Talk to Our SEO Experts",
    image: "/images/sectors/spa/s1.png",
    bg: "bg-white"
  },
  {
    id: "local-seo",
    heading: "Google & Local SEO for Spa",
    desc1: "Increase Your Visibility When Customers Search for Nearby Services\n\nFor many spa businesses, local customers are an important source of appointments.\n\nWhen someone searches for a spa nearby, your Google Business Profile can influence whether they discover and consider your business.\n\nA properly optimized profile can provide customers with important information such as:\nBusiness name | Services | Photos | Reviews | Contact information | Website | Opening hours | Directions",
    blocks: [
      {
        title: "Our Google & Local SEO Strategy Can Include",
        list: ["Google Business Profile optimization", "Local keyword optimization", "Business information optimization", "Google Posts", "Review strategy", "Local content", "Website location signals", "NAP consistency"]
      }
    ],
    cta: "Optimize Your Local Presence",
    image: "/images/sectors/spa/s2.png",
    bg: "bg-slate-50"
  },
  {
    id: "social-media",
    heading: "Social Media Marketing for Spa",
    desc1: "Showcase the Experience Behind Your Brand\n\nSpa businesses are naturally suited to visual marketing.\n\nCustomers want to see the environment, treatments, services, professionalism, cleanliness, atmosphere, and overall experience before making a booking.\n\nThis makes platforms such as Instagram and Facebook valuable channels for spa businesses.\n\nOur Social Media Marketing for Spa strategy focuses on creating content that represents your brand while keeping your audience engaged.",
    blocks: [
      {
        title: "Content Ideas for Spa Businesses",
        list: ["Spa service highlights", "Massage and wellness information", "Skincare tips", "Self-care tips", "Wellness education", "Treatment explanations", "Frequently asked questions", "Behind-the-scenes content", "Facility and ambience videos", "Customer experiences", "Reels and short-form videos", "Seasonal wellness content"]
      }
    ],
    cta: "Build Your Social Presence",
    image: "/images/sectors/spa/s3.png",
    bg: "bg-white"
  },
  {
    id: "google-ads",
    heading: "Google Ads for Spa",
    desc1: "Reach Customers Who Are Already Searching\n\nGoogle Ads can help spa businesses appear when potential customers actively search for relevant services.\n\nFor example, someone searching for a massage, spa treatment, or wellness service may already have strong purchase intent.\n\nWith Google Ads for Spa, campaigns can be built around relevant search terms and business objectives.",
    blocks: [
      {
        title: "Our Approach Can Include",
        list: ["Keyword targeting", "Search campaigns", "Location targeting", "Call campaigns", "Lead generation", "Remarketing", "Landing page optimization", "Conversion tracking", "Campaign performance analysis"]
      }
    ],
    cta: "Start Your Ads Campaign",
    image: "/images/sectors/spa/s4.png",
    bg: "bg-slate-50"
  },
  {
    id: "meta-ads",
    heading: "Meta Ads for Spa",
    desc1: "Reach Potential Customers on Facebook and Instagram\n\nMeta Ads can help spa businesses reach audiences based on relevant targeting signals and campaign objectives.\n\nA well-designed Meta campaign can be used for:\nLead generation | WhatsApp enquiries | Calls | Website traffic | Appointment enquiries | Brand awareness | Remarketing\n\nCreative plays an important role in spa advertising.\n\nHigh-quality images, videos, reels, treatment visuals, customer-focused messaging, and clear calls-to-action can help communicate the experience your spa provides.",
    blocks: [],
    cta: "Launch Meta Campaigns",
    image: "/images/sectors/spa/s5.png",
    bg: "bg-white"
  },
  {
    id: "lead-generation",
    heading: "Lead Generation for Spa",
    desc1: "Turn Interest Into Enquiries and Appointments\n\nGetting views, likes, or website visitors is useful, but the ultimate objective for many spa businesses is to generate enquiries and appointments.\n\nLead Generation for Spa focuses on turning potential customer interest into measurable business actions.",
    blocks: [
      {
        title: "Lead Generation Strategies",
        list: ["Lead forms", "WhatsApp campaigns", "Call campaigns", "Landing pages", "Website enquiry forms", "Remarketing", "Conversion-focused advertisements", "Follow-up strategies"]
      }
    ],
    cta: "Generate Quality Leads",
    image: "/images/sectors/spa/s6.png",
    bg: "bg-slate-50"
  },
  {
    id: "content-marketing",
    heading: "Content Marketing for Spa",
    desc1: "Educate Your Audience Before Asking Them to Book\n\nA customer may have several questions before choosing a spa.\n\nThey may want to know:\nWhat does a particular treatment involve? | Which service is suitable for their needs? | What happens during a spa session? | What should they expect during their first visit? | What services does the spa provide? | How should they prepare for an appointment?\n\nContent marketing gives your business an opportunity to answer these questions.",
    blocks: [
      {
        title: "Our Content Marketing Services Can Include",
        list: ["SEO blogs", "Website content", "Service pages", "Treatment descriptions", "FAQs", "Social media content", "Video scripts", "Educational articles", "Wellness guides"]
      }
    ],
    cta: "Develop Your Content Strategy",
    image: "/images/sectors/spa/s7.png",
    bg: "bg-white"
  },
  {
    id: "blog-marketing",
    heading: "Regular Blog Marketing for Spa",
    desc1: "Build Long-Term Search Visibility\n\nBlogging is often overlooked by spa businesses, but consistent and useful blog content can support a long-term SEO strategy.\n\nA spa website can publish content around topics such as:\nSpa treatments | Massage services | Skincare | Wellness | Relaxation | Self-care | Beauty routines | Spa experiences | Frequently asked questions | Treatment guides",
    blocks: [
      {
        title: "Blog Topic Examples",
        list: ["What to Know Before Your First Spa Visit", "How to Choose the Right Spa Treatment", "Simple Self-Care Habits for a Relaxing Lifestyle", "What to Expect During a Professional Massage Session"]
      }
    ],
    cta: "Start Your Blog Today",
    image: "/images/sectors/spa/s8.png",
    bg: "bg-slate-50"
  },
  {
    id: "reputation-management",
    heading: "Online Reviews & Reputation Management",
    desc1: "Build Trust Before the First Visit\n\nOnline reputation matters greatly for service-based businesses.\n\nBefore choosing a spa, potential customers may check Google reviews, ratings, social media comments, photos, and customer experiences.\n\nPositive and authentic reviews can help create confidence in your business.",
    blocks: [
      {
        title: "Our Reputation-Focused Strategy Can Include",
        list: ["Encouraging genuine customer feedback", "Review response strategy", "Google Business Profile activity", "Monitoring online feedback", "Building trust through authentic customer experiences", "Using customer feedback to improve communication"]
      }
    ],
    cta: "Build Trust Online",
    image: "/images/sectors/spa/s9.png",
    bg: "bg-white"
  },
  {
    id: "influencer",
    heading: "Influencer Marketing for Spa",
    desc1: "Introduce Your Spa to New Audiences\n\nInfluencer marketing can be useful for spa and wellness businesses because beauty, lifestyle, self-care, and wellness content naturally fits visual platforms.\n\nThe right creator can introduce your spa experience to an audience that may already be interested in similar services.",
    blocks: [
      {
        title: "Our Influencer Marketing Process Can Include",
        list: ["Influencer research", "Audience evaluation", "Creator selection", "Collaboration planning", "Campaign coordination", "Content requirements", "Performance tracking"]
      }
    ],
    cta: "Explore Influencer Campaigns",
    image: "/images/sectors/spa/s10.png",
    bg: "bg-slate-50"
  },
  {
    id: "website",
    heading: "Website Development for Spa",
    desc1: "Create a Website That Supports Your Marketing\n\nYour website is often one of the first detailed interactions a potential customer has with your spa.\n\nA professional spa website should communicate the experience clearly and make it easy for visitors to take action.",
    blocks: [
      {
        title: "Important Website Elements",
        list: ["Spa services", "Treatment details", "Professional images", "Facilities", "About the business", "Customer reviews", "Contact information", "Appointment options", "FAQs", "Clear calls-to-action"]
      },
      {
        title: "Our Development Focus",
        list: ["Mobile-friendly design", "Easy navigation", "SEO-friendly structure", "Fast-loading pages", "Clear CTAs", "Service-focused pages", "Enquiry and booking options", "Trust-building content"]
      }
    ],
    cta: "Build Your Spa Website",
    image: "/images/sectors/spa/s11.png",
    bg: "bg-white"
  }
];

export default function SpaClient() {
  const [openFaqIdx, setOpenFaqIdx] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [openIntroIdx, setOpenIntroIdx] = useState(null);
  const [openWhyChooseIdx, setOpenWhyChooseIdx] = useState(0);

  const introAccordions = [
    {
      title: "The Changing Customer Journey",
      desc: "Customers may search for spa services, explore treatment options, check Google reviews, visit Instagram profiles, compare websites, and finally decide where they want to book an appointment. This changing customer behaviour makes Digital Marketing for Spa an important part of modern spa business growth."
    },
    {
      title: "Why Is Digital Marketing Important?",
      desc: "Customers today have more choices than ever. Before booking a massage, facial, body treatment, wellness session, or spa experience, they often research the business online. If your spa has a weak online presence, potential customers may simply choose another business. A well-planned Digital Marketing for Spa strategy helps your business become visible at different stages of the customer's decision-making journey."
    },
    {
      title: "Building Trust and Visibility",
      desc: "Digital marketing is not only about advertising your spa. It is about creating a complete online experience that helps potential customers discover, understand, trust, and contact your business. With the right digital marketing strategy, a spa can improve its online visibility, build trust, generate relevant enquiries, and stay connected with both new and existing customers."
    }
  ];

  const faqs = [
    {
      q: "Why is digital marketing important for spa businesses?",
      a: "Digital marketing helps spa businesses improve online visibility, reach potential customers, build trust, showcase their services, and generate more enquiries or appointment opportunities through channels like SEO, social media, Google Ads, and Meta Ads."
    },
    {
      q: "How can SEO help my spa business get more customers?",
      a: "SEO can help your spa appear in relevant Google searches such as “spa near me,” “best spa,” “massage spa,” and “wellness spa.” Better search visibility can bring more relevant visitors to your website and create additional enquiry opportunities."
    },
    {
      q: "Is Google Business Profile important for a spa?",
      a: "Yes. A well-optimized Google Business Profile can help potential customers discover your spa in local searches. Services, photos, reviews, business information, opening hours, and contact options can also help customers evaluate your business."
    },
    {
      q: "Can Google Ads and Meta Ads generate leads for a spa?",
      a: "Yes. Google Ads can target people actively searching for spa and wellness services, while Meta Ads can reach potential customers through Facebook and Instagram. Both platforms can be used for enquiries, calls, WhatsApp conversations, website visits, and appointment-related campaigns."
    },
    {
      q: "What type of social media content works for spa businesses?",
      a: "Spa businesses can create content around treatment highlights, wellness tips, skincare, self-care, ambience, facilities, customer experiences, FAQs, behind-the-scenes videos, Reels, and educational content. Visual and informative content can help build engagement and trust."
    },
    {
      q: "How can Digital Success Solutions help my spa business grow online?",
      a: "Digital Success Solutions provides complete digital marketing solutions for spa businesses, including SEO, Local SEO, Social Media Marketing, Google Ads, Meta Ads, Content Marketing, Lead Generation, Website Development, and conversion-focused strategies."
    }
  ];

  return (
    <main className="   font-sans">

      {/* ── Section 1: Hero Section ── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden  text-white">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/sectors/spa/hero.png"
            alt="Spa Treatment"
            className="w-full h-full object-cover  "
          />

        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <FadeIn>

            <h1 className="text-4xl md:text-6xl   font-semibold text-zinc-800 mb-8">
              Complete Guide to <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400  to-orange-500">
                Your Spa Business
              </span>
            </h1>
            <p className="text-lg md:text-[18px]    text-zinc-800 max-w-2xl mb-10  ">
              The spa and wellness industry is built around experience, trust, relaxation, and personal care. But before a customer visits a spa, their journey often starts online. At Digital Success Solutions, we help spa and wellness businesses strengthen their digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/lets-connect" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all hover:shadow-lg hover:shadow-orange-500/25">
                Get a Free Consultation <ArrowRight size={20} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 2: Introduction ── */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-50 rounded-[3rem] -z-10 transform -rotate-3"></div>
              <img
                src="/images/sectors/spa/digital-marketing.png"
                alt="Spa Business Growth"
                className="rounded-2xl  border border-slate-100"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-800 mb-6">
              Why Is Digital Marketing Important for Spa Businesses?
            </h2>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              A beautiful spa with excellent services can still struggle to attract new customers if people cannot find it online. A well-planned Digital Marketing for Spa strategy helps your business become visible at different stages of the customer's decision-making journey.
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
              Our Spa Digital Marketing Services
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
                Our Approach to Digital Marketing for Spa
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                At Digital Success Solutions, we understand that every spa business is different. A luxury spa, wellness center, massage business, beauty spa, or holistic wellness brand may have different audiences, services, positioning, and business goals.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-8">
            {[
              { step: "01", title: "Understand Your Business", desc: "We study your services, target audience, competition, website, current marketing activity, and business objectives." },
              { step: "02", title: "Create the Right Strategy", desc: "Based on the research, we identify the digital channels that can support your goals (SEO, Google Ads, Meta Ads, etc.)." },
              { step: "03", title: "Build Online Visibility", desc: "We work on improving your presence across search engines, social platforms, advertising channels, and your website." },
              { step: "04", title: "Generate Relevant Enquiries", desc: "Campaigns and website experiences are designed to encourage potential customers to call, message, enquire, or book." },
              { step: "05", title: "Measure and Optimize", desc: "We monitor performance data and continuously identify opportunities to improve campaigns, content, website, and conversions." }
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
                Why Choose Digital Success Solutions?
              </h2>
              <p className="text-lg text-slate-600">
                Choosing a digital marketing agency is not just about finding someone who can run advertisements or publish social media posts. You need a team that understands how different digital channels work together.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { icon: Target, title: "Customized Strategy", desc: "We build strategies according to your spa's services, audience, goals, and competition." },
              { icon: LineChart, title: "SEO + Performance Marketing", desc: "We combine long-term organic growth with paid marketing opportunities where appropriate." },
              { icon: BookOpen, title: "Content That Connects", desc: "Our content focuses on educating and engaging your audience instead of making every communication feel like an advertisement." },
              { icon: BarChart, title: "Conversion-Focused Marketing", desc: "We don't stop at traffic. We focus on the journey from discovery to enquiry." }
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
                Benefits of Digital Marketing for Spa Businesses
              </h2>
              <p className="text-lg text-slate-600">
                A consistent digital marketing strategy can create several long-term benefits for your spa business.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Better Online Visibility", desc: "Your business can become easier for potential customers to discover." },
              { icon: Target, title: "More Relevant Traffic", desc: "SEO and targeted advertising can help bring people who are interested in your services." },
              { icon: Leaf, title: "Stronger Brand Presence", desc: "Consistent website and social media communication can make your spa more recognizable." },
              { icon: MessageSquare, title: "Better Customer Engagement", desc: "Social media, content, reviews, and messaging channels can help you stay connected with your audience." },
              { icon: CheckCircle2, title: "More Enquiry Opportunities", desc: "A combination of paid campaigns, SEO, website optimization, and conversion strategies can create more opportunities for enquiries." },
              { icon: LineChart, title: "Long-Term Growth", desc: "SEO, content, social media, and brand building can contribute to sustainable digital growth over time." }
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
              Ready to Grow Your Spa Online?
            </h2>
            <p className="text-lg md:text-xl text-orange-50 mb-10 leading-relaxed font-medium">
              Your customers are already searching, exploring, and comparing businesses online. Make sure your spa is ready to be discovered. Connect with Digital Success Solutions today.
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
                Frequently Asked Questions (FAQs)
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

    </main>
  );
}
