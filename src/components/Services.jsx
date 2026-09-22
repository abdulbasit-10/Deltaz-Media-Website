import seoImage from "../assets/Seo Optimization.png";
import socialMediaImage from "../assets/Social Media Marketing.png";
import contentMarketingImage from "../assets/Content Marketing.png";

import seoIcon from "../assets/Seo optimization icon.png";
import socialMediaIcon from "../assets/Social Media Icon.png";
import contentMarketingIcon from "../assets/Content Marketing icon.png";

import darkCardArrow from "../assets/Icon to attach with images.svg";
import whiteArrow from "../assets/meteor-icons_arrow-up-right.png";
import blackArrow from "../assets/meteor-icons arrow-up-right (black).png";
import exploreArrowWhite from "../assets/meteor-icons_arrow-up-right (white).png";

import servicesWaves from "../assets/Waves for Our services.png";
import { useTheme } from "../context/useTheme";

const services = [
  {
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies that improve search visibility, attract qualified traffic, and drive long-term growth.",
    image: seoImage,
    icon: seoIcon,
  },
  {
    title: "Social Media Marketing",
    description:
      "Build a stronger social presence with creative campaigns that engage your audience and grow your brand.",
    image: socialMediaImage,
    icon: socialMediaIcon,
  },
  {
    title: "Content Marketing",
    description:
      "Create valuable content that builds trust, connects with your audience, and turns attention into action.",
    image: contentMarketingImage,
    icon: contentMarketingIcon,
  },
];

function Services() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section
      id="services"
      className={`relative min-h-[650px] w-full overflow-hidden px-[24px] py-[48px] transition-colors duration-300 sm:px-[32px] ${
        isLight ? "bg-[#EEF8F8]" : "bg-[#08272A]"
      }`}
    >
      {isLight && (
        <>
          <div className="pointer-events-none absolute -left-[120px] -top-[85px] h-[340px] w-[390px] rounded-full bg-[#4FB8BB]/58 blur-[72px]" />
          <div className="pointer-events-none absolute left-[20%] top-[235px] h-[180px] w-[300px] rounded-full bg-[#8DCDD0]/28 blur-[92px]" />
          <div className="pointer-events-none absolute -bottom-[125px] left-[35px] h-[300px] w-[380px] rounded-full bg-[#249FA7]/43 blur-[78px]" />
          <div className="pointer-events-none absolute -bottom-[150px] -right-[85px] h-[340px] w-[455px] rounded-full bg-[#43B6BC]/48 blur-[86px]" />
          <div className="pointer-events-none absolute right-[10%] top-[92px] h-[160px] w-[220px] rounded-full bg-white/35 blur-[68px]" />
        </>
      )}

      <img
        src={servicesWaves}
        alt=""
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 right-0 z-[1] h-auto w-[1010px] max-w-none object-contain ${
          isLight ? "opacity-24" : "opacity-65"
        }`}
      />

      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-[66px] top-[112px] z-[2] h-[14px] w-[14px] rounded-full blur-[3px] ${
          isLight ? "bg-white opacity-80" : "bg-[#D7E0E0] opacity-55"
        }`}
      />

      <span
        aria-hidden="true"
        className={`pointer-events-none absolute right-[130px] top-[90px] z-[2] h-[13px] w-[13px] rounded-full ${
          isLight ? "bg-[#77ADB1] opacity-65" : "bg-[#08737D] opacity-75"
        }`}
      />

      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-[65px] left-[135px] z-[2] h-[13px] w-[13px] rounded-full ${
          isLight ? "bg-[#3D969C] opacity-70" : "bg-[#08737D] opacity-65"
        }`}
      />

      <div className="relative z-10 mx-auto flex w-full flex-col items-center">
        <div
          className={`font-['Inter'] text-[11px] font-medium leading-none ${
            isLight ? "text-[#00737C]" : "text-[#C1CDCE]"
          }`}
        >
          Our Services
        </div>

        <h2
          className={`mt-[21px] max-w-[850px] text-center font-['Plus_Jakarta_Sans'] text-[38px] font-extrabold leading-[1.08] tracking-[-1.5px] sm:text-[42px] lg:text-[44px] ${
            isLight ? "text-[#25282B]" : "text-[#F4F8F8]"
          }`}
        >
          Marketing Solutions That Drive
          <br />
          Real Business{" "}
          <span className={isLight ? "text-[#005D85]" : "text-[#18D0E4]"}>
            &amp; Growth
          </span>
        </h2>

        <p
          className={`mt-[18px] max-w-[760px] text-center font-['Inter'] text-[12px] font-normal leading-[1.4] sm:text-[11px] ${
            isLight ? "text-[#34494B]" : "text-[#91A9AA]"
          }`}
        >
          We combine strategy, creativity, and digital expertise to help
          businesses attract the right audience, build influence, and turn
          attention into growth.
        </p>

        <div className="mt-[40px] flex w-full items-stretch justify-center gap-[14px] overflow-x-auto pb-[2px]">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
              isLight={isLight}
            />
          ))}
        </div>

        <a
          href="#services"
          className={`group mt-[44px] inline-flex h-[34px] items-center justify-center gap-[8px] rounded-full border px-[19px] font-['Inter'] text-[11px] font-bold leading-none transition-all duration-200 ${
            isLight
              ? "border-[#007881] bg-[#007881] text-white shadow-[0_3px_9px_rgba(0,91,98,0.18)] hover:border-[#152B2D] hover:bg-transparent hover:text-[#152B2D]"
              : "border-[#18D0E4] bg-transparent text-white hover:border-[#18D0E4] hover:bg-[#18D0E4]"
          }`}
        >
          <span className={isLight ? "text-white group-hover:text-[#152B2D]" : ""}>
            Explore All Services
          </span>

          {isLight ? (
            <>
              <img
                src={whiteArrow}
                alt=""
                aria-hidden="true"
                className="h-[14px] w-[14px] object-contain group-hover:hidden"
              />
              <img
                src={blackArrow}
                alt=""
                aria-hidden="true"
                className="hidden h-[14px] w-[14px] object-contain group-hover:block"
              />
            </>
          ) : (
            <img
              src={exploreArrowWhite}
              alt=""
              aria-hidden="true"
              className="h-[14px] w-[14px] object-contain"
            />
          )}
        </a>
      </div>
    </section>
  );
}

function ServiceCard({ service, isLight }) {
  return (
    <article
      className={`group relative flex h-[370px] w-[390px] shrink-0 flex-col overflow-hidden rounded-[9px] border p-[10px] transition-all duration-300 ${
        isLight
          ? "border-[#E0EEEE] bg-[#FCFEFE] shadow-[0_4px_12px_rgba(7,72,77,0.09)] hover:border-[#008E98] hover:bg-[linear-gradient(135deg,#00B9C6_0%,#008E98_100%)] hover:shadow-[0_10px_22px_rgba(0,101,108,0.28)]"
          : "border-[#1A6267]/75 bg-[#0D393D] hover:border-[#18C9D8] hover:bg-[#128995]"
      }`}
    >
      <div
        className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[7px] transition-colors duration-300 ${
          isLight
            ? "bg-[#EAF6F6] group-hover:bg-[#12C8D5]"
            : "bg-[#092F33] group-hover:bg-[#0C7079]"
        }`}
      >
        {isLight ? (
          <span
            aria-hidden="true"
            className="h-[17px] w-[17px] bg-[#007B84] transition-colors duration-300 group-hover:bg-white"
            style={{
              WebkitMaskImage: `url("${service.icon}")`,
              WebkitMaskPosition: "center",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskImage: `url("${service.icon}")`,
              maskPosition: "center",
              maskRepeat: "no-repeat",
              maskSize: "contain",
            }}
          />
        ) : (
          <img
            src={service.icon}
            alt=""
            aria-hidden="true"
            className="h-[17px] w-[17px] object-contain"
          />
        )}
      </div>

      <h3
        className={`mt-[12px] font-['Inter'] text-[14px] font-semibold leading-[1.2] transition-colors duration-300 ${
          isLight
            ? "text-[#1F3032] group-hover:text-white"
            : "text-[#EDF5F5]"
        }`}
      >
        {service.title}
      </h3>

      <p
        className={`mt-[7px] min-h-[43px] max-w-[370px] font-['Inter'] text-[10px] font-normal leading-[1.45] transition-colors duration-300 ${
          isLight
            ? "text-[#71888A] group-hover:text-[#E2F9FA]"
            : "text-[#9EB4B5] group-hover:text-[#D8EEEE]"
        }`}
      >
        {service.description}
      </p>

      <div className="relative mt-auto h-[220px] w-full shrink-0 overflow-hidden rounded-[6px]">
        <img
          src={service.image}
          alt={service.title}
          className="block h-full w-full object-cover"
        />

        {isLight ? (
<a
  href="#project"
  aria-label={`View ${service.title}`}
  className="absolute bottom-4 right-0 z-10 flex h-[46.5px] w-[46.5px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_28%,#34E2E7_0%,#08C3CE_38%,#008D97_100%)] transition-all duration-200 hover:scale-105 group-hover:bg-[radial-gradient(circle_at_35%_28%,#72F5F7_0%,#24DDE4_42%,#00AAB5_100%)]"
>
  <img
    src={whiteArrow}
    alt=""
    aria-hidden="true"
    className="block h-[22px] w-[22px] object-contain group-hover:hidden"
  />

  <img
    src={blackArrow}
    alt=""
    aria-hidden="true"
    className="hidden h-[22px] w-[22px] object-contain group-hover:block"
  />
</a>
        ) : (
          <a
            href="#project"
            aria-label={`View ${service.title}`}
            className="absolute bottom-4 right-0 z-10 transition-transform duration-200 hover:scale-105"
          >
            <img
              src={darkCardArrow}
              alt=""
              aria-hidden="true"
              className="block h-[45px] w-[45px] object-contain"
            />
          </a>
        )}
      </div>
    </article>
  );
}

export default Services;