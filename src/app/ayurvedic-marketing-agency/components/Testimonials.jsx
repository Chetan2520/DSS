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
      avatar: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D",
      delay: 0.1
    },
    {
      quote: "Their team is professional, creative and result-oriented. Highly recommended for any Ayurvedic brand looking to grow.",
      name: "Rohit Vyas",
      title: "Director, Vyas Ayurveda",
      avatar: "https://images.unsplash.com/photo-1722322426803-101270837197?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D",
      delay: 0.2
    },
    {
      quote: "From strategy to execution, everything was smooth. We saw real leads and brand visibility like never before.",
      name: "Anjali Deshpande",
      title: "Owner, Prakriti Wellness Clinic",
      avatar: "https://images.unsplash.com/photo-1564805280186-5d7056d538ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D",
      delay: 0.3
    }
  ];

  // 4 copies for seamless infinite marquee scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-[#F8F5EA] relative overflow-hidden">
      
      {/* Decorative Leaf in Top Right Corner */}
      <div className="absolute top-10 right-2 sm:right-6 md:top-20 md:right-24 rotate-45 opacity-40 z-0">
        <Leaf className="text-[#5B8266] w-12 h-12 md:w-24 md:h-24" strokeWidth={1} />
      </div>

      <div className="w-full mx-auto relative z-10">

        <div className="text-center mb-16 px-6">
          <h2 className="font-playfair text-4xl md:text-[46px] font-bold leading-[1.25] text-[#18221B] mb-6 tracking-tight">
            See What Our <br />
            <span className="relative inline-block overflow-hidden px-4 md:px-5 py-1 md:py-1.5 rounded-xl mt-2 md:mt-3 whitespace-nowrap text-[32px] sm:text-4xl md:text-[46px] leading-[1.2]">
              <motion.span 
                className="absolute inset-y-0 left-0 bg-[#2A3B30] z-0"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "circOut", delay: 0.3 }}
              />
              <span className="text-white relative z-10">Clients Say</span>
            </span>
          </h2>
        </div>

        {/* Infinite Marquee */}
        <div className="relative overflow-hidden w-full flex">
          <motion.div 
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="w-[320px] md:w-[420px] shrink-0 pr-6 md:pr-8"
              >
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#DDDCCF] flex flex-col h-full relative transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                  {/* Quote marks decorative */}
                  <div className="font-playfair text-3xl text-[#F8F5EA] absolute top-4 left-6 leading-none">
                    "
                  </div>

                  <div className="relative z-10 flex-grow mb-8 pt-4">
                    <p className="text-[#18221B] italic leading-relaxed text-[15px] md:text-[17px] font-playfair">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-[#DDDCCF]">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#F8F5EA] flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#18221B] text-sm">{testimonial.name}</h4>
                      <p className="text-[#5F675F] text-xs mb-1">{testimonial.title}</p>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-[#FF6900] text-[#FF6900]" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
