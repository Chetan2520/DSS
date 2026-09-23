"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8F5EA]/90 backdrop-blur-md border-b border-[#DDDCCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            {/* Replace with actual logo or text logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="font-playfair font-semibold text-2xl text-[#5B8266]">Digital Success Solutions</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Our Process', 'Results', 'Testimonials'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[#5F675F] hover:text-[#5B8266] font-medium transition-colors text-sm">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a href="#contact" className="bg-[#5B8266] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[#4A6D55] transition-colors inline-flex items-center gap-2">
              Get a Free Strategy Call <span>→</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#5B8266] hover:text-[#4A6D55] focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F8F5EA] border-b border-[#DDDCCF]">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {['Home', 'About', 'Services', 'Our Process', 'Results', 'Testimonials'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-[#5F675F] hover:text-[#5B8266] hover:bg-[#F8F5EA] rounded-md"
              >
                {item}
              </a>
            ))}
            <a href="#contact" className="block w-full text-center mt-4 bg-[#5B8266] text-white px-6 py-3 rounded-full font-medium text-base hover:bg-[#4A6D55] transition-colors">
              Get a Free Strategy Call →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
