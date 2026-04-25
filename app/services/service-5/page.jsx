"use client";

import React from "react";
import Link from "next/link";

export default function ServiceFivePage() {
  return (
    <main className="w-full min-h-screen bg-[#ffffff] mt-[-10px]">
      {/* Hero Section */}
      <section className="relative w-full h-auto opacity-100 mx-auto bg-[url('/images/pages/services/service-5/hero-bg.svg')] bg-cover bg-center bg-no-repeat bg-[#030D1A] flex justify-center items-center overflow-hidden max-[1454px]:p-[160px_20px_100px]">
        <div className="relative w-full h-auto max-w-[850px] flex flex-col items-center text-center p-[14px] z-[2]">
           <div className="w-[128px] h-[38px] flex items-center justify-center gap-[8.12px] rounded-[27.61px] p-[8.12px] border-[0.81px] border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.07)] m-0 backdrop-blur-[4px] mb-[3px]">
            <span className="w-[75px] h-[37px] opacity-100 font-manrope font-semibold text-[14px] leading-[36.54px] tracking-[0.09em] uppercase text-[#FFFFFF]">SERVICES</span>
          </div>
          <h1 className="max-w-[643px] h-auto opacity-100 font-sora font-semibold text-[40px] leading-[57px] tracking-[0] text-center m-0 text-[#FFFFFF] max-[768px]:text-[32px]">
            Managed Cybersecurity as a Service (MCaaS)
          </h1>
          <p className="max-w-[679px] h-auto opacity-100 font-manrope font-normal text-[18px] leading-[30px] tracking-[0] text-center text-[#EEEEEE] max-[768px]:text-[16px]">
            At Cybervol, our Managed Cybersecurity as a Service (MCaaS) provides
            continuous monitoring and proactive protection, delivering tailored
            security solutions that keep your business resilient and compliant
            against evolving threats.
          </p>
        </div>
      </section>

      {/* VMPTaaS Section */}
      <section className="p-[120px_0] bg-[#ffffff]">
        <div className="w-full max-w-[1230px] mx-auto px-[20px] flex items-center justify-between gap-[80px] max-[1024px]:flex-col max-[1024px]:gap-[60px] max-[1024px]:text-center">
          <div className="flex-1 flex justify-center">
            <img
              src="/images/pages/services/service-5/section-1-icon.svg"
              alt="VMPTaaS"
              className="w-full max-w-[550px] h-auto"
            />
          </div>
          <div className="flex-1 flex flex-col items-start max-[1024px]:items-center">
            <h2 className="text-[42px] font-bold text-[#030D1A] leading-[1.2] mb-[24px] max-[1024px]:text-[32px]">
              Vulnerability Management & Penetration Testing as a Service{" "}
              <span className="text-[#2E5A88]">(VMPTaaS)</span>
            </h2>
            <p className="text-[16px] leading-[1.7] text-[#4A5568] mb-[40px]">
              Continuously identify, assess, and prioritize vulnerabilities
              across your infrastructure while simulating real-world attacks to
              validate the effectiveness of your defenses. Our automated and
              expert-driven approach not only highlights security gaps but also
              tests their exploitability—ensuring risks are addressed
              proactively and in alignment with business impact.
            </p>
            <Link href="/services/service-5/VMPTaaS">
              <button className="p-[14px_28px] bg-transparent border border-[#030D1A] text-[#030D1A] text-[14px] font-semibold rounded-[8px] cursor-pointer transition-all duration-300 ease hover:bg-[#030D1A] hover:text-[#FFFFFF]">Learn more about VMPTaaS</button>
            </Link>
          </div>
        </div>
      </section>
        
      {/* vCISO Section */}
      <section className="p-[120px_0] bg-[#F8FAFF]">
        <div className="w-full max-w-[1230px] mx-auto px-[20px] flex items-center justify-between gap-[80px] max-[1024px]:flex-col-reverse max-[1024px]:gap-[60px] max-[1024px]:text-center">
          <div className="flex-1 flex flex-col items-start max-[1024px]:items-center">
            <h2 className="text-[42px] font-bold text-[#030D1A] leading-[1.2] mb-[24px] max-[1024px]:text-[32px]">
              Virtual CISO <span className="text-[#2E5A88]">(vCISO)</span>
            </h2>
            <p className="text-[16px] leading-[1.7] text-[#4A5568] mb-[40px]">
              Gain access to strategic cybersecurity leadership for risk
              management, governance, and compliance. Our vCISO service delivers
              tailored guidance to strengthen your security posture—cost-effectively
              and on-demand.
            </p>
            <Link href="/services/service-5/vCISO">
              <button className="p-[14px_28px] bg-transparent border border-[#030D1A] text-[#030D1A] text-[14px] font-semibold rounded-[8px] cursor-pointer transition-all duration-300 ease hover:bg-[#030D1A] hover:text-[#FFFFFF]">Learn more about vCISO</button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/images/pages/services/service-5/section-2-icon.svg"
              alt="vCISO"
              className="w-full max-w-[550px] h-auto"
            />
          </div>
        </div>
      </section>
        
      {/* SOCaaS Section */}
      <section className="p-[120px_0] bg-[#ffffff]">
        <div className="w-full max-w-[1230px] mx-auto px-[20px] flex items-center justify-between gap-[80px] max-[1024px]:flex-col max-[1024px]:gap-[60px] max-[1024px]:text-center">
          <div className="flex-1 flex justify-center">
            <img
              src="/images/pages/services/service-5/section-3-icon.svg"
              alt="SOCaaS"
              className="w-full max-w-[550px] h-auto"
            />
          </div>
          <div className="flex-1 flex flex-col items-start max-[1024px]:items-center">
            <h2 className="text-[42px] font-bold text-[#030D1A] leading-[1.2] mb-[24px] max-[1024px]:text-[32px]">
              Security Operations Center-as-a-Service{" "}
              <span className="text-[#2E5A88]">(SOCaaS)</span>
            </h2>
            <p className="text-[16px] leading-[1.7] text-[#4A5568] mb-[40px]">
              Gain continuous, expert-driven threat monitoring without the
              overhead of building an in-house team. Our SOC-as-a-Service
              (SOCaaS) delivers real-time detection, rapid incident response,
              and advanced analytics to keep your organization secure—24/7. With
              scalable, cost-effective protection tailored to your environment,
              we help you stay ahead of evolving cyber threats while reducing
              operational complexity.
            </p>
            <Link href="/services/service-5/SOCaaS">
              <button className="p-[14px_28px] bg-transparent border border-[#030D1A] text-[#030D1A] text-[14px] font-semibold rounded-[8px] cursor-pointer transition-all duration-300 ease hover:bg-[#030D1A] hover:text-[#FFFFFF]">Learn more about SOCaaS</button>
            </Link>
          </div>
        </div>
      </section>
      {/* Why Choose Section */}
      <section className="p-[120px_0] bg-[#F8FAFF] text-center">
        <h2 className="text-[36px] font-bold text-[#030D1A] mb-[60px]">
          Why Choose <span className="text-[#2E5A88]">MCaaS</span>
        </h2>

        <div className="w-full max-w-[1230px] mx-auto px-[20px] grid grid-cols-[1fr_1.2fr_1fr] gap-[24px] items-stretch max-[1024px]:grid-cols-1 max-[1024px]:gap-[32px]">
          {/* Left Column */}
          <div className="flex flex-col gap-[24px]">
            <div className="bg-[#FFFFFF] rounded-[16px] p-[32px] text-left flex flex-col justify-center min-h-[250px] relative shadow-[0px_4px_14px_rgba(46,90,136,0.05)]">
              <div className="w-[48px] h-[48px] bg-[#F8FAFF] rounded-[8px] flex items-center justify-center mb-[24px] absolute top-[24px] right-[24px]">
                <img
                  src="/images/pages/services/service-5/section-4-left-colum-icon-1.svg"
                  alt="Trust"
                  className="w-[24px] h-[24px]"
                />
              </div>
              <h3 className="text-[20px] font-bold text-[#030D1A] mb-[12px]">Unparalleled trust</h3>
              <p className="text-[14px] leading-[1.6] text-[#4A5568]">Build next-level security & customer trust</p>
            </div>
            <div className="bg-[#FFFFFF] rounded-[16px] p-[32px] text-left flex flex-col justify-center min-h-[250px] relative shadow-[0px_4px_14px_rgba(46,90,136,0.05)]">
              <div className="w-[48px] h-[48px] bg-[#F8FAFF] rounded-[8px] flex items-center justify-center mb-[24px] absolute top-[24px] right-[24px]">
                <img
                  src="/images/pages/services/service-5/section-4-left-colum-icon-.svg"
                  alt="Innovation"
                  className="w-[24px] h-[24px]"
                />
              </div>
              <h3 className="text-[20px] font-bold text-[#030D1A] mb-[12px]">Focus on business innovation</h3>
              <p className="text-[14px] leading-[1.6] text-[#4A5568]">
                Offload the burden of managing complex security issues and focus
                on business growth and innovation
              </p>
            </div>
          </div>

          {/* Center Column */}
          <div className="relative rounded-[16px] overflow-hidden h-full max-[1024px]:h-[400px] max-[1024px]:order-[-1]">
            <img
              src="/images/pages/services/service-5/section-4-center-icon.svg"
              alt="Cyber Defense"
              className="w-full h-full object-cover"
            />
           
            <div className="absolute bottom-[24px] left-[24px] right-[24px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.2)] rounded-[12px] p-[24px] text-left text-[#FFFFFF]">
              <h3 className="text-[20px] font-bold mb-[8px] text-[#FFFFFF]">Expert led cyber defense</h3>
              <p className="text-[14px] leading-[1.5] text-[rgba(255,255,255,0.9)]">
                Access top-tier cybersecurity professionals who leverage
                advanced tools and frameworks to safeguard your digital assets
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-[24px]">
            <div className="bg-[#FFFFFF] rounded-[16px] p-[32px] text-left flex flex-col justify-center min-h-[250px] relative shadow-[0px_4px_14px_rgba(46,90,136,0.05)]">
              <div className="w-[48px] h-[48px] bg-[#F8FAFF] rounded-[8px] flex items-center justify-center mb-[24px] absolute top-[24px] right-[24px]">
                <img
                  src="/images/pages/services/service-5/section-4-right-cloum-icon-1.svg"
                  alt="Proactive"
                  className="w-[24px] h-[24px]"
                />
              </div>
              <h3 className="text-[20px] font-bold text-[#030D1A] mb-[12px]">Proactive threat management</h3>
              <p className="text-[14px] leading-[1.6] text-[#4A5568]">
                Continuous monitoring, real-time threat detection, and rapid
                incident response to keep your business secure.
              </p>
            </div>
            <div className="bg-[#FFFFFF] rounded-[16px] p-[32px] text-left flex flex-col justify-center min-h-[250px] relative shadow-[0px_4px_14px_rgba(46,90,136,0.05)]">
              <div className="w-[48px] h-[48px] bg-[#F8FAFF] rounded-[8px] flex items-center justify-center mb-[24px] absolute top-[24px] right-[24px]">
                <img
                  src="/images/pages/services/service-5/section-4-right-colum-icon-2.svg"
                  alt="Solutions"
                  className="w-[24px] h-[24px]"
                />
              </div>
              <h3 className="text-[20px] font-bold text-[#030D1A] mb-[12px]">Tailored security solutions</h3>
              <p className="text-[14px] leading-[1.6] text-[#4A5568]">
                Customized to fit your unique security needs, leveraging a
                risk-based approach to build resilience against evolving
                threats.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
