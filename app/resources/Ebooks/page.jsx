"use client";

import React, { useState } from "react";
import Link from "next/link";

const ebooksData = [
  {
    id: 1,
    title: "The Art of Invisibility",
    author: "Kevin Mitnick",
    image: "/images/pages/resources/Ebooks/card-1-image.svg"
  },
  {
    id: 2,
    title: "Cybersecurity and Cyberwar",
    author: "P.W. Singer & Allan Friedman",
    image: "/images/pages/resources/Ebooks/card-2-image.svg"
  },
  {
    id: 3,
    title: "Social Engineering",
    author: "Christopher Hadnagy",
    image: "/images/pages/resources/Ebooks/card-3-image.svg"
  },
  {
    id: 4,
    title: "Ghost in the Wires",
    author: "Kevin Mitnick",
    image: "/images/pages/resources/Ebooks/card-4-image.svg"
  },
  {
    id: 5,
    title: "Practical Malware Analysis",
    author: "Michael Sikorski",
    image: "/images/pages/resources/Ebooks/card-5-image.svg"
  },
  {
    id: 6,
    title: "Hacking: The Art of Exploitation",
    author: "Jon Erickson",
    image: "/images/pages/resources/Ebooks/card-3-image.svg" // User previously set card 6 to use card 3
  }
];

export default function EbooksPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEbooks = ebooksData.filter((ebook) =>
    ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ebook.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-[#ffffff]">
      {/* Hero Section */}
      <section className="relative w-full h-[550px] max-[1454px]:h-auto mx-auto flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/resources/Ebooks/hero-bg.svg')] bg-cover bg-center bg-no-repeat bg-[#030D1A] opacity-100 p-[120px_20px_80px] max-[1454px]:p-[160px_20px_100px] text-center">
        <div className="relative w-full max-w-[850px] flex flex-col items-center gap-[24px] text-center z-[5] px-[20px] mx-auto">
          <div className="flex justify-center items-center w-auto h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px_24px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0">
            <span className="opacity-100 font-manrope font-semibold text-[14px] leading-none tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none whitespace-nowrap">EBOOKS</span>
          </div>

          <h1 className="font-sora text-[48px] font-bold text-[#ffffff] w-full max-w-[750px] opacity-100 leading-[1.2] text-center [text-wrap:balance] mx-auto max-[1454px]:text-[clamp(36px,6vw,48px)] m-0">
            Ebooks
          </h1>

          <p className="font-manrope font-normal text-[18px] leading-[30px] text-[#EEEEEE] w-full max-w-[687px] opacity-100 text-center mx-auto max-[1454px]:h-auto max-[768px]:text-[16px] m-0">
            Browse our latest ebook content and open each item to read the full detail page.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-[600px] mt-[20px]">
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

      {/* Ebooks Cards Section */}
      <section className="p-[100px_20px] bg-[#ffffff]">
        <div className="max-w-[1140px] mx-auto">
          {/* Section Heading */}
          <div className="mb-[60px]">
            <h2 className="font-sora text-[40px] font-bold text-[#030D1A]">
              Latest <span className="text-[#2E5A88]">Ebooks</span>
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-x-[40px] gap-y-[60px] max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
            {filteredEbooks.length > 0 ? (
              filteredEbooks.map((ebook) => (
                <article key={ebook.id} className="flex flex-col group transition-all duration-300">
                  <Link href={`/resources/Ebooks/${ebook.id}`} className="block">
                    <div className="relative w-full h-[320px] bg-[#F3F4F6] rounded-[24px] overflow-hidden flex justify-center items-center p-6 mb-5">
                      <img 
                        src={ebook.image} 
                        alt={ebook.title} 
                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="flex justify-between items-center pr-1">
                    <div className="flex flex-col">
                      <Link href={`/resources/Ebooks/${ebook.id}`}>
                        <h3 className="text-[19px] font-bold text-[#030D1A] mb-1 font-sora leading-tight group-hover:text-[#2E5A88] transition-colors">
                          {ebook.title}
                        </h3>
                      </Link>
                      <span className="text-[14px] text-[#718096] font-manrope">{ebook.author}</span>
                    </div>
                    <Link href={`/resources/Ebooks/${ebook.id}`} className="flex-shrink-0 w-[40px] h-[40px] bg-[#2E5A88] rounded-[8px] flex justify-center items-center transition-all duration-300 hover:bg-[#1A3F66] hover:scale-110">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-[20px] font-manrope text-gray-500">No ebooks found matching your search.</p>
              </div>
            )}
          </div>


          {/* Load More Button */}
          {filteredEbooks.length > 0 && (
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
