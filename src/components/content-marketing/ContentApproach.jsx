function ContentApproach() {
  return (
    <section
      id="content-approach"
      aria-labelledby="content-approach-heading"
      className="
        w-full
        bg-[#F2F8F8]
        px-5 py-12
        font-['Plus_Jakarta_Sans']
        text-[#102329]
        sm:px-8 sm:py-[60px]
      "
    >
      <div
        className="mx-auto w-full max-w-[900px]"
      >
        {/* Section heading */}
        <h2
          id="content-approach-heading"
          className="
            mx-auto max-w-[650px]
            text-center
            font-['Plus_Jakarta_Sans']
            text-[25px] font-extrabold
            leading-[1.1] tracking-[-0.035em]
            sm:text-[30px]
          "
        >
          The Question Isn’t How Much
          <br
            className="hidden sm:block"
          />{" "}
          Content You Publish.

          <span
            className="
              mt-[4px] block
              font-['Arimo']
              text-[23px] font-bold
              leading-[1.2] tracking-[-0.02em]
              text-[#5D7B83]
              sm:text-[26px]
            "
          >
            It’s What Your Content Is Doing for the
            <br
              className="hidden sm:block"
            />{" "}
            Business.
          </span>
        </h2>

        <div
          aria-hidden="true"
          className="
            mx-auto mt-[18px]
            h-[3px] w-[55px]
            rounded-full
            bg-[#00C5A8]
          "
        />

        {/* Comparison cards */}
        <div
          className="
            mt-8 grid grid-cols-1 gap-5
            md:mt-10 md:grid-cols-2 md:gap-6
          "
        >
          {/* Publishing without strategy */}
          <article
            className="
              flex min-w-0 flex-col
              rounded-[13px]
              border border-[#DCEFF0]
              bg-white
              p-6
              shadow-[0_3px_3px_rgba(20,67,73,0.12)]
              sm:p-7
            "
          >
            <div
              className="
                flex h-[34px] w-[34px]
                items-center justify-center
                rounded-[10px]
                bg-[#FFE2E3]
                text-[#FF454D]
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-[18px] w-[18px]"
              >
                <path
                  d="
                    M10.3 3.9a2 2 0 0 1 3.4 0
                    l8 13.7a2 2 0 0 1-1.7 3H4
                    a2 2 0 0 1-1.7-3Z
                  "
                />

                <path
                  d="M12 8v5"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <circle
                  cx="12"
                  cy="17"
                  r="1"
                  fill="white"
                />
              </svg>
            </div>

            <h3
              className="
                mt-[20px]
                font-['Arimo']
                text-[14px] font-bold
                leading-[1.4]
                text-[#102329]
              "
            >
              Publishing Without Strategic Connection
            </h3>

            <div
              className="
                mb-[26px] mt-[12px]
                space-y-[12px]
                text-[11px] font-normal
                leading-[1.6]
                text-[#66828F]
                sm:text-[12px]
              "
            >
              <p>
                A business can publish consistently for months and still
                struggle to generate meaningful results.
              </p>

              <p>
                The difference usually comes down to whether the content
                is connected to a clear audience, a real search or
                business opportunity, and a defined role in the customer
                journey.
              </p>
            </div>

            <div
              className="
                mt-auto flex items-start gap-[5px]
                border-t border-[#EFF4F5]
                pt-[17px]
                font-['Inter']
                text-[9px] leading-[1.5]
                text-[#FF454D]
              "
            >
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                className="mt-px h-[10px] w-[10px] shrink-0"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                />

                <path
                  d="m6 6 4 4M10 6l-4 4"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              <span>
                Result: Low ROI, wasted effort, generic audience
              </span>
            </div>
          </article>

          {/* Deltaz approach */}
          <article
            className="
              flex min-w-0 flex-col
              rounded-[13px]
              border border-[#115458]
              bg-[linear-gradient(135deg,#0B3D42_0%,#0B5050_100%)]
              p-6
              text-white
              shadow-[0_9px_14px_rgba(20,67,73,0.16)]
              sm:p-7
            "
          >
            <div
              className="
                flex h-[34px] w-[34px]
                items-center justify-center
                rounded-[10px]
                bg-[#075E5A]
                text-[#00D4B9]
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                aria-hidden="true"
                className="h-[18px] w-[18px]"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4.5"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </div>

            <h3
              className="
                mt-[20px]
                font-['Arimo']
                text-[14px] font-bold
                leading-[1.4]
              "
            >
              The Deltaz Media Approach
            </h3>

            <div
              className="
                mb-[26px] mt-[12px]
                space-y-[12px]
                text-[11px] font-normal
                leading-[1.6]
                text-[#C0D8DA]
                sm:text-[12px]
              "
            >
              <p>
                We start by understanding what your business is trying to
                achieve, where your audience is looking for answers, and
                what your competitors are already doing.
              </p>

              <p>
                From there, we build a content strategy that gives every
                important piece of content a reason to exist.
              </p>
            </div>

            <div
              className="
                mt-auto flex flex-wrap
                items-center justify-between
                gap-[10px]
                border-t border-white/10
                pt-[17px]
                font-['Inter']
              "
            >
              <span
                className="
                  text-[8px] font-medium
                  uppercase text-[#00D4B9]
                "
              >
                The Objective
              </span>

              <span
                className="
                  rounded-full
                  bg-[#285C60]
                  px-[10px] py-[4px]
                  text-[9px] font-semibold
                  leading-[1.3] text-white
                "
              >
                Make Your Content Work Harder
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ContentApproach;
