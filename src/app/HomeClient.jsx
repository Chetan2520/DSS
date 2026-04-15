"use client";
import React, { Suspense, useEffect, useState } from "react";

// Normal Imports
import PremiumHero from "@/components/PremiumHero";
import ModernTestimonials from "@/components/ModernTestimonials";
import PortfolioShowcasenew from "@/components/PortfolioShowcasenew";
import DssPhilosophy from "@/components/DssPhilosophy";
import HeroBg from "@/components/HeroBg";
import ProjectMarquee from "@/components/ProjectMarquee";
import TechnicalExcellence from "@/components/TechnicalExcellence";
import Feedback from "@/components/Feedback";
import OrbitingTestimonials from "@/components/OrbitingTestimonials";

// Lazy Imports
import dynamic from "next/dynamic";
import AgencyWelcome from "@/components/AgencyWelcome";

const Loader = () => (
  <div className="h-screen w-full bg-[#050505] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
  </div>
);

// Dynamic imports replace React.lazy in Next.js App Router for client components
const ModernServices = dynamic(() => import("@/components/ModernServices"), {
  ssr: false,
  loading: () => <Loader />,
});
const AchievementTimeline = dynamic(() => import("@/components/Achivements"), {
  ssr: false,
  loading: () => <Loader />,
});
const Clients = dynamic(() => import("@/components/Clients"), {
  ssr: false,
  loading: () => <Loader />,
});
const NewVisionMission = dynamic(
  () => import("@/components/NewVisionMission"),
  { ssr: false, loading: () => <Loader /> },
);
const UGCTestimonials = dynamic(() => import("@/components/UGCTestimonials"), {
  ssr: false,
  loading: () => <Loader />,
});
const HowWeDeliver = dynamic(() => import("@/components/HowWeDeliver"), {
  ssr: false,
  loading: () => <Loader />,
});


export default function HomeClient() {
  const [isReady, setIsReady] = useState(false);

  /* ✅ Wait till DOM fully ready */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  /* ✅ Perfect hash scroll */
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash && isReady) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [isReady]);

  /* ✅ Stop white flash while lazy components load */
  if (!isReady) {
    return <Loader />;
  }

  return (
    <div className="w-full overflow-hidden bg-[#050505] text-white">
      {/* 1️⃣ Hero */}
     
      <section id="hero">
        <HeroBg />
      
      </section>
        <AgencyWelcome /> 
      {/* <Feedback /> */}

      <Suspense fallback={<Loader />}>
        {/* 3️⃣ Services */}
        <section id="services">
          <ModernServices />
          <TechnicalExcellence />
        </section>

        {/* 4️⃣ Dss Philosophy */}
        <section id="dssphilosophy">
          <DssPhilosophy />
        </section>

    
     

      

        {/* 8️⃣ Vision & Mission */}
        <section id="visionmission">
          <NewVisionMission />
        </section>

        {/* 9️⃣ Clients */}
        <section id="clients">
          <Clients />
        </section>
  {/* 7️⃣ Portfolio */}
        <section id="portfolio">
          <ProjectMarquee />
        </section>

        {/* <OrbitingTestimonials /> */}
      </Suspense>
    </div>
  );
}
