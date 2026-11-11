function BrandingCTA() {
  return (
    <section className="bg-white px-5 py-14 font-['Plus_Jakarta_Sans'] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[820px] rounded-[24px] bg-[linear-gradient(135deg,#22C8D0_0%,#079FA8_48%,#087779_100%)] px-6 py-14 text-center text-white shadow-[0_16px_28px_rgba(7,104,110,0.22)] sm:px-12 sm:py-16">
        <h2 className="font-['Plus_Jakarta_Sans'] text-[clamp(26px,4vw,36px)] font-extrabold leading-[1.05] tracking-[-0.035em]">
          Your Expertise Is Already There.
          <span className="block">Now Make It Visible.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-[11px] leading-[1.45] text-white sm:text-[13px]">
          Assess your positioning, digital presence, content, and business objectives to identify where personal branding creates the most value.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 min-[440px]:flex-row">
          <a href="/contact" className="inline-flex min-h-[39px] items-center justify-center gap-2 rounded-full border border-white/60 bg-white/25 px-5 py-3 font-['Inter'] text-[10px] font-medium text-[#062F34] shadow-[0_3px_8px_rgba(0,50,55,0.18)] transition hover:bg-white/40">
            Book Your Free Audit <span aria-hidden="true" className="text-[16px] leading-none">↗</span>
          </a>
          <a href="/#success-stories" className="inline-flex min-h-[39px] items-center justify-center rounded-full border border-white px-5 py-3 font-['Inter'] text-[10px] font-semibold text-white transition hover:bg-white/10">
            See What We&apos;ve Achieved
          </a>
        </div>
      </div>
    </section>
  );
}

export default BrandingCTA;
