const processSteps = [
  ["01", "Understand", "We learn your business, audience, positioning, and objectives."],
  ["02", "Audit", "We review your existing social presence and competitor gaps."],
  ["03", "Strategise", "We define platforms, content pillars, tone, and rhythms."],
  ["04", "Create", "We design copy, carousels, Reels, and platform-native creative."],
  ["05", "Publish & Engage", "We handle scheduled publishing and active community care."],
  ["06", "Measure & Refine", "We track real business impact and continuously iterate."],
];

function SocialMediaProcess() {
  return (
    <section className="bg-[#032D31] px-5 py-16 font-['Plus_Jakarta_Sans'] text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[920px]">
        <header className="text-center">
          <span className="inline-flex rounded-full border border-[#08756F] bg-[#064A49] px-3 py-1 font-['Inter'] text-[8px] font-bold uppercase tracking-[0.08em] text-[#00C5B5]">
            How We Work
          </span>
          <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-[clamp(23px,3.5vw,32px)] font-extrabold leading-[1.12]">
            Our Social Media Marketing Process
          </h2>
          <p className="mt-3 text-[10px] leading-[1.5] text-[#A8C0C2] sm:text-[12px]">
            A structured, data-driven methodology tailored for brands in Dubai and the UAE.
          </p>
        </header>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {processSteps.map(([number, title, description]) => (
            <article key={number} className="min-h-[145px] rounded-[11px] bg-[#04272B] p-4 sm:p-5">
              <span className="font-['Plus_Jakarta_Sans'] text-[22px] font-extrabold leading-none text-[#00C5B5]">{number}</span>
              <h3 className="mt-4 font-['Arimo'] text-[12px] font-bold leading-[1.35] text-white">{title}</h3>
              <p className="mt-2 text-[8px] leading-[1.55] text-[#829FA2] sm:text-[9px]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialMediaProcess;
