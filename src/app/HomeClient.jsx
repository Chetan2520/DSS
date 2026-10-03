"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import HeroBg from "@/components/HeroBg";
import TrustBar from "@/components/TrustBar";

const ClientLogoMarquee = dynamic(() => import("@/components/ClientLogoMarquee"));
const ModernServices = dynamic(() => import("@/components/ModernServices"));
const AIAgentsSection = dynamic(() => import("@/components/AIAgentsSection"));
const SuccessOrbit = dynamic(() => import("@/components/SuccessOrbit"));
const IndustrySectors = dynamic(() => import("@/components/IndustrySectors"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const OurProcess = dynamic(() => import("@/components/OurProcess"));
const InstagramReels = dynamic(() => import("@/components/InstagramReels"));
const DiscussProject = dynamic(() => import("@/components/DiscussProject"));
const FAQ = dynamic(() => import("@/components/FAQ"));

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

  return (
    <div className="bg-[#000000] text-white">
      {/* Hero */}
      <HeroBg />

      {/* Trust Partners */}
      <TrustBar />

      <section id="services">
        {/* Core Services */}
        <ModernServices />

        {/* AI Offering */}
        <AIAgentsSection />
      </section>

      {/* Trust Clients */}
      <ClientLogoMarquee />

      {/* Results / Social Proof */}
      {/* <SuccessOrbit /> */}

      {/* Industry Expertise */}
      <IndustrySectors />

      {/* Why Trust Us */}
      <WhyChooseUs />

      {/* Our Workflow */}
      {/* <OurProcess /> */}
      
      {/* Instagram Buzz */}
      {/* <InstagramReels /> */}

      {/* Objection Handling */}
      <FAQ />

      {/* Final CTA */}
      <DiscussProject />
    </div>
  );
}