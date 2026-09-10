"use client";
import React from "react";
import { PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const MobileBottomNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-[100] flex shadow-[0_-10px_30px_rgba(0,0,0,0.4)] rounded-t-3xl overflow-hidden bg-black/80 backdrop-blur-md">
      <a
        href="tel:+916264398990"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-t from-blue-700 to-blue-500 text-white font-bold text-[11px] tracking-widest active:from-blue-800 active:to-blue-600 transition-colors border-r border-white/10"
      >
        <PhoneCall size={16} />
        CALL NOW
      </a>
      <a
        href="https://wa.me/916264398990?text=Hello!%20I'm%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-t from-[#1fa851] to-[#25D366] text-white font-bold text-[11px] tracking-widest active:from-[#188540] active:to-[#20bd5a] transition-colors"
      >
        <FaWhatsapp size={18} />
        WHATSAPP
      </a>
    </div>
  );
};

export default MobileBottomNav;
