import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#4A6D55] text-white pt-16 pb-8 border-t border-[#5B8266]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Logo & Brand Message */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <span className="font-playfair font-semibold text-2xl text-white">Digital Success Solutions</span>
            </Link>
            <p className="text-[#5B8266] text-sm uppercase tracking-widest font-semibold">
              Growing Brands Naturally.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="md:col-span-4">
            <nav className="flex flex-wrap gap-x-8 gap-y-4">
              {['Home', 'About', 'Services', 'Case Studies', 'Blog', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[#F8F5EA] hover:text-white transition-colors text-sm">
                  {item}
                </a>
              ))}
            </nav>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-[#5B8266] flex items-center justify-center hover:bg-white hover:text-[#4A6D55] transition-colors text-white">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#5B8266] flex items-center justify-center hover:bg-white hover:text-[#4A6D55] transition-colors text-white">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#5B8266] flex items-center justify-center hover:bg-white hover:text-[#4A6D55] transition-colors text-white">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#5B8266] flex items-center justify-center hover:bg-white hover:text-[#4A6D55] transition-colors text-white">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
          
          {/* Right Message */}
          <div className="md:col-span-4 md:text-right flex flex-col justify-end">
            <p className="text-[#F8F5EA] font-playfair italic text-lg leading-relaxed">
              Ayurveda Grows.<br/>
              People Thrive.<br/>
              We Make It Possible.
            </p>
          </div>
          
        </div>
        
        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[#5B8266] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#5B8266]">
            © {new Date().getFullYear()} Digital Success Solutions LLP. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
