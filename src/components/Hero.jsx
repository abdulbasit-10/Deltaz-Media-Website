import arrowIcon from "../assets/meteor-icons_arrow-up-right (white).png";
import rocketIcon from "../assets/Rocket shape icon.png";

function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="
        relative isolate w-full overflow-hidden
        bg-[#032D31]
        font-['Plus_Jakarta_Sans']
        text-white
      "
    >
      {/* Decorative dots */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-5 top-8 -z-10
          h-[70px] w-[90px]
          opacity-65
          [background-image:radial-gradient(circle,#238792_2px,transparent_3px)]
          [background-size:15px_14px]
          sm:left-6
        "
      />

      {/* Small floating circle */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-[17%] top-[34%] -z-10
          h-2 w-2 rounded-full
          bg-[#08737D]/70
        "
      />

      {/* Blurred floating circle */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-[110px] left-[6%] -z-10
          h-[14px] w-[14px] rounded-full
          bg-[#B5D8D6]/60
          blur-[3px]
        "
      />

      {/* Right floating circle */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-[105px] right-[10%] -z-10
          h-[14px] w-[14px] rounded-full
          bg-[#08737D]/70
        "
      />

      {/* Hero content */}
      <div
        className="
          mx-auto flex w-full max-w-[1200px]
          flex-col items-center
          px-5 pb-12 pt-[60px]
          text-center
          sm:px-8 sm:pb-11 sm:pt-[44px]
        "
      >
        {/* Growth partner badge */}
        <div
          className="
            inline-flex items-center justify-center
            gap-[6px]
            rounded-full
            border border-[#28575C]
            bg-[#0A363B]
            px-[10px] py-[5px]
            text-[9px] font-medium text-[#14B6C5]
            shadow-[0_2px_7px_rgba(0,0,0,0.12)]
          "
        >
          <img
            src={rocketIcon}
            alt=""
            aria-hidden="true"
            className="h-[11px] w-[11px] object-contain"
          />

          <span>Trusted Digital Growth Partner</span>
        </div>

        {/* Main heading */}
        <h1
          id="hero-heading"
          className="
            mt-5 max-w-[1000px]
            text-[clamp(2rem,4.7vw,3.75rem)]
            font-extrabold leading-[1.24]
            tracking-[-0.04em]
          "
        >
          <span
            className="
              block
              font-['Manrope']
              text-white
            "
          >
            Your Business Doesn’t Need
            <br
              className="hidden md:block"
            />{" "}
            More Marketing Activity.
          </span>

          <span
            className="
              mt-1 block
              font-['Plus_Jakarta_Sans']
              text-[#0AA5B3]
            "
          >
            It Needs More From Its
            <br
              className="hidden md:block"
            />{" "}
            Marketing.
          </span>
        </h1>

        {/* First paragraph */}
        <p
          className="
            mt-[14px] max-w-[590px]
            text-[13px] leading-[1.5]
            text-[#B3C7C9]
            sm:text-[12px]
          "
        >
          You’re already managing people, operations, clients, revenue, and
          the hundred decisions that come with running a business. Your
          marketing shouldn’t become another problem you have to manage.
        </p>

        {/* Second paragraph */}
        <p
          className="
            mt-[10px] max-w-[550px]
            text-[13px] leading-[1.5]
            text-[#B3C7C9]
            sm:text-[12px]
          "
        >
          Deltaz Media helps ambitious businesses build visibility, earn
          trust, generate demand, and turn digital attention into real growth.
        </p>

        {/* Action buttons */}
        <div
          className="
            mt-[18px] flex w-full
            flex-col items-center justify-center
            gap-[10px]
            sm:w-auto sm:flex-row
          "
        >
          <a
            href="/contact"
            className="
              group inline-flex min-h-11
              w-full max-w-[330px]
              items-center justify-center gap-2
              rounded-full
              border border-[#0AA5B3]
              bg-[#0AA5B3]
              px-[18px] py-3
              font-['Inter']
              text-[12px] font-semibold text-white
              shadow-[0_5px_12px_rgba(10,165,179,0.20)]
              transition-all duration-200 ease-out
              hover:border-white
              hover:bg-[#10899A]
              hover:shadow-[0_0_20px_rgba(32,185,68,0.24)]
              sm:min-h-[40px] sm:w-auto
              sm:max-w-none sm:py-2
            "
          >
            <span>Let’s Build Your Growth Strategy</span>

            <img
              src={arrowIcon}
              alt=""
              aria-hidden="true"
              className="
                h-[15px] w-[15px] shrink-0
                object-contain
                transition-transform duration-200
                group-hover:translate-x-[2px]
                group-hover:-translate-y-[2px]
              "
            />
          </a>

          <a
            href="#success-stories"
            className="
              inline-flex min-h-11
              w-full max-w-[330px]
              items-center justify-center
              rounded-full
              border border-white
              bg-transparent
              px-8 py-3
              font-['Inter']
              text-[12px] font-bold text-white
              transition-all duration-200 ease-out
              hover:border-white
              hover:bg-[#10899A]
              hover:shadow-[0_0_20px_rgba(32,185,68,0.24)]
              sm:min-h-[40px] sm:w-auto
              sm:min-w-[145px] sm:py-2
            "
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;