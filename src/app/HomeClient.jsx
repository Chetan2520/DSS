"use client";
import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SuccessOrbit from "@/components/SuccessOrbit";
import DiscussProject from "@/components/DiscussProject";

// Dynamic Imports
const HeroBg = dynamic(() => import("@/components/HeroBg"), {
  ssr: false,
});
const ModernServices = dynamic(() => import("@/components/ModernServices"), {
  ssr: false,
});
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), {
  ssr: false,
});
const WitnessedGrowth = dynamic(() => import("@/components/WitnessedGrowth"), {
  ssr: false,
});
const Quotes = dynamic(() => import("@/components/Quotes"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const TeamSection = dynamic(() => import("@/components/TeamSection"), {
  ssr: false,
});
const AIAgentsSection = dynamic(() => import("@/components/AIAgentsSection"), {
  ssr: false,
});
const IndustrySectors = dynamic(() => import("@/components/IndustrySectors"), {
  ssr: false,
});


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
