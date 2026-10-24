"use client";
import React from 'react';

const partners = [
  // { name: "Partner 8", url: "https://www.pagetraffic.in/wp-content/uploads/2022/03/find-best-logo.png" },
  { name: "Partner 9", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGDGPft3WWyBmCb1IAy8Y5GSSaI07j9hJJ_HghoFFTmw&s=10" },
  { name: "Partner 1", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVXkFk3nrjTnByc9Tega_zGY1nrzHDmWotoRKK8-wu9A&s" },
  { name: "Partner 2", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkBhJOnwbqq1yKSPil4rYkEegblYE9A_So7kH0arH6Q&s=10" },
  { name: "Partner 3", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBI21dBZ8QkVJBfirJjpmpON9EokCkTrjtpYSv--boig&s=10" },
  { name: "Partner 4", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRmkjWU12MnmSKtBeiEtTXND98Gr5RZ0nZ0uAoeVBKag&s=10" },
  { name: "Partner 6", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIulNt7oWA6uQS78sPtbNY1r2bPwDxsigUhPvcr5aemcduqD-ginT8VfT&s=10" },
];

const TrustBar = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-[#050505] py-16 overflow-hidden z-10">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-zinc-700 hidden md:block"></div>
          <h3 className="text-base md:text-xl font-bold tracking-[0.2em] uppercase text-center bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500 bg-clip-text text-transparent">
            Highly Reviewed & Trusted On
          </h3>
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-zinc-700 hidden md:block"></div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center transition-transform hover:-translate-y-1 duration-300">
              <img
                src={partner.url}
                alt={partner.name}
                title={partner.name}
                className="h-14 md:h-20 w-auto object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
