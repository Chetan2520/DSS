import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Challenge from "./components/Challenge";
import CostOfProblem from "./components/CostOfProblem";

import Specialization from "./components/Specialization";
import CorePromise from "./components/CorePromise";
import GrowthEngine from "./components/GrowthEngine";
import ServicesList from "./components/ServicesList";

import AudienceSpecific from "./components/AudienceSpecific";
import Portfolio from "./components/Portfolio";
import BeforeAfter from "./components/BeforeAfter";

import ReelsShowcase from "./components/ReelsShowcase";
import ClientBrandsReels from "./components/ClientBrandsReels";

import Process from "./components/Process";
import WhoThisIsFor from "./components/WhoThisIsFor";
import Testimonials from "./components/Testimonials";
import AuthorityStats from "./components/AuthorityStats";

import GrowthAuditOffer from "./components/GrowthAuditOffer";
import FAQ from "./components/FAQ";
import LeadForm from "./components/LeadForm";

export const metadata = {
  title: "Digital Growth Partner for Ayurvedic & Wellness Brands | DSS",
  description: "We build the system that turns marketing into growth for Ayurvedic and Herbal brands.",
};

export default function LandingPage() {
  return (
    <main className="font-inter">
      {/* PHASE 1: Hook & Problem Recognition */}
      <Hero />
      <TrustStrip />

      {/* High Engagement Video Proof */}
      <ReelsShowcase />
      <ClientBrandsReels />

      <Challenge />
      <CostOfProblem />

      {/* PHASE 2: Specialization & Solution */}
      <Specialization />
      <CorePromise />
      <GrowthEngine />
      <ServicesList />

      {/* PHASE 3: Audience Segmentation & Proof */}
      <AudienceSpecific />
      <Portfolio />
      <BeforeAfter />

      {/* PHASE 4: Process, Transparency, and Qualification */}
      <Process />
      <WhoThisIsFor />
      <Testimonials />
      <AuthorityStats />

      {/* PHASE 5: The Offer & Conversion */}
      <GrowthAuditOffer />
      <FAQ />
      <LeadForm />
    </main>
  );
}
