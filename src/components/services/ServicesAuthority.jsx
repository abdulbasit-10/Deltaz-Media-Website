import searchIcon from "../../assets/Seo optimization icon.png";
import authorityIcon from "../../assets/Authority.png";

const seoServices = [
  "SEO Strategy",
  "Technical SEO",
  "On-Page SEO",
  "Content SEO",
  "Local SEO",
  "Search Visibility",
  "Organic Traffic Growth",
];

function ServicesAuthority() {
  return (
    <section
      id="services-authority"
      aria-labelledby="authority-heading"
      className="
        w-full
        bg-[#EAF5F6]
        px-5 py-12
        font-['Plus_Jakarta_Sans']
        text-[#12343A]
        sm:px-8 sm:py-[60px]
      "
    >
      <div
        className="mx-auto w-full max-w-[1000px]"
      >
        {/* Section heading */}
        <div
          className="flex flex-col items-center text-center"
        >
          <span
            className="
              rounded-full
              border border-[#A0E1E1]
              bg-[#D2F1F1]
              px-[13px] py-[5px]
              font-['Inter']
              text-[9px] font-semibold
              uppercase tracking-[0.12em]
              text-[#10484C]
            "
          >
            Core Foundation
          </span>

          <h2
            id="authority-heading"
            className="
              mt-[14px]
              font-['Manrope']
              text-[28px] font-extrabold
              leading-[1.2] tracking-[-0.035em]
              sm:text-[34px]
            "
          >
            <span
              className="
                bg-[linear-gradient(90deg,#007B72_0%,#0061B7_100%)]
                bg-clip-text text-transparent
              "
            >
              Get Found. Build Authority.
            </span>
          </h2>

          <p
            className="
              mt-[12px] max-w-[620px]
              text-[12px] leading-[1.65]
              text-[#607387]
              sm:text-[13px]
            "
          >
            Strengthen your digital presence, gain search market share,
            and turn expertise into unshakeable market trust.
          </p>
        </div>

        {/* Foundation cards */}
        <div
          className="
            mt-8 grid grid-cols-1 gap-5
            md:mt-10 md:grid-cols-2 md:gap-6
          "
        >
          {/* Get Found */}
          <article
            className="
              relative flex min-w-0 flex-col
              overflow-hidden rounded-[18px]
              border border-[#BCE8EA]
              bg-[#EDF8F9]
              p-6
              shadow-[0_8px_12px_rgba(20,67,73,0.14)]
              lg:p-7
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute inset-x-0 top-0 h-[5px]
                bg-[linear-gradient(90deg,#00BDAF_0%,#00DECB_100%)]
              "
            />

            <CategoryHeading
              icon={searchIcon}
              number="01"
              title="Get Found."
            />

            <p
              className="
                mt-[20px]
                font-['Inter']
                text-[9px] font-semibold
                uppercase leading-[1.5]
              "
            >
              Because your next customer is already looking.
            </p>

            <p
              className="
                mt-[6px]
                text-[11px] leading-[1.7]
                text-[#607387]
              "
            >
              People are searching for products, services, solutions, and
              businesses like yours every day. The question is:{" "}
              <strong
                className="font-bold"
              >
                Will they find you—or your competitor?
              </strong>{" "}
              We help businesses strengthen their search visibility and
              put themselves in front of people with real intent.
            </p>

            <div
              className="mb-[24px] mt-[20px]"
            >
              <p
                className="
                  font-['Inter']
                  text-[9px] font-bold
                  uppercase tracking-[0.06em]
                  text-[#8CA2B9]
                "
              >
                SEO &amp; Organic Growth Covers:
              </p>

              <ul
                className="mt-[10px] flex flex-wrap gap-[6px]"
              >
                {seoServices.map((service) => (
                  <li
                    key={service}
                    className="
                      rounded-[6px]
                      border border-[#E0ECEF]
                      bg-white/90
                      px-[9px] py-[5px]
                      font-['Inter']
                      text-[9px] font-medium
                      leading-[1.2]
                      text-[#455870]
                    "
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <ServiceLink
              href="/services/seo"
              className="mt-auto"
            >
              Explore SEO &amp; Organic Growth
            </ServiceLink>
          </article>

          {/* Build Authority */}
          <article
            className="
              relative flex min-w-0 flex-col
              overflow-hidden rounded-[18px]
              border border-[#BCE8EA]
              bg-[#EDF8F9]
              p-6
              shadow-[0_8px_12px_rgba(20,67,73,0.14)]
              lg:p-7
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute inset-x-0 top-0 h-[5px]
                bg-[linear-gradient(90deg,#00BDAF_0%,#00DECB_100%)]
              "
            />

            <CategoryHeading
              icon={authorityIcon}
              number="02"
              title="Build Authority."
            />

            <p
              className="
                mt-[20px]
                font-['Inter']
                text-[9px] font-semibold
                uppercase leading-[1.5]
              "
            >
              Give people a reason to trust you before they need to buy.
            </p>

            <p
              className="
                mt-[6px]
                text-[11px] leading-[1.7]
                text-[#607387]
              "
            >
              People rarely trust a business simply because it says it’s
              good. They look for signals: What do you know? What have you
              done? What are you saying? We help businesses turn expertise
              into visibility and trust.
            </p>

            <div
              className="mb-[22px] mt-[18px] space-y-[10px]"
            >
              <AuthorityDetail
                title="Content Marketing"
                description="
                  Website copy, SEO blogs, scripts, LinkedIn content &
                  distribution systems.
                "
              />

              <AuthorityDetail
                title="Personal Branding & Thought Leadership"
                description="
                  Positioning CEOs, founders, and leaders to make company
                  trust faster to build.
                "
              />
            </div>

            <div
              className="
                mt-auto grid grid-cols-1 gap-[8px]
                sm:grid-cols-2
              "
            >
              <ServiceLink
                href="/services/content-marketing"
              >
                Content Marketing
              </ServiceLink>

              <ServiceLink
                href="/services/branding"
              >
                Build Authority
              </ServiceLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function CategoryHeading({ icon, number, title }) {
  return (
    <div
      className="flex items-center gap-[10px]"
    >
      <div
        className="
          flex h-[36px] w-[36px] shrink-0
          items-center justify-center
          rounded-[11px]
          border border-[#8FDFDF]
          bg-[#C8F0F0]
        "
      >
        <span
          aria-hidden="true"
          className="
            block h-[19px] w-[19px]
            bg-[#074A50]
          "
          style={{
            WebkitMaskImage: `url("${icon}")`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "contain",
            maskImage: `url("${icon}")`,
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "contain",
          }}
        />
      </div>

      <div>
        <p
          className="
            font-['Inter']
            text-[9px] font-semibold
            uppercase tracking-[0.12em]
            text-[#00BBAE]
          "
        >
          Category {number}
        </p>

        <h3
          className="
            mt-[4px]
            font-['Manrope']
            text-[18px] font-extrabold
            leading-[1.2] tracking-[-0.02em]
          "
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

function AuthorityDetail({ title, description }) {
  return (
    <div
      className="
        rounded-[10px]
        border border-[#E0ECEF]
        bg-white/85
        px-[12px] py-[10px]
      "
    >
      <h4
        className="
          font-['Inter']
          text-[9px] font-bold
          uppercase leading-[1.5]
          text-[#163B40]
        "
      >
        {title}
      </h4>

      <p
        className="
          mt-[4px]
          text-[10px] leading-[1.6]
          text-[#7C90A7]
        "
      >
        {description}
      </p>
    </div>
  );
}

function ServiceLink({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={`
        group flex min-h-[36px]
        items-center justify-between gap-[8px]
        rounded-[10px]
        border border-[#17474B]
        bg-[#032D31]
        px-[15px] py-[10px]
        font-['Inter']
        text-[8px] font-semibold
        uppercase tracking-[0.04em]
        !text-white
        transition-colors duration-200
        hover:bg-[#07535A]
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#008D98]
        ${className}
      `}
    >
      <span>{children}</span>

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
          text-[#00C5B8]
          transition-transform duration-200
          group-hover:translate-x-[2px]
        "
      >
        <path
          d="M5 12h14M13 6l6 6-6 6"
        />
      </svg>
    </a>
  );
}

export default ServicesAuthority;