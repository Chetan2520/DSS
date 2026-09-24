"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Target, Filter, MousePointerClick, TrendingUp, Sprout, Leaf, Users, Rocket, Play, ShieldCheck, Gem, BarChart3 } from "lucide-react";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="home" className="relative pt-32 md:pt-32 lg:pt-40 pb-16 overflow-hidden flex items-center min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#F8F5EA]">
        {/* Mobile Background */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/images/landing/image copy.png"
            alt="Ayurveda Background Mobile"
            fill
            className="object-cover object-top"
            priority
            quality={100}
          />
          {/* Gradient overlay on mobile to make bottom text readable against complex herbs */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8F5EA]/30 to-[#F8F5EA]/95 pointer-events-none" />
        </div>
        {/* Desktop Background */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/images/landing/image.png"
            alt="Ayurveda Background Desktop"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[80%] xl:w-[70%] max-w-4xl flex flex-col items-start text-left relative z-20 mt-10 md:mt-0"
          >


            <h1 className="font-playfair text-[42px] sm:text-5xl md:text-[56px] lg:text-[64px] leading-[1.1] md:leading-[1.1] font-semibold mb-4 md:mb-6 text-[#18221B] tracking-tight">
              Turn Your Ad Spend Into <br />
              <span className="relative inline-block text-[#033619] z-10 mt-1 md:mt-2">
                Predictable Revenue.
                {/* SVG Smooth Swoosh Underline */}
                <svg className="absolute w-[105%] h-[12px] md:h-[16px] -bottom-0.5 -left-1 text-[#8CA694]/60 -z-10" preserveAspectRatio="none" viewBox="0 0 200 20" fill="none">
                  <path d="M5,15 Q100,0 195,15" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-[15px] md:text-[17px] leading-relaxed text-[#324036] mb-8 md:mb-10 max-w-[480px] font-medium">
              Performance marketing for Ayurvedic & Wellness brands that focuses on profitable growth, not just vanity metrics.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-10 max-w-[650px] w-full">
              {[
                { icon: Leaf, text: "More Quality Leads", iconColor: "text-[#033619]" },
                { icon: BarChart3, text: "Higher Conversions", iconColor: "text-[#033619]" },
                { icon: Users, text: "Lower CAC", iconColor: "text-[#033619]" },
                { icon: Rocket, text: "Long-term Growth", iconColor: "text-[#033619]" }
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3 py-3 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-full border border-white/60 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-7 h-7 shrink-0 rounded-full bg-[#F8F5EA] sm:bg-white flex items-center justify-center shadow-sm">
                    <pill.icon size={14} className={`${pill.iconColor} ${pill.icon === Leaf ? 'fill-current' : ''}`} />
                  </div>
                  <span className="text-[11px] sm:text-[10px] font-bold sm:font-semibold leading-tight text-[#18221B]">{pill.text}</span>
                </div>
              ))}
            </div>

            {/* Button Group */}
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mb-6 md:mb-8 w-full sm:w-auto">
              {/* Primary CTA */}
              <a href="#contact" className="w-full sm:w-auto relative bg-[#2A3B30] text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-[#1A261F] transition-all shadow-lg flex items-center justify-center gap-2 text-[13px] border border-[#2A3B30]/30 overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
                <span className="relative">Get Your Free Growth Audit</span>
                <ArrowRight size={18} className="relative transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary Video Button */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-transparent border border-[#18221B]/30 hover:border-[#18221B] hover:bg-white/50 transition-all duration-300 font-semibold text-[13px] text-[#18221B] backdrop-blur-sm"
              >
                <div className="w-5 h-5 rounded-full bg-[#2A3B30] flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 text-white fill-current ml-0.5" />
                </div>
                Watch Video (2 min)
              </button>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black rounded-full flex items-center justify-center text-white transition-colors"
              >
                ✕
              </button>
              <video
                src="/images/landing/videos/dss_ayurveda1.mp4"
                controls
                autoPlay
                className="w-full h-auto max-h-[85vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
