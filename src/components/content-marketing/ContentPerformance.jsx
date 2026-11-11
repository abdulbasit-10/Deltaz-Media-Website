import growthIcon from "../../assets/Growth.png";
import leadershipIcon from "../../assets/Capabilities.png";
import funnelIcon from "../../assets/Lead Genration.png";

const outcomes = [
  {
    title: "For SEO & Search Visibility",
    description:
      "Organic search visibility, keyword rankings, qualified organic traffic, and inbound lead conversions.",
    icon: growthIcon,
  },
  {
    title: "For Thought Leadership",
    description:
      "Audience quality, active engagement from relevant decision-makers, inbound commercial conversations, and brand trust.",
    icon: leadershipIcon,
  },
  {
    title: "For Website & Sales Enablement",
    description:
      "Stronger user engagement, clearer user conversion journeys, reduced sales friction, and higher overall enquiry rates.",
    icon: funnelIcon,
  },
];

function ContentPerformance() {
  return (
    <section
      id="content-performance"
      aria-labelledby="performance-heading"
      className="
        w-full
        bg-[#F2F8F8]
        px-5 py-12
        font-['Plus_Jakarta_Sans']
        text-[#102329]
        sm:px-8 sm:py-[55px]
      "
    >
      <div
        className="
          mx-auto grid w-full max-w-[900px]
          grid-cols-1 items-center gap-6
          md:grid-cols-[0.82fr_1.18fr]
        "
      >
        {/* Commercial impact card */}
        <div
          className="
            rounded-[18px]
            bg-[#06272E]
            p-6
            text-white
            shadow-[0_9px_13px_rgba(20,67,73,0.16)]
          "
        >
          <p
            className="
              text-[9px] font-bold
              uppercase leading-[1.5]
              tracking-[0.03em]
              text-[#00C9B5]
            "
          >
            Commercial Impact
          </p>

          <h2
            id="performance-heading"
            className="
              mt-[10px]
              text-[24px] font-extrabold
              leading-[1.15] tracking-[-0.035em]
            "
          >
            We Don’t Measure
            <br />
            Content by Volume.

            <span
              className="
                mt-[3px] block
                text-[#00C9B5]
              "
            >
              We Look at What It
              <br />
              Contributes.
            </span>
          </h2>

          <p
            className="
              mt-[15px]
              text-[11px] font-normal
              leading-[1.7]
              text-[#C0D1D5]
            "
          >
            The point isn’t to produce more content. It’s to create
            more business value from the content you produce.
          </p>

          <a
            href="/services/performance-marketing"
            className="
              mt-[20px] flex min-h-[36px]
              w-full items-center justify-center
              rounded-[9px]
              border border-[#00C5AE]
              bg-[#00C5AE]
              px-3 py-[9px]
              font-['Arimo']
              text-[12px] font-bold
              !text-[#06272E]
              transition-colors duration-200
              hover:border-[#39E1CB]
              hover:bg-[#39E1CB]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white
            "
          >
            Get Performance Strategy
          </a>
        </div>

        {/* Performance outcomes */}
        <div
          className="space-y-[12px]"
        >
          {outcomes.map((outcome) => (
            <article
              key={outcome.title}
              className="
                flex items-start gap-[12px]
                rounded-[13px]
                border border-[#C7EDF0]
                bg-white
                p-[18px]
              "
            >
              <div
                className="
                  flex h-[32px] w-[32px] shrink-0
                  items-center justify-center
                  rounded-[10px]
                  bg-[#E2F9F5]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    block h-[18px] w-[18px]
                    bg-[#00C9B0]
                  "
                  style={{
                    WebkitMaskImage: `url("${outcome.icon}")`,
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskImage: `url("${outcome.icon}")`,
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    maskSize: "contain",
                  }}
                />
              </div>

              <div
                className="min-w-0"
              >
                <h3
                  className="
                    font-['Arimo']
                    text-[13px] font-bold
                    leading-[1.4]
                    text-[#102329]
                  "
                >
                  {outcome.title}
                </h3>

                <p
                  className="
                    mt-[5px]
                    text-[11px] font-normal
                    leading-[1.6]
                    text-[#66828F]
                  "
                >
                  {outcome.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContentPerformance;