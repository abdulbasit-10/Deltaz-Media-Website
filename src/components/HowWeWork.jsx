const steps = [
  {
    number: "01",
    icon: "document",
    title: "Understand the Business",
    description:
      "Before we recommend a strategy, we understand your business, audience, market, challenges, and growth objectives.",
  },
  {
    number: "02",
    icon: "shield",
    title: "Build the Right Strategy",
    description:
      "We identify the opportunities worth focusing on and build a clear plan around the channels and actions most relevant to your goals.",
  },
  {
    number: "03",
    icon: "link",
    title: "Execute With Purpose",
    description:
      "Content, SEO, paid campaigns, lead generation, social media, websites—whatever the strategy requires, every activity should have a reason behind it.",
  },
  {
    number: "04",
    icon: "database",
    title: "Learn, Improve, and Grow",
    description:
      "Marketing isn’t a one-time project. We track what matters, learn from what the market tells us, improve what isn’t working, and look for the next opportunity.",
  },
];

function HowWeWork() {
  return (
    <section
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
      className="
        relative isolate w-full overflow-hidden
        bg-[#032D31]
        px-5 py-12
        font-['Plus_Jakarta_Sans']
        text-white
        sm:px-8 sm:py-[56px]
        lg:px-10 lg:py-[60px]
      "
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-[180px] -top-[200px] -z-10
          h-[400px] w-[400px]
          rounded-full
          bg-[#087D85]/20
          blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-[250px] -right-[180px] -z-10
          h-[400px] w-[400px]
          rounded-full
          bg-[#087D85]/20
          blur-[100px]
        "
      />

      <div
        className="mx-auto w-full max-w-[1120px]"
      >
        {/* Section heading */}
        <div
          className="flex flex-col items-center text-center"
        >
          <div
            className="
              flex items-center justify-center
              gap-[7px]
              text-[11px] font-medium
              uppercase
            "
          >
            <span
              aria-hidden="true"
              className="h-px w-[16px] bg-[#0AA5B3]"
            />

            <span>How We Work</span>

            <span
              aria-hidden="true"
              className="h-px w-[16px] bg-[#0AA5B3]"
            />
          </div>

          <h2
            id="how-we-work-heading"
            className="
              mt-[18px]
              text-[28px] font-extrabold
              uppercase leading-[1.2]
              tracking-[-0.035em]
              sm:text-[34px]
              lg:text-[38px]
            "
          >
            <span
              className="font-['Manrope']"
            >
              How We{" "}
            </span>

            <span
              className="text-[#55DECE]"
            >
              Work
            </span>
          </h2>

          <p
            className="
              mt-[16px] max-w-[560px]
              text-[12px] leading-[1.5]
              text-[#D3E1E2]
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Process steps */}
        <ol
          className="
            relative mt-10 grid grid-cols-1
            gap-8
            lg:mt-[44px] lg:grid-cols-4 lg:gap-5
          "
        >
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              left-[12.5%] right-[12.5%] top-[42px]
              hidden h-px
              bg-[#235357]
              lg:block
            "
          />

          {steps.map((step, index) => (
            <li
              key={step.number}
              className="
                relative grid
                grid-cols-[56px_minmax(0,1fr)]
                gap-x-5
                lg:flex lg:flex-col lg:items-center
                lg:text-center
              "
            >
              {/* Number and icon */}
              <div
                className="
                  relative flex flex-col items-center
                "
              >
                {/* Mobile connecting line */}
                {index < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute
                      left-1/2 top-[45px] -bottom-8
                      w-px -translate-x-1/2
                      bg-[#235357]
                      lg:hidden
                    "
                  />
                )}

                <span
                  className="
                    relative
                    text-[11px] leading-[16px]
                    text-[#0AA5B3]
                  "
                >
                  {step.number}
                </span>

                <div
                  className="
                    relative mt-[7px]
                    flex h-[50px] w-[50px]
                    items-center justify-center
                    rounded-full
                    border border-[#008D98]
                    bg-[#032D31]
                  "
                >
                  {/* Connection dots */}
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="
                        absolute -left-[5px] top-1/2
                        hidden h-[5px] w-[5px]
                        -translate-y-1/2
                        rounded-full bg-[#0AA5B3]
                        shadow-[0_0_6px_rgba(10,165,179,0.7)]
                        lg:block
                      "
                    />
                  )}

                  <StepIcon
                    type={step.icon}
                  />

                  {index < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="
                        absolute -right-[5px] top-1/2
                        hidden h-[5px] w-[5px]
                        -translate-y-1/2
                        rounded-full bg-[#0AA5B3]
                        shadow-[0_0_6px_rgba(10,165,179,0.7)]
                        lg:block
                      "
                    />
                  )}
                </div>
              </div>

              {/* Step text */}
              <div
                className="pt-[22px] lg:pt-0"
              >
                <h3
                  className="
                    max-w-[190px]
                    text-[14px] font-semibold
                    leading-[1.4]
                    text-[#0AA5B3]
                    lg:mx-auto lg:mt-[13px]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-[9px] max-w-[320px]
                    text-[11px] leading-[1.5]
                    text-[#D0DFE0]
                    lg:mx-auto lg:max-w-[230px]
                    lg:text-[10px]
                  "
                >
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function StepIcon({ type }) {
  const paths = {
    document: (
      <>
        <path
          d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8Z"
        />

        <path
          d="M14 3v5h5M9 13h6M9 17h6"
        />
      </>
    ),

    shield: (
      <>
        <path
          d="m12 3 8 4v5c0 5-8 9-8 9s-8-4-8-9V7Z"
        />

        <path
          d="m8 12 3 3 5-6"
        />
      </>
    ),

    link: (
      <>
        <path
          d="m10 13 4-4"
        />

        <path
          d="m8 15-2 2a3.5 3.5 0 0 0 5 5l4-4a3.5 3.5 0 0 0 0-5"
          transform="translate(0 -2)"
        />

        <path
          d="m16 9 2-2a3.5 3.5 0 0 0-5-5L9 6a3.5 3.5 0 0 0 0 5"
          transform="translate(0 2)"
        />
      </>
    ),

    database: (
      <>
        <ellipse
          cx="12"
          cy="5"
          rx="8"
          ry="3"
        />

        <path
          d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5"
        />

        <path
          d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"
        />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-[23px] w-[23px] text-white"
    >
      {paths[type]}
    </svg>
  );
}

export default HowWeWork;