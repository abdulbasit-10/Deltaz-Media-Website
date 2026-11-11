import visibilityIcon from "../../assets/visibility.png";
import keywordsIcon from "../../assets/keywords.png";
import competitorIcon from "../../assets/performance.png";
import technicalIcon from "../../assets/tech health.png";
import gapsIcon from "../../assets/gaps.png";
import openingsIcon from "../../assets/openings.png";
import arrowIcon from "../../assets/meteor-icons arrow-up-right (black).png";

const diagnosticCards = [
  [visibilityIcon, "Current Visibility", "Benchmarking current search engine footprint and authority."],
  [keywordsIcon, "Keywords & Demand", "Analyzing search volume and actual commercial intent."],
  [competitorIcon, "Competitor Performance", "Uncovering what strategies your direct competitors rely on."],
  [technicalIcon, "Technical Health", "Diagnosing speed, indexation, architecture, and bugs."],
  [gapsIcon, "Content Gaps", "Identifying missing topics and buyer journey touchpoints."],
  [openingsIcon, "Commercial Openings", "Finding localized and high-conversion target keywords."],
];

function SEODiagnostic() {
  return (
    <section className="bg-[#032D31] px-5 py-14 font-['Manrope'] text-white sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-[850px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="font-['Inter'] text-[8px] font-bold uppercase tracking-[0.1em] text-[#00C5B5]">Diagnostic First</p>
          <h2 className="mt-4 font-['Arimo'] text-[clamp(23px,3.2vw,32px)] font-bold leading-[1.12]">SEO Starts With Understanding Your Search Landscape.</h2>
          <p className="mt-4 text-[10px] leading-[1.6] text-[#B4CDCE] sm:text-[11px]">Before we optimise anything, we need to understand where your business stands and where the opportunity exists.</p>
          <p className="mt-4 text-[10px] leading-[1.6] text-[#B4CDCE] sm:text-[11px]">This gives us a clear picture of where you are, where competitors are winning, and where your business can realistically compete and win.</p>
          <a href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#00C5B5] px-4 py-3 font-['Inter'] text-[9px] font-semibold text-[#032D31]">Identify Your SEO Opportunities <img src={arrowIcon} alt="" className="h-3 w-3 object-contain" /></a>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {diagnosticCards.map(([icon, title, description]) => (
            <article key={title} className="min-h-[78px] rounded-[9px] border border-[#245255] bg-[#123B3F] p-3.5">
              <img src={icon} alt="" className="h-[15px] w-[15px] object-contain" />
              <h3 className="mt-2 font-['Arimo'] text-[10px] font-bold">{title}</h3>
              <p className="mt-1 text-[8px] leading-[1.45] text-[#8EA9AB]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SEODiagnostic;
