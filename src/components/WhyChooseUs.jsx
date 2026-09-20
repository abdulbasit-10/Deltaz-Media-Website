import dataDrivenIcon from "../assets/Data drive startegy.svg";
import rapidExecutionIcon from "../assets/rapid execution.svg";
import transparentReportingIcon from "../assets/transparent reporting.svg";
import fullCoverageIcon from "../assets/Full coverage.svg";

import dataDrivenLightIcon from "../assets/data-driven-light.svg";
import rapidExecutionLightIcon from "../assets/rapid-execution-light.svg";
import transparentReportingLightIcon from "../assets/transparent-reporting-light.svg";
import fullFunnelLightIcon from "../assets/full-funnel-light.svg";

import whyChooseUsImage from "../assets/Image for why choose us.png";
import { useTheme } from "../context/ThemeContext";

const reasons = [
  {
    darkIcon: dataDrivenIcon,
    lightIcon: dataDrivenLightIcon,
    title: "Data-Driven Strategy",
    description: "Every campaign is backed by deep analytics, not guesswork.",
  },
  {
    darkIcon: rapidExecutionIcon,
    lightIcon: rapidExecutionLightIcon,
    title: "Rapid Execution",
    description: "From brief to live campaign in days, not weeks.",
  },
  {
    darkIcon: transparentReportingIcon,
    lightIcon: transparentReportingLightIcon,
    title: "Transparent Reporting",
    description: "Real-time dashboards so you always know what's working.",
  },
  {
    darkIcon: fullCoverageIcon,
    lightIcon: fullFunnelLightIcon,
    title: "Full-Funnel Coverage",
    description:
      "Awareness to conversion — we own every stage of the journey.",
  },
];

function WhyChooseUs() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section
      id="why-choose-us"
      className={`w-full px-[30px] py-[65px] transition-colors duration-300 sm:px-[40px] lg:px-[60px] xl:px-[65px] ${
        isLight ? "bg-white" : "bg-[#061F21]"
      }`}
    >
      <div
        className={`mx-auto flex min-h-[500px] w-full max-w-[1200px] overflow-hidden rounded-[17px] border px-[30px] py-[30px] transition-colors duration-300 sm:px-[35px] sm:py-[35px] lg:px-[40px] lg:py-[35px] ${
          isLight
            ? "border-[#B9DDE0] bg-white shadow-[0_8px_22px_rgba(16,63,67,0.10)]"
            : "border-[#1A6267]/65 bg-[#0D393D]"
        }`}
      >
        <div className="flex w-full flex-col gap-[40px] lg:flex-row lg:items-center lg:justify-between lg:gap-[55px]">
          <div className="flex w-full flex-col lg:max-w-[535px] lg:flex-1">
            <div
              className={`font-['Inter'] text-[11px] font-medium leading-none ${
                isLight ? "text-[#08737D]" : "text-[#C0CDCE]"
              }`}
            >
              Why Choose Us
            </div>

            <h2
              className={`mt-[21px] font-['Plus Jakarta Sans'] text-[40px] font-bold leading-[1.08] tracking-[-1.4px] sm:text-[39px] lg:text-[41px] ${
                isLight ? "text-[#222629]" : "text-[#F4F8F8]"
              }`}
            >
              Why Businesses Choose
              <br />
              <span className={isLight ? "text-[#007B7D]" : "text-[#18D0E4]"}>
                Deltaz Media
              </span>
            </h2>

            <p
              className={`mt-[16px] max-w-[500px] font-['Inter'] text-[13px] font-normal leading-[1.42] ${
                isLight ? "text-[#283B3D]" : "text-[#A5B7B8]"
              }`}
            >
              We combine strategy, creativity, and data-driven marketing to
              help businesses build stronger brands, attract the right
              audience, and achieve sustainable growth. Every solution is
              tailored to your goals, ensuring measurable results and
              long-term success.
            </p>

            <div className="mt-[27px] flex w-full flex-col">
              {reasons.map((reason, index) => (
                <article
                  key={reason.title}
                  className={`group flex min-h-[61px] w-full items-center gap-[13px] px-[7px] transition-colors duration-300 ${
                    index !== reasons.length - 1
                      ? isLight
                        ? "border-b border-[#E4EEEE]"
                        : "border-b border-[#2A6468]/60"
                      : ""
                  } ${
                    isLight
                      ? "rounded-[4px] hover:bg-[#E3F1F1]"
                      : ""
                  }`}
                >
                  <div
                    className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[5px] transition-colors duration-300 ${
                      isLight
                        ? "bg-[#EAF5F5] group-hover:bg-[#006F75]"
                        : "bg-[#18D0E4]"
                    }`}
                  >
                    <img
                      src={isLight ? reason.lightIcon : reason.darkIcon}
                      alt=""
                      aria-hidden="true"
                      className={`h-[17px] w-[17px] object-contain transition-[filter] duration-300 ${
                        isLight
                          ? "group-hover:brightness-0 group-hover:invert"
                          : ""
                      }`}
                    />
                  </div>

                  <div className="flex flex-col">
                    <span
                      className={`font-['Inter'] text-[12px] font-medium leading-[1.25] ${
                        isLight ? "text-[#25393B]" : "text-[#E0EAEA]"
                      }`}
                    >
                      {reason.title}
                    </span>

                    <span
                      className={`mt-[4px] font-['Inter'] text-[10.5px] font-normal leading-[1.3] ${
                        isLight ? "text-[#35494B]" : "text-[#96AAAB]"
                      }`}
                    >
                      {reason.description}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="flex w-full justify-center lg:w-[480px] lg:shrink-0">
            <div
              className={`overflow-hidden rounded-[17px] border p-[6px] transition-colors duration-300 lg:w-[410px] ${
                isLight
                  ? "border-[#D2E5E6] bg-[#F3F9F9] shadow-[0_3px_10px_rgba(14,69,73,0.12)]"
                  : "border-[#19737A]/60 bg-[#082B2E] shadow-[0_0_20px_rgba(0,0,0,0.08)]"
              }`}
            >
              <img
                src={whyChooseUsImage}
                alt="Deltaz Media team working together"
                className="block h-auto max-h-[380px] w-full rounded-[12px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;