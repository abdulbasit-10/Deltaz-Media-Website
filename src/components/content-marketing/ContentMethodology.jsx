const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We look at your business model, audience, positioning, competitors, existing content, search landscape, and commercial priorities.",
  },
  {
    number: "02",
    title: "Identify Opportunities",
    description:
      "We determine where content can create the greatest impact—increasing visibility, strengthening authority, or driving conversions.",
  },
  {
    number: "03",
    title: "Build Strategy",
    description:
      "We map topics, formats, channels, messaging, keywords, and content priorities into a practical, actionable roadmap.",
  },
  {
    number: "04",
    title: "Create & Distribute",
    description:
      "Our team turns strategy into high-quality content across key channels, maintaining consistency in voice and positioning.",
  },
  {
    number: "05",
    title: "Measure & Improve",
    description:
      "We review traction, qualified engagement, and conversions, performing ongoing optimization to maximize ROI.",
  },
];

function ContentMethodology() {
  return (
    <section
      id="content-methodology"
      aria-labelledby="methodology-heading"
      className="
        w-full
        bg-[#032D31]
        px-5 py-12
        font-['Plus_Jakarta_Sans']
        text-white
        sm:px-8 sm:py-[60px]
      "
    >
      <div
        className="mx-auto w-full max-w-[1000px]"
      >
        {/* Section introduction */}
        <div
          className="flex flex-col items-center text-center"
        >
          <p
            className="
              text-[9px] font-bold
              uppercase tracking-[0.1em]
              text-[#00C9B5]
            "
          >
            Methodology
          </p>

          <h2
            id="methodology-heading"
            className="
              mt-[9px]
              text-[26px] font-extrabold
              uppercase leading-[1.2]
              tracking-[-0.035em]
              sm:text-[30px]
            "
          >
            How We Work
          </h2>

          <p
            className="
              mt-[10px]
              text-[11px] font-normal
              leading-[1.6]
              text-[#8EA7AF]
            "
          >
            Our approach starts with the business, not the content calendar.
          </p>
        </div>

        {/* Methodology steps */}
        <ol
          className="
            mt-8 grid grid-cols-1 gap-4
            sm:mt-10 sm:grid-cols-2
            lg:grid-cols-5
          "
        >
          {steps.map((step) => (
            <li
              key={step.number}
              className="
                min-w-0
                rounded-[13px]
                border border-[#21454D]
                bg-[#09333C]
                px-[17px] py-[20px]
              "
            >
              <span
                className="
                  block
                  text-[24px] font-bold
                  leading-none tracking-[-0.02em]
                  text-[#00C9B5]
                "
              >
                {step.number}
              </span>

              <h3
                className="
                  mt-[13px]
                  font-['Arimo']
                  text-[14px] font-bold
                  leading-[1.4]
                  text-white
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mt-[8px]
                  text-[11px] font-normal
                  leading-[1.6]
                  text-[#B8CCD2]
                "
              >
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ContentMethodology;