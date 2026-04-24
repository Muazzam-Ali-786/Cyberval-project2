"use client";

export default function ServiceOnePage() {
  const capabilityCards = [
    {
      id: "network",
      title: "Network Security",
      desc: "Deploy industry-leading firewall, segmentation, and intrusion prevention solutions to secure your infrastructure from unauthorized access and advanced threats.",
      icon: "/images/pages/services/service-1/Frame.png",
      large: true,
      cardClass: "!w-[727px] !h-[334px] !rounded-[14.38px] !p-[32px_40px_47px_29px] !gap-[10px] bg-[url('/images/pages/services/service-1/Frame%201597883849.svg')] bg-cover bg-center bg-no-repeat !flex-row !items-start max-[1024px]:!flex-col max-[1024px]:!w-[384px] max-[1024px]:!h-auto max-[1024px]:!gap-[10px] max-[1024px]:!rounded-[14.38px] max-[1024px]:!p-[32px_40px_47px_29px] max-[1024px]:!bg-[linear-gradient(230.36deg,rgba(135,187,243,0.36)_3.31%,rgba(111,144,180,0.07)_49.84%,rgba(246,248,251,0.49)_95.24%)]",
      contentClass: "max-w-[50%] max-[1024px]:!max-w-none max-[1024px]:!w-[330px] max-[1024px]:!h-[162.74px] max-[1024px]:!gap-[2.74px]",
      titleClass: "text-[18px] font-semibold leading-[29px] max-[1024px]:!w-[330px] max-[1024px]:!h-[40px] max-[1024px]:!text-[18px] max-[1024px]:!font-semibold max-[1024px]:!leading-[39.73px] max-[1024px]:!text-[#212121] antialiased",
      descClass: "w-[334px] h-[120px] text-[15.07px] leading-[30px] max-[1024px]:!w-[334px] max-[1024px]:!h-[120px] max-[1024px]:!text-[15.07px] max-[1024px]:!leading-[30px] max-[1024px]:!font-normal antialiased",
      iconWrapperClass: "max-[1024px]:!relative max-[1024px]:!w-[282px] max-[1024px]:!h-[255px] max-[1024px]:!top-auto max-[1024px]:!left-auto max-[1024px]:!right-auto max-[1024px]:!bottom-auto max-[1024px]:!translate-x-0 max-[1024px]:!translate-y-0",
      iconImgClass: "max-[1024px]:!absolute max-[1024px]:!top-0 max-[1024px]:!left-[11.39px] max-[1024px]:!w-[270.62px] max-[1024px]:!h-[255px]"
    },
    {
      id: "email",
      title: "Email Security",
      desc: "Protect your communications using AI-powered email filtering and threat protection to stop phishing, spoofing, and BEC attacks.",
      icon: "/images/pages/services/service-1/icon-1.svg",
      cardClass: "!w-[482px] !h-[334px] !rounded-[14.38px]",
      contentClass: "!w-[380px] !h-[119.69px] !gap-[3.69px]",
      titleClass: "text-[18px] font-semibold leading-[29px]",
      descClass: "w-[380px] h-[87px] text-[16px] leading-[30px]"
    },
    {
      id: "endpoint",
      title: "Endpoint Security",
      desc: "Leverage next-gen protection and EDR tools from top vendors to defend endpoints against malware, ransomware, and exploit attempts.",
      icon: "/images/pages/services/service-1/icon-2.svg",
      titleClass: "w-[291px] h-[40px] text-[18px] font-semibold leading-[39.73px]",
      descClass: "w-[291px] h-[120px] text-[15.07px] leading-[30px]"
    },
    {
      id: "cloud",
      title: "Cloud Security",
      desc: "Integrate best-in-class CSPM and CWPP tools to continuously monitor cloud environments, enforce policies, and eliminate misconfigurations.",
      icon: "/images/pages/services/service-1/icon-3.svg",
      titleClass: "w-[307px] h-[29px] text-[18px] font-semibold leading-[29px]",
      descClass: "w-[326px] h-[120px] text-[16px] leading-[30px]"
    },
    {
      id: "application",
      title: "Application Security",
      desc: "Implement trusted solutions for code analysis, vulnerability scanning, and DevSecOps integration to secure applications from development to deployment.",
      icon: "/images/pages/services/service-1/icon-4.svg",
      titleClass: "w-[331px] h-[40px] text-[18.49px] font-semibold leading-[39.73px]",
      descClass: "w-[331px] h-[118px] text-[15.07px] leading-[29.45px]"
    },
    {
      id: "data",
      title: "Data Security",
      desc: "Apply enterprise-grade encryption, DLP, and access control solutions to prevent data leakage and ensure compliance with regulatory requirements.",
      icon: "/images/pages/services/service-1/icon-5.svg",
      titleClass: "w-[309px] h-[29px] text-[18px] font-semibold leading-[29px]",
      descClass: "w-[309px] h-[120px] text-[16px] leading-[30px]"
    },
    {
      id: "iam",
      title: "Identity & Access Management (IAM)",
      desc: "Strengthen access security using vendor-validated MFA, SSO, and identity governance solutions based on Zero Trust.",
      icon: "/images/pages/services/service-1/icon-6.svg",
      titleClass: "w-[310px] h-[66px] text-[18px] font-semibold leading-[33px]",
      descClass: "w-[310px] h-[90px] text-[15.07px] leading-[30px]"
    },
    {
      id: "siem",
      title: "SIEM Solutions",
      desc: "Enable real-time threat visibility and accelerated incident response through scalable SIEM platforms that centralize logs and security insights.",
      icon: "/images/pages/services/service-1/icon-7.svg",
      titleClass: "w-[331px] h-[40px] text-[18.49px] font-semibold leading-[39.73px]",
      descClass: "w-[301px] h-[118px] text-[15.07px] leading-[29.45px]"
    }
  ];

  const baseCardClass = "bg-[#F6F8FB] w-[394.47px] h-[305.99px] rounded-[19.35px] opacity-100 p-[32px] relative overflow-hidden flex flex-col justify-start transition-all duration-300 ease hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] max-[1279px]:w-full max-[1279px]:max-w-full max-[1279px]:h-auto max-[1279px]:min-h-[305.99px] max-[1024px]:flex-col max-[1024px]:p-[32px_30px_100px_30px] max-[480px]:p-[24px_20px_100px_20px]";
  const baseContentClass = "relative z-[2] w-[330px] h-[162.74px] flex flex-col gap-[2.74px] max-[1279px]:w-full max-[1279px]:max-w-full max-[1279px]:h-auto max-[1279px]:min-h-auto max-[1279px]:whitespace-normal max-[1279px]:break-normal";
  const baseTitleClass = "font-sora text-[#111827] m-0 opacity-100 max-[1279px]:w-full max-[1279px]:max-w-full max-[1279px]:h-auto max-[1279px]:min-h-auto max-[1279px]:whitespace-normal max-[1279px]:break-normal max-[480px]:text-[20px] max-[480px]:leading-[28px] max-[480px]:mb-[8px]";
  const baseDescClass = "font-manrope text-[#585858] opacity-100 max-[1279px]:w-full max-[1279px]:max-w-full max-[1279px]:h-auto max-[1279px]:min-h-auto max-[1279px]:whitespace-normal max-[1279px]:break-normal max-[480px]:text-[14px] max-[480px]:leading-[24px]";

  return (
    <div className="w-full min-h-screen bg-[#ffffff] max-[1024px]:bg-black">
      <div className="w-full max-[1024px]:w-full max-[1024px]:max-w-[440px] max-[1024px]:mx-auto max-[1024px]:bg-white max-[1024px]:overflow-hidden max-[1024px]:shadow-sm">
      {/* Hero Section */}
      <section className="relative w-full h-[556px] max-[1454px]:h-auto mx-auto flex flex-col justify-center items-center overflow-hidden bg-[url('/images/pages/services/service-1/Frame%209.svg')] max-[1024px]:!bg-[url('/images/pages/services/service-1/mobile-hero-bg.svg')] bg-cover bg-center bg-no-repeat bg-[#030D1A] opacity-100 p-[100px_20px_60px] max-[1454px]:p-[160px_20px_100px] text-center max-[1454px]:w-full max-[1454px]:left-0 max-[1024px]:!w-full max-[1024px]:!h-auto max-[1024px]:!py-[120px] max-[1024px]:!left-0">
        <div className="absolute top-[184px] left-[367px] w-[721px] h-[216px] flex flex-col items-center z-[5] opacity-100 max-[1454px]:relative max-[1454px]:top-0 max-[1454px]:left-0 max-[1454px]:w-full max-[1454px]:max-w-[721px] max-[1454px]:h-auto max-[1454px]:mx-auto max-[1024px]:!relative max-[1024px]:!w-full max-[1024px]:!h-auto max-[1024px]:!top-0 max-[1024px]:!left-0 max-[1024px]:!gap-[21px] max-[1024px]:!mx-auto max-[1024px]:px-[10px]">
          <div className="flex justify-center items-center w-[128px] h-[38px] rounded-[27.61px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] opacity-100 max-[1024px]:!w-[104px] max-[1024px]:!h-[38px] max-[1024px]:!p-[8.12px] max-[1024px]:!gap-[8.12px]">
            <span className="flex justify-center items-center opacity-100 font-manrope font-semibold text-[14px] leading-none tracking-[0.09em] uppercase text-[#FFFFFF] max-[1024px]:!w-[65px] max-[1024px]:!h-[37px] max-[1024px]:!text-[12px] max-[1024px]:!font-semibold max-[1024px]:!leading-[36.54px] max-[1024px]:!tracking-[0.09em] antialiased">SERVICES</span>
          </div>

          <h1 className="font-sora text-[40px] font-semibold text-[#ffffff] w-[721px] h-[57px] opacity-100 leading-[57px] text-center [text-wrap:balance] mx-auto max-[1454px]:w-full max-[1454px]:h-auto max-[1454px]:text-[clamp(32px,5vw,40px)] max-[1454px]:leading-normal max-[1024px]:!w-full max-[1024px]:!h-auto max-[1024px]:!text-[32px] max-[1024px]:!leading-[1.3]">
            CyberShield Solutions
          </h1>

          <p className="w-[649px] h-[90px] font-manrope font-normal text-[18px] leading-[30px] text-center text-[#EEEEEE] opacity-100 mx-auto max-[1454px]:w-full max-[1454px]:h-auto max-[1024px]:!w-full max-[1024px]:!h-auto max-[1024px]:!text-[16px]">
            At Cybervol, we partner with leading cybersecurity vendors to deliver robust, integrated solutions that protect your digital assets, ensure compliance, and build digital trust — all while adapting to an ever-evolving threat landscape.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="p-[100px_20px_120px] bg-[#ffffff] max-[1024px]:!p-0 max-[1024px]:!overflow-hidden">
        <div className="max-w-[1230px] mx-auto max-[1279px]:w-full max-[1279px]:max-w-full max-[1279px]:px-[20px] max-[1024px]:!flex max-[1024px]:!flex-col max-[1024px]:!w-[384px] max-[1024px]:!h-[3013px] max-[1024px]:!gap-[35px] max-[1024px]:!px-0 max-[1024px]:!mx-0 max-[1024px]:!ml-[23px]">
          <div className="flex justify-between items-start mb-[48px] gap-[40px] max-[1024px]:flex-col max-[1024px]:!w-[384px] max-[1024px]:!h-[172px] max-[1024px]:!gap-[9px] max-[1024px]:!mb-0">
            <h2 className="font-sora text-[32px] font-semibold text-[#212121] leading-[1.2] m-0 max-[1024px]:!w-[289px] max-[1024px]:!h-[43px] max-[1024px]:!text-[24px] max-[1024px]:!leading-[43px] antialiased">
              Our <span className="text-[#2E5A88]">Capabilities</span>
            </h2>
            <p className="font-manrope text-[16px] leading-[30px] text-[#585858] w-[736px] h-[60px] m-0 max-[1024px]:!w-[379px] max-[1024px]:!h-[120px] max-[1024px]:!text-[16px] max-[1024px]:!leading-[30px] antialiased">
              At Cybervol, our goal is simple: to fortify your business with elite security. We help plan asset protection, proactive protection, and ensure leaders navigate the digital landscape with confidence.
            </p>
          </div>

          <div className="flex flex-col gap-[20px] max-[1024px]:!w-[384px] max-[1024px]:!h-[2806px] max-[1024px]:!gap-[23px]">
            {/* Featured Row */}
            <div className="w-[1230px] h-[334px] flex gap-[19px] opacity-100 max-[1279px]:w-full max-[1279px]:max-w-full max-[1279px]:px-[20px] max-[1279px]:h-auto max-[1024px]:!flex max-[1024px]:!flex-col max-[1024px]:!w-[384px] max-[1024px]:!gap-[23px] max-[1024px]:!p-0">
              {capabilityCards.slice(0, 2).map((card) => (
                <article
                  key={card.id}
                  className={`${baseCardClass} ${card.cardClass || ""}`}
                >
                  <div className={`${baseContentClass} ${card.contentClass || ""}`}>
                    <h3 className={`${baseTitleClass} ${card.titleClass || ""}`}>{card.title}</h3>
                    <p className={`${baseDescClass} ${card.descClass || ""}`}>{card.desc}</p>
                  </div>

                  <div className={`${card.large ? "absolute right-[20px] top-1/2 -translate-y-1/2 w-auto h-auto bg-transparent shadow-none max-[1024px]:!top-auto max-[1024px]:!bottom-[20px] max-[1024px]:!left-1/2 max-[1024px]:!-translate-x-1/2 max-[1024px]:!right-auto" : "absolute bottom-[20px] right-[20px] w-[52px] h-[52px] flex items-center justify-center"} ${card.iconWrapperClass || ""}`}>
                    <img
                      src={card.icon}
                      alt={card.title}
                      className={`${card.large ? "w-[280px] h-auto opacity-100 max-[1024px]:w-[200px] max-[1024px]:max-w-[70%]" : "w-full h-full object-contain max-[1024px]:max-w-[52px]"} ${card.iconImgClass || ""}`}
                    />
                  </div>
                </article>
              ))}
            </div>

            {/* Standard Grid */}
            <div className="grid grid-cols-3 w-[1230px] h-auto gap-[20px] opacity-100 max-[1279px]:w-full max-[1279px]:max-w-full max-[1279px]:px-[20px] max-[1279px]:grid max-[1279px]:grid-cols-2 max-[1024px]:!flex max-[1024px]:!flex-col max-[1024px]:!w-[384px] max-[1024px]:!gap-[23px] max-[1024px]:!p-0">
              {capabilityCards.slice(2).map((card) => (
                <article
                  key={card.id}
                  className={`${baseCardClass} ${card.cardClass || ""}`}
                >
                  <div className={`${baseContentClass} ${card.contentClass || ""}`}>
                    <h3 className={`${baseTitleClass} ${card.titleClass || ""}`}>{card.title}</h3>
                    <p className={`${baseDescClass} ${card.descClass || ""}`}>{card.desc}</p>
                  </div>

                  <div className="absolute bottom-[20px] right-[20px] w-[52px] h-[52px] flex items-center justify-center">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-full h-full object-contain max-[1024px]:max-w-[52px]"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
