"use client";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { MoveRight, Loader2, CheckCircle2 } from 'lucide-react';

export default function DiscussProject() {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);
  const [logos, setLogos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // 1. Dynamic Logo Fetching
  useEffect(() => {
    const checkImages = async () => {
      const availableIds = [
        10, 12, 13, 14, 16, 17, 19, 20, 21, 22, 25, 26, 27, 28, 29, 31, 32, 33,
        34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 6, 9,
      ];

      const results = await Promise.all(
        availableIds.map((i) => {
          const src = `/images/clients/${i}.png`;
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve({ id: i, src, valid: true });
            img.onerror = () => resolve({ id: i, valid: false });
          });
        })
      );

      setLogos(results.filter((r) => r.valid));
    };

    checkImages();
  }, []);

  // 2. Smooth Vertical Animation
  useLayoutEffect(() => {
    if (logos.length === 0) return;
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const totalHeight = marquee.scrollHeight;

    let ctx = gsap.context(() => {
      gsap.to(marquee, {
        y: `-${totalHeight / 2}px`,
        duration: 30,
        ease: "none",
        repeat: Infinity,
      });
    });

    return () => ctx.revert();
  }, [logos]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.formType = "Discuss Project / Let's Connect";

    try {
      const response = await fetch("https://digitalsuccesssolutions.in/php/send-mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.status === "success") {
        setIsSubmitted(true);
        e.target.reset();
      } else {
        setError(result.message || "Failed to send. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen py-16 px-4 md:px-10 overflow-hidden flex flex-col justify-center items-center font-sans">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg-cover.png"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,120,240,0.05),transparent_50%)] pointer-events-none" />

      <div className="relative z-20 mb-12 text-center">
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
          Let&apos;s Create <br /> Greatness Together!
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl w-full lg:h-[580px] p-6 md:p-10 rounded-[40px] border border-white/10 flex flex-col lg:flex-row gap-12 items-stretch shadow-2xl overflow-hidden bg-black/40 backdrop-blur-md">

        {/* FORM SIDE */}
        <div className="w-full lg:w-[60%] flex flex-col h-full overflow-y-auto pr-2 custom-scrollbar">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight italic">
            Discuss Your Project With Us
          </h3>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center flex-1 text-center space-y-4 py-10">
              <CheckCircle2 size={60} className="text-blue-500" />
              <h4 className="text-2xl font-bold text-white">Request Received!</h4>
              <p className="text-gray-400">Our team will contact you within 24 hours.</p>
              <button onClick={() => setIsSubmitted(false)} className="text-blue-400 underline text-sm">Send another request</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              <input name="name" type="text" placeholder="Full Name *" required className="bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#0078f0] transition-all text-sm" />
              <input name="company" type="text" placeholder="Company Name *" required className="bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#0078f0] transition-all text-sm" />
              <input name="phone" type="tel" placeholder="+91 Phone Number *" required className="bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#0078f0] transition-all text-sm" />
              <input name="email" type="email" placeholder="Email *" required className="bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#0078f0] transition-all text-sm" />
              <textarea name="message" placeholder="About Your Project *" required className="bg-white/5 border border-white/10 p-4 rounded-xl text-white sm:col-span-2 outline-none focus:border-[#0078f0] transition-all resize-none text-sm h-24"></textarea>

              <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-6 mt-auto pt-4">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 text-[10px] leading-relaxed max-w-[250px]">
                    By sending this form, I confirm that I have read &amp; accept the <span className="text-white underline cursor-pointer">privacy policy</span>.
                  </p>
                  {error && <p className="text-red-500 text-[10px] italic">{error}</p>}
                </div>
                <button type="submit" disabled={isSubmitting} className="group flex items-center gap-3 px-10 py-4 bg-white text-black font-black rounded-full text-xs md:text-sm hover:bg-[#0078f0] hover:text-white transition-all transform active:scale-95 shadow-lg uppercase tracking-widest disabled:opacity-50">
                  {isSubmitting ? <><Loader2 className="animate-spin w-4 h-4" /> Sending...</> : <>Send A Message <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* LOGO MARQUEE SIDE */}
        <div className="w-full lg:w-[40%] lg:pl-10 lg:border-l lg:border-white/10 flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2 tracking-tight uppercase">Driven by Trust</h3>
            <p className="text-gray-500 text-xs leading-relaxed">Brands that trust Digital Success Solutions.</p>
          </div>

          <div ref={containerRef} className="relative flex-1 min-h-[250px] overflow-hidden rounded-3xl bg-black border border-white/5 shadow-inner">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none" />

            <div ref={marqueeRef} className="flex flex-col gap-3 p-3">
              {[...Array(2)].map((_, loopIdx) => (
                <div key={loopIdx} className="grid grid-cols-2 gap-3">
                  {logos.map((logo, idx) => (
                    <div
                      key={`${loopIdx}-${idx}`}
                      className="flex items-center justify-center h-24 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 p-4"
                    >
                      <img
                        src={logo.src}
                        alt={`Client ${logo.id}`}
                        className="h-full w-full object-contain filter-none opacity-100"
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