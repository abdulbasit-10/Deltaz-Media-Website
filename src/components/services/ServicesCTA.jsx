import blackArrow from "../../assets/meteor-icons arrow-up-right (black).png";
import whiteArrow from "../../assets/meteor-icons_arrow-up-right (white).png";

function ServicesCTA() {
  return (
    <section
      id="services-cta"
      aria-labelledby="services-cta-heading"
      className="
        w-full
        bg-white
        px-5 py-[55px]
        sm:px-8 sm:py-[65px]
      "
    >
      <div
        className="
          relative isolate mx-auto
          flex min-h-[268px] w-full max-w-[800px]
          flex-col items-center justify-center
          overflow-hidden rounded-[24px]
          bg-[linear-gradient(180deg,#06BEC9_0%,#00959E_50%,#006C72_100%)]
          px-6 py-10
          text-center text-white
          sm:px-10 sm:py-[45px]
        "
      >
        {/* Soft highlights */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -left-[90px] -top-[90px] -z-10
            h-[250px] w-[180px]
            rounded-full
            bg-[#D3FFFF]/45
            blur-[45px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -bottom-[125px] right-[-20px] -z-10
            h-[180px] w-[260px]
            rounded-full
            bg-[#BAFFFF]/15
            blur-[45px]
          "
        />

        {/* Heading */}
        <h2
          id="services-cta-heading"
          className="
            max-w-[700px]
            font-['Manrope']
            text-[26px] font-extrabold
            leading-[1.2] tracking-[-0.035em]
            sm:text-[31px]
          "
        >
          Not Sure What Your Business Needs?
        </h2>

        {/* Description */}
        <p
          className="
            mt-[14px] max-w-[540px]
            font-['Plus_Jakarta_Sans']
            text-[12px] font-normal
            leading-[1.35]
            text-[#DBF5F5]
          "
        >
          That’s okay. You don’t need to arrive with a list of services.
          You just need to know where you want your business to go.
          We’ll help you identify what’s working, what’s holding you back,
          and where the biggest opportunities may be.
        </p>

        {/* Buttons */}
        <div
          className="
            mt-[28px] flex w-full
            flex-col items-center justify-center
            gap-[10px]
            sm:w-auto sm:flex-row
          "
        >
          <a
            href="/contact"
            className="
              group inline-flex min-h-[40px]
              w-full max-w-[280px]
              items-center justify-center gap-[8px]
              rounded-full
              border border-[#BDF4F5]/80
              bg-[#8BDFE5]/55
              px-[16px] py-[10px]
              font-['Inter']
              text-[12px] font-medium
              !text-[#032D31]
              shadow-[0_6px_18px_rgba(113,239,246,0.35)]
              transition-all duration-200
              hover:border-white
              hover:bg-transparent
              hover:!text-white
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white
              sm:w-auto sm:max-w-none
            "
          >
            <span>Book Your Free Audit</span>

            <span
              className="relative h-[14px] w-[14px] shrink-0"
            >
              <img
                src={blackArrow}
                alt=""
                aria-hidden="true"
                className="
                  absolute inset-0 h-full w-full
                  object-contain
                  transition-all duration-200
                  group-hover:translate-x-[2px]
                  group-hover:-translate-y-[2px]
                  group-hover:opacity-0
                "
              />

              <img
                src={whiteArrow}
                alt=""
                aria-hidden="true"
                className="
                  absolute inset-0 h-full w-full
                  object-contain opacity-0
                  transition-all duration-200
                  group-hover:translate-x-[2px]
                  group-hover:-translate-y-[2px]
                  group-hover:opacity-100
                "
              />
            </span>
          </a>

          <a
            href="/#success-stories"
            className="
              inline-flex min-h-[40px]
              w-full max-w-[280px]
              items-center justify-center
              rounded-full
              border border-white
              bg-transparent
              px-[16px] py-[10px]
              font-['Inter']
              text-[12px] font-bold
              !text-white
              transition-colors duration-200
              hover:bg-white
              hover:!text-[#00757C]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white
              sm:w-auto sm:max-w-none
            "
          >
            See What We’ve Achieved
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesCTA;