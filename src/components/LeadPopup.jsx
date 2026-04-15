"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // 5 second baad popup open hoga
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden grid grid-cols-1 md:grid-cols-2"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 transition-colors"
          >
            <X size={20} />
          </button>

          {/* LEFT SIDE: Visual & Offer */}
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-blue-600 to-blue-900 flex flex-col justify-between overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                <Sparkles size={14} className="text-orange-400 fill-orange-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Free Strategy Session</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase mb-4">
                Ready to <br /> <span className="text-orange-400 underline italic">Dominate</span> <br /> your market?
              </h3>
              <p className="text-blue-100 text-sm md:text-base font-medium opacity-80">
                Get a 15-minute free audit of your current digital presence. No strings attached.
              </p>
            </div>

            {/* Bottom Accent */}
            <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
              <p className="text-white font-bold text-xs tracking-tighter uppercase opacity-60 italic">
                Trusted by 1200+ brands globally.
              </p>
            </div>

            {/* Abstract Background Shape */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>

          {/* RIGHT SIDE: Lead Form */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h4 className="text-white text-xl font-bold mb-6 tracking-tight">Tell us about your business</h4>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-orange-500 outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Business Email"
                  className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-orange-500 outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-orange-500 outline-none transition-colors"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all group"
              >
                Claim Free Audit <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-[10px] text-center text-zinc-500 pt-2 uppercase tracking-widest">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}