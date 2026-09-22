"use client";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { id: "01", title: "DISCOVER", desc: "We understand your product, audience, current marketing and business goals." },
    { id: "02", title: "AUDIT", desc: "We analyse your ads, creatives, website, landing pages and customer journey." },
    { id: "03", title: "STRATEGIZE", desc: "We build your acquisition strategy around your business objectives." },
    { id: "04", title: "LAUNCH", desc: "We launch campaigns, creatives, landing pages and tracking." },
    { id: "05", title: "OPTIMIZE", desc: "We continuously analyse performance and test what can improve." },
    { id: "06", title: "SCALE", desc: "We scale the campaigns and channels that demonstrate sustainable performance." }
  ];

  return (
    <section id="our-process" className="py-20 md:py-32 bg-[#f8f5ea] relative overflow-hidden isolate">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 relative z-10">
        
        <div className="text-center w-full mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-bold leading-[1.2] text-[#18221B] mb-6"
          >
            A Clear Process. <span className="text-[#5B8266]">No Guesswork.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-start p-8 md:p-10 bg-white rounded-[2rem] border border-[#DDDCCF] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              {/* Step Badge */}
              <div className="w-12 h-12 rounded-full bg-[#F8F5EA] text-[#FF6900] flex items-center justify-center font-bold text-lg mb-8 shadow-sm group-hover:bg-[#FF6900] group-hover:text-white transition-colors duration-300 relative z-10">
                {index + 1}
              </div>
              
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#18221B] mb-4 group-hover:text-[#5B8266] transition-colors duration-300 relative z-10">
                {step.title}
              </h3>
              
              <p className="text-[#5F675F] text-base md:text-lg leading-relaxed relative z-10">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
