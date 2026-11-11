import heroOne from "../../assets/Hero 1.png";
import heroTwo from "../../assets/Hero 2.png";
import heroThree from "../../assets/Hero 3.png";
import cardIcon from "../../assets/Icon for hero with image.png";
import rocketIcon from "../../assets/Rocket shape icon.png";

const cards = [
  {
    title: ["Your Marketing Shouldn’t", "Be One More Thing."],
    description: [
      "Then there is marketing.",
      "One team handles social media.",
      "Another runs the ads.",
    ],
    image: heroOne,
    alt: "A team discussing marketing around a laptop",
    light: false,
  },
  {
    title: ["Deltaz Media was built to", "make that simpler."],
    description: [
      "We are a digital marketing agency",
      "focused on helping ambitious",
      "businesses build visibility, earn trust.",
    ],
    image: heroTwo,
    alt: "A team planning their business strategy",
    light: true,
  },
  {
    title: ["Making the right marketing", "work together is."],
    description: [
      "And somehow, you’re still the",
      "one trying to figure out whether",
      "any of it is actually moving the business.",
    ],
    image: heroThree,
    alt: "Marketing analytics displayed on a laptop",
    light: false,
  },
];

function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="
        relative isolate overflow-hidden
        bg-[#032D31]
        px-5 pt-7
        font-['Outfit']
        text-white
        sm:px-8 sm:pt-[36px]
        lg:min-h-[560px]
      "
    >
      {/* Light background behind the bottom of the cards */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-x-0 bottom-0 -z-10
          h-[24px]
          bg-[#EAF5F6]
          sm:h-[36px]
        "
      />

      {/* Decorative dots */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-6 top-6 -z-10
          h-[85px] w-[95px]
          opacity-55
          [background-image:radial-gradient(circle,#238792_2px,transparent_3px)]
          [background-size:15px_14px]
        "
      />

      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-[6%] top-[60%] -z-10
          h-[14px] w-[14px]
          rounded-full
          bg-[#B5D8D6]/50
          blur-[3px]
        "
      />

      <div
        className="mx-auto w-full max-w-[1000px]"
      >
        {/* Heading and introduction */}
        <div
          className="flex flex-col items-center text-center"
        >
          <div
            className="
              inline-flex items-center gap-[7px]
              rounded-full
              border border-[#28575C]
              bg-[#0A363B]
              px-4 py-[5px]
              text-[10px] font-medium
              text-[#14B6C5]
            "
          >
            <img
              src={rocketIcon}
              alt=""
              aria-hidden="true"
              className="h-[11px] w-[11px] object-contain"
            />

            <span>Why Choose Us</span>
          </div>

          <h1
            id="about-hero-heading"
            className="
              mt-[14px] max-w-[800px]
              font-['Manrope']
              text-[32px] font-extrabold
              leading-[1.15] tracking-[-0.04em]
              sm:text-[42px]
              lg:text-[44px]
            "
          >
            Your Business Has Enough
            <br
              className="hidden sm:block"
            />{" "}
            to Manage.
          </h1>

          <p
            className="
              mt-[20px] max-w-[560px]
              text-[13px] leading-[1.35]
              text-[#AFC6C8]
              sm:text-[13px]
            "
          >
            Running a business already means making decisions about
            <br
              className="hidden sm:block"
            />{" "}
            people, operations,
            <br
              className="hidden sm:block"
            />{" "}
            clients, revenue, and what comes next.
          </p>
        </div>

        {/* Introduction cards */}
        <div
          className="
            mt-7 grid grid-cols-1 gap-5
            sm:mt-[34px]
            md:grid-cols-3 md:gap-[18px]
          "
        >
          {cards.map((card) => (
            <article
              key={card.title[0]}
              className={`
                relative flex min-w-0 flex-col
                overflow-hidden rounded-[8px]
                ${
                  card.light
                    ? "bg-white text-[#008D9A]"
                    : "bg-[linear-gradient(to_bottom,#0795A2_0%,#06434A_100%)] text-white"
                }
              `}
            >
              <div
                className="flex-1 px-[18px] pb-[20px] pt-[18px]"
              >
                <h2
                  className="
                    max-w-[260px]
                    text-[15px] font-semibold
                    leading-[1.2] tracking-[-0.02em]
                    lg:text-[16px]
                  "
                >
                  {card.title.map((line, index) => (
                    <span
                      key={line}
                    >
                      {index > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </h2>

                <p
                  className={`
                    mt-[16px]
                    text-[12px] font-normal leading-[1.25]
                    lg:text-[13px]
                    ${
                      card.light
                        ? "text-[#278D98]"
                        : "text-[#C0E0E3]"
                    }
                  `}
                >
                  {card.description.map((line, index) => (
                    <span
                      key={line}
                    >
                      {index > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
              </div>

              <div
                className="relative ml-[18px] lg:ml-[34px]"
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className="
                    block aspect-[1.7] w-full
                    object-cover object-center
                  "
                />

                {/* Corner icon */}
                <span
                  aria-hidden="true"
                  className={`
                    absolute bottom-0 right-0
                    flex h-[58px] w-[58px]
                    items-center justify-center
                    rounded-tl-[30px]
                    pl-[4px] pt-[4px]
                    ${card.light ? "bg-white" : "bg-[#06434A]"}
                  `}
                >
                  <span
                    className={`
                      flex h-[42px] w-[42px]
                      items-center justify-center
                      rounded-full border
                      ${
                        card.light
                          ? "border-[#8CC5CA]"
                          : "border-[#8CC5CA]/70"
                      }
                    `}
                  >
                    <span
                      className={`
                        block h-[26px] w-[26px]
                        ${
                          card.light
                            ? "bg-[#007D87]"
                            : "bg-white"
                        }
                      `}
                      style={{
                        WebkitMaskImage: `url("${cardIcon}")`,
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskImage: `url("${cardIcon}")`,
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        maskSize: "contain",
                      }}
                    />
                  </span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
