"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isService2 = pathname.includes("service-2");

  return (
    <footer className="w-full bg-[#ffffff] relative overflow-hidden s-r-footer">
      <div className="w-full pt-[60px] pb-[20px] px-0">
        <div className="max-w-[1440px] mx-auto px-[40px] lg:px-[80px]">

          <div className="bg-[#000F2E] bg-[url('/bgcardFot.svg')] bg-cover bg-center rounded-[8px] w-full max-w-[1230px] h-auto md:min-h-[380px] mx-auto mb-[50px] text-center text-[#ffffff] flex flex-col items-center justify-center gap-[12px] relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.18)] p-[40px] md:p-[60px] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)] before:pointer-events-none s-r-footer-cta-banner">
            <div className="z-10 relative">
              <h2 className="font-sora text-[28px] md:text-[32px] font-semibold leading-[1.2] md:leading-[49px] m-0 max-w-[650px] mx-auto">
                {isService2 ? (
                  <>Ready to talk about your <br /> security goals?</>
                ) : (
                  "Contact Us Today"
                )}
              </h2>
              <p className="font-manrope text-[15px] md:text-[16px] font-normal leading-[30px] text-white my-[2px] mb-[12px] max-w-[600px] mx-auto">
                {isService2 ? (
                  <>Share where you are today and where you'd like to be, <br className="hidden md:block" /> we'll help you plan the next steps.</>
                ) : (
                  <>Ready to strengthen your cybersecurity posture? <br className="hidden md:block" /> Get in touch and we'll help you find the right solution.</>
                )}
              </p>
            </div>
            <Link href="/Contact" style={{ color: '#000000' }} className="z-10 relative inline-flex justify-center items-center w-auto min-w-[236px] h-[48px] py-[13px] px-[40px] bg-[#ffffff] rounded-[8px] !text-black font-manrope font-semibold text-[16px] leading-none no-underline border-none cursor-pointer transition-all duration-200 ease-in-out mt-[10px] whitespace-nowrap hover:-translate-y-[2px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:bg-[#f8fafc]">
              Contact Us
            </Link>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-[40px] pb-[60px] s-r-footer-content">

            <div className="flex-[0_0_100%] sm:flex-[0_0_45%] lg:flex-[1.5]">
              <div className="flex items-center gap-[12px] mb-[24px]">
                <img src="/images/Footer/icons-logo/logo.svg" alt="Cybervol Logo" className="h-[40px]" />
                <div className="flex flex-col">
                  <span className="font-sora text-[20px] font-bold text-[#0b1b33]">Cybervol</span>
                  <span className="font-manrope text-[11px] !text-[#585858]">by Rotvol Solutions</span>
                </div>
              </div>

              <p className="font-manrope text-[14px] leading-[1.6] !text-[#585858] max-w-[320px] mb-[24px]">
                Let's align our constellations! Reach out and let the magic of
                collaboration illuminate our skies.
              </p>

              <div className="flex gap-[12px]">
                <Link href="#" className="group flex items-center justify-center w-[32px] h-[32px] bg-[#f3f4f6] rounded-[6px] transition-all duration-200 ease-in-out hover:bg-[#0b1b33]">
                  <img src="/images/Footer/icons-logo/icon-1.svg" alt="Facebook" className="transition-all duration-200 ease-in-out group-hover:brightness-0 group-hover:invert" />
                </Link>
                <Link href="#" className="group flex items-center justify-center w-[32px] h-[32px] bg-[#f3f4f6] rounded-[6px] transition-all duration-200 ease-in-out hover:bg-[#0b1b33]">
                  <img src="/images/Footer/icons-logo/icon-2.svg" alt="Instagram" className="transition-all duration-200 ease-in-out group-hover:brightness-0 group-hover:invert" />
                </Link>
                <Link href="#" className="group flex items-center justify-center w-[32px] h-[32px] bg-[#f3f4f6] rounded-[6px] transition-all duration-200 ease-in-out hover:bg-[#0b1b33]">
                  <img src="/images/Footer/icons-logo/icon-3.svg" alt="X" className="transition-all duration-200 ease-in-out group-hover:brightness-0 group-hover:invert" />
                </Link>
                <Link href="#" className="group flex items-center justify-center w-[32px] h-[32px] bg-[#f3f4f6] rounded-[6px] transition-all duration-200 ease-in-out hover:bg-[#0b1b33]">
                  <img src="/images/Footer/icons-logo/icon-4.svg" alt="LinkedIn" className="transition-all duration-200 ease-in-out group-hover:brightness-0 group-hover:invert" />
                </Link>
              </div>
            </div>

            <div className="flex-[0_0_100%] sm:flex-[0_0_45%] lg:flex-1">
              <h3 className="font-sora text-[16px] font-semibold text-[#0b1b33] mb-[24px]">Company</h3>
              <ul className="list-none p-0 m-0">
                <li className="mb-[12px]"><Link href="/About2" className="font-manrope text-[14px] !text-[#585858] no-underline transition-colors duration-200 ease-in-out hover:text-[#0b1b33]">About us</Link></li>
                <li className="mb-[12px]"><Link href="#" className="font-manrope text-[14px] !text-[#585858] no-underline transition-colors duration-200 ease-in-out hover:text-[#0b1b33]">Career</Link></li>
                <li className="mb-[12px]"><Link href="/resources/Blog" className="font-manrope text-[14px] !text-[#585858] no-underline transition-colors duration-200 ease-in-out hover:text-[#0b1b33]">Blog</Link></li>
                <li className="mb-[12px]"><Link href="/resources/Webinars" className="font-manrope text-[14px] !text-[#585858] no-underline transition-colors duration-200 ease-in-out hover:text-[#0b1b33]">Webinars</Link></li>
                <li className="mb-[12px]"><Link href="/resources/Ebooks" className="font-manrope text-[14px] !text-[#585858] no-underline transition-colors duration-200 ease-in-out hover:text-[#0b1b33]">eBooks</Link></li>
                <li className="mb-[12px]"><Link href="/resources/DataSheet" className="font-manrope text-[14px] !text-[#585858] no-underline transition-colors duration-200 ease-in-out hover:text-[#0b1b33]">Data sheets</Link></li>
              </ul>
            </div>

            <div className="flex-[0_0_100%] sm:flex-[0_0_45%] lg:flex-1">
              <h3 className="font-sora text-[16px] font-semibold text-[#0b1b33] mb-[24px]">Services</h3>
              <ul className="list-none p-0 m-0">
                <li className="mb-[12px]"><Link href="/services/service-1" className="font-manrope text-[14px] !text-[#585858] no-underline transition-colors duration-200 ease-in-out hover:text-[#0b1b33]">CyberShield Solutions</Link></li>
                <li className="mb-[12px]"><Link href="/services/service-2" className="font-manrope text-[14px] !text-[#585858] no-underline transition-colors duration-200 ease-in-out hover:text-[#0b1b33]">Governance, Risk & Compliance (GRC)</Link></li>
                <li className="mb-[12px]"><Link href="/services/service-3" className="font-manrope text-[14px] !text-[#585858] no-underline transition-colors duration-200 ease-in-out hover:text-[#0b1b33]">Offensive Security</Link></li>
                <li className="mb-[12px]"><Link href="/services/service-4" className="font-manrope text-[14px] !text-[#585858] no-underline transition-colors duration-200 ease-in-out hover:text-[#0b1b33]">Security Awareness & Training</Link></li>
                <li className="mb-[12px]"><Link href="/services/service-6" className="font-manrope text-[14px] !text-[#585858] no-underline transition-colors duration-200 ease-in-out hover:text-[#0b1b33]">Managed Cybersecurity as a Service (MCaaS)</Link></li>
                <li className="mb-[12px]"><Link href="/services/service-5" className="font-manrope text-[14px] !text-[#585858] no-underline transition-colors duration-200 ease-in-out hover:text-[#0b1b33]">Training and Certifications</Link></li>
              </ul>
            </div>

            <div className="flex-[0_0_100%] sm:flex-[0_0_45%] lg:flex-[1.5]">
              <h3 className="font-sora text-[16px] font-semibold text-[#0b1b33] mb-[24px]">Contact Us</h3>
              <div className="flex flex-col gap-[16px]">
                <div className="flex gap-[12px] items-start">
                  <span className="w-[20px] shrink-0">
                    <img src="/images/Footer/icons-logo/icon-5.svg" alt="" />
                  </span>
                  <div className="font-manrope text-[14px] !text-[#585858]">
                    <p className="m-0">+1 (469) 488-3005</p>
                    <p className="m-0">+234 9137002111</p>
                  </div>
                </div>
                <div className="flex gap-[12px] items-start">
                  <span className="w-[20px] shrink-0">
                    <img src="/images/Footer/icons-logo/icon-6.svg" alt="" />
                  </span>
                  <p className="font-manrope text-[14px] !text-[#585858] m-0">info@cybervol.com</p>
                </div>
                <div className="flex gap-[12px] items-start">
                  <div className="font-manrope text-[14px] !text-[#585858]">
                    <p className="font-semibold text-[#0b1b33] mb-[4px] m-0">Dallas HQ: 1341 W. Mockingbird Lane,</p>
                    <p className="m-0">Suite 600W, Dallas, Texas 75247, USA.</p>
                  </div>
                </div>
                <div className="flex gap-[12px] items-start">
                  <div className="font-manrope text-[14px] !text-[#585858]">
                    <p className="font-semibold text-[#0b1b33] mb-[4px] m-0">Lagos Office: 232 Murtala Muhammed Way,</p>
                    <p className="m-0">Yaba Lagos 101245 Nigeria.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-[40px] flex justify-center border-b border-[#e5e7eb] pb-[40px]">
            <img src="/images/Footer/footer-waterpack.svg" alt="Cybervol watermark" />
          </div>

          <div className="flex justify-between items-center mt-[8px]">
            <p className="font-manrope text-[12px] !text-[#585858]">© 2025 Cybervol. All rights reserved.</p>
            <div className="flex gap-[8px] items-center">
              <Link href="#" className="font-manrope text-[12px] !text-[#585858] no-underline">Privacy Policy</Link>
              <span className="text-[#e5e7eb]">|</span>
              <Link href="#" className="font-manrope text-[12px] !text-[#585858] no-underline">Terms & conditions</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}