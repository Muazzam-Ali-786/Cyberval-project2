"use client";

import React from "react";

export default function ServiceSixPage() {
  return (
    <div className="w-full min-h-screen bg-[#ffffff]">
      {/* Hero Section */}
      <section className="relative w-full h-[556px] max-[1454px]:h-auto mx-auto flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/services/service-6/hero-bg.svg')] bg-cover bg-center bg-no-repeat bg-[#030D1A] opacity-100 p-[100px_20px_60px] max-[1454px]:p-[160px_20px_100px] text-center max-[1454px]:w-full max-[1454px]:left-0">
        <div className="relative w-full max-w-[850px] flex flex-col items-center gap-[21px] text-center z-[5] px-[20px] max-[1454px]:mx-auto">
          <div className="flex justify-center items-center w-auto min-w-[120px] h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px_24px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0">
            <span className="opacity-100 font-manrope font-semibold text-[14px] leading-none tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none whitespace-nowrap">SERVICES</span>
          </div>

          <h1 className="font-sora text-[40px] font-semibold text-[#ffffff] w-full max-w-[750px] opacity-100 leading-[1.3] text-center [text-wrap:balance] mx-auto max-[1454px]:h-auto max-[1454px]:text-[clamp(32px,5vw,40px)] max-[1454px]:leading-normal m-0">
            Training and Certifications
          </h1>

          <p className="font-manrope font-normal text-[18px] leading-[30px] text-[#EEEEEE] w-full max-w-[780px] opacity-100 text-center mx-auto max-[1454px]:h-auto max-[768px]:text-[16px] m-0">
            Our training and certification programs span cybersecurity, AI, digital transformation, governance, compliance, and privacy, building the knowledge, confidence, and practical skills needed to tackle today's threats, meet industry standards, and drive measurable outcomes.
          </p>
        </div>
      </section>

      {/* Areas we cover Section */}
      <section className="p-[120px_20px] bg-[#ffffff]">
        <div className="max-w-[1230px] mx-auto">
          <div className="flex items-start justify-between mb-[60px] gap-[40px] max-[1024px]:flex-col max-[1024px]:items-center max-[1024px]:text-center">
            <h2 className="font-sora text-[40px] font-bold text-[#030D1A] whitespace-nowrap max-[768px]:text-[32px]">
              Areas <span className="text-[#2E5A88]">we cover</span>
            </h2>
            <p className="text-[14px] leading-[1.6] text-[#4A5568] max-w-[580px]">
              For Training and Certifications, our catalogs are five portfolios designed to build capability across security, innovation, resilience, governance, and privacy.
            </p>
          </div>

          <div className="grid grid-cols-[1.6fr_1fr] gap-[24px] max-[1024px]:grid-cols-1">
            {/* Card 1 - Cybersecurity */}
            <article className="relative min-h-[380px] rounded-[16px] overflow-hidden p-[40px] flex flex-row items-center justify-between bg-[#F8FAFF] border border-[#E5E7EB] group max-[768px]:flex-col max-[768px]:items-start">
              <div className="relative z-[2] max-w-[320px]">
                <h3 className="text-[24px] font-bold text-[#030D1A] mb-[20px]">Cybersecurity</h3>
                <p className="text-[14px] leading-[1.8] text-[#4A5568]">
                  Training courses in this portfolio focus on safeguarding information systems, identifying and mitigating cyber threats, and building robust security strategies that ensure data protection and integrity.
                </p>
              </div>
              <div className="relative z-[2] w-[240px] h-full flex items-center justify-center max-[768px]:w-full max-[768px]:mt-[30px]">
                <img src="/images/pages/services/service-6/card-1-icon.svg" alt="Cybersecurity Shield" className="w-full h-auto opacity-100" />
              </div>
            </article>

            {/* Card 2 - AI and Digital Transformation */}
            <article className="bg-[#F8FAFF] border border-[#E5E7EB] rounded-[16px] p-[40px] flex flex-col relative overflow-hidden group">
               <h3 className="text-[22px] font-bold text-[#030D1A] mb-[20px] pr-[40px]">AI and Digital Transformation</h3>
               <p className="text-[14px] leading-[1.8] text-[#4A5568]">
                 This portfolio focuses on the intersection of artificial intelligence and digital innovation. These courses help organizations harness AI technologies and navigate the challenges and opportunities posed by digital transformation.
               </p>
               <div className="absolute bottom-[24px] right-[24px]">
                 <img src="/images/pages/services/service-6/card-2-icon.svg" alt="" className="w-[48px] h-[48px] opacity-80 group-hover:opacity-100 transition-opacity" />
               </div>
            </article>
          </div>

          <div className="grid grid-cols-3 gap-[24px] mt-[24px] max-[1024px]:grid-cols-1">
            {/* Card 3 - Continuity */}
            <article className="bg-[#F8FAFF] border border-[#E5E7EB] rounded-[16px] p-[40px] flex flex-col relative overflow-hidden group">
               <h3 className="text-[20px] font-bold text-[#030D1A] mb-[20px]">Continuity, Resilience, and Recovery</h3>
               <p className="text-[14px] leading-[1.8] text-[#4A5568] mb-[40px]">
                 Courses under this portfolio prepare professionals to develop and implement strategies that ensure business continuity, organizational resilience, and effective recovery in the face of disruptive events.
               </p>
               <div className="absolute bottom-[24px] right-[24px]">
                 <img src="/images/pages/services/service-6/card-3-icon.svg" alt="" className="w-[44px] h-[44px] opacity-80 group-hover:opacity-100 transition-opacity" />
               </div>
            </article>

            {/* Card 4 - GRC */}
            <article className="bg-[#F8FAFF] border border-[#E5E7EB] rounded-[16px] p-[40px] flex flex-col relative overflow-hidden group">
               <h3 className="text-[20px] font-bold text-[#030D1A] mb-[20px]">Governance, Risk, and Compliance</h3>
               <p className="text-[14px] leading-[1.8] text-[#4A5568] mb-[40px]">
                 This portfolio emphasizes governance frameworks, risk management, and compliance strategies, equipping participants to align organizational objectives with regulatory and business requirements.
               </p>
               <div className="absolute bottom-[24px] right-[24px]">
                 <img src="/images/pages/services/service-6/card-4-icon.svg" alt="" className="w-[44px] h-[44px] opacity-80 group-hover:opacity-100 transition-opacity" />
               </div>
            </article>

            {/* Card 5 - Privacy */}
            <article className="bg-[#F8FAFF] border border-[#E5E7EB] rounded-[16px] p-[40px] flex flex-col relative overflow-hidden group">
               <h3 className="text-[20px] font-bold text-[#030D1A] mb-[20px]">Privacy and Data Protection</h3>
               <p className="text-[14px] leading-[1.8] text-[#4A5568] mb-[40px]">
                 This portfolio covers critical data protection laws and practices, including GDPR compliance and strategies for protecting personal and sensitive information in an increasingly data-driven world.
               </p>
               <div className="absolute bottom-[24px] right-[24px]">
                 <img src="/images/pages/services/service-6/card-5-icon.svg" alt="" className="w-[44px] h-[44px] opacity-80 group-hover:opacity-100 transition-opacity" />
               </div>
            </article>
          </div>
        </div>
      </section>

      {/* Recognized Section */}
      <section className="p-[120px_20px] bg-[#F8FAFF]">
        <div className="max-w-[1230px] mx-auto flex items-center justify-between gap-[80px] max-[1024px]:flex-col max-[1024px]:text-center">
          <div className="flex-1">
            <h2 className="text-[40px] font-bold text-[#030D1A] leading-[1.2] mb-[24px] max-[768px]:text-[32px]">
              Recognized by <span className="text-[#2E5A88]">Global Certifications</span>
            </h2>
            <p className="text-[16px] leading-[1.7] text-[#4A5568] mb-[32px]">
              Industry-recognized cybersecurity training and certification programs designed to help professionals lead, defend, and grow in a rapidly evolving digital world.
            </p>
            <ul className="flex flex-col gap-[16px] max-[1024px]:items-center">
               <li className="flex items-center gap-[12px] text-[16px] font-medium text-[#030D1A]">
                 <img src="/images/pages/services/service-6/tick-icon.svg" alt="check" className="w-[18px] h-[18px]" />
                 ISO-Aligned Training
               </li>
               <li className="flex items-center gap-[12px] text-[16px] font-medium text-[#030D1A]">
                 <img src="/images/pages/services/service-6/tick-icon.svg" alt="check" className="w-[18px] h-[18px]" />
                 Practical Cybersecurity Programs
               </li>
               <li className="flex items-center gap-[12px] text-[16px] font-medium text-[#030D1A]">
                 <img src="/images/pages/services/service-6/tick-icon.svg" alt="check" className="w-[18px] h-[18px]" />
                 Globally Recognized Certifications
               </li>
            </ul>
          </div> 
          <div className="flex-1 flex justify-center">
            <img src="/images/pages/services/service-6/section-3-right-side-icon.svg" alt="Certifications" className="w-full max-w-[550px] h-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
