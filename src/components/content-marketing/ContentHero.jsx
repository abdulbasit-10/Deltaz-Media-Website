import whiteArrow from "../../assets/meteor-icons_arrow-up-right (white).png";

function ContentHero() {
  return (
    <section
      aria-labelledby="content-hero-heading"
      className="
        relative isolate overflow-hidden
        bg-[#032D31]
        px-5 pb-[70px] pt-[44px]
        font-['Plus_Jakarta_Sans']
        text-white
        sm:px-8 sm:pb-[100px]
        lg:min-h-[455px]
      "
    >
      {/* Decorative dots */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-6 top-6 -z-10
          h-[80px] w-[95px]
          opacity-65
          [background-image:radial-gradient(circle,#238792_2px,transparent_3px)]
          [background-size:15px_14px]
          sm:left-8
        "
      />

      {/* Subtle left glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-[180px] top-[20px] -z-10
          h-[250px] w-[300px]
          rounded-full
          bg-[#007F87]/15
          blur-[75px]
        "
      />

      {/* Floating circles */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-[45px] left-[8%] -z-10
          h-[13px] w-[13px]
          rounded-full
          bg-[#B5D8D6]/60
          blur-[3px]
        "
      />

      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-[40px] right-[8%] -z-10
          h-[14px] w-[14px]
          rounded-full
          bg-[#08737D]/70
        "
      />

      <div
        className="
          mx-auto flex w-full max-w-[1100px]
          flex-col items-center
          text-center
        "
      >
        {/* Agency badge */}
        <div
          className="
            inline-flex items-center justify-center
            gap-[6px]
            rounded-full
            border border-[#00635F]
            bg-[#00443F]/65
            px-[12px] py-[5px]
            text-[8px] font-bold
            uppercase leading-none
            text-[#00C5B5]
            sm:text-[9px]
          "
        >
          <span
            aria-hidden="true"
            className="
              h-[6px] w-[6px] shrink-0
              rounded-full
              bg-[#00D0BC]
            "
          />

          <span>Content Marketing Agency Dubai</span>
        </div>

        {/* Main heading */}
        <h1
          id="content-hero-heading"
          className="
            mt-[20px] max-w-[900px]
            text-[31px] font-extrabold
            leading-[1.15] tracking-[-0.04em]
            sm:text-[40px]
            lg:text-[44px]
          "
        >
          Content Should Do More Than

          <span
            className="
              mt-[3px] block
              text-[#0AA5B3]
            "
          >
            Fill Your Calendar.
          </span>
        </h1>

        {/* Supporting text */}
        <p
          className="
            mt-[24px] max-w-[650px]
            text-[13px] font-normal
            leading-[1.5]
            text-[#B3C7C9]
            sm:text-[14px]
          "
        >
          A content strategy should do more than keep your brand visible.
          It should help the right people discover your business,
          understand what makes you different, trust your expertise, and
          move closer to a commercial decision.
        </p>

        {/* Action buttons */}
        <div
          className="
            mt-[27px] flex w-full
            flex-col items-center justify-center
            gap-[10px]
            sm:w-auto sm:flex-row
          "
        >
          <a
            href="/contact"
            className="
              group inline-flex min-h-[40px]
              w-full max-w-[300px]
              items-center justify-center gap-[8px]
              rounded-full
              border border-[#0AA5B3]
              bg-[#0AA5B3]
              px-[17px] py-[11px]
              font-['Inter']
              text-[11px] font-semibold
              !text-white
              shadow-[0_5px_12px_rgba(10,165,179,0.20)]
              transition-all duration-200
              hover:border-white
              hover:bg-[#10899A]
              hover:shadow-[0_0_20px_rgba(10,165,179,0.25)]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white
              sm:w-auto sm:max-w-none
            "
          >
            <span>Let’s Build Your Growth Strategy</span>

            <img
              src={whiteArrow}
              alt=""
              aria-hidden="true"
              className="
                h-[14px] w-[14px] shrink-0
                object-contain
                transition-transform duration-200
                group-hover:translate-x-[2px]
                group-hover:-translate-y-[2px]
              "
            />
          </a>

          <a
            href="/#success-stories"
            className="
              inline-flex min-h-[40px]
              w-full max-w-[300px]
              items-center justify-center
              rounded-full
              border border-white
              bg-transparent
              px-[30px] py-[11px]
              font-['Inter']
              text-[11px] font-bold
              !text-white
              transition-all duration-200
              hover:bg-[#10899A]
              hover:shadow-[0_0_20px_rgba(10,165,179,0.25)]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white
              sm:w-auto sm:min-w-[145px]
              sm:max-w-none
            "
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContentHero;