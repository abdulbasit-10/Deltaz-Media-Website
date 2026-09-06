import React from "react";

import lastCardWaves from "../assets/Waves for last card.png";
import arrowIcon from "../assets/meteor-icons arrow-up-right (green).png";

const LastCard = () => {
  return (
    <section className="w-full bg-[#082d31] px-[5%] py-[65px]">
      <div
        className="
          relative
          mx-auto
          flex
          min-h-[268px]
          w-full
          max-w-[741px]
          items-center
          justify-center
          overflow-hidden
          rounded-[20px]
          bg-[#0b747d]
        "
      >
        {/* =========================
            WAVES
        ========================== */}
        <img
          src={lastCardWaves}
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            opacity-40
          "
        />

        {/* =========================
            CONTENT
        ========================== */}
        <div
          className="
            relative
            z-10
            flex
            w-full
            flex-col
            items-center
            px-6
            text-center
          "
        >
          {/* Heading */}
          <h2
            className="
              max-w-[600px]
              text-[25px]
              font-bold
              leading-[1.18]
              tracking-[-0.7px]
              text-white
              sm:text-[29px]
              md:text-[31px]
            "
          >
            Your Next{" "}
            <span className="text-[#20c5d4]">
              Growth
            </span>{" "}
            Opportunity Could
            <br />
            Be Closer Than You Think.
          </h2>

          {/* Description */}
          <p
            className="
              mt-[9px]
              max-w-[560px]
              text-[8.5px]
              font-normal
              leading-[1.35]
              text-white/75
              sm:text-[9px]
              md:text-[9.5px]
            "
          >
            Your business has something valuable to offer. But if the right
            people can't find you, remember you, or understand why
            <br className="hidden sm:block" />
            they should choose you, that potential stays hidden.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-[15px]
              flex
              items-center
              justify-center
              gap-[9px]
            "
          >
            {/* =========================
                BUTTON 1
            ========================== */}
            <a
              href="#contact"
              className="
                group
                flex
                h-[35px]
                items-center
                justify-center
                gap-[7px]
                rounded-full
                border
                border-white
                bg-transparent
                px-[14px]
                text-[9px]
                font-medium
                text-white
                transition-all
                duration-300
                ease-out
                hover:bg-white
                hover:text-[#08747d]
              "
            >
              <span>
                Book Your Free Audit
              </span>

              <img
                src={arrowIcon}
                alt=""
                className="
                  h-[12px]
                  w-[12px]
                  object-contain
                  brightness-0
                  invert
                  transition-all
                  duration-300
                  group-hover:invert-0
                "
              />
            </a>

            {/* =========================
                BUTTON 2
            ========================== */}
            <a
              href="#work"
              className="
                flex
                h-[35px]
                items-center
                justify-center
                rounded-full
                border
                border-white
                bg-transparent
                px-[16px]
                text-[9px]
                font-medium
                text-white
                transition-all
                duration-300
                ease-out
                hover:bg-white
                hover:text-[#08747d]
              "
            >
              See What We've Achieved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastCard;