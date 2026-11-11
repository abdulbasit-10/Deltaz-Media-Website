const services = [
  ["Content Marketing", "/services/content-marketing"],
  ["SEO Search Strategy", "/services/seo", true],
  ["Performance Marketing", "/services"],
  ["Social Media", "/services/social-media-marketing"],
  ["Lead Generation", "/services"],
  ["Personal Branding", "/services/branding"],
  ["Web Development", "/services"],
];

function SEOEcosystem() {
  return (
    <section className="bg-[#E8F5F6] px-5 py-14 font-['Manrope'] text-[#082F33] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-[760px] text-center">
        <p className="font-['Inter'] text-[8px] font-bold uppercase tracking-[0.1em] text-[#07535A]">Holistic Ecosystem</p>
        <h2 className="mx-auto mt-2 max-w-[540px] font-['Arimo'] text-[clamp(23px,3.5vw,31px)] font-bold leading-[1.12]">
          SEO Should Work With Your Wider
          <span className="block">Marketing.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-[600px] text-[10px] leading-[1.55] text-[#687E83] sm:text-[11px]">
          Search does not exist in isolation. SEO insights strengthen content strategy, search data informs paid campaigns, and high-performing organic content fuels lead generation.
        </p>
        <nav aria-label="Related services" className="mt-7 flex flex-wrap justify-center gap-2">
          {services.map(([label, href, active]) => (
            <a
              key={label}
              href={href}
              aria-current={active ? "page" : undefined}
              className="rounded-full border border-[#E0EEEE] bg-white px-4 py-2 font-['Inter'] text-[9px] font-medium text-[#12343A] transition-colors duration-200 hover:border-[#0A4B4D] hover:bg-[#0A4B4D] hover:!text-white"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

export default SEOEcosystem;
