"use client";

import React from "react";

export default function VCISOPage() {
  return (
    <div className="w-full min-h-screen bg-[#ffffff]">
      {/* Hero Section */}
      <section className="relative w-full h-[556px] max-[1454px]:h-auto mx-auto flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/services/service-5/(vCISO)/hero-bg.svg')] bg-cover bg-center bg-no-repeat bg-[#030D1A] opacity-100 p-[100px_20px_60px] max-[1454px]:p-[160px_20px_100px] text-center max-[1454px]:w-full max-[1454px]:left-0">
        <div className="relative w-full max-w-[850px] flex flex-col items-center gap-[21px] text-center z-[5] px-[20px] max-[1454px]:mx-auto">
          <div className="flex justify-center items-center w-auto min-w-[365px] h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px_24px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0">
            <span className="opacity-100 font-manrope font-semibold text-[14px] leading-none tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none whitespace-nowrap">MANAGED CYBERSECURITY AS A SERVICE</span>
          </div>

          <h1 className="font-sora text-[40px] font-semibold text-[#ffffff] w-full max-w-[750px] opacity-100 leading-[1.3] text-center [text-wrap:balance] mx-auto max-[1454px]:h-auto max-[1454px]:text-[clamp(32px,5vw,40px)] max-[1454px]:leading-normal m-0">
            Virtual CISO (vCISO)
          </h1>

          <p className="font-manrope font-normal text-[18px] leading-[30px] text-[#EEEEEE] w-full max-w-[687px] opacity-100 text-center mx-auto max-[1454px]:h-auto max-[768px]:text-[16px] m-0">
            Strategic security leadership on demand, with clearer priorities, better governance, and practical risk decisions.
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="p-[120px_20px] bg-[#ffffff]">
        <div className="max-w-[1230px] mx-auto text-center">
          <h2 className="font-sora text-[40px] font-bold text-[#030D1A] mb-[80px] max-[768px]:text-[32px]">
            Why Choose <span className="text-[#2E5A88]">Virtual CISO (vCISO)</span>
          </h2>
          
          <div className="flex flex-row items-center justify-center gap-[40px] max-[1024px]:flex-col relative">
            {/* Left Column */}
            <div className="flex flex-col gap-[30px] flex-1 max-w-[380px] w-full">
              {/* Card 1 */}
              <article className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[16px] p-[32px_24px] text-left relative shadow-sm min-h-[180px] flex flex-col justify-center">
                 <div className="w-[44px] h-[44px] bg-[#F8FAFF] rounded-[8px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(vCISO)/left-colum-icon.svg" alt="" className="w-[24px] h-[24px]" />
                 </div>
                 <h3 className="text-[20px] font-bold text-[#030D1A] mb-[12px] pr-[40px]">What is a Virtual CISO?</h3>
                 <p className="text-[14px] leading-[1.6] text-[#4A5568]">A vCISO gives you seasoned security leadership without the full-time executive hire, helping you turn cyber risk into a clear business plan.</p>
              </article>
              {/* Card 2 */}
              <article className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[16px] p-[32px_24px] text-left relative shadow-sm min-h-[180px] flex flex-col justify-center">
                 <div className="w-[44px] h-[44px] bg-[#F8FAFF] rounded-[8px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(vCISO)/left-icon-2.svg" alt="" className="w-[24px] h-[24px]" />
                 </div>
                 <h3 className="text-[20px] font-bold text-[#030D1A] mb-[12px] pr-[40px]">Why organizations use it</h3>
                 <p className="text-[14px] leading-[1.6] text-[#4A5568]">It is ideal when you need executive-level guidance, board communication, or a stronger roadmap but are not ready for a permanent CISO.</p>
              </article>
            </div>

            {/* Center Image with Labels */}
            <div className="w-[473px] h-[545px] flex-shrink-0 relative flex items-center justify-center py-[20px] max-[1024px]:w-full max-[1024px]:h-auto">
               <img src="/images/pages/services/service-5/(vCISO)/center-image.svg" alt="vCISO Visualization" className="w-full h-full object-contain opacity-100" />
               
               {/* Strategic Labels positioned relative to image */}
               <div className="hidden min-[1280px]:block absolute -left-[40px] top-[10%] bg-[#E9F0F7] p-[4px_12px] rounded-[20px] text-[10px] font-bold text-[#2E5A88] whitespace-nowrap z-10 shadow-sm border border-[#2E5A8820]">SECURITY STRATEGY</div>
               <div className="hidden min-[1280px]:block absolute -left-[20px] bottom-[20%] bg-[#E9F0F7] p-[4px_12px] rounded-[20px] text-[10px] font-bold text-[#2E5A88] whitespace-nowrap z-10 shadow-sm border border-[#2E5A8820]">RISK AND COMPLIANCE</div>
               <div className="hidden min-[1280px]:block absolute -right-[40px] top-[30%] bg-[#E9F0F7] p-[4px_12px] rounded-[20px] text-[10px] font-bold text-[#2E5A88] whitespace-nowrap z-10 shadow-sm border border-[#2E5A8820]">BOARD-READY REPORTING</div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-[30px] flex-1 max-w-[380px] w-full">
              {/* Card 3 */}
              <article className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[16px] p-[32px_24px] text-left relative shadow-sm min-h-[180px] flex flex-col justify-center">
                 <div className="w-[44px] h-[44px] bg-[#F8FAFF] rounded-[8px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(vCISO)/right-icon-1.svg" alt="" className="w-[24px] h-[24px]" />
                 </div>
                 <h3 className="text-[20px] font-bold text-[#030D1A] mb-[12px] pr-[40px]">What it can include</h3>
                 <p className="text-[14px] leading-[1.6] text-[#4A5568]">We can help with strategy, policy, compliance, vendor risk, incident readiness, and concise reporting that keeps leadership aligned.</p>
              </article>
              {/* Card 4 */}
              <article className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[16px] p-[32px_24px] text-left relative shadow-sm min-h-[180px] flex flex-col justify-center">
                 <div className="w-[44px] h-[44px] bg-[#F8FAFF] rounded-[8px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(vCISO)/reight-icon-2.svg" alt="" className="w-[24px] h-[24px]" />
                 </div>
                 <h3 className="text-[20px] font-bold text-[#030D1A] mb-[12px] pr-[40px]">Who benefits</h3>
                 <p className="text-[14px] leading-[1.6] text-[#4A5568]">It is a strong fit for growth-stage teams, regulated organizations, and companies that need security leadership to scale with the business.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
