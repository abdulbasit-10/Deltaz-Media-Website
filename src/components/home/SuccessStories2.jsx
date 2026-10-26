import { useEffect, useRef, useState } from "react";

import strategyImage from "../../assets/Image for strategy.png";
import smallBoxWaves from "../../assets/Waves for small box.png";
import marketingWaves from "../../assets/Waves for marketing box.png";
import growthArrow from "../../assets/Arrow with bar upward.png";
import searchIcon from "../../assets/Seo optimization icon.png";

import whiteArrow from "../../assets/meteor-icons_arrow-up-right (white).png";
import tealArrow from "../../assets/meteor-icons arrow-up-right (green).png";

function SuccessStories2() {
  return (
    <section
      id="success-results"
      aria-label="Our marketing results"
      className="
        w-full bg-white
        px-5 pb-12
        font-['Plus_Jakarta_Sans']
        sm:px-8 sm:pb-[60px]
        lg:px-10 lg:pb-[70px]
      "
    >
      <div
        className="
          mx-auto grid w-full max-w-[1120px]
          grid-cols-1 gap-[12px]
          lg:grid-cols-[0.95fr_1.15fr]
        "
      >
        {/* Strategy image card */}
        <article
          className="
            relative isolate flex min-h-[390px]
            flex-col justify-end
            overflow-hidden rounded-[14px]
            bg-[#98DEDF]
            px-6 pb-6 pt-[180px]
            shadow-[0_3px_8px_rgba(0,83,89,0.12)]
            sm:min-h-[430px]
            lg:min-h-[450px]
          "
        >
          <img
            src={strategyImage}
            alt="A marketing team discussing a strategy together"
            loading="lazy"
            className="
              absolute inset-0 -z-20
              h-full w-full
              object-cover object-center
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute inset-0 -z-10
              bg-[linear-gradient(to_bottom,rgba(3,45,49,0.02)_20%,rgba(68,194,201,0.38)_58%,rgba(71,232,238,0.96)_100%)]
            "
          />

          <h2
            className="
              max-w-[300px]
              font-['Manrope']
              text-[25px] font-extrabold
              leading-[1.2] tracking-[-0.03em]
              text-[#205C63]
              sm:text-[28px]
            "
          >
            Strategy That Creates Impact
          </h2>

          <p
            className="
              mt-[12px] max-w-[350px]
              text-[11px] leading-[1.6]
              text-[#174E56]
            "
          >
            From smart campaigns to creative digital solutions, we turn
            your marketing goals into measurable growth.
          </p>

          <a
            href="/contact"
            className="
              group mt-[17px] inline-flex min-h-[36px]
              items-center justify-center gap-[7px]
              self-start rounded-full
              bg-[#087F89]
              px-[14px] py-2
              font-['Inter']
              text-[10px] font-medium text-white
              transition-colors duration-200
              hover:bg-[#006B73]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#032D31]
            "
          >
            <span>Explore Our Results</span>

            <img
              src={whiteArrow}
              alt=""
              aria-hidden="true"
              className="
                h-[13px] w-[13px] object-contain
                transition-transform duration-200
                group-hover:translate-x-[2px]
                group-hover:-translate-y-[2px]
              "
            />
          </a>
        </article>

        {/* Right-hand cards */}
        <div
          className="
            grid min-w-0 grid-cols-1 gap-[12px]
            sm:grid-cols-[1.2fr_1fr]
          "
        >
          {/* Organic growth card */}
          <article
            className="
              flex flex-col items-start
              rounded-[14px]
              bg-[#008995]
              p-5
              text-white
              shadow-[0_3px_8px_rgba(0,83,89,0.12)]
            "
          >
            <div
              className="
                flex h-[36px] w-[36px]
                items-center justify-center
                rounded-[7px]
                bg-[#E4F7F8]
              "
            >
              <span
                aria-hidden="true"
                className="
                  block h-[19px] w-[19px]
                  bg-[#007D87]
                "
                style={{
                  WebkitMaskImage: `url("${searchIcon}")`,
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  WebkitMaskSize: "contain",
                  maskImage: `url("${searchIcon}")`,
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  maskSize: "contain",
                }}
              />
            </div>

            <h3
              className="
                mt-[12px]
                text-[14px] font-semibold
                leading-[1.4] text-[#043C43]
              "
            >
              From Visibility to Growth
            </h3>

            <p
              className="
                mt-[8px]
                text-[11px] leading-[1.6]
                text-[#D3F1F2]
              "
            >
              Our SEO strategy helped increase organic visibility, attract
              qualified traffic, and turn searches into real business
              opportunities.
            </p>

            <ResultLink
              href="/services/seo"
              className="mt-[16px]"
            >
              View Results
            </ResultLink>
          </article>

          {/* Animated statistics */}
          <StatsCard />

          {/* Marketing results card */}
          <article
            className="
              relative isolate flex min-h-[220px]
              flex-col items-start justify-center
              overflow-hidden rounded-[14px]
              bg-[linear-gradient(110deg,#00727D_0%,#08CDD5_100%)]
              p-5
              text-white
              shadow-[0_3px_8px_rgba(0,83,89,0.12)]
              sm:col-span-2
            "
          >
            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute block
                bottom-[-20px] right-[-15px] -z-10
                h-[230px] w-full
                bg-[#A5FFFA]/90
              "
              style={{
                WebkitMaskImage: `url("${marketingWaves}")`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "right bottom",
                WebkitMaskSize: "100% 100%",
                maskImage: `url("${marketingWaves}")`,
                maskRepeat: "no-repeat",
                maskPosition: "right bottom",
                maskSize: "100% 100%",
              }}
            />

            <h3
              className="
                max-w-[350px]
                text-[18px] font-medium
                leading-[1.4] tracking-[-0.02em]
                text-[#033C43]
              "
            >
              Marketing That Delivers Results
            </h3>

            <p
              className="
                mt-[12px] max-w-[370px]
                text-[13px] leading-[1.6]
              "
            >
              We combine creativity, strategy, and digital expertise to
              turn attention into measurable growth.
            </p>

            <ResultLink
              href="#success-stories"
              className="mt-[22px]"
            >
              View Success Stories
            </ResultLink>

            {/* White growth illustration */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute
                bottom-[10px] right-[12px] -z-10
                h-[110px] w-[130px]
                bg-white/80
                sm:h-[125px] sm:w-[150px]
              "
              style={{
                WebkitMaskImage: `url("${growthArrow}")`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                WebkitMaskSize: "contain",
                maskImage: `url("${growthArrow}")`,
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "contain",
              }}
            />
          </article>
        </div>
      </div>
    </section>
  );
}

function ResultLink({ href, className = "", children }) {
  return (
    <a
      href={href}
      className={`
        group inline-flex min-h-[34px]
        items-center justify-center gap-[7px]
        self-start rounded-full
        bg-white
        px-[13px] py-2
        font-['Inter']
        text-[10px] font-medium
        !text-[#00747F]
        transition-colors duration-200
        hover:bg-[#C8FAFB]
        hover:!text-[#06494F]
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-white
        ${className}
      `}
    >
      <span>{children}</span>

      <img
        src={tealArrow}
        alt=""
        aria-hidden="true"
        className="
          h-[13px] w-[13px] object-contain
          transition-transform duration-200
          group-hover:translate-x-[2px]
          group-hover:-translate-y-[2px]
        "
      />
    </a>
  );
}

function StatsCard() {
  const cardRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = cardRef.current;

    if (!element) return;

    let frameId;
    let observer;

    function startAnimation() {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const startedAt = performance.now();
      const duration = reduceMotion ? 0 : 1400;

      function update(now) {
        const elapsed = now - startedAt;
        const nextProgress = duration === 0
          ? 1
          : Math.min(elapsed / duration, 1);

        setProgress(1 - Math.pow(1 - nextProgress, 3));

        if (nextProgress < 1) {
          frameId = requestAnimationFrame(update);
        }
      }

      frameId = requestAnimationFrame(update);
    }

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            observer.disconnect();
            startAnimation();
          }
        },
        { threshold: 0.25 }
      );

      observer.observe(element);
    } else {
      startAnimation();
    }

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className="
        relative isolate flex flex-col justify-center
        overflow-hidden rounded-[14px]
        bg-[#086068]
        p-5
        text-white
        shadow-[0_3px_8px_rgba(0,83,89,0.12)]
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-[45px] -top-[60px] -z-10
          h-[140px] w-[140px]
          rounded-full bg-[#C0F5EE]/40
          blur-[35px]
        "
      />

      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute block
          bottom-[-15px] right-[-15px] -z-10
          h-[180px] w-[280px]
          bg-[#8AE4E4]/80
        "
        style={{
          WebkitMaskImage: `url("${smallBoxWaves}")`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "right bottom",
          WebkitMaskSize: "contain",
          maskImage: `url("${smallBoxWaves}")`,
          maskRepeat: "no-repeat",
          maskPosition: "right bottom",
          maskSize: "contain",
        }}
      />

      <p
        aria-label="450 plus live websites launched"
      >
        <span
          aria-hidden="true"
          className="
            block font-['DM_Serif_Display']
            text-[44px] leading-none
            tracking-[-0.04em]
          "
        >
          {Math.round(450 * progress)}+
        </span>

        <span
          aria-hidden="true"
          className="
            mt-[9px] block
            text-[11px] leading-[1.5]
            tracking-[0.06em]
            text-[#D3EBED]
          "
        >
          Live Websites Launched
        </span>
      </p>

      <div
        aria-hidden="true"
        className="my-[14px] h-px w-full bg-white/20"
      />

      <p
        aria-label="120 plus brands supported"
      >
        <span
          aria-hidden="true"
          className="
            block font-['DM_Serif_Display']
            text-[44px] leading-none
            tracking-[-0.04em]
          "
        >
          {Math.round(120 * progress)}+
        </span>

        <span
          aria-hidden="true"
          className="
            mt-[9px] block
            text-[11px] leading-[1.5]
            tracking-[0.06em]
            text-[#D3EBED]
          "
        >
          Brands Supported
        </span>
      </p>
    </article>
  );
}

export default SuccessStories2;
