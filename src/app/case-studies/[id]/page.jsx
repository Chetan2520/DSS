"use client";
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Award, ArrowUpRight, Quote, Sparkles, TrendingUp, Activity, CheckCircle, Star, Home, Layers, User, Calendar } from "lucide-react";
import { caseStudies } from "@/lib/data/caseStudies";
import { motion, useScroll, useTransform } from "framer-motion";

function FadeIn({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AccordionItem({ title, desc, isOpen, onClick }) {
  return (
    <div className="py-6 border-b border-slate-200">
      <button

        onClick={onClick}
        className="w-full flex items-center justify-between text-left group cursor-pointer"
      >
        <h4 className="text-slate-900 font-semibold text-lg md:text-xl group-hover:text-blue-600 transition-colors duration-200">{title}</h4>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-slate-400 text-3xl font-light flex-shrink-0 ml-4"
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-slate-500 text-base md:text-lg leading-relaxed pt-4 pr-10">{desc}</p>
      </motion.div>
    </div>
  );
}

function ChallengeTicker({ items }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 2500); // Change item every 2.5s
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="w-full relative flex flex-col items-center md:items-start justify-center h-full">
      <motion.div
        className="flex flex-col gap-4 absolute w-full items-center md:items-start"
        style={{ top: "50%", marginTop: "-38px" }} // Centers the active item (item height 60px + gap 16px = 76px / 2 = 38px)
        animate={{ y: -(activeIndex * 76) }} // 76px is exactly the height (60px) + gap (16px) of one item   
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {items.map((item, idx) => {
          const isActive = idx === activeIndex;
          const isAdjacent = Math.abs(idx - activeIndex) === 1;
          const isFar = Math.abs(idx - activeIndex) > 1;

          return (
            <motion.div
              key={idx}
              className={`whitespace-normal md:whitespace-nowrap leading-tight transition-all duration-500 h-[55px] md:h-[60px] flex items-center justify-center md:justify-start text-center md:text-left  text-2xl md:text-3xl lg:text-[2rem] font-semibold
                ${isActive ? "text-[#e9780e] opacity-100" : "text-slate-500"}
                ${isAdjacent && !isActive ? "opacity-80" : ""}
                ${isFar ? "opacity-40" : ""}
              `}
            >
              <span className="line-clamp-2 md:line-clamp-none">{item}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
const stockImageSets = {
  "Cardiology": [
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80",
  ],
  "Cosmetic Dentistry": [
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80",
  ],
  "Orthopedics & Joint Replacement": [
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  ],
  "Dermatology & Aesthetics": [
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80",
  ],
};

const fallbackImages = [
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551190822-a9ce113ac100?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1200&q=80",
];

export default function CaseStudyDetail({ params }) {
  const { id } = React.use(params);
  const study = caseStudies.find((s) => s.id === id);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 100);
    return () => clearTimeout(timer);
  }, [id]);

  const scrollRef = React.useRef(null);
  const mockupContainerRef = React.useRef(null);
  const [openAccordionIdx, setOpenAccordionIdx] = React.useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll-driven animation for mockup phones
  const { scrollYProgress: mockupProgress } = useScroll({
    target: mockupContainerRef,
    offset: ["start end", "end start"]
  });

  // Left phone: slides in from left, tilts, rises up
  const leftPhoneX = useTransform(mockupProgress, [0.0, 0.3], [-50, 0]);
  const leftPhoneY = useTransform(mockupProgress, [0.0, 0.3], [40, 0]);
  const leftPhoneRotate = useTransform(mockupProgress, [0.0, 0.3], [-8, -2]);
  const leftPhoneOpacity = useTransform(mockupProgress, [0.0, 0.2], [0, 1]);

  // Right phone: slides in from right, tilts, rises up
  const rightPhoneX = useTransform(mockupProgress, [0.0, 0.3], [50, 0]);
  const rightPhoneY = useTransform(mockupProgress, [0.0, 0.3], [40, 0]);
  const rightPhoneRotate = useTransform(mockupProgress, [0.0, 0.3], [8, 2]);
  const rightPhoneOpacity = useTransform(mockupProgress, [0.0, 0.2], [0, 1]);

  // Center phone: scales up and rises
  const centerPhoneY = useTransform(mockupProgress, [0.0, 0.25], [30, 0]);
  const centerPhoneScale = useTransform(mockupProgress, [0.0, 0.25], [0.92, 1]);
  const centerPhoneOpacity = useTransform(mockupProgress, [0.0, 0.15], [0, 1]);


  if (!study) {
    notFound();
  }

  const imgs = stockImageSets[study.specialty] || fallbackImages;
  const otherStudies = caseStudies.filter((s) => s.id !== study.id);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-sky-500 selection:text-white overflow-x-clip relative">

      {/* ── Custom Hero Section ── */}
      <div className="relative w-full min-h-[90vh] flex items-center bg-[#F8FAFC] overflow-hidden pt-10 md:pt-28 pb-2 md:pb-16 lg:py-0 border-b border-slate-200/80">
        {/* Background Image */}
        <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
          <img
            src="https://framerusercontent.com/images/KoQPSj7OnE7gLRIDzGLeHu8tA.png?scale-down-to=2048&width=4320&height=2739"
            alt="Hero Background"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 items-center">

          {/* Left Content */}
          <FadeIn className="w-full">
            <div className="max-w-2xl pr-4">
              {/* Back Link / Top Label */}
              <div className="mb-4 md:mb-8">
                <Link href="/case-studies" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-800 transition-colors text-xs font-bold uppercase tracking-wider">
                  <ArrowLeft size={16} /> Back to Case Studies
                </Link>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-[3rem] font-  text-slate-900 leading-[1.1] tracking-tight mb-8" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                {study.title}
              </h1>

              {/* Dashed Separator */}
              <div className="relative w-full h-[2px] mb-12">
                <div
                  className="absolute top-0 left-0 w-[115%] md:w-[135%] h-[2px] z-0 opacity-80"
                  style={{ backgroundImage: 'repeating-linear-gradient(to right, #94a3b8 0, #94a3b8 10px, transparent 10px, transparent 20px)' }}
                ></div>
              </div>

              {/* Results Widget */}
              {study.results && study.results.length > 0 && (
                <div className="relative w-full max-w-[420px] z-10 mb-10">
                  {/* Purple Offset Shadow */}
                  <div className="absolute top-2.5 left-2.5 -right-2.5 -bottom-2.5 bg-[#F97316] rounded-2xl z-0"></div>

                  {/* Main Widget Card */}
                  <div className="relative z-10 bg-[#F8FAFC] border-[1.5px] border-[#F97316] rounded-2xl px-5 pt-4 pb-5 shadow-sm">
                    {/* Pill */}
                    <div className="inline-block bg-[#F97316] text-white px-3.5 py-1 rounded-md font-semibold text-[17px] tracking-wide mb-5">
                      Results
                    </div>

                    {/* Metrics Container */}
                    <div className="flex gap-8 items-start">
                      {study.results.slice(0, 2).map((r, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="text-4xl md:text-[44px] font-bold text-[#F97316] leading-none mb-2" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                            {r.metric}
                          </span>
                          <span className="text-[13px] text-slate-800 leading-[1.2] font-medium max-w-[130px]">
                            {r.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="relative z-10 mt-4">
                <Link href="/lets-connect" className="inline-flex items-center justify-center px-8 py-3 bg-white text-slate-900 border border-slate-200 font-semibold rounded-full transition-all hover:scale-105 hover:border-[#F97316] hover:text-[#F97316] shadow-sm gap-2">
                  Book a Call <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Right Image Container */}
          <FadeIn className="w-full relative mt-16 lg:mt-0 pl-0 lg:pl-10">
            <div className="relative w-full max-w-md mx-auto lg:max-w-lg lg:ml-auto">
              {/* Offset Background Block */}
              <div className="absolute top-6 left-6 -right-6 -bottom-6 bg-[#f37116] rounded-2xl z-0"></div>

              {/* Main Image */}
              <div className="relative z-10 w-full h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900">
                <img src={study.heroImage} alt={study.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── Custom Sticky Scroll Layout ── */}
      <div className="w-full bg-[#F8FAFC] py-16 md:py-24 relative flex items-stretch">

        {/* Sticky Sidebar on Far Left Edge */}
        <div className="hidden lg:block w-[220px] xl:w-[200px] shrink-0">
          <div className="sticky top-32 z-30 bg-white rounded-r-[1rem] shadow-[4px_4px_15px_rgba(0,0,0,0.03)] px-6 py-4 border border-slate-200 border-l-0">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-semibold text-slate-800">Table of contents</span>

            </div>
            <nav className="flex flex-col space-y-2">
              <a href="#starting-point" onClick={(e) => handleSmoothScroll(e, 'starting-point')} className="text-sm font-semibold text-[#F97316]">Starting point</a>
              <a href="#solution" onClick={(e) => handleSmoothScroll(e, 'solution')} className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors">Solution</a>
              <a href="#business-impact" onClick={(e) => handleSmoothScroll(e, 'business-impact')} className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors">Business Impact</a>
            </nav>
          </div>
        </div>

        {/* Main Content White Card */}
        <div className="flex-1 w-full max-w-[95%] xl:max-w-[1400px] mx-auto px-1 lg:px-8">
          <div className="w-full bg-white rounded-xl p-4 md:p-14 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 relative">

            {/* Floating To Top Button (Right edge) */}
            <div className="absolute right-0 top-0 bottom-0 pointer-events-none w-12 hidden lg:block translate-x-[calc(100%+16px)] z-30">
              <div className="sticky top-1/2 -translate-y-1/2 pointer-events-auto h-fit">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-[#F97316] text-white py-6 px-3 rounded-xl hover:bg-[#7c3aed] transition-colors flex items-center justify-center shadow-md"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  <span className="text-sm font-medium flex items-center gap-2">
                    <ArrowRight size={16} className="rotate-90" /> To Top
                  </span>
                </button>
              </div>
            </div>

            {/* Starting Point Section */}
            <section id="starting-point" className="scroll-mt-32">
              <FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 items-center">
                  <div>
                    <h2 className="font-bold mb-8 leading-none" style={{ color: '#F97316', fontSize: '40.4px', fontFamily: "'Darker Grotesque', sans-serif" }}>Starting point</h2>
                    <div className="text-slate-600 text-base md:text-lg space-y-5">
                      <p>{study.patientStory.problem}</p>
                      <p>{study.patientStory.impact}</p>
                    </div>
                  </div>
                  <div className="relative w-full h-[220px] md:h-[300px] mt-4 lg:mt-0 max-w-[95%]">
                    {/* Purple Offset Shadow */}
                    <div className="absolute top-4 left-4 -right-4 -bottom-4 bg-[#F97316] rounded-2xl z-0"></div>

                    {/* Main Image */}
                    <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-md border-[1.5px] border-slate-100 bg-white">
                      <img src={study.layoutImages?.startingPoint || study.heroImage || imgs[0]} alt="Overview" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </section>

            {/* Dashed Separator */}
            <div className="w-full border-t-[2px] border-dashed border-[#F97316]/30 my-8 md:my-16"></div>

            {/* Solution Section */}
            <section id="solution" className="scroll-mt-32">
              <FadeIn>
                <div className="flex justify-start md:justify-end mb-10">
                  <h2 className="font-bold leading-none" style={{ color: '#F97316', fontSize: '50.4px', fontFamily: "'Darker Grotesque', sans-serif" }}>Solution</h2>
                </div>
                <div className="space-y-12">
                  {study.solutions && study.solutions.map((solution, index) => (
                    <div key={index}>
                      <span className="inline-block px-4 py-2 rounded-full border border-[#0EA5E9] text-[#0EA5E9] text-xs font-bold mb-5 uppercase bg-sky-50/50">
                        Phase {index + 1}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">
                        {solution.title}
                      </h3>
                      <p className="text-slate-600 text-base md:text-lg max-w-4xl">
                        {solution.description}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </section>

            {/* Dashed Separator */}
            <div className="w-full border-t-[2px] border-dashed border-[#F97316]/30 my-8 md:my-16"></div>

            {/* Business Impact Section */}
            <section id="business-impact" className="scroll-mt-32">
              <FadeIn>
                <h2 className="font-bold mb-10 leading-none" style={{ color: '#F97316', fontSize: '50.4px', fontFamily: "'Darker Grotesque', sans-serif" }}>Business Impact</h2>

                {/* Asymmetrical Layout (Matches User Screenshot) */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-stretch mb-10">

                  {/* Left Col: Top image + All Metrics Grid */}
                  <div className="flex flex-col gap-8">
                    {/* Top Image */}
                    <div className="h-[200px] md:h-[260px] rounded-2xl overflow-hidden shadow-sm">
                      <img src={study.layoutImages?.impactLeft || imgs[2] || fallbackImages[2]} alt="Impact Left" className="w-full h-full object-cover" />
                    </div>

                    {/* Metrics Container */}
                    <div className="flex flex-col gap-8 mt-2">
                      {/* Row 1 */}
                      {study.results.length > 0 && (
                        <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-8">
                          {study.results.slice(0, 2).map((r, idx) => (
                            <div key={idx} className="flex flex-col">
                              <span className="font-bold leading-none mb-3" style={{ color: '#F97316', fontSize: '42px', fontFamily: "'Darker Grotesque', sans-serif" }}>
                                {r.metric}
                              </span>
                              <span className="text-slate-900 text-[13px] sm:text-sm font-semibold tracking-wide">
                                {r.description}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Row 2 */}
                      {study.results.length > 2 && (
                        <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-8">
                          {study.results.slice(2, 4).map((r, idx) => (
                            <div key={idx} className="flex flex-col">
                              <span className="font-bold leading-none mb-3" style={{ color: '#F97316', fontSize: '42px', fontFamily: "'Darker Grotesque', sans-serif" }}>
                                {r.metric}
                              </span>
                              <span className="text-slate-900 text-[13px] sm:text-sm font-semibold tracking-wide">
                                {r.description}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Col: Full height tall image */}
                  <div className="h-full min-h-[350px] rounded-2xl overflow-hidden shadow-sm">
                    <img src={study.layoutImages?.impactRight || imgs[3] || fallbackImages[3]} alt="Impact Right" className="w-full h-full object-cover" />
                  </div>
                </div>
              </FadeIn>
            </section>
          </div>
        </div>
      </div>

      {/* ── 01: The Challenge (Say Goodbye To) ── */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <FadeIn>
            <div className="flex flex-col items-center justify-center w-full">
              {/* Mobile Heading (Hidden on Desktop) */}
              <h2 className="text-4xl sm:text-4xl font-semibold text-slate-900 tracking-tight md:hidden mb-4 md:mb-8 text-center">
                The Impact We Drive
              </h2>

              <div className="flex flex-row items-center justify-center gap-6 md:gap-24 w-full max-w-[1100px] mx-auto">
                {/* Left Side (Hidden on Mobile) */}
                <div className="relative hidden md:block text-right flex-shrink-0">
                  <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-semibold text-slate-900 tracking-tight relative z-10 ">
                    The Impact We Drive
                  </h2>
                  {/* Image Arrow */}
                  <img
                    src="/images/arrow.png"
                    alt="Arrow"
                    className="w-28 lg:w-32 h-auto object-contain absolute -top-8 -right-[80px] z-20 pointer-events-none"
                  />
                </div>

                {/* Right Side: Animated Ticker */}
                <div className="h-[150px] md:h-[320px] overflow-hidden relative flex-1 max-w-[600px] w-full flex items-center">
                  {/* Fades for top and bottom */}
                  <div className="absolute top-0 left-0 right-0 h-16 bg-linear-to-b from-white to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent z-10 pointer-events-none"></div>

                  <ChallengeTicker
                    items={[
                      "Consistent Lead Generation",
                      "Lower Acquisition Costs",
                      "Fully Booked Patient Schedules",
                      "Top Local Search Rankings",
                      "Predictable Revenue Growth",
                      "High-Value Consultations"
                    ]}
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── 02: The Solution (Animated Mobile Mockups) ── */}
      <div ref={mockupContainerRef} className="relative w-full bg-white"  >
        {/* Static phones - scroll normally */}
        <div className="relative pt-2 md:pt-24 pb-8 bg-white z-10">
          {/* Phones Container */}
          {/* 
          <div className="relative w-full max-w-[750px] mx-auto px-4" style={{ height: 'clamp(320px, 55vw, 520px)' }}>

            <motion.div
              style={{
                x: leftPhoneX,
                y: leftPhoneY,
                rotate: leftPhoneRotate,
                opacity: leftPhoneOpacity,
                position: 'absolute',
                bottom: 0,
                left: '12%',
                width: '25%',
                zIndex: 5
              }}
            >
              <img src="/images/m1.png" alt="App Screen Left" className="w-full h-auto" />
            </motion.div>

            <motion.div
              style={{
                y: centerPhoneY,
                scale: centerPhoneScale,
                opacity: centerPhoneOpacity,
                position: 'absolute',
                bottom: 0,
                left: '50%',
                marginLeft: '-13.5%',
                width: '27%',
                zIndex: 15
              }}
            >
              <img src="/images/m2.png" alt="App Screen Center" className="w-full h-auto" />
            </motion.div>

            <motion.div
              style={{
                x: rightPhoneX,
                y: rightPhoneY,
                rotate: rightPhoneRotate,
                opacity: rightPhoneOpacity,
                position: 'absolute',
                bottom: 0,
                right: '12%',
                width: '25%',
                zIndex: 5
              }}
            >
              <img src="/images/m3.png" alt="App Screen Right" className="w-full h-auto" />
            </motion.div>
            
            <div
              className="absolute bottom-0 left-[-20%] right-[-20%] pointer-events-none"
              style={{
                height: '50%',
                zIndex: 20,
                background: 'linear-gradient(to top, white 10%, rgba(255,255,255,0.8) 50%, transparent 100%)'
              }}
            />
          </div>
          */}
        </div>

        {/* Text below - scrolls up and covers the sticky phones */}
        <div className="relative z-20 bg-white max-w-5xl mx-auto px-6 md:px-12 -mt-10 pb-20">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900   text-center">
              The Solution <span className="text-[#e66e1f]">By Digital Success Solutions.</span>
            </h2>

            {/* Accordion / Toggle Items */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 border-t border-slate-200">
              {/* Left Column */}
              <div>
                {[
                  { title: "Clear Information Hierarchy", desc: "Structured layouts that guide users to the most relevant details instantly, reducing cognitive load.", idx: 0 },
                  { title: "Trust-Building Doctor Profiles", desc: "Comprehensive profiles showcasing expertise, reviews, and credentials to build patient confidence.", idx: 2 },
                  { title: "Fluid Mobile-First Design", desc: "Every interaction optimized for touch, speed, and clarity across all mobile devices.", idx: 4 }
                ].map((item) => (
                  <AccordionItem
                    key={item.idx}
                    title={item.title}
                    desc={item.desc}
                    isOpen={openAccordionIdx === item.idx}
                    onClick={() => setOpenAccordionIdx(openAccordionIdx === item.idx ? null : item.idx)}
                  />
                ))}
              </div>

              {/* Right Column */}
              <div>
                {[
                  { title: "Intuitive Treatment Discovery", desc: "Smart search and filtering that helps patients find the right treatments and specialists effortlessly.", idx: 1 },
                  { title: "Frictionless Appointment Scheduling", desc: "One-tap booking with real-time availability, reminders, and seamless calendar integration.", idx: 3 },
                  { title: "Data-Driven Personalization", desc: "Tailored recommendations and insights based on user preferences and browsing behavior.", idx: 5 }
                ].map((item) => (
                  <AccordionItem
                    key={item.idx}
                    title={item.title}
                    desc={item.desc}
                    isOpen={openAccordionIdx === item.idx}
                    onClick={() => setOpenAccordionIdx(openAccordionIdx === item.idx ? null : item.idx)}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── 03: Inside the Experience ── */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-16 md:py-24">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
              <div className="max-w-3xl">
                <h3 className="text-3xl md:text-5xl font-semibold text-zinc-800 ">
                  A closer look at the patient journey.
                </h3>

              </div>
              <div className="shrink-0">
                <Link href="/lets-connect" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#2B6AF2] hover:bg-[#1A56DB] text-white font-semibold rounded-md shadow-sm text-sm md:text-base">
                  Lets connect
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
              {/* Card 1 */}
              <div className="flex flex-col items-start">
                <Home className="text-[#2B6AF2] mb-4" size={40} strokeWidth={2} />
                <div className="text-lg md:text-2xl font-semibold text-slate-700  ">Homepage Experience</div>
                <div className="text-sm md:text-base text-slate-700  ">
                  A calming, trustworthy entry point that immediately guides patients to the care they need. The design minimizes anxiety and confusion, focusing on clear calls-to-action and reassuring aesthetics.
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-start">
                <Layers className="text-[#2B6AF2] mb-4" size={40} strokeWidth={2} />
                <div className="text-lg md:text-2xl font-semibold text-slate-900  ">Treatment Pages</div>
                <div className="text-sm md:text-base text-slate-700  ">
                  Complex medical information broken down into digestible, reassuring content blocks. We utilized visual hierarchy to ensure patients can easily understand procedures, benefits, and recovery times.
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-start">
                <User className="text-[#2B6AF2] mb-4" size={40} strokeWidth={2} />
                <div className="text-lg md:text-2xl font-semibold text-slate-900  ">Doctor Profile</div>
                <div className="text-sm md:text-base text-slate-700  ">
                  Humanizing the specialist through expertise, achievements, and real patient success stories. This section builds immediate trust before the patient even steps foot into the clinic.
                </div>
              </div>


            </div>
          </FadeIn>
        </div>
      </div>


      {/* ── More Case Studies Slider Section ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-5 md:mb-32 relative">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">More Success Stories</h2>
              <p className="text-slate-500 text-sm mt-2">Explore how we've helped other medical practices grow.</p>
            </div>
            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="Previous slide"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="Next slide"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style dangerouslySetInnerHTML={{
              __html: `
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}} />
            {otherStudies.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col bg-white rounded-lg border border-zinc-300 p-4 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(59,130,246,0.15)] transition-all duration-300 shadow-sm cursor-pointer w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start"
              >
                <Link href={`/case-studies/${item.id}`} className="flex flex-col flex-1 h-full">
                  {/* Image Section */}
                  <div className="relative w-full h-[220px] rounded-lg overflow-hidden mb-6">
                    <img
                      src={item.heroImage}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                      {item.summary}
                    </p>

                    <div
                      className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-xs tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] group/btn w-fit"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* ── 05: Final CTA ── */}
      <div className="relative w-full overflow-hidden py-16 md:py-24 bg-black border-t border-zinc-900">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src="https://spinejadex.in/texture1.avif" alt="Texture Background" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start text-left">
          <FadeIn>
            <h2 className="text-2xl md:text-5xl text-white mb-6  max-w-3xl">
              Healthcare deserves better <br className="hidden md:block" />digital experiences.
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl font-light">
              Let's create a digital experience patients can trust.
            </p>
            <Link href="/lets-connect/" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-full transition-all hover:scale-105 shadow-xl">
              <span>Start a Project</span><ArrowUpRight size={20} />
            </Link>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
