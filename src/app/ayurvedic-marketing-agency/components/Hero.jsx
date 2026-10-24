"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Target, Filter, MousePointerClick, TrendingUp, Sprout, Leaf, Users, Rocket, Play, ShieldCheck, Gem, BarChart3 } from "lucide-react";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="home" className="relative pt-24 md:pt-32 lg:pt-40 pb-16 overflow-hidden flex items-center min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#F8F5EA]">
        {/* Mobile Background */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/images/landing/phone-bg.png"
            alt="Ayurveda Background Mobile"
            fill
            className="object-cover object-bottom"
            priority
            quality={100}
          />
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
          <div
            className="w-full lg:w-[80%] xl:w-[70%] max-w-4xl flex flex-col items-start text-left relative z-20 mt-4 md:mt-0"
          >


            <h1 className="font-playfair text-[38px] sm:text-5xl md:text-[64px] font-bold leading-[1.2] md:leading-[1.1] text-[#18221B] tracking-tight mb-6 md:mb-8">
              Scale Your <br />
              <span className="relative inline-block px-4 md:px-5 py-1.5 md:py-3 rounded-xl md:rounded-[1.25rem] mt-2 md:mt-4 whitespace-nowrap overflow-hidden group">
                {/* Animated Background sweeping from Left to Right */}
                <motion.span
                  className="absolute top-0 bottom-0 left-0 bg-[#2A3B30] -z-10"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                />
                <span className="relative z-10 text-white">Ayurvedic Brand</span>
              </span>
            </h1>

            <p className="text-[15px] md:text-[17px] leading-relaxed text-[#324036] mb-6 md:mb-10 max-w-[400px] md:max-w-[480px] font-medium">
              We help Ayurveda brands achieve <span className="font-semibold text-[#18221B]">predictable sales</span> through data-driven performance marketing.
            </p>

            {/* Feature Points */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 mb-8 md:mb-10 w-full">
              {[
                { icon: Leaf, text: "More Quality Leads", iconColor: "text-[#033619]" },
                { icon: BarChart3, text: "Higher Conversions", iconColor: "text-[#033619]" },
                { icon: Users, text: "Lower CAC", iconColor: "text-[#033619]" }
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-white/85 md:bg-transparent px-3 py-1.5 md:p-0 rounded-lg md:rounded-none backdrop-blur-md md:backdrop-blur-none shadow-sm md:shadow-none border border-white/50 md:border-transparent">
                  <div className="w-6 h-6 md:w-7 md:h-7 shrink-0 rounded-full bg-[#E8EFEA] flex items-center justify-center">
                    <pill.icon size={14} className={`${pill.iconColor} ${pill.icon === Leaf ? 'fill-current' : ''}`} />
                  </div>
                  <span className="text-[14px] md:text-[16px] font-semibold text-[#18221B]">{pill.text}</span>
                </div>
              ))}
            </div>

            {/* Button Group */}
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mb-6 md:mb-8 w-full sm:w-auto">
              {/* Primary CTA */}
              <a href="#contact" className="w-full sm:w-auto relative bg-[#2A3B30] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold text-center hover:bg-[#1A261F] transition-all shadow-xl flex items-center justify-center gap-2 text-[15px] md:text-[16px] overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
                <span className="relative tracking-wide">Get Your Free Growth Audit</span>
                <ArrowRight size={20} className="relative transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary Video Button */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 md:px-8 py-3.5 md:py-4 rounded-full bg-white/40 md:bg-transparent border border-[#18221B]/30 hover:border-[#18221B] hover:bg-white/60 transition-all duration-300 font-bold text-[15px] md:text-[16px] text-[#18221B] backdrop-blur-md"
              >
                <div className="w-6 h-6 rounded-full bg-[#2A3B30] flex items-center justify-center shadow-md">
                  <Play className="w-3 h-3 text-white fill-current ml-0.5" />
                </div>
                <span className="tracking-wide">Watch Video (2 min)</span>
              </button>
            </div>

          </div>

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
