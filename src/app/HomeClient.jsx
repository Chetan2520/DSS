"use client";
import React, { Suspense, useEffect, useState } from "react";
import SuccessOrbit from "@/components/SuccessOrbit";
import DiscussProject from "@/components/DiscussProject";
import HeroBg from "@/components/HeroBg";
import ModernServices from "@/components/ModernServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import WitnessedGrowth from "@/components/WitnessedGrowth";
import Quotes from "@/components/Quotes";
import FAQ from "@/components/FAQ";
import AIAgentsSection from "@/components/AIAgentsSection";
import IndustrySectors from "@/components/IndustrySectors";


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
