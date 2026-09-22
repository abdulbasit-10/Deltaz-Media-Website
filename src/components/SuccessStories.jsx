import { useEffect, useState } from "react";

import successImage from "../assets/image for strategy.png";
import wavesImage from "../assets/Waves for success stories.png";
import smallBoxWaves from "../assets/Waves for small box.png";
import marketingBoxWaves from "../assets/Waves for marketing box.png";
import searchIcon from "../assets/icon.png";
import arrowIcon from "../assets/meteor-icons arrow-up-right (green).png";
import whiteArrowIcon from "../assets/meteor-icons_arrow-up-right (white).png";
import growthArrow from "../assets/Arrow with bar upward.png";

import { useTheme } from "../context/useTheme";

function AnimatedNumber({ target, speed = 40 }) {
  const [displayNumber, setDisplayNumber] = useState(1);

  useEffect(() => {
    let currentNumber = 1;

    const interval = setInterval(() => {
      currentNumber += 1;

      if (currentNumber >= target) {
        clearInterval(interval);
        setDisplayNumber(target);
      } else {
        setDisplayNumber(currentNumber);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [target, speed]);

  return (
    <>
      {displayNumber}
      <span>+</span>
    </>
  );
}

function DecorativeWave({ src, className, isLight, color = "#8AE4E4" }) {
  if (!isLight) {
    return (
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className={className}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`${className} block`}
      style={{
        backgroundColor: color,
        WebkitMaskImage: `url("${src}")`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        maskImage: `url("${src}")`,
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
      }}
    />
  );
}

function SuccessStories() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section
      id="success-stories"
      className={`relative w-full overflow-hidden px-[16px] py-[56px] transition-colors duration-300 sm:px-[24px] sm:py-[64px] lg:min-h-[760px] lg:px-[20px] lg:py-0 ${
        isLight ? "bg-[#F7FBFB]" : "bg-[#08272A]"
      }`}
    >
      {isLight && (
        <>
          <div className="pointer-events-none absolute -left-[170px] -top-[190px] h-[430px] w-[480px] rounded-full bg-[#A3DDDE]/30 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-[240px] -left-[150px] h-[440px] w-[520px] rounded-full bg-[#62C2C5]/35 blur-[125px]" />
          <div className="pointer-events-none absolute -bottom-[250px] -right-[155px] h-[470px] w-[550px] rounded-full bg-[#58BEC1]/30 blur-[130px]" />
        </>
      )}

      <DecorativeWave
        src={wavesImage}
        isLight={isLight}
        color="#054a4b"
        className={`pointer-events-none absolute right-[-115px] top-[-55px] z-0 h-[300px] w-[300px] opacity-75 sm:right-[-90px] sm:top-[-60px] sm:h-[380px] sm:w-[380px] lg:right-[-35px] lg:top-[-45px] lg:h-[500px] lg:w-[500px] ${
          isLight ? "lg:opacity-85" : "lg:opacity-85"
        }`}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center text-center lg:pt-[52px]">
        <div
          className={`font-['Inter'] text-[12px] font-medium leading-none ${
            isLight ? "text-[#00737C]" : "text-[#C5D1D2]"
          }`}
        >
          Success Stories
        </div>

        <h2
          className={`mt-[18px] font-['Manrope'] text-[32px] font-bold leading-[1.08] tracking-[-1.2px] sm:text-[34px] sm:tracking-[-1.5px] lg:text-[39px] lg:tracking-[-1.7px] ${
            isLight ? "text-[#25282B]" : "text-[#F3F7F7]"
          }`}
        >
          Turn Your Marketing Into Real
          <br />
          <span
            className={
              isLight
                ? "font-['Plus_Jakarta_Sans'] bg-[linear-gradient(100deg,#0A5961_0%,#075F86_44%,#0078B6_72%,#00A6D8_100%)] bg-clip-text text-transparent drop-shadow-[0_1px_5px_rgba(0,133,190,0.18)]"
                : "font-['Plus_Jakarta_Sans'] text-[#18D0E4]"
            }
          >
            Business Growth
          </span>
        </h2>

        <p
          className={`mt-[14px] max-w-[620px] font-['Inter'] text-[11px] font-normal leading-[1.5] sm:mt-[16px] sm:text-[12px] ${
            isLight ? "text-[#3F5557]" : "text-[#8EA5A6]"
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-[38px] flex w-full max-w-[560px] flex-col gap-[12px] lg:mt-[43px] lg:grid lg:w-fit lg:max-w-none lg:grid-cols-[420px_265px_220px] lg:grid-rows-[215px_210px] lg:gap-[11px]">
        <article className="relative h-[390px] w-full overflow-hidden rounded-[11px] sm:h-[430px] lg:row-span-2 lg:h-[436px] lg:w-[420px]">
          <img
            src={successImage}
            alt="Marketing team working together"
            className="absolute inset-0 block h-full w-full rounded-[11px] object-cover object-center"
          />

          {isLight ? (
            <div className="pointer-events-none absolute inset-0 rounded-[11px] bg-gradient-to-t from-white/50 via-cyan/30 to-transparent" />
          ) : (
            <div className="pointer-events-none absolute inset-0 rounded-[11px] bg-gradient-to-t from-[#087B83]/95 via-[#087B83]/25 to-transparent" />
          )}

          <div className="absolute bottom-[20px] left-[19px] right-[19px] sm:bottom-[24px] sm:left-[23px] sm:right-[23px]">
            <h3
              className={`max-w-[350px] font-['Manrope'] text-[22px] font-extrabold leading-[1.1] tracking-[-0.7px] sm:text-[25px] ${
                isLight ? "text-[#000000]" : "text-white"
              }`}
            >
              Strategy That Creates
              <br />
              Impact
            </h3>

            <p
              className={`mt-[10px] max-w-[390px] font-['Inter'] text-[10px] font-medium leading-[1.5] sm:text-[10px] ${
                isLight ? "text-[#000000]" : "text-[#D4EEEE]"
              }`}
            >
              From smart campaigns to creative digital solutions, we turn your
              marketing goals into measurable growth.
            </p>

            <a
              href="#services"
              className={`group mt-[15px] inline-flex h-[33px] items-center justify-center gap-[7px] rounded-full px-[14px] font-['Inter'] text-[11px] font-bold leading-none transition-all duration-200 sm:mt-[17px] sm:h-[35px] sm:px-[15px] sm:text-[10px] ${
                isLight
                  ? "bg-[#007E87] text-white hover:bg-[#00636A]"
                  : "bg-white !text-[#0B8995] hover:bg-[#18D0E4] hover:!text-black"
              }`}
            >
              <span className={isLight ? "text-white" : ""}>
                Explore Our Results
              </span>

              <img
                src={isLight ? whiteArrowIcon : arrowIcon}
                alt=""
                aria-hidden="true"
                className="block h-[14px] w-[14px] object-contain transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </a>
          </div>
        </article>

        <article
          className={`relative min-h-[205px] w-full overflow-hidden rounded-[11px] border p-[19px] sm:min-h-[215px] sm:p-[21px] lg:h-[215px] lg:min-h-0 lg:w-[265px] ${
            isLight
              ? "border-[#1499A2]/40 bg-[linear-gradient(135deg,#079AA3_0%,#068993_56%,#087982_100%)] shadow-[0_8px_20px_rgba(0,114,121,0.16)]"
              : "border-[#1A6267]/75 bg-[#0C383C]"
          }`}
        >
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[5px] bg-white">
            <img
              src={searchIcon}
              alt=""
              aria-hidden="true"
              className="h-[20px] w-[20px] object-contain"
            />
          </div>

          <h3 className="mt-[12px] font-['Manrope'] text-[14px] font-semibold leading-none text-[#F0F7F7]">
            From Visibility to Growth
          </h3>

          <p className="mt-[10px] max-w-[430px] font-['Manrope'] text-[11px] font-normal leading-[1.5] text-[#D0EFF0] lg:max-w-[225px]">
            Our SEO strategy helped increase organic visibility, attract
            qualified traffic, and turn searches into real business
            opportunities.
          </p>

          <a
            href="#services"
            className="group mt-[13px] inline-flex h-[30px] items-center justify-center gap-[6px] rounded-full bg-white px-[10px] font-['Manrope'] text-[11px] font-bold leading-none !text-[#0B8995] transition-all duration-200 hover:bg-[#C8FAFB] hover:!text-[#06494F]"
          >
            <span>View Results</span>

            <img
              src={arrowIcon}
              alt=""
              aria-hidden="true"
              className="block h-[14px] w-[14px] object-contain transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
            />
          </a>
        </article>

        <article
          className={`relative min-h-[205px] w-full overflow-hidden rounded-[11px] border px-[18px] py-[20px] shadow-[0_8px_28px_rgba(0,0,0,0.20)] sm:min-h-[215px] sm:px-[20px] lg:h-[215px] lg:min-h-0 lg:w-[220px] ${
            isLight
              ? "border-[#149AA3]/35 bg-[linear-gradient(135deg,#075B63_0%,#087980_58%,#59A9AB_100%)]"
              : "border-[#1A6267]/75 bg-[#0D393D]"
          }`}
        >
          <DecorativeWave
            src={smallBoxWaves}
            isLight={isLight}
            color="#B5FAF7"
            className="pointer-events-none absolute bottom-[-25px] right-[-25px] z-0 h-[180px] w-[250px] opacity-90 sm:right-[-20px] sm:h-[185px] sm:w-[205px] lg:bottom-[-33px] lg:right-[-20px] lg:h-[200px] lg:w-[390px]"
          />

          <div
            aria-hidden="true"
            className={`pointer-events-none absolute right-[-30px] top-[-35px] h-[155px] w-[155px] rounded-full blur-[30px] ${
              isLight ? "bg-[#B9F2F1]/20" : "bg-[#7BA7A9]/10"
            }`}
          />

          <div className="relative z-10">
            <div className="font-['DM_Serif_Display'] text-[45px] font-normal leading-none tracking-[-1.4px] text-[#F4F8F8] sm:text-[48px]">
              <AnimatedNumber target={450} speed={8} />
            </div>

            <p className="mt-[8px] font-['Inter'] text-[11px] font-semibold text-[#D5F0F1] sm:text-[12px]">
              Live Websites Launched
            </p>

            <div className="mt-[11px] h-px w-full bg-[#B6E4E5]/30" />

            <div className="mt-[14px] font-['DM_Serif_Display'] text-[45px] font-normal leading-none tracking-[-1.4px] text-[#F4F8F8] sm:text-[48px]">
              <AnimatedNumber target={120} speed={20} />
            </div>

            <p className="mt-[8px] font-['Inter'] text-[11px] font-semibold text-[#D5F0F1] sm:text-[12px]">
              Brands Supported
            </p>
          </div>
        </article>

        <article
          className={`relative min-h-[225px] w-full overflow-hidden rounded-[11px] border px-[19px] py-[20px] sm:min-h-[235px] sm:px-[21px] sm:py-[21px] lg:col-span-2 lg:h-[210px] lg:min-h-0 lg:w-[496px] ${
            isLight
              ? "border-[#13B4BD]/45 bg-[linear-gradient(105deg,#087C85_0%,#0096A3_55%,#16CCD2_100%)] shadow-[0_9px_22px_rgba(0,119,127,0.20)]"
              : "border-[#18A5AF]/60 bg-[#108893]"
          }`}
        >
          <DecorativeWave
            src={marketingBoxWaves}
            isLight={isLight}
            color="#C7FFFC"
            className="pointer-events-none absolute bottom-[-48px] right-[-55px] z-0 h-[235px] w-[330px] opacity-100 sm:right-[-25px] sm:h-[255px] sm:w-[370px] lg:bottom-[-18px] lg:right-[-5px] lg:h-[250px] lg:w-[375px]"
          />

          <div className="relative z-10 max-w-[310px]">
            <h3 className="font-['Manrope'] text-[18px] font-semibold leading-[1.1] tracking-[-0.3px] text-white sm:text-[20px]">
              Marketing That Delivers Results
            </h3>

            <p className="mt-[13px] max-w-[300px] font-['Manrope'] text-[11px] font-normal leading-[1.5] text-[#D7F4F4] sm:text-[10px]">
              We combine creativity, strategy, and digital expertise to turn
              attention into measurable growth.
            </p>

            <a
              href="#success-stories"
              className="group mt-[17px] inline-flex h-[33px] items-center justify-center gap-[7px] rounded-full bg-white px-[14px] font-['Manrope'] text-[12px] font-bold leading-none !text-[#0B8995] transition-all duration-200 hover:bg-[#C8FAFB] hover:!text-[#06494F] sm:mt-[19px] sm:h-[34px] sm:px-[15px] sm:text-[11px]"
            >
              <span>View Success Stories</span>

              <img
                src={arrowIcon}
                alt=""
                aria-hidden="true"
                className="block h-[14px] w-[14px] object-contain transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </a>
          </div>

          {isLight ? (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[8px] right-[5px] z-10 block h-[105px] w-[145px] bg-white sm:right-[10px] sm:h-[115px] sm:w-[165px] lg:right-[13px] lg:h-[125px] lg:w-[178px]"
              style={{
                WebkitMaskImage: `url("${growthArrow}")`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                WebkitMaskSize: "contain",
                maskImage: `url("${growthArrow}")`,
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "contain",
              }}
            />
          ) : (
            <img
              src={growthArrow}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[8px] right-[5px] z-10 h-[105px] w-[145px] object-contain sm:right-[10px] sm:h-[115px] sm:w-[165px] lg:right-[13px] lg:h-[125px] lg:w-[178px]"
            />
          )}
        </article>
      </div>
    </section>
  );
}

export default SuccessStories;