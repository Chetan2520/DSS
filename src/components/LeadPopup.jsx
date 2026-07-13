"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import SlidingButton from "./SlidingButton";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const hasSubmitted = sessionStorage.getItem("lead_submitted");
    if (hasSubmitted) {
      console.log("LeadPopup: Form already submitted in this session.");
      return;
    }

    const timer = setTimeout(() => {
      console.log("LeadPopup: Triggering popup open.");
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.formType = "Discuss Project / Let's Connect";

    try {
      const response = await fetch(
        "https://digitalsuccesssolutions.in/php/send-mail.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();
      if (result.status === "success") {
        setIsSubmitted(true);
        sessionStorage.setItem("lead_submitted", "true");
        setTimeout(() => setIsOpen(false), 3000);
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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl text-zinc-900 border border-zinc-200"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 md:top-4 md:right-4 z-20 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-900 transition"
            >
              <X size={18} />
            </button>

            {/* Form Section */}
            <div className="p-5 md:p-8 flex flex-col justify-center relative bg-white max-h-[90vh] overflow-y-auto">
              {isSubmitted ? (
                <div className="text-center space-y-4 py-8 md:py-12">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Sparkles className="text-green-600" size={28} />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">
                    Request Received!
                  </h4>
                  <p className="text-zinc-500 text-xs md:text-sm">
                    Thank you! Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <div className="relative z-10">
                  {/* Title */}
                  <div className="mb-5 md:mb-8 text-center px-4">
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-900 leading-tight">
                      Get a{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                        Free Proposal
                      </span>
                    </h3>
                    <p className="text-zinc-500 mt-1 md:mt-2 text-xs md:text-sm">
                      Fill out the form below and we'll be in touch within 30 minutes.
                    </p>
                  </div>

                  {/* Form */}
                  <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      <input
                        name="name"
                        type="text"
                        placeholder="Full Name *"
                        required
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white outline-none transition font-medium"
                      />

                      <input
                        name="company"
                        type="text"
                        placeholder="Company Name *"
                        required
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white outline-none transition font-medium"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+91 Phone Number *"
                        required
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white outline-none transition font-medium"
                      />

                      <input
                        name="email"
                        type="email"
                        placeholder="Email Address *"
                        required
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white outline-none transition font-medium"
                      />
                    </div>

                    <textarea
                      name="message"
                      placeholder="About Your Project *"
                      rows={2}
                      required
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white outline-none transition resize-none font-medium md:min-h-[80px]"
                    />

                    {error && (
                      <p className="text-red-500 text-xs italic">{error}</p>
                    )}

                    <div className="pt-2 flex flex-col gap-3 w-full">
                      {/* Top Row: WhatsApp and Call */}
                      <div className="flex flex-row gap-3 w-full">
                        <a
                          href="https://wa.me/916264398990?text=Hello!%20I'm%20interested%20in%20your%20services."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-white border border-[#25D366] text-[#25D366] rounded-lg text-xs md:text-sm font-semibold hover:bg-green-50 transition shadow-sm h-[42px] md:h-[48px]"
                        >
                          <FaWhatsapp size={16} />
                          WhatsApp
                        </a>
                        <a
                          href="tel:+916264398990"
                          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg text-xs md:text-sm font-semibold hover:bg-blue-700 transition shadow-sm h-[42px] md:h-[48px]"
                        >
                          <Phone size={14} />
                          Call Us
                        </a>
                      </div>

                      {/* Bottom Row: Submit Button */}
                      <SlidingButton
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-zinc-900 text-white font-bold rounded-lg shadow-md hover:bg-zinc-800 disabled:opacity-50 transition text-xs md:text-sm flex justify-center items-center h-[44px] md:h-[48px]"
                      >
                        {isSubmitting ? "Sending..." : "Submit Request"}
                      </SlidingButton>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
