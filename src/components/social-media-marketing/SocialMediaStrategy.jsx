const strategyPoints = [
  ["01", "Target Audience & Customer Behaviour", "Deep analysis of who your ideal buyers are and how they browse."],
  ["02", "Business Positioning & Differentiators", "Highlighting what sets your business apart in the UAE market."],
  ["03", "Competitor Activity & Content Gaps", "Identifying opportunities competitors are failing to address."],
  ["04", "Platform Suitability", "Selecting channels based on commercial relevance, not trends."],
  ["05", "Content Themes & Pillars", "Structuring core topics that build authority and trust."],
  ["06", "Brand Voice & Messaging", "Crafting a distinct tone that speaks directly to decision-makers."],
  ["07", "Content Formats", "Pairing messages with the right visual or short-form video style."],
  ["08", "Posting Cadence", "Establishing a sustainable, realistic schedule that maintains quality."],
  ["09", "Campaign Opportunities", "Leveraging seasonal trends and brand milestone promotions."],
  ["10", "Community & Engagement", "Turning casual viewers into engaged brand advocates."],
  ["11", "Conversion Paths", "Guiding social traffic seamlessly into your lead funnel."],
  ["12", "Performance Indicators", "Setting clear benchmarks tied to real commercial growth."],
];

function SocialMediaStrategy() {
  return (
    <section className="bg-[#032D31] px-5 py-16 font-['Plus_Jakarta_Sans'] text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[900px]">
        <header className="mx-auto max-w-[600px] text-center">
          <span className="inline-flex rounded-full border border-[#08756F] bg-[#064A49] px-3 py-1 font-['Inter'] text-[8px] font-bold uppercase tracking-[0.08em] text-[#00C5B5]">
            Strategic Foundation
          </span>
          <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-[clamp(23px,3.5vw,32px)] font-extrabold leading-[1.12] tracking-[-0.03em]">
            Start With a Strategy, Not a Content
            <span className="block">Calendar.</span>
          </h2>
          <p className="mt-3 text-[10px] leading-[1.55] text-[#A8C0C2] sm:text-[12px]">
            Posting consistently does not solve a positioning problem. We define what your social media should actually achieve before creating content.
          </p>
        </header>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {strategyPoints.map(([number, title, description]) => (
            <article key={number} className="min-h-[112px] rounded-[10px] border border-[#07393D] bg-[#042F33] p-4 sm:p-5">
              <span className="font-['Plus_Jakarta_Sans'] text-[12px] font-bold text-[#00C5B5]">{number}</span>
              <h3 className="mt-3 font-['Arimo'] text-[12px] font-bold leading-[1.35] text-white">{title}</h3>
              <p className="mt-2 text-[9px] leading-[1.5] text-[#829FA2] sm:text-[10px]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialMediaStrategy;
