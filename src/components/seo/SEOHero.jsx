import arrowIcon from "../../assets/meteor-icons_arrow-up-right (white).png";

function SEOHero() {
  return (
    <section className="relative flex min-h-[390px] flex-col items-center justify-center overflow-hidden bg-[linear-gradient(90deg,#02292D_0%,#032D31_11%,#032D31_89%,#02292D_100%)] px-5 py-14 text-center font-['Plus_Jakarta_Sans'] text-white sm:px-8 sm:py-16 lg:min-h-[520px] lg:px-[5%] lg:py-[30px] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_50%_45%,rgba(6,66,72,0.7)_0%,transparent_72%)] before:content-['']">
      <div aria-hidden="true" className="pointer-events-none absolute left-8 top-8 h-[62px] w-[82px] opacity-65 [background-image:radial-gradient(circle,#238792_2.5px,transparent_3px)] [background-size:15px_14px]" />
      <span aria-hidden="true" className="pointer-events-none absolute bottom-[24%] left-[8%] h-[13px] w-[13px] rounded-full bg-[#D8F1F0]/60 blur-[3px]" />
      <span aria-hidden="true" className="pointer-events-none absolute bottom-[22%] right-[9%] h-[13px] w-[13px] rounded-full bg-[#08737D]/75" />
      <span aria-hidden="true" className="pointer-events-none absolute left-[61%] top-[54%] h-[10px] w-[10px] rounded-full bg-[#08737D]/65" />

      <div className="relative mx-auto flex w-full max-w-[760px] -translate-y-2 flex-col items-center">
        <div className="inline-flex items-center gap-[6px] rounded-full border border-[#28575C] bg-[#0A363B] px-[11px] py-[5px] font-['Inter'] text-[8px] font-semibold uppercase leading-none tracking-[0.05em] text-[#14B6C5]">
          <span aria-hidden="true" className="h-[6px] w-[6px] rounded-full bg-[#00D0BC]" />
          SEO Services &amp; Search Strategy
        </div>

        <h1 className="mt-5 font-['Arimo'] text-[clamp(31px,4.5vw,44px)] font-extrabold leading-[1.12] tracking-[-0.04em]">
          Get Found When Your Customers
          <span className="block">Are <span className="text-[#0AA5B3]">Searching.</span></span>
        </h1>

        <p className="mt-4 max-w-[590px] font-['Manrope'] text-[12px] leading-[1.5] text-[#B3C7C9] sm:text-[13px]">
          Your customers are already searching for products, services and solutions like yours. If your business is not visible when those searches happen, your competitors get the opportunity first.
        </p>

        <div className="mt-7 flex w-full flex-col items-center justify-center gap-[10px] min-[420px]:w-auto min-[420px]:flex-row">
          <a href="/contact" className="group inline-flex min-h-11 w-full max-w-[330px] items-center justify-center gap-2 rounded-full border border-[#0AA5B3] bg-[#0AA5B3] px-[18px] py-3 font-['Inter'] text-[12px] font-semibold text-white shadow-[0_5px_12px_rgba(10,165,179,0.20)] transition-all duration-200 hover:border-white hover:bg-[#10899A] min-[420px]:w-auto min-[420px]:max-w-none">
            <span>Let&apos;s Build Your Growth Strategy</span>
            <img src={arrowIcon} alt="" aria-hidden="true" className="h-[15px] w-[15px] object-contain transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </a>
          <a href="/#success-stories" className="inline-flex min-h-11 w-full max-w-[330px] items-center justify-center rounded-full border border-white bg-transparent px-8 py-3 font-['Inter'] text-[12px] font-bold text-white transition-all duration-200 hover:bg-[#10899A] min-[420px]:w-auto min-[420px]:max-w-none min-[420px]:min-w-[145px]">
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default SEOHero;
