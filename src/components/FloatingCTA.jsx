"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FloatingSocials() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const socials = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={16} />,
      href: "https://wa.me/916264398990?text=Hello!%20I'm%20interested%20in%20your%20services.",
      color: "bg-[#25D366]",
      hoverColor: "hover:bg-[#20bd5a]"
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={16} />,
      href: "https://www.instagram.com/digitalsuccess_solutions/",
      color: "bg-[#E1306C]",
      hoverColor: "hover:bg-[#c1275b]"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={16} />,
      href: "https://in.linkedin.com/company/dss-digital-success-solutions-llp",
      color: "bg-[#0077b5]",
      hoverColor: "hover:bg-[#006097]"
    },
    {
      name: "Facebook",
      icon: <FaFacebookF size={16} />,
      href: "https://www.facebook.com/p/Digital-Success-Solutions-61567317789854/",
      color: "bg-[#1877F2]",
      hoverColor: "hover:bg-[#1464cc]"
    }
  ];

  return (
    <div 
      className="fixed top-1/2 right-0 -translate-y-1/2 z-[9999] flex items-center shadow-[-5px_0_20px_rgba(0,0,0,0.15)] rounded-l-xl overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        className="w-6 h-16 bg-[#FF6900] flex items-center justify-center text-white cursor-pointer z-10 transition-colors hover:bg-[#e65c00] flex-shrink-0 focus:outline-none"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight size={16} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronLeft size={16} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 48, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white flex flex-col items-center gap-3 py-3"
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ delay: isOpen ? index * 0.05 : 0 }}
                className={`w-8 h-8 rounded-full text-white flex items-center justify-center shadow-md transform transition-transform hover:scale-110 flex-shrink-0 ${social.color} ${social.hoverColor}`}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}