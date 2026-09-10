"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import { caseStudies } from "@/lib/data/caseStudies";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

export default function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeSpecialty, setActiveSpecialty] = React.useState("All");
  const specialties = ["All", ...new Set(caseStudies.map((study) => study.specialty))];
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredStudies = caseStudies.filter((study) => {
    const matchesSpecialty = activeSpecialty === "All" || study.specialty === activeSpecialty;
    const searchableText = [study.title, study.doctorName, study.specialty, study.summary].join(" ").toLowerCase();
    return matchesSpecialty && searchableText.includes(normalizedSearch);
  });

  // Scroll state for specialty tabs
  const scrollRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const checkScroll = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 260;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-sky-500 selection:text-white overflow-hidden relative">

      {/* ── Scaler-Style Hero Section ── */}
      <div className="relative w-full min-h-[75vh] flex items-center justify-center pt-10 md:pt-36 pb-12 md:pb-24 overflow-hidden">
        {/* Background Image - with no overlay/gradient effect */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img
            src="/images/case-hero.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Top Badge */}
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center text-white/95 text-[9px] md:text-xs font-bold uppercase tracking-widest bg-white/10 px-3 md:px-5 py-2 rounded-full backdrop-blur-sm border border-white/20"
            >
              ⟨ DIGITAL SUCCESS SOLUTIONS | CASE STUDIES ⟩
            </motion.div>
            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-7xl    text-white mb-6 tracking-tight leading-[1.1] max-w-4xl"
            >
              Healthcare Case Studies & Success Stories
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
            >
              Explore our case studies to see how we've partnered with leading medical professionals to scale their practices, attract premium patients, and dominate local markets.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto justify-center"
            >
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-5 md:px-10 py-3 md:py-4 bg-[#0EA5E9] text-white font-bold rounded text-sm tracking-wide uppercase hover:bg-[#0284C7] transition-all shadow-lg hover:scale-[1.02]"
              >
                Book a Call
              </Link>
              <Link
                href="/lets-connect"
                className="inline-flex items-center justify-center px-5 md:px-10 py-3 md:py-4  bg-white text-black font-bold rounded text-sm tracking-wide uppercase border border-slate-300 hover:bg-slate-50 transition-all hover:scale-[1.02]"
              >
                Get Growth Plan
              </Link>
            </motion.div>


          </motion.div>
        </div>
      </div>

      {/* ── Case Studies Cards Grid (Light theme) ── */}
      <div className="container mx-auto px-6 py-10 md:py-24 relative z-10 max-w-7xl">
        <div className="mb-10 md:mb-14">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">Browse the results</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Find a success story</h2>
            </div>
            <div className="relative w-full lg:w-[360px]">
              <Search size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search doctors, clinics, specialties..."
                aria-label="Search case studies"
                className="w-full rounded-full border border-slate-300 bg-white py-3 pl-11 pr-11 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Specialty Tabs with Left/Right Scroll Buttons */}
          <div className="relative flex items-center gap-2">
            {/* Left Scroll Button */}
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll specialties left"
              className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 bg-white shadow-sm transition-all duration-200 hover:bg-[#0EA5E9] hover:text-white hover:border-[#0EA5E9] hover:shadow-md active:scale-95 ${canScrollLeft ? "opacity-100 cursor-pointer" : "opacity-40 cursor-not-allowed pointer-events-none"
                }`}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Scrollable Tabs */}
            <div
              ref={scrollRef}
              className="no-scrollbar flex gap-2 overflow-x-auto pb-2 pt-1 flex-1"
              role="tablist"
              aria-label="Filter case studies by specialty"
            >
              {specialties.map((specialty) => {
                const isActive = activeSpecialty === specialty;
                return (
                  <button
                    key={specialty}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveSpecialty(specialty)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${activeSpecialty === specialty
                        ? "bg-[#0EA5E9] text-white border-[#0EA5E9] shadow-md"
                        : "border-slate-300 bg-white text-slate-600 hover:border-[#0EA5E9] hover:text-[#0EA5E9]"
                      }`}
                  >
                    {specialty}
                  </button>
                );
              })}
            </div>

            {/* Right Scroll Button */}
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll specialties right"
              className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 bg-white shadow-sm transition-all duration-200 hover:bg-[#0EA5E9] hover:text-white hover:border-[#0EA5E9] hover:shadow-md active:scale-95 ${canScrollRight ? "opacity-100 cursor-pointer" : "opacity-40 cursor-not-allowed pointer-events-none"
                }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <style jsx>{`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          <p className="mt-4 text-sm text-slate-500" aria-live="polite">
            Showing {filteredStudies.length} of {caseStudies.length} case studies
          </p>
        </div>

        {filteredStudies.length === 0 ? (
          <div className="rounded-lg border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <h3 className="text-xl font-semibold text-slate-900">No case studies found</h3>
            <p className="mt-2 text-slate-500">Try a different search term or specialty.</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveSpecialty("All");
              }}
              className="mt-6 rounded-md bg-[#0EA5E9] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0284C7]"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredStudies.map((study, index) => {
              const image = study.heroImage || `/images/case${(index % 9) + 1}.png`;

              const shortTitle = study.title;

              return (
                <motion.div
                  key={`${study.id}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
                  className="relative group w-full cursor-pointer h-full"
                >
                  {/* Orange Offset Shadow - hidden by default, slides out on hover */}
                  <div className="absolute inset-0 bg-[#F97316] rounded-2xl z-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-3 group-hover:translate-y-3"></div>

                  {/* Main Card */}
                  <div className="relative z-10 flex flex-col h-full bg-white rounded-2xl border-[1.5px] border-[#F97316] p-5 shadow-sm transform transition-all duration-300 group-hover:-translate-y-1.5 group-hover:-translate-x-1.5 group-hover:shadow-xl">
                    <Link href={`/case-studies/${study.id}`} className="flex flex-col flex-1 h-full">
                      {/* Image Section */}
                      <div className="relative w-full h-[220px] rounded-xl overflow-hidden mb-6 border border-slate-100">
                        <img
                          src={image}
                          alt={shortTitle}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="flex flex-col flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-[#F97316] transition-colors duration-300 line-clamp-2" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                          {shortTitle}
                        </h3>

                        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1 font-medium">
                          {study.summary}
                        </p>

                        <div
                          className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 bg-[#F97316] hover:bg-[#ea580c] text-white font-semibold rounded-lg text-xs tracking-wider uppercase transition-all duration-300 shadow-sm w-fit"
                        >
                          <span>Read Case Study</span>
                          <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
