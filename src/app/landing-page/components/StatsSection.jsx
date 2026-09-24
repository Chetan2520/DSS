"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";
import { Target, Briefcase, Users, IndianRupee, UserCog } from "lucide-react";

function Counter({ from, to, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 80,
    restDelta: 0.1
  });

  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (inView) {
      motionValue.set(to);
    }
  }, [inView, motionValue, to]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    { icon: Target, num: 6, suffix: "+", label: "Years Experience" },
    { icon: Briefcase, num: 1600, suffix: "+", label: "Projects Completed" },
    { icon: Users, num: 950, suffix: "+", label: "Happy Clients" },
    { icon: IndianRupee, num: 10, prefix: "₹", suffix: " Cr+", label: "Ad Spend Managed" },
    { icon: UserCog, num: 30, suffix: "+", label: "Experts Team" },
  ];

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Base Background Color */}
      <div className="absolute inset-0 z-0 bg-[#F8F9F5]" />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/landing/desktop-bg.png"
          alt="Stats Background"
          fill
          className="object-cover object-center opacity-100"
          quality={100}
          priority
        />
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#F8F9F5]/60 md:bg-[#F8F9F5]/50 pointer-events-none"></div>
      </div>
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 relative z-20">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#18221B] mb-3 tracking-tight"
          >
            Real Brands. Real Results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#5F675F] text-sm md:text-base font-medium"
          >
            Helping Ayurvedic brands grow across India and beyond.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center items-stretch gap-4 md:gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/95 backdrop-blur-sm px-6 py-6 rounded-2xl border border-[#DDDCCF] shadow-sm flex flex-col items-center justify-center min-w-[140px] flex-1 max-w-[200px]"
            >
              <div className="w-10 h-10 rounded-full bg-[#E8EFEA] flex items-center justify-center text-[#5B8266] mb-4">
                <stat.icon size={20} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#18221B] mb-1">
                <Counter from={0} to={stat.num} prefix={stat.prefix} suffix={stat.suffix} />
              </h3>
              <p className="text-[11px] md:text-xs font-semibold text-[#5F675F] text-center uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
