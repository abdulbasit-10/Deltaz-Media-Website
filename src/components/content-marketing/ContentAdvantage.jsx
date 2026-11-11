function ContentAdvantage() {
  return (
    <section
      id="content-advantage"
      aria-labelledby="advantage-heading"
      className="
        relative isolate overflow-hidden
        bg-[#032D31]
        px-5 py-12
        font-['Plus_Jakarta_Sans']
        text-white
        sm:px-8 sm:py-[60px]
      "
    >
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-[-170px] left-1/2 -z-10
          h-[420px] w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#087B78]/10
          blur-[100px]
        "
      />

      <div
        className="mx-auto w-full max-w-[900px]"
      >
        {/* Section introduction */}
        <div
          className="flex flex-col items-center text-center"
        >
          <p
            className="
              text-[9px] font-bold
              uppercase leading-[1.5]
              text-[#00C9B5]
            "
          >
            Deltaz Difference
          </p>

          <h2
            id="advantage-heading"
            className="
              mt-[8px]
              text-[27px] font-extrabold
              leading-[1.2] tracking-[-0.035em]
              sm:text-[30px]
            "
          >
            Why Deltaz Media?
          </h2>

          <p
            className="
              mt-[17px] max-w-[650px]
              text-[12px] font-normal
              leading-[1.6]
              text-[#B4C8CF]
            "
          >
            Because content sits at the intersection of several things
            your business already needs:{" "}
            <span
              className="font-semibold text-[#00C9B5]"
            >
              visibility, credibility, demand, and conversion.
            </span>
          </p>
        </div>

        {/* Strategic advantage card */}
        <div
          className="
            mt-9 flex flex-col items-center
            rounded-[20px]
            border border-[#0B484D]
            bg-[linear-gradient(135deg,#06272E_0%,#08333C_100%)]
            px-6 py-8
            text-center
            shadow-[0_12px_25px_rgba(0,0,0,0.08)]
            sm:mt-10 sm:px-10 sm:py-[36px]
          "
        >
          <span
            className="
              inline-flex rounded-full
              bg-[#07514F]
              px-[12px] py-[5px]
              font-['Arimo']
              text-[9px] font-bold
              uppercase leading-none
              tracking-[0.05em]
              text-[#00C9B5]
            "
          >
            Strategic Advantage
          </span>

          <h3
            className="
              mt-[15px]
              text-[22px] font-extrabold
              leading-[1.3] tracking-[-0.025em]
              sm:text-[25px]
            "
          >
            Content Is a Long-Term Business Asset.
          </h3>

          <div
            className="
              mt-[18px] max-w-[670px]
              space-y-[17px]
              text-[12px] font-normal
              leading-[1.65]
              text-[#BBD0D5]
            "
          >
            <p>
              A paid campaign stops when the budget stops. Good content
              can continue attracting search traffic, educating
              prospects, strengthening authority, and supporting sales
              long after it is published.
            </p>

            <p>
              That doesn’t mean every piece will become a traffic
              machine. It means the right content strategy can create
              assets that compound over time rather than requiring you
              to start from zero every month.
            </p>
          </div>

          {/* Regional relevance */}
          <div
            className="
              mt-[24px] inline-flex max-w-full
              items-center justify-center gap-[7px]
              rounded-[18px]
              border border-[#075653]
              bg-[#03272B]
              px-[16px] py-[9px]
              font-['Arimo']
              text-[10px] font-bold
              leading-[1.5]
              text-[#00C9B5]
              sm:rounded-full
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-[14px] w-[14px] shrink-0"
            >
              <path
                d="
                  M12 2a7 7 0 0 0-7 7
                  c0 5 7 13 7 13s7-8 7-13
                  a7 7 0 0 0-7-7Zm0 10
                  a3 3 0 1 1 0-6
                  a3 3 0 0 1 0 6Z
                "
              />
            </svg>

            <span>
              For businesses competing for attention in the UAE and
              beyond, that distinction matters.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentAdvantage;