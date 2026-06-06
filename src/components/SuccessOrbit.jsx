"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SlidingButton from "./SlidingButton";

// Client Testimonials Data
const clientTestimonials = [
  { id: 1, img: "https://randomuser.me/api/portraits/men/32.jpg", name: "Alex Rivera", role: "CTO, TechFlow", feedback: "DSS transformed our legacy system into a high-speed cloud infrastructure." },
  { id: 2, img: "https://randomuser.me/api/portraits/women/44.jpg", name: "Sarah Chen", role: "Founder, Bloomly", feedback: "The MERN stack expertise at DSS is unmatched. Exceptional delivery." },
  { id: 3, img: "https://randomuser.me/api/portraits/men/46.jpg", name: "James Wilson", role: "Product Manager, FinEdge", feedback: "Scalable solutions that actually work. Highly recommended for enterprise projects." },
  { id: 4, img: "https://randomuser.me/api/portraits/women/22.jpg", name: "Priya Sharma", role: "CEO, Nexa Digital", feedback: "Professional, transparent, and technically sound team." },
  { id: 5, img: "https://randomuser.me/api/portraits/men/11.jpg", name: "Marc Dupont", role: "Head of IT, Global Logistics", feedback: "Their UI/UX vision doubled our platform engagement within months." },
  { id: 6, img: "https://randomuser.me/api/portraits/women/65.jpg", name: "Elena Rossi", role: "Marketing Director, VibeScale", feedback: "A partner that understands business ROI as much as code." },
  { id: 7, img: "https://randomuser.me/api/portraits/men/88.jpg", name: "David Ko", role: "Lead Dev, Alpha Systems", feedback: "Clean code, timely delivery, and great post-launch support." },
  { id: 8, img: "https://randomuser.me/api/portraits/women/90.jpg", name: "Monica G.", role: "COO, RetailStack", feedback: "Best decision for our e-commerce scaling journey." },
];

const ClientOrbit = () => {
  const [radius, setRadius] = useState(250);
  const [activeFeedback, setActiveFeedback] = useState(clientTestimonials[0]);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 160 : 260);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center py-24 px-6 overflow-hidden font-sans">

      {/* Background Neural Network Glow */}
      <div className="absolute w-[900px] h-[900px] bg-[#0078f0]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-center z-10">

        {/* --- LEFT SIDE: THE TRUST ORBIT --- */}
        <div className="relative flex justify-center items-center h-[500px] md:h-[650px]">

          {/* Technology Rings */}
          {[300, 500, 700].map((size, i) => (
            <div
              key={i}
              className="absolute border border-white/[0.03] rounded-full"
              style={{ width: size, height: size }}
            />
          ))}

          {/* Center Hub: The Pulse of Tech */}
          <div className="relative z-30 text-center group">
            <div className="absolute inset-0 bg-[#0078f0] blur-3xl opacity-20" />
            <div className="relative w-36 h-36 md:w-52 md:h-52 rounded-full border border-white/10 p-2 bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0078f0]/20 to-transparent" />
              <div className="relative text-center p-4">
                <Quote className="text-[#ff9a20] w-8 h-8 mx-auto mb-2 opacity-60" />
                <p className="text-white text-[10px] md:text-xs font-medium leading-relaxed italic opacity-80">
                  "{activeFeedback.feedback.substring(0, 60)}..."
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0078f0] px-4 py-1.5 rounded-full shadow-xl">
              <p className="text-white font-bold text-[9px] md:text-[10px] uppercase tracking-widest whitespace-nowrap">
                Trusted Worldwide
              </p>
            </div>
          </div>

          {/* Rotating Clients */}
          <motion.div
            className="absolute w-[500px] h-[500px] z-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            {clientTestimonials.map((item, i) => {
              const angle = (i / clientTestimonials.length) * (Math.PI * 2);
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={item.id}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    onMouseEnter={() => setActiveFeedback(item)}
                    className="flex flex-col items-center group/client cursor-pointer"
                  >
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border border-white/10 group-hover/client:border-[#ff9a20] group-hover/client:scale-125 transition-all duration-500 bg-zinc-900 shadow-2xl grayscale group-hover/client:grayscale-0">
                      <img
                        src={item.img}
                        className="w-full h-full object-cover"
                        alt={item.name}
                      />
                    </div>
                    {/* Floating Name Label */}
                    <div className="absolute -bottom-10 opacity-0 group-hover/client:opacity-100 transition-all bg-white text-black px-2 py-0.5 rounded-sm">
                      <p className="text-[9px] font-semibold whitespace-nowrap uppercase tracking-tighter">
                        {item.name} • {item.role}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* --- RIGHT SIDE: IT SERVICES CONTENT --- */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* <div className="flex items-center gap-3 mb-6">
             <span className="text-[#0078f0] font-mono font-semibold uppercase tracking-[0.4em] text-[10px] md:text-xs italic">Global Partnerships</span>
             <div className="w-12 h-[1px] bg-white/10" />
          </div> */}

          <h2 className="text-4xl md:text-6xl font-semibold text-white leading-[0.95] tracking-tighter mb-8 uppercase">
            Fueling
            <span className="text-[#ffffff]"> Innovation</span> <br />
          </h2>

          <p className="text-zinc-500 text-base md:text-xl    mb-12 max-w-lg leading-relaxed">
            From Indore to the world. We deliver high-performance IT solutions
            that help businesses scale, optimize, and dominate their digital landscape.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12 w-full max-w-md">
            <div>
              <h4 className="text-white text-3xl font-semibold   tracking-tighter">98%</h4>
              <p className="text-[#0078f0] text-[10px] font-bold uppercase tracking-widest">Client Retention</p>
            </div>
            <div>
              <h4 className="text-white text-3xl font-semibold   tracking-tighter">150+</h4>
              <p className="text-[#ff9a20] text-[10px] font-bold uppercase tracking-widest">Projects Delivered</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <SlidingButton
              href="#services"
              className="px-10 py-4 bg-[#0078f0] text-white font-semibold uppercase text-xs tracking-widest rounded-full shadow-lg shadow-[#0078f0]/20"
            >
              Explore Services
            </SlidingButton>
            <SlidingButton
              href="/lets-connect"
              className="px-10 py-4 border border-white/10 text-white font-semibold uppercase text-xs tracking-widest rounded-full"
            >
              Let's Talk
            </SlidingButton>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Tag */}
      <div className="absolute bottom-10 right-10 opacity-20 hidden md:block">
        <p className="font-mono text-white text-[9px] uppercase tracking-[1em]">Agile / Scalable / Robust</p>
      </div>
    </section>
  );
};

export default ClientOrbit;