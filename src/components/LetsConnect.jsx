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

  

        
        <DiscussProject />
 {/* DETAILS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 mt-20">
          <div className="flex flex-col items-center text-center space-y-4">
            <Mail className="text-orange-500" size={36} />
            <div>
              <h4 className="text-zinc-500 text-[10px] tracking-[0.2em]">Email Us</h4>
              <p className="text-lg font-medium">Info@digitalsuccesssolutions.in</p>
              <p className="text-lg font-medium">business@digitalsuccesssolutions.in</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4 border-x border-white/5 px-8">
            <MapPin className="text-orange-500" size={36} />
            <div>
              <h4 className="text-zinc-500 text-[10px] tracking-[0.2em]">Visit Us</h4>
              <p className="text-lg font-medium">Scheme No 53, Vijay Nagar, Indore, MP – 452010</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <Phone className="text-orange-500" size={36} />
            <div>
              <h4 className="text-zinc-500 text-[10px] tracking-[0.2em]">Contact No</h4>
              <p className="text-lg font-medium">+91 62643 98990</p>
              <p className="text-lg font-medium">+91 87189 80114</p>
            </div>
          </div>
        </div>
      <FAQ />
      
    </div>
  );
};

export default LetsConnect;
