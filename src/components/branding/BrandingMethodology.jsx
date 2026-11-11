const steps = [
  ["01", "Find Your Position", "We start with your business, expertise, audience, industry, and ambitions to identify where your personal brand creates the strongest market position."],
  ["02", "Define What You Should Be Known For", "We turn your experience and perspective into a clearer positioning that gives people a reason to remember you and associate you with value."],
  ["03", "Build a Brand That Holds Together", "We align your profiles, messaging, visual identity, narrative, and content pillars so every platform reinforces the same positioning."],
  ["04", "Turn Expertise Into Influence", "We transform your knowledge and opinions into thought leadership and content that demonstrates real-world authority."],
  ["05", "Put Your Brand in Front of the Right People", "We distribute content across relevant platforms while using engagement and community building to create meaningful conversations."],
  ["06", "Measure What Moves the Brand Forward", "We track visibility, audience quality, profile activity, conversations, and business outcomes to continuously refine the strategy."],
];

const numberColors = ["#00D1BE", "#00C9B9", "#00D8C4", "#00C5B5", "#00D2BE", "#00C9B9"];

function BrandingMethodology() {
  return (
    <section className="bg-[#032D31] px-5 py-16 font-['Plus_Jakarta_Sans'] text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[920px]">
        <div className="text-center">
          <p className="font-['Plus_Jakarta_Sans'] text-[8px] font-bold uppercase tracking-[0.12em] text-[#00C5B5]">METHODOLOGY</p>
          <h2 className="mx-auto mt-3 max-w-[620px] font-['Plus_Jakarta_Sans'] text-[clamp(24px,3.2vw,32px)] font-extrabold leading-[1.08] tracking-[-0.035em]">WE BUILD THE BRAND BEFORE WE BUILD <span className="block">THE CONTENT</span></h2>
          <p className="mt-3 text-[11px] text-[#A8C0C2] sm:text-[12px]">Our 6-step process turns personal experience into commercial influence.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(([number, title, text], index) => (
            <article key={number} className="rounded-[10px] border border-[#0A565A] bg-[#063B3E] p-5 sm:min-h-[147px] sm:p-6">
              <div className="font-['Plus_Jakarta_Sans'] text-[21px] font-extrabold leading-none" style={{ color: numberColors[index], textShadow: `0 0 12px ${numberColors[index]}88` }}>{number}</div>
              <h3 className="mt-3 font-['Arimo'] text-[12px] font-bold leading-[1.35] text-white sm:text-[13px]">{title}</h3>
              <p className="mt-2 text-[9px] leading-[1.55] text-[#B4CDCE] sm:text-[10px]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandingMethodology;
