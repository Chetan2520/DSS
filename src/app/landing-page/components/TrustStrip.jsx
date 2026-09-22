import { Leaf, Users, BarChart3, Headset } from "lucide-react";

export default function TrustStrip() {
  const stats = [
    { value: "6+ Years", label: "Experience" },
    { value: "1600+", label: "Projects" },
    { value: "950+", label: "Clients" },
    { value: "₹10 Cr+", label: "Ad Spend Managed" },
    { value: "30+", label: "Experts" }
  ];

  return (
    <div className="bg-[#F8F5EA] border-b border-[#DDDCCF] py-12 relative z-20">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4 lg:divide-x divide-[#DDDCCF]">
          {stats.map((stat, index) => (
            <div key={index} className={`flex flex-col items-center justify-center text-center ${index !== 0 ? 'lg:pl-8' : ''}`}>
              <h3 className="font-playfair text-4xl md:text-5xl lg:text-5xl font-bold text-[#5B8266] mb-2">{stat.value}</h3>
              <p className="font-medium text-[#5F675F] text-xs md:text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
