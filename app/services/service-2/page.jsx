"use client";

const journeyCards = [
  {
    id: "program",
    title: "Cybersecurity Program",
    desc: "Establish and manage a strategic cybersecurity program aligned with business goals, risk tolerance, and regulatory expectations to ensure continuous protection and improvement",
    icon: "/images/pages/services/service-2/icon-1.svg",
  },
  {
    id: "continuity",
    title: "Business Continuity",
    desc: "Develop and implement continuity plans that ensure mission-critical operations remain functional during disruptions, with recovery strategies that minimize downtime and data loss",
    icon: "/images/pages/services/service-2/icon-2.svg",
  },
  {
    id: "compliance",
    title: "Security & Privacy Compliance",
    desc: "Achieve and sustain compliance with key standards and frameworks including NIST, ISO 27001, HITRUST, SOC 2, GDPR, NDPR, and PCI-DSS, through well-defined security and privacy controls.",
    icon: "/images/pages/services/service-2/icon-3.svg",
  },
  {
    id: "maturity",
    title: "Cyber Maturity & Risk Assessment",
    desc: "Evaluate your organization's cybersecurity maturity, identify control gaps, and prioritize risk mitigation strategies to enhance resilience and reduce exposure.",
    icon: "/images/pages/services/service-2/icon-4.svg",
  },
];

export default function ServiceTwoPage() {
  return (
    <div className="about-page-container">
      <section className="relative w-[1440px] max-w-full h-[556px] mx-auto bg-[url('/images/pages/services/service-2/service-2-hero-bg.svg')] bg-cover bg-center bg-no-repeat flex justify-center max-[1440px]:w-full max-[768px]:h-auto max-[768px]:min-h-[480px] max-[768px]:p-[100px_20px]">
        <div className="absolute w-[795px] h-[216px] top-[184px] flex flex-col items-center gap-[21px] text-center max-[1440px]:left-1/2 max-[1440px]:-translate-x-1/2 max-[768px]:relative max-[768px]:w-full max-[768px]:h-auto max-[768px]:top-0 max-[768px]:left-0 max-[768px]:translate-x-0">
          <div className="flex justify-center items-center w-[128px] h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] opacity-100 m-0">
            <span className="flex justify-center items-center w-[75px] h-[37px] opacity-100 font-manrope font-semibold text-[14px] leading-[36.54px] tracking-[0.09em] uppercase text-[#FFFFFF] bg-transparent border-none">SERVICES</span>
          </div>

          <h1 className="w-[795px] h-[57px] m-0 max-w-none font-sora text-[40px] font-semibold text-[#ffffff] leading-[57px] text-center max-[768px]:w-full max-[768px]:h-auto">
            Governance, Risk & Compliance (GRC)
          </h1>

          <p className="w-[795px] h-[90px] m-0 max-w-none font-manrope font-normal text-[18px] leading-[30px] text-[#EEEEEE] text-center max-[768px]:w-full max-[768px]:h-auto">
            At Cybervol, we partner with leading cybersecurity vendors to deliver robust, integrated solutions that protect your digital assets, ensure compliance, and build digital trust — all while adapting to an ever-evolving threat landscape.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#ffffff] p-[100px_20px_120px] text-[#111827]" aria-labelledby="s2-journey-heading">
        <div className="max-w-[1230px] mx-auto">
          <header className="flex justify-between items-start gap-[40px] mb-[48px] max-[900px]:flex-col max-[900px]:gap-[20px]">
            <h2 id="s2-journey-heading" className="flex-[0_1_520px] m-0 font-sora font-semibold text-[36px] leading-[1.25] tracking-[-0.02em] text-[#212121] max-[900px]:flex-none max-[900px]:max-w-none max-[900px]:text-[30px]">
              Empowering Your{" "}
              <span className="text-[#2e5a88]">Security Journey</span>
            </h2>
            <p className="flex-[0_0_600px] max-w-[600px] m-0 text-right font-manrope font-normal text-[16px] leading-[30px] text-[#6b7280] max-[900px]:flex-none max-[900px]:max-w-none max-[900px]:text-left">
              Our holistic approach covers everything from initial risk assessments to ensuring ongoing compliance and maintaining business continuity, all within a unified strategic framework.
            </p>
          </header>

          <div className="flex flex-row items-stretch gap-[20px] w-full max-w-[1230px] min-h-[640px] max-[1200px]:flex-col max-[1200px]:min-h-0">
            <div className="flex-[1_1_730px] min-w-0 grid grid-cols-2 grid-rows-2 gap-[20px] max-[1200px]:flex-none max-[1200px]:w-full max-[900px]:grid-cols-1 max-[900px]:grid-rows-auto">
              {journeyCards.map((card) => (
                <article key={card.id} className="relative w-full h-full min-h-[280px] m-0 p-[28px_28px_72px] bg-[#f3f6fa] rounded-[18px] overflow-hidden flex flex-col box-border max-[900px]:min-h-0">
                  <div className="relative z-[1] flex-1 min-h-0">
                    <h3 className="m-[0_0_10px] font-sora font-semibold text-[18px] leading-[1.35] text-[#1f2937]">{card.title}</h3>
                    <p className="m-0 font-manrope font-normal text-[14px] leading-[22px] text-[#6b7280]">{card.desc}</p>
                  </div>
                  <div className="absolute right-[22px] bottom-[22px] w-[52px] h-[52px] rounded-[12px] bg-[rgba(46,90,136,0.12)] flex items-center justify-center z-[2]" aria-hidden="true">
                    <img src={card.icon} alt="" className="w-[28px] h-[28px] object-contain block" />
                  </div>
                </article>
              ))}
            </div>

            <article className="relative flex-[0_0_428px] w-[428px] h-[608px] m-0 rounded-[20px] opacity-100 overflow-hidden bg-[#0b1a33] bg-[url('/images/pages/services/service-2/right-card-image.svg')] bg-cover bg-center box-border max-[1200px]:flex-none max-[1200px]:w-full max-[1200px]:h-[420px]">
              <div className="absolute w-[397px] h-[209px] top-[383px] left-[15.5px] bg-[rgba(255,255,255,0.1)] rounded-[20px] opacity-100 flex flex-col items-center justify-center backdrop-blur-xl border border-[rgba(255,255,255,0.15)] shadow-lg px-[20px]">
                <div className="w-full flex flex-col gap-[8px]">
                  <h3 className="m-0 font-sora font-semibold text-[18px] leading-[1.2] tracking-normal text-[#ffffff] opacity-100">Third Party Risk Assessment</h3>
                  <p className="m-0 font-manrope font-normal text-[14px] leading-[24px] tracking-normal text-[#ffffff] opacity-100">
                    Assess, monitor, and mitigate risks associated with vendors, suppliers, and other third parties to ensure security and compliance across your extended ecosystem.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
