import startupIcon from "../../assets/Startup.png";
import foundersIcon from "../../assets/Founders.png";
import internationalIcon from "../../assets/International.png";


const audiences = [
  {
    title: "Ambitious Startups & SMEs",
    description:
      "Fast-moving companies looking to establish dominant search visibility and scalable lead generation funnels.",
    icon: "rocket",
  },
  {
    title: "Founders & C-Suite Leaders",
    description:
      "Executives and industry experts looking to build powerful personal brands and professional thought leadership.",
    icon: "people",
  },
  {
    title: "Growing & International Enterprises",
    description:
      "Established businesses in the UAE and beyond requiring a scalable digital marketing partner from strategy to execution.",
    icon: "globe",
  },
];

function AboutValues() {
  return (
    <section
      id="who-we-help"
      aria-labelledby="audience-heading"
      className="
        w-full bg-white
        px-5 py-6
        font-['Outfit']
        sm:px-8 sm:py-8
        lg:px-[55px]
      "
    >
      <div
        className="
          mx-auto w-full max-w-[1120px]
          bg-[#F2F9FA]
          px-5 py-12
          sm:px-8 sm:py-[44px]
          lg:px-12 lg:py-[48px]
        "
      >
        {/* Section heading */}
        <div
          className="flex flex-col items-center text-center"
        >
          <span
            className="
              rounded-full
              border border-[#AFE5E7]
              bg-[#DDF4F4]
              px-[13px] py-[5px]
              text-[9px] font-bold
              uppercase tracking-[0.12em]
              text-[#07515A]
            "
          >
            Who We Serve
          </span>

          <h2
            id="audience-heading"
            className="
              mt-[16px] max-w-[750px]
              font-['Manrope']
              text-[28px] font-extrabold
              leading-[1.15] tracking-[-0.035em]
              text-[#103238]
              sm:text-[32px]
              lg:text-[34px]
            "
          >
            Built for Businesses That Have
            <br
              className="hidden sm:block"
            />{" "}
            Somewhere to Go.
          </h2>

          <p
            className="
              mt-[17px] max-w-[700px]
              text-[12px] leading-[1.65]
              text-[#607387]
              sm:text-[13px]
            "
          >
            We work with organizations that aren’t interested in marketing
            just to look active. They want better opportunities, proven
            credibility, and real business results.
          </p>
        </div>

        {/* Audience cards */}
        <div
          className="
            mt-9 grid grid-cols-1 gap-5
            md:mt-[30px] md:grid-cols-3
          "
        >
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="
                rounded-[18px]
                border border-[#CDEDF0]
                bg-white
                p-5
                shadow-[0_5px_7px_rgba(20,67,73,0.12)]
              "
            >
              <div
                className="
                  flex h-[36px] w-[36px]
                  items-center justify-center
                  rounded-[12px]
                  bg-[#D9F3F3]
                  text-[#07515A]
                "
              >
                <AudienceIcon
                  type={audience.icon}
                />
              </div>

              <h3
                className="
                  mt-[15px]
                  text-[14px] font-bold
                  leading-[1.45]
                  text-[#12343A]
                "
              >
                {audience.title}
              </h3>

              <p
                className="
                  mt-[10px]
                  text-[11px] leading-[1.6]
                  text-[#65768B]
                "
              >
                {audience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceIcon({ type }) {
  const icons = { rocket: startupIcon, people: foundersIcon, globe: internationalIcon };
  const src = icons[type];

  return (
    <span
      aria-hidden="true"
      className="block h-[20px] w-[20px] bg-[#07515A]"
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
export default AboutValues;