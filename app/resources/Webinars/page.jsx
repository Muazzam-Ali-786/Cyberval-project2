"use client";

import React, { useState } from "react";
import Link from "next/link";

const webinarsData = [
  {
    id: 1,
    title: "Stay Ahead of Cyber Threats",
    date: "May 15, 2026",
    duration: "45 minutes",
    description: "Join our webinar for attack scenarios, prevention, and security best practices.",
    tags: ["Cyber Threats", "Awareness"],
    image: "/images/pages/resources/Webiners/card-1-image.svg",
    speaker: "John Smith",
    designation: "Chief Technology Officer"
  },
  {
    id: 2,
    title: "Optimizing Enterprise Security",
    date: "May 20, 2026",
    duration: "60 minutes",
    description: "Explore strategies for managing complex security infrastructures in the cloud era.",
    tags: ["Cloud Tech", "Optimization"],
    image: "/images/pages/resources/Webiners/card-2-image.svg",
    speaker: "Jane Doe",
    designation: "Senior Security Architect"
  },
  {
    id: 3,
    title: "The Future of Data Privacy",
    date: "May 25, 2026",
    duration: "45 minutes",
    description: "Understanding global regulations and their impact on your organization's data.",
    tags: ["Privacy", "Global"],
    image: "/images/pages/resources/Webiners/card-3-image.svg",
    speaker: "Charlie Wilson",
    designation: "Legal Counsel"
  },
  {
    id: 4,
    title: "Incident Response in the Era of Ransomware",
    date: "June 12, 2026",
    duration: "60 minutes",
    description: "Practical strategies for developing a resilient incident response plan.",
    tags: ["Ransomware", "Response"],
    image: "/images/pages/resources/Webiners/card-4-image.svg",
    speaker: "Sarah Jenkins",
    designation: "Incident Response Lead"
  },
  {
    id: 5,
    title: "Securing the Future: Zero Trust for Enterprise",
    date: "June 05, 2026",
    duration: "60 minutes",
    description: "Discover why Zero Trust is no longer optional and how to implement it effectively.",
    tags: ["Zero Trust", "Enterprise"],
    image: "/images/pages/resources/Webiners/card-5-image.svg",
    speaker: "Michael Chen",
    designation: "Security Solutions Architect"
  },
  {
    id: 6,
    title: "Mastering Compliance: From SOC 2 to GDPR",
    date: "June 20, 2026",
    duration: "45 minutes",
    description: "A comprehensive guide to navigating global security compliance standards.",
    tags: ["Compliance", "Security"],
    image: "/images/pages/resources/Webiners/card-6-image.svg",
    speaker: "Emily Rodriguez",
    designation: "Compliance Officer"
  }
];

export default function WebinarsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWebinars = webinarsData.filter((webinar) =>
    webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    webinar.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    webinar.speaker.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-[#ffffff]">
      {/* Hero Section */}
      <section className="relative w-full h-[450px] max-[1454px]:h-auto mx-auto flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/resources/Webiners/hero-bg.svg')] bg-cover bg-center bg-no-repeat bg-[#030D1A] opacity-100 p-[100px_20px_60px] max-[1454px]:p-[160px_20px_100px] text-center">
        <div className="relative w-full max-w-[850px] flex flex-col items-center gap-[21px] text-center z-[5] px-[20px] mx-auto">
          <div className="flex justify-center items-center w-auto h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px_24px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0">
            <span className="opacity-100 font-manrope font-semibold text-[14px] leading-none tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none whitespace-nowrap">RESOURCES</span>
          </div>

          <h1 className="font-sora text-[40px] font-semibold text-[#ffffff] w-full max-w-[750px] opacity-100 leading-[1.3] text-center [text-wrap:balance] mx-auto max-[1454px]:h-auto max-[1454px]:text-[clamp(32px,5vw,40px)] max-[1454px]:leading-normal m-0">
            Webinars
          </h1>

          <p className="font-manrope font-normal text-[18px] leading-[30px] text-[#EEEEEE] w-full max-w-[687px] opacity-100 text-center mx-auto max-[1454px]:h-auto max-[768px]:text-[16px] m-0">
            Gain expert insights and stay ahead of cyber threats with our live and on-demand webinars led by industry leaders.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-[600px] mt-[30px]">
            <input 
              type="text" 
              placeholder="Search here..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-[60px] pl-[60px] pr-[30px] rounded-[30px] bg-white border-none outline-none font-manrope text-[16px] text-[#030D1A] shadow-lg"
            />
            <div className="absolute left-[24px] top-1/2 -translate-y-1/2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Webinars Cards Section */}
      <section className="p-[100px_20px] bg-[#ffffff]">
        <div className="max-w-[1230px] mx-auto">
          <div className="grid grid-cols-3 gap-x-[30px] gap-y-[60px] max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
            {filteredWebinars.length > 0 ? (
              filteredWebinars.map((webinar) => (
                <article key={webinar.id} className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[24px] overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-[240px] overflow-hidden">
                    <img 
                      src={webinar.image} 
                      alt={webinar.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-[30px] flex flex-col flex-1">
                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex items-center gap-2 text-[#2E5A88]">
                        <img src="/images/pages/resources/Webiners/all-cards-calender.svg" className="w-5 h-5" alt="calendar" />
                        <span className="text-[14px] font-manrope font-medium">{webinar.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#2E5A88]">
                        <img src="/images/pages/resources/Webiners/all-cards-clock.svg" className="w-5 h-5" alt="clock" />
                        <span className="text-[14px] font-manrope font-medium">{webinar.duration}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-[22px] font-bold text-[#030D1A] mb-3 font-sora leading-tight">
                      {webinar.title}
                    </h3>
                    <p className="text-[15px] text-[#4A5568] mb-6 font-manrope leading-relaxed">
                      {webinar.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {webinar.tags.map((tag, idx) => (
                        <span key={idx} className="px-4 py-2 bg-[#E6F0FA] text-[#2E5A88] text-[12px] font-bold rounded-full uppercase tracking-wider font-manrope">{tag}</span>
                      ))}
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-3">
                      <img src="/images/pages/resources/Webiners/all-cards-bottom-image.svg" className="w-[44px] h-[44px] rounded-full object-cover" alt={webinar.speaker} />
                      <div className="flex flex-col">
                        <span className="text-[16px] font-bold text-[#030D1A] font-manrope">{webinar.speaker}</span>
                        <span className="text-[14px] text-[#718096] font-manrope">{webinar.designation}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-[20px] font-manrope text-gray-500">No webinars found matching your search.</p>
              </div>
            )}
          </div>


          {/* Load More Button */}
          {filteredWebinars.length > 0 && (
            <div className="mt-[80px] flex justify-center">
               <button className="p-[14px_40px] bg-transparent border border-[#030D1A] text-[#030D1A] text-[16px] font-bold rounded-[8px] cursor-pointer transition-all duration-300 hover:bg-[#030D1A] hover:text-[#FFFFFF] font-manrope">
                 Load more
               </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
