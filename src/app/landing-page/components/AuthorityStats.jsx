"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AuthorityStats() {
  const stats = [
    { value: "6+ YEARS", label: "Specialized Ayurveda & Herbal Experience" },
    { value: "45+", label: "Ayurveda & Herbal Brands Worked With" },
    { value: "₹10Cr+", label: "Advertising Spend Managed" },
    { value: "1,600+", label: "Projects Delivered" },
    { value: "950+", label: "Clients Served" },
    { value: "30+", label: "In-House Experts" }
  ];

  return (
    <section id="authority-stats" className="py-12 md:py-20 overflow-hidden border-t border-[#DDDCCF] relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/landing/bgg.png"
          alt="Authority Background"
          fill
          className="object-cover object-center opacity-40"
          quality={100}
        />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
          <h2 className="font-playfair text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-[1.1] sm: md: mb-4 text-[#18221B]">
            Experience you can see <br className="hidden md:block" />
            <span className="text-[#5B8266]">in the numbers.</span>
          </h2>
          <p className="text-[#5F675F] text-lg md:text-xl leading-relaxed">
            Dedicated Ayurveda & Herbal team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 sm:gap-x-8 sm:gap-y-16 lg:gap-x-12 lg:gap-y-24 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-playfair font-semibold text-[#5B8266] mb-4 md:mb-6 leading-none">
                {stat.value}
              </div>
              <div className="text-[#5F675F] font-semibold text-base sm:text-lg md:text-xl max-w-[260px] leading-snug uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
