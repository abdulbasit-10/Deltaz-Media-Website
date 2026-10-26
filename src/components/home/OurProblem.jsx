import teamImage from "../../assets/Image for why choose us.png";

function OurProblem() {
  return (
    <section
      id="our-problem"
      aria-labelledby="problem-heading"
      className="
        w-full
        bg-[#EFF7F8]
        px-5 py-10
        font-['Plus_Jakarta_Sans']
        sm:px-8 sm:py-12
        lg:px-11 lg:py-[56px]
      "
    >
      <div
        className="
          mx-auto grid w-full max-w-[1120px]
          grid-cols-1 items-center
          gap-8
          rounded-[18px]
          border border-[#BEDCE0]
          bg-white
          p-6
          shadow-[0_7px_20px_rgba(23,72,78,0.07)]
          sm:p-[30px]
          lg:grid-cols-[1.1fr_1fr]
          lg:gap-[50px]
        "
      >
        {/* Text content */}
        <div>
          {/* Section label */}
          <div
            className="
              flex items-center gap-[7px]
              text-[11px] font-semibold
              uppercase tracking-[0.02em]
              text-[#007F89]
            "
          >
            <span
              aria-hidden="true"
              className="h-px w-[16px] bg-[#008995]"
            />

            <span>The Problem</span>

            <span
              aria-hidden="true"
              className="h-px w-[16px] bg-[#008995]"
            />
          </div>

          {/* Heading */}
          <h2
            id="problem-heading"
            className="
              mt-[18px]
              font-['Manrope']
              text-[28px] font-extrabold
              leading-[1.25] tracking-[-0.035em]
              text-[#252729]
              sm:text-[34px]
              xl:text-[38px]
            "
          >
            <span
              className="
                block
                bg-[linear-gradient(100deg,#00786F_0%,#0066AF_100%)]
                bg-clip-text
                text-transparent
              "
            >
              Marketing Is Everywhere.
            </span>

            <span
              className="mt-[3px] block"
            >
              But Growth Needs To Be Found.
            </span>
          </h2>

          {/* Description */}
          <div
            className="
              mt-[12px] max-w-[440px]
              space-y-[10px]
              text-[12px] font-normal
              leading-[1.4]
              text-[#193237]
              sm:text-[11px]
              xl:text-[12px]
            "
          >
            <p>
              You’re posting on social media, running campaigns, investing
              in ads, and updating your website. Maybe even working with
              multiple freelancers or agencies. But if none of those
              efforts are working towards the same business goal, you’re
              left with more activity, not necessarily more growth.
            </p>

            <p>
              A good business can still struggle to grow when the right
              people can’t find it, trust it, or understand why they should
              choose it.
            </p>

            <p>That’s where we come in.</p>
          </div>
        </div>

        {/* Team image */}
        <div
          className="
            w-full
            rounded-[18px]
            border border-[#D9E7E9]
            bg-[#EFF5F6]
            p-[4px]
          "
        >
          <img
            src={teamImage}
            alt="A team reviewing marketing work together on a laptop"
            loading="lazy"
            className="
              block aspect-[1.08] w-full
              rounded-[13px]
              object-cover object-center
            "
          />
        </div>
      </div>
    </section>
  );
}

export default OurProblem;