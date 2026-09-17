import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Approach from "./components/Approach";
import Challenge from "./components/Challenge";
import Process from "./components/Process";
import ProductGrowth from "./components/ProductGrowth";
import ClinicGrowth from "./components/ClinicGrowth";
import GrowthEngine from "./components/GrowthEngine";
import ReelsShowcase from "./components/ReelsShowcase";
import ClientBrandsReels from "./components/ClientBrandsReels";

import Results from "./components/Results";
import AuthorityStats from "./components/AuthorityStats";
import Portfolio from "./components/Portfolio";
import WhyDss from "./components/WhyDss";
import Partnership from "./components/Partnership";
import FinalCTA from "./components/FinalCTA";

export const metadata = {
  title: "Ayurvedic Digital Marketing Services",
  description: "We help Ayurvedic brands reach the right people, build trust, and grow sustainably.",
};

export default function LandingPage() {
  return (
    <main className="font-inter">
      {/* 1. Hook & Immediate Trust */}
      <Hero />
      <TrustStrip />
      
      {/* 2. High Engagement Video Proof (Moved up for CRO) */}
      <ReelsShowcase />
      <ClientBrandsReels />

      {/* 3. Problem Identification & Empathy */}
      <Challenge />
      <Approach />
      
      {/* 4. Target Audience / Avatars */}
      <ProductGrowth />
      <ClinicGrowth />
      
      {/* 5. Hard Visual Proof & Stats */}
      <Results />
      <Portfolio />
      <AuthorityStats />
      
      {/* 6. How It Works / Mechanics */}
      <GrowthEngine />
      <Process />

      {/* 7. The Close */}
      <WhyDss />
      <Partnership />
      <FinalCTA />
    </main>
  );
}
