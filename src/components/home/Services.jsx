import seoImage from "../../assets/SEO.png";
import socialImage from "../../assets/Social Media Marketing.png";
import contentImage from "../../assets/Content Marketing.png";

import seoIcon from "../../assets/Seo optimization icon.png";
import socialIcon from "../../assets/Social Media Icon.png";
import contentIcon from "../../assets/Content Marketing icon.png";

import whiteArrow from "../../assets/meteor-icons_arrow-up-right (white).png";
import blackArrow from "../../assets/meteor-icons arrow-up-right (black).png";

const services = [
  {
    title: "SEO & Organic Growth",
    description:
      "Your potential customers are already searching for solutions. The question is whether they find your business or your competitors.",
    image: seoImage,
    icon: seoIcon,
    href: "/services/seo",
  },
  {
    title: "Social Media Marketing",
    description:
      "Social media shouldn’t exist just to keep your content calendar full. The right strategy can help your business stay visible, build relationships, and grow.",
    image: socialImage,
    icon: socialIcon,
    href: "/services/social-media-marketing",
  },
  {
    title: "Content Marketing",
    description:
      "People don’t just buy products or services. They buy confidence and trust. We help businesses, founders, and industry experts turn their expertise into content that connects.",
    image: contentImage,
    icon: contentIcon,
    href: "/services/content-marketing",
  },
];

function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="
        relative isolate w-full overflow-hidden
        bg-[#EFF7F8]
        px-5 py-12
        font-['Plus_Jakarta_Sans']
        sm:px-8 sm:py-[56px]
        lg:px-10 lg:py-[60px]
      "
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-[200px] -top-[120px] -z-10
          h-[450px] w-[450px]
          rounded-full
          bg-[#83E5DB]/35
          blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-[230px] -right-[180px] -z-10
          h-[450px] w-[450px]
          rounded-full
          bg-[#83E5DB]/35
          blur-[100px]
        "
      />

      {/* Fine curved background lines */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-[440px] top-[70px] -z-10
          h-[700px] w-[620px]
          rotate-[28deg]
          rounded-[50%]
          border border-[#BCE6E8]/45
        "
      >
        {[24, 48, 72, 96].map((inset) => (
          <span
            key={inset}
            className="
              absolute rounded-[50%]
              border border-[#BCE6E8]/45
            "
            style={{
              inset: `${inset}px`,
            }}
          />
        ))}
      </div>

      {/* Decorative circles */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-[14%] top-[85px] -z-10
          h-[13px] w-[13px]
          rounded-full bg-[#85B5BA]/65
        "
      />

      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-[80px] left-[14%] -z-10
          h-[13px] w-[13px]
          rounded-full bg-[#39858C]/70
        "
      />

      <div
        className="mx-auto w-full max-w-[1120px]"
      >
        {/* Section heading */}
        <div
          className="flex flex-col items-center text-center"
        >
          <div
            className="
              flex items-center justify-center gap-[7px]
              text-[11px] font-medium
              text-[#007D87]
            "
          >
            <span
              aria-hidden="true"
              className="h-px w-[16px] bg-[#0AA5B3]"
            />

            <span>Our Services</span>

            <span
              aria-hidden="true"
              className="h-px w-[16px] bg-[#0AA5B3]"
            />
          </div>

          <h2
            id="services-heading"
            className="
              mt-[18px] max-w-[720px]
              font-['Manrope']
              text-[27px] font-extrabold
              uppercase leading-[1.3]
              tracking-[-0.035em]
              text-[#252729]
              sm:text-[32px]
              lg:text-[36px]
            "
          >
            What Does Your Business
            <br
              className="hidden sm:block"
            />{" "}
            Need{" "}
            <span
              className="
                bg-[linear-gradient(100deg,#084C56_0%,#0066AF_100%)]
                bg-clip-text text-transparent
              "
            >
              Right Now?
            </span>
          </h2>

          <p
            className="
              mt-[16px] max-w-[780px]
              text-[12px] leading-[1.5]
              text-[#193237]
            "
          >
            We combine strategy, creativity, and digital expertise to help
            businesses attract the right audience, build influence, and turn
            attention into growth.
          </p>
        </div>

        {/* Service cards */}
        <div
          className="
            mt-9 grid grid-cols-1
            gap-5
            md:mt-12 md:grid-cols-3 md:gap-4
            lg:gap-5
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </div>

        {/* All services button */}
        <div
          className="mt-9 flex justify-center sm:mt-11"
        >
          <a
            href="/services"
            className="
              group inline-flex min-h-[40px]
              items-center justify-center gap-2
              rounded-full
              border border-[#00757D]
              bg-[#00757D]
              px-[18px] py-[10px]
              font-['Inter']
              text-[11px] font-medium text-white
              transition-all duration-200
              hover:border-[#10899A]
              hover:bg-[#10899A]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#00757D]
            "
          >
            <span>Explore All Services</span>

            <img
              src={whiteArrow}
              alt=""
              aria-hidden="true"
              className="
                h-[14px] w-[14px]
                object-contain
                transition-transform duration-200
                group-hover:translate-x-[2px]
                group-hover:-translate-y-[2px]
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <a
      href={service.href}
      className="
        group relative flex min-w-0 flex-col
        rounded-[10px]
        border border-[#D2ECEF]
        bg-[#F8FEFF]
        p-[6px]
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:border-[#008C98]
        hover:bg-[#008C98]
        hover:shadow-[0_12px_22px_rgba(0,77,84,0.20)]
        focus-visible:-translate-y-2
        focus-visible:border-[#008C98]
        focus-visible:bg-[#008C98]
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#00757D]
        motion-reduce:transform-none
        motion-reduce:transition-none
      "
    >
      {/* Icon and description */}
      <div
        className="px-[6px] pb-[10px] pt-[9px]"
      >
        {/* Icon background */}
        <div
          className="
            flex h-[36px] w-[36px]
            items-center justify-center
            rounded-[7px]
            bg-[#E5F3F5]
            transition-colors duration-300
            group-hover:bg-[#05D5EB]
            group-focus-visible:bg-[#05D5EB]
          "
        >
          {/* Teal icon using an image mask */}
          <span
            aria-hidden="true"
            className="
              block h-[19px] w-[19px]
              bg-[#007D87]
            "
            style={{
              WebkitMaskImage: `url("${service.icon}")`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
              maskImage: `url("${service.icon}")`,
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
            }}
          />
        </div>

        <h3
          className="
            mt-[12px]
            text-[13px] font-bold leading-[1.4]
            text-[#152334]
            transition-colors duration-300
            group-hover:text-white
            group-focus-visible:text-white
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-[6px] line-clamp-3
            min-h-[51px]
            text-[11px] leading-[17px]
            text-[#73899E]
            transition-colors duration-300
            group-hover:text-[#D0ECEE]
            group-focus-visible:text-[#D0ECEE]
          "
        >
          {service.description}
        </p>
      </div>

      {/* Service image */}
      <div
        className="relative mt-auto"
      >
        <img
          src={service.image}
          alt=""
          loading="lazy"
          className="
            block aspect-[1.9] w-full
            rounded-[6px]
            object-cover object-center
          "
        />

        {/* Circular arrow */}
        <span
          className="
            absolute -bottom-[6px] -right-[6px]
            flex h-[56px] w-[56px]
            items-center justify-center
            rounded-tl-[28px]
            bg-[#F8FEFF]
            pl-[5px] pt-[5px]
            transition-colors duration-300
            group-hover:bg-[#008C98]
            group-focus-visible:bg-[#008C98]
          "
        >
          <span
            className="
              relative flex h-[46px] w-[46px]
              items-center justify-center
              rounded-full
              bg-[linear-gradient(135deg,#12D5DA_0%,#00747F_100%)]
              transition-colors duration-300
              group-hover:bg-none
              group-hover:bg-[#05D5EB]
              group-focus-visible:bg-none
              group-focus-visible:bg-[#05D5EB]
            "
          >
            <img
              src={whiteArrow}
              alt=""
              aria-hidden="true"
              className="
                absolute left-1/2 top-1/2
                h-[20px] w-[20px]
                -translate-x-1/2 -translate-y-1/2
                object-contain
                transition-opacity duration-200
                group-hover:opacity-0
                group-focus-visible:opacity-0
              "
            />

            <img
              src={blackArrow}
              alt=""
              aria-hidden="true"
              className="
                absolute left-1/2 top-1/2
                h-[20px] w-[20px]
                -translate-x-1/2 -translate-y-1/2
                object-contain opacity-0
                transition-opacity duration-200
                group-hover:opacity-100
                group-focus-visible:opacity-100
              "
            />
          </span>
        </span>
      </div>
    </a>
  );
}

export default Services;
