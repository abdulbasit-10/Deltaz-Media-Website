import arrowIcon from "../../assets/meteor-icons arrow-up-right (black).png";

function BeOurNextCTA() {
  return (
    <section className="bg-white px-5 py-12 font-['Manrope'] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-[640px] rounded-[16px] bg-[linear-gradient(180deg,#0AAEB1_0%,#07989D_38%,#087E83_100%)] px-6 py-9 text-center text-white shadow-[0_14px_24px_rgba(4,68,72,0.2)] sm:px-12 sm:py-9">
        <h2 className="font-['Arimo'] text-[clamp(22px,3.3vw,29px)] font-bold leading-[1.12]">
          Ready to Tell Your Story?
          <span className="block">Be Our Next Guest.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[460px] text-[10px] leading-[1.55] text-white sm:text-[11px]">
          If you’ve built something, learned something, challenged the status quo, or have a perspective worth sharing, we’d love to hear from you. Step in front of the camera. Bring your story. We’ll handle the rest.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-flex min-h-[34px] items-center justify-center gap-1.5 rounded-full bg-white px-5 py-2.5 font-['Inter'] text-[8px] font-bold uppercase tracking-[0.02em] !text-black transition-colors duration-200 hover:bg-[#00D1E0] hover:!text-black sm:text-[9px]"
        >
          Apply to Be Our Next Guest <img src={arrowIcon} alt="" aria-hidden="true" className="h-[11px] w-[11px] object-contain" />
        </a>
      </div>
    </section>
  );
}

export default BeOurNextCTA;
