"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if already submitted in this session
    const hasSubmitted = sessionStorage.getItem("lead_submitted");
    if (hasSubmitted) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.formType = "Lead Popup / Free Audit";

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
        sessionStorage.setItem("lead_submitted", "true");
        setTimeout(() => setIsOpen(false), 3000); // Close after 3s
      } else {
        setError(result.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center px-4">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-md md:max-w-4xl bg-[#05070d] border border-white/10 rounded-[2rem] overflow-hidden grid grid-cols-1 md:grid-cols-2"
        >

          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 transition"
          >
            <X size={20} />
          </button>

          {/* 🔵 LEFT SIDE */}
          <div className="hidden md:flex relative p-8 md:p-12 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-600 via-blue-800 to-[#020617]">

            {/* 🔵 Image Blend */}
            <img
              src="/images/popupimg.png" 
              alt="bg"
              className="absolute inset-0 w-full h-full object-cover opacity-100 mix-blend-overlay"
            />

            {/* 🔵 Dark Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* 🔵 Radial Highlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_60%)]" />

            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                <Sparkles size={14} className="text-blue-300 fill-blue-300" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                  Free Strategy Session
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase mb-4">
                Ready to <br />
                <span className="text-blue-300 underline italic">
                  Dominate
                </span>{" "}
                <br />
                your market?
              </h3>

              <p className="text-blue-100 text-sm md:text-base font-medium opacity-80">
                Get a 15-minute free audit of your current digital presence. No strings attached.
              </p>
            </div>

            {/* Bottom */}
            <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
              <p className="text-white font-bold text-xs tracking-tighter uppercase opacity-60 italic">
                Trusted by 1200+ brands globally.
              </p>
            </div>

            {/* Glow */}
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/30 rounded-full blur-[120px]" />
          </div>

          {/* 🔵 RIGHT SIDE */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center space-y-4 py-10">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-blue-500" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white uppercase tracking-tighter">Request Received!</h4>
                <p className="text-zinc-400 text-sm">We'll contact you within 24 hours to schedule your audit.</p>
              </div>
            ) : (
              <>
                <h4 className="text-white text-xl font-bold mb-6 tracking-tight">
                  Tell us about your business
                </h4>

                <form className="space-y-4" onSubmit={handleSubmit}>

                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name *"
                    required
                    className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-blue-500 outline-none transition"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Business Email *"
                    required
                    className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-blue-500 outline-none transition"
                  />

                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-blue-500 outline-none transition"
                  />

                  <textarea
                    name="message"
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-blue-500 outline-none transition h-20 resize-none"
                  ></textarea>

                  {error && <p className="text-red-500 text-[10px] italic">{error}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition group shadow-lg shadow-blue-900/40 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Claim Free Audit"}
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[10px] text-center text-zinc-500 pt-2 uppercase tracking-widest">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              </>
            )}
          </div>

        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
}