import leadIcon from "../../assets/Lead Genration.png";
import growthIcon from "../../assets/Growth.png";
import marketingIcon from "../../assets/Marketing.png";
import performanceIcon from "../../assets/Peroformance.png";
import wavesImage from "../../assets/Waves for hero section.png";

const services = [
  {
    title: "Lead Generation",
    label: "Create Demand",
    icon: leadIcon,
    description:
      "We help create systems that turn interest into real conversations—connecting you with people who are most likely to become customers.",
    features: [
      "LinkedIn Lead Generation",
      "Cold Outreach Systems",
      "Meta Lead Generation",
      "High-Converting Landing Pages",
      "Growth Funnels & Nurturing",
    ],
    button: "Explore Lead Gen",
    href: "/services/lead-generation",
  },
  {
    title: "Performance Marketing",
    label: "Create Demand",
    icon: growthIcon,
    description:
      "Every campaign should have a clear job: Generate awareness, capture demand, bring in qualified leads, drive sales, or retarget effectively.",
    channels:
      "Meta Ads (Facebook & Instagram), Google Search, Shopping, YouTube Ads & Retargeting.",
    button: "Explore Performance Ads",
    href: "/services/performance-marketing",
  },
  {
    title: "Social Media Marketing",
    label: "Stay Relevant",
    icon: marketingIcon,
    description:
      "Don’t just keep posting. Give people a reason to pay attention. We build social media strategies that connect content with bigger business objectives.",
    features: [
      "Strategy & Creative Direction",
      "Short-form Video & Motion Design",
      "Community Management",
      "Account Management & Analytics",
    ],
    button: "Explore Social Media",
    href: "/services/social-media-marketing",
  },
];

function ServicesPerformance() {
  return (
    <section
      id="services-demand"
      aria-labelledby="demand-heading"
      className="
        relative isolate overflow-hidden
        bg-[#032D2C]
        px-5 py-12
        font-['Plus_Jakarta_Sans']
        text-white
        sm:px-8 sm:py-[60px]
      "
    >
      {/* Soft central glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-[20px] -z-10
          h-[450px] w-[650px]
          -translate-x-1/2
          rounded-full
          bg-[#007F78]/15
          blur-[100px]
        "
      />

      {/* Background waves */}
      <img
        src={wavesImage}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-0 top-1/2 -z-10
          h-auto w-full -translate-y-1/2
          opacity-75
        "
      />

      <div
        className="mx-auto w-full max-w-[1000px]"
      >
        {/* Section heading */}
        <div
          className="flex flex-col items-center text-center"
        >
          <div
            className="
              inline-flex items-center gap-[6px]
              rounded-full
              border border-[#00756F]
              bg-[#004D49]/80
              px-[12px] py-[5px]
              font-['Inter']
              text-[9px] font-bold
              uppercase tracking-[0.08em]
              text-[#00D5C3]
            "
          >
            <MaskedIcon
              src={performanceIcon}
              className="h-[10px] w-[10px]"
            />

            <span>Performance &amp; Social</span>
          </div>

          <h2
            id="demand-heading"
            className="
              mt-[14px]
              font-['Manrope']
              text-[28px] font-extrabold
              leading-[1.2] tracking-[-0.035em]
              sm:text-[34px]
            "
          >
            Create Demand. Stay Relevant.
          </h2>

          <p
            className="
              mt-[12px] max-w-[650px]
              text-[12px] font-normal
              leading-[1.65]
              text-[#7FA7A7]
              sm:text-[13px]
            "
          >
            Attention is useful. Business opportunities are better. Turn
            casual interest into high-intent customer conversations.
          </p>
        </div>

        {/* Service cards */}
        <div
          className="
            mt-8 grid grid-cols-1 gap-5
            lg:mt-10 lg:grid-cols-3
          "
        >
          {services.map((service) => (
            <article
              key={service.title}
              className="
                flex min-w-0 flex-col
                rounded-[18px]
                border border-[#07514E]
                bg-[linear-gradient(145deg,rgba(5,65,63,0.88)_0%,rgba(3,45,44,0.75)_100%)]
                p-[22px]
              "
            >
              {/* Service icon */}
              <div
                className="
                  flex h-[36px] w-[36px]
                  items-center justify-center
                  rounded-[12px]
                  border border-[#00756F]
                  bg-[#00514D]
                  text-[#00D5C3]
                "
              >
                <MaskedIcon
                  src={service.icon}
                  className="h-[19px] w-[19px]"
                />
              </div>

              <p
                className="
                  mt-[18px]
                  font-['Inter']
                  text-[9px] font-bold
                  uppercase tracking-[0.09em]
                  text-[#00DECC]
                "
              >
                {service.label}
              </p>

              <h3
                className="
                  mt-[8px]
                  font-['Manrope']
                  text-[18px] font-bold
                  leading-[1.3] tracking-[-0.02em]
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  mt-[10px]
                  text-[11px] font-normal
                  leading-[1.6]
                  text-[#82A6A6]
                "
              >
                {service.description}
              </p>

              {/* Features or advertising channels */}
              <div
                className="mb-[24px] mt-[18px]"
              >
                {service.features && (
                  <ul
                    className="space-y-[7px]"
                  >
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="
                          flex items-start gap-[7px]
                          text-[10px] leading-[1.5]
                          text-[#C8E2E1]
                        "
                      >
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="
                            mt-[2px] h-[11px] w-[11px]
                            shrink-0 text-[#00DECC]
                          "
                        >
                          <path
                            d="m3 8 3 3 7-7"
                          />
                        </svg>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.channels && (
                  <div
                    className="
                      rounded-[12px]
                      border border-[#064D49]
                      bg-[#033735]/70
                      px-[12px] py-[13px]
                    "
                  >
                    <h4
                      className="
                        font-['Inter']
                        text-[8px] font-bold
                        uppercase leading-[1.5]
                        text-[#00DECC]
                      "
                    >
                      Targeted Channels:
                    </h4>

                    <p
                      className="
                        mt-[6px]
                        text-[10px] font-normal
                        leading-[1.5]
                        text-[#B5CFCE]
                      "
                    >
                      {service.channels}
                    </p>
                  </div>
                )}
              </div>

              {/* Service button */}
              <a
                href={service.href}
                className="
                  group mt-auto inline-flex min-h-[36px]
                  items-center justify-center gap-[7px]
                  rounded-[9px]
                  border border-[#00766F]
                  bg-[#00504D]
                  px-[10px] py-[9px]
                  font-['Inter']
                  text-[9px] font-bold
                  uppercase tracking-[0.03em]
                  !text-white
                  transition-colors duration-200
                  hover:border-[#00AD9F]
                  hover:bg-[#00665F]
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#00D5C3]
                "
              >
                <span>{service.button}</span>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="
                    h-[12px] w-[12px] shrink-0
                    transition-transform duration-200
                    group-hover:translate-x-[2px]
                  "
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MaskedIcon({ src, className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`block bg-current ${className}`}
      style={{
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

export default ServicesPerformance;
