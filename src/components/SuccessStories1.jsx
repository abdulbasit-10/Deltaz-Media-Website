import successImage from "../assets/Success.png";
import whiteArrow from "../assets/meteor-icons_arrow-up-right (white).png";

function SuccessStories1() {
  return (
    <section
      id="success-stories"
      aria-labelledby="success-heading"
      className="
        w-full
        bg-[#EFF7F8]
        px-5 py-12
        font-['Plus_Jakarta_Sans']
        sm:px-8 sm:py-[60px]
        lg:px-10 lg:py-[70px]
      "
    >
      <div
        className="
          mx-auto grid w-full max-w-[1060px]
          grid-cols-1 items-stretch
          gap-[14px]
          md:grid-cols-[1.05fr_1fr]
        "
      >
        {/* Success image */}
        <div
          className="
            min-h-[280px] overflow-hidden
            rounded-[14px]
            border border-[#AACDD0]
            md:min-h-[380px]
          "
        >
          <img
            src={successImage}
            alt="A business owner speaking into a microphone at his desk"
            loading="lazy"
            className="
              block h-full w-full
              object-cover object-center
            "
          />
        </div>

        {/* Text card */}
        <div
          className="
            flex flex-col justify-center
            rounded-[14px]
            bg-[#032D31]
            px-6 py-7
            text-white
            lg:px-[25px] lg:py-[25px]
          "
        >
          <div
            className="
              flex items-center gap-[7px]
              text-[11px] font-medium
            "
          >
            <span
              aria-hidden="true"
              className="h-px w-[16px] bg-[#0AA5B3]"
            />

            <span>Our Services</span>

            <span
              aria-hidden="true"
              className="h-px w-[16px] bg-[#0AA5B3]"
            />
          </div>

          <h2
            id="success-heading"
            className="
              mt-[18px]
              font-['Manrope']
              text-[27px] font-extrabold
              uppercase leading-[1.35]
              tracking-[-0.035em]
              lg:text-[32px]
            "
          >
            Results Are Easier To Talk About

            <span
              className="
                mt-[4px] block
                font-['Plus_Jakarta_Sans']
                text-[#55DECE]
              "
            >
              Than To Deliver
            </span>
          </h2>

          <p
            className="
              mt-[7px]
              text-[14px] font-bold
              leading-[1.4] tracking-[-0.03em]
            "
          >
            That’s Why We’d Rather Show You.
          </p>

          <p
            className="
              mt-[22px]
              text-[12px] leading-[1.6]
              text-[#C2D5D7]
            "
          >
            Every business starts from a different place. Different
            challenges. Different markets. Different goals. See how
            businesses have used the right strategy and execution to
            improve visibility, generate opportunities, attract the right
            audience, and achieve results that matter.
          </p>

          <a
            href="#success-results"
            className="
              group mt-[18px] inline-flex min-h-[40px]
              items-center justify-center gap-2
              self-start rounded-full
              border border-[#0AA5B3]
              bg-[#0AA5B3]
              px-[16px] py-[10px]
              font-['Inter']
              text-[11px] font-medium text-white
              shadow-[0_4px_10px_rgba(10,165,179,0.18)]
              transition-all duration-200
              hover:border-white
              hover:bg-[#10899A]
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white
            "
          >
            <span>Explore Our Success Stories</span>

            <img
              src={whiteArrow}
              alt=""
              aria-hidden="true"
              className="
                h-[14px] w-[14px]
                object-contain
                transition-transform duration-200
                group-hover:translate-x-[2px]
                group-hover:-translate-y-[2px]
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories1;