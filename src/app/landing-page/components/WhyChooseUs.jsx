"use client";
import { motion } from "framer-motion";
import { Leaf, Users, TrendingUp, ShieldCheck, User, Phone, Globe, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function WhyChooseUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    website: "",
  });

  const features = [
    {
      icon: Leaf,
      title: "Industry Understanding",
      description: "We understand regulations, compliance and customer behavior in the wellness space."
    },
    {
      icon: Users,
      title: "End-to-End Solutions",
      description: "From strategy to ads to website to content - everything under one roof."
    },
    {
      icon: TrendingUp,
      title: "Result-Oriented",
      description: "Focus on real business outcomes - leads, sales and long-term growth."
    },
    {
      icon: ShieldCheck,
      title: "Transparent Reporting",
      description: "Clear reports, honest communication and data-driven decisions."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Add form submission logic here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative py-20 lg:py-28 bg-[#F8F9F5] overflow-hidden">
      {/* Optional decorative leaves if available in public folder, simulating the image background */}
      {/* <img src="/images/leaf-top-left.png" className="absolute top-0 left-0 w-32 opacity-50" alt="" /> */}
      {/* <img src="/images/leaf-bottom-right.png" className="absolute bottom-0 right-0 w-48 opacity-50" alt="" /> */}

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Features */}
          <div className="lg:w-3/5 w-full">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#18221B] mb-12"
            >
              Why Ayurvedic Brands Choose DSS?
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center sm:items-start sm:text-left"
                >
                  <div className="w-14 h-14 bg-[#F0F5F1] text-[#4A785A] rounded-full flex items-center justify-center mb-6">
                    <feature.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#18221B] mb-3">{feature.title}</h3>
                  <p className="text-[#5F675F] text-[15px] leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Form Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/5 w-full w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="bg-[#213a29] rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
              {/* Form card background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
              
              <div className="relative z-10">
                <div className="inline-block bg-[#FF6900] text-white text-xs font-semibold uppercase tracking-wider py-1.5 px-3 rounded-full mb-6">
                  FREE GROWTH AUDIT
                </div>
                
                <h3 className="text-white text-3xl font-semibold mb-3 font-playfair">
                  Get Your Free<br/>Marketing Audit
                </h3>
                
                <p className="text-white/80 text-sm mb-8">
                  Find new growth opportunities for your Ayurvedic brand.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name*" 
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-white border-0 rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#FF6900] outline-none transition-all shadow-sm"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone size={18} className="text-gray-400" />
                    </div>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="WhatsApp Number*" 
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-white border-0 rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#FF6900] outline-none transition-all shadow-sm"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Globe size={18} className="text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="Your Website / Brand Name*" 
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-white border-0 rounded-xl text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#FF6900] outline-none transition-all shadow-sm"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#FF6900] hover:bg-[#e55e00] text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 group mt-2 shadow-lg shadow-[#FF6900]/20"
                  >
                    Get Free Audit Now
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <div className="mt-6 flex items-center justify-center gap-2 text-white/60 text-xs">
                  <Lock size={12} />
                  <span>Your information is 100% secure. No spam.</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
