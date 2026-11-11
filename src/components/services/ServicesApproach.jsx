function ServicesApproach() {
  return (
    <section
      id="services-approach"
      aria-labelledby="conversion-heading"
      className="
        relative isolate overflow-hidden
        bg-[#EAF5F6]
        px-5 py-12
        font-['Plus_Jakarta_Sans']
        text-[#12343A]
        sm:px-8 sm:py-[60px]
      "
    >
      {/* Decorative circles */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-[5%] top-[22px] -z-10
          h-[14px] w-[14px]
          rounded-full bg-[#56BCC1]/55
          blur-[2px]
        "
      />

      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-[13%] top-[55px] -z-10
          h-[13px] w-[13px]
          rounded-full bg-[#7DADB1]/60
        "
      />

      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-[28px] left-[11%] -z-10
          h-[13px] w-[13px]
          rounded-full bg-[#438B91]/75
        "
      />

      <div
        className="
          mx-auto grid w-full max-w-[850px]
          grid-cols-1 items-center gap-7
          rounded-[18px]
          border border-[#BCE8EA]
          bg-[#EDF8F9]
          p-6
          shadow-[0_14px_22px_rgba(20,67,73,0.18)]
          sm:p-8
          md:grid-cols-[1fr_0.48fr]
          lg:gap-6 lg:p-10
        "
      >
        {/* Main content */}
        <div
          className="min-w-0"
        >
          <span
            className="
              inline-flex rounded-full
              border border-[#A0E1E1]
              bg-[#D2F1F1]
              px-[11px] py-[4px]
              font-['Inter']
              text-[8px] font-semibold
              uppercase tracking-[0.1em]
              text-[#10484C]
            "
          >
            Convert Attention
          </span>

          <h2
            id="conversion-heading"
            className="
              mt-[13px] max-w-[450px]
              font-['Manrope']
              text-[26px] font-extrabold
              leading-[1.15] tracking-[-0.035em]
              sm:text-[29px]
            "
          >
            <span
              className="
                bg-[linear-gradient(90deg,#007B72_0%,#0061B7_100%)]
                bg-clip-text text-transparent
              "
            >
              Because a Click Is Only the
              <br
                className="hidden sm:block"
              />{" "}
              Beginning.
            </span>
          </h2>

          <p
            className="
              mt-[12px]
              text-[12px] font-normal
              leading-[1.65]
              text-[#607387]
            "
          >
            You’ve done the hard part. Someone found you, clicked your ad,
            or visited your website. If your digital experience is slow,
            confusing, outdated, or disconnected from the message that
            brought them there, opportunities disappear quickly.
          </p>

          {/* Development detail */}
          <div
            className="
              mt-[14px]
              rounded-[13px]
              border border-[#E0ECEF]
              bg-white
              p-[15px]
            "
          >
            <div
              className="flex items-center gap-[6px]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="
                  h-[16px] w-[16px]
                  shrink-0 text-[#00B9AE]
                "
              >
                <path
                  d="m7 7-5 5 5 5M17 7l5 5-5 5M14 4l-4 16"
                />
              </svg>

              <h3
                className="
                  font-['Inter']
                  text-[11px] font-bold
                  leading-[1.4]
                  text-[#143C41]
                "
              >
                Web &amp; App Development
              </h3>
            </div>

            <p
              className="
                mt-[8px]
                text-[10px] font-normal
                leading-[1.7]
                text-[#65768B]
              "
            >
              Whether you need a corporate website, e-commerce platform,
              high-converting landing page, web application, mobile app,
              or UI/UX support, we build around the people who will
              actually use it—and the business objective it’s supposed
              to support.
            </p>
          </div>

          <a
            href="/contact"
            className="
              group mt-[22px] inline-flex min-h-[36px]
              items-center justify-center gap-[7px]
              rounded-full
              border border-[#17474B]
              bg-[#032D31]
              px-[19px] py-[10px]
              font-['Inter']
              text-[9px] font-bold
              uppercase tracking-[0.02em]
              !text-white
              shadow-[0_4px_7px_rgba(20,67,73,0.12)]
              transition-colors duration-200
              hover:bg-[#07535A]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#008D98]
            "
          >
            <span>Explore Web &amp; App Development</span>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="
                h-[12px] w-[12px] shrink-0
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
        </div>

        {/* Conversion statistics */}
        <aside
          aria-label="Conversion engine highlights"
          className="
            relative w-full max-w-[320px]
            justify-self-center
            rounded-[13px]
            border border-[#087C79]
            bg-[linear-gradient(135deg,#023638_0%,#064E4C_100%)]
            p-[19px]
            text-white
            shadow-[0_9px_16px_rgba(20,67,73,0.18)]
            md:max-w-none
          "
        >
          {/* Small accent dot */}
          <span
            aria-hidden="true"
            className="
              absolute left-[29px] top-[17px]
              h-[4px] w-[4px]
              rounded-full bg-[#FF514B]
            "
          />

          <p
            className="
              font-['Inter']
              text-[8px] font-medium
              uppercase tracking-[0.15em]
              text-[#00D5C3]
            "
          >
            Conversion Engine
          </p>

          <div
            className="
              mt-[17px]
              border-b border-white/10
              pb-[12px]
            "
          >
            <p
              className="
                font-['Manrope']
                text-[27px] font-extrabold
                leading-none tracking-[-0.03em]
                text-[#00D8C4]
              "
            >
              99.8%
            </p>

            <p
              className="
                mt-[6px]
                text-[9px] leading-[1.5]
                text-[#A6C7C7]
              "
            >
              UX Load Speed &amp; Core Web Vitals
            </p>
          </div>

          <div
            className="
              mt-[15px]
              border-b border-white/10
              pb-[12px]
            "
          >
            <p
              className="
                font-['Manrope']
                text-[27px] font-extrabold
                leading-none tracking-[-0.03em]
                text-[#00D8C4]
              "
            >
              3.2x
            </p>

            <p
              className="
                mt-[6px]
                text-[9px] leading-[1.5]
                text-[#A6C7C7]
              "
            >
              Avg Lead Rate vs Standard Site
            </p>
          </div>

          <p
            className="
              mt-[12px]
              font-['Inter']
              text-[9px] font-medium
              leading-[1.5]
              text-[#A5E6DF]
            "
          >
            Built For Frictionless Action
          </p>
        </aside>
      </div>
    </section>
  );
}

export default ServicesApproach;