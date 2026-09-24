"use client";
import { motion } from "framer-motion";
import { Search, PenTool, MousePointerClick, RefreshCw, Rocket } from "lucide-react";

export default function GrowthEngine() {
  const steps = [
    {
      id: "01",
      title: "Strategy",
      description: "Understand your market & audience",
      icon: Search,
    },
    {
      id: "02",
      title: "Content",
      description: "Create trust & educate",
      icon: PenTool,
    },
    {
      id: "03",
      title: "Traffic",
      description: "Bring high-intent audience",
      icon: MousePointerClick,
    },
    {
      id: "04",
      title: "Conversion",
      description: "Turn visitors into customers",
      icon: RefreshCw,
    },
    {
      id: "05",
      title: "Scale",
      description: "Grow with data & automation",
      icon: Rocket,
    }
  ];

  return (
    <section id="growth-system" className="py-16 pt-20 pb-24 md:pt-28 md:pb-40 bg-[#F8F5EA] bg-[url('/images/landing/phone-bg.png')] md:bg-[url('/images/landing/desktop-bg.png')] bg-contain bg-no-repeat bg-center md:bg-repeat text-[#18221B] overflow-hidden relative border-t border-[#DDDCCF]">
      {/* Light overlay for text readability */}
      <div className="absolute inset-0 bg-[#F8F9F5]/60 md:bg-[#F8F9F5]/50 pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 relative z-10">

        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-24 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl sm:text-5xl font-semibold leading-[1.2] mb-4 text-[#18221B] tracking-tight"
          >
            From Target to Scale.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#5F675F] font-medium"
          >
            A proven digital growth system designed for Ayurvedic brands.
          </motion.p>
        </div>

        <div className="w-full max-w-md md:max-w-[1000px] mx-auto flex flex-col md:flex-row md:items-start md:justify-between pt-4 md:pt-8 relative">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-row md:flex-col gap-5 sm:gap-6 md:gap-5 relative group flex-1 ${index % 2 !== 0 ? 'md:mt-16' : ''
                }`}
            >
              {/* Vertical Line (Mobile) */}
              {index !== steps.length - 1 && (
                <div className="md:hidden absolute left-[1.3rem] sm:left-[1.4rem] top-12 bottom-[-1.5rem] w-[1.5px] bg-[#5B8266]/20 group-hover:bg-[#5B8266]/50 transition-colors duration-300"></div>
              )}

              {/* Curved Dotted Arrow (Desktop) */}
              {index !== steps.length - 1 && (
                <div className={`hidden md:block absolute left-[50%] w-[100%] h-[4rem] pointer-events-none -z-10 ${index % 2 === 0 ? 'top-[1.5rem]' : 'top-[-2.5rem]'}`}>
                  {index % 2 === 0 ? (
                    // Top to Bottom Curve
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
                      <path d="M 15 0 C 45 0, 55 100, 85 100" stroke="#5B8266" strokeWidth="2" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" className="opacity-40" />
                      {/* Arrow Head */}
                      <path d="M 75 80 L 85 100 L 75 120" stroke="#5B8266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" className="opacity-60" />
                    </svg>
                  ) : (
                    // Bottom to Top Curve
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
                      <path d="M 15 100 C 45 100, 55 0, 85 0" stroke="#5B8266" strokeWidth="2" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" className="opacity-40" />
                      {/* Arrow Head */}
                      <path d="M 75 -20 L 85 0 L 75 20" stroke="#5B8266" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" className="opacity-60" />
                    </svg>
                  )}
                </div>
              )}

              {/* Icon Circle */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full flex items-center justify-center bg-white z-10 group-hover:shadow-md transition-all duration-300 relative mx-0 md:mx-auto">
                {/* Rotating Dashed Border */}
                <div className="absolute inset-0 rounded-full border-[2px] border-dashed border-[#4A6B53] animate-[spin_8s_linear_infinite] group-hover:border-[#2A3B30] transition-colors duration-300"></div>

                {/* Inner pulse effect on hover */}
                <div className="absolute inset-0 rounded-full bg-[#5B8266]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <step.icon size={20} className="text-[#5B8266] relative z-10" />
              </div>

              {/* Content */}
              <div className="pb-10 md:pb-0 pt-1.5 sm:pt-2 md:pt-2 md:text-center">
                <h3 className="text-lg sm:text-xl md:text-lg lg:text-xl font-semibold text-[#18221B] flex flex-row md:flex-col md:items-center items-center gap-3 md:gap-2">
                  <span className="text-[#5B8266]/40 font-medium text-sm sm:text-base md:text-sm block">{step.id}</span>
                  {step.title}
                </h3>
                <p className="text-[#5F675F] text-sm sm:text-[15px] md:text-sm lg:text-[15px] mt-1 md:mt-2 font-medium leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
