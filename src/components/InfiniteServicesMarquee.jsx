"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Palette,
  Code,
  Figma,
  Megaphone,
  Sparkles,
  TrendingUp,
  ShoppingBag,
  Smartphone,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const InfiniteServicesMarquee = () => {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);
  const titleRef = useRef(null);

  const services = [
    {
      title: "Brand Identity",
      icon: <Palette size={48} />,
      color: "from-blue-600/20 to-blue-400/20",
      textGlow: "group-hover:text-blue-400",
    },
    {
      title: "Web Development",
      icon: <Code size={48} />,
      color: "from-orange-600/20 to-orange-400/20",
      textGlow: "group-hover:text-orange-400",
    },
    {
      title: "UI/UX Design",
      icon: <Figma size={48} />,
      color: "from-blue-600/20 to-blue-400/20",
      textGlow: "group-hover:text-blue-400",
    },
    {
      title: "Digital Marketing",
      icon: <Megaphone size={48} />,
      color: "from-orange-600/20 to-orange-400/20",
      textGlow: "group-hover:text-orange-400",
    },
    {
      title: "Motion & 3D",
      icon: <Sparkles size={48} />,
      color: "from-blue-600/20 to-blue-400/20",
      textGlow: "group-hover:text-blue-400",
    },
    {
      title: "SEO & Growth",
      icon: <TrendingUp size={48} />,
      color: "from-orange-600/20 to-orange-400/20",
      textGlow: "group-hover:text-orange-400",
    },
    {
      title: "E-Commerce",
      icon: <ShoppingBag size={48} />,
      color: "from-blue-600/20 to-blue-400/20",
      textGlow: "group-hover:text-blue-400",
    },
    {
      title: "App Development",
      icon: <Smartphone size={48} />,
      color: "from-orange-600/20 to-orange-400/20",
      textGlow: "group-hover:text-orange-400",
    },
  ];

  useEffect(() => {
    if (!marqueeRef.current || !sectionRef.current) return;

    const marquee = marqueeRef.current;

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    );

    // Horizontal Scroll Loop
    const totalWidth = marquee.scrollWidth / 2;

    gsap.to(marquee, {
      x: `-50%`,
      ease: "none",
      duration: 30,
      repeat: -1,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-40 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-orange-500/20 to-transparent" />

      {/* Header */}
      <div className="container mx-auto px-6 mb-32 text-center">
        <h2
          ref={titleRef}
          className="text-6xl md:text-8xl   tracking-tighter leading-none  "
        >
          <span className="bg-linear-to-b from-white via-white to-zinc-800 bg-clip-text text-transparent">
            Services That <br />
          </span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-orange-500 italic">
            Win Markets
          </span>
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex whitespace-nowrap group-hover:pause select-none">
        <div ref={marqueeRef} className="flex gap-12 pr-12">
          {[...services, ...services].map((service, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 w-80 h-80 rounded-[3rem] bg-zinc-950 border border-white/5 overflow-hidden flex flex-col justify-between p-10 hover:border-blue-500/30 transition-all duration-700"
            >
              {/* Internal Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-linear-to-br ${service.color} -z-10 blur-2xl`}
              />

              <div className="text-white/20 group-hover:text-white transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-3 origin-top-left">
                {service.icon}
              </div>

              <div className="relative z-10">
                <h3
                  className={`text-2xl   text-white   tracking-tighter transition-colors duration-500 ${service.textGlow}`}
                >
                  {service.title}
                </h3>
                <div className="w-12 h-1 bg-white/5 mt-4 group-hover:w-full group-hover:bg-blue-500/50 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action CTA */}
      <div className="mt-32 text-center relative z-20">
        <Link href="/services">
          <button className="px-10 py-4 bg-zinc-900 hover:bg-white text-white hover:text-black     text-xs tracking-widest rounded-full transition-all border border-white/10">
            View Full Strategy Grid
          </button>
        </Link>
      </div>
    </section>
  );
};

export default InfiniteServicesMarquee;
