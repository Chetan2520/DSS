"use client";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { MoveRight } from 'lucide-react';

const serviceLogos = [
  { name: "Realme", img: "/client_realme.png" },
  { name: "Hie", img: "/client_hie.png" },
  { name: "Dance India Dance", img: "/client_did.png" },
  { name: "Give", img: "/client_give.png" },
  { name: "Dekoder", img: "/client_dekoder.png" },
  { name: "Theta Gainers", img: "/client_theta.png" },
  { name: "Usha", img: "/client_usha.png" },
  { name: "Oda Class", img: "/client_oda.png" },
  { name: "Idee", img: "/client_idee.png" },
  { name: "Cuckoo", img: "/client_cuckoo.png" },
  { name: "Apollo", img: "/client_apollo.png" },
  { name: "NDTV", img: "/client_ndtv.png" },
];

export default function DiscussProject() {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const marqueeHeight = marquee.scrollHeight;
    
    let ctx = gsap.context(() => {
      gsap.to(marquee, {
        y: `-${marqueeHeight / 2}px`,
        duration: 25, 
        ease: "linear",
        repeat: Infinity,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen py-16 px-4 md:px-10 bg-black overflow-hidden flex flex-col justify-center items-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(249,115,22,0.07),transparent_50%)] pointer-events-none" />

      {/* Main Heading */}
      <div className="relative z-20 mb-12 text-center">
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none">
          Let&apos;s Create <br /> Greatness Together!
        </h2>
      </div>

      {/* Main Row Container - Fixed Height Applied */}
      <div className="relative z-10 max-w-7xl w-full lg:h-[550px] p-6 md:p-12 rounded-[40px] border border-white/10 bg-[#0a0a0a] flex flex-col lg:flex-row gap-12 items-stretch shadow-2xl overflow-hidden">
        
        {/* LEFT SIDE: FORM (Fixed Height Content) */}
        <div className="w-full lg:w-[60%] flex flex-col h-full">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
            Discuss Your Project With Us
          </h3>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            <input type="text" placeholder="Full Name *" required className="bg-transparent border border-white/10 p-4 rounded-xl text-white outline-none focus:border-orange-500 transition-all text-sm" />
            <input type="text" placeholder="Company Name *" required className="bg-transparent border border-white/10 p-4 rounded-xl text-white outline-none focus:border-orange-500 transition-all text-sm" />
            <input type="tel" placeholder="+91 Phone Number *" required className="bg-transparent border border-white/10 p-4 rounded-xl text-white outline-none focus:border-orange-500 transition-all text-sm" />
            <input type="email" placeholder="Email *" required className="bg-transparent border border-white/10 p-4 rounded-xl text-white outline-none focus:border-orange-500 transition-all text-sm" />
            <textarea placeholder="About Your Project *" required className="bg-transparent border border-white/10 p-4 rounded-xl text-white sm:col-span-2 outline-none focus:border-orange-500 transition-all resize-none text-sm h-32"></textarea>

            <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-6 mt-auto pt-4">
              <p className="text-gray-500 text-[10px] leading-relaxed max-w-[250px]">
                By sending this form, I confirm that I have read &amp; accept the <span className="text-white underline cursor-pointer">privacy policy</span>.
              </p>
              
              <button type="submit" className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-black rounded-full text-xs md:text-sm hover:bg-orange-600 hover:text-white transition-all transform active:scale-95 shadow-lg whitespace-nowrap">
                Send A Message
                <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE: LOGOS (Fixed Height via Parent) */}
        <div className="w-full lg:w-[40%] lg:pl-10 lg:border-l lg:border-white/10 flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Driven by Trust</h3>
            <p className="text-gray-500 text-xs leading-relaxed">Our work speaks through the trust placed in us.</p>
          </div>

          {/* Vertical Marquee Container - Fully responsive height */}
          <div ref={containerRef} className="relative flex-1 overflow-hidden rounded-3xl bg-white/[0.02] border border-white/5">
            {/* Edge Fades */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

            <div ref={marqueeRef} className="flex flex-col gap-3 p-4">
              {[...Array(2)].map((_, loopIdx) => (
                <div key={loopIdx} className="grid grid-cols-2 gap-3">
                  {serviceLogos.map((logo, idx) => (
                    <div key={`${loopIdx}-${idx}`} className="flex items-center justify-center py-6 px-4 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all group/logo">
                      <img 
                        src={logo.img} 
                        alt={logo.name} 
                        className="h-6 md:h-8 w-auto object-contain brightness-0 invert opacity-30 group-hover/logo:opacity-100 transition-opacity" 
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}