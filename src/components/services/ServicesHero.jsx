import { useId } from "react";

import mainImage from "../../assets/Hero main iamge.png";
import smallImage from "../../assets/hero small.png";
import tealArrow from "../../assets/meteor-icons arrow-up-right (green).png";

function ServicesHero() {
  const imageClipId = useId();

  return (
    <section
      aria-labelledby="services-hero-heading"
      className="
        relative isolate overflow-hidden
        bg-[#032D31]
        px-5 pb-10 pt-8
        text-white
        sm:px-8
        lg:min-h-[560px]
        lg:px-[5%] lg:pb-[36px] lg:pt-[36px]
      "
    >
      {/* Decorative dots */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-7 top-6 -z-10
          h-[90px] w-[100px]
          opacity-60
          [background-image:radial-gradient(circle,#238792_2px,transparent_3px)]
          [background-size:15px_14px]
        "
      />

      <div
        className="
          mx-auto grid w-full max-w-[1000px]
          grid-cols-1 gap-8
          lg:grid-cols-[1.1fr_1fr] lg:gap-6
        "
      >
        {/* Left content */}
        <div>
          <h1
            id="services-hero-heading"
            className="
              max-w-[600px]
              font-['Manrope']
              text-[34px] font-extrabold
              leading-[1.08] tracking-[-0.035em]
              sm:text-[40px]
              lg:text-[42px]
              xl:text-[44px]
            "
          >
            Your Business
            <br />
            Doesn’t Need Every
            <br />
            Marketing Service
          </h1>

          <p
            className="
              mt-[18px] max-w-[460px]
              font-['Plus_Jakarta_Sans']
              text-[13px] font-normal
              leading-[1.55]
              text-[#E0EAEB]
              sm:text-[12px]
            "
          >
            More marketing isn’t always the answer. More posts won’t
            automatically create demand. More website traffic won’t
            automatically generate leads. And running ads won’t fix a
          </p>

          {/* Supporting card */}
          <article
            className="
              mt-[20px] w-full max-w-[320px]
              overflow-hidden rounded-[8px]
              bg-[linear-gradient(140deg,#0795A2_0%,#07535A_100%)]
            "
          >
            <div
              className="px-[16px] pb-[14px] pt-[14px]"
            >
              <h2
                className="
                  font-['Manrope']
                  text-[18px] font-bold
                  leading-[1.1] tracking-[-0.02em]
                "
              >
                It Needs the Right Ones
                <br />
                Working Together.
              </h2>

              <p
                className="
                  mt-[10px]
                  font-['Plus_Jakarta_Sans']
                  text-[12px] font-normal
                  leading-[1.3]
                  text-[#B8DCDF]
                "
              >
                We help businesses build the
                <br />
                visibility, authority, demand, and
                <br />
                digital infrastructure they need to
              </p>
            </div>

            <div
              className="relative"
            >
              <img
                src={smallImage}
                alt="A team working on a digital marketing plan"
                className="
                  block aspect-[2.5] w-full
                  rounded-t-[14px]
                  object-cover object-center
                "
              />

              <a
                href="#services-authority"
                className="
                  group absolute bottom-[8px] left-1/2
                  inline-flex min-h-[36px]
                  -translate-x-1/2
                  items-center justify-center gap-[8px]
                  whitespace-nowrap rounded-full
                  border border-white
                  bg-white
                  px-[17px] py-2
                  font-['Inter']
                  text-[11px] font-medium
                  !text-[#007580]
                  transition-colors duration-200
                  hover:bg-[#C8FAFB]
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-white
                "
              >
                <span>Explore All Services</span>

                <img
                  src={tealArrow}
                  alt=""
                  aria-hidden="true"
                  className="
                    h-[14px] w-[14px] object-contain
                    transition-transform duration-200
                    group-hover:translate-x-[2px]
                    group-hover:-translate-y-[2px]
                  "
                />
              </a>
            </div>
          </article>
        </div>

        {/* Right image composition */}
        <div
          className="
            relative mx-auto w-full max-w-[390px]
            self-end
            lg:mx-0 lg:mb-0
          "
        >
          <svg
            viewBox="0 0 480 500"
            role="img"
            aria-label="A team collaborating on business growth"
            className="block h-auto w-full"
          >
            <defs>
              <clipPath
                id={imageClipId}
                clipPathUnits="userSpaceOnUse"
              >
                {/* Upper image piece */}
                <path
                  d="
                    M230 25
                    H352
                    Q391 25 403 57
                    L437 142
                    Q442 157 426 157
                    H257
                    Q244 157 241 142
                    L218 48
                    Q213 25 230 25
                    Z
                  "
                />

                {/* Left image piece */}
                <path
                  d="
                    M91 123
                    H222
                    Q236 123 236 137
                    L244 324
                    Q245 343 227 343
                    H91
                    Q77 343 77 329
                    V138
                    Q77 123 91 123
                    Z
                  "
                />

                {/* Middle-right image piece */}
                <path
                  d="
                    M257 167
                    H432
                    Q446 167 446 181
                    V285
                    Q446 300 431 300
                    H258
                    Q244 300 244 286
                    V181
                    Q244 167 257 167
                    Z
                  "
                />

                {/* Lower image piece */}
                <path
                  d="
                    M249 311
                    H419
                    Q435 311 431 327
                    L407 419
                    Q403 438 382 438
                    H226
                    Q207 438 212 419
                    L233 328
                    Q237 311 249 311
                    Z
                  "
                />
              </clipPath>
            </defs>

            <image
              href={mainImage}
              x="65"
              y="25"
              width="390"
              height="420"
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#${imageClipId})`}
            />
          </svg>

          {/* Visit services label */}
          <div
            className="
              absolute right-[2%] top-[9%]
              rounded-[7px]
              border border-[#D7E7E8]
              bg-white
              px-[15px] py-[7px]
              text-center
              font-['Inter']
              shadow-[0_2px_4px_rgba(0,0,0,0.08)]
            "
          >
            <p
              className="
                text-[16px] font-semibold
                leading-[1.1] text-[#008793]
                sm:text-[20px]
              "
            >
              Visit Our
            </p>

            <p
              className="
                text-[14px] font-semibold
                leading-[1.1] text-black
                sm:text-[17px]
              "
            >
              Services
            </p>
          </div>

          {/* Grow label */}
          <div
            className="
              absolute left-0 top-[51%]
              rounded-[7px]
              border border-[#D7E7E8]
              bg-white
              px-[15px] py-[7px]
              text-center
              font-['Inter']
              shadow-[0_2px_4px_rgba(0,0,0,0.08)]
            "
          >
            <p
              className="
                text-[16px] font-semibold
                leading-[1.1] text-[#008793]
                sm:text-[20px]
              "
            >
              Grow Now
            </p>

            <p
              className="
                text-[14px] font-semibold
                leading-[1.1] text-black
                sm:text-[17px]
              "
            >
              With Us
            </p>
          </div>

          {/* Trust badge */}
          <div
            className="
              absolute bottom-[6%] right-[12%]
              flex h-[84px] w-[84px]
              flex-col items-center justify-center
              rounded-full
              border border-white
              bg-[#032D31]/30
              font-['Inter']
              text-white
              shadow-[0_3px_5px_rgba(0,0,0,0.2)]
              sm:h-[96px] sm:w-[96px]
            "
          >
            <span
              className="text-[26px] font-semibold leading-[1.1]"
            >
              100%
            </span>

            <span
              className="mt-1 text-[20px] font-semibold leading-none"
            >
              Trust
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
