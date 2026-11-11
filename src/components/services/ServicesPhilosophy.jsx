import philosophyIcon from "../../assets/Philosophy.png";
import strategyIcon from "../../assets/Strategy First.png";
import packagesIcon from "../../assets/No copy-paste.png";
import activityIcon from "../../assets/No Activity.png";
import growthIcon from "../../assets/Grow.png";
import wavesImage from "../../assets/Waves for hero section.png";

const principles = [
  {
    title: "Strategy First, Execution Follows",
    description:
      "A good idea sitting in a document won’t grow your business. Neither will random task execution. We connect strategy with real execution.",
    icon: strategyIcon,
  },
  {
    title: "No Copy-Paste Packages",
    description:
      "No cookie-cutter templates. We examine where your business is now and build strategies around your exact market position.",
    icon: packagesIcon,
  },
  {
    title: "No Unnecessary Activity",
    description:
      "We don’t do vanity work. Every tactic, channel, and campaign has a defined role in moving potential buyers closer to action.",
    icon: activityIcon,
  },
  {
    title: "Compounding Growth Framework",
    description:
      "Growth isn’t one post or campaign. It’s what happens when the right marketing decisions start compounding over time.",
    icon: growthIcon,
  },
];

function ServicesPhilosophy() {
  return (
    <section
      id="services-fit"
      aria-labelledby="services-fit-heading"
      className="
        relative isolate overflow-hidden
        bg-[#032D2C]
        px-5 py-12
        font-['Plus_Jakarta_Sans']
        text-white
        sm:px-8 sm:py-[76px]
        lg:min-h-[580px]
      "
    >
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-[80px] -z-10
          h-[350px] w-[650px]
          -translate-x-1/2
          rounded-full
          bg-[#007F78]/10
          blur-[100px]
        "
      />

      {/* Decorative waves */}
      <img
        src={wavesImage}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-0 top-1/2 -z-10
          h-auto w-full -translate-y-1/2
          opacity-60
        "
      />

      <div
        className="mx-auto w-full max-w-[1000px]"
      >
        {/* Section introduction */}
        <div
          className="flex flex-col items-center text-center"
        >
          <div
            className="
              inline-flex items-center gap-[6px]
              rounded-full
              border border-[#00756F]
              bg-[#004D49]/70
              px-[12px] py-[5px]
              font-['Inter']
              text-[9px] font-semibold
              uppercase tracking-[0.1em]
              text-[#00D5C3]
            "
          >
            <MaskedIcon
              src={philosophyIcon}
              className="h-[11px] w-[11px]"
            />

            <span>The Deltaz Philosophy</span>
          </div>

          <h2
            id="services-fit-heading"
            className="
              mt-[15px] max-w-[750px]
              font-['Manrope']
              text-[28px] font-extrabold
              leading-[1.1] tracking-[-0.035em]
              sm:text-[34px]
              lg:text-[38px]
            "
          >
            The Right Services. Not Every
            <br
              className="hidden sm:block"
            />{" "}
            Service.
          </h2>

          <p
            className="
              mt-[14px] max-w-[640px]
              text-[12px] font-normal
              leading-[1.7]
              text-[#7FA7A7]
              sm:text-[13px]
            "
          >
            We’re not interested in selling you a package filled with
            things your business doesn’t need. Our job is to understand
            the gap first, then recommend what makes sense.
          </p>
        </div>

        {/* Philosophy cards */}
        <div
          className="
            mt-8 grid grid-cols-1 gap-4
            sm:grid-cols-2
            lg:mt-10 lg:grid-cols-4
          "
        >
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="
                min-w-0
                rounded-[13px]
                border border-[#07514E]
                bg-[linear-gradient(145deg,rgba(5,65,63,0.92)_0%,rgba(3,49,48,0.88)_100%)]
                p-[18px]
              "
            >
              <div
                className="
                  flex h-[32px] w-[32px]
                  items-center justify-center
                  rounded-[10px]
                  bg-[#005550]
                  text-[#00D5C3]
                "
              >
                <MaskedIcon
                  src={principle.icon}
                  className="h-[18px] w-[18px]"
                />
              </div>

              <h3
                className="
                  mt-[16px]
                  font-['Manrope']
                  text-[14px] font-bold
                  leading-[1.45] tracking-[-0.01em]
                "
              >
                {principle.title}
              </h3>

              <p
                className="
                  mt-[10px]
                  text-[10px] font-normal
                  leading-[1.65]
                  text-[#7FA7A7]
                "
              >
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MaskedIcon({ src, className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`block bg-current ${className}`}
      style={{
        WebkitMaskImage: `url("${src}")`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        maskImage: `url("${src}")`,
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
      }}
    />
  );
}

export default ServicesPhilosophy;
