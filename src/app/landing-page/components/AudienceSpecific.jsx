"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, Hospital, Droplets, CheckCircle2, ArrowRight } from "lucide-react";

export default function AudienceSpecific() {
  const audiences = [
    {
      id: "d2c",
      icon: ShoppingBag,
      title: "Ayurvedic / Herbal D2C Brand",
      goal: "More product sales",
      focus: [
        "Customer acquisition",
        "Meta & Google Ads",
        "Landing Page CRO",
        "Retargeting",
        "Creative testing",
        "eCommerce funnel optimization"
      ],
      cta: "SCALE MY D2C BRAND"
    },
    {
      id: "clinic",
      icon: Hospital,
      title: "Ayurveda / Wellness Clinic",
      goal: "More qualified enquiries & appointments",
      focus: [
        "Local targeting",
        "Lead generation",
        "Google Search",
        "Meta Ads",
        "Patient enquiry funnels",
        "WhatsApp follow-up"
      ],
      cta: "GROW MY CLINIC"
    },
    {
      id: "wellness",
      icon: Droplets,
      title: "Wellness Brand",
      goal: "Build demand + drive conversions",
      focus: [
        "Brand positioning",
        "Social media",
        "Performance marketing",
        "Content",
        "Landing pages",
        "Retargeting"
      ],
      cta: "GROW MY BRAND"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-[#F8F5EA] relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-[46px] font-bold leading-[1.25] text-[#18221B] mb-6 tracking-tight"
          >
            What Is Your <br />
            <span className="relative inline-block overflow-hidden px-4 md:px-5 py-1 md:py-1.5 rounded-xl mt-2 md:mt-3 whitespace-nowrap text-[32px] sm:text-4xl md:text-[46px] leading-[1.2]">
              <motion.span 
                className="absolute inset-0 bg-[#2A3B30] z-0"
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "circOut" }}
              />
              <span className="text-white relative z-10">Growth Goal?</span>
            </span>
          </motion.h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1400px] mx-auto">
          {audiences.map((aud, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-white rounded-3xl transition-all duration-300 p-6 xl:p-8 flex flex-col group relative ${index === 1
                    ? "border-2 border-[#5B8266] shadow-xl lg:scale-105 z-10"
                    : "border border-[#DDDCCF] shadow-sm hover:shadow-2xl"
                  }`}
              >
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <Image 
                    src="/images/landing/top-corner1.png"
                    alt="Decorative Corner"
                    width={200}
                    height={200}
                    className="absolute top-0 right-0 w-32 md:w-40 opacity-20 md:opacity-30 mix-blend-multiply"
                  />
                </div>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#5B8266] text-white px-5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest whitespace-nowrap shadow-md z-20">
                    Most Popular
                  </div>
                )}
                {/* Header */}
                <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-4 mb-6">
                  <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-2xl bg-[#5B8266]/10 flex items-center justify-center shrink-0 group-hover:bg-[#5B8266] transition-colors duration-300">
                    <aud.icon size={22} className="text-[#5B8266] group-hover:text-white transition-colors duration-300 xl:w-[24px]" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg xl:text-[1.15rem] 2xl:text-xl font-semibold text-[#18221B] mb-1 group-hover:text-[#5B8266] transition-colors duration-300 leading-tight whitespace-nowrap overflow-visible">
                      {aud.title}
                    </h3>
                    <p className="font-semibold text-[#FF6900] uppercase tracking-widest text-[10px] xl:text-[11px] truncate">
                      {aud.goal}
                    </p>
                  </div>
                </div>

                <hr className="border-[#DDDCCF] mb-6" />

                {/* Focus List */}
                <div className="mb-10 flex-1">
                  <p className="font-semibold text-base mb-6 text-[#5F675F]">We focus on:</p>
                  <div className="flex flex-col gap-y-4">
                    {aud.focus.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#5B8266] shrink-0 mt-0.5" />
                        <span className="font-medium text-sm text-[#18221B]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-4">
                  <a
                    href="#contact"
                    className={`flex items-center justify-center w-full gap-2 py-3.5 px-4 rounded-xl font-semibold uppercase tracking-widest text-xs transition-all duration-300 hover:shadow-md group/btn border ${index === 1
                        ? "bg-[#FF6900] text-white border-[#FF6900] hover:bg-[#e55e00] hover:border-[#e55e00]"
                        : "bg-[#F8F5EA] text-[#FF6900] border-transparent hover:bg-[#FF6900] hover:text-white hover:border-[#FF6900]"
                      }`}
                  >
                    {aud.cta}
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}



