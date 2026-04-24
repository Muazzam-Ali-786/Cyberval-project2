"use client";

export default function ServiceFourPage() {
  return (
    <div className="w-full min-h-screen bg-[#ffffff]">
      {/* Hero Section */}
      <section className="relative w-full h-[556px] max-[1454px]:h-auto mx-auto flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/services/service-4/hero-bg.svg')] bg-cover bg-center bg-no-repeat bg-[#030D1A] opacity-100 p-[100px_20px_60px] max-[1454px]:p-[160px_20px_100px] text-center max-[1454px]:w-full max-[1454px]:left-0">
        <div className="absolute top-[184px] left-[367px] w-[721px] h-[216px] flex flex-col items-center z-[5] opacity-100 max-[1454px]:relative max-[1454px]:top-0 max-[1454px]:left-0 max-[1454px]:w-full max-[1454px]:max-w-[721px] max-[1454px]:h-auto max-[1454px]:mx-auto">
          <div className="flex justify-center items-center w-[128px] h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] opacity-100">
            <span className="flex justify-center items-center w-[75px] h-[37px] opacity-100 font-manrope font-semibold text-[14px] leading-[36.54px] tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none">SERVICES</span>
          </div>

          <h1 className="font-sora text-[40px] font-semibold text-[#ffffff] w-[721px] h-[57px] opacity-100 leading-[57px] text-center [text-wrap:balance] mx-auto max-[1454px]:w-full max-[1454px]:h-auto max-[1454px]:text-[clamp(32px,5vw,40px)] max-[1454px]:leading-normal m-[21px_0]">
            Awareness & Training
          </h1>

          <p className="font-manrope font-normal text-[18px] leading-[30px] text-[#EEEEEE] w-[721px] h-[90px] opacity-100 text-center mx-auto max-[1454px]:w-full max-[1454px]:h-auto max-[768px]:text-[16px] m-0">
            At Cybervol, effective cybersecurity starts with informed people. Our Security Awareness & Training service equips your workforce with the knowledge and vigilance needed to recognize and respond to cyber threats.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#ffffff] p-[100px_20px_120px] text-[#111827]" aria-labelledby="s4-defense-heading">
        <div className="max-w-[1230px] mx-auto">
          <header className="flex justify-between items-start gap-[40px] mb-[48px] max-[900px]:flex-col max-[900px]:gap-[20px]">
            <h2 id="s4-defense-heading" className="flex-[0_1_560px] m-0 font-sora font-semibold text-[36px] leading-[1.25] tracking-[-0.02em] text-[#212121] max-[900px]:flex-none max-[900px]:max-w-none max-[900px]:text-[30px]">
              Strengthening Your First Line of{" "}
              <span className="text-[#2e5a88]">Defense</span>
            </h2>
            <p className="flex-[0_0_560px] max-w-[560px] m-0 text-right font-manrope font-normal text-[16px] leading-[30px] text-[#6b7280] max-[900px]:flex-none max-[900px]:max-w-none max-[900px]:text-left">
              Empowering Your Workforce with Essential Practical Skills to Effectively Detect, Prevent, and Respond to a Wide Range of Cyber Threats.
            </p>
          </header>

          <div className="flex flex-row items-stretch justify-start gap-[24px] w-full max-[1220px]:flex-col max-[1220px]:items-center">
            <article className="bg-[#f6f8fb] rounded-[20px] opacity-100 overflow-hidden box-border relative w-[379px] h-[575px] shrink-0 flex flex-col border border-[#c5d6e8] max-[1220px]:w-full max-[1220px]:max-w-[379px] max-[1220px]:h-auto max-[1220px]:min-h-[575px] max-[900px]:min-h-[520px]">
              <div className="shrink-0 w-full p-[13px_13px_0_13px] box-border flex justify-center bg-transparent">
                <img
                  src="/images/pages/services/service-4/card-image-1.svg"
                  alt=""
                  className="block w-[353px] h-[280px] opacity-100 object-cover rounded-[11px] max-[1220px]:max-w-full max-[1220px]:w-[min(353px,100%)] max-[1220px]:h-auto max-[1220px]:min-h-[200px]"
                />
              </div>
              <div className="relative flex-1 min-h-0 p-[22px_22px_64px] flex flex-col">
                <h3 className="m-[0_0_12px] font-sora font-semibold text-[18px] leading-[1.35] text-[#1f2937]">Cybersecurity Program</h3>
                <p className="m-0 font-manrope font-normal text-[14px] leading-[22px] text-[#6b7280] flex-1 min-h-0">
                  Tailored, role-based training programs that cover essential cybersecurity topics—aligned with industry best practices and compliance requirements.
                </p>
                <div className="absolute right-[20px] bottom-[20px] rounded-[10px] flex items-center justify-center" aria-hidden="true">
                  <img
                    src="/images/pages/services/service-4/icon1.svg"
                    alt=""
                    className="w-[40px] h-[40px] object-contain block"
                  />
                </div>
              </div>
            </article>

            <div className="w-[379px] h-[575px] shrink-0 flex flex-col gap-[20px] max-[1220px]:w-full max-[1220px]:max-w-[379px] max-[1220px]:h-auto">
              <article className="bg-[#f6f8fb] rounded-[20px] opacity-100 overflow-hidden box-border relative flex-1 min-h-0 flex flex-col max-[900px]:min-h-[260px]">
                <div className="relative flex-1 min-h-0 p-[24px_22px_64px] h-full flex flex-col">
                  <h3 className="m-[0_0_12px] font-sora font-semibold text-[18px] leading-[1.35] text-[#1f2937]">Phishing Simulations</h3>
                  <p className="m-0 font-manrope font-normal text-[14px] leading-[22px] text-[#6b7280] flex-1 min-h-0">
                    Realistic and customizable phishing campaigns to test employee awareness and response. Gain insights into vulnerabilities in user behavior and deliver targeted reinforcement training where needed.
                  </p>
                  <div className="absolute right-[20px] bottom-[20px] rounded-[10px] flex items-center justify-center" aria-hidden="true">
                    <img
                      src="/images/pages/services/service-4/icon-2.svg"
                      alt=""
                      className="w-[40px] h-[40px] object-contain block"
                    />
                  </div>
                </div>
              </article>

              <article className="bg-[#f6f8fb] rounded-[20px] opacity-100 overflow-hidden box-border relative flex-1 min-h-0 flex flex-col max-[900px]:min-h-[260px]">
                <div className="relative flex-1 min-h-0 p-[24px_22px_64px] h-full flex flex-col">
                  <h3 className="m-[0_0_12px] font-sora font-semibold text-[18px] leading-[1.35] text-[#1f2937]">Interactive Workshops</h3>
                  <p className="m-0 font-manrope font-normal text-[14px] leading-[22px] text-[#6b7280] flex-1 min-h-0">
                    Engaging, hands-on sessions that go beyond lectures—teaching through real-life scenarios, attack demonstrations, and response exercises to embed lasting cybersecurity habits across your workforce.
                  </p>
                  <div className="absolute right-[20px] bottom-[20px] rounded-[10px] flex items-center justify-center" aria-hidden="true">
                    <img
                      src="/images/pages/services/service-4/icon-3.svg"
                      alt=""
                      className="w-[40px] h-[40px] object-contain block"
                    />
                  </div>
                </div>
              </article>
            </div>

            <article className="bg-[#f6f8fb] rounded-[20px] opacity-100 overflow-hidden box-border relative w-[379px] h-[575px] shrink-0 flex flex-col max-[1220px]:w-full max-[1220px]:max-w-[379px] max-[1220px]:h-auto max-[1220px]:min-h-[575px] max-[900px]:min-h-[520px]">
              <div className="shrink-0 w-full p-[13px_13px_0_13px] box-border flex justify-center bg-transparent">
                <img
                  src="/images/pages/services/service-4/card-image-2.svg"
                  alt=""
                  className="block w-[353px] h-[287px] opacity-100 object-cover rounded-[11px] max-[1220px]:max-w-full max-[1220px]:w-[min(353px,100%)] max-[1220px]:h-auto max-[1220px]:min-h-[200px]"
                />
              </div>
              <div className="relative flex-1 min-h-0 p-[22px_22px_64px] flex flex-col">
                <h3 className="m-[0_0_12px] font-sora font-semibold text-[18px] leading-[1.35] text-[#1f2937]">Measurement & Improvement</h3>
                <p className="m-0 font-manrope font-normal text-[14px] leading-[22px] text-[#6b7280] flex-1 min-h-0">
                  Track progress through analytics and reporting dashboards. Measure risk reduction, training effectiveness, and behavioral changes over time to continuously optimize your human-centric defense program.
                </p>
                <div className="absolute right-[20px] bottom-[20px] rounded-[10px] flex items-center justify-center" aria-hidden="true">
                  <img
                    src="/images/pages/services/service-4/icon-4.svg"
                    alt=""
                    className="w-[40px] h-[40px] object-contain block"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
