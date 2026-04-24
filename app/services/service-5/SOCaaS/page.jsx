"use client";

import React from "react";

export default function SOCaaSPage() {
  return (
    <div className="w-full min-h-screen bg-[#ffffff]">
      {/* Hero Section */}
      <section className="relative w-full h-[556px] max-[1454px]:h-auto mx-auto flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/services/service-5/(SOCaaS)/hero-bg.svg')] bg-cover bg-center bg-no-repeat bg-[#030D1A] opacity-100 p-[100px_20px_60px] max-[1454px]:p-[160px_20px_100px] text-center max-[1454px]:w-full max-[1454px]:left-0">
        <div className="relative w-full max-w-[850px] flex flex-col items-center gap-[21px] text-center z-[5] px-[20px] max-[1454px]:mx-auto">
          <div className="flex justify-center items-center w-auto min-w-[365px] h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px_24px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0">
            <span className="opacity-100 font-manrope font-semibold text-[14px] leading-none tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none whitespace-nowrap">MANAGED CYBERSECURITY AS A SERVICE</span>
          </div>

          <h1 className="font-sora text-[40px] font-semibold text-[#ffffff] w-full max-w-[750px] opacity-100 leading-[1.3] text-center [text-wrap:balance] mx-auto max-[1454px]:h-auto max-[1454px]:text-[clamp(32px,5vw,40px)] max-[1454px]:leading-normal m-0">
            Security Operations Center-as-a-Service (SOCaaS)
          </h1>

          <p className="font-manrope font-normal text-[18px] leading-[30px] text-[#EEEEEE] w-full max-w-[687px] opacity-100 text-center mx-auto max-[1454px]:h-auto max-[768px]:text-[16px] m-0">
            Continuous threat visibility, rapid incident response, and real-time threat analysis—all delivered through a fully managed SOC service.
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="p-[120px_20px] bg-[#ffffff]">
        <div className="max-w-[1230px] mx-auto text-center">
          <h2 className="font-sora text-[40px] font-bold text-[#030D1A] mb-[80px] max-[768px]:text-[32px]">
            Why Choose <span className="text-[#2E5A88]">(SOCaaS)</span>
          </h2>
          
          <div className="flex flex-row items-center justify-center gap-[40px] max-[1024px]:flex-col relative">
            {/* Left Column */}
            <div className="flex flex-col gap-[30px] flex-1 max-w-[380px] w-full">
              {/* Card 1 */}
              <article className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[16px] p-[32px_24px] text-left relative shadow-sm min-h-[180px] flex flex-col justify-center">
                 <div className="w-[44px] h-[44px] bg-[#F8FAFF] rounded-[8px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(SOCaaS)/left-colum-1.svg" alt="" className="w-[24px] h-[24px]" />
                 </div>
                 <h3 className="text-[20px] font-bold text-[#030D1A] mb-[12px] pr-[40px]">What is SOCaaS?</h3>
                 <p className="text-[14px] leading-[1.6] text-[#4A5568]">A fully managed, 24/7 security service that delivers expert threat detection, and response.</p>
              </article>
              {/* Card 2 */}
              <article className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[16px] p-[32px_24px] text-left relative shadow-sm min-h-[180px] flex flex-col justify-center">
                 <div className="w-[44px] h-[44px] bg-[#F8FAFF] rounded-[8px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(SOCaaS)/left-colum-2.svg" alt="" className="w-[24px] h-[24px]" />
                 </div>
                 <h3 className="text-[20px] font-bold text-[#030D1A] mb-[12px] pr-[40px]">Why organizations use it</h3>
                 <p className="text-[14px] leading-[1.6] text-[#4A5568]">To gain high-end security monitoring without the costs and complexity of building an in-house SOC.</p>
              </article>
            </div>

            {/* Center Image with Labels */}
            <div className="w-[473px] h-[545px] flex-shrink-0 relative flex items-center justify-center py-[20px] max-[1024px]:w-full max-[1024px]:h-auto">
               <img src="/images/pages/services/service-5/(SOCaaS)/center-image.svg" alt="SOCaaS Visualization" className="w-full h-full object-contain opacity-100 rounded-[16px]" />
               
               {/* Strategic Labels positioned relative to image */}
               <div className="hidden min-[1280px]:block absolute -left-[40px] top-[15%] bg-[#E9F0F7] p-[4px_12px] rounded-[20px] text-[10px] font-bold text-[#2E5A88] whitespace-nowrap z-10 shadow-sm border border-[#2E5A8820]">24/7 MONITORING</div>
               <div className="hidden min-[1280px]:block absolute -right-[20px] top-[40%] bg-[#E9F0F7] p-[4px_12px] rounded-[20px] text-[10px] font-bold text-[#2E5A88] whitespace-nowrap z-10 shadow-sm border border-[#2E5A8820]">EXPERT ANALYSIS</div>
               <div className="hidden min-[1280px]:block absolute -left-[30px] bottom-[20%] bg-[#E9F0F7] p-[4px_12px] rounded-[20px] text-[10px] font-bold text-[#2E5A88] whitespace-nowrap z-10 shadow-sm border border-[#2E5A8820]">RAPID RESPONSE</div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-[30px] flex-1 max-w-[380px] w-full">
              {/* Card 3 */}
              <article className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[16px] p-[32px_24px] text-left relative shadow-sm min-h-[180px] flex flex-col justify-center">
                 <div className="w-[44px] h-[44px] bg-[#F8FAFF] rounded-[8px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(SOCaaS)/right-colum-1.svg" alt="" className="w-[24px] h-[24px]" />
                 </div>
                 <h3 className="text-[20px] font-bold text-[#030D1A] mb-[12px] pr-[40px]">How it works</h3>
                 <p className="text-[14px] leading-[1.6] text-[#4A5568]">We collect logs, analyze threats using AI and expert analysts, and provide actionable alerts and incident response.</p>
              </article>
              {/* Card 4 */}
              <article className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[16px] p-[32px_24px] text-left relative shadow-sm min-h-[180px] flex flex-col justify-center">
                 <div className="w-[44px] h-[44px] bg-[#F8FAFF] rounded-[8px] flex items-center justify-center absolute top-[24px] right-[24px]">
                   <img src="/images/pages/services/service-5/(SOCaaS)/right-cloum-2.svg" alt="" className="w-[24px] h-[24px]" />
                 </div>
                 <h3 className="text-[20px] font-bold text-[#030D1A] mb-[12px] pr-[40px]">Who benefits</h3>
                 <p className="text-[14px] leading-[1.6] text-[#4A5568]">Ideal for companies needing round-the-clock protection, compliance assurance, and advanced threat hunting.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
