import searchIcon from "../../assets/Search and Traffic.png";
import authorityIcon from "../../assets/Expertise.png";
import conversionIcon from "../../assets/Conversion.png";
import salesIcon from "../../assets/Sales.png";

const pillars = [
  {
    number: "01",
    category: "Search & Traffic",
    title: "Content That Gets You Found",
    description:
      "Your potential customers are already searching for information, comparing solutions, and evaluating businesses before they ever speak to a salesperson. We make sure your business appears when those decisions are being made.",
    listHeading: "Our SEO Content Services:",
    features: [
      "SEO blog articles",
      "Service and industry pages",
      "Pillar pages & topic clusters",
      "Search-intent content",
      "Content optimisation",
      "Existing content refreshes",
      "Keyword-led content planning",
    ],
    button: "Build Your Search Visibility",
    href: "/services/seo",
    icon: "search",
  },
  {
    number: "02",
    category: "Expertise & Trust",
    title: "Content That Builds Authority",
    description:
      "Your business already knows things your audience needs to know. We develop thought leadership and executive content that helps CEOs, founders, and businesses establish a stronger voice in their markets.",
    listHeading: "This Includes:",
    features: [
      "CEO & Founder leadership",
      "LinkedIn content",
      "Executive ghostwriting",
      "Industry commentary",
      "Opinion-led articles",
      "Expert insights",
      "Long-form authority content",
    ],
    button: "Build Your Market Authority",
    href: "/services/branding",
    icon: "authority",
  },
  {
    number: "03",
    category: "Conversion & Clarity",
    title: "Content That Makes Your Website Work Harder",
    description:
      "Your website is often where a potential customer moves from interest to evaluation. We write website and conversion copy that makes your proposition clearer and addresses the questions that influence decisions.",
    listHeading: "We Create:",
    features: [
      "Website copy",
      "Service pages",
      "Landing pages",
      "Product & solution pages",
      "Conversion copy",
      "Calls to action",
      "Brand messaging architecture",
    ],
    button: "Improve Your Website Messaging",
    href: "/contact",
    icon: "website",
  },
  {
    number: "04",
    category: "Sales Enablement",
    title: "Content That Supports the Sales Process",
    description:
      "A well-planned content strategy supports your sales team long before the first meeting. We create content around questions and objections that influence buying decisions.",
    listHeading: "Strategic Content Assets:",
    features: [
      "Case studies",
      "Buyer guides",
      "Comparison content",
      "Industry reports",
      "Whitepapers & lead magnets",
      "Sales enablement tools",
      "Email & lead nurture series",
    ],
    button: "Turn Expertise Into Sales Assets",
    href: "/contact",
    icon: "sales",
  },
];

function ContentPillars() {
  return (
    <section
      id="content-pillars"
      aria-labelledby="pillars-heading"
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
        {/* Section heading */}
        <div
          className="text-center"
        >
          <p
            className="
              font-['Arimo']
              text-[9px] font-bold
              uppercase tracking-[0.14em]
              text-[#00C9B5]
            "
          >
            Service Pillars
          </p>

          <h2
            id="pillars-heading"
            className="
              mx-auto mt-[12px] max-w-[700px]
              text-[27px] font-extrabold
              leading-[1.1] tracking-[-0.035em]
              sm:text-[34px]
            "
          >
            Comprehensive Content
            <br
              className="hidden sm:block"
            />{" "}
            Services Built for Impact
          </h2>
        </div>

        {/* Pillar cards */}
        <div
          className="
            mt-8 grid grid-cols-1 gap-5
            md:mt-10 md:grid-cols-2
          "
        >
          {pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="
                relative flex min-w-0 flex-col
                rounded-[13px]
                border border-[#164348]
                bg-[#063438]
                p-6
                sm:p-7
              "
            >
              {/* Pillar number */}
              <span
                className="
                  absolute right-6 top-6
                  rounded-full
                  bg-[#164247]
                  px-[8px] py-[3px]
                  font-['Arimo']
                  text-[8px] font-bold
                  leading-none
                  text-[#A4BEC2]
                "
              >
                Pillar {pillar.number}
              </span>

              <div
                className="
                  flex h-[38px] w-[38px]
                  items-center justify-center
                  rounded-[12px]
                  bg-[#004C4A]
                  text-[#00CEB9]
                "
              >
                <PillarIcon
                  type={pillar.icon}
                />
              </div>

              <p
                className="
                  mt-[20px]
                  font-['Arimo']
                  text-[9px] font-bold
                  uppercase tracking-[0.07em]
                  text-[#00C9B5]
                "
              >
                {pillar.category}
              </p>

              <h3
                className="
                  mt-[7px]
                  font-['Arimo']
                  text-[18px] font-bold
                  leading-[1.3]
                  text-white
                "
              >
                {pillar.title}
              </h3>

              <p
                className="
                  mt-[13px]
                  text-[11px] font-normal
                  leading-[1.65]
                  text-[#A6BEC3]
                "
              >
                {pillar.description}
              </p>

              {/* Included services */}
              <div
                className="mb-[24px] mt-[20px]"
              >
                <h4
                  className="
                    font-['Arimo']
                    text-[9px] font-bold
                    uppercase tracking-[0.03em]
                    text-[#00C9B5]
                  "
                >
                  {pillar.listHeading}
                </h4>

                <ul
                  className="
                    mt-[11px] grid grid-cols-1
                    gap-x-4 gap-y-[7px]
                    min-[420px]:grid-cols-2
                  "
                >
                  {pillar.features.map((feature) => (
                    <li
                      key={feature}
                      className="
                        flex items-start gap-[6px]
                        text-[10px] font-normal
                        leading-[1.5]
                        text-[#B5CDD0]
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
                          mt-[2px] h-[10px] w-[10px]
                          shrink-0
                          text-[#00D2BB]
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
              </div>

              {/* Action link */}
              <a
                href={pillar.href}
                className="
                  group mt-auto inline-flex min-h-[36px]
                  items-center justify-center gap-[7px]
                  rounded-[8px]
                  bg-[#123E43]
                  px-3 py-[9px]
                  font-['Arimo']
                  text-[10px] font-bold
                  !text-white
                  transition-colors duration-200
                  hover:bg-[#1A555B]
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#00C9B5]
                "
              >
                <span>{pillar.button}</span>

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

function PillarIcon({ type }) {
  const image = {
    search: searchIcon,
    authority: authorityIcon,
    website: conversionIcon,
    sales: salesIcon,
  }[type];

  return (
    <span
      aria-hidden="true"
      className="block h-[21px] w-[21px] bg-current"
      style={{
        WebkitMaskImage: `url("${image}")`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        maskImage: `url("${image}")`,
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
      }}
    />
  );
}
export default ContentPillars;