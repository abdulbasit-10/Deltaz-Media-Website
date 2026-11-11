import audienceIcon from "../../assets/target audience.png";
import conversationsIcon from "../../assets/news.png";
import authorityIcon from "../../assets/Expertise.png";

const points = [
  [audienceIcon, "Target Audience Relevance", "Profile visits and content reach focused specifically on industry decision-makers, potential partners, and key prospects."],
  [conversationsIcon, "Inbound Commercial Conversations", "Direct inquiries, partnership proposals, speaking opportunities, and consultative discussions resulting from published content."],
  [authorityIcon, "Compounding Market Authority", "Stronger brand recognition, executive trust, and long-term reputation that continues generating value as your network grows."],
];

function BrandingWhy() {
  return (
    <section className="bg-[#EFF8F8] px-5 py-14 font-['Plus_Jakarta_Sans'] text-[#092B31] sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-[920px] gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <article className="rounded-[16px] bg-[#032D31] p-6 text-white shadow-[0_12px_20px_rgba(3,45,49,0.18)] sm:p-7">
          <p className="font-['Inter'] text-[8px] font-bold uppercase tracking-[0.1em] text-[#00C5B5]">QUALITY OVER VOLUME</p>
          <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-[clamp(23px,3vw,30px)] font-extrabold leading-[1.12]">The Quality of the Audience Matters More Than the Size.</h2>
          <p className="mt-4 text-[10px] leading-[1.6] text-[#B4CDCE] sm:text-[11px]">For a CEO, 500 relevant decision-makers can be far more valuable than thousands of followers with no connection to your target opportunities.</p>
          <a href="/contact" className="mt-5 flex items-center justify-center rounded-[7px] bg-[#00C5B5] px-4 py-3 font-['Arimo'] text-[10px] font-bold !text-[#032D31]">Define Your Personal Brand Strategy</a>
        </article>
        <div className="space-y-3">
          {points.map(([icon, title, text]) => (
            <article key={title} className="flex gap-3 rounded-[11px] border border-[#C7E9E7] bg-white p-4 shadow-[0_4px_10px_rgba(24,60,65,0.05)] sm:p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[#E1F7F5]"><img src={icon} alt="" className="h-4 w-4 object-contain" /></span>
              <div><h3 className="font-['Arimo'] text-[12px] font-bold text-[#092B31] sm:text-[13px]">{title}</h3><p className="mt-1 text-[9px] leading-[1.5] text-[#70868B] sm:text-[10px]">{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandingWhy;
