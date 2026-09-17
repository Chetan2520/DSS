"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Leaf } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Digital Success Solutions truly understands Ayurveda. Our online sales have grown 3X in just 6 months!",
      name: "Dr. Meera Sharma",
      title: "Founder, AyurLife Herbs",
      avatar: "/landing/testimonial-1.webp",
      delay: 0.1
    },
    {
      quote: "Their team is professional, creative and result-oriented. Highly recommended for any Ayurvedic brand looking to grow.",
      name: "Rohit Vyas",
      title: "Director, Vyas Ayurveda",
      avatar: "/landing/testimonial-2.webp",
      delay: 0.2
    },
    {
      quote: "From strategy to execution, everything was smooth. We saw real leads and brand visibility like never before.",
      name: "Anjali Deshpande",
      title: "Owner, Prakriti Wellness Clinic",
      avatar: "/landing/testimonial-3.webp",
      delay: 0.3
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#F8F5EA]">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
        
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold leading-[1.1] text-[#18221B] mb-6">
            What Our Clients Say
          </h2>
          <div className="flex justify-center">
            <Leaf className="text-[#6F8B63]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: testimonial.delay }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-[#DDDCCF] flex flex-col h-full relative"
            >
              {/* Quote marks decorative */}
              <div className="font-playfair text-6xl text-[#DDE6D3] absolute top-4 left-6 leading-none">
                "
              </div>
              
              <div className="relative z-10 flex-grow mb-8 pt-4">
                <p className="text-[#18221B] italic leading-relaxed text-lg font-playfair">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-6 border-t border-[#DDDCCF]">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#EFE9DC] flex-shrink-0">
                  {/* Using a placeholder styling in case images are missing */}
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#18221B] text-sm">{testimonial.name}</h4>
                  <p className="text-[#5F675F] text-xs mb-1">{testimonial.title}</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
