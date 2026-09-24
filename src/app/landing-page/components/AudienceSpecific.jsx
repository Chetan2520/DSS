"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
            className="font-playfair text-4xl md:text-5xl font-semibold leading-[1.2] mb-6 text-[#18221B]"
          >
            What's Your <span className="text-[#5B8266]">Growth Goal?</span>
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
                className="bg-white rounded-3xl border border-[#DDDCCF] shadow-sm hover:shadow-2xl transition-all duration-300 p-6 xl:p-8 flex flex-col group"
              >
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
                    className="flex items-center justify-center w-full gap-2 py-3.5 px-4 rounded-xl bg-[#F8F5EA] text-[#FF6900] font-semibold uppercase tracking-widest text-xs transition-all duration-300 hover:bg-[#FF6900] hover:text-white group/btn hover:shadow-md border border-transparent hover:border-[#FF6900]"
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
