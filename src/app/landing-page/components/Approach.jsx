"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Approach() {
  const specializations = [
    {
      number: "01",
      title: "Ayurvedic Product Brands",
      description: "We help Ayurvedic product brands scale by creating Ayurveda-compliant ad creatives and building trust-driven product funnels. We focus on educating your audience about ingredient efficacy to maximize your ROAS without risking ad account bans."
    },
    {
      number: "02",
      title: "Ayurvedic Clinics",
      description: "Drive high-intent patient footfall to your clinics. We dominate local search for Ayurvedic treatments, optimize your practitioner profiles, and run targeted patient acquisition campaigns that fill your consultation calendar."
    },
    {
      number: "03",
      title: "Ayurvedic & Herbal D2C",
      description: "Unlock exponential revenue for your herbal D2C brand. We deploy tailored performance marketing that respects health-claim guidelines, using deep education funnels to turn cold health-conscious traffic into loyal, repeat customers."
    },
    {
      number: "04",
      title: "Herbal & Wellness Brands",
      description: "Establish your brand as an authentic voice in holistic wellness. We craft content that bridges ancient wisdom with modern consumer needs, building deep trust and positioning you as the definitive authority in natural healing."
    }
  ];



  return (
    <section id="authority" className="py-20 md:py-32 bg-[#F8F5EA] overflow-hidden relative">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Content with Embedded Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col h-full"
          >
            
            <h2 className="font-playfair text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.1] sm: md: lg: mb-6 md:mb-8 text-[#18221B]">
              We understand <br className="block sm:hidden" />
              <span className="hidden sm:inline">the </span>
              <span className="sm:hidden">the </span>
              <span className="text-[#5B8266] italic">Ayurveda</span> <br />
              industry.
            </h2>

            <div className="relative w-full flex-1 min-h-[300px] rounded-3xl overflow-hidden shadow-xl shadow-[#5B8266]/5">
              <Image 
                src="/images/landing/premium-abstract.jpg" 
                alt="Ayurvedic Premium Ingredients" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>

          {/* Right Content / Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-fr h-full"
          >
            {specializations.map((spec, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-[32px] shadow-sm border border-[#DDDCCF] hover:shadow-xl hover:border-[#5B8266]/30 transition-all duration-300 group flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-sm font-bold tracking-widest text-[#5B8266] bg-[#F8F5EA] px-3 py-1 rounded-full border border-[#DDDCCF]">{spec.number}</span>
                    <div className="w-8 h-8 rounded-full bg-[#F8F5EA] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="#5B8266" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-[#18221B] mb-4 group-hover:text-[#5B8266] transition-colors">{spec.title}</h3>
                </div>
                <p className="text-[#5F675F] text-sm leading-relaxed">{spec.description}</p>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
