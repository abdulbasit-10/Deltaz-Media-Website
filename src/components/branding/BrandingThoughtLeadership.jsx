import linkedinIcon from "../../assets/Linkedin strategy.png";
import articleIcon from "../../assets/article.png";
import insightsIcon from "../../assets/insights.png";
import opinionIcon from "../../assets/opinion.png";
import foundersIcon from "../../assets/stories.png";
import leadershipIcon from "../../assets/leadership.png";
import newsIcon from "../../assets/news.png";
import frameworksIcon from "../../assets/frameworks.png";

const formats = [
  [linkedinIcon, "LinkedIn Thought Leadership"], [articleIcon, "Executive Articles"],
  [insightsIcon, "Industry Insights"], [opinionIcon, "Opinion Pieces"],
  [foundersIcon, "Founder Stories"], [leadershipIcon, "Leadership Lessons"],
  [newsIcon, "News & Trend Commentary"], [frameworksIcon, "Business Frameworks"],
];

function BrandingThoughtLeadership() {
  return (
    <section className="bg-[#EFF8F8] px-5 py-16 font-['Plus_Jakarta_Sans'] text-[#092B31] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[920px] text-center">
        <p className="font-['Inter'] text-[8px] font-bold uppercase tracking-[0.12em] text-[#00B8A9]">TURNING KNOWLEDGE INTO VALUE</p>
        <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-[clamp(25px,4vw,36px)] font-extrabold leading-[1.1]">Your Experience Is Content.</h2>
        <p className="mx-auto mt-3 max-w-[620px] text-[11px] leading-[1.55] text-[#678187] sm:text-[13px]">Experienced leaders already have years of knowledge that can strengthen their reputation, but much of it stays within boardrooms and private conversations. We help turn those experiences into valuable market assets.</p>
        <div className="mx-auto mt-8 rounded-[16px] bg-white p-6 text-left shadow-[0_10px_22px_rgba(24,60,65,0.12)] sm:mt-9 sm:p-8">
          <p className="text-center font-['Inter'] text-[8px] font-bold uppercase tracking-[0.09em] text-[#00B8A9]">THOUGHT LEADERSHIP CONTENT FORMATS WE PRODUCE</p>
          <div className="mt-4 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-4">
            {formats.map(([icon, label]) => <div key={label} className="flex min-h-[50px] items-center gap-2 rounded-[8px] border border-[#BDE8E6] bg-[#F3FAFA] px-3 py-2 font-['Plus_Jakarta_Sans'] text-[10px] font-semibold text-[#092B31]"><img src={icon} alt="" className="h-4 w-4 shrink-0 object-contain" /><span>{label}</span></div>)}
          </div>
          <div className="mt-5 flex flex-col items-start justify-between gap-4 border-t border-[#E7EEEE] pt-5 sm:flex-row sm:items-center">
            <p className="text-[9px] text-[#678187]">One conversation about a business challenge can produce a LinkedIn post, article, newsletter, and video script.</p>
            <a href="/contact" className="rounded-[7px] bg-[#062F34] px-4 py-3 font-['Arimo'] text-[9px] font-bold !text-white">Turn Expertise Into Thought Leadership&nbsp; →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandingThoughtLeadership;
