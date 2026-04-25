"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight, Star, X, CheckCircle2, Loader2, Phone } from "lucide-react";

const ContactSection = () => {
  const [tab, setTab] = useState("quote");
  const [selectedServices, setSelectedServices] = useState(["Discovery"]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const services = ["Discovery", "Design", "Development", "Marketing", "AI Automation"];

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.services = selectedServices.join(", ");
    data.formType = "Contact Us / Quote";

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
        setSelectedServices([]);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-[#030712] text-white py-16 px-6 lg:px-20 overflow-hidden flex items-center">

      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg-cover.png"
          alt="background"
          className="w-full h-full object-cover opacity-50"
        />
        {/* Subtle overlay to keep text readable but show image clearly */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* --- BACKGROUND GLOWS --- */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[600px] h-[600px] bg-green-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">

        {/* --- LEFT SIDE: CONTENT --- */}
        <div className="flex flex-col justify-start space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-fit px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] tracking-[0.2em] font-bold uppercase"
          >
            Start A Project
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold leading-[1.05] tracking-tight"
            >
              Tell us more about <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-green-400">
                your idea
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed font-light"
            >
              Let us know your goals, challenges, and vision, and we'll craft tailored strategies to achieve success.
            </motion.p>
          </div>

          {/* Trusted Clients */}
          <div className="space-y-6 pt-4">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Our Trusted Clients</p>
            {/* <div className="flex items-center">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?u=agency${i}`} 
                    className="w-14 h-14 rounded-full border-[6px] border-[#030712] object-cover"
                    alt="client"
                  />
                ))}
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-[10px] font-black border-[6px] border-[#030712] shadow-xl">
                  1.5K
                </div>
              </div>
            </div> */}

            <div className="flex items-center gap-6 pt-2">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Verified by</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-5 w-auto brightness-200" alt="google" />
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <span className="text-sm font-black">4.5 Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: FORM CARD --- */}
        <div className="relative">
          <div className="bg-[#0b1224]/60 backdrop-blur-3xl rounded-[50px] border border-white/5 p-8 md:p-14 shadow-2xl relative overflow-hidden">

            {/* Tab Switcher */}
            <div className="inline-flex p-1 bg-[#1a233a] border border-white/5 rounded-full mb-12">
              <button
                onClick={() => setTab("quote")}
                className={`px-10 py-3.5 rounded-full text-xs font-black tracking-wide transition-all duration-300 ${tab === "quote" ? "bg-white text-black shadow-xl" : "text-gray-400 hover:text-white"}`}
              >
                Request A Quote
              </button>
              <button
                onClick={() => setTab("call")}
                className={`px-10 py-3.5 rounded-full text-xs font-black tracking-wide transition-all duration-300 ${tab === "call" ? "bg-white text-black shadow-xl" : "text-gray-400 hover:text-white"}`}
              >
                Book A Call
              </button>
            </div>

            <AnimatePresence mode="wait">
              {tab === "quote" ? (
                isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center space-y-6"
                  >
                    <CheckCircle2 size={80} className="text-green-500" />
                    <h3 className="text-3xl font-bold">Message Sent!</h3>
                    <p className="text-gray-400">Thank you for reaching out. We'll get back to you shortly.</p>
                    <button onClick={() => setIsSubmitted(false)} className="text-blue-400 underline font-bold">Send another message</button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="quote-form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <h3 className="text-2xl font-bold">Contact Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input name="name" type="text" placeholder="Full Name *" className="bg-[#1a233a]/50 border border-white/10 rounded-full px-8 py-5 focus:border-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm" required />
                      <input name="email" type="email" placeholder="E-mail Id *" className="bg-[#1a233a]/50 border border-white/10 rounded-full px-8 py-5 focus:border-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm" required />

                      <div className="flex items-center bg-[#1a233a]/50 border border-white/10 rounded-full px-8 py-5 focus-within:border-blue-500/50 transition-all group">
                        <span className="text-xs font-bold text-gray-400 border-r border-white/10 pr-4 mr-4">IN +91</span>
                        <input name="phone" type="tel" placeholder="Phone Number" className="bg-transparent w-full outline-none text-sm placeholder:text-gray-500" />
                      </div>

                      <div className="relative">
                        <select name="budget" className="w-full bg-[#1a233a] border border-white/20 rounded-full px-8 py-5 outline-none text-white text-sm appearance-none cursor-pointer focus:border-blue-500 shadow-xl transition-all">
                          <option value="" className="bg-[#0b1224]">Budget Range *</option>
                          <option value="10k-25k" className="bg-[#0b1224]">₹10k - ₹25k</option>
                          <option value="25k-50k" className="bg-[#0b1224]">₹25k - ₹50k</option>
                          <option value="50k-1lakh" className="bg-[#0b1224]">₹50k - ₹1 Lakh</option>
                          <option value="1lakh-3lakh" className="bg-[#0b1224]">₹1 Lakh - ₹3 Lakh</option>
                          <option value="3lakh+" className="bg-[#0b1224]">₹3 Lakh+</option>
                        </select>
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                          <ArrowRight size={14} className="rotate-90" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Let us know how we can assist you. *</p>
                      <div className="flex flex-wrap gap-2.5">
                        {services.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => toggleService(s)}
                            className={`px-6 py-2.5 rounded-full border text-xs font-bold transition-all flex items-center gap-2 ${selectedServices.includes(s)
                              ? "bg-white text-black border-white"
                              : "border-white/10 bg-[#1a233a]/30 text-gray-400 hover:border-white/30"
                              }`}
                          >
                            {s} {selectedServices.includes(s) ? <X size={14} /> : <Plus size={14} />}
                          </button>
                        ))}
                      </div>
                    </div>

                    <textarea
                      name="message"
                      placeholder="Tell us about your project? *"
                      rows={4}
                      className="w-full bg-[#1a233a]/50 border border-white/10 rounded-[35px] px-8 py-6 focus:border-blue-500/50 outline-none transition-all placeholder:text-gray-500 text-sm resize-none"
                      required
                    />

                    {error && <p className="text-red-500 text-xs italic">{error}</p>}

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-white text-black px-12 py-5 rounded-full font-black text-sm flex items-center gap-4 hover:bg-blue-400 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl disabled:opacity-50"
                      >
                        {isSubmitting ? <><Loader2 className="animate-spin" /> Sending...</> : <>Send Message <ArrowRight size={20} /></>}
                      </button>
                    </div>
                  </motion.form>
                )
              ) : (
              <motion.div
  key="call-frame"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.95 }}
  className="w-full min-h-[400px] sm:min-h-[500px] flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 px-4 sm:px-6 py-8"
>
  {/* Icon */}
  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-full flex items-center justify-center animate-pulse border border-white/10 shadow-2xl">
    <Phone size={36} className="text-white sm:w-[48px] sm:h-[48px]" />
  </div>

  {/* Text */}
  <div className="space-y-3 sm:space-y-4">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-500">
      Book A Call
    </h3>

    <p className="text-gray-400 max-w-xs sm:max-w-sm mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
      Skip the forms and speak with our experts directly to discuss your project.
    </p>
  </div>

  {/* Call Button */}
  <a
    href="tel:+916264398990"
    className="group relative inline-flex items-center gap-2 sm:gap-4 bg-white text-black px-5 sm:px-6 py-4 sm:py-5 rounded-full font-bold sm:font-black text-base sm:text-lg md:text-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
  >
    <span className="whitespace-nowrap">+91 62643 98990</span>
    <ArrowRight
      className="group-hover:translate-x-2 transition-transform"
      size={20}
    />
  </a>

  {/* Availability */}
  <p className="text-gray-500 text-[10px] sm:text-xs tracking-widest uppercase text-center">
    Available Mon - Sat | 10 AM - 7 PM
  </p>

  {/* Calendly (commented same as yours) */}
  {/*
  <iframe
    src="https://calendly.com/YOUR_CALENDLY_LINK"
    width="100%"
    height="550"
    frameBorder="0"
    className="rounded-3xl invert brightness-90 hue-rotate-[190deg]"
  ></iframe>
  */}
</motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;