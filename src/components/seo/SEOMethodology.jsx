const steps = [
  ["01", "Understand", "We analyze your business, market, audience, competitors, website, and search history."],
  ["02", "Identify", "Uncover search demand, technical roadblocks, content gaps, and key commercial leads."],
  ["03", "Strategise", "Build a tailored roadmap across Technical, Content, and Local SEO, prioritized by business impact."],
  ["04", "Optimise", "Execute fixes on high-opportunity areas, existing core pages, and new search content assets."],
  ["05", "Measure", "Track visibility, qualified organic traffic, rankings, enquiries, and bottom-line revenue."],
];

function SEOMethodology() {
  return (
    <section className="bg-[#032D31] px-5 py-16 font-['Manrope'] text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[840px]">
        <header className="text-center">
          <p className="font-['Inter'] text-[8px] font-bold uppercase tracking-[0.1em] text-[#00C5B5]">Our Methodology</p>
          <h2 className="mt-2 font-['Arimo'] text-[clamp(27px,4vw,34px)] font-bold leading-[1.1]">HOW WE WORK</h2>
          <p className="mt-3 text-[10px] leading-[1.5] text-[#A8C0C2] sm:text-[11px]">Our SEO approach is engineered specifically around measurable business goals.</p>
        </header>

        <div className="mt-9 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-5">
          {steps.map(([number, title, text]) => (
            <article key={number} className="min-h-[150px] rounded-[11px] border border-[#245255] bg-[#123B3F] p-4 sm:p-4">
              <p className="font-['Plus_Jakarta_Sans'] text-[20px] font-extrabold leading-none text-[#00C5B5]">{number}</p>
              <h3 className="mt-4 font-['Arimo'] text-[12px] font-bold text-white">{title}</h3>
              <p className="mt-2 text-[8px] leading-[1.55] text-[#8EA9AB] sm:text-[9px]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SEOMethodology;
