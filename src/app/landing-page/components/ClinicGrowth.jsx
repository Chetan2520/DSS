"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, ShieldCheck, HeartHandshake, MessageSquarePlus, CalendarCheck } from "lucide-react";

export default function ClinicGrowth() {
  const steps = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Local Visibility",
      desc: "Be found where patients search."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Authority",
      desc: "Show expertise and credibility."
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Trust",
      desc: "Build confidence to enquire."
    },
    {
      icon: <MessageSquarePlus className="w-6 h-6" />,
      title: "Lead Generation",
      desc: "WhatsApp, calls and forms."
    },
    {
      icon: <CalendarCheck className="w-6 h-6" />,
      title: "Appointment",
      desc: "Convert relevant enquiries."
    }
  ];

  const tags = [
    "Google Business Profile", "Local SEO", "Maps", "Search", "Meta Ads", "WhatsApp", "Calls"
  ];

  return (
    <section id="clinic-growth" className="py-12 md:py-20 relative overflow-hidden bg-[#F8F5EA]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/landing/bg2.png"
          alt="Clinic Growth Background"
          fill
          className="object-cover object-center"
          quality={100}
        />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="font-playfair text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-[1.1] md: lg: mb-6 text-[#18221B]">
            From local visibility to <br className="hidden md:block" />
            <span className="text-[#5B8266]">patient enquiries.</span>
          </h2>
          <p className="text-[#5F675F] text-lg leading-relaxed">
            Local visibility is only the start. DSS connects authority, trust, lead generation and appointments to build a steady flow of patients.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-3xl shadow-sm border border-[#DDDCCF] text-center flex flex-col items-center hover:shadow-xl hover:border-[#5B8266]/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle background icon hover */}
              <div className="absolute -top-4 -left-4 text-[#F8F5EA] w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {step.icon}
              </div>

              <div className="w-14 h-14 rounded-full bg-[#F8F5EA] text-[#5B8266] flex items-center justify-center mb-6 group-hover:bg-[#5B8266] group-hover:text-white transition-colors duration-300 relative z-10 shadow-sm border border-[#DDDCCF]">
                {step.icon}
              </div>
              <h3 className="font-playfair text-xl font-semibold text-[#18221B] mb-3 group-hover:text-[#5B8266] transition-colors relative z-10">{step.title}</h3>
              <p className="text-[#5F675F] text-sm leading-relaxed relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tags */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {tags.map((tag, index) => (
            <span key={index} className="px-5 py-2.5 bg-white rounded-full text-sm font-medium text-[#18221B] border border-[#DDDCCF] shadow-sm">
              {tag}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
