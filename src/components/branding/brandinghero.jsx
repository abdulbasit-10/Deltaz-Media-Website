import arrowIcon from "../../assets/meteor-icons_arrow-up-right (white).png";

function BrandingHero() {
  return (
    <section
      aria-labelledby="branding-hero-heading"
      className="
        relative isolate flex flex-col items-center justify-center overflow-hidden
        bg-[#032D31]
        px-5 py-8
        font-['Plus_Jakarta_Sans']
        text-white
        sm:px-8 sm:py-10
        lg:min-h-[560px] lg:px-[5%] lg:py-[36px]
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-6 top-5 -z-10
          h-[76px] w-[92px]
          opacity-60
          [background-image:radial-gradient(circle,#238792_2px,transparent_3px)]
          [background-size:15px_14px]
        "
      />

      <div
        className="
          mx-auto flex w-full max-w-[900px]
          flex-col items-center text-center
        "
      >
        <div
          className="
            inline-flex items-center gap-[6px]
            rounded-full border border-[#00635F]
            bg-[#00443F]/65
            px-[10px] py-[4px]
            font-['Inter'] text-[8px] font-bold
            uppercase leading-none tracking-[0.04em]
            text-[#00C5B5]
            sm:text-[9px]
          "
        >
          <span
            aria-hidden="true"
            className="h-[5px] w-[5px] rounded-full bg-[#00D0BC]"
          />
          Personal Branding Agency Dubai
        </div>

        <h1
          id="branding-hero-heading"
          className="
            mt-[20px] max-w-[900px]
            font-['Plus_Jakarta_Sans']
            text-[clamp(31px,4.2vw,44px)]
            font-extrabold leading-[1.15]
            tracking-[-0.04em]
          "
        >
          Your Personal Brand Can Influence
          <span className="block">Business Decisions</span>
          <span className="block text-[#0AA5B3]">Before You Enter the Room.</span>
        </h1>

        <p
          className="
            mt-[24px] max-w-[650px]
            text-[13px] leading-[1.5]
            text-[#B3C7C9]
            sm:text-[14px]
          "
        >
          A potential client looks you up before accepting a meeting. For CEOs,
          founders and senior professionals, personal branding is about making
          your expertise, experience and point of view visible to the people
          whose decisions matter most.
        </p>

        <div
          className="
            mt-[27px] flex w-full flex-col items-center justify-center gap-[10px]
            min-[420px]:w-auto min-[420px]:flex-row
          "
        >
          <a
            href="/contact"
            className="
              group inline-flex min-h-[40px]
              w-full max-w-[300px] items-center justify-center gap-[8px]
              rounded-full border border-[#0AA5B3]
              bg-[#0AA5B3] px-[17px] py-[11px]
              font-['Inter'] text-[11px] font-semibold text-white
              shadow-[0_5px_12px_rgba(10,165,179,0.2)]
              transition-colors duration-200 hover:bg-[#10899A]
              min-[420px]:w-auto min-[420px]:max-w-none
            "
          >
            <span>Let’s Build Your Growth Strategy</span>
            <img
              src={arrowIcon}
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

          <a
            href="/#success-stories"
            className="
              inline-flex min-h-[40px]
              w-full max-w-[300px] items-center justify-center
              rounded-full border border-white bg-transparent
              px-[30px] py-[11px]
              font-['Inter'] text-[11px] font-bold text-white
              transition-colors duration-200 hover:bg-white/10
              min-[420px]:w-auto min-[420px]:max-w-none min-[420px]:min-w-[145px]
            "
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default BrandingHero;
