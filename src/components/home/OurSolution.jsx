function OurSolution() {
  return (
    <section
      id="our-solution"
      aria-labelledby="solution-heading"
      className="
        relative isolate w-full overflow-hidden
        bg-[#032D31]
        px-5 py-12
        font-['Plus_Jakarta_Sans']
        text-white
        sm:px-8 sm:py-[52px]
        lg:py-[64px]
      "
    >
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-[170px] -top-[180px] -z-10
          h-[350px] w-[350px]
          rounded-full
          bg-[#07818A]/20
          blur-[95px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-[200px] -right-[180px] -z-10
          h-[350px] w-[350px]
          rounded-full
          bg-[#07818A]/15
          blur-[95px]
        "
      />

      <div
        className="
          mx-auto flex w-full max-w-[1000px]
          flex-col items-center
          text-center
        "
      >
        {/* Section label */}
        <div
          className="
            flex items-center justify-center
            gap-[7px]
            text-[11px] font-medium
            uppercase
          "
        >
          <span
            aria-hidden="true"
            className="h-px w-[16px] bg-[#0AA5B3]"
          />

          <span>Our Solution</span>

          <span
            aria-hidden="true"
            className="h-px w-[16px] bg-[#0AA5B3]"
          />
        </div>

        {/* Heading */}
        <h2
          id="solution-heading"
          className="
            mt-[18px]
            text-[28px] font-bold
            leading-[1.35] tracking-[-0.035em]
            sm:text-[34px]
            lg:text-[38px]
          "
        >
          <span
            className="block font-['Manrope'] text-white"
          >
            Make Your Business
          </span>

          <span
            className="mt-[3px] block text-[#55DECE]"
          >
            Impossible to Ignore.
          </span>
        </h2>

        {/* First description */}
        <p
          className="
            mt-[16px] max-w-[800px]
            text-[12px] font-normal
            leading-[1.5]
            text-[#C0D2D4]
            sm:text-[11px]
            lg:text-[12px]
          "
        >
          Your business has something valuable to offer.
          <br
            className="hidden sm:block"
          />{" "}
          But if the right people can’t find you, remember you, or understand
          why they should choose you, that potential stays hidden.
        </p>

        {/* Second description */}
        <p
          className="
            mt-[26px] max-w-[800px]
            text-[12px] font-normal
            leading-[1.5]
            text-[#C0D2D4]
            sm:mt-[30px] sm:text-[11px]
            lg:text-[12px]
          "
        >
          We bring the right strategy, content, technology, and marketing
          channels together to help your business get found, build authority,
          create demand, and turn attention into opportunities.
        </p>

        {/* Highlighted statement */}
        <blockquote
          className="
            mt-[18px] w-full max-w-[510px]
            rounded-[12px]
            border border-[#0A5960]/60
            bg-[#0A363B]
            px-5 py-[18px]
            text-[14px] font-semibold
            leading-[1.5]
            text-[#0AA5B3]
            sm:px-7 sm:text-[16px]
          "
        >
          &quot;Because being online isn’t the goal. Being chosen is.&quot;
        </blockquote>
      </div>
    </section>
  );
}

export default OurSolution;
