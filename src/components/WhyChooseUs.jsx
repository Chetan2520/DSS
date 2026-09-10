"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Smartphone } from "lucide-react";

const WhyChooseUs = () => {
  const cards = [
    {
      title: "Fast Performance",
      description:
        "Optimized architecture ensuring your website loads in milliseconds for maximum conversions.",
      icon: <Zap size={56} strokeWidth={1.5} />,
    },
    {
      title: "Best Security",
      description:
        "Bank-level encryption and advanced threat protection keeping your business data safe.",
      icon: <ShieldCheck size={56} strokeWidth={1.5} />,
    },
    {
      title: "Mobile Responsiveness",
      description:
        "Pixel-perfect adaptive designs that deliver an exceptional user experience on every device.",
      icon: <Smartphone size={56} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#050505] text-white py-10 px-6 lg:px-20 overflow-hidden flex items-center justify-center">
      {/* Top Black Gradient Border (Fades downwards to transparent) */}
      <div className="absolute top-0 left-0 w-full h-5 md:h-15 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-30" />

      {/* Subtle Background Glows */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10  blur-[150px] rounded-[100%] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col gap-16">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold tracking-wide"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed"
          >
            Experience enhanced security, speed, and innovation with our 
            cutting-edge digital solutions designed to scale your business.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {[
            { 
              title: "Fast Performance", 
              desc: "Optimized for speed, our websites ensure an instant load time and seamless user experience that keeps customers engaged.",
              pattern: "/images/pattern-bg1.png"
            },
            { 
              title: "Responsive Design", 
              desc: "From smartphones to high-res monitors, your site will look and feel flawless across every single device.",
              pattern: "/images/pattern-bg2.png"
            },
            { 
              title: "Best Security", 
              desc: "We deploy advanced encryption and robust security protocols to keep your business data and users safe.",
              pattern: "/images/pattern-bg3.png"
            }
          ].map((card, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-xl overflow-hidden bg-[#000000] min-h-[300px] flex flex-col p-10 md:p-12 transition-all duration-500 border border-white/5  "
              >
                 
                
                {/* Grainy Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" 
                  style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
                />

                {/* Content */}
                <div className="relative z-20 h-full flex flex-col justify-start">
                  {/* Heading */}
                  <h3 className="text-2xl md:text-3xl     text-white mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  
                  {/* Paragraph */}
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-[90%] font-medium">
                    {card.desc}
                  </p>
                </div>

                {/* Background Pattern Image */}
                <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none z-10">
                   <img 
                     src={card.pattern} 
                     alt="Pattern" 
                     className="absolute bottom-0 right-0 w-full h-auto object-contain object-bottom   group-hover:scale-105 transition-transform duration-700"
                   />
                </div>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0  transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
