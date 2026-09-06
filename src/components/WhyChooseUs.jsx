import dataDrivenIcon from "../assets/Data drive startegy.svg";
import rapidExecutionIcon from "../assets/rapid execution.svg";
import transparentReportingIcon from "../assets/transparent reporting.svg";
import fullCoverageIcon from "../assets/Full coverage.svg";
import whyChooseUsImage from "../assets/Image for why choose us.png";

const reasons = [
  {
    icon: dataDrivenIcon,
    title: "Data-Driven Strategy",
    description: "Every campaign is backed by deep analytics, not guesswork.",
  },
  {
    icon: rapidExecutionIcon,
    title: "Rapid Execution",
    description: "From brief to live campaign in days, not weeks.",
  },
  {
    icon: transparentReportingIcon,
    title: "Transparent Reporting",
    description: "Real-time dashboards so you always know what's working.",
  },
  {
    icon: fullCoverageIcon,
    title: "Full-Funnel Coverage",
    description: "Awareness to conversion — we own every stage of the journey.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="
        w-full
        bg-[#061F21]
        px-[30px]
        py-[65px]
        sm:px-[40px]
        lg:px-[60px]
        xl:px-[65px]
      "
    >
      {/* Main Figma Container */}
      <div
        className="
          mx-auto
          flex
          min-h-[540px]
          w-full
          max-w-[1320px]
          overflow-hidden
          rounded-[17px]
          border
          border-[#1A6267]/65
          bg-[#0D393D]
          px-[35px]
          py-[35px]
          sm:px-[40px]
          sm:py-[40px]
          lg:px-[45px]
          lg:py-[40px]
        "
      >
        <div
          className="
            flex
            w-full
            flex-col
            gap-[45px]
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:gap-[70px]
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              flex
              w-full
              flex-col
              lg:max-w-[590px]
              lg:flex-1
            "
          >
            {/* Label */}
            <div
              className="
                flex
                items-center
                gap-[9px]
                font-['Inter']
                text-[12px]
                font-medium
                leading-none
                text-[#C0CDCE]
              "
            >
              {/* Actual visual label */}
              <span className="flex items-center">
                <span className="h-[14px] w-[14px] rounded-full bg-[#08737D]" />
                <span className="-ml-[7px] h-[14px] w-[14px] rounded-full bg-[#0B818C]" />
                <span className="-ml-[7px] h-[14px] w-[14px] rounded-full bg-[#0E929D]" />
              </span>

              <span>Why Choose Us</span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-[24px]
                font-['Plus Jakarta Sans']
                text-[40px]
                font-bold
                leading-[1.08]
                tracking-[-1.5px]
                text-[#F4F8F8]
                sm:text-[43px]
                lg:text-[45px]
              "
            >
              Why Businesses Choose
              <br />
              <span className="text-[#18D0E4]">Deltaz Media</span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-[18px]
                max-w-[545px]
                font-['Inter']
                text-[12px]
                font-normal
                leading-[1.42]
                text-[#A5B7B8]
                sm:text-[12px]
              "
            >
              We combine strategy, creativity, and data-driven marketing to
              help businesses build stronger brands, attract the right
              audience, and achieve sustainable growth. Every solution is
              tailored to your goals, ensuring measurable results and
              long-term success.
            </p>

            {/* Reasons */}
            <div className="mt-[32px] flex w-full flex-col">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className={`
                    flex
                    min-h-[67px]
                    w-full
                    items-center
                    gap-[14px]
                    ${
                      index !== reasons.length - 1
                        ? "border-b border-[#2A6468]/60"
                        : ""
                    }
                  `}
                >
                  {/* Actual supplied icon */}
                  <img
                    src={reason.icon}
                    alt=""
                    aria-hidden="true"
                    className="
                      h-[36px]
                      w-[36px]
                      shrink-0
                      object-contain
                    "
                  />

                  {/* Text */}
                  <div className="flex flex-col">
                    <span
                      className="
                        font-['Inter']
                        text-[11px]
                        font-medium
                        leading-[1.25]
                        text-[#E0EAEA]
                      "
                    >
                      {reason.title}
                    </span>

                    <span
                      className="
                        mt-[4px]
                        font-['Inter']
                        text-[10px]
                        font-normal
                        leading-[1.25]
                        text-[#96AAAB]
                      "
                    >
                      {reason.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              w-full
              lg:w-[540px]
              lg:shrink-0
            "
          >
            <div
              className="
                overflow-hidden
                rounded-[17px]
                border
                border-[#19737A]/60
                bg-[#082B2E]
                p-[6px]
                shadow-[0_0_20px_rgba(0,0,0,0.08)]
              "
            >
              <img
                src={whyChooseUsImage}
                alt="Deltaz Media team working together"
                className="
                  block
                  h-auto
                  max-h-[490px]
                  w-full
                  rounded-[12px]
                  object-cover
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;