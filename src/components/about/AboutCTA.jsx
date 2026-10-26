function AboutCTA() {
  return (
    <section
      id="about-cta"
      aria-labelledby="about-cta-heading"
      className="
        w-full bg-white
        px-[5%] py-[45px]
        sm:py-[65px]
        lg:py-[65px]
      "
    >
      <div
        className="
          mx-auto flex w-full max-w-[741px] min-h-[268px]
          flex-col items-center justify-center
          rounded-[20px]
          border border-[#0BC3C8]/50
          bg-[linear-gradient(145deg,#06BDC8_0%,#00A4AD_48%,#00777D_100%)]
          px-6 py-8
          text-center text-white
          shadow-[0_12px_28px_rgba(0,111,118,0.16)]
          sm:px-8 sm:py-9
          lg:py-9
        "
      >
        {/* Main heading */}
        <h2
          id="about-cta-heading"
          className="
            max-w-[600px]
            font-['Manrope']
            text-[25px] font-extrabold
            leading-[1.25] tracking-[-0.035em]
            sm:text-[31px]
            lg:text-[31px]
          "
        >
          Ready to Make Your Marketing Work Harder?
        </h2>

        {/* Supporting text */}
        <p
          className="
            mt-[10px] max-w-[560px]
            font-['Outfit']
            text-[12px] font-normal
            leading-[1.5]
            text-[#C4EFF0]
            sm:text-[12px]
          "
        >
          Stop guessing with disconnected tactics. Book your free strategy
          audit and let’s align your visibility, authority, and demand
          generation.
        </p>

        {/* Audit button */}
        <a
          href="/contact"
          className="
            group mt-[18px] inline-flex min-h-[35px]
            items-center justify-center gap-[9px]
            rounded-full
            border border-white
            bg-white
            px-[18px] py-[9px]
            font-['Inter']
            text-[10px] font-extrabold
            uppercase tracking-[0.02em]
            !text-[#123D44]
            transition-all duration-200
            hover:bg-transparent
            hover:!text-white
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-white
          "
        >
          <span>Book Your Free Audit</span>

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="
              h-[14px] w-[14px] shrink-0
              transition-transform duration-200
              group-hover:translate-x-[3px]
            "
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default AboutCTA;