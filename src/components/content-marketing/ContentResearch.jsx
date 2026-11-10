import linkedinIcon from "../../assets/Linked in.png";
import articleIcon from "../../assets/SEO Article.png";
import newsletterIcon from "../../assets/Newsletter.png";
import videoIcon from "../../assets/Videoscript.png";

const contentAssets = [
  {
    title: "LinkedIn Posts",
    icon: linkedinIcon,
  },
  {
    title: "SEO Article",
    icon: articleIcon,
  },
  {
    title: "Newsletter",
    icon: newsletterIcon,
  },
  {
    title: "Video Script",
    icon: videoIcon,
  },
];

function ContentResearch() {
  return (
    <section
      id="content-research"
      aria-labelledby="research-heading"
      className="
        w-full
        bg-[#EAF5F6]
        px-5 py-12
        font-['Plus_Jakarta_Sans']
        text-[#102329]
        sm:px-8 sm:py-[55px]
      "
    >
      <div
        className="
          mx-auto grid w-full max-w-[900px]
          grid-cols-1 items-center gap-7
          rounded-[18px]
          border border-[#C7EDF0]
          bg-white
          p-6
          shadow-[0_10px_14px_rgba(20,67,73,0.14)]
          sm:p-8
          md:grid-cols-[1fr_1fr]
          md:gap-8
        "
      >
        {/* Introduction */}
        <div>
          <p
            className="
              text-[9px] font-bold
              uppercase leading-[1.5]
              text-[#00BFA8]
            "
          >
            Maximum Multi-Channel Value
          </p>

          <h2
            id="research-heading"
            className="
              mt-[7px]
              text-[25px] font-extrabold
              leading-[1.1] tracking-[-0.035em]
              sm:text-[28px]
            "
          >
            One Idea Should Create
            <br
              className="hidden sm:block"
            />{" "}
            More Than One Asset.
          </h2>

          <div
            className="
              mt-[18px]
              space-y-[17px]
              text-[11px] font-normal
              leading-[1.65]
              text-[#66828F]
              sm:text-[12px]
            "
          >
            <p>
              A founder’s interview can become a LinkedIn article,
              several social posts, a newsletter, a video script, and
              a website insight.
            </p>

            <p>
              A research report can support SEO content, sales material,
              social campaigns, and thought leadership. We look for
              these opportunities so you’re not continually starting
              from zero.
            </p>
          </div>

          {/* Repurposing button */}
          <a
            href="/contact"
            className="
              group mt-[22px] inline-flex min-h-[36px]
              items-center justify-center gap-[7px]
              rounded-[9px]
              border border-[#123D43]
              bg-[#032D31]
              px-[16px] py-[10px]
              font-['Arimo']
              text-[11px] font-bold
              !text-white
              transition-colors duration-200
              hover:bg-[#07535A]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#00BFA8]
            "
          >
            <span>Explore Content Repurposing</span>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="
                h-[13px] w-[13px] shrink-0
                text-[#00CAB5]
                transition-transform duration-200
                group-hover:translate-x-[2px]
              "
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </a>
        </div>

        {/* Content repurposing diagram */}
        <div
          className="
            rounded-[13px]
            bg-[#06272E]
            p-[18px]
            text-white
          "
        >
          <h3
            className="
              border-b border-white/10
              pb-[16px]
              text-center
              font-['Cousine']
              text-[9px] font-normal
              uppercase leading-[1.5]
              tracking-[0.6px]
              text-[#00D1B8]
            "
          >
            1 Core Insight / Key Interview
          </h3>

          <div
            className="
              mt-[16px] grid grid-cols-2
              gap-x-[8px] gap-y-[14px]
            "
          >
            {contentAssets.map((asset) => (
              <div
                key={asset.title}
                className="
                  flex min-h-[52px] min-w-0
                  flex-col items-center justify-center
                  gap-[6px]
                  rounded-[7px]
                  border border-[#29454B]
                  bg-[#132F36]
                  px-2 py-[9px]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    block h-[16px] w-[16px]
                    bg-[#00C9B2]
                  "
                  style={{
                    WebkitMaskImage: `url("${asset.icon}")`,
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskImage: `url("${asset.icon}")`,
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    maskSize: "contain",
                  }}
                />

                <p
                  className="
                    text-center
                    text-[9px] font-semibold
                    leading-[1.4]
                    text-white
                  "
                >
                  {asset.title}
                </p>
              </div>
            ))}
          </div>

          <p
            className="
              mt-[27px]
              text-center
              text-[8px] font-normal italic
              leading-[1.6]
              text-[#93A8B0]
            "
          >
            Consistent brand message • Greater efficiency • Higher asset
            yield
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContentResearch;
