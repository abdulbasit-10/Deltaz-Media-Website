function AboutVision() {
  return (
    <section
      id="about-support"
      aria-labelledby="support-heading"
      className="
        w-full overflow-hidden
        bg-[#032D31]
        px-5 pb-[70px] pt-10
        font-['Outfit']
        sm:px-8 sm:pb-[85px] sm:pt-[35px]
      "
    >
      <div
        className="
          relative mx-auto w-full max-w-[1060px]
          rounded-[20px]
          bg-white
          px-5 pb-[100px] pt-[45px]
          text-center
          sm:px-10 sm:pb-[100px] sm:pt-[45px]
          lg:px-16
        "
      >
        {/* Top-left decorative circle */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -left-[10px] -top-[15px]
            flex h-[95px] w-[95px]
            items-center justify-center
            rounded-full
            border border-[#A4C1C5]/50
            bg-[#70B3B8]/25
            sm:h-[110px] sm:w-[110px]
          "
        >
          <span
            className="
              h-[70px] w-[70px]
              rounded-full
              bg-white
              shadow-[0_3px_4px_rgba(23,72,78,0.25)]
              sm:h-[82px] sm:w-[82px]
            "
          />
        </span>

        {/* Section label */}
        <div
          className="
            relative flex items-center justify-center
            gap-[8px]
            font-['Outfit']
            text-[11px] font-medium
            uppercase text-[#123D44]
          "
        >
          <span
            aria-hidden="true"
            className="h-px w-[16px] bg-[#0AA5B3]"
          />

          <span>Our Support</span>

          <span
            aria-hidden="true"
            className="h-px w-[16px] bg-[#0AA5B3]"
          />
        </div>

        {/* Manrope heading */}
        <h2
          id="support-heading"
          className="
            relative mx-auto mt-[18px]
            max-w-[900px]
            font-['Manrope']
            text-[28px] font-extrabold
            leading-[1.15] tracking-[-0.035em]
            sm:text-[32px]
            lg:text-[34px]
          "
        >
          {/* Teal-to-blue gradient */}
          <span
            className="
              block
              bg-[linear-gradient(90deg,#007D78_0%,#0063B5_100%)]
              bg-clip-text
              text-transparent
            "
          >
            We’re Here to Help You Grow. Not
          </span>

          <span
            className="
              mt-[3px] block
              text-[#252729]
            "
          >
            Give You More Work to Manage.
          </span>
        </h2>

        {/* Plus Jakarta Sans paragraphs */}
        <div
          className="
            relative mx-auto mt-[17px]
            max-w-[650px]
            font-['Outfit']
            text-[12px] leading-[1.5]
            text-[#303638]
          "
        >
          <p>
            Some clients come to us with one clear challenge.
            <br
              className="hidden sm:block"
            />{" "}
            Others need a team that can support multiple parts of their
            digital growth.
            <br
              className="hidden sm:block"
            />{" "}
            Either way, we don’t believe working with an agency should
            mean spending more time managing the agency.
          </p>

          <p
            className="mt-[16px]"
          >
            You bring the business knowledge.
            <br />
            We bring the strategic perspective, execution,
            <br
              className="hidden sm:block"
            />{" "}
            and specialist capabilities to help move things forward.
          </p>
        </div>

        {/* Overlapping statement */}
        <div
          className="
            relative mx-auto -mb-[140px] mt-[45px]
            w-full max-w-[650px]
          "
        >
          {/* Decorative circle behind statement */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -top-[42px] left-1/2
              flex h-[95px] w-[95px]
              -translate-x-1/2
              items-center justify-center
              rounded-full
              border border-[#A4C1C5]/50
              bg-[#70B3B8]/25
            "
          >
            <span
              className="
                h-[70px] w-[70px]
                rounded-full
                bg-white
                shadow-[0_3px_4px_rgba(23,72,78,0.20)]
              "
            />
          </span>

          <blockquote
            className="
              relative
              rounded-[12px]
              border border-[#12535B]
              bg-[#0A363B]
              px-5 py-[20px]
              font-['Outfit']
              text-[13px] font-semibold
              leading-[1.5]
              text-[#0AA5B3]
              sm:px-7 sm:text-[14px]
            "
          >
            Think of us as the team working behind the scenes to make
            your marketing work harder for the business.
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default AboutVision;