import visibilityIcon from "../../assets/visibility.png";
import rankingsIcon from "../../assets/keywords.png";
import trafficIcon from "../../assets/website traffic.png";
import impressionsIcon from "../../assets/Search and Traffic.png";
import conversionIcon from "../../assets/conversion activities.png";
import leadsIcon from "../../assets/leads.png";

const measures = [
  [visibilityIcon, "Organic search visibility"],
  [rankingsIcon, "Target keyword rankings"],
  [trafficIcon, "Qualified organic traffic"],
  [impressionsIcon, "Search impressions & clicks"],
  [conversionIcon, "Landing page conversion"],
  [leadsIcon, "Organic enquiries & leads"],
];

function SEOImpact() {
  return (
    <section className="bg-[#E8F5F6] px-5 py-14 font-['Manrope'] text-[#092F33] sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-[840px] gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <article className="rounded-[13px] bg-[radial-gradient(ellipse_at_90%_90%,rgba(0,184,179,0.18),transparent_42%),linear-gradient(135deg,#06484B,#032D31)] p-6 text-white shadow-[0_10px_18px_rgba(3,45,49,0.18)] sm:p-7">
          <p className="font-['Inter'] text-[8px] font-bold uppercase tracking-[0.1em] text-[#00C5B5]">Beyond Vanity Metrics</p>
          <h2 className="mt-3 font-['Arimo'] text-[clamp(19px,2.5vw,24px)] font-bold leading-[1.18]">
            RESULTS ARE EASIER TO TALK ABOUT <span className="text-[#00C5B5]">THAN TO DELIVER</span>
          </h2>
          <p className="mt-3 text-[9px] leading-[1.6] text-[#B4CDCE] sm:text-[10px]">
            Rankings are an indicator. Growth is the true objective. The goal is not just more traffic for the sake of traffic — it is about getting relevant demand to reach your business.
          </p>
          <a href="/contact" className="mt-4 inline-flex rounded-full bg-[#00C5B5] px-4 py-2.5 font-['Inter'] text-[8px] font-semibold text-[#032D31] hover:bg-[#22D6C7]">WORK WITH DELTAZ</a>
        </article>

        <div>
          <h3 className="font-['Arimo'] text-[18px] font-bold leading-[1.2] sm:text-[20px]">We Measure SEO by Real Business Impact.</h3>
          <p className="mt-3 text-[9px] text-[#687E83] sm:text-[10px]">Depending on your commercial goals, we systematically monitor:</p>
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {measures.map(([icon, label]) => (
              <div key={label} className="flex min-h-[42px] items-center gap-2 rounded-[8px] bg-[#F7FBFB] px-3 py-2">
                <img src={icon} alt="" className="h-[14px] w-[14px] object-contain" />
                <span className="text-[8px] font-medium sm:text-[9px]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SEOImpact;
