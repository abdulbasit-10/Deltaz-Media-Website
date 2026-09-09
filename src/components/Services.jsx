import React from "react";

import seoImage from "../assets/Seo Optimization.png";
import socialMediaImage from "../assets/Social Media Marketing.png";
import contentMarketingImage from "../assets/Content Marketing.png";
import arrowIcon from "../assets/Icon to attach with images.svg";
import servicesWaves from "../assets/Waves for Our services.png";
import SeoIcon from "../assets/Seo optimization icon.png";
import SocialMediaIcon from "../assets/Social Media Icon.png";
import ContentMarketingIcon from "../assets/Content Marketing icon.png";

import ExploreAllServicesIconWhite from "../assets/meteor-icons_arrow-up-right (white).png";
import ExploreAllServicesIconBlack from "../assets/meteor-icons arrow-up-right (black).png";

const services = [
  {
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies that improve search visibility, attract qualified traffic, and drive long-term growth.",
    image: seoImage,
    icon: SeoIcon,
  },
  {
    title: "Social Media Marketing",
    description:
      "Build a stronger social presence with creative campaigns that engage your audience and grow your brand.",
    image: socialMediaImage,
    icon: SocialMediaIcon,
  },
  {
    title: "Content Marketing",
    description:
      "Create valuable content that builds trust, connects with your audience, and turns attention into action.",
    image: contentMarketingImage,
    icon: ContentMarketingIcon,
  },
];

function Services() {
  return (
    <section
      id="services"
      className="
        relative
        min-h-[650px]
        w-full
        overflow-hidden
        bg-[#08272A]
        px-[24px]
        py-[48px]
        sm:px-[32px]
      "
    >
      {/* Background decorative waves — supplied Figma asset */}
      <img
        src={servicesWaves}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-0
          bottom-0
          z-0
          h-auto
          w-[1010px]
          max-w-none
          object-contain
          opacity-65
        "
      />

      {/* Decorative dots */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[66px]
          top-[112px]
          h-[14px]
          w-[14px]
          rounded-full
          bg-[#D7E0E0]
          opacity-55
          blur-[3px]
        "
      />

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[130px]
          top-[90px]
          h-[13px]
          w-[13px]
          rounded-full
          bg-[#08737D]
          opacity-75
        "
      />

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[135px]
          bottom-[65px]
          h-[13px]
          w-[13px]
          rounded-full
          bg-[#08737D]
          opacity-65
        "
      />

      {/* Main content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          flex-col
          items-center
        "
      >
        {/* Section label */}
        <div
          className="
            flex
            items-center
            gap-[8px]
            font-['Inter']
            text-[11px]
            font-medium
            leading-none
            text-[#C1CDCE]
          "
        >
          <span>Our Services</span>
        </div>

        {/* Main heading */}
        <h2
          className="
            mt-[21px]
            max-w-[850px]
            text-center
            font-['Plus_Jakarta_Sans']
            text-[38px]
            font-extrabold
            leading-[1.08]
            tracking-[-1.5px]
            text-[#F4F8F8]
            sm:text-[42px]
            lg:text-[44px]
          "
        >
          Marketing Solutions That Drive
          <br />
          Real Business{" "}
          <span className="text-[#18D0E4]">&amp; Growth</span>
        </h2>

        {/* Description */}
        <p
          className="
            mt-[18px]
            max-w-[760px]
            text-center
            font-['Inter']
            text-[12px]
            font-normal
            leading-[1.4]
            text-[#91A9AA]
            sm:text-[11px]
          "
        >
          We combine strategy, creativity, and digital expertise to help
          businesses attract the right audience, build influence, and turn
          attention into growth.
        </p>

        {/* Service cards */}
        <div
          className="
            mt-[40px]
            flex
            w-full
            items-stretch
            justify-center
            gap-[14px]
            overflow-x-auto
            pb-[2px]
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </div>

        {/* Explore All Services */}
        <a
          href="#services"
          className="
            group
            mt-[44px]
            inline-flex
            h-[34px]
            items-center
            justify-center
            gap-[8px]
            rounded-full
            border
            border-[#18D0E4]
            bg-transparent
            px-[19px]
            font-['Inter']
            text-[11px]
            font-bold
            leading-none
            text-white
            transition-all
            duration-200
            ease-out
            hover:border-[#18D0E4]
            hover:bg-[#18D0E4]
            hover:shadow-[0_0_18px_rgba(32,185,68,0.28)]
          "
        >
          <span className="text-white group-hover:text-black">
            Explore All Services
          </span>

          {/* White arrow - normal state */}
          <img
            src={ExploreAllServicesIconWhite}
            alt=""
            aria-hidden="true"
            className="
              block
              h-[17px]
              w-[17px]
              object-contain
              group-hover:hidden
            "
          />

          {/* Black arrow - hover state */}
          <img
            src={ExploreAllServicesIconBlack}
            alt=""
            aria-hidden="true"
            className="
              hidden
              h-[17px]
              w-[17px]
              object-contain
              group-hover:block
            "
          />
        </a>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <article
      className="
        group
        relative
        flex
        h-[348px]
        w-[408px]
        shrink-0
        flex-col
        overflow-hidden
        rounded-[9px]
        border
        border-[#1A6267]/75
        bg-[#0D393D]
        p-[10px]
        transition-all
        duration-300
        ease-out
        hover:border-[#18C9D8]
        hover:bg-[#128995]
      "
    >
      {/* Service icon */}
      <div
        className="
          flex
          h-[34px]
          w-[34px]
          shrink-0
          items-center
          justify-center
          rounded-[7px]
          bg-[#092F33]
          text-[#E5F2F2]
          transition-colors
          duration-300
          group-hover:bg-[#0C7079]
        "
      >
        <img
          src={service.icon}
          alt=""
          aria-hidden="true"
          className="h-[17px] w-[17px] object-contain"
        />
      </div>

      {/* Title */}
      <h3
        className="
          mt-[12px]
          font-['Inter']
          text-[14px]
          font-semibold
          leading-[1.2]
          text-[#EDF5F5]
        "
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-[7px]
          min-h-[43px]
          max-w-[380px]
          font-['Inter']
          text-[10px]
          font-normal
          leading-[1.45]
          text-[#9EB4B5]
          transition-colors
          duration-300
          group-hover:text-[#D8EEEE]
        "
      >
        {service.description}
      </p>

      {/* Image — exact Figma size */}
      <div
        className="
          relative
          mt-auto
          h-[215px]
          w-full
          overflow-visible
        "
      >
        <img
          src={service.image}
          alt={service.title}
          className="
            block
            h-[215px]
            w-full
            rounded-[6px]
            object-cover
          "
        />

        {/* Complete supplied icon — 48px */}
        <a
          href="#project"
          aria-label={`View ${service.title}`}
          className="
            absolute
            bottom-[8px]
            right-[8px]
            z-10
            transition-transform
            duration-200
            hover:scale-105
          "
        >
          <img
            src={arrowIcon}
            alt=""
            aria-hidden="true"
            className="
              block
              h-[48px]
              w-[48px]
              object-contain
            "
          />
        </a>
      </div>
    </article>
  );
}

export default Services;