"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Send,
  CheckCircle2,
} from "lucide-react";
import gsap from "gsap";
import FAQ from "@/components/FAQ";
import GrowthBreakthrough from "@/components/GrowthBreakthrough";
import DiscussProject from "./DiscussProject";

const LetsConnect = () => {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  const [selectedServices, setSelectedServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const servicesList = [
    "Website Development",
    "App Development",
    "Performance Marketing",
    "Social Media Marketing",
    "SEO",
    "Branding",
    "UI/UX Design",
  ];

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setIsSubmitted(false);

    const formData = new FormData(e.target);
    formData.append("services", selectedServices.join(", ")); // Add selected services

    try {
      const response = await fetch(
        "https://digitalsuccesssolutions.in/php/send.php",
        {
          method: "POST",
          body: formData,
        },
      );

      const result = await response.text();

      if (response.ok && result.trim() === "success") {
        setIsSubmitted(true);
        e.target.reset(); // Clear form
        setSelectedServices([]); // Clear selections
      } else {
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // GSAP Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Text Animation
      gsap.from(".hero-text", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5,
      });

      if (containerRef.current) {
        gsap.from(containerRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      }
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 },
        );
      }
      if (rightColRef.current && rightColRef.current.children) {
        gsap.fromTo(
          rightColRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.4,
          },
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen">
      {/* FULL WIDTH VIDEO HERO SECTION */}
      <section className="relative w-full h-[80vh] md:h-screen overflow-hidden flex items-start">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/contact.mp4"
              type="video/mp4"
            />
          </video>
          {/* Subtle Overlays */}
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-8xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center text-center pt-24 md:pt-32">
          <div className="max-w-4xl space-y-8 flex flex-col items-center">
            <div className="hero-text overflow-hidden">
              <h1 className="text-6xl md:text-8xl flex flex-wrap justify-center gap-4 tracking-tighter leading-[0.85]  ">
                <span className="bg-linear-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent block">
                  Get in
                </span>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-orange-300 to-orange-600">
                  Touch
                </span>
              </h1>
            </div>
            <div className="hero-text">
              <p className="text-zinc-400 text-sm md:text-lg max-w-2xl leading-relaxed font-medium">
                Have a project in mind? We'd love to hear about it. Let's build something great together. Our team is ready to scale your brand with cutting-edge digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-8xl mx-auto py-24 px-6 lg:px-12">
        {/* MAIN GRID: MAP & FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
          {/* LEFT COLUMN: MAP */}
          <div ref={leftColRef} className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[400px] flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="/world.png"
                alt="World Map"
                className="w-full h-full object-contain grayscale opacity-60"
              />
              <div 
                className="absolute top-[48%] left-[75%] -translate-x-1/2 -translate-y-1/2"
                style={{ zIndex: 5 }}
              >
                <div className="absolute inset-0 w-7 h-7 bg-[#0078f0]/40 rounded-full animate-ping" />
                <div className="relative w-2 h-2 bg-[#0078f0] rounded-full shadow-[0_0_20px_#0078f0] z-10" />
                <div className="absolute bottom-full left-1/2 w-px h-16 bg-gradient-to-t from-[#0078f0] to-transparent origin-bottom -translate-x-1/2" />
                <div className="absolute bottom-[calc(100%+70px)] left-1/2 -translate-x-1/2 bg-black border border-white/60 px-4 py-2 rounded-3xl backdrop-blur-md shadow-2xl whitespace-nowrap">
                  <span className="text-white text-xs tracking-wider">We are here</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: THE FORM */}
          <div ref={rightColRef} className="bg-transparent relative overflow-hidden">
            {isSubmitted && (
              <div className="absolute inset-0 bg-[#0a0a0a] z-20 flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-bold mb-2 text-white">Message Received!</h2>
                <p className="text-zinc-400 mb-8">We'll reach out to you shortly.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <input type="text" name="honeypot" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  required name="full_name" type="text" placeholder="Your Name"
                  className="w-full border border-white/50 rounded-full px-8 py-5 text-white focus:outline-none bg-transparent"
                />
                <input
                  required name="email" type="email" placeholder="Your Email"
                  className="w-full border border-white/50 rounded-full px-8 py-5 text-white focus:outline-none bg-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <span className="absolute left-8 top-1/2 -translate-y-1/2 text-zinc-500 text-sm font-bold">+91</span>
                  <input
                    required name="phone" type="tel" placeholder="98765 43210"
                    className="w-full border border-white/50 rounded-full pl-20 pr-8 py-5 text-white focus:outline-none bg-transparent"
                  />
                </div>
                <div className="relative">
                  <select name="budget" className="w-full border border-white/50 rounded-full px-8 py-5 text-white appearance-none focus:outline-none cursor-pointer bg-transparent">
                    <option className="bg-black">₹10k - ₹25k</option>
                    <option className="bg-black">₹25k - ₹50k</option>
                    <option className="bg-black">₹50k - ₹1 Lakh</option>
                    <option className="bg-black">₹1Lakh - ₹3 Lakh</option>
                    <option className="bg-black">₹3Lakh+</option>
                  </select>
                  <ChevronDown className="absolute right-8 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={16} />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] ml-6">I'm interested in...</label>
                <div className="flex flex-wrap gap-2">
                  {servicesList.map((service) => (
                    <button
                      type="button" key={service} onClick={() => toggleService(service)}
                      className={`px-4 py-2 rounded-full text-[10px] font-bold border transition-all duration-300 ${selectedServices.includes(service) ? "bg-white text-black border-white" : "bg-transparent text-zinc-500 border-white/10 hover:border-white/30"}`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                name="project_details" rows="4" placeholder="Tell us about your project..."
                className="w-full border border-white/50 rounded-4xl px-8 py-6 text-white focus:outline-none resize-none bg-transparent"
              />

              <button
                type="submit" disabled={isSubmitting}
                className="w-full group bg-linear-to-r from-white via-zinc-200 to-zinc-400 text-black font-bold tracking-[0.2em] cursor-pointer py-4 rounded-full transition-all active:scale-[0.99] disabled:opacity-50"
              >
                {isSubmitting ? "SENDING..." : "GET FREE QUOTE"}
              </button>
            </form>
          </div>
        </div>

        {/* DETAILS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 mt-20">
          <div className="flex flex-col items-center text-center space-y-4">
            <Mail className="text-orange-500" size={36} />
            <div>
              <h4 className="text-zinc-500 text-[10px] tracking-[0.2em]">Email Us</h4>
              <p className="text-lg font-medium">business@digitalsuccesssolutions.in</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4 border-x border-white/5 px-8">
            <MapPin className="text-orange-500" size={36} />
            <div>
              <h4 className="text-zinc-500 text-[10px] tracking-[0.2em]">Visit Us</h4>
              <p className="text-lg font-medium">Scheme No 53, Vijay Nagar, Indore, MP</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <Phone className="text-orange-500" size={36} />
            <div>
              <h4 className="text-zinc-500 text-[10px] tracking-[0.2em]">Contact No</h4>
              <p className="text-lg font-medium">+91 62643 98990</p>
            </div>
          </div>
        </div>
      </div>


        
        <DiscussProject />

      <FAQ />
      
    </div>
  );
};

export default LetsConnect;
