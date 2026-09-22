"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock, CheckCircle2 } from "lucide-react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    budget: "",
    bottleneck: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally handle form submission here
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#F8F5EA] relative overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[45%]"
          >
            <h2 className="font-playfair text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.1] md: text-[#18221B] mb-6">
              Let's Talk <span className="text-[#5B8266]">Growth.</span>
            </h2>
            <p className="text-lg text-[#5F675F] mb-8 font-medium leading-relaxed">
              Fill out the form to request your free growth audit. We'll review your current marketing and show you exactly where you can improve.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-[#5B8266]" size={20} />
                <span className="text-[#18221B] font-medium">100% Free Audit</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-[#5B8266]" size={20} />
                <span className="text-[#18221B] font-medium">No Sales Pressure</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-[#5B8266]" size={20} />
                <span className="text-[#18221B] font-medium">Actionable Strategies</span>
              </li>
            </ul>

            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#DDDCCF]">
              <div className="w-12 h-12 rounded-full bg-[#5B8266]/10 flex items-center justify-center shrink-0">
                <Lock className="text-[#5B8266]" size={20} />
              </div>
              <p className="text-sm text-[#5F675F]">
                Your information is 100% secure and will never be shared with third parties.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-[55%] w-full"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-[#DDDCCF]">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#5B8266]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-[#5B8266]" size={40} />
                  </div>
                  <h3 className="font-playfair text-4xl font-bold text-[#18221B] mb-4">Request Received!</h3>
                  <p className="text-[#5F675F] text-lg">We'll review your details and get back to you shortly to schedule your audit.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-[#18221B]">Full Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#DDDCCF] bg-[#F8F5EA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8266] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-[#18221B]">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#DDDCCF] bg-[#F8F5EA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8266] transition-all"
                        placeholder="john@brand.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-[#18221B]">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#DDDCCF] bg-[#F8F5EA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8266] transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-[#18221B]">Website URL</label>
                      <input 
                        type="url" 
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#DDDCCF] bg-[#F8F5EA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8266] transition-all"
                        placeholder="https://yourbrand.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-[#18221B]">Monthly Marketing Budget *</label>
                    <div className="relative">
                      <select 
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#DDDCCF] bg-[#F8F5EA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8266] transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select your budget</option>
                        <option value="Under 1L">Under ₹1 Lakh</option>
                        <option value="1L - 3L">₹1 Lakh - ₹3 Lakhs</option>
                        <option value="3L - 5L">₹3 Lakhs - ₹5 Lakhs</option>
                        <option value="5L+">₹5 Lakhs +</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#5F675F]">
                        ▼
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-[#18221B]">What is your biggest growth bottleneck? *</label>
                    <textarea 
                      name="bottleneck"
                      required
                      value={formData.bottleneck}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 rounded-xl border border-[#DDDCCF] bg-[#F8F5EA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8266] transition-all resize-none"
                      placeholder="E.g., High CAC, getting traffic but no sales, etc."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#5B8266] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[#4A6D55] transition-all flex items-center justify-center gap-2 group shadow-xl"
                  >
                    REQUEST MY AUDIT
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
