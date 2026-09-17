import { Leaf, Users, BarChart3, Headset } from "lucide-react";

export default function TrustStrip() {
  const stats = [
    { value: "45+", label: "Ayurveda & Herbal Brands" },
    { value: "6+ Years", label: "Niche Experience" },
    { value: "₹10Cr+", label: "Ad Spend Managed" },
    { value: "30+", label: "In-House Experts" }
  ];

  return (
    <div className="bg-[#fdf8ed] border-b border-[#DDDCCF] py-12 relative z-20">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-[#DDDCCF]">
          {stats.map((stat, index) => (
            <div key={index} className={`flex flex-col items-center justify-center text-center ${index !== 0 && index !== 2 ? 'md:pl-8' : ''} ${index === 2 ? 'md:pl-8 pt-8 md:pt-0 border-t md:border-t-0 border-[#DDDCCF]' : ''} ${index === 3 ? 'pt-8 md:pt-0 border-t md:border-t-0 border-[#DDDCCF]' : ''}`}>
              <h3 className="font-playfair text-3xl md:text-5xl font-bold text-[#174A2A] mb-2">{stat.value}</h3>
              <p className="font-medium text-[#5F675F] text-xs md:text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
