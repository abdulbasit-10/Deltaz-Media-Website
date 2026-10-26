import strategyIcon from "../../assets/Strategy.png";
import capabilitiesIcon from "../../assets/Capabilities.png";
import growthIcon from "../../assets/Growth.png";
const capabilities = [
  {
    title: "1. Strategy Before Activity",
    description:
      "We look at your overarching goals first, identifying true opportunities before deploying any marketing budget or creative assets.",
    icon: "compass",
  },
  {
    title: "2. Specialized Capabilities",
    description:
      "SEO, paid ads, web development, content marketing, and thought leadership working together in unison toward a single goal.",
    icon: "team",
  },
  {
    title: "3. Compounding Growth",
    description:
      "Growth isn’t one post or campaign. It’s what happens when the right marketing decisions start compounding over time.",
    icon: "growth",
  },
];

function AboutDifference() {
  return (
    <section
      id="about-difference"
      aria-labelledby="difference-heading"
      className="
        relative isolate overflow-hidden
        bg-[#032D2C]
        px-5 py-12
        font-['Outfit']
        text-white
        sm:px-8 sm:py-[44px]
        lg:py-[50px]
      "
    >
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-0 -z-10
          h-[450px] w-[650px]
          -translate-x-1/2
          rounded-full
          bg-[#007F78]/15
          blur-[110px]
        "
      />

      <div
        className="mx-auto w-full max-w-[1050px]"
      >
        {/* Heading */}
        <div
          className="flex flex-col items-center text-center"
        >
          <div
            className="
              inline-flex items-center gap-[6px]
              rounded-full
              border border-[#08716E]
              bg-[#034E4C]
              px-[12px] py-[5px]
              text-[9px] font-semibold
              uppercase tracking-[0.13em]
              text-[#20D5C5]
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-[12px] w-[12px]"
            >
              <path
                d="m13 2-8 12h7l-1 8 8-12h-7Z"
              />
            </svg>

            <span>Strategy &amp; Execution</span>
          </div>

          <h2
            id="difference-heading"
            className="
              mt-[16px] max-w-[750px]
              font-['Manrope']
              text-[29px] font-extrabold
              leading-[1.15] tracking-[-0.035em]
              sm:text-[32px]
              lg:text-[34px]
            "
          >
            Less Guessing. More Intentional
            <br
              className="hidden sm:block"
            />{" "}
            Execution.
          </h2>

          <p
            className="
              mt-[16px] max-w-[680px]
              text-[12px] leading-[1.7]
              text-[#85A9AB]
              sm:text-[13px]
            "
          >
            A good idea sitting in a presentation won’t grow your
            business. Neither will random task execution without clear
            direction.
          </p>
        </div>

        {/* Strategy cards */}
        <div
          className="
            mt-9 grid grid-cols-1 gap-5
            md:mt-[30px] md:grid-cols-3
          "
        >
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="
                rounded-[18px]
                border border-[#07504E]
                bg-[#063C3D]/80
                p-5
                lg:p-5
              "
            >
              <div
                className="
                  flex h-[36px] w-[36px]
                  items-center justify-center
                  rounded-[10px]
                  bg-[#005854]
                  text-[#00DDC5]
                "
              >
                <CapabilityIcon
                  type={capability.icon}
                />
              </div>

              <h3
                className="
                  mt-[15px]
                  text-[14px] font-bold
                  leading-[1.45]
                  text-white
                "
              >
                {capability.title}
              </h3>

              <p
                className="
                  mt-[11px]
                  text-[11px] leading-[1.6]
                  text-[#85A9AB]
                "
              >
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityIcon({ type }) {
  const icons = { compass: strategyIcon, team: capabilitiesIcon, growth: growthIcon };
  const src = icons[type];

  return (
    <span
      aria-hidden="true"
      className="block h-[20px] w-[20px] bg-[#00DDC5]"
      style={{
        WebkitMaskImage: `url("${src}" )`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        maskImage: `url("${src}" )`,
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
      }}
    />
  );
}
export default AboutDifference;