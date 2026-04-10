"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Mohit Sharma",
    role: "Marketing Director",
    company: "Amla Pharma",
    quote:
      "Absolutely incredible experience. The density of their technical and strategic support set this agency apart from the rest. Our ROI has scaled by 40%.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=mohit",
  },
  {
    name: "Anjali Gupta",
    role: "Operations Head",
    company: "OYO",
    quote:
      "From search visibility to advanced performance architectures, the depth of content is unmatched. We scaled our regional presence in weeks.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=anjali",
  },
  {
    name: "Raghav Singh",
    role: "Product Manager",
    company: "Nexa",
    quote:
      "The networking opportunities and strategic audits were worth it. Being surrounded by such talented digital experts pushed my brand to the next level.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=raghav",
  },
  {
    name: "Vikram Mehta",
    role: "CEO",
    company: "Starlight Solar",
    quote:
      "They don't just deliver ads; they deliver sustainable growth. Their SEO approach is data-driven and actually translates to sales.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=vikram",
  },
  {
    name: "Sanya Kapoor",
    role: "Founder",
    company: "Vanya Resort",
    quote:
      "Their social media presence building is top-notch. Authentic storytelling that actually engages our luxury audience effectively.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sanya",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="shrink-0 w-[400px] bg-zinc-900/50 border border-white/5 p-8 rounded-3xl backdrop-blur-xl group hover:border-[#0078f0]/30 transition-all duration-500">
    <div className="flex gap-1 mb-6">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} size={16} fill="#ffb400" className="text-[#ffb400]" />
      ))}
    </div>
    <p className="text-zinc-300 text-lg leading-relaxed mb-8 italic">
      "{testimonial.quote}"
    </p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 relative">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          fill
          sizes="48px"
          className="object-cover"
        />
      </div>
      <div>
        <h4 className="text-white font-bold tracking-tight">
          {testimonial.name}
        </h4>
        <p className="text-zinc-500 text-xs   tracking-widest">
          {testimonial.role} @ {testimonial.company}
        </p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-black overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0078f0]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="px-4 py-1.5 bg-[#0078f0]/10 border border-[#0078f0]/20 rounded-full w-fit flex items-center gap-2">
            <div className="w-2 h-2 bg-[#0078f0] rounded-full animate-pulse" />
            <span className="text-[10px] font-bold   tracking-widest text-[#0078f0]">
              Client Success
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-white">
            Hear from our <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-blue-400 to-blue-600 italic">
              Global Clients
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-sm leading-relaxed font-medium">
            Discover how our specialized strategies transformed brands and
            helped them dominate their digital niche.
          </p>
        </div>
      </div>

      {/* Testimonials Marquee */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 whitespace-nowrap"
        >
          {/* Double the array for seamless looping */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </motion.div>
      </div>

      {/* Bottom Row Marquee (Moving opposite direction) */}
      <div className="relative flex overflow-hidden mt-6 group">
        <motion.div
          animate={{ x: [-2000, 0] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 whitespace-nowrap"
        >
          {[...testimonials, ...testimonials].reverse().map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
