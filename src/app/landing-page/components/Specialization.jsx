"use client";
import { motion } from "framer-motion";
import { Leaf, Droplets, ShoppingBag, Hospital, ShieldCheck, BookOpen, Award, MessageSquare } from "lucide-react";

export default function Specialization() {
  const needs = [
    { icon: ShieldCheck, text: "Trust before purchase." },
    { icon: BookOpen, text: "Education before understanding." },
    { icon: Award, text: "Credibility before taking action." },
    { icon: MessageSquare, text: "The right message before buying." }
  ];

  const categories = [
    { icon: Leaf, label: "Ayurvedic Brands" },
    { icon: Leaf, label: "Herbal Brands" },
    { icon: Droplets, label: "Wellness & Personal Care" },
    { icon: ShoppingBag, label: "D2C & eCommerce" },
    { icon: Hospital, label: "Ayurveda Clinics" }
  ];

  return (
    <section className="relative py-12 md:py-20 bg-[url('/images/landing/bgg.png')] bg-cover bg-center bg-no-repeat border-t border-[#DDDCCF]">
      {/* No overlay to show background image at full 100% opacity as requested */}
      {/* <div className="absolute inset-0 bg-white/40"></div> */}

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">

        <div className="flex flex-col lg:flex-row gap-20 lg:gap-24 items-start">

          {/* Left Side - Clean Typography & List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex flex-col"
          >
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-[1.1] text-[#18221B] mb-8">
              Ayurvedic & Wellness <br />
              <span className="text-[#FF6900]">Marketing Is Different.</span>
            </h2>

            <p className="text-lg md:text-xl text-[#4A534A] mb-12 font-medium leading-relaxed max-w-xl">
              Selling an Ayurvedic or Herbal product isn't the same as marketing a generic eCommerce product. Your audience is looking for more than just a quick buy.
            </p>

            <div>
              <h3 className="font-sans font-semibold text-[#5B8266] mb-8 uppercase tracking-[0.2em] text-sm flex items-center gap-4">
                Your customers demand
                <div className="h-px bg-[#5B8266]/30 flex-grow max-w-[100px]"></div>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {needs.map((need, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white/85 backdrop-blur-sm p-5 rounded-2xl border border-white/50 shadow-sm">
                    <div className="shrink-0 bg-[#F8F5EA] w-10 h-10 rounded-full flex items-center justify-center">
                      <need.icon className="text-[#FF6900]" size={20} strokeWidth={2} />
                    </div>
                    <span className="text-[#18221B] font-semibold text-[15px] leading-snug pt-2">{need.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Clean Minimalist List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full lg:pl-10"
          >
            <div className="h-full flex flex-col pt-8 lg:pt-0">
              <h3 className="font-playfair text-3xl md:text-4xl font-semibold text-[#18221B] mb-8 relative inline-block">
                We Work With
                <span className="absolute -bottom-4 left-0 w-16 h-1.5 bg-[#FF6900]"></span>
              </h3>

              <div className="flex flex-col gap-4 mt-4">
                {categories.map((cat, index) => (
                  <div key={index} className="flex items-center gap-5 group bg-white/85 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-sm hover:shadow-md hover:border-[#FF6900]/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#F8F5EA] group-hover:bg-[#FF6900]/10 flex items-center justify-center transition-colors duration-300 shrink-0">
                      <cat.icon className="text-[#5B8266] group-hover:text-[#FF6900] transition-colors duration-300" size={24} strokeWidth={1.5} />
                    </div>
                    <span className="font-semibold text-[#18221B] group-hover:text-[#FF6900] text-lg transition-colors duration-300 tracking-wide">{cat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
