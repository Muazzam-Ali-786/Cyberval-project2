"use client";

export default function ServiceThreePage() {
  const commonCardClass = "bg-[#F8FAFF] rounded-[19.35px] p-[32px] relative overflow-hidden flex flex-col justify-start transition-all duration-300 ease hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] border border-[#E1E8F533] max-[1279px]:!w-[calc(50%-10px)] max-[1279px]:!max-w-full max-[1279px]:!h-auto max-[1279px]:min-h-[320px] max-[764px]:!w-full max-[480px]:!p-[24px_20px_110px]";
  const notLargeCardResponsiveClass = "max-[1279px]:![&:not(.large-card)]:pb-[110px]";
  const commonIconBoxClass = "absolute bottom-[24px] right-[24px] w-[70px] h-[70px] flex items-center justify-center rounded-[12px] p-[12px]";
  const notLargeIconBoxResponsiveClass = "max-[1279px]:![&:not(.large-icon-box)]:absolute max-[1279px]:![&:not(.large-icon-box)]:bottom-[24px] max-[1279px]:![&:not(.large-icon-box)]:right-[24px] max-[1279px]:![&:not(.large-icon-box)]:left-auto max-[1279px]:![&:not(.large-icon-box)]:transform-none max-[1279px]:![&:not(.large-icon-box)]:w-[64px] max-[1279px]:![&:not(.large-icon-box)]:h-[64px] max-[1279px]:![&:not(.large-icon-box)]:mt-0";

  return (
    <div className="w-full min-h-screen bg-[#ffffff]">
      <section className="relative w-full h-[556px] mx-auto bg-[url('/images/pages/services/serivce-3/service-3-hero-bg.svg')] bg-cover bg-center bg-no-repeat bg-[#030D1A] flex justify-center items-center overflow-hidden max-[1454px]:w-full max-[1454px]:h-auto max-[1454px]:p-[160px_20px_100px]">
        <div className="relative w-full max-w-[795px] flex flex-col items-center gap-[21px] text-center z-[5] px-[20px] max-[1454px]:mx-auto">
          <div className="flex justify-center items-center w-[128px] h-[38px] gap-[8.12px] rounded-[27.61px] p-[8.12px] bg-[#FFFFFF12] border-[0.81px] border-[#FFFFFF26] m-0">
            <span className="w-[75px] h-[37px] font-manrope font-semibold text-[14px] leading-[36.54px] tracking-[0.09em] uppercase text-[#FFFFFF] flex items-center justify-center">SERVICES</span>
          </div>

          <h1 className="w-full max-w-[721px] font-semibold text-[clamp(32px,5vw,40px)] leading-[1.4] text-center font-sora text-[#FFFFFF] m-0 max-[768px]:text-[32px]">
            Offensive Security
          </h1>

          <p className="w-full max-w-[687px] font-manrope font-normal text-[18px] leading-[1.6] text-center text-[#EEEEEE] mx-auto m-0 max-[768px]:text-[16px]">
            Cybervol's Offensive Security service identifies and remediates vulnerabilities before attackers can exploit them. Through penetration testing, ethical hacking, and adversary simulations, we uncover weaknesses and deliver actionable strategies to strengthen your cybersecurity resilience.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="p-[100px_20px_120px] bg-[#ffffff] max-[768px]:p-[60px_0_80px]">
        <div className="max-w-[1230px] mx-auto max-[1279px]:px-[20px]">
          <div className="flex justify-between items-start mb-[48px] gap-[40px] max-[1024px]:flex-col max-[1024px]:gap-[20px] max-[1024px]:text-left">
            <h2 className="font-sora text-[32px] font-semibold text-[#212121] leading-[1.2] m-0 max-[480px]:text-[24px]">
              Our <span className="text-[#2E5A88]">Capabilities</span>
            </h2>
            <p className="font-manrope text-[16px] leading-[30px] text-[#585858] max-w-[736px] w-full m-0 max-[1024px]:max-w-full">
              At Cybervol, our goal is simple: to fortify your business with elite security. We help plan asset protection, proactive protection, and ensure leaders navigate the digital landscape with confidence.
            </p>
          </div>

          <div className="flex flex-col gap-[20px]">
            {/* Row 1: 2 Cards */}
            <div className="flex gap-[19px] w-full max-w-[1230px] max-[1279px]:!flex-row max-[1279px]:flex-wrap max-[1279px]:gap-[20px] max-[1279px]:justify-center max-[1279px]:w-full max-[764px]:!flex-col">
              {/* Card 1: Web Application VAPT */}
              <article className={`${commonCardClass} large-card !rounded-[14.38px] w-full max-w-[727px] h-[334px] bg-[url('/images/pages/services/serivce-3/lerger-bg-1.svg')] bg-cover bg-center !border-none p-[40px] !flex-row items-start justify-between max-[1279px]:!flex-col max-[1279px]:!pb-[240px] max-[1279px]:!bg-none max-[1279px]:!bg-[#F8FAFF] max-[1279px]:!relative max-[480px]:!pb-[200px]`}>
                <div className="relative z-[2] flex flex-col gap-[5px] w-[303px] h-[162.74px] max-[1279px]:!w-full max-[1279px]:!max-w-full max-[1279px]:!h-auto max-[1279px]:!static max-[1279px]:!p-0">
                  <h3 className="m-0 w-[330px] h-[40px] font-sora font-semibold text-[18px] leading-[39.73px] text-[#212121] max-[480px]:!text-[18px]">Web Application VAPT</h3>
                  <p className="m-0 w-[334px] h-[90px] font-manrope font-normal text-[15.07px] leading-[30px] text-[#585858]">Identifies security flaws in web applications, including authentication, session management, and injection vulnerabilities.</p>
                </div>
                <div className={`${commonIconBoxClass} large-icon-box !bg-transparent !p-0 !rounded-none w-[280px] h-auto !relative right-0 top-0 bottom-0 max-[1279px]:!absolute max-[1279px]:!bottom-[20px] max-[1279px]:!left-1/2 max-[1279px]:!-translate-x-1/2 max-[1279px]:!right-auto max-[1279px]:!top-auto max-[1279px]:!w-[280px] max-[1279px]:!max-w-[90%] max-[1279px]:!h-auto max-[1279px]:!m-0 max-[480px]:!max-w-[220px] max-[480px]:!bottom-[15px]`}>
                  <img
                    src="/images/pages/services/serivce-3/icon-1.svg"
                    alt="Web Application VAPT"
                    className="w-full h-auto drop-shadow-[0px_8px_15px_rgba(0,0,0,0.3)]"
                  />
                </div>
              </article>

              {/* Card 2: Mobile Application VAPT */}
              <article className={`${commonCardClass} ${notLargeCardResponsiveClass} w-full max-w-[482px] h-[334px] rounded-[14.38px] !bg-[#F6F8FB]`}>
                <div className="relative z-[2] flex flex-col gap-[5px]">
                  <h3 className="m-0 w-[380px] h-[29px] font-sora font-semibold text-[18px] leading-[29px] text-[#212121] max-[480px]:!text-[18px]">Mobile Application VAPT</h3>
                  <p className="m-0 w-[380px] h-[87px] font-manrope font-normal text-[16px] leading-[30px] text-[#585858]">Assesses mobile apps for weaknesses in authentication, data storage, and API security to prevent exploitation.</p>
                </div>
                <div className={`${commonIconBoxClass} ${notLargeIconBoxResponsiveClass}`}>
                  <img
                    src="/images/pages/services/serivce-3/icon-2.svg"
                    alt="Mobile Application VAPT"
                    className="w-full h-full object-contain"
                  />
                </div>
              </article>
            </div>

            {/* Row 2: 2 Cards */}
            <div className="flex gap-[19px] w-full max-w-[1230px] max-[1279px]:!flex-row max-[1279px]:flex-wrap max-[1279px]:gap-[20px] max-[1279px]:justify-center max-[1279px]:w-full max-[764px]:!flex-col">
              {/* Card 3: Network VAPT */}
              <article className={`${commonCardClass} ${notLargeCardResponsiveClass} w-full max-w-[482px] h-[334px] rounded-[14.38px] !bg-[#F6F8FB]`}>
                <div className="relative z-[2] flex flex-col gap-[5px]">
                  <h3 className="m-0 w-[380px] h-[29px] font-sora font-semibold text-[18px] leading-[29px] text-[#212121] max-[480px]:!text-[18px]">Network VAPT</h3>
                  <p className="m-0 w-[380px] h-[87px] font-manrope font-normal text-[16px] leading-[30px] text-[#585858]">Evaluates internal and external networks for vulnerabilities, misconfigurations, and unauthorized access points.</p>
                </div>
                <div className={`${commonIconBoxClass} ${notLargeIconBoxResponsiveClass}`}>
                  <img
                    src="/images/pages/services/serivce-3/icon-3.svg"
                    alt="Network VAPT"
                    className="w-full h-full object-contain"
                  />
                </div>
              </article>

              {/* Card 4: Cloud VAPT */}
              <article className={`${commonCardClass} large-card !rounded-[14.38px] w-full max-w-[727px] h-[334px] bg-[linear-gradient(230.36deg,rgba(135,187,243,0.36)_3.31%,rgba(111,144,180,0.07)_49.84%,rgba(246,248,251,0.49)_95.24%)] !border-none !p-0 max-[1279px]:!flex-col max-[1279px]:!pb-[240px] max-[1279px]:!bg-none max-[1279px]:!bg-[#F8FAFF] max-[1279px]:!relative max-[480px]:!pb-[200px]`}>
                <div className="relative z-[2] flex flex-col gap-[2.74px] absolute top-[86px] left-[48px] w-[303px] h-[162.74px] max-[1279px]:!w-full max-[1279px]:!max-w-full max-[1279px]:!h-auto max-[1279px]:!static max-[1279px]:!p-0">
                  <h3 className="m-0 w-[303px] h-[40px] font-sora font-semibold text-[18px] leading-[39.73px] text-[#212121] max-[480px]:!text-[18px]">Cloud VAPT</h3>
                  <p className="m-0 w-[284px] h-[120px] font-manrope font-normal text-[15.07px] leading-[30px] text-[#212121]">Tests cloud environments for misconfigurations, identity weaknesses, and compliance risks to secure cloud workloads.</p>
                </div>
                <div className={`${commonIconBoxClass} large-icon-box !bg-transparent !p-0 !rounded-none absolute top-[57px] left-[361px] w-[322px] h-[198px] max-[1279px]:!absolute max-[1279px]:!bottom-[20px] max-[1279px]:!left-1/2 max-[1279px]:!-translate-x-1/2 max-[1279px]:!right-auto max-[1279px]:!top-auto max-[1279px]:!w-[280px] max-[1279px]:!max-w-[90%] max-[1279px]:!h-auto max-[1279px]:!m-0 max-[480px]:!max-w-[220px] max-[480px]:!bottom-[15px]`}>
                  <img
                    src="/images/pages/services/serivce-3/icon-4.svg"
                    alt="Cloud VAPT"
                    className="w-full h-full object-contain drop-shadow-[0px_8px_15px_rgba(0,0,0,0.3)]"
                  />
                </div>
              </article>
            </div>

            {/* Row 3: 3 Cards */}
            <div className="flex gap-[19px] w-full max-w-[1230px] max-[1279px]:!flex-row max-[1279px]:flex-wrap max-[1279px]:gap-[20px] max-[1279px]:justify-center max-[1279px]:w-full max-[764px]:!flex-col">
              {/* Card 5: API Assessment */}
              <article className={`${commonCardClass} ${notLargeCardResponsiveClass} w-full max-w-[394.47px] h-[305.99px] !bg-[#F6F8FB]`}>
                <div className="relative z-[2] flex flex-col gap-[5px]">
                  <h3 className="m-0 w-[291px] h-[40px] font-sora font-semibold text-[18px] leading-[39.73px] text-[#212121] max-[480px]:!text-[18px]">API Assessment</h3>
                  <p className="m-0 w-[291px] h-[90px] font-manrope font-normal text-[15.07px] leading-[30px] text-[#585858]">Identifies security gaps in APIs, including authentication flaws, data exposure, and injection risks.</p>
                </div>
                <div className={`${commonIconBoxClass} ${notLargeIconBoxResponsiveClass}`}>
                  <img
                    src="/images/pages/services/serivce-3/icon-5.svg"
                    alt="API Assessment"
                    className="w-full h-full object-contain"
                  />
                </div>
              </article>

              {/* Card 6: Wireless Assessment */}
              <article className={`${commonCardClass} ${notLargeCardResponsiveClass} w-full max-w-[394.47px] h-[305.99px] !bg-[#F6F8FB]`}>
                <div className="relative z-[2] flex flex-col gap-[5px]">
                  <h3 className="m-0 w-[307px] h-[29px] font-sora font-semibold text-[18px] leading-[29px] text-[#212121] max-[480px]:!text-[18px]">Wireless Assessment</h3>
                  <p className="m-0 w-[326px] h-[90px] font-manrope font-normal text-[16px] leading-[30px] text-[#585858]">Secures wireless networks against unauthorized access, rogue APs, and encryption weaknesses.</p>
                </div>
                <div className={`${commonIconBoxClass} ${notLargeIconBoxResponsiveClass}`}>
                  <img
                    src="/images/pages/services/serivce-3/icon-6.svg"
                    alt="Wireless Assessment"
                    className="w-full h-full object-contain"
                  />
                </div>
              </article>

              {/* Card 7: Social Engineering Simulation */}
              <article className={`${commonCardClass} ${notLargeCardResponsiveClass} w-full max-w-[394.47px] h-[305.99px] !bg-[#F6F8FB]`}>
                <div className="relative z-[2] flex flex-col gap-[5px]">
                  <h3 className="m-0 w-[331px] h-[40px] font-sora font-semibold text-[18.49px] leading-[39.73px] text-[#212121] max-[480px]:!text-[18px]">Social Engineering Simulation</h3>
                  <p className="m-0 w-[308px] h-[89px] font-manrope font-normal text-[15.07px] leading-[29.45px] text-[#585858]">Assess human-layer vulnerabilities through phishing campaigns, pretexting, and other real-world deception techniques.</p>
                </div>
                <div className={`${commonIconBoxClass} ${notLargeIconBoxResponsiveClass}`}>
                  <img
                    src="/images/pages/services/serivce-3/icon-7.svg"
                    alt="Social Engineering Simulation"
                    className="w-full h-full object-contain"
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-[#f9fbff] flex-col w-full h-[657.91px] m-[120px_auto] flex relative pt-[80px] overflow-hidden max-[768px]:h-auto max-[768px]:p-[60px_20px] max-[768px]:m-[60px_auto] after:content-[''] after:absolute after:w-[800px] after:h-[800px] after:bg-[radial-gradient(circle,rgba(46,90,136,0.04)_0%,transparent_70%)] after:top-[60%] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:z-[1] after:pointer-events-none">
        <div className="max-w-[1230px] mx-auto w-full flex flex-col items-center relative z-[2]">
          <div className="text-center mb-[50px]">
            <h2 className="font-sora text-[40px] font-semibold text-[#212121] m-0 max-[768px]:text-[28px]">
              Offensive Security <span className="text-[#2E5A88]">Methodology</span>
            </h2>
          </div>
          <div className="w-full max-w-[1100px] flex justify-center mx-auto">
            <img
              src="/images/pages/services/serivce-3/OF-S-M/full-icon.svg"
              alt="Offensive Security Methodology"
              className="w-full h-auto max-h-[400px] object-contain drop-shadow-[0px_12px_30px_rgba(46,90,136,0.08)] transition-transform duration-500 ease hover:scale-[1.02] max-[768px]:max-h-none"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
