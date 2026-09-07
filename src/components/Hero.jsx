import heroWaves from "../assets/Waves for hero section.png";
import arrowIcon from "../assets/meteor-icons_arrow-up-right (white).png";

function Hero() {
  return (
    <section
      className="
        relative
        h-[656px]
        w-full
        overflow-hidden
        bg-[#08272A]
      "
    >
      {/* =========================================================
    FIGMA WAVE ARTWORK
    ========================================================= */}
<div
  className="
    pointer-events-none
    absolute
    left-1/2
    top-[-35px]
    z-0
    w-full
    -translate-x-1/2
    opacity-65
  "
>
  <img
    src={heroWaves}
    alt=""
    aria-hidden="true"
    className="
      absolute
      left-1/2
      top-0
      h-auto
      w-[100vw]
      max-w-none
      -translate-x-1/2
      object-contain
    "
  />
</div>

      {/* =========================================================
          DOT GRID
          ========================================================= */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[20px]
          top-[30px]
          z-[1]
          h-[60px]
          w-[78px]
          opacity-75
          [background-image:radial-gradient(circle,#08737D_2px,transparent_2.5px)]
          [background-size:14px_14px]
        "
      />

      {/* =========================================================
          DECORATIVE LIGHT
          ========================================================= */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[53px]
          top-[337px]
          z-[2]
          h-[15px]
          w-[15px]
          rounded-full
          bg-[#D9E0E0]
          opacity-65
          blur-[2px]
        "
      />

      {/* Center dot */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[360px]
          z-[2]
          h-[8px]
          w-[8px]
          -translate-x-1/2
          rounded-full
          bg-[#0C8995]
          opacity-80
        "
      />

      {/* Right dot */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[89px]
          top-[349px]
          z-[2]
          h-[13px]
          w-[13px]
          rounded-full
          bg-[#087C88]
          opacity-80
        "
      />

      {/* =========================================================
          HERO CONTENT
          ========================================================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-[20px]
          pt-[34px]
          text-center
          sm:px-[30px]
        "
      >
        {/* =======================================================
            BADGE
            ======================================================= */}
        <div
          className="
            inline-flex
            h-[27px]
            items-center
            justify-center
            gap-[7px]
            rounded-full
            border
            border-[#1596A4]/45
            bg-[#073B3F]
            px-[13px]
            font-['Inter']
            text-[10px]
            font-medium
            leading-none
            text-[#20C7D9]
          "
        >
          <span className="text-[10px]">◈</span>

          <span>
            Trusted Digital Growth Partner
          </span>
        </div>

        {/* =======================================================
            MAIN HEADING
            MANROPE
            ======================================================= */}
        <h1
  className="
    mt-[23px]
    max-w-[950px]
    font-['Manrope']
    text-[48px]
    font-extrabold
    leading-[1.1]
    tracking-[-2px]
    text-[#F5F8F8]
    sm:text-[53px]
    lg:text-[56px]
  "
>
          Your Business Needs Demand,
          <br />
          Influence{" "}
          <span className="text-[#18D0E4]">
            &amp; Growth
          </span>
        </h1>

        {/* =======================================================
            DESCRIPTION
            INTER
            ======================================================= */}
        <p
          className="
            mt-[15px]
            max-w-[600px]
            font-['Inter']
            text-[11px]
            font-normal
            leading-[1.5]
            text-[#9DAFB0]
            sm:text-[12px]
          "
        >
          We combine strategy, creativity, and digital expertise to help
          businesses attract the right audience, build influence, and turn
          attention into growth.
        </p>

        {/* =======================================================
            HERO BUTTONS
            PLUS JAKARTA SANS
            ======================================================= */}
        <div
          className="
            mt-[27px]
            flex
            items-center
            justify-center
            gap-[12px]
          "
        >
          {/* =====================================================
              BUILD YOUR GROWTH
              ===================================================== */}
          <a
            href="#contact"
            className="
              group
              inline-flex
              h-[42px]
              items-center
              justify-center
              gap-[9px]
              rounded-full
              border
              border-[#20C9D9]
              bg-transparent
              px-[19px]
              font-['Plus_Jakarta_Sans']
              text-[11px]
              font-semibold
              leading-none
              text-white
              transition-all
              duration-200
              ease-out
              hover:border-[#ffffff]
              hover:bg-[#10899A]
              hover:shadow-[0_0_20px_rgba(32,185,68,0.24)]
            "
          >
            <span>
              Let's Build Your Growth
            </span>

            <img
              src={arrowIcon}
              alt=""
              aria-hidden="true"
              className="
                h-[15px]
                w-[15px]
                object-contain
                transition-transform
                duration-200
                group-hover:translate-x-[2px]
                group-hover:-translate-y-[2px]
              "
            />
          </a>

          {/* =====================================================
              SEE OUR WORK
              ===================================================== */}
          <a
            href="#project"
            className="
              group
              inline-flex
              h-[42px]
              min-w-[148px]
              items-center
              justify-center
              gap-[9px]
              rounded-full
              border
              border-[#20C9D9]
              bg-transparent
              px-[19px]
              font-['Plus_Jakarta_Sans']
              text-[11px]
              font-semibold
              leading-none
              text-white
              transition-all
              duration-200
              ease-out
              hover:border-[#ffffff]
              hover:bg-[#10899A]
              hover:shadow-[0_0_20px_rgba(32,185,68,0.24)]
            "
          >
            <span>
              See Our Work
            </span>

            <img
              src={arrowIcon}
              alt=""
              aria-hidden="true"
              className="
                h-[15px]
                w-[15px]
                object-contain
                transition-transform
                duration-200
                group-hover:translate-x-[2px]
                group-hover:-translate-y-[2px]
              "
            />
          </a>
        </div>

        {/* =======================================================
            STATISTICS
            ======================================================= */}
        <div
          className="
            mt-[53px]
            grid
            w-full
            max-w-[660px]
            grid-cols-1
            gap-[14px]
            sm:grid-cols-3
          "
        >
          <StatCard
            number="200+"
            label="Clients Served"
          />

          <StatCard
            number="98%"
            label="Retention Rate"
          />

          <StatCard
            number="$12M+"
            label="Revenue Generated"
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label }) {
  return (
    <div
      className="
        flex
        h-[108px]
        flex-col
        items-center
        justify-center
        rounded-[10px]
        border
        border-[#11818D]/35
        bg-[#0B3D41]/90
      "
    >
      <strong
        className="
          font-['Manrope']
          text-[36px]
          font-bold
          leading-none
          tracking-[-1px]
          text-[#F5F8F8]
        "
      >
        {number}
      </strong>

      <span
        className="
          mt-[12px]
          font-['Inter']
          text-[13px]
          font-normal
          leading-none
          text-[#A9BCBD]
        "
      >
        {label}
      </span>
    </div>
  );
}

export default Hero;