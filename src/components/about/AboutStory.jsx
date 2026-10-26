import storyImage from "../../assets/Story image.png";
import storyWaves from "../../assets/Waves for success stories.png";
import goalIcon from "../../assets/Goal Oriented Approach.png";

const steps = [
  {
    title: "Goal Oriented Approach",
    description:
      "We align technology with your business objectives.",
    icon: "goal",
  },
  {
    title: "Growth-Development",
    description:
      "Faster delivery through iterative and adaptive processes.",
    icon: "shield",
  },
  {
    title: "Transparent Process",
    description:
      "Clear communication and regular updates every step of the way.",
    icon: "link",
  },
  {
    title: "Client-Centric Focus",
    description:
      "Your success is our priority, always. So, keep growing with us.",
    icon: "database",
  },
];

function AboutStory() {
  return (
    <section
      id="about-story"
      aria-labelledby="story-heading"
      className="
        relative isolate overflow-hidden
        bg-[#032D31]
        px-5 py-12
        font-['Outfit']
        text-white
        sm:px-8
        lg:px-12 lg:py-[40px]
      "
    >
      {/* Background waves */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-x-0 top-[60px] -z-10
          h-[340px]
          bg-[#73C4C7]/25
        "
        style={{
          WebkitMaskImage: `url("${storyWaves}")`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "cover",
          maskImage: `url("${storyWaves}")`,
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "cover",
        }}
      />

      <div
        className="mx-auto w-full max-w-[1060px]"
      >
        {/* Introduction and image */}
        <div
          className="
            grid grid-cols-1 items-center
            gap-8
            md:grid-cols-[1.35fr_1fr]
            md:gap-8
          "
        >
          <div>
            <h2
              id="story-heading"
              className="
                max-w-[600px]
                font-['Manrope']
                text-[29px] font-extrabold
                leading-[1.2] tracking-[-0.04em]
                sm:text-[30px]
                lg:text-[34px]
              "
            >
              One Business. One Goal.
              <br />
              The Right Strategy Behind It.
            </h2>

            <p
              className="
                mt-[22px] max-w-[450px]
                text-[13px] leading-[1.5]
                text-[#D2E1E2]
                sm:text-[12px]
              "
            >
              We don’t start by selling you a list of services.
              <br />
              We start by understanding the business.
            </p>

            <ul
              className="
                mt-[18px] list-disc
                space-y-[3px] pl-5
                text-[13px] leading-[1.5]
                text-[#D2E1E2]
                sm:text-[12px]
              "
            >
              <li>Where are you now?</li>
              <li>Where do you want to go?</li>
              <li>What’s getting in the way?</li>
            </ul>
          </div>

          {/* Story image */}
          <div
            className="
              relative mx-auto w-full
              max-w-[260px]
              pl-8
              md:mr-0
              lg:max-w-[280px]
            "
          >
            <img
              src={storyImage}
              alt="A business strategy being mapped out on a planning board"
              loading="lazy"
              className="
                block aspect-[0.88] w-full
                rounded-[18px]
                object-cover object-center
              "
            />

            {/* Vertical GOAL label */}
            <div
              aria-hidden="true"
              className="
                absolute left-0 top-1/2
                flex h-[170px] w-[88px] -translate-y-1/2
                flex-col items-center justify-center
                rounded-[16px]
                border border-[#7ABFC3]/25
                bg-[#032D31]/25
                px-[20px] py-[10px]
                font-['Matemasie']
                text-[36px] font-normal
                leading-none
                backdrop-blur-[3px]
                sm:h-[190px] sm:w-[96px] sm:text-[40px]
              "
            >
              <span>G</span>
              <span>O</span>
              <span>A</span>
              <span>L</span>
            </div>
          </div>
        </div>

        {/* Process steps */}
        <div
          className="relative mt-10 lg:mt-8"
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              left-[12.5%] right-[12.5%] top-[25px]
              hidden h-px
              bg-[#256067]/65
              lg:block
            "
          />

          <ol
            className="
              grid grid-cols-1 gap-8
              min-[400px]:grid-cols-2
              lg:grid-cols-4 lg:gap-7
            "
          >
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative flex flex-col items-center text-center"
              >
                <div
                  className="
                    relative flex h-[50px] w-[50px]
                    items-center justify-center
                    rounded-full
                    border border-[#008D98]
                    bg-[#032D31]
                  "
                >
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="
                        absolute -left-[5px] top-1/2
                        hidden h-[5px] w-[5px]
                        -translate-y-1/2 rounded-full
                        bg-[#0AA5B3]
                        shadow-[0_0_6px_rgba(10,165,179,0.7)]
                        lg:block
                      "
                    />
                  )}

                  <ProcessIcon
                    type={step.icon}
                  />

                  {index < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="
                        absolute -right-[5px] top-1/2
                        hidden h-[5px] w-[5px]
                        -translate-y-1/2 rounded-full
                        bg-[#0AA5B3]
                        shadow-[0_0_6px_rgba(10,165,179,0.7)]
                        lg:block
                      "
                    />
                  )}
                </div>

                <h3
                  className="
                    mt-[13px] max-w-[150px]
                    text-[13px] font-bold
                    leading-[1.5]
                    text-[#0AB4C3]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-[9px] max-w-[210px]
                    text-[10px] leading-[1.5]
                    text-[#D2E1E2]
                  "
                >
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ProcessIcon({ type }) {
  if (type === "goal") {
    return (
      <img
        src={goalIcon}
        alt=""
        aria-hidden="true"
        className="h-[22px] w-[22px] object-contain"
      />
    );
  }

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
      {type === "shield" && (
        <>
          <path
            d="m12 3 8 4v5c0 5-8 9-8 9s-8-4-8-9V7Z"
          />

          <path
            d="m8 12 3 3 5-6"
          />
        </>
      )}

      {type === "link" && (
        <>
          <path
            d="M10 13a5 5 0 0 0 7.1 0l3-3a5 5 0 0 0-7.1-7.1l-1.7 1.7"
          />

          <path
            d="M14 11a5 5 0 0 0-7.1 0l-3 3a5 5 0 0 0 7.1 7.1l1.7-1.7"
          />
        </>
      )}

      {type === "database" && (
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
            d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"
          />
        </>
      )}
    </svg>
  );
}

export default AboutStory;
