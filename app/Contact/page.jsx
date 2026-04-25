"use client";

import React from "react";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-[#ffffff]">
      {/* Hero Section */}
      <section className="relative w-full h-[550px] max-[1454px]:h-auto mx-auto flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/Contect/hero-bg.svg')] bg-cover bg-center bg-no-repeat bg-[#030D1A] opacity-100 p-[120px_20px_80px] max-[1454px]:p-[160px_20px_100px] text-center">
        <div className="relative w-full max-w-[850px] flex flex-col items-center gap-[24px] text-center z-[5] px-[20px] mx-auto">
          <div className="flex justify-center items-center w-auto h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px_24px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0">
            <span className="opacity-100 font-manrope font-semibold text-[14px] leading-none tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none whitespace-nowrap">GET IN TOUCH</span>
          </div>

          <h1 className="font-sora text-[48px] font-bold text-[#ffffff] w-full max-w-[750px] opacity-100 leading-[1.2] text-center [text-wrap:balance] mx-auto max-[1454px]:text-[clamp(36px,6vw,48px)] m-0">
            Contact Us
          </h1>

          <p className="font-manrope font-normal text-[18px] leading-[30px] text-[#EEEEEE] w-full max-w-[687px] opacity-100 text-center mx-auto max-[1454px]:h-auto max-[768px]:text-[16px] m-0">
            Have a question or need expert cybersecurity advice? Reach out to our team today and let's secure your future together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-[100px] px-[20px] bg-[#ffffff] w-full">
        <div className="max-w-[1203px] mx-auto bg-[#F9FAFB] rounded-[24px] p-[60px] flex gap-[60px] min-[1440px]:max-[2560px]:gap-[185px] max-[1024px]:flex-col max-[768px]:p-[40px_20px]">
          
          {/* Left Column */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-[#2E5A88] text-[36px] font-bold font-sora mb-[20px]">Let's connect</h2>
              <p className="text-[#A4A4A4] text-[16px] font-manrope leading-[1.6] max-w-[450px]">
                Tell us about your current security landscape, upcoming projects, or challenges you're facing. We'll respond with clear, actionable guidance.
              </p>
            </div>

            <div className="bg-[#2E5A88] rounded-[20px] p-[40px] mt-[40px] flex flex-col gap-[30px]">
              {/* Email */}
              <div className="flex gap-[20px] items-start">
                <div className="w-[40px] h-[40px] bg-white rounded-[8px] flex justify-center items-center shrink-0">
                  <img src="/images/pages/Contect/email.svg" alt="Email" className="w-[20px] h-[20px]" />
                </div>
                <div>
                  <h4 className="text-white font-bold font-sora text-[18px] mb-[4px]">Email</h4>
                  <p className="text-[#E2E8F0] font-manrope text-[15px]">info@cybervol.com</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex gap-[20px] items-start">
                <div className="w-[40px] h-[40px] bg-white rounded-[8px] flex justify-center items-center shrink-0">
                  <img src="/images/pages/Contect/phone-icon.svg" alt="Phone" className="w-[20px] h-[20px]" />
                </div>
                <div>
                  <h4 className="text-white font-bold font-sora text-[18px] mb-[4px]">Phone</h4>
                  <p className="text-[#E2E8F0] font-manrope text-[15px] leading-[1.6]">+1(469) 488-3005<br/>+234 9137002111</p>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex gap-[20px] items-start">
                <div className="w-[40px] h-[40px] bg-white rounded-[8px] flex justify-center items-center shrink-0">
                  <img src="/images/pages/Contect/location-icon.svg" alt="Location" className="w-[20px] h-[20px]" />
                </div>
                <div>
                  <h4 className="text-white font-bold font-sora text-[18px] mb-[4px]">Location</h4>
                  <p className="text-[#E2E8F0] font-manrope text-[15px] leading-[1.6] mb-[10px]">Dallas HQ: 1341 W. Mockingbird Lane, Suite 600W, Dallas, Texas 75247, USA</p>
                  <p className="text-[#E2E8F0] font-manrope text-[15px] leading-[1.6]">Lagos Office: 232 Murtala Muhammed Way, Yaba Lagos 101245 Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex-[1.2]">
            <form className="flex flex-col gap-[24px]">
              <div className="grid grid-cols-2 gap-[24px] max-[768px]:grid-cols-1">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] font-bold text-[#030D1A] font-manrope">First Name:</label>
                  <input type="text" placeholder="Write here" className="h-[56px] px-[20px] rounded-[12px] bg-white border border-[#EFEFEF] outline-none font-manrope text-[#030D1A] focus:border-[#2E5A88] placeholder:text-[#A4A4A4]" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] font-bold text-[#030D1A] font-manrope">Last Name:</label>
                  <input type="text" placeholder="Write here" className="h-[56px] px-[20px] rounded-[12px] bg-white border border-[#EFEFEF] outline-none font-manrope text-[#030D1A] focus:border-[#2E5A88] placeholder:text-[#A4A4A4]" />
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-bold text-[#030D1A] font-manrope">Email:</label>
                <input type="email" placeholder="Write here" className="h-[56px] px-[20px] rounded-[12px] bg-white border border-[#EFEFEF] outline-none font-manrope text-[#030D1A] focus:border-[#2E5A88] placeholder:text-[#A4A4A4]" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-bold text-[#030D1A] font-manrope">Phone Number:</label>
                <input type="text" placeholder="Write here" className="h-[56px] px-[20px] rounded-[12px] bg-white border border-[#EFEFEF] outline-none font-manrope text-[#030D1A] focus:border-[#2E5A88] placeholder:text-[#A4A4A4]" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-bold text-[#030D1A] font-manrope">Message:</label>
                <textarea placeholder="Write here" className="h-[150px] p-[20px] rounded-[12px] bg-white border border-[#EFEFEF] outline-none font-manrope text-[#030D1A] focus:border-[#2E5A88] resize-none placeholder:text-[#A4A4A4]"></textarea>
              </div>
              <div className="flex justify-end mt-[10px]">
                <button className="w-[140px] h-[50px] bg-[#2E5A88] text-white font-bold text-[16px] rounded-[8px] transition-all duration-300 hover:bg-[#1A3F66] shadow-md">
                  Submit
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </section>
    </div>
  );
}
