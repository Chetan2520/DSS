"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Rocket, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ProfessionalLayeredStack() {
  const containerRef = useRef(null);
  const visionCard = useRef(null);
  const missionCard = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": function () {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=200%",
              pin: true,
              scrub: 1,
            },
          });

          tl.to(visionCard.current, {
            y: "-120%",
            opacity: 0,
            scale: 0.96,
            duration: 1.2,
          }).fromTo(
            missionCard.current,
            { y: "120%", opacity: 0, scale: 0.95 },
            { y: "0%", opacity: 1, scale: 1, duration: 1.2 },
            "-=0.8"
          );
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#050505] text-white overflow-hidden lg:h-screen flex items-center"
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(#ffffff22 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#0078f0]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-[#ff9a20]/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* LEFT */}
          <div className="w-full lg:w-[45%] space-y-6">
            
            <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500">
              Corporate Identity
            </span>

            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Crafting <br />
              <span className="text-[#0078f0]">Impact.</span>
            </h2>

            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-sm">
              Helping startups and businesses grow with strong branding,
              performance marketing, and scalable digital solutions.
            </p>

            <div className="flex items-center gap-10 pt-2">
              <div>
                <h4 className="text-xl font-bold">4K+</h4>
                <p className="text-[10px] text-zinc-500 uppercase">
                  Projects
                </p>
              </div>

              <div className="h-6 w-[1px] bg-white/10" />

              <div>
                <h4 className="text-xl font-bold">98%</h4>
                <p className="text-[10px] text-zinc-500 uppercase">
                  Satisfaction
                </p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-[#0078f0]/30 to-transparent" />
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-[55%] relative h-[480px] flex items-center justify-center">
            
            {/* VISION */}
            <div
              ref={visionCard}
              className="absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-8 bg-[#0a0a0a]/80 backdrop-blur-lg border border-white/10 rounded-3xl"
            >
              <span className="absolute top-4 right-6 text-white/[0.03] text-[6rem] font-bold">
                01
              </span>

              <div>
                <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl mb-6">
                  <Target className="text-[#0078f0] w-5 h-5" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  Our Vision
                </h3>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed space-y-4">
  <span className="block">
    Our vision is to become a leading digital marketing company in India that empowers startups, small businesses, and growing brands to succeed in the digital world.
  </span>

  <span className="block">
    We aim to provide <span className="text-white font-medium">affordable digital marketing services</span>, 
    <span className="text-white font-medium"> SEO solutions</span>, and 
    <span className="text-white font-medium"> branding strategies</span> that help businesses overcome visibility challenges and grow confidently.
  </span>

  <span className="block">
    Our goal is to support <span className="text-white font-medium">Digital India</span> by helping businesses build a strong online presence, turn ideas into brands, and achieve long-term success.
  </span>
</p>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase">
                <Globe className="w-3 h-3 text-[#0078f0]" />
                Digital Growth Focus
              </div>
            </div>

            {/* MISSION */}
            <div
              ref={missionCard}
              className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-8 bg-[#080808]/80 backdrop-blur-lg border border-white/5 rounded-3xl opacity-0"
            >
              <span className="absolute top-4 right-6 text-white/[0.02] text-[6rem] font-bold">
                02
              </span>

              <div>
                <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl mb-6">
                  <Rocket className="text-[#ff9a20] w-5 h-5" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  Our Mission
                </h3>

               <p className="text-zinc-400 text-sm md:text-base leading-relaxed space-y-4">
  <span className="block">
    Our mission is to deliver <span className="text-[#ff9a20] font-medium">result-driven digital marketing solutions</span> that create real impact for businesses across industries including e-commerce, healthcare, real estate, education, and more.
  </span>

  <span className="block">
    We focus on helping startups and entrepreneurs with 
    <span className="text-white font-medium"> cost-effective SEO</span>, 
    <span className="text-white font-medium"> PPC</span>, 
    <span className="text-white font-medium"> website development</span>, and 
    <span className="text-white font-medium"> branding services</span> so they can grow faster and compete effectively in the market.
  </span>

  <span className="block">
    We are committed to empowering Indian businesses, supporting the startup ecosystem, and helping brands achieve sustainable digital growth.
  </span>
</p>
              </div>

              <div className="flex gap-2 flex-wrap pt-4">
                {["E-commerce", "Healthcare", "Real Estate"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-[9px] bg-white/5 border border-white/10 rounded-full text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}