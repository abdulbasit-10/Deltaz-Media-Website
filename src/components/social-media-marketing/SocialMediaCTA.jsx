import arrowIcon from "../../assets/meteor-icons arrow-up-right (black).png";

function SocialMediaCTA() {
  return (
    <section className="bg-white px-5 py-12 font-['Plus_Jakarta_Sans'] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-[930px] rounded-[24px] bg-[radial-gradient(ellipse_at_12%_35%,rgba(190,255,255,0.22),transparent_28%),radial-gradient(ellipse_at_88%_92%,rgba(255,255,255,0.12),transparent_26%),linear-gradient(180deg,#12B6BE_0%,#078E96_38%,#05666C_100%)] px-6 py-14 text-center text-white shadow-[0_14px_26px_rgba(7,104,110,0.14),0_0_22px_rgba(0,190,198,0.12)] sm:px-12 sm:py-[68px]">
        <h2 className="mx-auto max-w-[720px] text-[clamp(27px,4vw,38px)] font-extrabold leading-[1.1] tracking-[-0.035em]">
          Your Next Growth Opportunity Could
          <span className="block">Be Closer Than You Think.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[570px] text-[12px] leading-[1.55] text-white sm:text-[14px]">
          Be visible. Be relevant. Build a social presence that people remember and trust. Deltaz helps businesses across Dubai &amp; the UAE turn social media into a growth engine.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 min-[460px]:flex-row">
          <a href="/contact" className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full border border-white/45 bg-[linear-gradient(180deg,#43BFC4_0%,#3BB7BC_28%,#32AEB4_52%,#3BB7BC_76%,#43BFC4_100%)] px-5 py-3 font-['Inter'] text-[11px] font-medium !text-[#062F34] shadow-[0_3px_9px_rgba(0,50,55,0.17)] transition hover:brightness-105">
            Book Your Free Audit <img src={arrowIcon} alt="" aria-hidden="true" className="h-[14px] w-[14px] object-contain" />
          </a>
          <a href="/#success-stories" className="inline-flex min-h-[42px] items-center justify-center rounded-full border border-white px-5 py-3 font-['Inter'] text-[11px] font-semibold text-white transition hover:bg-white/10">
            See What We&apos;ve Achieved
          </a>
        </div>
      </div>
    </section>
  );
}

export default SocialMediaCTA;
