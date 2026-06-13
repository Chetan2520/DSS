"use client";
import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import HeroBg from "@/components/HeroBg";

const SuccessOrbit = dynamic(() => import("@/components/SuccessOrbit"));
const DiscussProject = dynamic(() => import("@/components/DiscussProject"));
const ModernServices = dynamic(() => import("@/components/ModernServices"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const WitnessedGrowth = dynamic(() => import("@/components/WitnessedGrowth"));
const Quotes = dynamic(() => import("@/components/Quotes"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const AIAgentsSection = dynamic(() => import("@/components/AIAgentsSection"));
const IndustrySectors = dynamic(() => import("@/components/IndustrySectors"));


export default function HomeClient() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash && isReady) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 200);
      }
    }
  }, [isReady]);

  // Removed loader that blocked SEO for static export

  return (
    <div className="bg-[#050505] text-white">
      <HeroBg />

      <section id="services">
        <ModernServices />
        <IndustrySectors />
        {/* <TeamSection /> */}
        <AIAgentsSection />
        <WhyChooseUs />
        <WitnessedGrowth />
      </section>

      <SuccessOrbit />

      <DiscussProject />
      <FAQ />
    </div>
  );
}
