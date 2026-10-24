import { Outfit } from "next/font/google";

const outfitMain = Outfit({ subsets: ["latin"], variable: "--font-inter" });
const outfitHeading = Outfit({ subsets: ["latin"], variable: "--font-playfair" });

export default function LandingPageLayout({ children }) {
  return (
    <div className={`${outfitMain.variable} ${outfitHeading.variable} font-inter bg-[#F8F5EA] text-[#18221B] min-h-screen overflow-clip`}>
      {children}
    </div>
  );
}
