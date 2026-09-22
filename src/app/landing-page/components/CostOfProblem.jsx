"use client";
import { motion } from "framer-motion";
import { ArrowDown, AlertTriangle, ArrowRight } from "lucide-react";

export default function CostOfProblem() {
  const steps = [
    { title: "Poor Targeting", desc: "Reaching the wrong audience" },
    { title: "Low-Quality Leads", desc: "Enquiries that won't buy" },
    { title: "Wasted Ad Spend", desc: "Burning through budget" },
    { title: "Low Conversion", desc: "Traffic leaves without action" },
    { title: "Higher CAC", desc: "Expensive acquisition cost" },
    { title: "Slower Growth", desc: "Business remains stagnant" },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F8F5EA] text-[#18221B] overflow-hidden border-t border-[#DDDCCF]">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">

        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#FF6900]/10 rounded-full flex items-center justify-center">
              <AlertTriangle className="text-[#FF6900]" size={32} />
            </div>
          </div>
          <h2 className="font-playfair text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.1] text-[#18221B] mb-6">
            Every Weak Point in Your Funnel Can Cost You Growth.
          </h2>
        </div>

        <div className="max-w-6xl mx-auto py-12 md:py-20 w-full relative">
          
          {/* DESKTOP LAYOUT (Horizontal) */}
          <div className="hidden md:flex flex-row items-center justify-between gap-0 relative px-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative z-10 flex flex-col items-center group w-1/6 ${isEven ? '-translate-y-12' : 'translate-y-12'}`}
                >
                  <div className="w-14 h-14 rounded-full bg-white border border-[#DDDCCF] flex items-center justify-center mb-4 shadow-sm group-hover:border-[#FF6900] group-hover:bg-[#FF6900] transition-colors duration-300 shrink-0">
                    <span className="font-bold text-lg text-[#5B8266] group-hover:text-white transition-colors duration-300">{index + 1}</span>
                  </div>
                  <div className="text-center px-2">
                    <h3 className="font-playfair font-bold text-base text-[#18221B] mb-1 group-hover:text-[#FF6900] transition-colors leading-tight">{step.title}</h3>
                    <p className="text-xs text-[#5F675F]">{step.desc}</p>
                  </div>

                  {/* Desktop connecting arrow (Wavy Dotted) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-[28px] left-[50%] w-full h-0 pointer-events-none">
                      {isEven ? (
                        <svg viewBox="0 0 192 96" preserveAspectRatio="none" fill="none" className="w-full h-[96px] absolute top-0 left-0 text-[#5B8266]/40 overflow-visible">
                          <path d="M 28,0 C 96,0 96,96 164,96" stroke="currentColor" strokeWidth="3" strokeDasharray="1 8" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                          <polyline points="152,86 164,96 152,106" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 192 96" preserveAspectRatio="none" fill="none" className="w-full h-[96px] absolute top-[-96px] left-0 text-[#5B8266]/40 overflow-visible">
                          <path d="M 28,96 C 96,96 96,0 164,0" stroke="currentColor" strokeWidth="3" strokeDasharray="1 8" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                          <polyline points="152,-10 164,0 152,10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                        </svg>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* MOBILE LAYOUT (Vertical Zigzag) */}
          <div className="md:hidden flex flex-col relative w-full px-2">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative w-full h-[120px]">
                  
                  {/* Card Container - 50% width, alternating left/right */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`absolute top-0 w-1/2 flex flex-col items-center text-center px-1 z-10 ${isEven ? 'left-0' : 'right-0'}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-white border border-[#DDDCCF] flex items-center justify-center mb-2 shadow-sm relative z-20">
                      <span className="font-bold text-base text-[#5B8266]">{index + 1}</span>
                    </div>
                    <div className="bg-[#F8F5EA] px-2 py-1 rounded-lg relative z-20 shadow-[0_0_10px_10px_#F8F5EA]">
                      <h3 className="font-playfair font-bold text-sm text-[#18221B] mb-1 leading-tight">{step.title}</h3>
                      <p className="text-[10px] text-[#5F675F] leading-tight">{step.desc}</p>
                    </div>
                  </motion.div>

                  {/* Connecting Line to next item */}
                  {index < steps.length - 1 && (
                    <div className={`absolute top-[24px] h-[120px] w-1/2 pointer-events-none z-0 ${isEven ? 'left-[25%]' : 'right-[25%]'}`}>
                      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-[#5B8266]/40 overflow-visible">
                        {isEven ? (
                          <path d="M 0,0 C 0,50 100,50 100,100" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="1 6" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                        ) : (
                          <path d="M 100,0 C 100,50 0,50 0,100" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="1 6" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                        )}
                      </svg>
                      {/* Fixed Arrowhead at the bottom corner */}
                      {isEven ? (
                        <div className="absolute -bottom-2 -right-[9px] text-[#5B8266]/40">
                          <ArrowDown size={18} strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="absolute -bottom-2 -left-[9px] text-[#5B8266]/40">
                          <ArrowDown size={18} strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>


      </div>
    </section>
  );
}
