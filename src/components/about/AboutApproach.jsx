const principles = [
  {
    number: "01",
    title: "Help People Find You",
    description:
      "A beautiful website is pointless if nobody finds it through search or ads.",
  },
  {
    number: "02",
    title: "Understand What You Do",
    description:
      "Traffic means very little if visitors don’t instantly grasp your value proposition.",
  },
  {
    number: "03",
    title: "Create Real Value",
    description:
      "Content doesn’t create business value just because it gets published on a calendar.",
  },
  {
    number: "04",
    title: "Drive Meaningful Growth",
    description:
      "A monthly report isn’t proof of growth unless it ties directly to your revenue goals.",
  },
];

const approachPoints = [
  "Comprehensive business audit",
  "Custom growth roadmap",
  "Direct alignment with revenue milestones",
];

function AboutApproach() {
  return (
    <section
      id="about-approach"
      aria-labelledby="approach-heading"
      className="
        w-full
        bg-[#EAF5F6]
        px-5 pb-12 pt-10
        font-['Outfit']
        text-[#103238]
        sm:px-8 sm:pb-[44px] sm:pt-[36px]
      "
    >
      <div
        className="mx-auto w-full max-w-[1060px]"
      >
        {/* Section introduction */}
        <div
          className="flex flex-col items-center text-center"
        >
          <span
            className="
              rounded-full
              border border-[#B8E2E5]
              bg-[#DEF2F3]
              px-[12px] py-[5px]
              text-[9px] font-semibold
              uppercase tracking-[0.12em]
              text-[#007D87]
            "
          >
            Our Solution
          </span>

          <h2
            id="approach-heading"
            className="
              mt-[16px] max-w-[800px]
              font-['Manrope']
              text-[28px] font-extrabold
              leading-[1.2] tracking-[-0.035em]
              sm:text-[32px]
              lg:text-[34px]
            "
          >
            We Don’t Believe in Marketing for
            <br
              className="hidden sm:block"
            />{" "}
            <span
              className="
                bg-[linear-gradient(100deg,#007D87_0%,#0065B0_100%)]
                bg-clip-text text-transparent
              "
            >
              the Sake of Marketing.
            </span>
          </h2>

          <p
            className="
              mt-[16px] max-w-[700px]
              text-[12px] leading-[1.6]
              text-[#6C848A]
              sm:text-[13px]
            "
          >
            Every part of your digital presence should have a clear,
            measurable purpose.
          </p>
        </div>

        {/* Four purpose cards */}
        <div
          className="
            mt-8 grid grid-cols-1 gap-4
            sm:mt-7 sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="
                rounded-[12px]
                border border-[#E2F0F1]
                bg-white
                p-5
                shadow-[0_6px_12px_rgba(23,72,78,0.08)]
              "
            >
              <span
                className="
                  inline-flex h-[32px] w-[32px]
                  items-center justify-center
                  rounded-[8px]
                  bg-[#C9F1F0]
                  text-[12px] font-bold
                  text-[#08646D]
                "
              >
                {principle.number}
              </span>

              <h3
                className="
                  mt-[15px]
                  text-[13px] font-bold
                  leading-[1.4]
                  text-[#12343A]
                "
              >
                {principle.title}
              </h3>

              <p
                className="
                  mt-[9px]
                  text-[11px] leading-[1.6]
                  text-[#74868E]
                "
              >
                {principle.description}
              </p>
            </article>
          ))}
        </div>

        {/* Holistic approach */}
        <div
          className="
            mx-auto mt-8 grid w-full max-w-[940px]
            grid-cols-1 items-center gap-6
            rounded-[18px]
            border border-[#C7E9EC]
            bg-white
            p-6
            shadow-[0_8px_15px_rgba(23,72,78,0.12)]
            sm:mt-[32px] sm:p-6
            md:grid-cols-[1fr_1fr]
            lg:gap-7 lg:p-7
          "
        >
          <div>
            <p
              className="
                text-[10px] font-semibold
                uppercase tracking-[0.16em]
                text-[#0097A3]
              "
            >
              Holistic Approach
            </p>

            <h3
              className="
                mt-[10px]
                font-['Outfit']
                text-[23px] font-extrabold
                leading-[1.2] tracking-[-0.03em]
                text-[#12343A]
                lg:text-[24px]
              "
            >
              One Business. One Goal. The Right Strategy Behind It.
            </h3>

            <p
              className="
                mt-[12px]
                text-[11px] leading-[1.6]
                text-[#74868E]
              "
            >
              We don’t start by selling you a list of disconnected
              services. We start by understanding your business. Where
              are you now? Where do you want to go? What’s getting in
              the way?
            </p>

            <ul
              className="mt-[15px] space-y-[7px]"
            >
              {approachPoints.map((point) => (
                <li
                  key={point}
                  className="
                    flex items-start gap-[7px]
                    text-[10px] font-medium
                    leading-[1.5] text-[#526B74]
                  "
                >
                  <span
                    aria-hidden="true"
                    className="text-[#0AA5B3]"
                  >
                    ✓
                  </span>

                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Strategy statement */}
          <div
            className="
              rounded-[12px]
              bg-[linear-gradient(120deg,#032D31_0%,#075052_100%)]
              px-6 py-7
              text-white
              shadow-[0_6px_12px_rgba(0,60,66,0.15)]
              lg:px-7 lg:py-6
            "
          >
            <p
              className="
                text-[9px] font-medium
                uppercase tracking-[0.16em]
                text-[#27C8C4]
              "
            >
              Strategic Framework
            </p>

            <blockquote
              className="
                mt-[16px]
                text-[17px] font-bold
                leading-[1.45] tracking-[-0.02em]
              "
            >
              “Strategy Without Execution Stays in a Presentation.
              Execution Without Strategy
              <br
                className="hidden lg:block"
              />{" "}
              Creates Noise.”
            </blockquote>

            <p
              className="
                mt-[14px]
                text-[10px] leading-[1.5]
                text-[#91BABC]
              "
            >
              You need both working together seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutApproach;