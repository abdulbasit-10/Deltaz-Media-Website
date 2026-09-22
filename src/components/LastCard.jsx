import lastCardWaves from "../assets/Waves for last card.png";
import greenArrowIcon from "../assets/meteor-icons arrow-up-right (green).png";
import blackArrowIcon from "../assets/meteor-icons arrow-up-right (black).png";
import whiteArrowIcon from "../assets/meteor-icons_arrow-up-right (white).png";

import { useTheme } from "../context/useTheme";

const LastCard = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section
      className={`w-full px-[5%] py-[65px] transition-colors duration-300 ${
        isLight ? "bg-[#FFFFFF]" : "bg-[#082D31]"
      }`}
    >
      <div
        className={`relative mx-auto flex min-h-[268px] w-full max-w-[741px] items-center justify-center overflow-hidden rounded-[20px] ${
          isLight
            ? "bg-[#0BBBC4] shadow-[0_12px_28px_rgba(0,111,118,0.16)]"
            : "bg-[#0B747D]"
        }`}
      >
        {isLight && (
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_8%,rgba(0,126,135,0.08)_36%,rgba(0,91,99,0.28)_62%,rgba(0,82,89,0.88)_100%)]" />
        )}

        <img
          src={lastCardWaves}
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover object-center ${
            isLight ? "opacity-35" : "opacity-90"
          }`}
        />

        {isLight && (
          <>
            <div className="pointer-events-none absolute -left-[140px] -top-[115px] h-[300px] w-[370px] rounded-full bg-[#86EEF0]/28 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-[160px] right-[-95px] h-[315px] w-[390px] rounded-full bg-[#005F66]/24 blur-[95px]" />
          </>
        )}

        <div className="relative z-10 flex w-full flex-col items-center px-6 text-center">
          {isLight && (
            <div className="pointer-events-none absolute left-1/2 top-[12px] h-[125px] w-[560px] -translate-x-1/2 rounded-full bg-[#006F76]/45 blur-[30px]" />
          )}

          <h2 className="relative z-10 max-w-[600px] font-['Plus_Jakarta_Sans'] text-[25px] font-bold leading-[1.18] tracking-[-0.7px] text-white sm:text-[34px] md:text-[31px]">
            Your Next{" "}
            <span
              className={
                isLight
                  ? "text-[#38E5E8] drop-shadow-[0_1px_2px_rgba(0,91,99,0.28)]"
                  : "text-[#20C5D4]"
              }
            >
              Growth
            </span>{" "}
            Opportunity Could
            <br />
            Be Closer Than You Think.
          </h2>

          <p className="relative z-10 mt-[9px] max-w-[560px] font-['Inter'] text-[9px] font-normal leading-[1.35] text-white/85 sm:text-[11px] md:text-[9.5px]">
            Your business has something valuable to offer. But if the right
            people can&apos;t find you, remember you, or understand why
            <br className="hidden sm:block" />
            they should choose you, that potential stays hidden.
          </p>

          <div className="mt-[15px] flex items-center justify-center gap-[9px]">
            <a
              href="#contact"
              className={`group flex h-[35px] items-center justify-center gap-[7px] rounded-full border px-[14px] font-['Inter'] text-[12px] font-bold transition-all duration-300 ease-out ${
                isLight
                  ? "border-[#BDF4F5]/70 bg-[linear-gradient(100deg,#B9F0F1_0%,#8EDDE1_52%,#69C8D0_100%)] !text-[#07383B] shadow-[0_4px_12px_rgba(0,76,82,0.18)] hover:border-white hover:bg-none hover:bg-transparent hover:!text-white"
                  : "border-white bg-white !text-[#0B8995] hover:bg-transparent hover:!text-white"
              }`}
            >
              <span>Book Your Free Audit</span>

              <span className="relative h-[14px] w-[14px]">
                <img
                  src={isLight ? blackArrowIcon : greenArrowIcon}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-[14px] w-[14px] object-contain transition-opacity duration-300 group-hover:opacity-0"
                />

                <img
                  src={whiteArrowIcon}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-[14px] w-[14px] object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </span>
            </a>

            <a
              href="#work"
              className={`flex h-[35px] items-center justify-center rounded-full border px-[16px] font-['Inter'] text-[12px] font-bold transition-all duration-300 ease-out ${
                isLight
                  ? "border-white bg-transparent !text-white hover:bg-white hover:!text-[#00757C]"
                  : "border-white bg-transparent text-white hover:bg-white hover:!text-[#0B8995]"
              }`}
            >
              See What We&apos;ve Achieved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastCard;