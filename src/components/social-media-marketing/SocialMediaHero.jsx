import arrowIcon from "../../assets/meteor-icons_arrow-up-right (white).png";

function SocialMediaHero() {
  return (
    <section
      className="
        relative flex min-h-[390px] flex-col items-center justify-center overflow-hidden bg-[#032D31]
        px-5 py-14 text-center font-['Plus_Jakarta_Sans'] text-white
        sm:px-8 sm:py-16
        lg:min-h-[520px] lg:px-[5%] lg:py-[30px]
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-8 top-7
          h-16 w-16 opacity-60
          [background-image:radial-gradient(circle,#238792_2px,transparent_3px)]
          [background-size:14px_14px]
        "
      />

      <div className="relative mx-auto flex w-full max-w-[650px] -translate-y-3 flex-col items-center">
        <p
          className="
          inline-flex items-center gap-[5px] rounded-full border border-[#00635F]
          bg-[#00443F]/65 px-[10px] py-[4px]
          font-['Inter'] text-[7px] font-bold uppercase leading-none
          tracking-[0.07em] text-[#00C5B5] sm:text-[8px]
          "
        >
          <span aria-hidden="true" className="h-[4px] w-[4px] rounded-full bg-[#00D0BC]" />
          SOCIAL MEDIA MARKETING DUBAI &amp; UAE
        </p>

        <h1
          className="
          mt-4 font-['Plus_Jakarta_Sans']
            text-[clamp(29px,4.5vw,43px)] font-extrabold
            leading-[1.08] tracking-[-0.04em]
          "
        >
          Build a Social Presence That
          <span className="block text-[#00B8B3]">Supports Your Business.</span>
        </h1>

        <p
          className="
            mt-3 max-w-[580px] text-[11px] leading-[1.4]
            text-[#B4CDCE] sm:text-[12px]
          "
        >
          Your customers are already using social media to discover businesses, evaluate
          brands, compare options, and decide who deserves their attention. Deltaz
          provides strategy, content creation, platform management, and performance
          analysis — built around your commercial goals rather than just a fixed posting
          schedule.
        </p>

        <div className="mt-5 flex w-full flex-col items-center justify-center gap-[10px] sm:w-auto sm:flex-row">
          <a
            href="/contact"
            className="group inline-flex min-h-11 w-full max-w-[330px] items-center justify-center gap-2 rounded-full border border-[#0AA5B3] bg-[#0AA5B3] px-[18px] py-3 font-['Inter'] text-[12px] font-semibold text-white shadow-[0_5px_12px_rgba(10,165,179,0.20)] transition-all duration-200 ease-out hover:border-white hover:bg-[#10899A] hover:shadow-[0_0_20px_rgba(32,185,68,0.24)] sm:min-h-[40px] sm:w-auto sm:max-w-none sm:py-2"
          >
            <span>Let&apos;s Build Your Growth Strategy</span>
            <img src={arrowIcon} alt="" aria-hidden="true" className="h-[15px] w-[15px] shrink-0 object-contain transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </a>
          <a
            href="/#success-stories"
            className="inline-flex min-h-11 w-full max-w-[330px] items-center justify-center rounded-full border border-white bg-transparent px-8 py-3 font-['Inter'] text-[12px] font-bold text-white transition-all duration-200 ease-out hover:border-white hover:bg-[#10899A] hover:shadow-[0_0_20px_rgba(32,185,68,0.24)] sm:min-h-[40px] sm:w-auto sm:max-w-none sm:min-w-[145px] sm:py-2"
          >
            See Our Work
          </a>
        </div>
      </div>

      <span aria-hidden="true" className="pointer-events-none absolute bottom-[24%] left-[10%] h-[11px] w-[11px] rounded-full bg-[#D8F1F0]/65 blur-[2px]" />
      <span aria-hidden="true" className="pointer-events-none absolute bottom-[22%] right-[7%] h-[10px] w-[10px] rounded-full bg-[#087F87]/75" />
    </section>
  );
}

export default SocialMediaHero;
