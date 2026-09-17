import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#10351F] text-white pt-16 pb-8 border-t border-[#174A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Logo & Brand Message */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <span className="font-playfair font-bold text-2xl text-white">Digital Success Solutions</span>
            </Link>
            <p className="text-[#6F8B63] text-sm uppercase tracking-widest font-bold">
              Growing Brands Naturally.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="md:col-span-4">
            <nav className="flex flex-wrap gap-x-8 gap-y-4">
              {['Home', 'About', 'Services', 'Case Studies', 'Blog', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[#DDE6D3] hover:text-white transition-colors text-sm">
                  {item}
                </a>
              ))}
            </nav>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-[#174A2A] flex items-center justify-center hover:bg-white hover:text-[#10351F] transition-colors text-white">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#174A2A] flex items-center justify-center hover:bg-white hover:text-[#10351F] transition-colors text-white">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#174A2A] flex items-center justify-center hover:bg-white hover:text-[#10351F] transition-colors text-white">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#174A2A] flex items-center justify-center hover:bg-white hover:text-[#10351F] transition-colors text-white">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
          
          {/* Right Message */}
          <div className="md:col-span-4 md:text-right flex flex-col justify-end">
            <p className="text-[#DDE6D3] font-playfair italic text-lg leading-relaxed">
              Ayurveda Grows.<br/>
              People Thrive.<br/>
              We Make It Possible.
            </p>
          </div>
          
        </div>
        
        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[#174A2A] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#6F8B63]">
            © {new Date().getFullYear()} Digital Success Solutions LLP. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
