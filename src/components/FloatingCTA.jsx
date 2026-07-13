"use client";
import React from "react";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaPhone
} from "react-icons/fa6";

export default function FloatingSocials() {
  const socials = [
    {
      name: "Call Now",
      icon: <FaPhone size={16} />,
      href: "tel:+916264398990",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={18} />,
      href: "https://wa.me/916264398990?text=Hello!%20I'm%20interested%20in%20your%20services.",
      color: "bg-[#25D366]",
      hoverColor: "hover:bg-[#20bd5a]",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={18} />,
      href: "https://www.instagram.com/digitalsuccess_solutions/",
      color: "bg-[#E1306C]",
      hoverColor: "hover:bg-[#c1275b]",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={18} />,
      href: "https://in.linkedin.com/company/dss-digital-success-solutions-llp",
      color: "bg-[#0077b5]",
      hoverColor: "hover:bg-[#006097]",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF size={18} />,
      href: "https://www.facebook.com/p/Digital-Success-Solutions-61567317789854/",
      color: "bg-[#1877F2]",
      hoverColor: "hover:bg-[#1464cc]",
    },
  ];

  return (
    <div className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 z-[9999] flex-col items-center gap-3 py-4 px-2 bg-white shadow-[-5px_0_20px_rgba(0,0,0,0.15)] rounded-l-xl">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target={social.href.startsWith("tel:") ? "_self" : "_blank"}
          rel="noopener noreferrer"
          className={`relative w-9 h-9 rounded-full text-white flex items-center justify-center shadow-md transform transition-transform hover:scale-110 flex-shrink-0 group ${social.color} ${social.hoverColor}`}
        >
          {social.icon}

          {/* Custom Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-zinc-900 text-white text-[10px] sm:text-xs font-semibold rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {social.name}
            {/* Tooltip Arrow pointing right */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-1 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-zinc-900" />
          </span>
        </a>
      ))}
    </div>
  );
}
