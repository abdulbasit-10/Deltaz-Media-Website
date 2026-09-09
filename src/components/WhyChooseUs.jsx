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
    description:
      "Awareness to conversion — we own every stage of the journey.",
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
          min-h-[500px]
          w-full
          max-w-[1200px]
          overflow-hidden
          rounded-[17px]
          border
          border-[#1A6267]/65
          bg-[#0D393D]
          px-[30px]
          py-[30px]
          sm:px-[35px]
          sm:py-[35px]
          lg:px-[40px]
          lg:py-[35px]
        "
      >
        <div
          className="
            flex
            w-full
            flex-col
            gap-[40px]
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:gap-[55px]
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              flex
              w-full
              flex-col
              lg:max-w-[535px]
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
                text-[11px]
                font-medium
                leading-none
                text-[#C0CDCE]
              "
            >
              {/* Removed green circles */}

              <span>Why Choose Us</span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-[21px]
                font-['Plus Jakarta Sans']
                text-[40px]
                font-bold
                leading-[1.08]
                tracking-[-1.4px]
                text-[#F4F8F8]
                sm:text-[39px]
                lg:text-[41px]
              "
            >
              Why Businesses Choose
              <br />
              <span className="text-[#18D0E4]">Deltaz Media</span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-[16px]
                max-w-[500px]
                font-['Inter']
                text-[13px]
                font-normal
                leading-[1.42]
                text-[#A5B7B8]
              "
            >
              We combine strategy, creativity, and data-driven marketing to
              help businesses build stronger brands, attract the right
              audience, and achieve sustainable growth. Every solution is
              tailored to your goals, ensuring measurable results and
              long-term success.
            </p>

            {/* Reasons */}
            <div className="mt-[27px] flex w-full flex-col">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className={`
                    flex
                    min-h-[61px]
                    w-full
                    items-center
                    gap-[13px]
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
                      h-[32px]
                      w-[32px]
                      shrink-0
                      object-contain
                    "
                  />

                  {/* Text */}
                  <div className="flex flex-col">
                    <span
                      className="
                        font-['Inter']
                        text-[12px]
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
                        text-[10.5px]
                        font-normal
                        leading-[1.3]
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
              flex
              w-full
              justify-center
              lg:w-[480px]
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
                lg:w-[410px]
              "
            >
              <img
                src={whyChooseUsImage}
                alt="Deltaz Media team working together"
                className="
                  block
                  h-auto
                  max-h-[380px]
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